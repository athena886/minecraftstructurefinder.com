import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the product and required SEO source", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /<title>Minecraft Structure Finder - Find Any Structure by Seed<\/title>/i);
  assert.match(html, /<meta name="description" content="[^"]*Minecraft Structure Finder[^"]*seed[^"]*Java and Bedrock/i);
  assert.match(html, /<h1[^>]*>Minecraft Structure Finder<\/h1>/i);
  assert.match(html, /Enter your Minecraft seed/);
  assert.match(html, /Find Structures/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
});

test("ships the local browser engine and map assets", async () => {
  await Promise.all([
    access(new URL("../public/wasm/cubiomes.wasm", import.meta.url)),
    access(new URL("../public/wasm/cubiomes.mjs", import.meta.url)),
    access(new URL("../public/vendor/leaflet.js", import.meta.url)),
    access(new URL("../public/js/search-worker.js", import.meta.url)),
  ]);
});
