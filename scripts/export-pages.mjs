import { mkdir, writeFile } from "node:fs/promises";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("export", Date.now().toString());
const { default: worker } = await import(workerUrl.href);

const routes = [
  "/",
  "/village-finder",
  "/stronghold-finder",
  "/ancient-city-finder",
  "/trial-chambers-finder",
  "/woodland-mansion-finder",
];

for (const route of routes) {
  const response = await worker.fetch(
    new Request(`https://minecraftstructurefinder.com${route}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );

  if (!response.ok) throw new Error(`Static export failed for ${route} with ${response.status}`);

  let html = await response.text();
  html = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, (tag) =>
    /type="application\/ld\+json"/.test(tag) ||
    /src="\/(?:vendor\/leaflet\.js|js\/app(?:-p1)?\.js(?:\?[^\"]*)?)"/.test(tag)
      ? tag
      : "",
  );
  html = html.replace(/<link\b[^>]*rel="(?:modulepreload|preload)"[^>]*>/gi, "");
  html = html.replace(/<!--\$[^>]*-->|<!--\/\$-->/g, "");
  html = html.replace(/\sdata-(?:rsc-css-href|precedence)="[^"]*"/g, "");

  const output = route === "/"
    ? new URL("../dist/client/index.html", import.meta.url)
    : new URL(`../dist/client${route}/index.html`, import.meta.url);
  await mkdir(new URL("./", output), { recursive: true });
  await writeFile(output, html);
}

console.log("Static Cloudflare Pages export ready: dist/client");
