# Minecraft Structure Finder

A fast, privacy-first structure coordinate finder for Minecraft seeds. Structure placement is calculated locally in the browser by an MIT-licensed [cubiomes](https://github.com/Cubitect/cubiomes) WebAssembly build. The interface uses Leaflet with its Canvas renderer.

## Features

- Java 1.12–1.21 selector and Overworld, Nether, and End dimensions
- Interactive coordinate map and nearest-first structure list
- Copyable X/Z coordinates and shareable `?seed=` URLs
- Responsive layout, local Web Worker search, no backend or seed uploads
- Villages, ancient cities, trial chambers, strongholds, mansions, monuments, temples, outposts, ruined portals, igloos, shipwrecks, fortresses, bastions, and End cities

Bedrock is visible as a preview option, but the current cubiomes engine validates Java structure placement only. The UI prevents inaccurate Bedrock results.

## Local development

```bash
npm install
npm run dev
```

Build and test with:

```bash
npm test
```

## WASM provenance

`public/wasm/cubiomes.wasm` is compiled from the official `Cubitect/cubiomes` source with a small bridge in `engine/cubiomes_bridge.c`. The upstream MIT license is included at `public/wasm/LICENSE-cubiomes.txt`.

This project is independent and is not affiliated with Mojang or Microsoft.
