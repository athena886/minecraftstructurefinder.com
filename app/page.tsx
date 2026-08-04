import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Minecraft Structure Finder - Find Any Structure by Seed",
  description:
    "Free Minecraft Structure Finder. Enter any seed to find every village, stronghold, ancient city & more. Works for Java & Bedrock. No download.",
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

          <button id="search-button" className="btn-primary" type="submit">
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

      <section className="structures-showcase" aria-labelledby="structures-heading">
        <div className="container">
          <p className="eyebrow">Supported structures</p>
          <h2 id="structures-heading">Structures we can find</h2>
          <div className="structures-grid">
            <div className="structure-card"><span className="struct-icon" aria-hidden="true">🏘️</span><span>Village</span></div>
            <div className="structure-card"><span className="struct-icon" aria-hidden="true">🏛️</span><span>Ancient City</span></div>
            <div className="structure-card"><span className="struct-icon" aria-hidden="true">⚔️</span><span>Trial Chambers</span></div>
            <div className="structure-card"><span className="struct-icon" aria-hidden="true">👁️</span><span>Stronghold</span></div>
            <div className="structure-card"><span className="struct-icon" aria-hidden="true">🏰</span><span>Woodland Mansion</span></div>
            <div className="structure-card"><span className="struct-icon" aria-hidden="true">🌊</span><span>Ocean Monument</span></div>
            <div className="structure-card"><span className="struct-icon" aria-hidden="true">🏜️</span><span>Desert Pyramid</span></div>
            <div className="structure-card"><span className="struct-icon" aria-hidden="true">🌿</span><span>Jungle Temple</span></div>
            <div className="structure-card"><span className="struct-icon" aria-hidden="true">🏹</span><span>Pillager Outpost</span></div>
            <div className="structure-card"><span className="struct-icon" aria-hidden="true">🔥</span><span>Nether Fortress</span></div>
            <div className="structure-card"><span className="struct-icon" aria-hidden="true">💀</span><span>Bastion Remnant</span></div>
            <div className="structure-card"><span className="struct-icon" aria-hidden="true">🟣</span><span>End City</span></div>
            <div className="structure-card"><span className="struct-icon" aria-hidden="true">🌀</span><span>Ruined Portal</span></div>
            <div className="structure-card"><span className="struct-icon" aria-hidden="true">❄️</span><span>Igloo</span></div>
            <div className="structure-card"><span className="struct-icon" aria-hidden="true">⛵</span><span>Shipwreck</span></div>
          </div>
        </div>
      </section>

      <section className="faq-section" aria-labelledby="faq-heading">
        <div className="container">
          <p className="eyebrow">Seed finder guide</p>
          <h2 id="faq-heading">How to use this Minecraft Structure Finder</h2>

          <div className="faq-list">
            <article>
              <h3>What is a Minecraft seed?</h3>
              <p>A seed is a number or string that generates your Minecraft world. Every seed produces a unique layout of biomes and structures. Share seeds with friends to explore the same world.</p>
              <p>Minecraft converts the seed into the starting data used by world generation. The same seed, edition, and version will reproduce the same broad world layout, which makes a seed useful for planning survival bases, speedruns, exploration routes, and multiplayer worlds. Version selection matters because generation rules change between major updates, so always match the finder to the version used when your world was created.</p>
            </article>

            <article>
              <h3>How do I find my seed?</h3>
              <p>In Java Edition, type <code>/seed</code> in the chat. In Bedrock Edition, go to Settings → Game → Seed. On existing worlds, the seed is shown in the world settings menu.</p>
              <p>If a Java server blocks the command, ask the server owner or check the server configuration. Copy the complete value, including a minus sign when one is present. Text seeds also work because Minecraft converts text into a numeric value. Before searching, confirm whether the world uses Java or Bedrock and select the closest supported game version so that the finder applies the correct structure rules.</p>
            </article>

            <article>
              <h3>Which structures can this tool find?</h3>
              <p>This finder locates over 15 structure types including Villages, Ancient Cities, Trial Chambers, Strongholds, Woodland Mansions, Ocean Monuments, Desert &amp; Jungle Temples, Pillager Outposts, Nether Fortresses, Bastion Remnants, End Cities, Ruined Portals, Igloos, and Shipwrecks. Works for both Java and Bedrock editions.</p>
              <p>Switch between the Overworld, Nether, and End to see structures that belong to each dimension. Use the radius menu to balance search coverage and speed, then filter the result list by structure type. Every result is sorted by distance from the world origin, so nearby options appear first. Selecting a result centers the interactive map and opens its coordinate marker for quick route planning.</p>
            </article>

            <article>
              <h3>Does this work for Bedrock Edition?</h3>
              <p>Yes. Select &quot;Bedrock&quot; from the version dropdown and enter your seed. The structure generation algorithm differs slightly between Java and Bedrock, and our tool handles both correctly.</p>
              <p>Always choose the edition that matches the world you play. A Java seed can be entered in Bedrock and vice versa, but structure placement may differ because the editions do not share every generation rule. If a coordinate looks unexpected, double-check the edition, version, and dimension before travelling. Worlds upgraded across several Minecraft releases can also contain older generated chunks beside newly generated terrain.</p>
            </article>

            <article>
              <h3>Is this tool free?</h3>
              <p>Completely free. No download, no sign-up, no ads. Everything runs in your browser — your seed never leaves your device.</p>
              <p>The structure calculation uses WebAssembly locally, which means there is no world upload and no account to manage. You can start with the demo seed, replace it with your own seed, and copy any coordinate immediately. The lightweight page keeps the map, filters, and coordinate list together without requiring a launcher mod, data pack, desktop program, or browser extension.</p>
            </article>

            <article>
              <h3>How accurate are the coordinates?</h3>
              <p>Coordinates are generated using the same algorithm Minecraft uses (via cubiomes). They are exact to the block. Click any structure on the map or in the list to copy its coordinates, then navigate there in-game.</p>
              <p>Use the displayed X and Z values for horizontal navigation and determine the safe Y level in the game. Some structure candidates depend on surrounding terrain or biome checks and may not appear in already-generated or heavily modified chunks. For the best match, verify your game version and explore fresh terrain. Nether travel can shorten Overworld journeys, but remember that one Nether block corresponds to eight Overworld blocks.</p>
            </article>

            <article>
              <h3>What&apos;s the difference between this and Chunkbase?</h3>
              <p>Chunkbase&apos;s Seed Map shows biomes and slime chunks alongside structures. This tool focuses exclusively on structures — faster to load, simpler to use, and gives you a clean coordinate list alongside the map. If you just want to find structures quickly, this is the tool for you.</p>
              <p>The focused layout is designed for one task: enter a Minecraft seed, choose the correct world settings, and find useful destinations. The map gives spatial context while the list makes coordinates easy to scan and copy on a phone, tablet, or desktop. Because biome coloring and unrelated overlays are omitted, structure markers stay readable even when a large search radius returns hundreds of possible locations.</p>
            </article>
          </div>
        </div>
      </section>

      <footer>
        <p><strong>Minecraft Structure Finder</strong> is an independent tool and is not affiliated with Mojang or Microsoft.</p>
        <p>Structure placement powered by <a href="https://github.com/Cubitect/cubiomes" rel="noreferrer">cubiomes</a>. Some terrain-dependent candidates may not generate in-game.</p>
      </footer>

      <script src="/vendor/leaflet.js" defer />
      <script type="module" src="/js/app-p1.js" />
    </main>
  );
}
