import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

async function renderPath(pathname) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }), {
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
  assert.equal((html.match(/class="structure-card(?: linked)?"/g) ?? []).length, 15);
  assert.match(html, /<a href="\/village-finder\/" class="structure-card linked"/i);
  assert.match(html, /type="application\/ld\+json"/i);
  assert.match(html, /"@type":"FAQPage"/i);
  assert.match(html, /"@type":"SoftwareApplication"/i);
  assert.match(html, /"@type":"WebSite"/i);
  const visibleText = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
  const wordCount = visibleText.split(/\s+/).length;
  assert.ok(wordCount >= 1200, `Homepage has ${wordCount} visible words`);
  assert.ok(wordCount <= 1800, `Homepage has ${wordCount} visible words`);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
});

test("server-renders five focused structure guide pages", async () => {
  const routes = [
    ["/village-finder", "Village Finder"],
    ["/stronghold-finder", "Stronghold Finder"],
    ["/ancient-city-finder", "Ancient City Finder"],
    ["/trial-chambers-finder", "Trial Chambers Finder"],
    ["/woodland-mansion-finder", "Woodland Mansion Finder"],
  ];

  for (const [route, heading] of routes) {
    const response = await renderPath(route);
    assert.equal(response.status, 200, route);
    const html = await response.text();
    assert.match(html, new RegExp(`<title>[^<]*${heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[^<]*<\\/title>`, "i"), route);
    assert.match(html, new RegExp(`<link rel="canonical" href="https://minecraftstructurefinder\\.com${route}\/"`, "i"), route);
    assert.match(html, /type="application\/ld\+json"/i, route);
    assert.match(html, /"@type":"BreadcrumbList"/i, route);
    assert.match(html, /class="related-guides"/i, route);
    const visibleText = html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/&[a-z#0-9]+;/gi, " ")
      .replace(/\s+/g, " ")
      .trim();
    const wordCount = visibleText.split(/\s+/).length;
    assert.ok(wordCount >= 800, `${route} has ${wordCount} visible words`);
    assert.ok(wordCount <= 1200, `${route} has ${wordCount} visible words`);
  }
});

test("ships the local browser engine and map assets", async () => {
  await Promise.all([
    access(new URL("../public/wasm/cubiomes.wasm", import.meta.url)),
    access(new URL("../public/wasm/cubiomes.mjs", import.meta.url)),
    access(new URL("../public/vendor/leaflet.js", import.meta.url)),
    access(new URL("../public/js/app-p1.js", import.meta.url)),
    access(new URL("../public/js/ui-p1.js", import.meta.url)),
    access(new URL("../public/js/search-worker.js", import.meta.url)),
  ]);
});

test("ships crawl controls and a real 404 page", async () => {
  const [robots, sitemap, notFound] = await Promise.all([
    readFile(new URL("../public/robots.txt", import.meta.url), "utf8"),
    readFile(new URL("../public/sitemap.xml", import.meta.url), "utf8"),
    readFile(new URL("../public/404.html", import.meta.url), "utf8"),
  ]);
  assert.match(robots, /^User-agent: \*$/m);
  assert.match(robots, /^Allow: \/$/m);
  assert.match(robots, /^Sitemap: https:\/\/minecraftstructurefinder\.com\/sitemap\.xml$/m);
  assert.match(sitemap, /^<\?xml version="1\.0" encoding="UTF-8"\?>/);
  assert.match(sitemap, /<loc>https:\/\/minecraftstructurefinder\.com\/<\/loc>/);
  assert.equal((sitemap.match(/<url>/g) ?? []).length, 6);
  assert.match(sitemap, /<loc>https:\/\/minecraftstructurefinder\.com\/village-finder\/<\/loc>/);
  assert.match(sitemap, /<loc>https:\/\/minecraftstructurefinder\.com\/stronghold-finder\/<\/loc>/);
  assert.match(sitemap, /<loc>https:\/\/minecraftstructurefinder\.com\/ancient-city-finder\/<\/loc>/);
  assert.match(notFound, /<meta name="robots" content="noindex">/);
  assert.match(notFound, /Page not found/);
});
