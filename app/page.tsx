import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Minecraft Structure Finder - Find Any Structure by Seed",
  description:
    "Free Minecraft Structure Finder. Enter any seed to instantly locate Villages, Ancient Cities, Trial Chambers, Strongholds and more. Works for Java and Bedrock. Like Chunkbase but focused on structures.",
};

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/" aria-label="Minecraft Structure Finder home">
          <span className="brand-block" aria-hidden="true" />
          <span>Structure Finder</span>
        </a>
        <span className="privacy-note"><span aria-hidden="true">◆</span> Runs on your device</span>
      </header>

      <section className="intro" aria-labelledby="page-title">
        <div>
          <p className="eyebrow">Fast • private • no world upload</p>
          <h1 id="page-title">Minecraft Structure Finder</h1>
          <p className="lede">Find villages, strongholds, ancient cities and more from any Minecraft seed.</p>
        </div>

        <form id="search-form" className="search-panel" noValidate>
          <label className="seed-field">
            <span>World seed</span>
            <input id="seed-input" name="seed" type="text" inputMode="text" autoComplete="off" placeholder="Enter your Minecraft seed..." aria-describedby="seed-help" />
          </label>

          <label>
            <span>Version</span>
            <select id="version-select" name="version" defaultValue="java_1.21">
              <optgroup label="Java Edition">
                <option value="java_1.21">Java 1.21</option>
                <option value="java_1.20">Java 1.20</option>
                <option value="java_1.19">Java 1.19</option>
                <option value="java_1.18">Java 1.18</option>
                <option value="java_1.17">Java 1.17</option>
                <option value="java_1.16">Java 1.16</option>
                <option value="java_1.15">Java 1.15</option>
                <option value="java_1.14">Java 1.14</option>
                <option value="java_1.13">Java 1.13</option>
                <option value="java_1.12">Java 1.12</option>
              </optgroup>
              <optgroup label="Bedrock Edition">
                <option value="bedrock_latest">Bedrock latest (preview)</option>
              </optgroup>
            </select>
          </label>

          <div className="dimension-field">
            <span>Dimension</span>
            <div className="segmented" role="radiogroup" aria-label="Minecraft dimension">
              <label><input type="radio" name="dimension" value="overworld" defaultChecked /><span>Overworld</span></label>
              <label><input type="radio" name="dimension" value="nether" /><span>Nether</span></label>
              <label><input type="radio" name="dimension" value="end" /><span>End</span></label>
            </div>
          </div>

          <button id="search-button" type="submit">
            <span className="button-icon" aria-hidden="true">⌖</span>
            <span>Find Structures</span>
          </button>
          <p id="seed-help" className="form-message" role="status">Java results are powered by cubiomes WebAssembly.</p>
        </form>
      </section>

      <section className="finder-shell" aria-label="Minecraft structure search results">
        <div className="map-panel">
          <div className="map-toolbar">
            <div>
              <span className="toolbar-kicker">Interactive map</span>
              <strong id="map-title">Explore around spawn</strong>
            </div>
            <div className="map-actions">
              <label className="radius-control">Radius
                <select id="radius-select" defaultValue="5000">
                  <option value="3000">3,000 blocks</option>
                  <option value="5000">5,000 blocks</option>
                  <option value="8000">8,000 blocks</option>
                  <option value="12000">12,000 blocks</option>
                </select>
              </label>
              <button id="reset-map" className="secondary-button" type="button">Center 0, 0</button>
            </div>
          </div>
          <div id="map" aria-label="Map of Minecraft structure coordinates" />
          <div id="map-empty" className="map-empty">
            <div className="compass" aria-hidden="true"><span>N</span><i /></div>
            <strong>Discover what&apos;s hiding in your seed</strong>
            <p>We&apos;ll show you every village, stronghold, and ancient city — all rendered in your browser.</p>
          </div>
          <div id="loading" className="loading-overlay" hidden>
            <div className="loader" aria-hidden="true" />
            <strong>Searching this Minecraft seed…</strong>
            <span>Calculating structure positions on your device</span>
          </div>
        </div>

        <aside className="results-panel" aria-labelledby="results-heading">
          <div className="results-heading">
            <div>
              <span className="toolbar-kicker">Nearest first</span>
              <h2 id="results-heading">Structure coordinates</h2>
            </div>
            <span id="result-count" className="count-badge">0 found</span>
          </div>
          <p id="demo-notice" className="demo-notice" hidden>Showing demo seed <span aria-hidden="true">·</span> Try your own seed above</p>
          <div id="filter-row" className="filter-row" aria-label="Filter structure results" />
          <div id="result-list" className="result-list">
            <div className="results-empty">
              <span aria-hidden="true">⌖</span>
              <strong>Waiting for a seed to explore</strong>
              <p>Map markers and exact coordinates will appear here.</p>
            </div>
          </div>
        </aside>
      </section>

      <section className="how-it-works" aria-labelledby="how-heading">
        <div>
          <p className="eyebrow">Three quick steps</p>
          <h2 id="how-heading">How to find Minecraft structures</h2>
        </div>
        <ol>
          <li><span>1</span><div><strong>Paste your seed</strong><p>Use a numeric seed or the text you used when creating the world.</p></div></li>
          <li><span>2</span><div><strong>Match your world</strong><p>Select the Java version and dimension you want to explore.</p></div></li>
          <li><span>3</span><div><strong>Pick a structure</strong><p>Tap any result to center the map, then copy its X and Z coordinates.</p></div></li>
        </ol>
      </section>

      <section className="structures-grid" aria-labelledby="structures-heading">
        <div className="structures-heading">
          <p className="eyebrow">Supported structures</p>
          <h2 id="structures-heading">Structures we can find</h2>
        </div>
        <div className="grid">
          <div><span aria-hidden="true">⌂</span><strong>Village</strong></div>
          <div><span aria-hidden="true">✦</span><strong>Ancient City</strong></div>
          <div><span aria-hidden="true">⬡</span><strong>Trial Chambers</strong></div>
          <div><span aria-hidden="true">♜</span><strong>Stronghold</strong></div>
          <div><span aria-hidden="true">▦</span><strong>Woodland Mansion</strong></div>
          <div><span aria-hidden="true">♜</span><strong>Ocean Monument</strong></div>
          <div><span aria-hidden="true">▲</span><strong>Desert Pyramid</strong></div>
          <div><span aria-hidden="true">◆</span><strong>Jungle Temple</strong></div>
          <div><span aria-hidden="true">♜</span><strong>Pillager Outpost</strong></div>
          <div><span aria-hidden="true">♜</span><strong>Nether Fortress</strong></div>
          <div><span aria-hidden="true">▦</span><strong>Bastion Remnant</strong></div>
          <div><span aria-hidden="true">✧</span><strong>End City</strong></div>
          <div><span aria-hidden="true">◇</span><strong>Ruined Portal</strong></div>
          <div><span aria-hidden="true">⌂</span><strong>Igloo</strong></div>
          <div><span aria-hidden="true">⚓</span><strong>Shipwreck</strong></div>
        </div>
      </section>

      <footer>
        <p><strong>Minecraft Structure Finder</strong> is an independent tool and is not affiliated with Mojang or Microsoft.</p>
        <p>Structure placement powered by <a href="https://github.com/Cubitect/cubiomes" rel="noreferrer">cubiomes</a>. Some terrain-dependent candidates may not generate in-game.</p>
      </footer>

      <script src="/vendor/leaflet.js" defer />
      <script type="module" src="/js/app.js" />
    </main>
  );
}
