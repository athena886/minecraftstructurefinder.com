# Minecraft Structure Finder — Community Launch Pack

Launch URL: https://minecraftstructurefinder.com/

Demo seed: `-3435226823721187965`

Core promise: find Minecraft structure candidates by seed on an interactive map, with a nearest-first coordinate list. Calculations run locally in the browser, so the seed is not uploaded.

Accuracy note: verified coordinate search currently uses the Java cubiomes engine. Bedrock appears as a preview option and should not be promoted as fully supported yet.

## Publishing rules

- Read each community's current self-promotion rules before posting.
- Post to one community first. Wait at least 24–48 hours before adapting the idea for another community.
- Do not reuse the exact same title and body across subreddits.
- Lead with the useful result, not with SEO language or a request for backlinks.
- Answer technical questions honestly, especially about Java versions, local calculation, terrain-dependent candidates, and Bedrock preview status.
- Do not ask for upvotes. Ask for bug reports, missing structures, or workflow feedback.

## Reddit: r/minecraftseeds

### Title

I made a browser-based structure finder that maps villages, strongholds and more from a seed

### Body

I wanted a faster way to compare structure locations without jumping between a map and a coordinate list, so I built **Minecraft Structure Finder**:

https://minecraftstructurefinder.com/

You can paste a Java seed, select the version and dimension, then see structure candidates on an interactive map. The results are also sorted nearest-first with copyable X/Z coordinates.

The part I cared about most: the seed calculation runs locally in the browser with cubiomes WebAssembly. There is no world upload or account, and the seed does not need to leave the device.

It currently covers Villages, Ancient Cities, Trial Chambers, Strongholds, Woodland Mansions, Ocean Monuments, temples, outposts, Nether Fortresses, Bastions, End Cities, Ruined Portals, Igloos and Shipwrecks.

Demo seed if you want to test it: `-3435226823721187965`

The verified engine is Java-focused right now; Bedrock is still marked as preview. I would especially appreciate reports about version mismatches, missing candidates, mobile usability, or structure types that should be easier to filter.

### First comment

Technical note: placement comes from cubiomes compiled to WebAssembly and runs in a Web Worker. Terrain- or biome-dependent candidates can still differ in generated worlds, especially across upgraded chunks.

## Reddit: r/MinecraftSpeedrun

### Title

I built a local seed tool for comparing villages, ruined portals, fortresses, bastions and strongholds

### Body

I have been building a free route-planning tool for Java seeds:

https://minecraftstructurefinder.com/

Paste a seed and it calculates structure candidates in the browser, then shows them in two views:

- an interactive map for direction and route context;
- a nearest-first list with exact X/Z coordinates and one-tap copy.

It includes Villages, Ruined Portals, Nether Fortresses, Bastion Remnants and Strongholds, plus other structures for general seed exploration. You can switch Overworld, Nether and End and change the search radius.

The calculation runs locally through cubiomes WebAssembly, so there is no seed upload or sign-up. I am interested in whether the map/list combination is actually useful for practice and route comparison, and which filters would reduce friction for runners.

Demo seed: `-3435226823721187965`

Java is the verified engine today. Bedrock is only a preview option.

### First comment

If you test it, please include the Java version, structure type and expected coordinate in any mismatch report. That will make verification much faster.

## Reddit: r/Minecraft

Use only if the current subreddit rules allow personal project/tool posts. If a showcase day, megathread, flair or prior moderator approval is required, follow that route.

### Title

I made a privacy-first Minecraft structure map that runs entirely in the browser

### Body

I made a small Minecraft tool for players who want structure coordinates without installing a mod or uploading a world:

https://minecraftstructurefinder.com/

Enter a Java seed and the site maps nearby structure candidates, then lists the coordinates from nearest to farthest. Selecting a result centers the map and the X/Z values can be copied for in-game navigation.

Everything is calculated on the device with WebAssembly. The seed is not sent to a backend, and there is no account or download.

I kept the page focused on structures rather than biome layers: Villages, Ancient Cities, Trial Chambers, Strongholds, Mansions, Monuments, Nether Fortresses, Bastions, End Cities and more.

I would value feedback on the mobile experience and on which structure filters people use most. The verified calculations are for Java; Bedrock remains a preview.

## Planet Minecraft project listing

### Title

Minecraft Structure Finder — Interactive Seed Map and Coordinate List

### Short description

Find Minecraft structures from a Java seed with an interactive map, nearest-first coordinates and private browser-based calculation.

### Full description

Minecraft Structure Finder is a free browser tool for planning exploration routes from a world seed. Enter a seed, match the Java version, choose the Overworld, Nether or End, and search within a configurable radius.

The result combines an interactive map with a clean coordinate list. Every structure type has its own marker, results are sorted by distance from the world origin, and selecting an item centers the map. X and Z coordinates can be copied directly for use in game.

Supported structure categories include Villages, Ancient Cities, Trial Chambers, Strongholds, Woodland Mansions, Ocean Monuments, Desert Pyramids, Jungle Temples, Pillager Outposts, Nether Fortresses, Bastion Remnants, End Cities, Ruined Portals, Igloos and Shipwrecks.

The seed calculation runs locally in the browser through cubiomes WebAssembly. No world file is uploaded, no account is required, and the tool has no backend seed-processing API.

Try the built-in demonstration or use seed `-3435226823721187965`.

Current support note: the verified coordinate engine is for Java Edition. Bedrock is visible as a preview and is not yet promoted as fully accurate.

Tool: https://minecraftstructurefinder.com/

## Minecraft Forum post

### Subject

[Tool] Minecraft Structure Finder — local seed calculation, map and exact coordinates

### Post

I built Minecraft Structure Finder for players who want a focused structure map without installing anything:

https://minecraftstructurefinder.com/

The workflow is simple: paste a seed, choose the Java version and dimension, select a radius, and search. Structure candidates appear as map markers and as a nearest-first list with copyable X/Z coordinates.

The tool covers major Overworld, Nether and End structures, including Villages, Ancient Cities, Trial Chambers, Strongholds, Mansions, Monuments, Nether Fortresses, Bastions and End Cities.

Privacy was a design goal. The calculation uses cubiomes compiled to WebAssembly and runs on the device. Seeds and world files are not uploaded to a backend.

Test seed: `-3435226823721187965`

The verified engine currently targets Java. Bedrock is marked as preview. Feedback about version-specific coordinate mismatches, upgraded chunks, mobile map controls and missing filters is welcome.

## Discord versions

### General tools channel

I built a free Minecraft Structure Finder: https://minecraftstructurefinder.com/

Paste a Java seed and it maps Villages, Strongholds, Ancient Cities, Trial Chambers, Fortresses, Bastions, End Cities and more. It also gives a nearest-first list with copyable X/Z coordinates. The seed calculation runs locally in the browser—no upload or account. Demo seed: `-3435226823721187965`. Feedback welcome; Bedrock is still preview.

### Speedrunning tools channel

Route-planning tool I have been working on: https://minecraftstructurefinder.com/

It calculates Java structure candidates locally and lets you compare Villages, Ruined Portals, Fortresses, Bastions and Strongholds on a map plus nearest-first coordinate list. No seed upload. I would appreciate feedback on filters and radius defaults for practice seeds.

### Short reply version

This may help: https://minecraftstructurefinder.com/ — Java seed structure map + copyable coordinates, calculated locally in the browser. Bedrock is preview.

## YouTube package

### Title

Minecraft Structure Finder — Find Any Structure by Seed (Free, No Download)

### Thumbnail text

FIND STRUCTURES FAST

Secondary line: Seed → Map → Coordinates

### Three-minute script

**0:00–0:15 — Hook**

If you have a Minecraft seed and want to find villages, strongholds, Ancient Cities or Nether structures without installing a mod, this tool maps them directly in your browser.

**0:15–0:35 — Open the tool**

Go to minecraftstructurefinder.com. The page opens with a demo seed already running, so you can immediately see the interactive map and nearest structure coordinates.

**0:35–1:05 — Search a seed**

Replace the demo with your own world seed. Choose the matching Java version, select the Overworld, Nether or End, and set the search radius. Press Find Structures. The calculation runs locally on your device through WebAssembly, so the seed does not need to be uploaded to a server.

**1:05–1:35 — Map and list**

Every structure type has a different marker. You can zoom, drag and click any marker for its exact X and Z coordinates. The list on the right is sorted from nearest to farthest. Tap a row to center the map or use Copy to save the coordinates.

**1:35–2:05 — Filters and use cases**

Filter the results when you only need one structure. Survival players can compare Villages and Mansions, speedrunners can inspect Villages, Ruined Portals, Fortresses, Bastions and Strongholds, and server owners can share a seed link with their group.

**2:05–2:30 — Accuracy note**

The verified coordinate engine currently targets Java using cubiomes. Some candidates still depend on terrain or biome checks, and chunks generated in an older version can differ. Bedrock is shown as a preview rather than full verified support.

**2:30–2:50 — Demo**

Try seed minus three four three five two two six eight two three seven two one one eight seven nine six five, or simply use the built-in demo. Choose a result, copy the coordinates, and check it in your world.

**2:50–3:00 — Close**

The tool is free and requires no download or account. The link is in the description. If you find a coordinate mismatch, leave the seed, Java version and structure type so it can be checked.

### Description

Find Villages, Strongholds, Ancient Cities, Trial Chambers, Nether Fortresses, Bastion Remnants, End Cities and more from a Minecraft Java seed.

Try Minecraft Structure Finder: https://minecraftstructurefinder.com/

The tool combines an interactive structure map with a nearest-first coordinate list. Calculations run locally in your browser through cubiomes WebAssembly—no world upload, account or download required.

Demo seed: `-3435226823721187965`

Current note: Java is the verified coordinate engine. Bedrock remains a preview.

Chapters:

00:00 Find Minecraft structures by seed
00:15 Open the free browser tool
00:35 Enter seed, version and dimension
01:05 Use the map and coordinate list
01:35 Filter structures and plan routes
02:05 Accuracy and version notes
02:30 Demo seed

### Tags

minecraft structure finder, minecraft seed map, minecraft village finder, minecraft stronghold finder, ancient city finder minecraft, trial chambers finder, minecraft java seed, minecraft coordinates, minecraft speedrun tools

## Seven-day publishing cadence

- Day 1: r/minecraftseeds post. Monitor and answer every genuine question.
- Day 2: Fix any confirmed issue; do not publish a second copy if the first post is active.
- Day 3: r/MinecraftSpeedrun version, only if its rules permit tools and self-promotion.
- Day 4: Planet Minecraft listing or Minecraft Forum post.
- Day 5: Record the YouTube demo using the script above.
- Day 6: Publish YouTube video and share it only where video/tool links are allowed.
- Day 7: Review referral traffic, GSC queries, Bing data, comments and reported coordinate mismatches.

## Response templates

### Coordinate mismatch

Thanks for testing it. Could you share the exact seed, Java version, dimension, structure type and the coordinate shown? Also let me know whether the chunk was generated before the world was upgraded. That will help separate a placement issue from terrain or version history.

### Bedrock question

Bedrock is currently marked as preview. The verified engine on the site is Java/cubiomes, so I do not want to claim full Bedrock accuracy until its placement rules have been validated separately.

### Privacy question

The search runs in your browser with WebAssembly. The site does not need a backend API to calculate the seed, and no world upload or account is required.

### Chunkbase comparison

Chunkbase is broader and includes biome and slime-chunk layers. This tool is intentionally focused on structures, with a simplified map and a nearest-first coordinate list for faster copying and route comparison.
