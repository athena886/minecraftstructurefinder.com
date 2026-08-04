import { getStructure } from "./structures.js";

const list = document.querySelector("#result-list");
const count = document.querySelector("#result-count");
const filters = document.querySelector("#filter-row");
let currentItems = [];
let activeKey = "all";
let selectionHandler = () => {};

const descriptions = {
  "village": "Trading & iron golem spawns",
  "ancient-city": "Swift Sneak enchantment, Warden danger",
  "trial-chambers": "Trial keys, breeze rods, mace",
  "stronghold": "End portal location",
  "woodland-mansion": "Totems of undying, vexes",
  "ocean-monument": "Sponges, prismarine, guardians",
  "desert-pyramid": "TNT trap, enchanted golden apples",
  "jungle-temple": "Dispenser traps, treasure chests",
  "pillager-outpost": "Crossbows, bad omen banner",
  "nether-fortress": "Blaze rods, wither skeletons",
  "bastion-remnant": "Piglin trades, gold blocks",
  "end-city": "Elytra, shulker shells",
  "ruined-portal": "Loot chest, crying obsidian",
  "igloo": "Secret basement, golden apple",
  "shipwreck": "Buried treasure map",
};

const relatedTools = `<div class="related-tools">
  <span>Try also:</span>
  <a href="#">Village Finder</a>
  <span aria-hidden="true">·</span>
  <a href="#">Ancient City Finder</a>
  <span aria-hidden="true">·</span>
  <a href="#">Stronghold Finder</a>
</div>`;

function distance(item) { return Math.round(Math.hypot(item.x, item.z)); }
function meters(value) { return value >= 1000 ? `${(value / 1000).toFixed(1)}k blocks` : `${value} blocks`; }

function renderItems() {
  const visible = currentItems.filter((item) => activeKey === "all" || getStructure(item.type).key === activeKey);
  if (!visible.length) {
    list.innerHTML = `<div class="results-empty"><span aria-hidden="true">⌖</span><strong>No matching structures</strong><p>Try another dimension, version, seed, or search radius.</p></div>`;
    return;
  }
  list.innerHTML = visible.map((item) => {
    const structure = getStructure(item.type);
    const description = descriptions[structure.key];
    return `<div class="result-item" data-index="${item.index}" role="button" tabindex="0">
      <span class="structure-icon" style="background:${structure.color}" aria-hidden="true">${structure.icon}</span>
      <span class="result-meta"><strong>${structure.name}</strong>${description ? `<span class="structure-description">${description}</span>` : ""}<span class="coordinate">X ${item.x}, Z ${item.z}</span><span class="distance">${meters(distance(item))} from origin</span></span>
      <button class="copy-button" type="button" data-copy="${item.x} ${item.z}" aria-label="Copy ${structure.name} coordinates">Copy</button>
    </div>`;
  }).join("") + relatedTools;
}

export function renderResults(items, onSelect) {
  selectionHandler = onSelect;
  currentItems = [...items].sort((a, b) => distance(a) - distance(b)).map((item, index) => ({ ...item, index }));
  count.textContent = `${currentItems.length} found`;
  const types = [...new Map(currentItems.map((item) => [getStructure(item.type).key, getStructure(item.type)])).values()];
  activeKey = "all";
  filters.innerHTML = [`<button class="filter-chip active" data-filter="all">All</button>`, ...types.map((type) => `<button class="filter-chip" data-filter="${type.key}">${type.name}</button>`)].join("");
  renderItems();
  return currentItems;
}

filters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  activeKey = button.dataset.filter;
  filters.querySelectorAll(".filter-chip").forEach((chip) => chip.classList.toggle("active", chip === button));
  renderItems();
});

list.addEventListener("click", async (event) => {
  const copy = event.target.closest("[data-copy]");
  if (copy) {
    event.stopPropagation();
    await navigator.clipboard.writeText(copy.dataset.copy);
    const old = copy.textContent;
    copy.textContent = "Copied";
    setTimeout(() => copy.textContent = old, 1200);
    return;
  }
  const row = event.target.closest("[data-index]");
  if (row) selectionHandler(Number(row.dataset.index));
});

list.addEventListener("keydown", (event) => {
  const row = event.target.closest("[data-index]");
  if (row && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    selectionHandler(Number(row.dataset.index));
  }
});

export function setLoading(loading) {
  document.querySelector("#loading").hidden = !loading;
  document.querySelector("#search-button").disabled = loading;
}

export function showMessage(message, isError = false) {
  const target = document.querySelector("#seed-help");
  target.textContent = message;
  target.classList.toggle("error", isError);
}
