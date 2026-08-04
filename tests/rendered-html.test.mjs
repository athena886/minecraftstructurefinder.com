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
  const description = html.match(/<meta name="description" content="([^"]+)"/i)?.[1] ?? "";
  assert.equal(description, "Free Minecraft Structure Finder. Enter any seed to find every village, stronghold, ancient city &amp; more. Works for Java &amp; Bedrock. No download.");
  assert.ok(description.length <= 160, `Meta description is ${description.length} characters`);
  assert.match(html, /<meta property="og:description" content="Find villages, strongholds, ancient cities and more from any Minecraft seed\."/i);
  assert.match(html, /<h1[^>]*>Minecraft Structure Finder<\/h1>/i);
  assert.match(html, /Enter your Minecraft seed/);
  assert.match(html, /Find Structures/);
  assert.match(html, /How to use this Minecraft Structure Finder/);
  assert.match(html, /Structures we can find/);
  assert.match(html, /Shipwreck/);
  assert.equal((html.match(/class="structure-card"/g) ?? []).length, 15);
  const visibleText = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
  assert.ok(visibleText.split(/\s+/).length >= 1000);
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
