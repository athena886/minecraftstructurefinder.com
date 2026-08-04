import { mkdir, writeFile } from "node:fs/promises";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("export", Date.now().toString());
const { default: worker } = await import(workerUrl.href);

const response = await worker.fetch(
  new Request("https://minecraftstructurefinder.com/", { headers: { accept: "text/html" } }),
  { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
  { waitUntil() {}, passThroughOnException() {} },
);

if (!response.ok) throw new Error(`Static export failed with ${response.status}`);

let html = await response.text();
html = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, (tag) =>
  /src="\/(?:vendor\/leaflet\.js|js\/app\.js(?:\?[^\"]*)?)"/.test(tag) ? tag : "",
);
html = html.replace(/<link\b[^>]*rel="(?:modulepreload|preload)"[^>]*>/gi, "");
html = html.replace(/<!--\$[^>]*-->|<!--\/\$-->/g, "");
html = html.replace(/\sdata-(?:rsc-css-href|precedence)="[^"]*"/g, "");

await mkdir(new URL("../dist/client/", import.meta.url), { recursive: true });
await writeFile(new URL("../dist/client/index.html", import.meta.url), html);

console.log("Static Cloudflare Pages export ready: dist/client");
