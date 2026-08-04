let worker;
let requestId = 0;

export function findStructures({ seed, version, dimension, radius }) {
  if (!worker) worker = new Worker("/js/search-worker.js", { type: "module" });
  const id = ++requestId;
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error("The structure search took too long. Try a smaller radius.")), 45000);
    const handler = (event) => {
      if (event.data.id !== id) return;
      clearTimeout(timeout);
      worker.removeEventListener("message", handler);
      if (event.data.error) reject(new Error(event.data.error));
      else resolve(event.data.results);
    };
    worker.addEventListener("message", handler);
    worker.postMessage({ id, seed: seed.toString(), version, dimension, radius });
  });
}
