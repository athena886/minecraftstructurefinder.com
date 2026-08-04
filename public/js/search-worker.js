import createCubiomesModule from "/wasm/cubiomes.mjs";

let enginePromise;
const dimensionCode = { overworld: 0, nether: -1, end: 1 };

function getEngine() {
  if (!enginePromise) {
    enginePromise = createCubiomesModule({ locateFile: (file) => `/wasm/${file}` });
  }
  return enginePromise;
}

self.addEventListener("message", async (event) => {
  const { id, seed, version, dimension, radius } = event.data;
  try {
    const engine = await getEngine();
    const count = engine._msf_find(BigInt(seed), Number(version), dimensionCode[dimension], Number(radius));
    const pointer = engine._msf_result_ptr() >> 2;
    const results = [];
    for (let i = 0; i < count; i++) {
      const offset = pointer + 1 + i * 3;
      results.push({ type: engine.HEAP32[offset], x: engine.HEAP32[offset + 1], z: engine.HEAP32[offset + 2] });
    }
    self.postMessage({ id, results });
  } catch (error) {
    self.postMessage({ id, error: error?.message || "WASM engine failed to load. Refresh and try again." });
  }
});
