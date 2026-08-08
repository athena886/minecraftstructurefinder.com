export type StructureGuide = {
  slug: string;
  name: string;
  icon: string;
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  quickFacts: { label: string; value: string }[];
  sections: { heading: string; paragraphs: string[] }[];
  faq: { question: string; answer: string }[];
};

export const structureGuides: StructureGuide[] = [
  {
    slug: "village-finder",
    name: "Village",
    icon: "🏘️",
    title: "Minecraft Village Finder - Find Villages by Seed",
    description: "Find Minecraft villages by seed with an interactive map and exact X/Z coordinates. Plan Java survival routes and locate nearby village candidates free.",
    eyebrow: "Overworld structure guide",
    intro: "Use the free Minecraft Village Finder to locate village candidates around spawn, compare their distance, and copy exact X and Z coordinates before you travel. The calculation runs in your browser, so your seed stays on your device.",
    quickFacts: [
      { label: "Dimension", value: "Overworld" },
      { label: "Best for", value: "Trading and early survival" },
      { label: "Search method", value: "Seed + version" },
    ],
    sections: [
      {
        heading: "How to find a village from a Minecraft seed",
        paragraphs: [
          "Enter the world seed in the main Minecraft Structure Finder, select the Java version that matches the world, keep Overworld selected, and choose a search radius. The map places village candidates around the origin while the coordinate list sorts them from nearest to farthest. Tap a result to center the map, then copy its coordinates for use in game.",
          "Matching the version is important because structure placement rules can change between releases. If the world was upgraded, already-generated chunks keep their original terrain while unexplored chunks follow newer generation rules. Search with the version that generated the area you plan to visit.",
        ],
      },
      {
        heading: "Why villages are useful",
        paragraphs: [
          "Villages can provide beds, food, shelter, workstations, iron golems, and access to villager trading. That makes a nearby village one of the most valuable early-game discoveries for a new survival world. Speedrunners may also use villages for beds and resources, while long-term players can build trading halls near a convenient location.",
          "A seed may contain many possible villages, so the nearest result is not always the best destination. Compare several markers and consider the travel direction, nearby terrain, and how the location fits your base plan. The map is designed to make that comparison faster than reading a plain list of coordinates.",
        ],
      },
      {
        heading: "Village biomes and verification",
        paragraphs: [
          "Villages commonly generate in plains, desert, savanna, taiga, snowy plains, and meadow environments, with building styles that match the surrounding biome. Structure placement starts with a candidate position, but final terrain and biome checks still matter. A candidate can occasionally be absent, altered, or partly buried in the finished world.",
          "When you reach the X and Z coordinates, explore the surrounding area rather than expecting the center of the village to land on one exact block. Confirm the seed, edition, version, and dimension if nothing appears. Commands such as /locate can provide an in-game comparison when cheats are enabled.",
        ],
      },
    ],
    faq: [
      { question: "Can I find the nearest village without loading my world?", answer: "Yes. Enter the seed and matching Java version to calculate village candidates in your browser, then use the nearest-first coordinate list." },
      { question: "Why is a village missing at the shown coordinates?", answer: "Check the edition and version first. Terrain, biome validation, upgraded chunks, or world modifications can also affect whether a candidate appears in game." },
      { question: "Does the village finder upload my seed?", answer: "No. Structure calculations run locally in your browser, and the site does not require an account or world upload." },
    ],
  },
  {
    slug: "stronghold-finder",
    name: "Stronghold",
    icon: "👁️",
    title: "Minecraft Stronghold Finder - Find Strongholds by Seed",
    description: "Find Minecraft strongholds by seed and view exact X/Z coordinates on an interactive map. Plan a faster route to an End portal in Java Edition.",
    eyebrow: "End portal route guide",
    intro: "Use the Minecraft Stronghold Finder to map stronghold positions from a Java world seed, compare distances, and plan your route to an End portal. Results are calculated locally and displayed as both map markers and copyable coordinates.",
    quickFacts: [
      { label: "Dimension", value: "Overworld" },
      { label: "Main reward", value: "End portal access" },
      { label: "Search method", value: "Seed + Java version" },
    ],
    sections: [
      {
        heading: "How to locate a stronghold by seed",
        paragraphs: [
          "Paste the seed into the main structure finder, select the correct Java release, choose Overworld, and run the search. Stronghold markers appear with X and Z coordinates, allowing you to compare likely destinations before spending Eyes of Ender. Choose a marker, copy the coordinates, and navigate toward it in the world.",
          "Strongholds follow a ring-based distribution around the world origin in modern Java versions. The closest marker by straight-line distance may be convenient, but terrain and Nether travel can make another stronghold faster to reach. Use the map to compare directions before committing resources to a long journey.",
        ],
      },
      {
        heading: "Preparing for the End portal",
        paragraphs: [
          "Bring Eyes of Ender, food, blocks, weapons, and tools for digging through underground rooms. The coordinate marks the stronghold area, not the portal room itself. Once nearby, throw an Eye of Ender to refine the approach, then dig carefully and explore corridors until you find the portal frame.",
          "An End portal requires up to twelve Eyes of Ender, though some frame blocks may already contain eyes. Carry extras because thrown eyes can break. Recording your surface entrance and placing clear markers reduces the chance of becoming lost in the stronghold maze.",
        ],
      },
      {
        heading: "Coordinates, versions, and world history",
        paragraphs: [
          "Use the exact seed value, including a leading minus sign, and match the world version whenever possible. A world upgraded across releases may contain structures generated under older rules in explored chunks. Newly explored regions can follow the newer version selected in the game.",
          "If the calculated position and an Eye of Ender disagree, verify the edition first because Java and Bedrock stronghold generation is not identical. This finder is most reliable with its validated Java cubiomes engine. In-game /locate commands can help verify the nearest generated stronghold when commands are available.",
        ],
      },
    ],
    faq: [
      { question: "Does a stronghold coordinate point directly to the portal room?", answer: "No. It identifies the stronghold area. You still need to enter the structure and explore its corridors to find the portal room." },
      { question: "How many strongholds exist in a Java world?", answer: "Modern Java worlds generate many strongholds in rings around the origin, giving players multiple possible End portal routes." },
      { question: "Should I still bring Eyes of Ender?", answer: "Yes. Coordinates reduce the search distance, while Eyes of Ender help confirm the approach and activate the End portal." },
    ],
  },
  {
    slug: "ancient-city-finder",
    name: "Ancient City",
    icon: "🏛️",
    title: "Minecraft Ancient City Finder - Find Cities by Seed",
    description: "Find Ancient Cities in Minecraft by seed with map markers and exact X/Z coordinates. Search Java worlds and plan safer Deep Dark expeditions.",
    eyebrow: "Deep Dark expedition guide",
    intro: "The Minecraft Ancient City Finder helps you identify Ancient City candidates from a seed before starting a dangerous Deep Dark expedition. Compare nearby markers, copy coordinates, and plan supplies without uploading your world.",
    quickFacts: [
      { label: "Dimension", value: "Overworld" },
      { label: "Typical area", value: "Deep Dark below mountains" },
      { label: "Main danger", value: "Warden and sculk shriekers" },
    ],
    sections: [
      {
        heading: "How to find an Ancient City by seed",
        paragraphs: [
          "Open the main finder, enter the complete seed, select Java 1.19 or newer, and search the Overworld. Ancient City candidates appear on the interactive coordinate map and in the nearest-first list. Copy the X and Z values for a promising location, then prepare to travel underground.",
          "Ancient Cities are tied closely to Deep Dark terrain and are often associated with large mountainous regions. The marker provides horizontal coordinates, but you must determine a safe Y level and route in game. Search caves or dig cautiously rather than dropping straight down into an unknown chamber.",
        ],
      },
      {
        heading: "What to bring into the Deep Dark",
        paragraphs: [
          "Wool is extremely useful because it can block vibrations and help you move around sculk sensors more quietly. Bring food, tools, blocks, night vision if available, and storage space for loot. Avoid unnecessary movement near naturally generated sculk shriekers, which can escalate warnings and summon the Warden.",
          "The Warden is designed as a threat to avoid rather than an ordinary boss fight. Move patiently, create an escape plan, and consider setting your respawn point at a safe distance. A mapped coordinate saves travel time, but careful play is still required once you enter the city.",
        ],
      },
      {
        heading: "Ancient City generation and accuracy",
        paragraphs: [
          "Ancient City placement depends on version-specific world generation and local terrain checks. Use the Java version that generated the unexplored region. If a world began before 1.19, previously explored chunks cannot retroactively gain an Ancient City, even when a candidate exists for newly generated terrain at the same seed.",
          "If you do not find the structure immediately, inspect the broader underground area around the X and Z marker and confirm that the surrounding biome is Deep Dark. Recheck the seed and version before travelling to a second result. The map can show several alternatives so you can choose another candidate without starting over.",
        ],
      },
    ],
    faq: [
      { question: "At what Y level do Ancient Cities generate?", answer: "They generate deep underground in the Deep Dark, commonly well below sea level. Use the finder for X/Z positioning and explore vertically with care." },
      { question: "Can an Ancient City generate in an old explored chunk?", answer: "No. Chunks generated before the relevant 1.19 terrain rules keep their old content even after the world is upgraded." },
      { question: "Is every Deep Dark biome an Ancient City?", answer: "No. Deep Dark can exist without an Ancient City, so a seed-based structure candidate is more useful than searching the biome alone." },
    ],
  },
  {
    slug: "trial-chambers-finder",
    name: "Trial Chambers",
    icon: "⚔️",
    title: "Minecraft Trial Chambers Finder - Find by Seed",
    description: "Find Trial Chambers in Minecraft 1.21 by seed. View candidate locations on a map, copy X/Z coordinates, and prepare for vaults and trial spawners.",
    eyebrow: "Minecraft 1.21 structure guide",
    intro: "Use the Trial Chambers Finder for Minecraft 1.21 Java worlds to map underground chamber candidates and copy their X and Z coordinates. Plan a combat-ready expedition while keeping your seed private on your device.",
    quickFacts: [
      { label: "Dimension", value: "Overworld" },
      { label: "Introduced", value: "Minecraft 1.21" },
      { label: "Key features", value: "Trial spawners and vaults" },
    ],
    sections: [
      {
        heading: "How to find Trial Chambers in Minecraft 1.21",
        paragraphs: [
          "Enter your seed in the main tool, select Java 1.21, keep Overworld active, and choose a radius. Trial Chambers candidates will appear among the structure results. Select a marker to view its exact horizontal coordinates and copy the X and Z values before entering the world.",
          "Trial Chambers generate underground, so the marker does not remove the need to search vertically. Travel to the surface coordinates, establish a safe staging point, and mine with care. A cartographer villager may also sell a trial explorer map in supported gameplay, providing an in-game route when you prefer not to navigate directly by seed.",
        ],
      },
      {
        heading: "Preparing for trial spawners and vaults",
        paragraphs: [
          "Bring reliable armor, food, weapons, shields, light sources, and enough inventory space for rewards. The copper-and-tuff rooms contain different encounter layouts, and trial spawners adapt their challenge to nearby players. Multiplayer groups should prepare for additional enemies rather than assuming the chamber will be easier with more people.",
          "Trial Keys can open vaults, while ominous encounters can lead to different rewards and greater danger. Clear rooms methodically and mark explored passages so the structure remains easy to navigate. Because chambers are large, a planned entrance and spare supplies can save a long return trip.",
        ],
      },
      {
        heading: "Why the correct version matters",
        paragraphs: [
          "Trial Chambers were introduced with Minecraft 1.21 generation. They will not appear in chunks that were already generated in an older version. On an upgraded world, choose unexplored territory beyond the regions you have previously visited and search using the current version.",
          "Candidate placement is calculated from the seed, but the finished structure still belongs to the generated world. Verify the complete seed and Java version if a chamber is missing. The nearest-first list provides alternative locations, making it easy to choose a second unexplored candidate.",
        ],
      },
    ],
    faq: [
      { question: "Which Minecraft version adds Trial Chambers?", answer: "Trial Chambers are a Minecraft 1.21 structure. Use Java 1.21 in the finder and search unexplored Overworld chunks." },
      { question: "Are Trial Chambers above or below ground?", answer: "They generate underground. The finder supplies X/Z coordinates, while the safe vertical approach must be determined in the world." },
      { question: "Can Trial Chambers appear in old chunks after an upgrade?", answer: "No. Travel to chunks that were not generated before upgrading to Minecraft 1.21." },
    ],
  },
  {
    slug: "woodland-mansion-finder",
    name: "Woodland Mansion",
    icon: "🏰",
    title: "Minecraft Woodland Mansion Finder by Seed",
    description: "Find Woodland Mansions in Minecraft by seed with an interactive coordinate map. Compare distant candidates and copy exact X/Z coordinates for Java worlds.",
    eyebrow: "Rare Overworld structure guide",
    intro: "The Minecraft Woodland Mansion Finder maps rare mansion candidates from your seed so you can compare routes before travelling thousands of blocks. Search and copy coordinates locally in your browser without uploading a world.",
    quickFacts: [
      { label: "Dimension", value: "Overworld" },
      { label: "Typical biome", value: "Dark Forest" },
      { label: "Main residents", value: "Illagers" },
    ],
    sections: [
      {
        heading: "How to find a Woodland Mansion by seed",
        paragraphs: [
          "Enter your world seed, choose the matching Java version, select Overworld, and expand the search radius if necessary. Woodland Mansions are rare and often far from spawn, so a wider radius may be more useful than the default. Choose a marker to center the map and copy its X and Z coordinates.",
          "Compare multiple candidates rather than automatically selecting the closest in a straight line. Oceans, mountains, established Nether hubs, and existing bases can change the practical travel time. A mansion in a convenient direction may be easier to reach even when its displayed distance is slightly greater.",
        ],
      },
      {
        heading: "Planning a long mansion expedition",
        paragraphs: [
          "Prepare food, armor, weapons, a bed, navigation supplies, and space for loot. Vindicators and evokers make mansions dangerous, while the large interior can be confusing. Mark cleared rooms, watch for hidden spaces, and establish a safe point outside before exploring.",
          "A cartographer villager can sell a woodland explorer map, which is useful for an in-game route. A seed finder complements that map by letting you compare exact coordinate candidates and estimate the journey in advance. Nether travel can reduce long Overworld distances when you already have safe portals and know the eight-to-one coordinate conversion.",
        ],
      },
      {
        heading: "Dark Forest terrain and missing mansions",
        paragraphs: [
          "Woodland Mansion generation is associated with Dark Forest terrain and version-specific placement. A coordinate is a structure candidate, while biome and terrain conditions help determine the final result. Already-generated chunks and custom world settings can also cause differences from a fresh world using the same seed.",
          "If the mansion is not visible at the exact marker, search the nearby area and verify the seed, version, and edition. Mansions are large, so they are normally obvious once the correct region loads. If the first candidate fails verification, return to the finder and choose the next result rather than wandering without a route.",
        ],
      },
    ],
    faq: [
      { question: "Why are Woodland Mansions so far away?", answer: "They are intentionally rare structures tied to suitable Dark Forest regions, so the nearest candidate can be thousands of blocks from spawn." },
      { question: "Can a cartographer still help me find a mansion?", answer: "Yes. Woodland explorer maps provide an in-game method, while the seed finder helps compare exact candidates and distances in advance." },
      { question: "Should I increase the finder radius for mansions?", answer: "Usually yes. Use a wider radius when no candidate appears nearby, but expect a larger search to take more time." },
    ],
  },
];

export const guideBySlug = Object.fromEntries(structureGuides.map((guide) => [guide.slug, guide]));
