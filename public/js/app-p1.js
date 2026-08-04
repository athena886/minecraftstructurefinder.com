import { findStructures } from "./wasm-loader.js";
import { initMap, setMarkers, focusMarker, resetMap } from "./map.js";
import { renderResults, setLoading, showMessage } from "./ui-p1.js";

const form = document.querySelector("#search-form");
const seedInput = document.querySelector("#seed-input");
const versionSelect = document.querySelector("#version-select");
const radiusSelect = document.querySelector("#radius-select");
const emptyState = document.querySelector("#map-empty");
const demoNotice = document.querySelector("#demo-notice");
const demoSeed = "-3435226823721187965";
initMap();

function stringSeed(text) {
  let hash = 0;
  for (let i = 0; i < text.length; i++) hash = Math.imul(31, hash) + text.charCodeAt(i) | 0;
  return BigInt(hash);
}

function parseSeed(value) {
  const cleaned = value.trim();
  if (!cleaned) throw new Error("Enter a Minecraft seed to find structures.");
  if (/^[+-]?\d+$/.test(cleaned)) {
    const seed = BigInt(cleaned);
    if (seed < -9223372036854775808n || seed > 18446744073709551615n) throw new Error("Seed must fit in Minecraft's 64-bit range.");
    return BigInt.asIntN(64, seed);
  }
  return stringSeed(cleaned);
}

function getDimension() { return form.elements.dimension.value; }
function versionCode(value) { return Number(value.split("_").at(-1).replace(".", "")); }

async function runSearch(updateUrl = true, isDemo = false) {
  try {
    demoNotice.hidden = !isDemo;
    const seed = parseSeed(seedInput.value);
    if (versionSelect.value.startsWith("bedrock")) {
      throw new Error("Bedrock structure placement differs from Java. Accurate Bedrock search is coming next; choose Java for verified results.");
    }
    setLoading(true);
    showMessage("Searching Minecraft structure positions locally…");
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    const raw = await findStructures({ seed, version: versionCode(versionSelect.value), dimension: getDimension(), radius: Number(radiusSelect.value) });
    const sorted = renderResults(raw, focusMarker);
    setMarkers(sorted, focusMarker);
    emptyState.hidden = true;
    document.querySelector("#map-title").textContent = `${getDimension()[0].toUpperCase()}${getDimension().slice(1)} • seed ${seedInput.value.trim()}`;
    showMessage(raw.length ? `Found ${raw.length} structure locations within ${Number(radiusSelect.value).toLocaleString()} blocks.` : "No structure candidates found in this radius. Try a larger radius.");
    if (updateUrl) {
      const params = new URLSearchParams({ seed: seedInput.value.trim(), version: versionSelect.value, dimension: getDimension() });
      history.replaceState(null, "", `?${params}`);
    }
  } catch (error) {
    demoNotice.hidden = true;
    showMessage(error.message || "WASM failed to load. Refresh the page and try again.", true);
  } finally {
    setLoading(false);
  }
}

form.addEventListener("submit", (event) => { event.preventDefault(); runSearch(true, false); });
document.querySelector("#reset-map").addEventListener("click", resetMap);

const params = new URLSearchParams(location.search);
if (params.has("seed")) {
  seedInput.value = params.get("seed");
  if (params.has("version") && [...versionSelect.options].some((option) => option.value === params.get("version"))) versionSelect.value = params.get("version");
  const dimension = params.get("dimension") || "overworld";
  const radio = form.querySelector(`[name="dimension"][value="${dimension}"]`);
  if (radio) radio.checked = true;
  runSearch(false);
} else {
  seedInput.value = demoSeed;
  runSearch(false, true);
}
