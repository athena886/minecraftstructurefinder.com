import { getStructure } from "./structures.js";

let map;
let layer;
let markers = new Map();

export function initMap() {
  const renderer = L.canvas({ padding: 0.45 });
  map = L.map("map", { crs: L.CRS.Simple, minZoom: -5, maxZoom: 3, zoomControl: true, renderer, attributionControl: false, preferCanvas: true });
  map.setView([0, 0], -2);
  L.control.scale({ imperial: false, maxWidth: 130 }).addTo(map);
  layer = L.layerGroup().addTo(map);
  L.circleMarker([0, 0], { radius: 5, color: "#252a26", weight: 2, fillColor: "#fff", fillOpacity: 1, renderer }).addTo(map).bindTooltip("World origin (0, 0)");
  return map;
}

function toPoint(item) { return [-item.z, item.x]; }

export function setMarkers(items, onSelect) {
  layer.clearLayers();
  markers.clear();
  const renderer = L.canvas({ padding: 0.45 });
  items.forEach((item, index) => {
    const structure = getStructure(item.type);
    const marker = L.circleMarker(toPoint(item), {
      renderer, radius: 7, color: "#fff", weight: 2, fillColor: structure.color, fillOpacity: 1,
    }).addTo(layer);
    marker.bindPopup(`<div class="map-popup"><strong>${structure.name}</strong><code>X ${item.x}, Z ${item.z}</code></div>`);
    marker.on("click", () => onSelect(index));
    markers.set(index, marker);
  });
  if (items.length) {
    const bounds = L.latLngBounds(items.map(toPoint));
    map.fitBounds(bounds.pad(.1), { maxZoom: 0, animate: false });
  }
}

export function focusMarker(index) {
  const marker = markers.get(index);
  if (!marker) return;
  map.flyTo(marker.getLatLng(), Math.max(map.getZoom(), 0), { duration: .55 });
  marker.openPopup();
}

export function resetMap() { map.flyTo([0, 0], -2, { duration: .45 }); }
