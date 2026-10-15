# The library (Pixel Engine 0.40.0)

Every built-in model (`MODEL_LIBRARY`, 151) and texture (`TEXTURE_LIBRARY`, 143) by family, then every imported pack (575 models, 264 textures in `packs/`), generated from the defs. A model's variants (`rock-large-a` … `-f`) share a row. Search it; don't read it whole.

- **Find:** grep this file, filter `library.json` (one record per asset: id, kind, family, pack, tags, size, licence), or search in code: `MODEL_LIBRARY.search('wooden chair')`, `TEXTURE_LIBRARY.search('stone floor')` (ranked: id words, then tags, then about; plurals and parts of words count).
- **Place:** `buildModel(id, { params, palette })`, or `use` it inside your own models; textures with `textureMap(id)`, `spriteSheet(id)`, `hudSprite(id)`. Look at it first: `node check.mjs --sheets <id>` (ASSETS.md).
- **Packs** are someone else's work, imported into this format and palette: each section says how to load it, and CREDITS.md what its licence asks. Its rows leave out the pack's name and tags, which library.json keeps.

## Models

### architecture (19)

| id | size (m, w × h × d) | params: default (min–max) | palette slots | tags | about |
| --- | --- | --- | --- | --- | --- |
| `door` | 1.48 × 2.2 × 0.32 |  | stone mist, stone2 slate, mortar night, wood orange, wood2 red, iron night, brass sand | architecture, stone, wood | Plank door 2.2 m tall in a stone frame; the leaf is a pivot (`leaf`) hinged on the left, with iron straps and a brass ring handle |
| `window` | 2 × 2.26 × 0.42 | width 0.8 (0.4–2), height 1 (0.5–1.8) | stone mist, stone2 slate, mortar night, wood orange, wood2 red, glass navy, iron night | architecture, stone, wood | Framed window with a cross mullion, a stone sill and lintel and two plank shutters open flat, in a short stone wall |
| `column` | 0.6 × 2.6 × 0.6 | height 2.6 (1–5) | stone mist, stone2 slate | architecture, stone | Stone column: a square plinth and moulded base, a tapering shaft, a flared capital under a square abacus |
| `stairs` | 1.2 × 1.08 × 1.8 | steps 6 (2–16), width 1.2 (0.6–3), rise 0.18 (0.12–0.25) | stone mist, stone2 slate | architecture, stone | Flight of stone steps climbing toward the back (-Z), one box per step from the floor, shades alternating so each edge reads |
| `fence` | 3.12 × 1.02 × 0.18 | length 3 (1–8) | wood orange, wood2 red | architecture, wood | Wooden fence along X: square posts with pyramid caps about every metre, two rails nailed across their fronts |
| `roof` | 4.7 × 1.73 × 3.73 | width 4 (1.5–10), depth 3 (1.5–8), pitch 40 (15–60) | tile red, tile2 plum, stone mist, wood orange | architecture, roof, stone, wood | Gable roof to sit on walls (y = 0 is the wall top): two pitched slabs of tile courses, stone gable ends, a ridge beam |
| `gate` | 1.52 × 1.45 × 0.17 |  | wood orange, wood2 red, iron night | architecture, wood | Wooden yard gate between two capped posts: a picket leaf (pivot `leaf`, hinged on the left) with rails, a brace and an iron latch |
| `stone-wall` | 2 × 3 × 0.3 | length 2 (0.5–6), height 3 (0.5–5) | stone mist, stone2 slate, mortar night | architecture, stone, wall, modular | Modular stone wall along X, `length` x 0.3 m centred on the origin, `height` 3 m to a storey: blocks in two shaded courses over dark mortar (one course alternates its blocks); its ends meet the next piece so the bond runs on across pieces set end to end on the 1 m grid |
| `wall-corner` | 1.21 × 3 × 1.21 | arm 1 (0.5–3), height 3 (0.5–5) | stone mist, stone2 slate, mortar night, dressed sand | architecture, stone, wall, modular | Corner of the modular stone walls: a pier of dressed quoins on the origin, two `arm` m arms along -X and -Z (footprint 1.2 x 1.2 m at the default), `height` 3 m; turn it in 90-degree steps |
| `doorway` | 2 × 3 × 0.4 | length 2 (1.5–5), height 3 (2.7–5) | stone mist, stone2 slate, mortar night, dressed sand | architecture, stone, wall, modular | Modular stone wall along X (`length` x 0.3 m, like `stone-wall`) with a 1 m wide, 2.3 m high opening under a dressed lintel, open to colliders so actors walk through |
| `wide-window` | 3 × 3 × 0.46 | length 3 (2–5), height 3 (2.7–5) | stone mist, stone2 slate, mortar night, dressed sand, glass navy | architecture, stone, wall, modular | Modular stone wall along X (`length` x 0.3 m, like `stone-wall`) with a window as wide as the wall less a block each side and three courses tall: glass between dressed mullions, a sill and a lintel; the glazed window blocks like the wall (its glass collides); map `glass` |
| `ruined-wall` | 2 × 1.84 × 0.3 | length 2 (1–5), height 2.25 (1–3) | stone mist, stone2 slate, mortar night | architecture, stone, wall, ruin, modular | Ruin of the modular stone wall along X, `length` x 0.3 m: its courses broken off to a seeded jagged top under `height`, deepest at a seeded point; add `rubble` at its foot |
| `balcony` | 2 × 1.98 × 1.04 | width 2 (1–4), depth 1 (0.6–1.5) | wood orange, wood2 red, frame plum | architecture, wood, town, modular | Wooden balcony to hang on a wall at z = 0, its deck 3 m up (a storey of `stone-wall`): boards on joists and knee braces, a baluster railing round three sides; footprint `width` x `depth` m |
| `bridge` | 3 × 0.96 × 1.61 | length 3 (1–8), width 1.6 (1–3) | wood orange, wood2 red, beam plum | architecture, wood, nature, town, modular | Wooden footbridge span along X, `length` x `width` m: seeded planks laid across two dark beams whose feet rest on the banks at y = 0, the deck 0.32 m up, a dark rail on low posts along each side; the deck carries actors and the rails stop them |
| `chimney` | 1.06 × 3.14 × 0.76 | height 2.5 (1–5) | stone mist, stone2 slate, mortar night, dressed sand, pot orange, flue ink | architecture, stone, roof, town | Stone chimney stack, 0.9 x 0.6 m and `height` to its dressed cap: coursed blocks over mortar, two clay pots with dark flues; stand it against a gable or on a ridge |
| `battlement` | 3 × 1.83 × 0.42 | merlons 3 (1–8) | stone mist, stone2 slate, mortar night, dressed sand, slit ink | architecture, stone, wall, castle, modular | Crenellated parapet to sit on a wall top (y = 0 there): a dressed string course, a coursed breast wall and coping, `merlons` slit merlons one to each metre with half a crenel at each end so pieces line up; footprint `merlons` x 0.42 m |
| `trapdoor` | 1 × 0.12 × 1 | open 0 (0–110) | wood orange, wood2 red, frame plum, iron night, ring sand, pit ink | architecture, wood, dungeon, floor | Trapdoor on the floor, 1 x 1 m: a frame round a plank hatch with iron strap hinges and a brass ring, on the pivot `hatch` hinged at the back; `open` (degrees) lifts it off a dark pit that stays open to colliders |
| `stone-steps` | 2.06 × 1.4 × 2.04 | steps 5 (2–12), width 1.4 (0.8–3) | stone mist, stone2 slate, cheek night, dressed sand | architecture, stone, town, modular | Stone steps up to a landing: `steps` risers of 0.2 m climbing toward -Z between dark cheek walls with dressed copings, a 1 m landing at the back; footprint 2 x 2 m at the defaults |
| `timber-wall` | 2 × 3 × 0.3 | length 2 (1–4), height 3 (2–4) | plaster white, plate ink, beam plum, stone mist, stone2 slate, mortar night | architecture, wood, wall, town, modular | Timber-frame wall panel along X (Tudor), `length` x 0.3 m, `height` 3 m to a storey: white plaster between dark posts, plates, a rail and braces on a course of stone in two shades; lines up with `stone-wall` |

### containers (10)

| id | size (m, w × h × d) | params: default (min–max) | palette slots | tags | about |
| --- | --- | --- | --- | --- | --- |
| `barrel` | 0.73 × 0.82 × 0.73 |  | wood orange, band slate, lid red | container, wood | Wooden barrel with three iron hoops |
| `crate` | 0.74 × 0.72 × 0.74 |  | wood orange, band red | container, wood | Wooden crate with a frame and diagonal braces |
| `clay-pot` | 0.41 × 0.44 × 0.41 | h 0.43 (0.25–0.7) | clay orange, paint red, rim sand, mouth ink | container, clay, town, dungeon | Round-bellied clay pot: terracotta with a red painted band, a pale rolled rim round a dark mouth; `h` is its height (seeded girth) |
| `amphora` | 0.48 × 0.79 × 0.42 |  | clay sand, paint red, handle orange, mouth ink | container, clay, town | Tall two-handled amphora on a small foot: pale clay with a red painted band and rim, a narrow neck and a dark mouth |
| `urn` | 0.41 × 0.77 × 0.41 |  | glaze teal, trim sand, lid blue | container, clay, dungeon, tomb | Lidded urn: a glazed body on a gold foot with a gold band, a blue domed lid on the pivot `lid` with a gold knob |
| `basket` | 0.53 × 0.59 × 0.53 | w 0.5 (0.3–0.8), handle 1 (0–1) | wicker sand, weave orange, rim red, inside plum | container, wicker, town, market | Wicker basket: a flared hollow body with a woven band of a second shade, a rolled rim and a hoop handle (`handle` 0 drops it); `w` is its width |
| `bucket` | 0.43 × 0.55 × 0.32 |  | wood orange, hoop slate, bail night, inside plum | container, wood, town, water | Wooden bucket: tapered staves in two iron hoops, an iron bail handle standing up from two ears |
| `keg` | 0.44 × 0.6 × 0.61 |  | wood orange, hoop slate, head red, stand plum, tap sand | container, wood, town, tavern | Small barrel lying on a stand of two notched cradles, its head to the front with a brass tap |
| `strongbox` | 0.54 × 0.34 × 0.39 |  | wood red, lid orange, iron night, lock sand | container, iron, wood, loot, dungeon | Small iron-banded strongbox: a dark wood body, a lighter lid on the pivot `lid` hinged at the back, iron straps and corners, a gold lock plate |
| `crate-stack` | 1.55 × 1.44 × 0.79 | count 3 (2–4) | wood orange, wood2 red, band red, band2 plum | container, wood, town, dungeon | Stack of `count` crates (seeded): two on the floor, one across their tops, a smaller one in front; alternate crates darker |

### dressing (8)

| id | size (m, w × h × d) | params: default (min–max) | palette slots | tags | about |
| --- | --- | --- | --- | --- | --- |
| `crystal` | 0.91 × 1.38 × 0.8 |  | glow cyan, facet teal, facet2 navy, base mist | dressing, magic, cave, light | Crystal cluster: a glowing core shard ringed by dark facets, lighting its corner; map `glow` to recolour |
| `rubble` | 0.8 × 0.34 × 0.95 |  | stone slate, stone2 mist | dressing, stone, small | Rubble: a few fallen blocks, small enough to walk among; two greys |
| `glowcaps` | 0.8 × 0.6 × 0.86 |  | stalk sand, cap lime, gill green, spot white | dressing, nature, cave, light | Glowing mushrooms: three pale stalks under bright caps dotted with glowing spots, a soft pulsing light |
| `standard` | 1.08 × 2.4 × 0.42 | h 2.4 (1.6–3.2) | cloth red, trim sand, pole night, foot slate | dressing, cloth, banner | War banner on a standing pole: a stone foot, a crossbar and a long cloth with a hem; map `cloth` |
| `stalagmites` | 1.12 × 1.4 × 0.98 | h 1.4 (0.6–2.5) | stone slate, stone2 mist, tip mist, tip2 white, base slate | dressing, stone, cave | Cluster of 3-5 stalagmites on a slate rock mound: the tallest mist under a white wet tip, the rest slate and mist by turns, each tip paler (seeded); `h` is the tallest |
| `cobweb` | 1.06 × 0.69 × 1.06 | h 2.6 (1.6–4), r 1 (0.5–1.5) | web white | dressing, dungeon, cave, wall | Corner cobweb, hung where two walls (the back at z = 0, the left at x = 0) meet the ceiling at `h`: a white fan of five threads out of a dense hub, crossed by three sagging rings (seeded); it spreads `r` along each wall and r/2 down it (small webs: four threads, two rings) |
| `puddle` | 1.3 × 0.01 × 1.03 | w 1.2 (0.4–2.5) | water blue, shine sky | dressing, water, dungeon, cave, town | Puddle on the floor: a flat seeded blob of `water` 5 mm deep with a little pool off its side and lighter `shine` glints; map `water` for blood, slime or oil; `w` is its width |
| `mine-rail` | 1 × 0.17 × 0.96 | gauge 0.6 (0.45–0.9), sleepers 2 (1–4) | rail mist, sleeper red | dressing, iron, cave, mine | Mine-cart track, 1 m along x so pieces tile end to end: two mist rails on red sleepers; `gauge` between the rails |

### dungeon (18)

| id | size (m, w × h × d) | params: default (min–max) | palette slots | tags | about |
| --- | --- | --- | --- | --- | --- |
| `chest` | 0.9 × 0.65 × 0.63 | open 0 (0–110) | wood orange, iron night, gold sand | dungeon, wood | Treasure chest: iron bands, a gold lock plate, a rounded lid on the pivot `lid` hinged at the back; `open` lifts it on a heap of gold |
| `bones` | 1.29 × 0.29 × 1.62 | n 6 (2–9), spread 1.2 (0.8–1.8) | bone white, joint sand, socket ink | dungeon, bone | Scatter of long bones round a skull on the floor, seeded; `n` bones over a `spread` metres wide |
| `cage` | 1.11 × 2.28 × 1.11 |  | iron slate, bar night, lock sand | dungeon, iron | Standing round iron cage: bars on a base, two hoops, a domed top with a ring, a gold padlock |
| `coffin` | 0.75 × 0.48 × 1.96 |  | wood red, lid orange, iron night | dungeon, wood | Wooden coffin on the floor, head at -Z: a red body on a lighter plinth, a lighter lid on the pivot `lid`, iron handles |
| `banner` | 1.27 × 1.57 × 0.18 | w 0.8 (0.5–1.2), h 1.4 (0.8–2) | cloth red, trim sand, pole night | dungeon, cloth | Wall banner on an iron pole, its back on a wall at z = 0: a pointed `cloth` (map it) with a gold trim and emblem |
| `spikes` | 1 × 0.49 × 1 | n 9 (4–9), h 0.4 (0.2–0.55) | plate night, rim slate, hole ink, spike mist | dungeon, iron | Floor spike trap: an iron plate with `n` steel spikes in dark holes, the spikes on the pivot `spikes` to raise and lower |
| `altar` | 1.9 × 1.02 × 1.12 | w 1.6 (1–2.4) | stone mist, stone2 slate, dark night, cloth red, trim sand | dungeon, stone, cloth, temple | Stone altar on a step: a pale slab top over a dark moulding and a carved body, a `cloth` runner (map it) laid along it and hanging down the front |
| `sarcophagus` | 1.04 × 1.12 × 2.3 |  | stone mist, stone2 slate, trim sand | dungeon, stone, tomb | Stone sarcophagus on a plinth, head at -Z: carved panels down a pale body, a dark lid (the pivot `lid`) carved with a lying effigy holding a gold sword (map `trim`) |
| `tombstone` | 0.81 × 1.04 × 0.38 | shape 0 (0–2), h 0.9 (0.6–1.3) | stone mist, stone2 slate, carve night, moss green | dungeon, stone, grave | Headstone on a low base with a tuft of moss (map `moss`), seeded lean: `shape` 0 a rounded top with an inscription, 1 a ringed cross, 2 a capped slab with a sunk panel; `h` is the height of the stone above its 0.12 m base |
| `skull-pile` | 0.68 × 0.61 × 0.7 | n 7 (4–9) | bone white, bone2 sand, bone3 mist, socket ink, heap night | dungeon, bone | Stacked pile of skulls facing out round a dark heap, in three bone shades so stacked skulls read apart, seeded; `n` skulls in up to three tiers |
| `wall-chains` | 0.84 × 1.38 × 0.22 | n 2 (1–3), len 1 (0.4–1.5) | plate slate, iron night, link slate, link2 mist | dungeon, iron, wall | Iron chains hung from ring bolts on a wall plate at 2 m, its back on a wall at z = 0, a shackle on each; `n` chains about `len` metres long (seeded) |
| `portcullis` | 1.4 × 2.2 × 0.16 | w 1.4 (0.8–3), h 2.2 (1.6–3.2) | bar slate, band night, tip mist | dungeon, iron, door | Iron portcullis for a doorway: slate bars ending in steel spikes, dark cross bands over them, all on the pivot `grate` to raise it; `w` x `h` metres |
| `lever` | 0.56 × 1.21 × 0.76 | angle -30 (-40–40) | stone mist, iron night, slot ink, axle slate, handle mist, knob red | dungeon, iron, mechanism | Floor lever: a steel handle with a red knob (map `knob`) on the pivot `handle`, hinged between iron cheeks on a stone block; `angle` throws it (+ toward the front) |
| `pressure-plate` | 0.9 × 0.09 × 0.9 | size 0.9 (0.5–1.4) | frame slate, groove ink, plate mist, mark red | dungeon, stone, trap, mechanism | Pressure plate: a pale stone tile raised a few centimetres in a dark groove and a slate frame, a red mark on it (map `mark`); the tile is the pivot `plate` to press; `size` metres square |
| `obelisk` | 1.21 × 3.2 × 1.21 | h 3.2 (2.2–5) | stone mist, stone2 slate, band night, rune cyan | dungeon, stone, monument, magic, light | Stone obelisk on stepped plinths: a tapering shaft, a dark pyramidion and a dark band of small glowing runes (map `rune`, which also lights it); `h` is its height |
| `rune-stone` | 1.27 × 1.85 × 0.62 | h 1.8 (1.2–2.6) | stone slate, foot mist, carve night, rune cyan | dungeon, stone, magic, light, nature | Standing stone of seeded outline on a few pale footing stones: a dark carved strip down its face holding small glowing runes (map `rune`, which also lights it); `h` is its height |
| `pillory` | 1.16 × 2.02 × 0.56 |  | wood orange, wood2 red, stone mist, iron night, hole ink, lock sand | dungeon, wood, town | Wooden pillory on a stone footing: a capped post, a split yoke at neck height with a head hole and two hand holes, the upper board on the pivot `yoke` hinged at the left, an iron hasp and a gold lock (map `lock`) |
| `pit-grate` | 1.68 × 0.33 × 1.68 | r 0.6 (0.4–1) | stone mist, stone2 slate, hole ink, iron night | dungeon, stone, iron, trap | Pit in the floor like a well head: a low curb of stones in two greys round a black hole, under an iron ring and grate of crossed bars (the pivot `grate`); `r` is the hole's radius |

### furniture (19)

| id | size (m, w × h × d) | params: default (min–max) | palette slots | tags | about |
| --- | --- | --- | --- | --- | --- |
| `table` | 1.4 × 0.75 × 0.8 | length 1.4 (0.8–2.4), width 0.8 (0.6–1.2) | wood orange, frame red, joint plum | furniture, wood | Plank-top table, 0.75 m tall, on four square legs with a dark apron under the top |
| `chair` | 0.46 × 0.98 × 0.44 |  | wood orange, frame red, joint plum | furniture, wood | Wooden chair, seat at 0.45 m on four legs, the back legs rising into a two-rail back |
| `bench` | 1.4 × 0.45 × 0.36 | length 1.4 (0.8–2.4) | wood orange, frame red, joint plum | furniture, wood | Backless plank bench, seat at 0.45 m on two notched board trestles and a dark stretcher |
| `stool` | 0.44 × 0.5 × 0.44 |  | wood orange, frame red, joint plum | furniture, wood | Round stool: an eight-sided seat at 0.5 m on four splayed legs and a dark ring |
| `bed` | 1.02 × 1 × 2 |  | wood orange, frame red, joint plum, sheet mist, pillow white, blanket blue, fold sky | furniture, wood, cloth | Single bed (1 x 2 m): wooden frame and headboard, a mattress, a white pillow and a blue blanket turned down |
| `bookshelf` | 0.96 × 1.8 × 0.36 |  | wood orange, frame red, joint plum, book blue, book2 green, book3 sand, book4 white | furniture, wood, books | Tall bookshelf (1.8 m), four bays of seeded books in four colours, standing, stacked and leaning |
| `cabinet` | 0.98 × 1.02 × 0.54 |  | wood orange, frame red, joint plum, handle sand | furniture, wood | Wooden cupboard, 1 m tall: two panelled doors on hinges (pivots door.l, door.r), brass handles, a shelf inside |
| `wardrobe` | 1.1 × 1.96 × 0.67 |  | wood orange, frame red, joint plum, handle sand | furniture, wood, storage, town | Tall wardrobe (1.96 m): two doors with long and short raised panels on hinges (pivots door.l, door.r), brass handles, a crown on top; map `wood` |
| `desk` | 1.2 × 0.76 × 0.67 | length 1.2 (1–1.6) | wood orange, frame red, joint plum, handle sand | furniture, wood, table, town | Writing desk, 0.76 m tall: a board top over a block of two drawers with brass pulls on the right, two legs and a dark back panel on the left; `length` (m) |
| `dresser` | 0.96 × 1.15 × 0.53 | drawers 3 (2–5), width 0.9 (0.6–1.2) | wood orange, frame red, joint plum, handle sand | furniture, wood, storage, town | Chest of drawers: `drawers` (2-5) stacked fronts, 0.3 m each, with a wide brass pull apiece in a dark carcass under a lighter top, on a plinth; `width` (m) |
| `throne` | 1 × 1.96 × 0.9 |  | wood red, panel plum, gold sand, cushion blue | furniture, wood, seat, royal, town, dungeon | Throne, 1.96 m to its crest: a high dark panelled back between red posts under a gold crest and finials, gold-tipped arms, a cushioned seat on a plinth; map `cushion` |
| `armchair` | 0.88 × 1.02 × 0.8 |  | cloth blue, cushion sky, trim navy, wood red | furniture, cloth, seat, town | Upholstered armchair, seat at 0.52 m: a padded back and rolled arms in `cloth` (map it), lighter `cushion`s, a dark skirt and short wooden feet |
| `rug` | 2.18 × 0.01 × 1.4 | length 2 (1.2–3), width 1.4 (0.8–2) | field red, border navy, trim sand, fringe white | furniture, cloth, floor, town | Rug, 14 mm thick: a `field` inside a `border` (map both), a gold line and a diamond medallion, fringes across the ends of its `length` |
| `fireplace` | 1.72 × 2.16 × 0.78 | chimney 0.9 (0–1.4) | stone mist, stone2 slate, mortar night, soot ink, wood red, log plum, ember orange, hot sand | furniture, stone, fire, light, town | Stone fireplace, its back on a wall at z = 0: coursed jambs, a lintel and a wooden mantel round a sooty firebox of charred logs and glowing embers (seeded); `chimney` (m) raises a stone breast above the mantel |
| `wall-shelf` | 0.9 × 0.49 × 0.24 | width 0.9 (0.5–1.4) | wood orange, frame red, jar mist, cork red, book blue, book2 green | furniture, wood, wall, books, town | Wall shelf, its back on a wall at z = 0 and its top at 1.4 m: a board on two brackets holding seeded books and corked jars; `width` (m) |
| `round-table` | 1 × 0.75 × 1 | d 1 (0.7–1.4) | wood orange, frame red, joint plum | furniture, wood, table, town | Round table, 0.75 m tall: a ten-sided top over a dark rim on a pedestal and four feet; `d` is its diameter (m) |
| `washstand` | 0.64 × 0.98 × 0.47 |  | wood orange, frame red, joint plum, basin white, water sky | furniture, wood, water, town | Washstand, 0.8 m tall: a white basin of water on a board with a splashback, four legs and a low shelf |
| `cradle` | 0.89 × 0.8 × 0.8 |  | wood orange, frame red, joint plum, sheet mist, pillow white, blanket blue, fold sky | furniture, wood, cloth, town | Wooden cradle, head at -X: its ends stand on two dark curved rockers wider than the body; an arched headboard, low sides, a mattress, a pillow and a blue blanket turned down |
| `folding-screen` | 1.36 × 1.7 × 0.63 | fold 35 (0–80) | wood orange, frame red, joint plum | furniture, wood, town | Folding screen of three wooden panels 1.7 m tall, hinged in a zigzag: `fold` turns the outer two (degrees; 0 stands it flat) |

### lighting (11)

| id | size (m, w × h × d) | params: default (min–max) | palette slots | tags | about |
| --- | --- | --- | --- | --- | --- |
| `lamp-post` | 0.68 × 2.1 × 0.3 |  | iron night, flame sand | lighting, town | Iron street lamp with a hanging lantern |
| `flame` | 0.83 × 0.72 × 0.75 | h 0.8 (0.3–1.4), tongues 4 (1–4) | outer orange, mid orange, core sand, heart white | lighting, fire | A fire's flame: 3-sided lit tongues, one face to the iso camera and leaned back into the light, a small glowing heart |
| `wall-torch` | 0.58 × 1.1 × 0.63 | turn 0 (-180–180) | iron night, plate slate, wood red, rag plum, flame orange, core sand, heart white | lighting, fire, wall | Torch in an iron wall sconce mounted at 1.3 m, its back on the wall at z = 0 and the stick tipped out |
| `brazier` | 0.87 × 1.5 × 0.86 |  | iron night, trim slate, rim mist, coal red, flame orange, core sand, heart white | lighting, fire | Iron fire bowl on a pedestal, heaped with coals and burning |
| `candles` | 0.65 × 0.85 × 0.55 |  | wax white, puddle mist, flame sand | lighting, fire | Three wax candles of different heights in a puddle of wax, each with a one-tongue flame (seeded) |
| `hanging-lantern` | 0.45 × 0.97 × 0.45 |  | iron night, trim slate, flame sand | lighting | Iron lantern with glowing glass, hung at 1.7 m on a chain from a ceiling plate; a side, not a post, faces the camera |
| `campfire` | 1.66 × 0.74 × 1.59 |  | stone slate, stone2 mist, ash night, bark red, cut sand, flame orange, core sand, heart white | lighting, fire, camp, nature | Campfire: two pairs of crossed logs on an ash bed in a ring of field stones, the library flame on top and its light |
| `standing-torch` | 0.72 × 2.32 × 0.68 |  | iron night, trim slate, wood red, rag plum, flame orange, core sand, heart white | lighting, fire, dungeon, town | Torch on a tall iron stand: three splayed legs, a pole, a cup holding the stick, its rag burning at about 1.8 m |
| `chandelier` | 1.02 × 1.23 × 1.17 | n 6 (4–8) | iron night, trim slate, wax white, flame sand | lighting, fire, ceiling | Iron ring chandelier hung on a chain: spokes to a centre stem, `n` wax candles on the ring (seeded heights), its ring at 2.4 m |
| `wall-lantern` | 0.37 × 0.7 × 0.66 |  | iron night, plate slate, flame sand | lighting, town, wall | Street lantern on a wall bracket: a back plate on the wall at z = 0, a braced arm out 0.55 m, the lantern hung from it with glowing glass at 1.9 m |
| `path-lantern` | 0.39 × 1.1 × 0.39 |  | stone slate, wood red, iron night, roof teal, flame sand | lighting, town, garden | Low path lantern, 1.1 m tall: glowing glass under a verdigris roof on a short wooden post and a stone footing |

### nature (20)

| id | size (m, w × h × d) | params: default (min–max) | palette slots | tags | about |
| --- | --- | --- | --- | --- | --- |
| `rock` | 0.29 × 0.22 × 0.35 | size 0.35 (0.1–1.2) | stone slate | nature, stone | Field stone: a rough lump, wider than tall; map `stone` to vary stones side by side |
| `stone-ring` | 1.46 × 0.21 × 1.49 | r 0.6 (0.3–2), n 10 (5–12), size 0.38 (0.15–0.8) | stone slate, stone2 mist | nature, stone | Ring of field stones in two greys (a fire pit, a well head, a garden border); `size` is the largest a stone gets |
| `pine` | 2.01 × 3.88 × 2.01 | h 4 (3–5) | bark plum, leaf teal, leaf2 green | nature, tree | Conifer: a plum trunk under four stacked cones, teal and green in turn; `h` is its height |
| `oak` | 2.72 × 3.77 × 2.28 | h 4 (3–5) | bark red, leaf green, leaf2 lime | nature, tree | Round broadleaf tree: a red trunk on roots under a crown of 3-5 lumps, green round the sides and lime on top; `h` is its height |
| `bush` | 1.16 × 0.6 × 0.85 | w 1.2 (0.6–2) | leaf green, leaf2 lime | nature, plant | Low leafy bush: a lime lump standing up out of 1-3 lower green ones round its foot; `w` is its width |
| `stump` | 0.87 × 0.47 × 0.88 | d 0.6 (0.4–1) | bark red, root plum, cut sand, heart orange | nature, wood | Cut tree stump: red bark on plum roots, a sand cut top with an orange heart; `d` is its width |
| `log` | 1.7 × 0.61 × 0.42 | length 1.6 (0.8–3) | bark red, cut sand, heart orange, moss green | nature, wood | Fallen log on its side: red bark, sand end grain with an orange heart, a branch stub and a tuft of moss; `length` along x |
| `mushrooms` | 1.15 × 0.67 × 0.56 | size 1.2 (0.7–2.5) | stalk white, cap red, cap2 orange, spot sand | nature, plant | Cluster of 3-5 toadstools: white stalks, caps red and orange in turn with sand spots (map `cap`, `cap2`); `size` scales them |
| `flowers` | 0.82 × 0.34 × 0.6 | r 0.4 (0.2–0.8) | stem green, leaf teal, a red, b sand, c sky | nature, plant, flower | Patch of wild flowers: chunky blossoms in red, sand and sky on short stems over leafy tufts in green and teal; `r` is its radius |
| `snowy-pine` | 1.82 × 4.19 × 1.82 | h 4 (3–5) | bark plum, leaf teal, leaf2 green, snow white | nature, tree, snow | Snow-laden conifer: `pine`'s plum trunk and teal and green tiers with white snow on each tier's shoulders and its tip; `h` is its height |
| `birch` | 2.2 × 4.49 × 1.76 | h 4.5 (3–6) | bark white, mark ink, leaf lime, leaf2 green | nature, tree | Birch: a slender white trunk barred with ink marks under a light, open crown of small lumps in lime and green; `h` is its height |
| `dead-tree` | 1.98 × 3.34 × 1.69 | h 3.5 (2.5–5) | bark slate, branch mist, twig night, root night | nature, tree, dead | Dead tree: a crooked slate trunk on night roots, forking into 3-5 bare, twisted branches in mist and slate with dark twigs (seeded); `h` is its height |
| `willow` | 3.31 × 3.78 × 3.31 | h 4 (3–5) | bark plum, leaf green, leaf2 lime, leaf3 teal | nature, tree, water | Weeping willow: a green dome under a lime crown, draped in strands of lime, teal and green that fall over its shoulders to knee height round a plum trunk; `h` is its height |
| `cactus` | 0.8 × 2.47 × 1.34 | h 2.4 (1.2–3.5) | body green, arm teal, arm2 lime, rib lime, bud red | nature, plant, desert | Saguaro cactus: a green column striped with lime ribs, 2-3 arms elbowing up (seeded), teal and lime by turns round it, red buds on its crown; `h` is its height |
| `reeds` | 0.68 × 1.41 × 0.74 | h 1.4 (0.8–2) | blade green, blade2 lime, stalk green, head red | nature, plant, water | Clump of reeds: green and lime blades fanning round 3-5 green stalks that carry red cattail heads (seeded); `h` is the tallest stalk |
| `ferns` | 1.09 × 0.5 × 1.25 | size 0.8 (0.5–1.2) | leaf green, leaf2 lime, leaf3 teal, crown plum | nature, plant, forest | Fern clump: 6-8 toothed fronds in green, lime and teal in turn, fanning up and out of a plum crown on steep stalks (seeded); `size` is a frond's length |
| `tall-grass` | 0.79 × 0.91 × 0.62 | h 0.9 (0.4–1.2) | blade lime, blade2 green | nature, plant, grass | Tuft of tall grass: 4-6 broad blades out of one root, tall lime ones upright and green ones leaning out, some bent over (seeded); `h` is the tallest blade |
| `boulders` | 1.35 × 0.84 × 1.41 | size 1.2 (0.6–2) | stone slate, stone2 mist, stone3 night | nature, stone | Pile of 3-5 boulders (seeded): a big slate one with smaller mist and night ones heaped round its front and sometimes one up on its shoulder; `size` is the biggest |
| `lily-pads` | 1.28 × 0.17 × 1.47 | r 0.8 (0.5–1.2) | pad green, pad2 lime, petal white, heart sand | nature, plant, water | Lily pads lying flat on water at y = 0: 3-5 slit discs in green and lime (seeded), the middle one holding a white flower with a sand heart; `r` is the patch radius |
| `fallen-tree` | 3.57 × 1.63 × 1.97 | length 3.2 (2–4.5) | bark red, bark2 orange, earth plum, turf green, stone mist, cut sand | nature, wood, forest | Fallen tree: a red trunk with peeled orange bark, a broken limb and a stub, sloping down from its upturned root plate (plum earth with torn clods, seeded red roots, some broken off, mist stones, green turf along its top) to a sand end; `length` along x |

### props (14)

| id | size (m, w × h × d) | params: default (min–max) | palette slots | tags | about |
| --- | --- | --- | --- | --- | --- |
| `signpost` | 1.64 × 2.16 × 1.14 | boards 3 (2–3) | post red, board sand, board2 orange, dark plum, stone slate, stone2 mist | props, sign, wood | Wooden signpost: a post with two or three arrow boards pointing different ways, on footing stones |
| `sack` | 0.54 × 0.74 × 0.56 | h 0.74 (0.45–1) | cloth sand, neck orange, cord red | props, loot, cloth | Filled cloth sack tied at the neck with a cord, a ruffled tuft above it; `h` is its height |
| `anvil` | 0.76 × 0.81 × 0.5 |  | wood orange, cut sand, iron night, face mist | props, tool, iron, wood | Smith's iron anvil with a horn and a light face, on a wooden block |
| `pickaxe` | 1.07 × 0.12 × 0.88 |  | wood orange, steel mist, iron slate, wrap plum | props, tool, iron, wood | Pickaxe lying on the ground: a curved iron head and a wooden handle with a wrapped grip |
| `gold-pile` | 1.16 × 0.44 × 0.88 | coins 26 (10–32), r 0.42 (0.25–0.7) | gold sand, shade orange, gem cyan, gem2 red | props, loot, gold | Heap of gold coins (seeded) with a couple of gems, a few coins spilled and stacked beside it |
| `cart` | 1.4 × 1.11 × 2.36 |  | bed red, side orange, rail sand, frame plum, tyre night, spoke sand, hub slate, axle ink | props, transport, wood | Two-wheeled hand cart: a plank bed with sides on big spoked wheels, long handles with a grip bar and a stand |
| `shovel` | 0.26 × 1.14 × 0.08 |  | wood orange, steel mist, iron slate, grip red | props, tool, iron, wood | Shovel standing on its blade: a steel blade with a rolled top edge, an iron socket, a wooden shaft and a T grip |
| `hammer` | 0.23 × 0.43 × 0.1 |  | wood orange, iron slate, face white, wrap plum | props, tool, iron, wood | Smith's hammer standing on its head: an iron head with a light striking face and a tapered peen, a wooden handle with a wrapped end |
| `wheelbarrow` | 0.65 × 0.65 × 1.61 |  | tub red, rim sand, shaft orange, tyre night, spoke sand, hub slate, grip plum | props, transport, wood, town | Wooden wheelbarrow: a hollow tub with a light rim on two shafts, one spoked wheel in front (+Z), two legs and wrapped handles behind |
| `rope-coil` | 0.57 × 0.2 × 0.9 | loops 3 (2–5), r 0.25 (0.15–0.4) | rope sand, rope2 orange, whip red | props, rope, town, dungeon | Coil of rope on the floor: `loops` stacked turns in two shades, the loose end trailing out to the front with a whipped tip; `r` is its radius |
| `ladder` | 0.53 × 2.34 × 0.69 | rungs 7 (3–12), lean 15 (0–25) | rail orange, rung sand | props, wood, town | Wooden ladder, `rungs` rungs 0.3 m apart between two rails; `lean` tips its top back to a wall at z = 0 (0 stands it upright against it) |
| `waymarker` | 0.39 × 0.91 × 0.43 | h 0.9 (0.5–1.4) | stone mist, paint red | props, sign, stone, nature | Waymarker: a short standing stone, five-sided and tapering to a rough top, a little tipped (seeded), with a painted band round it (map `paint`); `h` is its height |
| `notice-board` | 1.42 × 2 × 0.14 | notes 5 (0–8) | post red, board orange, frame plum, paper white, paper2 sand | props, sign, wood, town | Notice board: a framed board on two posts, `notes` paper notes in two shades pinned to its front (seeded) |
| `loot-pouch` | 0.7 × 0.26 × 0.78 | coins 9 (4–16) | leather red, neck plum, cord sand, gold sand, shade orange | props, loot, gold | Small leather drawstring pouch tipped on its side, a little heap of gold spilled from its open mouth with `coins` coins on and round it (seeded) |

### town (13)

| id | size (m, w × h × d) | params: default (min–max) | palette slots | tags | about |
| --- | --- | --- | --- | --- | --- |
| `statue` | 0.98 × 1.74 × 0.98 |  | stone mist, dark slate, trim sand | stone, monument | Robed stone figure on a plinth, sword point-down |
| `well` | 1.5 × 2.29 × 1.55 |  | stone mist, dark slate, wood orange, roof red, water blue | town, stone, water | Stone well with water, a winch and a gable roof |
| `market-stall` | 3.43 × 2.26 × 1.02 |  | wood orange, cloth red, cloth2 white, top sand | town, market | Market stall with a striped awning, crates and a barrel |
| `arch` | 2.84 × 1.48 × 0.68 | span 2 (0.8–5), ring 0.42 (0.2–0.8), depth 0.6 (0.2–1.5), blocks 9 (5–15), piers 0 (0–4) | stone mist, stone2 slate, mortar night | stone, building | Stone arch of voussoirs in two shades over dark mortar; `piers` (m) stands it on two coursed stone piers that tall, 0 puts its feet on y = 0 |
| `brick-wall` | 2.1 × 1.62 × 0.42 | length 2 (0.5–6), height 1.5 (0.5–3) | cap mist | town, wall, stone, textured | A stretch of brick wall (the bricks texture, 0.5 m courses at the default texel) under a stone coping |
| `fountain` | 2.26 × 1.81 × 2.26 | r 1.1 (0.8–1.6) | stone mist, trim slate, water blue, spray sky | town, stone, water | Round stone fountain: a basin wall under a dark coping round the pool, a centre column with an upper bowl and a jet; map `water` and `spray`; `r` is the basin's radius |
| `haystack` | 1.69 × 1.77 × 1.8 | h 1.6 (1–2.4) | hay sand, hay2 orange, rope red | town, farm, hay | Beehive haystack bound by a rope, darker loose hay round its foot and a straw tuft on its crown (seeded); `h` is its height |
| `hitching-post` | 2 × 1.14 × 0.19 | length 2 (1.2–3) | post red, rail orange, iron mist | town, wood, farm | Hitching rail: a round log rail on two square posts, iron tie rings hanging from it; `length` along x |
| `produce-crate` | 0.74 × 0.75 × 0.58 |  | wood orange, frame plum, bed night, fruit red, fruit2 lime, fruit3 sand | town, market, food, wood | Market display: an open crate of fruit tipped toward the buyer on a four-legged stand, mostly one kind with a few of another (seeded); map `fruit`, `fruit2`, `fruit3` |
| `park-bench` | 1.6 × 0.88 × 0.59 | length 1.6 (1–2.4) | iron night, wood orange, wood2 red | town, bench, iron, wood | Park bench: wooden slats on two cast-iron ends with armrests, seat at 0.45 m, the back leaning; `length` along x |
| `clothesline` | 3.12 × 2 × 0.5 | length 3 (2–5) | post orange, bar red, rope mist, cloth white, cloth2 blue, cloth3 red, cloth4 sand | town, cloth, yard | Clothesline: a sagging rope between two T-posts hung with seeded sheets, towels and shirts in four colours; `length` along x |
| `planter` | 1.02 × 0.7 × 0.42 | length 1 (0.6–1.8) | wood orange, frame plum, soil night, leaf green, a red, b sand, c sky | town, plant, flower, wood | Wooden flower box: board sides between dark corner posts under a rim, soil and leaves, seeded blossoms in `a`, `b`, `c`; `length` along x |
| `water-trough` | 1.6 × 0.62 × 0.72 | length 1.6 (1–2.4) | wood orange, wood2 red, frame plum, iron night, water blue | town, farm, water, wood | Wooden water trough: two-plank sides held by iron bands between thick end boards, on two skids, full of water; map `water`; `length` along x |

### weapons (19)

| id | size (m, w × h × d) | params: default (min–max) | palette slots | tags | about |
| --- | --- | --- | --- | --- | --- |
| `greatsword` | 0.43 × 1.47 × 0.08 |  | steel mist, gold sand, grip plum | weapon, sword | Two-handed sword, gold guard, purple grip |
| `sword` | 0.3 × 1.01 × 0.09 |  | grip plum, gold sand, blade white, fuller mist | weapon, sword, one-hand | One-handed sword: white blade with a grey fuller, gold guard and pommel, a grip to tint |
| `axe` | 0.41 × 0.82 × 0.09 |  | grip plum, iron slate, head mist, bit white | weapon, axe, one-hand | One-handed axe: a haft with a bearded head on its leading side (+X) and a spike behind |
| `mace` | 0.27 × 0.84 × 0.27 |  | grip plum, gold sand, iron slate, flange mist | weapon, mace, one-hand | Flanged mace: an iron head with four flanges and a tip on a haft |
| `sceptre` | 0.18 × 0.81 × 0.18 |  | grip sand, gold sand, gem cyan | weapon, sceptre, one-hand, magic | Gold sceptre: a crown holding a cyan gem, a point above |
| `dagger` | 0.17 × 0.53 × 0.07 |  | grip plum, gold sand, blade white | weapon, dagger, one-hand | Dagger: a short white blade, gold guard and pommel |
| `wand` | 0.09 × 0.51 × 0.09 |  | grip teal, gold sand, gem cyan | weapon, wand, one-hand, magic | Wand: a teal shaft, a gold band and butt, a cyan gem at the tip |
| `staff` | 0.2 × 1.77 × 0.13 |  | grip plum, iron slate, gold sand, gem cyan | weapon, staff, two-hand, magic | Staff: a long shaft held a third of the way up, a gold claw holding a cyan crystal |
| `bow` | 0.07 × 1.24 × 0.22 |  | grip plum, limb sand, tip orange | weapon, bow, two-hand | Recurve bow without its string (a game draws the string between the `tip.*` anchors): sand limbs, orange tips |
| `spear` | 0.22 × 2 × 0.1 | l 2 (1.6–2.4) | grip plum, iron slate, gold sand, blade white, steel mist | weapon, spear, polearm, two-hand | Spear: a long shaft, a white leaf-shaped head with a steel midrib on an iron socket, an iron butt cap |
| `warhammer` | 0.51 × 1.39 × 0.2 |  | grip plum, iron slate, steel mist, gold sand | weapon, hammer, mace, two-hand | Two-handed war hammer: an iron head with a steel striking face (+X), a back spike and a top spike, on a long haft |
| `crossbow` | 0.73 × 0.9 × 0.18 |  | grip plum, iron slate, prod mist, gold sand, string white | weapon, crossbow, two-hand | Crossbow, strung and cocked: a stock with its butt on the floor, a steel prod across the front, an iron stirrup, the string drawn back to the nut |
| `round-shield` | 0.74 × 0.74 × 0.2 |  | board red, grip sand, steel mist | weapon, shield, offhand | Round shield: a red board with two painted quarters, a steel rim and boss; a handle on the back |
| `kite-shield` | 0.6 × 1.01 × 0.13 |  | rim mist, grip white, field blue | weapon, shield, offhand | Kite shield: a tall teardrop, its field split in two colours down the middle, a steel rim; a handle on the back |
| `greataxe` | 0.76 × 1.42 × 0.1 |  | grip plum, iron slate, head mist, bit white, gold sand | weapon, axe, two-hand | Two-handed greataxe: a double-bitted grey head with white edges on an iron socket, a long haft |
| `halberd` | 0.6 × 2.1 × 0.08 | l 2.1 (1.8–2.4) | grip plum, iron slate, head mist, edge white | weapon, halberd, polearm, two-hand | Halberd: a long pole, iron langets, a grey axe blade with a white edge (+X), a back hook and a white top spike |
| `flail` | 0.35 × 0.98 × 0.35 | links 3 (2–4) | grip plum, gold sand, iron slate, ball mist, spike white | weapon, flail, mace, one-hand | Flail: a short handle, an iron chain of links held straight out as in a swing, a steel ball with white spikes |
| `scythe` | 0.89 × 1.72 × 0.27 |  | grip plum, iron slate, blade mist, edge white | weapon, scythe, polearm, two-hand | War scythe: a long snath with a side handle, a grey crescent blade sweeping out to +X with a white edge underneath |
| `quiver` | 0.17 × 0.72 × 0.17 | arrows 6 (3–8) | grip red, trim plum, fletch white, fletch2 sand | weapon, quiver, gear | Quiver of arrows: a leather tube with dark bands and a rim, the fletchings of a few arrows (seeded) standing out of its mouth |

## Textures

### surfaces (63)

| id | texels | palette slots | tags | about |
| --- | --- | --- | --- | --- |
| `planks` | 16 × 16, tiles | gap plum, wood red, wood2 orange | wood, floor, surface | Floor boards with gaps and staggered butt joints |
| `bricks` | 16 × 16, tiles | mortar night, stone slate, stone2 mist | stone, wall, surface | Stone bricks in courses over dark mortar, a lit top edge on each |
| `cobbles` | 32 × 32, tiles | joint ink, shadow night, stone slate, light mist | stone, floor, road, surface | Rounded cobblestones, some darker, lit on top and apart on wide dark joints |
| `floor-tiles` | 16 × 16, tiles | joint slate, tile mist, tile2 white | stone, floor, surface | Square flagstones with thin joints |
| `dirt` | 16 × 16, tiles | dark plum, earth red, pebble sand | ground, floor, surface | Packed earth in three tones with a few pebbles |
| `grass` | 32 × 32, tiles | dark teal, mid green, light lime | grass, ground, floor, surface, nature | Short grass: tufts of light blades over their shade, evenly spread so no shape repeats |
| `stone` | 32 × 32, tiles | joint ink, shadow night, stone slate, light mist | stone, wall, surface | A rough stone wall: uneven blocks with ragged edges in rough courses, deep dark joints |
| `flagstones` | 32 × 32, tiles | joint night, slab mist, slab2 slate | stone, floor, surface | Large flat paving slabs of uneven shape, a few darker and a few cracked, over dark joints |
| `shingles` | 32 × 32, tiles | gap plum, body red, light orange, shine sand | clay, roof, surface | Roof shingles with round ends in staggered courses, each course over the top of the one below |
| `thatch` | 32 × 32, tiles | deep plum, shadow red, straw orange, light sand | straw, roof, surface | Straw thatch in layered courses, ragged ends hanging over the shadow of the course below |
| `sand` | 32 × 32, tiles | ripple orange, sand sand, pebble red | sand, ground, floor, surface | Pale sand with broken wind ripples and a few pebbles |
| `snow` | 32 × 32, tiles | hollow mist, snow white, glint cyan | snow, ground, floor, surface | Fresh snow: white with soft blue-grey hollows and a few icy glints |
| `ice` | 32 × 32, tiles | deep sky, ice cyan, crack white | ice, ground, floor, surface | Sheet ice: pale plates, a few deeper blue, split by white cracks, with white glints |
| `metal-plates` | 16 × 16, tiles | seam ink, shadow night, plate slate, light mist | metal, floor, wall, surface | Riveted metal plates: bevelled panels over dark seams, a rivet in each corner |
| `rust` | 32 × 32, tiles | metal slate, pit plum, rust red, bright orange | metal, rust, wall, floor, surface | Rusted iron: flaking rust in dark and bright patches, bare grey metal showing through |
| `moss` | 32 × 32, tiles | dark teal, moss green, light lime | moss, nature, ground, wall, surface | Moss: soft cushions packed together, lit on top, dark between |
| `cloth` | 16 × 16, tiles | shade navy, thread blue, light sky | cloth, wall, surface | Woven cloth: threads over and under in a plain weave, each lit on one side |
| `carpet` | 32 × 32, tiles | line plum, field red, band orange, gold sand | cloth, carpet, floor, surface | A red carpet: a diamond medallion in a patterned border; tiled, the borders make a lattice |
| `bark` | 32 × 32, tiles | furrow plum, bark red, light orange | wood, bark, nature, wall, surface | Tree bark: vertical ridges split by dark wandering furrows, lit along one edge |
| `leaves` | 32 × 32, tiles | shade teal, leaf green, light lime | leaves, nature, foliage, wall, surface | Foliage: pointed leaves at many angles over dark shade, each lit along one side |
| `parquet` | 32 × 32, tiles | joint plum, wood red, light orange | surface, wood, floor | Herringbone parquet: long wooden blocks in a zigzag, the two directions in two tones, over thin dark joints |
| `rough-boards` | 32 × 32, tiles | gap ink, grain plum, wood red | surface, wood, wall, floor | Rough-sawn wide boards: dark gaps, heavy grain and a few knots, for barns, sheds and shacks |
| `log-ends` | 32 × 32, tiles | gap ink, bark plum, ring orange, face sand | surface, wood, wall | Stacked log ends: round cut faces with a growth ring, rimmed in bark, dark gaps between |
| `wicker` | 16 × 16, tiles | shade red, reed orange, light sand | surface, wood, wicker, cloth | Wicker basket weave: pairs of reeds over and under in alternating blocks |
| `marble` | 32 × 32, tiles | vein slate, cloud mist, marble white | surface, stone, marble, floor, wall | White marble with soft grey clouding and long wandering veins |
| `sandstone` | 32 × 32, tiles | mortar red, strata orange, stone sand | surface, stone, sandstone, wall | Big sandstone blocks in metre-high courses, pale faces banded with darker strata, red mortar |
| `basalt` | 32 × 32, tiles | joint ink, shadow night, stone slate, light mist | surface, stone, basalt, floor, ground | Basalt column tops: dark hexagons packed together, each lit on its upper edges |
| `slate-tiles` | 32 × 32, tiles | joint ink, slate night, cleft slate | surface, stone, slate, floor | Dark slate floor tiles, square and double-length, streaked with cleft lines, over black joints |
| `ashlar` | 32 × 32, tiles | joint night, shadow slate, stone mist | surface, stone, wall | Rough ashlar: pale squared blocks of mixed sizes in broken courses, chisel-marked, shaded below |
| `dry-stone` | 32 × 32, tiles | joint ink, shadow night, stone slate, light mist | surface, stone, wall | A dry-stone wall: flat stones stacked without mortar, dark chinks between them |
| `pebbles` | 32 × 32, tiles | gap ink, stone slate, pale mist, shine white | surface, stone, pebbles, ground, floor | River pebbles: smooth rounded stones, dark and pale, each with a wet shine, over dark gaps |
| `gravel` | 16 × 16, tiles | grit night, stone slate, light mist | surface, stone, gravel, ground, path | Loose gravel: small grey stones packed over dark grit |
| `geode` | 32 × 32, tiles | seam navy, facet blue, lit sky, glint cyan | surface, stone, crystal, floor, ground | A crystal floor: blue crystal facets, each split into a lit and a shaded face, over dark seams |
| `ruined-mosaic` | 32 × 32, tiles | earth plum, grout orange, motif teal, field sand | surface, stone, mosaic, floor, ruin | A ruined mosaic: a lattice of teal tesserae on a sand field, patches lost to bare earth |
| `diagonal-tiles` | 16 × 16, tiles | joint night, dark slate, light mist | surface, stone, floor | Floor tiles set on the diagonal: diamonds in two alternating tones over dark joints |
| `checker-marble` | 32 × 32, tiles | dark slate, vein night, light mist | surface, stone, marble, floor | A marble checkerboard of slate and pale grey squares, the dark ones veined darker, each square cut from its own slab |
| `hex-tiles` | 16 × 16, tiles | joint slate, tile mist, light white | surface, stone, floor | Pale hexagonal floor tiles over grey joints, each lit along its upper edges |
| `mosaic` | 32 × 32, tiles | grout night, deep blue, tile sky, light cyan | surface, stone, mosaic, floor | A mosaic field: small square tesserae in mixed blues, no border, for baths and temples |
| `terracotta` | 16 × 16, tiles | joint plum, clay red, tile orange | surface, clay, floor | Small square terracotta floor tiles, each lit along its top, over dark joints |
| `grate` | 16 × 16, tiles | hole ink, depth night, bar slate, lit mist | surface, metal, floor | A grated metal floor: a grid of bars over dark square holes |
| `deck` | 32 × 32, tiles | seam night, grain red, wood orange | surface, wood, floor | A wooden deck: long boards with dark caulked seams, grain streaks and nails by each butt joint, for ships, docks and piers |
| `slate-roof` | 32 × 32, tiles | shadow ink, gap night, slate slate, edge mist | surface, stone, slate, roof | A slate roof: grey slates of mixed widths in staggered courses, a lit lower edge and a shadow under each course |
| `clay-tiles` | 32 × 32, tiles | shadow plum, clay red, light orange, shine sand | surface, clay, roof | Clay barrel tiles: rounded caps over channels in columns, a lit lip and a shadow at each course |
| `wood-shakes` | 32 × 32, tiles | shadow plum, wood red, light orange | surface, wood, roof, wall | Wooden shakes: long split shingles of uneven width in courses of uneven height, their lit butts ragged, stepping up and down |
| `mud` | 32 × 32, tiles | glint mist, puddle slate, mud plum, earth red | surface, earth, mud, ground | Wet mud: dark churned earth with puddles reflecting the sky |
| `cracked-earth` | 32 × 32, tiles | crack plum, clay orange, light sand | surface, earth, ground, desert | Dry cracked earth: sun-baked clay plates curling up at lit edges, split by a network of dark cracks |
| `cinders` | 32 × 32, tiles | cinder night, ash slate, light mist, ember red, hot orange | surface, ash, ground, fire | Ash and cinders: grey ash drifts with black cinders and a few small embers still glowing |
| `lava-crust` | 32 × 32, tiles | crust ink, crack plum, glow red, hot orange | surface, lava, ground, fire | Cooled lava crust: black plates split by dark cracks that glow red, then orange, only where they meet |
| `swamp` | 32 × 32, tiles | deep night, water teal, scum green, weed lime | surface, water, swamp, ground | Swamp water: murky green water under drifts of scum and specks of duckweed |
| `shallow-water` | 32 × 32, tiles | deep blue, water sky, ripple cyan, glint white | surface, water, ground | Shallow water: a net of bright ripple caustics over blue, deeper patches between, glints where ripples meet |
| `wet-sand` | 32 × 32, tiles | wet orange, pool mist, dry sand, shell white | surface, sand, beach, ground | Wet beach sand: dark damp sand with dry patches, sky-pale pools and a few shells |
| `leaf-litter` | 32 × 32, tiles | soil plum, shade red, leaf orange, light sand | surface, leaves, ground, nature | Leaf litter: fallen autumn leaves in red, orange and gold, heaped over dark soil |
| `meadow` | 32 × 32, tiles | shade teal, grass green, blade lime, petal white, bloom sand | surface, grass, ground, nature | A flower meadow: tall grass with light blades and white and yellow flowers dotted through it |
| `snow-drifts` | 32 × 32, tiles | shadow mist, snow white, glint cyan | surface, snow, ground | Wind-blown snow: long wavy drift crests, each with a blue-grey shadow on its lee side |
| `frozen-mud` | 32 × 32, tiles | rut night, mud plum, rime slate, frost mist, ice white | surface, earth, mud, snow, ground | Frozen mud: dark rutted earth rimed with frost, ice in the hollows |
| `leather` | 32 × 32, tiles | crease plum, hide red, sheen orange, thread sand | surface, leather, cloth | Leather: mottled hide with creases, panels joined by stitched seams |
| `burlap` | 16 × 16, tiles | hole plum, shade red, fibre orange | surface, burlap, cloth | Burlap: a coarse loose weave of thick fibres, dark holes between the threads |
| `chainmail` | 16 × 16, tiles | gap ink, shadow night, ring slate, light mist | surface, metal, chainmail, cloth | Chainmail: interlocking iron rings in staggered rows, lit on their upper sides |
| `fur` | 32 × 32, tiles | under plum, hair red, tip orange, light sand | surface, fur, cloth, nature | Brown fur: short overlapping tufts of hair, lighter at the tips, over a dark undercoat |
| `scales` | 16 × 16, tiles | rim teal, scale green, light lime | surface, scales, cloth, nature | Scales: overlapping rounded green scales in staggered rows, dark rims, lit on top |
| `rune-floor` | 64 × 64, tiles | joint ink, slab night, rune teal | surface, stone, magic, floor | A rune floor: dark stone slabs in staggered courses, half of them carved with a faint teal rune, each set its own way |
| `starfield` | 32 × 32, tiles | void ink, nebula navy, glow plum, star white, bright cyan | surface, void, magic, sky | The void: black space with faint navy and plum nebulae and scattered stars |
| `rift-energy` | 32 × 32, tiles | void navy, rift plum, flare red, crest white | surface, rift, magic, energy | Rift energy: bands of plum and red light flowing on the diagonal over navy, white at their crests |

### sprites (80)

| id | texels | palette slots | tags | about |
| --- | --- | --- | --- | --- |
| `gem-icon` | 10 × 9 | glint white, light cyan, mid sky, dark blue, edge navy | icon, loot, sprite | A cut gem with a glint, outlined: an icon for the HUD or loot |
| `coin-spin` | 32 × 8, 4 frames | face sand, rim orange, shine white, edge plum | coin, loot, sprite, animated | A gold coin turning: face, three-quarter, edge, three-quarter (4 frames of 8 x 8) |
| `potion-red` | 12 × 13 | cork sand, liquid red, shade plum, glint white, edge ink | icon, item, potion, loot | A round flask of red potion with a cork and a glint: a health potion icon |
| `potion-blue` | 12 × 13 | cork sand, liquid sky, shade blue, glint white, edge ink | icon, item, potion, loot | A round flask of blue potion with a cork and a glint: a mana potion icon |
| `key` | 16 × 10 | light sand, dark orange, glint white, edge plum | icon, item, key, loot | A gold key lying flat: a round bow with a hole, the shaft and two teeth |
| `scroll` | 14 × 14 | paper sand, shade orange, glint white, edge plum | icon, item, scroll, loot | A parchment scroll between two rolls, three lines of writing |
| `ring` | 12 × 11 | light sand, dark orange, stone red, glint white, edge plum | icon, item, jewel, loot | A gold ring set with a red stone, the hole showing through |
| `amulet` | 12 × 13 | light sand, dark orange, stone green, glint lime, edge plum | icon, item, jewel, loot | A gold pendant set with a green stone, on a chain |
| `shield-icon` | 12 × 13 | rim sand, field blue, shade navy, glint white, edge ink | icon, item, armor, loot | A heater shield: a blue field in a gold rim, lit on its left half |
| `helmet-icon` | 12 × 12 | light mist, dark slate, crest red, glint white, edge ink | icon, item, armor, loot | A steel helm with an eye slit and a red crest |
| `boots-icon` | 12 × 11 | cuff sand, leather orange, shade red, sole plum, edge ink | icon, item, armor, loot | A leather boot with a folded cuff and a dark sole, toe to the right |
| `armor-icon` | 14 × 12 | light mist, dark slate, belt sand, glint white, edge ink | icon, item, armor, loot | A steel breastplate with shoulder guards and a gold belt |
| `sword-icon` | 10 × 16 | light mist, dark slate, gold sand, glint white, edge ink | icon, item, weapon, loot | A straight sword, point up: a two-tone blade, a gold guard and pommel |
| `bow-icon` | 10 × 16 | light orange, dark red, grip sand, string mist, edge ink | icon, item, weapon, loot | A wooden bow, upright, with a wrapped grip and its string |
| `gold-icon` | 15 × 14 | light sand, dark orange, glint white, edge plum | icon, item, coin, loot | Two stacks of gold coins, a tall one and a short one beside it |
| `heart` | 8 × 8 | body red, shade plum, glint white, edge ink | icon, ui, health | A red heart with a glint: health |
| `star` | 8 × 8 | body sand, shade orange, glint white, edge plum | icon, ui, rating | A gold five-pointed star with a glint: a rating or a favourite |
| `skull` | 8 × 8 | bone white, shade mist, edge ink | icon, ui, death | A white skull with dark eyes: death, danger or a kill count |
| `spark` | 32 × 8, 4 frames | core white, flare sand, tip orange, ember red, edge plum | icon, effect, sprite, animated | A spark: a white point that flares into a cross and breaks into fading bits (4 frames of 8 x 8) |
| `smoke-puff` | 32 × 8, 4 frames | light white, mid mist, dark slate, edge night | icon, effect, sprite, animated | A puff of smoke that swells, then thins into wisps (4 frames of 8 x 8) |
| `axe-icon` | 12 × 16 | light mist, dark slate, glint white, wood orange, grain red, edge ink | icon, item, weapon, axe, loot | A bearded axe, haft up: a steel head with a bright cutting edge on the left, a wooden haft |
| `mace-icon` | 12 × 16 | light mist, dark slate, glint white, wood orange, grain red, edge ink | icon, item, weapon, mace, loot | A spiked mace, head up: a round steel head with three spikes on a wooden haft |
| `staff-icon` | 10 × 16 | glow cyan, orb sky, orb2 blue, glint white, wood orange, grain red, edge ink | icon, item, weapon, staff, magic, loot | A mage's staff: a wooden pole whose forked head cradles a glowing blue orb |
| `wand-icon` | 10 × 15 | star sand, shade orange, glint white, rod red, rod2 plum, edge ink | icon, item, weapon, wand, magic, loot | A magic wand: a slim dark rod with a gold band, tipped with a gold star |
| `dagger-icon` | 9 × 13 | light mist, dark slate, glint white, gold sand, grip red, edge ink | icon, item, weapon, dagger, loot | A dagger, point up: a short ridged blade, a gold crossguard and pommel, a red grip |
| `spear-icon` | 10 × 16 | light mist, dark slate, glint white, cord red, wood orange, grain plum, edge ink | icon, item, weapon, spear, loot | A spear, point up: a leaf-shaped steel head bound with red cord to a long wooden shaft |
| `round-shield-icon` | 14 × 14 | light mist, dark slate, glint white, wood orange, grain red, edge ink | icon, item, armor, shield, loot | A round wooden shield: planks in a steel rim, a steel boss in the middle |
| `gloves-icon` | 12 × 12 | cuff sand, leather orange, shade red, edge ink | icon, item, armor, gloves, loot | A leather glove, fingers up and thumb out, with a sand-coloured cuff |
| `belt-icon` | 13 × 12 | gold sand, leather orange, shade red, prong mist, edge ink | icon, item, armor, belt, loot | A leather belt buckled into a loop, seen from the front: a square gold buckle with its prong, the strap end hanging free |
| `cloak-icon` | 12 × 14 | light green, dark teal, clasp sand, edge ink | icon, item, armor, cloak, loot | A green hooded cloak with a gold clasp, the face in shadow under the hood |
| `quiver-icon` | 13 × 13 | fletch white, fletch2 sky, shaft sand, leather red, shade plum, band sand, edge ink | icon, item, ammo, quiver, loot | A leather quiver slung on the diagonal, two gold bands round it, three fletched arrows fanning out of its mouth |
| `arrows-icon` | 13 × 15 | head mist, shaft orange, fletch red, edge ink | icon, item, ammo, arrow, loot | Three arrows, points up and staggered, with red fletching: ammunition |
| `bomb-icon` | 12 × 14 | glint mist, body slate, shade night, fuse orange, spark sand, flare white, edge ink | icon, item, bomb, consumable, loot | A round black bomb with a steel cap and a lit fuse |
| `torch-icon` | 8 × 16 | core white, flame sand, flame2 orange, wrap slate, wood orange, grain red, edge ink | icon, item, torch, light, loot | A burning torch: a flame with a white heart over a wrapped head and a wooden handle |
| `map-icon` | 14 × 12 | paper sand, fold orange, mark red, edge plum | icon, item, map, quest, loot | A folded treasure map: three parchment panels, a dashed red trail to a red X |
| `book-icon` | 12 × 13 | cover blue, shade navy, gold sand, pages white, edge ink | icon, item, book, magic, loot | A closed blue tome with gold bands and a gold boss, its white pages showing |
| `coin-pouch-icon` | 12 × 14 | leather orange, shade red, tie sand, edge plum | icon, item, coin, pouch, loot | A leather coin pouch tied at the neck, a gold coin stamped on its front |
| `meat-icon` | 12 × 12 | crisp sand, meat orange, shade red, bone white, bone2 mist, edge plum | icon, item, food, consumable, loot | A roast drumstick: browned meat with a crisp highlight, the white bone sticking out |
| `herb-icon` | 10 × 13 | light lime, dark green, stem teal, edge ink | icon, item, herb, consumable, loot | A sprig of green herb: paired leaves up a thin stem, lit on the left |
| `rune-stone-icon` | 12 × 11 | glint mist, stone slate, shade night, rune cyan, edge ink | icon, item, rune, magic, loot | A flat dark pebble carved with a glowing cyan rune (a trident) |
| `fireball-icon` | 12 × 12 | core white, inner sand, flame orange, outer red, edge plum | icon, skill, fire, fireball | A fireball flying up and right: a white-hot heart in sand and orange, a red flame trail |
| `frost-nova-icon` | 13 × 13 | core white, ice cyan, shade sky, edge navy | icon, skill, cold, frost, nova | A burst of frost: an eight-pointed ice star round a white core |
| `lightning-bolt-icon` | 11 × 14 | core white, bolt sand, shade orange, edge plum | icon, skill, lightning, bolt | A zigzag lightning bolt striking down, white along its lit edge, sand and orange |
| `poison-cloud-icon` | 13 × 11 | light lime, mid green, dark teal, bone white, eye ink, edge ink | icon, skill, poison, cloud | A billowing green cloud of poison with a white skull in it |
| `heal-icon` | 12 × 12 | glint white, light lime, mid green, edge teal | icon, skill, heal, holy | A bold green cross with a white glint, two sparkles beside it: healing |
| `shield-bubble-icon` | 14 × 14 | glint white, light cyan, mid sky, dark blue, gold sand, gold2 orange, edge navy | icon, skill, shield, buff | A protective bubble: a cyan ring with a white glint round a small gold shield |
| `dash-icon` | 13 × 11 | light white, mid mist, dark slate, edge ink | icon, skill, movement, dash | A dash: a white arrowhead pointing right, trailing grey speed lines |
| `whirlwind-icon` | 12 × 12 | light white, mid mist, dark slate, edge ink | icon, skill, physical, whirlwind | A whirlwind: a funnel of white and grey bands narrowing to a point |
| `leap-icon` | 13 × 12 | glint white, light sand, dark orange, edge plum | icon, skill, movement, leap | A leap: a figure flying forward off the end of a dashed arc, coming down onto a burst |
| `arrow-volley-icon` | 13 × 11 | fletch white, shaft orange, head mist, edge ink | icon, skill, bow, arrow, volley | A volley: three arrows falling point down, staggered, with white fletching |
| `summon-icon` | 12 × 12 | bone white, shade mist, glow cyan, glow2 sky, edge ink | icon, skill, summon, minion | A summoning: a white skull rising out of a glowing cyan circle |
| `curse-icon` | 12 × 12 | lid red, eye white, iris plum, pupil ink, edge ink | icon, skill, curse, hex | A curse: a staring white eye with a plum iris in bloodshot red lids, dripping |
| `aura-icon` | 13 × 13 | core white, light sand, dark orange, edge plum | icon, skill, aura, buff | An aura: a gold ring radiating round a white-hot core |
| `trap-icon` | 13 × 11 | light mist, dark slate, pan sand, edge ink | icon, skill, trap | A bear trap, open: a ring of steel jaws with their teeth turned in round a gold pan, a spring either side |
| `totem-icon` | 12 × 15 | wing sky, wing2 blue, light orange, dark red, eye ink, beak sand, edge ink | icon, skill, totem | A carved wooden totem: a winged top, two stacked faces with dark eyes |
| `arrow-up` | 8 × 8 | light white, shade mist, edge ink | icon, ui, arrow, up | A white arrow pointing up: scroll, raise, move up |
| `arrow-down` | 8 × 8 | light white, shade mist, edge ink | icon, ui, arrow, down | A white arrow pointing down: scroll, lower, move down |
| `arrow-left` | 8 × 8 | light white, shade mist, edge ink | icon, ui, arrow, left | A white arrow pointing left: back, previous, move left |
| `arrow-right` | 8 × 8 | light white, shade mist, edge ink | icon, ui, arrow, right | A white arrow pointing right: next, forward, move right |
| `check` | 8 × 8 | body lime, shade green, edge ink | icon, ui, check, confirm | A lime check mark: yes, done, confirm |
| `cross` | 8 × 8 | body red, shade plum, edge ink | icon, ui, cross, cancel | A red X: no, close, cancel |
| `plus` | 8 × 8 | body lime, shade green, edge ink | icon, ui, plus, add | A lime plus: add, more, a higher stat |
| `minus` | 8 × 8 | body red, shade plum, edge ink | icon, ui, minus, remove | A red minus: remove, less, a lower stat |
| `lock` | 8 × 8 | steel mist, steel2 slate, body sand, shade orange, hole plum, edge ink | icon, ui, lock, locked | A gold padlock with a steel shackle and a keyhole: locked |
| `gear` | 12 × 12 | light mist, dark slate, edge ink | icon, ui, gear, settings | A steel cog with eight teeth round a hole: settings, options |
| `magnifier` | 10 × 10 | glint white, glass cyan, glass2 sky, light mist, dark slate, handle red, edge ink | icon, ui, magnifier, search | A magnifying glass: a steel ring round blue glass with a glint, a red handle: search, inspect |
| `quest-marker` | 6 × 10 | glint white, light sand, shade orange, edge plum | icon, ui, quest, alert | A gold exclamation mark: a quest to give, a warning, something new |
| `bat` | 24 × 8, 2 frames | rim slate, wing plum, body night, eye sand, edge ink | sprite, critter, bat, animated | A bat flapping: wings up, then wings down, their leading edges lit, glowing yellow eyes (2 frames of 12 x 8) |
| `rat` | 24 × 8, 2 frames | fur mist, shade slate, pink red, eye ink, edge ink | sprite, critter, rat, animated | A grey rat scurrying right: stretched out low, then bunched up with its feet under it; pink ears, feet and tail (2 frames of 12 x 8) |
| `spider` | 24 × 8, 2 frames | leg slate, body plum, sheen mist, mark red, eye sand, edge ink | sprite, critter, spider, animated | A dark spider seen from above with a red mark and a sheen on its back, its legs stepping (2 frames of 12 x 8) |
| `slime` | 20 × 8, 2 frames | glint white, light lime, mid green, dark teal, eye ink, edge ink | sprite, critter, slime, animated | A green slime bobbing: tall, then squashed flat (2 frames of 10 x 8) |
| `butterfly` | 20 × 8, 2 frames | wing sky, wing2 blue, spot white, body night, edge ink | sprite, critter, butterfly, animated | A blue butterfly with white spots: wings open, then folded up (2 frames of 10 x 8) |
| `firefly` | 16 × 8, 2 frames | core white, glow lime, halo green | sprite, critter, firefly, light, animated | A firefly glowing: a dim lime point, then a bright white heart in a lime halo (2 frames of 8 x 8) |
| `fire-burst` | 48 × 12, 4 frames | core white, inner sand, flame orange, outer red, edge plum | sprite, effect, fire, explosion, animated | A burst of fire: a white-hot flash, flames thrown out, a ring of flame, scattered embers (4 frames of 12 x 12) |
| `ice-shards` | 36 × 12, 3 frames | core white, ice cyan, shade sky, edge navy | sprite, effect, cold, ice, animated | Ice shattering: a crystal with a white heart, shards flying out, shards scattered (3 frames of 12 x 12) |
| `lightning-spark` | 20 × 10, 2 frames | core white, bolt sand, edge plum | sprite, effect, lightning, spark, animated | An electric crackle: a short sand zigzag, then a forked one with a white-hot kink (2 frames of 10 x 10) |
| `poison-bubbles` | 24 × 8, 3 frames | glint white, light lime, mid green, edge teal | sprite, effect, poison, bubbles, animated | Poison bubbling: small bubbles rise, swell and pop into droplets (3 frames of 8 x 8) |
| `heal-sparkles` | 24 × 10, 3 frames | core white, light lime, faded green, edge teal | sprite, effect, heal, sparkle, animated | Healing sparkles: a green cross of light with a white heart rising, shrinking and fading (3 frames of 8 x 10) |
| `blood-splat` | 30 × 8, 3 frames | light red, dark plum, edge ink | sprite, effect, blood, hit, animated | Blood hitting the ground: a drop, a splash, a splat with droplets (3 frames of 10 x 8) |
| `dust-puff` | 30 × 8, 3 frames | light sand, mid mist, dark slate, edge night | sprite, effect, dust, animated | A puff of dust kicked up from the ground, spreading and settling (3 frames of 10 x 8) |

## Packs

### kenney-castle: Kenney Castle Kit 2.0

76 models, 0 textures, CC0-1.0 by Kenney (https://kenney.nl/assets/castle-kit). Load it: `const kit = await loadPack('packs/kenney-castle.json')`, then `buildModel(id, { catalog: kit })`.

| id | size (m, w × h × d) | params: default (min–max) | palette slots | tags | about |
| --- | --- | --- | --- | --- | --- |
| `kenney-castle/bridge-draw` | 3.01 × 0.3 × 2.49 |  | c1 orange, c2 red | castle, architecture, bridge | Bridge draw |
| `kenney-castle/bridge-straight-pillar` | 2.79 × 3.53 × 2.79 |  | c1 orange, c3 sand, c4 sand | castle, architecture, bridge, column | Bridge straight pillar |
| `kenney-castle/bridge-straight` | 2.79 × 3.53 × 2.79 |  | c1 orange, c3 sand, c4 sand | castle, architecture, bridge | Bridge straight |
| `kenney-castle/door` | 0.45 × 1.82 × 1.08 |  | c1 orange, c2 red, c8 mist, c9 slate, c12 mist | castle, architecture, door | Door |
| `kenney-castle/flag-banner-long` | 0.12 × 6.51 × 1.89 |  | c5 navy, c6 blue, c7 white, c8 mist, c11 sky | castle, banner, cloth | Flag banner long |
| `kenney-castle/flag-banner-short` | 0.12 × 2.34 × 1.89 |  | c5 navy, c6 blue, c7 white, c8 mist, c11 sky | castle, banner, cloth | Flag banner short |
| `kenney-castle/flag-pennant` | 0.32 × 2.6 × 1.72 |  | c1 orange, c2 red, c5 navy, c6 blue, c11 sky | castle, banner, cloth | Flag pennant |
| `kenney-castle/flag-wide` | 0.32 × 2.6 × 1.64 |  | c1 orange, c2 red, c5 navy, c6 blue, c11 sky | castle, banner, cloth | Flag wide |
| `kenney-castle/flag` | 0.32 × 2.6 × 1.3 |  | c1 orange, c2 red, c5 navy, c6 blue, c11 sky | castle, banner, cloth | Flag |
| `kenney-castle/gate` | 0.45 × 2.73 × 1.99 |  | c1 orange, c2 red, c7 white, c8 mist, c9 slate, c12 mist | castle, architecture, door | Gate |
| `kenney-castle/ground-hills` | 3 × 0.86 × 3 |  | c10 green, c15 lime | castle, ground, nature, stone | Ground hills |
| `kenney-castle/ground` | 3 × 0 × 3 |  | c15 lime | castle, ground | Ground |
| `kenney-castle/metal-gate` | 0.21 × 2.19 × 2.09 |  | c7 white, c8 mist, c9 slate, c12 mist | castle, architecture, door | Metal gate |
| `kenney-castle/rocks-large` | 3.6 × 1.5 × 4.04 |  | c7 white, c8 mist, c9 slate, c13 night | castle, nature, stone | Rocks large |
| `kenney-castle/rocks-small` | 3.09 × 1.5 × 3.32 |  | c7 white, c8 mist, c9 slate, c13 night | castle, nature, stone | Rocks small |
| `kenney-castle/siege-ballista-demolished` | 5.26 × 1.53 × 4.66 |  | c1 orange, c2 red, c5 navy, c6 blue, c7 white, c8 mist, c9 slate, c11 sky, c12 mist | castle, weapon, siege | Siege ballista demolished |
| `kenney-castle/siege-ballista` | 4.89 × 2.73 × 3.6 |  | c1 orange, c2 red, c5 navy, c6 blue, c7 white, c8 mist, c9 slate, c11 sky, c12 mist | castle, weapon, siege | Siege ballista |
| `kenney-castle/siege-catapult-demolished` | 5.03 × 0.96 × 5.01 |  | c1 orange, c2 red, c5 navy, c6 blue, c8 mist, c11 sky, c12 mist | castle, weapon, siege | Siege catapult demolished |
| `kenney-castle/siege-catapult` | 5.2 × 3.99 × 3.63 |  | c1 orange, c2 red, c5 navy, c6 blue, c8 mist, c9 slate, c11 sky, c12 mist | castle, weapon, siege | Siege catapult |
| `kenney-castle/siege-ram-demolished` | 6.24 × 2.17 × 4.94 |  | c1 orange, c2 red, c4 sand, c5 navy, c6 blue, c7 white, c8 mist, c9 slate, c11 sky, c12 mist | castle, weapon, siege | Siege ram demolished |
| `kenney-castle/siege-ram` | 6.26 × 3.55 × 3 |  | c1 orange, c2 red, c4 sand, c5 navy, c6 blue, c7 white, c8 mist, c9 slate, c11 sky, c12 mist | castle, weapon, siege | Siege ram |
| `kenney-castle/siege-tower-demolished` | 6.52 × 6.29 × 5.54 |  | c1 orange, c2 red, c3 sand, c4 sand, c5 navy, c6 blue, c7 white, c8 mist, c11 sky, c12 mist | castle, weapon, siege, architecture, tower | Siege tower demolished |
| `kenney-castle/siege-tower` | 5.9 × 8.04 × 3.63 |  | c1 orange, c2 red, c3 sand, c4 sand, c5 navy, c6 blue, c7 white, c8 mist, c9 slate, c11 sky, c12 mist | castle, weapon, siege, architecture, tower | Siege tower |
| `kenney-castle/siege-trebuchet-demolished` | 5.8 × 0.93 × 6.29 |  | c1 orange, c2 red, c4 sand, c5 navy, c6 blue, c7 white | castle, weapon, siege | Siege trebuchet demolished |
| `kenney-castle/siege-trebuchet` | 5.55 × 5.88 × 3.77 |  | c1 orange, c2 red, c4 sand, c5 navy, c6 blue, c8 mist, c9 slate, c11 sky, c12 mist | castle, weapon, siege | Siege trebuchet |
| `kenney-castle/stairs-stone-square` | 0.7 × 2.02 × 2.46 |  | c1 orange, c4 sand | castle, architecture, stairs, stone | Stairs stone square |
| `kenney-castle/stairs-stone` | 0.7 × 2.02 × 2.46 |  | c1 orange, c4 sand | castle, architecture, stairs, stone | Stairs stone |
| `kenney-castle/tower-base` | 3 × 3.93 × 3 |  | c1 orange, c3 sand, c4 sand | castle, architecture, tower | Tower base |
| `kenney-castle/tower-hexagon-base` | 2.7 × 3.93 × 2.34 |  | c1 orange, c3 sand, c4 sand | castle, architecture, tower | Tower hexagon base |
| `kenney-castle/tower-hexagon-mid` | 2.86 × 1.38 × 2.47 |  | c1 orange, c4 sand, c16 ink | castle, architecture, tower | Tower hexagon mid |
| `kenney-castle/tower-hexagon-roof-secondary` | 2.93 × 2.26 × 2.54 |  | c1 orange, c4 sand, c5 navy, c6 blue, c11 sky | castle, architecture, tower, roof | Tower hexagon roof secondary |
| `kenney-castle/tower-hexagon-roof` | 2.93 × 2.49 × 2.54 |  | c1 orange, c2 red, c5 navy, c6 blue, c11 sky | castle, architecture, tower, roof | Tower hexagon roof |
| `kenney-castle/tower-hexagon-top-wood` | 2.59 × 1.38 × 2.24 |  | c1 orange, c2 red | castle, architecture, tower | Tower hexagon top wood |
| `kenney-castle/tower-hexagon-top` | 2.59 × 0.39 × 2.24 |  | c1 orange, c4 sand | castle, architecture, tower | Tower hexagon top |
| `kenney-castle/tower-slant-roof` | 3.51 × 6.42 × 3.41 |  | c1 orange, c2 red, c3 sand, c5 navy, c6 blue, c7 white, c11 sky, c16 ink | castle, architecture, tower, roof | Tower slant roof |
| `kenney-castle/tower-square-arch` | 2.79 × 3.03 × 2.79 |  | c1 orange, c3 sand, c4 sand | castle, architecture, tower | Tower square arch |
| `kenney-castle/tower-square-base-border` | 3 × 1.35 × 3 |  | c1 orange, c4 sand | castle, architecture, tower | Tower square base border |
| `kenney-castle/tower-square-base-color` | 3 × 3.03 × 3 |  | c1 orange, c3 sand, c5 navy, c6 blue, c11 sky | castle, architecture, tower | Tower square base color |
| `kenney-castle/tower-square-base` | 3 × 3.03 × 3 |  | c1 orange, c3 sand | castle, architecture, tower | Tower square base |
| `kenney-castle/tower-square-mid-color` | 2.79 × 0.6 × 2.79 |  | c3 sand, c5 navy, c6 blue, c11 sky | castle, architecture, tower | Tower square mid color |
| `kenney-castle/tower-square-mid-door` | 2.79 × 3.03 × 2.79 |  | c1 orange, c2 red, c3 sand, c4 sand | castle, architecture, tower, door | Tower square mid door |
| `kenney-castle/tower-square-mid-open-simple` | 2.79 × 2.63 × 2.79 |  | c1 orange, c2 red, c4 sand | castle, architecture, tower | Tower square mid open simple |
| `kenney-castle/tower-square-mid-open` | 2.79 × 3.03 × 2.79 |  | c1 orange, c2 red, c4 sand | castle, architecture, tower | Tower square mid open |
| `kenney-castle/tower-square-mid-windows` | 2.79 × 3.03 × 2.79 |  | c1 orange, c3 sand, c4 sand, c16 ink | castle, architecture, tower, window | Tower square mid windows |
| `kenney-castle/tower-square-mid` | 2.79 × 3.03 × 2.79 |  | c1 orange, c3 sand, c4 sand | castle, architecture, tower | Tower square mid |
| `kenney-castle/tower-square-roof` | 3 × 6.03 × 3 |  | c1 orange, c3 sand, c6 blue, c11 sky | castle, architecture, tower, roof | Tower square roof |
| `kenney-castle/tower-square-top-color` | 3 × 1.14 × 3 |  | c1 orange, c3 sand, c4 sand, c5 navy | castle, architecture, tower | Tower square top color |
| `kenney-castle/tower-square-top-roof-high-windows` | 3 × 3.24 × 3 |  | c1 orange, c4 sand, c5 navy, c6 blue, c11 sky, c16 ink | castle, architecture, tower, roof, window | Tower square top roof high windows |
| `kenney-castle/tower-square-top-roof-high` | 3 × 4.05 × 3 |  | c1 orange, c5 navy, c6 blue, c11 sky | castle, architecture, tower, roof | Tower square top roof high |
| `kenney-castle/tower-square-top-roof-rounded` | 3 × 2.85 × 3 |  | c1 orange, c5 navy, c6 blue, c11 sky | castle, architecture, tower, roof | Tower square top roof rounded |
| `kenney-castle/tower-square-top-roof` | 3 × 3 × 3 |  | c1 orange, c5 navy, c6 blue, c11 sky | castle, architecture, tower, roof | Tower square top roof |
| `kenney-castle/tower-square-top` | 3 × 0.9 × 3 |  | c1 orange, c3 sand, c4 sand | castle, architecture, tower | Tower square top |
| `kenney-castle/tower-square` | 3 × 3.93 × 3 |  | c1 orange, c3 sand, c4 sand | castle, architecture, tower | Tower square |
| `kenney-castle/tower-top` | 3 × 0.39 × 3 |  | c1 orange, c4 sand | castle, architecture, tower | Tower top |
| `kenney-castle/tree-large` | 2.67 × 5.55 × 2.67 |  | c1 orange, c2 red, c10 green, c14 teal, c15 lime | castle, nature, tree, plant | Tree large |
| `kenney-castle/tree-log` | 0.75 × 0.83 × 3 |  | c1 orange, c2 red, c3 sand | castle, nature, tree, plant, wood | Tree log |
| `kenney-castle/tree-small` | 2.21 × 4.05 × 2.16 |  | c1 orange, c2 red, c10 green, c14 teal, c15 lime | castle, nature, tree, plant | Tree small |
| `kenney-castle/tree-trunk` | 1.19 × 1.13 × 1.03 |  | c1 orange, c2 red, c4 sand | castle, nature, tree, plant | Tree trunk |
| `kenney-castle/wall-corner-half-tower` | 4.5 × 4.32 × 4.5 |  | c1 orange, c3 sand, c4 sand | castle, architecture, wall, tower | Wall corner half tower |
| `kenney-castle/wall-corner-half` | 3 × 3.93 × 3 |  | c1 orange, c3 sand, c4 sand | castle, architecture, wall | Wall corner half |
| `kenney-castle/wall-corner-slant` | 3 × 3.93 × 3 |  | c1 orange, c3 sand, c4 sand | castle, architecture, wall | Wall corner slant |
| `kenney-castle/wall-corner` | 3 × 3.93 × 3 |  | c1 orange, c3 sand, c4 sand | castle, architecture, wall | Wall corner |
| `kenney-castle/wall-doorway` | 1.5 × 3.93 × 3 |  | c1 orange, c3 sand, c4 sand | castle, architecture, wall, door | Wall doorway |
| `kenney-castle/wall-half-modular` | 1.81 × 3.93 × 3 |  | c1 orange, c3 sand, c4 sand | castle, architecture, wall | Wall half modular |
| `kenney-castle/wall-half` | 3 × 3.93 × 3 |  | c1 orange, c3 sand, c4 sand | castle, architecture, wall | Wall half |
| `kenney-castle/wall-narrow-corner` | 1.5 × 3.93 × 1.5 |  | c1 orange, c3 sand, c4 sand | castle, architecture, wall | Wall narrow corner |
| `kenney-castle/wall-narrow-gate` | 1.89 × 3.93 × 3 |  | c1 orange, c3 sand, c4 sand | castle, architecture, wall, door | Wall narrow gate |
| `kenney-castle/wall-narrow-stairs-rail` | 2.98 × 4.35 × 3.1 |  | c1 orange, c2 red, c3 sand, c4 sand | castle, architecture, wall, stairs, fence | Wall narrow stairs rail |
| `kenney-castle/wall-narrow-stairs` | 2.89 × 3.93 × 3 |  | c1 orange, c3 sand, c4 sand | castle, architecture, wall, stairs | Wall narrow stairs |
| `kenney-castle/wall-narrow-wood-fence` | 3.15 × 4.35 × 3 |  | c1 orange, c2 red, c3 sand, c4 sand | castle, architecture, wall, fence, farm | Wall narrow wood fence |
| `kenney-castle/wall-narrow-wood` | 3 × 3.93 × 3 |  | c1 orange, c2 red, c3 sand, c4 sand | castle, architecture, wall | Wall narrow wood |
| `kenney-castle/wall-narrow` | 1.5 × 3.93 × 3 |  | c1 orange, c3 sand, c4 sand | castle, architecture, wall | Wall narrow |
| `kenney-castle/wall-pillar` | 3 × 3.93 × 3 |  | c1 orange, c3 sand, c4 sand | castle, architecture, wall, column | Wall pillar |
| `kenney-castle/wall-stud` | 0.81 × 3.33 × 0.5 |  | c1 orange, c4 sand | castle, architecture, wall | Wall stud |
| `kenney-castle/wall-to-narrow` | 3 × 3.93 × 3 |  | c1 orange, c3 sand, c4 sand | castle, architecture, wall | Wall to narrow |
| `kenney-castle/wall` | 3 × 3.93 × 3 |  | c1 orange, c3 sand, c4 sand | castle, architecture, wall | Wall |

### kenney-furniture: Kenney Furniture Kit 2.0

140 models, 0 textures, CC0-1.0 by Kenney (https://kenney.nl/assets/furniture-kit). Load it: `const kit = await loadPack('packs/kenney-furniture.json')`, then `buildModel(id, { catalog: kit })`.

| id | size (m, w × h × d) | params: default (min–max) | palette slots | tags | about |
| --- | --- | --- | --- | --- | --- |
| `kenney-furniture/bathroom-cabinet` | 0.46 × 0.78 × 0.26 |  | wood sand, metal mist, woodDark orange | furniture, interior, bathroom, storage | Bathroom cabinet |
| `kenney-furniture/bathroom-cabinet-drawer` | 0.86 × 0.94 × 0.64 |  | wood sand, metalLight white, metalDark slate | furniture, interior, bathroom, storage | Bathroom cabinet drawer |
| `kenney-furniture/bathroom-mirror` | 0.6 × 0.87 × 0.29 |  | wood sand, metal mist | furniture, interior, bathroom | Bathroom mirror |
| `kenney-furniture/bathroom-sink` | 0.68 × 1.12 × 0.58 |  | metalLight white | furniture, interior, bathroom, kitchen | Bathroom sink |
| `kenney-furniture/bathroom-sink-square` | 0.86 × 1.16 × 0.6 |  | metalLight white, metalDark slate | furniture, interior, bathroom, kitchen | Bathroom sink square |
| `kenney-furniture/bathtub` | 2.38 × 0.84 × 1.12 |  | metalLight white, metalDark slate | furniture, interior, bathroom | Bathtub |
| `kenney-furniture/bear` | 0.78 × 0.9 × 0.5 |  | wood sand, metalDark slate, woodDark orange | furniture, interior, toy | Bear |
| `kenney-furniture/bed-bunk` | 1.14 × 1.7 × 2.19 |  | wood sand, metalLight white, carpet orange | furniture, interior, bed | Bed bunk |
| `kenney-furniture/bed-double` | 1.91 × 0.75 × 2.25 |  | wood sand, metalLight white, carpet orange, metal mist | furniture, interior, bed | Bed double |
| `kenney-furniture/bed-single` | 1.14 × 0.75 × 2.25 |  | wood sand, metalLight white, carpet orange, metal mist | furniture, interior, bed | Bed single |
| `kenney-furniture/bench` | 0.8 × 0.94 × 0.4 |  | wood sand | furniture, interior, seat | Bench |
| `kenney-furniture/bench-cushion` | 0.8 × 0.92 × 0.4 |  | wood sand, carpet orange | furniture, interior, seat, cloth | Bench cushion |
| `kenney-furniture/bench-cushion-low` | 0.84 × 0.4 × 0.44 |  | wood sand, metalLight white, carpet orange | furniture, interior, seat, cloth | Bench cushion low |
| `kenney-furniture/bookcase-closed` | 0.8 × 1.7 × 0.5 |  | wood sand | furniture, interior, storage, books | Bookcase closed |
| `kenney-furniture/bookcase-closed-doors` | 0.8 × 1.7 × 0.5 |  | wood sand, metal mist | furniture, interior, storage, books, architecture, door | Bookcase closed doors |
| `kenney-furniture/bookcase-closed-wide` | 1.6 × 1.58 × 0.5 |  | wood sand | furniture, interior, storage, books | Bookcase closed wide |
| `kenney-furniture/bookcase-open` | 0.8 × 1.76 × 0.5 |  | wood sand | furniture, interior, storage, books | Bookcase open |
| `kenney-furniture/bookcase-open-low` | 0.8 × 0.8 × 0.5 |  | wood sand | furniture, interior, storage, books | Bookcase open low |
| `kenney-furniture/books` | 0.3 × 0.21 × 0.19 |  | metalLight white, metal mist, carpetDarker red, plant green | furniture, interior, books | Books |
| `kenney-furniture/cabinet-bed` | 0.53 × 0.47 × 0.43 |  | wood sand, metal mist | furniture, interior, storage, bed | Cabinet bed |
| `kenney-furniture/cabinet-bed-drawer` | 0.53 × 0.53 × 0.43 |  | wood sand, metalLight white, metal mist | furniture, interior, storage, bed | Cabinet bed drawer |
| `kenney-furniture/cabinet-bed-drawer-table` | 0.53 × 0.53 × 0.43 |  | wood sand, metalLight white, metal mist | furniture, interior, storage, bed, table | Cabinet bed drawer table |
| `kenney-furniture/cabinet-television` | 1.6 × 0.62 × 0.5 |  | wood sand | furniture, interior, storage, electronics | Cabinet television |
| `kenney-furniture/cabinet-television-doors` | 1.6 × 0.62 × 0.52 |  | wood sand, metal mist | furniture, interior, storage, electronics, architecture, door | Cabinet television doors |
| `kenney-furniture/cardboard-box-closed` | 0.42 × 0.56 × 0.42 |  | wood sand, woodDark orange | furniture, interior, container | Cardboard box closed |
| `kenney-furniture/cardboard-box-open` | 0.74 × 0.56 × 0.42 |  | wood sand, woodDark orange | furniture, interior, container | Cardboard box open |
| `kenney-furniture/ceiling-fan` | 0.91 × 0.27 × 1.05 |  | wood sand, metalLight white, lamp sand | furniture, interior, architecture, ceiling, electronics | Ceiling fan |
| `kenney-furniture/chair` | 0.4 × 0.94 × 0.4 |  | wood sand | furniture, interior, seat | Chair |
| `kenney-furniture/chair-cushion` | 0.4 × 0.92 × 0.4 |  | wood sand, carpet orange | furniture, interior, seat, cloth | Chair cushion |
| `kenney-furniture/chair-desk` | 0.67 × 1.22 × 0.63 |  | carpet orange, metalDark slate | furniture, interior, seat, table | Chair desk |
| `kenney-furniture/chair-modern-cushion` | 0.4 × 0.92 × 0.4 |  | metal mist, carpetBlue sky | furniture, interior, seat, cloth | Chair modern cushion |
| `kenney-furniture/chair-modern-frame-cushion` | 0.4 × 0.92 × 0.4 |  | metal mist, carpetBlue sky | furniture, interior, seat, cloth | Chair modern frame cushion |
| `kenney-furniture/chair-rounded` | 0.4 × 0.91 × 0.4 |  | wood sand | furniture, interior, seat | Chair rounded |
| `kenney-furniture/coat-rack` | 0.9 × 0.56 × 0.27 |  | wood sand, metalDark slate | furniture, interior | Coat rack |
| `kenney-furniture/coat-rack-standing` | 0.55 × 1.54 × 0.55 |  | wood sand | furniture, interior | Coat rack standing |
| `kenney-furniture/computer-keyboard` | 0.56 × 0.06 × 0.24 |  | metalDark slate | furniture, interior, electronics | Computer keyboard |
| `kenney-furniture/computer-mouse` | 0.1 × 0.05 × 0.17 |  | metalDark slate | furniture, interior, electronics | Computer mouse |
| `kenney-furniture/computer-screen` | 0.79 × 0.59 × 0.21 |  | metal mist, metalDark slate | furniture, interior, electronics | Computer screen |
| `kenney-furniture/desk` | 1.47 × 0.77 × 0.78 |  | wood sand, metal mist | furniture, interior, table | Desk |
| `kenney-furniture/desk-corner` | 1.95 × 0.77 × 1.95 |  | wood sand, metal mist | furniture, interior, table | Desk corner |
| `kenney-furniture/doorway` | 0.97 × 2.02 × 0.23 |  | wood sand, metal mist | furniture, interior, architecture, door | Doorway |
| `kenney-furniture/doorway-front` | 0.97 × 2.02 × 0.23 |  | metalLight white, metal mist, metalDark slate | furniture, interior, architecture, door | Doorway front |
| `kenney-furniture/doorway-open` | 0.97 × 2.02 × 0.18 |  | wood sand | furniture, interior, architecture, door | Doorway open |
| `kenney-furniture/dryer` | 0.78 × 0.94 × 0.76 |  | metalLight white, metalDark slate | furniture, interior, kitchen | Dryer |
| `kenney-furniture/floor-corner` | 1.1 × 0.1 × 1.1 |  | wood sand | furniture, interior, architecture, floor | Floor corner |
| `kenney-furniture/floor-corner-round` | 1.1 × 0.1 × 1.1 |  | wood sand | furniture, interior, architecture, floor | Floor corner round |
| `kenney-furniture/floor-full` | 2 × 0.1 × 2 |  | wood sand | furniture, interior, architecture, floor | Floor full |
| `kenney-furniture/floor-half` | 1 × 0.1 × 2 |  | wood sand | furniture, interior, architecture, floor | Floor half |
| `kenney-furniture/hood-large` | 0.86 × 0.74 × 0.57 |  | metalLight white, metalDark slate | furniture, interior, kitchen | Hood large |
| `kenney-furniture/hood-modern` | 0.86 × 0.8 × 0.57 |  | metalLight white, metalDark slate | furniture, interior, kitchen | Hood modern |
| `kenney-furniture/kitchen-bar` | 0.86 × 0.84 × 0.42 |  | wood sand, metal mist, woodDark orange | furniture, interior, kitchen | Kitchen bar |
| `kenney-furniture/kitchen-bar-end` | 0.2 × 0.84 × 0.42 |  | wood sand, metal mist | furniture, interior, kitchen | Kitchen bar end |
| `kenney-furniture/kitchen-blender` | 0.27 × 0.46 × 0.22 |  | metal mist, metalDark slate | furniture, interior, kitchen | Kitchen blender |
| `kenney-furniture/kitchen-cabinet` | 0.86 × 0.9 × 0.9 |  | wood sand, metal mist, woodDark orange | furniture, interior, kitchen, storage | Kitchen cabinet |
| `kenney-furniture/kitchen-cabinet-corner-inner` | 0.92 × 0.9 × 0.92 |  | wood sand, metal mist | furniture, interior, kitchen, storage | Kitchen cabinet corner inner |
| `kenney-furniture/kitchen-cabinet-corner-round` | 0.9 × 0.9 × 0.9 |  | wood sand, metal mist | furniture, interior, kitchen, storage | Kitchen cabinet corner round |
| `kenney-furniture/kitchen-cabinet-drawer` | 0.86 × 0.9 × 0.9 |  | wood sand, metal mist, woodDark orange | furniture, interior, kitchen, storage | Kitchen cabinet drawer |
| `kenney-furniture/kitchen-cabinet-upper` | 0.86 × 0.78 × 0.44 |  | wood sand, metal mist, woodDark orange | furniture, interior, kitchen, storage | Kitchen cabinet upper |
| `kenney-furniture/kitchen-cabinet-upper-corner` | 0.43 × 0.78 × 0.42 |  | wood sand | furniture, interior, kitchen, storage | Kitchen cabinet upper corner |
| `kenney-furniture/kitchen-cabinet-upper-double` | 0.86 × 0.78 × 0.44 |  | wood sand, metal mist, woodDark orange | furniture, interior, kitchen, storage | Kitchen cabinet upper double |
| `kenney-furniture/kitchen-cabinet-upper-low` | 0.86 × 0.39 × 0.44 |  | wood sand, metal mist, woodDark orange | furniture, interior, kitchen, storage | Kitchen cabinet upper low |
| `kenney-furniture/kitchen-coffee-machine` | 0.38 × 0.35 × 0.48 |  | metalLight white, metal mist, metalDark slate | furniture, interior, kitchen | Kitchen coffee machine |
| `kenney-furniture/kitchen-fridge` | 0.86 × 1.84 × 0.58 |  | metalLight white, metal mist, metalDark slate | furniture, interior, kitchen | Kitchen fridge |
| `kenney-furniture/kitchen-fridge-built-in` | 0.86 × 1.74 × 0.9 |  | wood sand, metalLight white, metal mist, woodDark orange | furniture, interior, kitchen | Kitchen fridge built in |
| `kenney-furniture/kitchen-fridge-large` | 1.04 × 1.84 × 0.81 |  | metalLight white, metalDark slate | furniture, interior, kitchen | Kitchen fridge large |
| `kenney-furniture/kitchen-fridge-small` | 0.86 × 1.2 × 0.58 |  | metalLight white, metal mist, metalDark slate | furniture, interior, kitchen | Kitchen fridge small |
| `kenney-furniture/kitchen-microwave` | 0.58 × 0.36 × 0.46 |  | metalLight white, metal mist, metalDark slate | furniture, interior, kitchen | Kitchen microwave |
| `kenney-furniture/kitchen-sink` | 0.86 × 0.98 × 0.9 |  | wood sand, metalLight white, metal mist, metalDark slate, woodDark orange | furniture, interior, kitchen | Kitchen sink |
| `kenney-furniture/kitchen-stove` | 0.86 × 0.9 × 0.9 |  | wood sand, metalLight white, metal mist, metalDark slate | furniture, interior, kitchen | Kitchen stove |
| `kenney-furniture/kitchen-stove-electric` | 0.86 × 0.9 × 0.9 |  | wood sand, metalLight white, metal mist, metalDark slate | furniture, interior, kitchen | Kitchen stove electric |
| `kenney-furniture/lamp-round-floor` | 0.3 × 1.72 × 0.35 |  | metal mist, lamp sand | furniture, interior, lighting, light, architecture, floor | Lamp round floor |
| `kenney-furniture/lamp-round-table` | 0.3 × 0.63 × 0.35 |  | metal mist, lamp sand | furniture, interior, lighting, light, table | Lamp round table |
| `kenney-furniture/lamp-square-ceiling` | 0.24 × 0.46 × 0.24 |  | metal mist, lamp sand | furniture, interior, lighting, light, architecture, ceiling | Lamp square ceiling |
| `kenney-furniture/lamp-square-floor` | 0.24 × 1.72 × 0.24 |  | metal mist, lamp sand | furniture, interior, lighting, light, architecture, floor | Lamp square floor |
| `kenney-furniture/lamp-square-table` | 0.24 × 0.58 × 0.24 |  | metal mist, lamp sand | furniture, interior, lighting, light, table | Lamp square table |
| `kenney-furniture/lamp-wall` | 0.45 × 0.19 × 0.3 |  | metal mist, lamp sand | furniture, interior, lighting, light, architecture, wall | Lamp wall |
| `kenney-furniture/laptop` | 0.53 × 0.32 × 0.48 |  | metal mist, metalDark slate | furniture, interior, electronics | Laptop |
| `kenney-furniture/lounge-chair` | 0.98 × 0.92 × 0.82 |  | wood sand, carpet orange | furniture, interior, seat | Lounge chair |
| `kenney-furniture/lounge-chair-relax` | 0.98 × 1.26 × 1.35 |  | wood sand, carpet orange, metal mist | furniture, interior, seat | Lounge chair relax |
| `kenney-furniture/lounge-design-chair` | 1.46 × 0.8 × 0.82 |  | metal mist, carpetBlue sky | furniture, interior, seat | Lounge design chair |
| `kenney-furniture/lounge-design-sofa` | 2.24 × 0.8 × 0.82 |  | metal mist, carpetBlue sky | furniture, interior, seat | Lounge design sofa |
| `kenney-furniture/lounge-design-sofa-corner` | 2.7 × 0.8 × 2.7 |  | metal mist, carpetBlue sky | furniture, interior, seat | Lounge design sofa corner |
| `kenney-furniture/lounge-sofa` | 1.96 × 0.92 × 0.82 |  | wood sand, carpet orange | furniture, interior, seat | Lounge sofa |
| `kenney-furniture/lounge-sofa-corner` | 1.96 × 0.92 × 1.96 |  | wood sand, carpet orange | furniture, interior, seat | Lounge sofa corner |
| `kenney-furniture/lounge-sofa-long` | 1.96 × 0.92 × 1.64 |  | wood sand, carpet orange | furniture, interior, seat | Lounge sofa long |
| `kenney-furniture/lounge-sofa-ottoman` | 0.88 × 0.46 × 0.9 |  | wood sand, carpet orange | furniture, interior, seat | Lounge sofa ottoman |
| `kenney-furniture/paneling` | 1 × 1.19 × 0.06 |  | wood sand | furniture, interior, wood, wall | Paneling |
| `kenney-furniture/pillow` | 0.46 × 0.44 × 0.18 |  | carpet orange | furniture, interior, cloth | Pillow |
| `kenney-furniture/pillow-blue` | 0.46 × 0.26 × 0.13 |  | carpetBlue sky | furniture, interior, cloth | Pillow blue |
| `kenney-furniture/pillow-blue-long` | 1.03 × 0.44 × 0.18 |  | carpetBlue sky | furniture, interior, cloth | Pillow blue long |
| `kenney-furniture/pillow-long` | 0.77 × 0.44 × 0.18 |  | carpet orange | furniture, interior, cloth | Pillow long |
| `kenney-furniture/plant-small1` | 0.19 × 0.28 × 0.19 |  | wood sand, plant green | furniture, interior, nature, plant | Plant small1 |
| `kenney-furniture/plant-small2` | 0.19 × 0.28 × 0.19 |  | wood sand, plant green | furniture, interior, nature, plant | Plant small2 |
| `kenney-furniture/plant-small3` | 0.2 × 0.29 × 0.17 |  | wood sand, plant green | furniture, interior, nature, plant | Plant small3 |
| `kenney-furniture/potted-plant` | 0.42 × 1.31 × 0.48 |  | wood sand, woodDark orange, plant green | furniture, interior, nature, plant | Potted plant |
| `kenney-furniture/radio` | 0.63 × 0.46 × 0.2 |  | wood sand, metal mist, metalDark slate | furniture, interior, electronics | Radio |
| `kenney-furniture/rug-doormat` | 0.86 × 0.02 × 0.47 |  | wood sand | furniture, interior, cloth | Rug doormat |
| `kenney-furniture/rug-rectangle` | 3.14 × 0.02 × 1.84 |  | carpet orange, carpetDarker red | furniture, interior, cloth | Rug rectangle |
| `kenney-furniture/rug-round` | 1.84 × 0.02 × 1.84 |  | carpet orange, carpetDarker red | furniture, interior, cloth | Rug round |
| `kenney-furniture/rug-rounded` | 3.14 × 0.02 × 1.84 |  | carpet orange, carpetDarker red | furniture, interior, cloth | Rug rounded |
| `kenney-furniture/rug-square` | 1.81 × 0.02 × 1.84 |  | carpet orange, carpetDarker red | furniture, interior, cloth | Rug square |
| `kenney-furniture/shower` | 1.12 × 2.19 × 1.16 |  | metalLight white, metal mist, metalDark slate | furniture, interior, bathroom | Shower |
| `kenney-furniture/shower-round` | 1.12 × 2.19 × 1.12 |  | metalLight white, metal mist, metalDark slate | furniture, interior, bathroom | Shower round |
| `kenney-furniture/side-table` | 1.07 × 0.77 × 0.44 |  | wood sand, metalLight white | furniture, interior, table | Side table |
| `kenney-furniture/side-table-drawers` | 1.07 × 0.77 × 0.44 |  | wood sand, metalLight white, metal mist | furniture, interior, table, storage | Side table drawers |
| `kenney-furniture/speaker` | 0.3 × 1.27 × 0.3 |  | wood sand, metalDark slate | furniture, interior, electronics | Speaker |
| `kenney-furniture/speaker-small` | 0.3 × 0.6 × 0.27 |  | wood sand, metalDark slate | furniture, interior, electronics | Speaker small |
| `kenney-furniture/stairs` | 3.65 × 2.68 × 1.58 |  | wood sand, woodDark orange | furniture, interior, architecture, stairs | Stairs |
| `kenney-furniture/stairs-corner` | 3.55 × 2.68 × 2.85 |  | wood sand, woodDark orange | furniture, interior, architecture, stairs | Stairs corner |
| `kenney-furniture/stairs-open` | 3.65 × 2.68 × 1.58 |  | wood sand, metal mist, woodDark orange | furniture, interior, architecture, stairs | Stairs open |
| `kenney-furniture/stairs-open-single` | 3.65 × 2.68 × 1.58 |  | wood sand, metal mist | furniture, interior, architecture, stairs | Stairs open single |
| `kenney-furniture/stool-bar` | 0.53 × 0.87 × 0.46 |  | wood sand, carpet orange | furniture, interior, seat | Stool bar |
| `kenney-furniture/stool-bar-square` | 0.31 × 0.81 × 0.3 |  | wood sand, carpet orange | furniture, interior, seat | Stool bar square |
| `kenney-furniture/table` | 1.68 × 0.65 × 0.89 |  | wood sand | furniture, interior, table | Table |
| `kenney-furniture/table-cloth` | 1.68 × 0.65 × 0.89 |  | wood sand, carpet orange | furniture, interior, table | Table cloth |
| `kenney-furniture/table-coffee` | 1.32 × 0.46 × 0.8 |  | wood sand | furniture, interior, table | Table coffee |
| `kenney-furniture/table-coffee-glass` | 1.32 × 0.46 × 0.8 |  | metal mist | furniture, interior, table | Table coffee glass |
| `kenney-furniture/table-coffee-glass-square` | 0.8 × 0.46 × 0.8 |  | metal mist | furniture, interior, table | Table coffee glass square |
| `kenney-furniture/table-coffee-square` | 0.8 × 0.46 × 0.8 |  | wood sand | furniture, interior, table | Table coffee square |
| `kenney-furniture/table-cross` | 1.7 × 0.69 × 0.89 |  | wood sand | furniture, interior, table | Table cross |
| `kenney-furniture/table-cross-cloth` | 1.7 × 0.69 × 0.89 |  | wood sand, carpet orange | furniture, interior, table | Table cross cloth |
| `kenney-furniture/table-glass` | 1.68 × 0.65 × 0.89 |  | metal mist | furniture, interior, table | Table glass |
| `kenney-furniture/table-round` | 1.39 × 0.73 × 1.6 |  | wood sand | furniture, interior, table | Table round |
| `kenney-furniture/television-antenna` | 0.53 × 0.2 × 0.16 |  | metalDark slate | furniture, interior, electronics | Television antenna |
| `kenney-furniture/television-modern` | 1.37 × 0.91 × 0.26 |  | metal mist, metalDark slate | furniture, interior, electronics | Television modern |
| `kenney-furniture/television-vintage` | 0.82 × 0.54 × 0.54 |  | wood sand, metal mist, metalDark slate | furniture, interior, electronics | Television vintage |
| `kenney-furniture/toaster` | 0.38 × 0.26 × 0.2 |  | metal mist, metalDark slate | furniture, interior, kitchen | Toaster |
| `kenney-furniture/toilet` | 0.63 × 0.9 × 0.95 |  | metalLight white, metalDark slate | furniture, interior, bathroom | Toilet |
| `kenney-furniture/toilet-square` | 0.61 × 0.9 × 0.77 |  | metalLight white | furniture, interior, bathroom | Toilet square |
| `kenney-furniture/trashcan` | 0.42 × 0.86 × 0.47 |  | metal mist, metalDark slate | furniture, interior | Trashcan |
| `kenney-furniture/wall` | 2 × 2.58 × 0.1 |  | wood sand, metalLight white, metalDark slate | furniture, interior, architecture, wall | Wall |
| `kenney-furniture/wall-corner` | 1.1 × 2.58 × 1.1 |  | wood sand, metalLight white, metalDark slate | furniture, interior, architecture, wall | Wall corner |
| `kenney-furniture/wall-corner-rond` | 1.1 × 2.58 × 1.1 |  | wood sand, metalLight white, metalDark slate | furniture, interior, architecture, wall | Wall corner rond |
| `kenney-furniture/wall-doorway` | 2 × 2.58 × 0.18 |  | wood sand, metalLight white, metalDark slate | furniture, interior, architecture, wall, door | Wall doorway |
| `kenney-furniture/wall-doorway-wide` | 2 × 2.58 × 0.18 |  | wood sand, metalLight white, metalDark slate | furniture, interior, architecture, wall, door | Wall doorway wide |
| `kenney-furniture/wall-half` | 1 × 2.58 × 0.1 |  | wood sand, metalLight white, metalDark slate | furniture, interior, architecture, wall | Wall half |
| `kenney-furniture/wall-window` | 2 × 2.58 × 0.18 |  | wood sand, metalLight white, metal mist, metalDark slate | furniture, interior, architecture, wall, window | Wall window |
| `kenney-furniture/wall-window-slide` | 2 × 2.58 × 0.18 |  | wood sand, metalLight white, metal mist, metalDark slate | furniture, interior, architecture, wall, window | Wall window slide |
| `kenney-furniture/washer` | 0.78 × 0.94 × 0.78 |  | metalLight white, metal mist, metalDark slate | furniture, interior, kitchen | Washer |
| `kenney-furniture/washer-dryer-stacked` | 0.78 × 1.88 × 0.78 |  | metalLight white, metal mist, metalDark slate | furniture, interior, kitchen | Washer dryer stacked |

### kenney-mini-dungeon: Kenney Mini Dungeon 2.0

30 models, 0 textures, CC0-1.0 by Kenney (https://kenney.nl/assets/mini-dungeon). Load it: `const kit = await loadPack('packs/kenney-mini-dungeon.json')`, then `buildModel(id, { catalog: kit })`.

| id | size (m, w × h × d) | params: default (min–max) | palette slots | tags | about |
| --- | --- | --- | --- | --- | --- |
| `kenney-mini-dungeon/banner` | 1.2 × 1.29 × 0.2 |  | c3 orange, c6 orange, c9 orange | dungeon, banner, cloth | Banner |
| `kenney-mini-dungeon/barrel` | 1.04 × 0.95 × 1.04 |  | c3 orange, c4 mist, c5 mist | dungeon, container, wood | Barrel |
| `kenney-mini-dungeon/chair` | 0.69 × 0.95 × 0.75 |  | c3 orange, c7 red | dungeon, furniture, seat | Chair |
| `kenney-mini-dungeon/character-human` | 1.56 × 1.51 × 0.72 |  | c1 slate, c2 night, c3 orange, c4 mist, c7 red, c13 orange, c15 sand, c16 white | dungeon, character | Character human |
| `kenney-mini-dungeon/character-orc` | 1.56 × 1.56 × 0.66 |  | c2 night, c3 orange, c6 orange, c10 sand, c11 teal, c12 green, c14 lime, c16 white | dungeon, character, monster | Character orc |
| `kenney-mini-dungeon/chest` | 1 × 0.9 × 1 |  | c1 slate, c2 night, c3 orange, c4 mist, c5 mist | dungeon, container, loot | Chest |
| `kenney-mini-dungeon/coin` | 0.83 × 0.83 × 0.33 |  | c8 sand, c10 sand | dungeon, loot, gold, coin | Coin |
| `kenney-mini-dungeon/column` | 1 × 2.2 × 1 |  | c1 slate, c4 mist, c5 mist | dungeon, architecture, column | Column |
| `kenney-mini-dungeon/dirt` | 2 × 1.8 × 2 |  | c2 night | dungeon, ground | Dirt |
| `kenney-mini-dungeon/floor-detail` | 2 × 0.1 × 2 |  | c1 slate, c5 mist | dungeon, architecture, floor | Floor detail |
| `kenney-mini-dungeon/floor` | 2 × 0 × 2 |  | c1 slate | dungeon, architecture, floor | Floor |
| `kenney-mini-dungeon/gate` | 1.6 × 1.5 × 0.4 |  | c1 slate, c3 orange, c4 mist, c5 mist | dungeon, architecture, door | Gate |
| `kenney-mini-dungeon/key` | 1.18 × 0.71 × 0.31 |  | c8 sand, c10 sand | dungeon, loot, key | Key |
| `kenney-mini-dungeon/pot` | 1.2 × 0.86 × 0.81 |  | c3 orange, c4 mist, c5 mist | dungeon, container, clay | Pot |
| `kenney-mini-dungeon/potion` | 0.66 × 0.8 × 0.66 |  | c3 orange, c4 mist, c5 mist, c6 orange, c9 orange | dungeon, loot, potion, consumable | Potion |
| `kenney-mini-dungeon/rocks` | 2 × 1 × 2 |  | c1 slate | dungeon, nature, stone | Rocks |
| `kenney-mini-dungeon/shield-rectangle` | 0.55 × 0.59 × 0.26 |  | c3 orange, c4 mist, c5 mist | dungeon, shield | Shield rectangle |
| `kenney-mini-dungeon/shield-round` | 0.76 × 0.76 × 0.21 |  | c1 slate, c3 orange, c4 mist, c5 mist | dungeon, shield | Shield round |
| `kenney-mini-dungeon/stairs` | 2 × 1.8 × 2 |  | c1 slate | dungeon, architecture, stairs | Stairs |
| `kenney-mini-dungeon/stones` | 1.78 × 0.91 × 1.61 |  | c1 slate | dungeon, stone | Stones |
| `kenney-mini-dungeon/table` | 1.75 × 0.63 × 1.3 |  | c3 orange, c7 red | dungeon, furniture, table | Table |
| `kenney-mini-dungeon/trap` | 1.58 × 0.57 × 1.58 |  | c1 slate, c2 night, c4 mist, c5 mist | dungeon, trap | Trap |
| `kenney-mini-dungeon/wall-half` | 2 × 2 × 2 |  | c1 slate, c2 night, c4 mist, c5 mist | dungeon, architecture, wall | Wall half |
| `kenney-mini-dungeon/wall-narrow` | 2 × 2 × 2 |  | c1 slate, c2 night, c4 mist, c5 mist | dungeon, architecture, wall | Wall narrow |
| `kenney-mini-dungeon/wall-opening` | 2 × 2 × 2.1 |  | c1 slate, c2 night, c4 mist, c5 mist | dungeon, architecture, wall | Wall opening |
| `kenney-mini-dungeon/wall` | 2 × 2.2 × 2 |  | c1 slate, c4 mist, c5 mist | dungeon, architecture, wall | Wall |
| `kenney-mini-dungeon/weapon-spear` | 0.29 × 1.2 × 0.24 |  | c3 orange, c4 mist, c5 mist | dungeon, weapon, spear | Weapon spear |
| `kenney-mini-dungeon/weapon-sword` | 0.47 × 0.9 × 0.22 |  | c1 slate, c3 orange, c4 mist, c5 mist | dungeon, weapon, sword | Weapon sword |
| `kenney-mini-dungeon/wood-structure` | 2.18 × 2 × 2.18 |  | c3 orange, c6 orange | dungeon | Wood structure |
| `kenney-mini-dungeon/wood-support` | 2.18 × 2 × 0.48 |  | c3 orange, c6 orange | dungeon | Wood support |

### kenney-nature: Kenney Nature Kit 2.1

329 models, 0 textures, CC0-1.0 by Kenney (https://kenney.nl/assets/nature-kit). Load it: `const kit = await loadPack('packs/kenney-nature.json')`, then `buildModel(id, { catalog: kit })`.

| id | size (m, w × h × d) | params: default (min–max) | palette slots | tags | about |
| --- | --- | --- | --- | --- | --- |
| `kenney-nature/bed` | 1 × 0.82 × 2.24 |  | dirt orange, leafsDark teal, c1 white | nature, furniture, bed | Bed |
| `kenney-nature/bed-floor` | 0.96 × 0.28 × 2.24 |  | leafsDark teal, c1 white | nature, furniture, bed, architecture, floor | Bed floor |
| `kenney-nature/bridge-center-stone` | 3 × 0.9 × 3 |  | stone mist | nature, architecture, bridge, stone | Bridge center stone |
| `kenney-nature/bridge-center-stone-round` | 3 × 0.6 × 3 |  | stone mist | nature, architecture, bridge, stone | Bridge center stone round |
| `kenney-nature/bridge-center-wood` | 3 × 0.9 × 3 |  | dirt orange, stone mist | nature, architecture, bridge | Bridge center wood |
| `kenney-nature/bridge-center-wood-round` | 3 × 0.6 × 3 |  | dirt orange, stone mist | nature, architecture, bridge | Bridge center wood round |
| `kenney-nature/bridge-side-stone` | 3.06 × 1.2 × 3.12 |  | stone mist | nature, architecture, bridge, stone | Bridge side stone |
| `kenney-nature/bridge-side-stone-round` | 3.06 × 1.35 × 3.12 |  | stone mist | nature, architecture, bridge, stone | Bridge side stone round |
| `kenney-nature/bridge-side-wood` | 3.06 × 1.2 × 3.12 |  | dirt orange, stone mist | nature, architecture, bridge | Bridge side wood |
| `kenney-nature/bridge-side-wood-round` | 3.06 × 1.35 × 3.12 |  | dirt orange, stone mist | nature, architecture, bridge | Bridge side wood round |
| `kenney-nature/bridge-stone` | 3.12 × 1.2 × 3.12 |  | stone mist | nature, architecture, bridge, stone | Bridge stone |
| `kenney-nature/bridge-stone-narrow` | 3.12 × 1.05 × 2.52 |  | stone mist | nature, architecture, bridge, stone | Bridge stone narrow |
| `kenney-nature/bridge-stone-round` | 3.12 × 1.35 × 3.12 |  | stone mist | nature, architecture, bridge, stone | Bridge stone round |
| `kenney-nature/bridge-stone-round-narrow` | 3.12 × 1.2 × 2.52 |  | stone mist | nature, architecture, bridge, stone | Bridge stone round narrow |
| `kenney-nature/bridge-wood` | 3.12 × 1.2 × 3.12 |  | dirt orange, stone mist | nature, architecture, bridge | Bridge wood |
| `kenney-nature/bridge-wood-narrow` | 3.12 × 1.05 × 2.52 |  | dirt orange, stone mist | nature, architecture, bridge | Bridge wood narrow |
| `kenney-nature/bridge-wood-round` | 3.12 × 1.35 × 3.12 |  | dirt orange, stone mist | nature, architecture, bridge | Bridge wood round |
| `kenney-nature/bridge-wood-round-narrow` | 3.12 × 1.2 × 2.52 |  | dirt orange, stone mist | nature, architecture, bridge | Bridge wood round narrow |
| `kenney-nature/cactus-short` | 1.02 × 1.6 × 0.89 |  | grass green | nature, plant, desert | Cactus short |
| `kenney-nature/cactus-tall` | 1.19 × 2.25 × 1.02 |  | grass green | nature, plant, desert | Cactus tall |
| `kenney-nature/campfire-bricks` | 1.41 × 0.2 × 1.41 |  | stone mist | nature, fire, camp, stone, wall | Campfire bricks |
| `kenney-nature/campfire-logs` | 0.88 × 0.19 × 0.88 |  | dirt orange | nature, fire, camp, wood | Campfire logs |
| `kenney-nature/campfire-planks` | 1.05 × 0.12 × 1.05 |  | dirt orange | nature, fire, camp, wood | Campfire planks |
| `kenney-nature/campfire-stones` | 1.62 × 0.23 × 1.55 |  | stone mist | nature, fire, camp, stone | Campfire stones |
| `kenney-nature/canoe` | 0.9 × 0.55 × 3.45 |  | dirt orange, leafsFall sand | nature, transport, water, wood | Canoe |
| `kenney-nature/canoe-paddle` | 0.23 × 0.11 × 1.77 |  | dirt orange | nature, transport, water, wood, tool | Canoe paddle |
| `kenney-nature/cliff-block-rock` | 3 × 3 × 3 |  | dirt orange, grass green | nature, stone | Cliff block rock |
| `kenney-nature/cliff-block-stone` | 3 × 3 × 3 |  | stone mist, grass green | nature, stone | Cliff block stone |
| `kenney-nature/cliff-block-cave-rock` | 3 × 3 × 3 |  | dirt orange, grass green | nature, stone, cave | Cliff block cave rock |
| `kenney-nature/cliff-block-cave-stone` | 3 × 3 × 3 |  | stone mist, grass green | nature, stone, cave | Cliff block cave stone |
| `kenney-nature/cliff-block-diagonal-rock` | 3 × 3 × 3 |  | dirt orange, grass green | nature, stone | Cliff block diagonal rock |
| `kenney-nature/cliff-block-diagonal-stone` | 3 × 3 × 3 |  | stone mist, grass green | nature, stone | Cliff block diagonal stone |
| `kenney-nature/cliff-block-half-rock` | 3 × 1.5 × 3 |  | dirt orange, grass green | nature, stone | Cliff block half rock |
| `kenney-nature/cliff-block-half-stone` | 3 × 1.5 × 3 |  | stone mist, grass green | nature, stone | Cliff block half stone |
| `kenney-nature/cliff-block-quarter-rock` | 3 × 0.75 × 3 |  | dirt orange, grass green | nature, stone | Cliff block quarter rock |
| `kenney-nature/cliff-block-quarter-stone` | 3 × 0.75 × 3 |  | stone mist, grass green | nature, stone | Cliff block quarter stone |
| `kenney-nature/cliff-block-slope-rock` | 3.6 × 3 × 3 |  | dirt orange, grass green | nature, stone, architecture | Cliff block slope rock |
| `kenney-nature/cliff-block-slope-stone` | 3.6 × 3 × 3 |  | stone mist, grass green | nature, stone, architecture | Cliff block slope stone |
| `kenney-nature/cliff-block-slope-half-walls-rock` | 3 × 1.5 × 3 |  | dirt orange, grass green | nature, stone, architecture, wall | Cliff block slope half walls rock |
| `kenney-nature/cliff-block-slope-half-walls-stone` | 3 × 1.5 × 3 |  | stone mist, grass green | nature, stone, architecture, wall | Cliff block slope half walls stone |
| `kenney-nature/cliff-block-slope-walls-rock` | 3 × 3 × 3 |  | dirt orange, grass green | nature, stone, architecture, wall | Cliff block slope walls rock |
| `kenney-nature/cliff-block-slope-walls-stone` | 3 × 3 × 3 |  | stone mist, grass green | nature, stone, architecture, wall | Cliff block slope walls stone |
| `kenney-nature/cliff-cave-rock` | 3 × 3 × 0.51 |  | dirt orange | nature, stone, cave | Cliff cave rock |
| `kenney-nature/cliff-cave-stone` | 3 × 3 × 0.51 |  | stone mist | nature, stone, cave | Cliff cave stone |
| `kenney-nature/cliff-corner-rock` | 0.51 × 3 × 0.51 |  | dirt orange | nature, stone | Cliff corner rock |
| `kenney-nature/cliff-corner-stone` | 0.51 × 3 × 0.51 |  | stone mist | nature, stone | Cliff corner stone |
| `kenney-nature/cliff-corner-inner-rock` | 3 × 3 × 3 |  | dirt orange | nature, stone | Cliff corner inner rock |
| `kenney-nature/cliff-corner-inner-stone` | 3 × 3 × 3 |  | stone mist | nature, stone | Cliff corner inner stone |
| `kenney-nature/cliff-corner-inner-large-rock` | 3 × 3 × 3 |  | dirt orange | nature, stone | Cliff corner inner large rock |
| `kenney-nature/cliff-corner-inner-large-stone` | 3 × 3 × 3 |  | stone mist | nature, stone | Cliff corner inner large stone |
| `kenney-nature/cliff-corner-inner-top-rock` | 3 × 3 × 3 |  | dirt orange, grass green | nature, stone | Cliff corner inner top rock |
| `kenney-nature/cliff-corner-inner-top-stone` | 3 × 3 × 3 |  | stone mist, grass green | nature, stone | Cliff corner inner top stone |
| `kenney-nature/cliff-corner-large-rock` | 1.26 × 3 × 1.26 |  | dirt orange | nature, stone | Cliff corner large rock |
| `kenney-nature/cliff-corner-large-stone` | 1.26 × 3 × 1.26 |  | stone mist | nature, stone | Cliff corner large stone |
| `kenney-nature/cliff-corner-top-rock` | 0.81 × 3 × 0.81 |  | dirt orange, grass green | nature, stone | Cliff corner top rock |
| `kenney-nature/cliff-corner-top-stone` | 0.81 × 3 × 0.81 |  | stone mist, grass green | nature, stone | Cliff corner top stone |
| `kenney-nature/cliff-diagonal-rock` | 3.51 × 3 × 3.51 |  | dirt orange | nature, stone | Cliff diagonal rock |
| `kenney-nature/cliff-diagonal-stone` | 3.51 × 3 × 3.51 |  | stone mist | nature, stone | Cliff diagonal stone |
| `kenney-nature/cliff-half-rock` | 3 × 1.5 × 1.26 |  | dirt orange, grass green | nature, stone | Cliff half rock |
| `kenney-nature/cliff-half-stone` | 3 × 1.5 × 1.26 |  | stone mist, grass green | nature, stone | Cliff half stone |
| `kenney-nature/cliff-half-corner-rock` | 1.26 × 1.5 × 1.26 |  | dirt orange, grass green | nature, stone | Cliff half corner rock |
| `kenney-nature/cliff-half-corner-stone` | 1.26 × 1.5 × 1.26 |  | stone mist, grass green | nature, stone | Cliff half corner stone |
| `kenney-nature/cliff-half-corner-inner-rock` | 3 × 1.5 × 3 |  | dirt orange, grass green, c1 white | nature, stone | Cliff half corner inner rock |
| `kenney-nature/cliff-half-corner-inner-stone` | 3 × 1.5 × 3 |  | stone mist, grass green, c1 white | nature, stone | Cliff half corner inner stone |
| `kenney-nature/cliff-large-rock` | 3 × 3 × 1.26 |  | dirt orange | nature, stone | Cliff large rock |
| `kenney-nature/cliff-large-stone` | 3 × 3 × 1.26 |  | stone mist | nature, stone | Cliff large stone |
| `kenney-nature/cliff-rock` | 3 × 3 × 0.51 |  | dirt orange | nature, stone | Cliff rock |
| `kenney-nature/cliff-steps-rock` | 3 × 3 × 3.15 |  | dirt orange, grass green | nature, stone, architecture, stairs | Cliff steps rock |
| `kenney-nature/cliff-steps-stone` | 3 × 3 × 3.15 |  | stone mist, grass green | nature, stone, architecture, stairs | Cliff steps stone |
| `kenney-nature/cliff-steps-corner-rock` | 3.15 × 3 × 3.15 |  | dirt orange, grass green | nature, stone, architecture, stairs | Cliff steps corner rock |
| `kenney-nature/cliff-steps-corner-stone` | 3.15 × 3 × 3.15 |  | stone mist, grass green | nature, stone, architecture, stairs | Cliff steps corner stone |
| `kenney-nature/cliff-steps-corner-inner-rock` | 3 × 3 × 3 |  | dirt orange, grass green | nature, stone, architecture, stairs | Cliff steps corner inner rock |
| `kenney-nature/cliff-steps-corner-inner-stone` | 3 × 3 × 3 |  | stone mist, grass green | nature, stone, architecture, stairs | Cliff steps corner inner stone |
| `kenney-nature/cliff-stone` | 3 × 3 × 0.51 |  | stone mist | nature, stone | Cliff stone |
| `kenney-nature/cliff-top-rock` | 3 × 3 × 0.81 |  | dirt orange, grass green | nature, stone | Cliff top rock |
| `kenney-nature/cliff-top-stone` | 3 × 3 × 0.81 |  | stone mist, grass green | nature, stone | Cliff top stone |
| `kenney-nature/cliff-top-diagonal-rock` | 3.81 × 3 × 3.81 |  | dirt orange, grass green | nature, stone | Cliff top diagonal rock |
| `kenney-nature/cliff-top-diagonal-stone` | 3.81 × 3 × 3.81 |  | stone mist, grass green | nature, stone | Cliff top diagonal stone |
| `kenney-nature/cliff-waterfall-rock` | 3 × 3 × 0.51 |  | dirt orange, stone mist, c1 white | nature, stone, water | Cliff waterfall rock |
| `kenney-nature/cliff-waterfall-stone` | 3 × 3 × 0.51 |  | stone mist | nature, stone, water | Cliff waterfall stone |
| `kenney-nature/cliff-waterfall-top-rock` | 3 × 3 × 0.81 |  | dirt orange, stone mist, grass green, c1 white | nature, stone, water | Cliff waterfall top rock |
| `kenney-nature/cliff-waterfall-top-stone` | 3 × 3 × 0.81 |  | dirt orange, stone mist, grass green, c1 white | nature, stone, water | Cliff waterfall top stone |
| `kenney-nature/crop-carrot` | 1.03 × 1.86 × 1.03 |  | grass green, leafsFall sand | nature, farm, plant, food | Crop carrot |
| `kenney-nature/crop-melon` | 1.25 × 1.04 × 1.08 |  | dirt orange, grass green, leafsDark teal | nature, farm, plant, food | Crop melon |
| `kenney-nature/crop-pumpkin` | 1.32 × 1 × 1.36 |  | grass green, leafsFall sand | nature, farm, plant, food | Crop pumpkin |
| `kenney-nature/crop-turnip` | 1.03 × 1.98 × 1.03 |  | grass green, c1 white | nature, farm, plant, food | Crop turnip |
| `kenney-nature/crops-bamboo-stage-a` `kenney-nature/crops-bamboo-stage-b` | 1.02 × 1.65–2.67 × 0.92 |  | grass green | nature, farm, plant, food | Crops bamboo stage a (+1 variant) |
| `kenney-nature/crops-corn-stage-a` `kenney-nature/crops-corn-stage-b` `kenney-nature/crops-corn-stage-c` `kenney-nature/crops-corn-stage-d` | 0.91–1.32 × 1.5–3.75 × 0.91–1.32 |  | grass green, yellow sand | nature, farm, plant, food | Crops corn stage a (+3 variants) |
| `kenney-nature/crops-dirt-double-row` | 3 × 0.15 × 2.81 |  | dirt orange | nature, farm, plant, food, ground | Crops dirt double row |
| `kenney-nature/crops-dirt-double-row-corner` | 2.81 × 0.15 × 2.81 |  | dirt orange | nature, farm, plant, food, ground | Crops dirt double row corner |
| `kenney-nature/crops-dirt-double-row-end` | 1.8 × 0.15 × 2.81 |  | dirt orange | nature, farm, plant, food, ground | Crops dirt double row end |
| `kenney-nature/crops-dirt-row` | 3 × 0.15 × 1.86 |  | dirt orange | nature, farm, plant, food, ground | Crops dirt row |
| `kenney-nature/crops-dirt-row-corner` | 2.34 × 0.15 × 2.34 |  | dirt orange | nature, farm, plant, food, ground | Crops dirt row corner |
| `kenney-nature/crops-dirt-row-end` | 1.8 × 0.15 × 1.86 |  | dirt orange | nature, farm, plant, food, ground | Crops dirt row end |
| `kenney-nature/crops-dirt-single` | 1.2 × 0.3 × 1.04 |  | dirt orange | nature, farm, plant, food, ground | Crops dirt single |
| `kenney-nature/crops-leafs-stage-a` `kenney-nature/crops-leafs-stage-b` | 1.17 × 1.28–2.03 × 1.17 |  | grass green | nature, farm, plant, food | Crops leafs stage a (+1 variant) |
| `kenney-nature/crops-wheat-stage-a` `kenney-nature/crops-wheat-stage-b` | 1.62 × 1–1.6 × 1.34 |  | grass green, c1 white | nature, farm, plant, food | Crops wheat stage a (+1 variant) |
| `kenney-nature/fence-bend` | 3 × 1.04 × 3 |  | dirt orange | nature, fence, farm | Fence bend |
| `kenney-nature/fence-bend-center` | 3 × 1.04 × 3 |  | dirt orange, c1 white | nature, fence, farm | Fence bend center |
| `kenney-nature/fence-corner` | 3 × 1.04 × 3 |  | dirt orange | nature, fence, farm | Fence corner |
| `kenney-nature/fence-gate` | 3 × 1.04 × 0.21 |  | dirt orange, stone mist | nature, fence, farm, architecture, door | Fence gate |
| `kenney-nature/fence-planks` | 3 × 1.04 × 0.29 |  | dirt orange | nature, fence, farm, wood | Fence planks |
| `kenney-nature/fence-planks-double` | 3 × 1.04 × 0.18 |  | dirt orange | nature, fence, farm, wood | Fence planks double |
| `kenney-nature/fence-simple` | 3 × 1.04 × 0.21 |  | dirt orange | nature, fence, farm | Fence simple |
| `kenney-nature/fence-simple-center` | 3 × 1.04 × 0.21 |  | dirt orange | nature, fence, farm | Fence simple center |
| `kenney-nature/fence-simple-diagonal` | 3 × 1.04 × 3 |  | dirt orange | nature, fence, farm | Fence simple diagonal |
| `kenney-nature/fence-simple-diagonal-center` | 3 × 1.04 × 3 |  | dirt orange, c1 white | nature, fence, farm | Fence simple diagonal center |
| `kenney-nature/fence-simple-high` | 3.12 × 1.04 × 0.33 |  | dirt orange | nature, fence, farm | Fence simple high |
| `kenney-nature/fence-simple-low` | 3.12 × 0.58 × 0.33 |  | dirt orange | nature, fence, farm | Fence simple low |
| `kenney-nature/flower-purple-a` `kenney-nature/flower-purple-b` `kenney-nature/flower-purple-c` | 0.48–0.62 × 0.55–0.73 × 0.54–0.72 |  | grass green, purple plum, c1 white | nature, plant, flower | Flower purple a (+2 variants) |
| `kenney-nature/flower-red-a` `kenney-nature/flower-red-b` `kenney-nature/flower-red-c` | 0.48–0.62 × 0.7–0.88 × 0.54–0.72 |  | grass green, red red, c1 white | nature, plant, flower | Flower red a (+2 variants) |
| `kenney-nature/flower-yellow-a` `kenney-nature/flower-yellow-b` `kenney-nature/flower-yellow-c` | 0.48–0.62 × 0.4–0.58 × 0.54–0.72 |  | grass green, yellow sand, c1 white | nature, plant, flower | Flower yellow a (+2 variants) |
| `kenney-nature/grass` | 1.14 × 0.76 × 1.18 |  | grass green | nature, plant, grass | Grass |
| `kenney-nature/grass-large` | 1.23 × 0.76 × 1.22 |  | grass green | nature, plant, grass | Grass large |
| `kenney-nature/grass-leafs` | 0.7 × 0.43 × 0.77 |  | grass green | nature, plant, grass | Grass leafs |
| `kenney-nature/grass-leafs-large` | 1.43 × 0.43 × 1.46 |  | grass green | nature, plant, grass | Grass leafs large |
| `kenney-nature/ground-grass` | 3 × 0 × 3 |  | grass green | nature, ground, plant, grass | Ground grass |
| `kenney-nature/ground-path-bend` | 3 × 0.15 × 3 |  | dirt orange, grass green | nature, ground, road | Ground path bend |
| `kenney-nature/ground-path-bend-bank` | 3 × 0.15 × 3 |  | dirt orange, grass green | nature, ground, road | Ground path bend bank |
| `kenney-nature/ground-path-corner` | 3 × 0.15 × 3 |  | dirt orange, grass green | nature, ground, road | Ground path corner |
| `kenney-nature/ground-path-corner-small` | 3 × 0.15 × 3 |  | dirt orange, grass green | nature, ground, road | Ground path corner small |
| `kenney-nature/ground-path-cross` | 3 × 0.15 × 3 |  | dirt orange, grass green | nature, ground, road | Ground path cross |
| `kenney-nature/ground-path-end` | 3 × 0.15 × 3 |  | dirt orange, grass green | nature, ground, road | Ground path end |
| `kenney-nature/ground-path-end-closed` | 3 × 0.15 × 3 |  | dirt orange, grass green | nature, ground, road | Ground path end closed |
| `kenney-nature/ground-path-open` | 3 × 0 × 3 |  | dirt orange | nature, ground, road | Ground path open |
| `kenney-nature/ground-path-rocks` | 3 × 0.15 × 3 |  | dirt orange, grass green | nature, ground, road, stone | Ground path rocks |
| `kenney-nature/ground-path-side` | 3 × 0.15 × 3 |  | dirt orange, grass green | nature, ground, road | Ground path side |
| `kenney-nature/ground-path-side-open` | 3 × 0.15 × 3 |  | dirt orange, grass green | nature, ground, road | Ground path side open |
| `kenney-nature/ground-path-split` | 3 × 0.15 × 3 |  | dirt orange, grass green | nature, ground, road | Ground path split |
| `kenney-nature/ground-path-straight` | 3 × 0.15 × 3 |  | dirt orange, grass green | nature, ground, road | Ground path straight |
| `kenney-nature/ground-path-tile` | 3 × 0.15 × 3 |  | dirt orange, grass green | nature, ground, road | Ground path tile |
| `kenney-nature/ground-river-bend` | 3 × 0.15 × 3 |  | dirt orange, stone mist, grass green | nature, ground, water | Ground river bend |
| `kenney-nature/ground-river-bend-bank` | 3 × 0.15 × 3 |  | dirt orange, stone mist, grass green | nature, ground, water | Ground river bend bank |
| `kenney-nature/ground-river-corner` | 3 × 0.15 × 3 |  | dirt orange, stone mist, grass green | nature, ground, water | Ground river corner |
| `kenney-nature/ground-river-corner-small` | 3 × 0.15 × 3 |  | dirt orange, stone mist, grass green | nature, ground, water | Ground river corner small |
| `kenney-nature/ground-river-cross` | 3 × 0.15 × 3 |  | dirt orange, stone mist, grass green | nature, ground, water | Ground river cross |
| `kenney-nature/ground-river-end` | 3 × 0.15 × 3 |  | dirt orange, stone mist, grass green | nature, ground, water | Ground river end |
| `kenney-nature/ground-river-end-closed` | 3 × 0.15 × 3 |  | dirt orange, stone mist, grass green | nature, ground, water | Ground river end closed |
| `kenney-nature/ground-river-open` | 3 × 0 × 3 |  | stone mist | nature, ground, water | Ground river open |
| `kenney-nature/ground-river-rocks` | 3 × 0.15 × 3 |  | dirt orange, stone mist, grass green | nature, ground, water, stone | Ground river rocks |
| `kenney-nature/ground-river-side` | 3 × 0.15 × 3 |  | dirt orange, stone mist, grass green | nature, ground, water | Ground river side |
| `kenney-nature/ground-river-side-open` | 3 × 0.15 × 3 |  | dirt orange, stone mist, grass green | nature, ground, water | Ground river side open |
| `kenney-nature/ground-river-split` | 3 × 0.15 × 3 |  | dirt orange, stone mist, grass green | nature, ground, water | Ground river split |
| `kenney-nature/ground-river-straight` | 3 × 0.15 × 3 |  | dirt orange, stone mist, grass green | nature, ground, water | Ground river straight |
| `kenney-nature/ground-river-tile` | 3 × 0.15 × 3 |  | dirt orange, stone mist, grass green | nature, ground, water | Ground river tile |
| `kenney-nature/hanging-moss` | 0.48 × 1.44 × 0.1 |  | grass green | nature, plant | Hanging moss |
| `kenney-nature/lily-large` | 0.82 × 0.29 × 0.94 |  | grass green, leafsDark teal, red red | nature, plant, water | Lily large |
| `kenney-nature/lily-small` | 0.57 × 0.12 × 0.65 |  | grass green, leafsDark teal | nature, plant, water | Lily small |
| `kenney-nature/log` | 0.7 × 0.52 × 2.13 |  | dirt orange, c1 white | nature, wood | Log |
| `kenney-nature/log-large` | 3 × 1.25 × 1.65 |  | dirt orange, c1 white | nature, wood | Log large |
| `kenney-nature/log-stack` | 1.27 × 1.04 × 2.13 |  | dirt orange, c1 white | nature, wood | Log stack |
| `kenney-nature/log-stack-large` | 1.9 × 1.04 × 2.13 |  | dirt orange, c1 white | nature, wood | Log stack large |
| `kenney-nature/mushroom-red` | 0.52 × 0.61 × 0.6 |  | c1 white, red red | nature, plant | Mushroom red |
| `kenney-nature/mushroom-red-group` | 0.81 × 0.75 × 0.76 |  | c1 white, red red | nature, plant | Mushroom red group |
| `kenney-nature/mushroom-red-tall` | 0.37 × 0.75 × 0.43 |  | c1 white, red red | nature, plant | Mushroom red tall |
| `kenney-nature/mushroom-tan` | 0.57 × 0.46 × 0.66 |  | c1 white, tan sand | nature, plant | Mushroom tan |
| `kenney-nature/mushroom-tan-group` | 0.81 × 0.75 × 0.76 |  | c1 white, tan sand | nature, plant | Mushroom tan group |
| `kenney-nature/mushroom-tan-tall` | 0.37 × 0.75 × 0.43 |  | c1 white, tan sand | nature, plant | Mushroom tan tall |
| `kenney-nature/path-stone` | 3 × 0.15 × 1.73 |  | stone mist, c1 white | nature, ground, road, stone | Path stone |
| `kenney-nature/path-stone-circle` | 2.8 × 0.15 × 2.63 |  | stone mist | nature, ground, road, stone | Path stone circle |
| `kenney-nature/path-stone-corner` | 2.21 × 0.15 × 2.34 |  | stone mist, c1 white | nature, ground, road, stone | Path stone corner |
| `kenney-nature/path-stone-end` | 1.85 × 0.15 × 1.71 |  | stone mist, c1 white | nature, ground, road, stone | Path stone end |
| `kenney-nature/path-wood` | 3 × 0.15 × 1.54 |  | dirt orange | nature, ground, road | Path wood |
| `kenney-nature/path-wood-corner` | 2.25 × 0.15 × 2.25 |  | dirt orange | nature, ground, road | Path wood corner |
| `kenney-nature/path-wood-end` | 1.84 × 0.15 × 1.54 |  | dirt orange, c1 white | nature, ground, road | Path wood end |
| `kenney-nature/plant-bush` | 1.19 × 0.73 × 1.19 |  | grass green | nature, plant | Plant bush |
| `kenney-nature/plant-bush-detailed` | 1.81 × 1.08 × 1.81 |  | grass green | nature, plant | Plant bush detailed |
| `kenney-nature/plant-bush-large` | 1.12 × 0.73 × 1.01 |  | grass green | nature, plant | Plant bush large |
| `kenney-nature/plant-bush-large-triangle` | 1.22 × 0.51 × 1.41 |  | grass green | nature, plant | Plant bush large triangle |
| `kenney-nature/plant-bush-small` | 1.15 × 0.62 × 1.01 |  | grass green | nature, plant | Plant bush small |
| `kenney-nature/plant-bush-triangle` | 1.09 × 0.89 × 1.24 |  | grass green | nature, plant | Plant bush triangle |
| `kenney-nature/plant-flat-short` | 0.83 × 0.7 × 0.83 |  | grass green | nature, plant | Plant flat short |
| `kenney-nature/plant-flat-tall` | 0.81 × 0.85 × 0.81 |  | grass green | nature, plant | Plant flat tall |
| `kenney-nature/platform-beach` | 2.68 × 0.25 × 2.17 |  | c1 white | nature, architecture, sand | Platform beach |
| `kenney-nature/platform-grass` | 2.68 × 0.25 × 2.17 |  | dirt orange, grass green | nature, architecture, plant, grass | Platform grass |
| `kenney-nature/platform-stone` | 2.68 × 0.25 × 2.17 |  | stone mist | nature, architecture, stone | Platform stone |
| `kenney-nature/pot-large` | 1.69 × 0.6 × 1.46 |  | dirt orange | nature, container, clay | Pot large |
| `kenney-nature/pot-small` | 0.97 × 0.8 × 0.84 |  | dirt orange, c1 white | nature, container, clay | Pot small |
| `kenney-nature/rock-large-a` `kenney-nature/rock-large-b` `kenney-nature/rock-large-c` `kenney-nature/rock-large-d` `kenney-nature/rock-large-e` `kenney-nature/rock-large-f` | 2.3–3.29 × 0.78–1.71 × 2.7–3.09 |  | dirt orange, grass green, c1 white | nature, stone | Rock large a (+5 variants) |
| `kenney-nature/rock-small-a` `kenney-nature/rock-small-b` `kenney-nature/rock-small-c` `kenney-nature/rock-small-d` `kenney-nature/rock-small-e` `kenney-nature/rock-small-f` `kenney-nature/rock-small-g` `kenney-nature/rock-small-h` `kenney-nature/rock-small-i` | 1.06–1.78 × 0.37–1.22 × 0.92–2.06 |  | dirt orange, grass green | nature, stone | Rock small a (+8 variants) |
| `kenney-nature/rock-small-flat-a` `kenney-nature/rock-small-flat-b` `kenney-nature/rock-small-flat-c` | 1.29–1.49 × 0.2 × 1.08–1.29 |  | dirt orange, grass green | nature, stone | Rock small flat a (+2 variants) |
| `kenney-nature/rock-small-top-a` `kenney-nature/rock-small-top-b` | 1.46–1.87 × 0.66–0.84 × 1.47–1.94 |  | dirt orange, grass green | nature, stone | Rock small top a (+1 variant) |
| `kenney-nature/rock-tall-a` `kenney-nature/rock-tall-b` `kenney-nature/rock-tall-c` `kenney-nature/rock-tall-d` `kenney-nature/rock-tall-e` `kenney-nature/rock-tall-f` `kenney-nature/rock-tall-g` `kenney-nature/rock-tall-h` `kenney-nature/rock-tall-i` `kenney-nature/rock-tall-j` | 1.27–2.95 × 1.33–2.99 × 1.31–2.31 |  | dirt orange, grass green, c1 white | nature, stone | Rock tall a (+9 variants) |
| `kenney-nature/sign` | 0.9 × 1.23 × 0.21 |  | dirt orange, c1 white | nature, sign | Sign |
| `kenney-nature/statue-block` | 1.2 × 1.2 × 1.2 |  | stone mist | nature, monument, stone | Statue block |
| `kenney-nature/statue-column` | 0.9 × 3 × 0.9 |  | stone mist, c1 white | nature, monument, stone, architecture, column | Statue column |
| `kenney-nature/statue-column-damaged` | 0.9 × 2.1 × 0.9 |  | stone mist | nature, monument, stone, architecture, column | Statue column damaged |
| `kenney-nature/statue-head` | 2.18 × 3 × 1.66 |  | stone mist, c1 white | nature, monument, stone | Statue head |
| `kenney-nature/statue-obelisk` | 0.92 × 2.63 × 0.92 |  | stone mist | nature, monument, stone | Statue obelisk |
| `kenney-nature/statue-ring` | 1.8 × 2.39 × 1.2 |  | stone mist | nature, monument, stone | Statue ring |
| `kenney-nature/stone-large-a` `kenney-nature/stone-large-b` `kenney-nature/stone-large-c` `kenney-nature/stone-large-d` `kenney-nature/stone-large-e` `kenney-nature/stone-large-f` | 2.3–3.29 × 0.78–1.71 × 2.7–3.09 |  | stone mist, c1 white | nature, stone | Stone large a (+5 variants) |
| `kenney-nature/stone-small-a` `kenney-nature/stone-small-b` `kenney-nature/stone-small-c` `kenney-nature/stone-small-d` `kenney-nature/stone-small-e` `kenney-nature/stone-small-f` `kenney-nature/stone-small-g` `kenney-nature/stone-small-h` `kenney-nature/stone-small-i` | 1.06–1.78 × 0.37–1.22 × 0.92–2.06 |  | stone mist | nature, stone | Stone small a (+8 variants) |
| `kenney-nature/stone-small-flat-a` `kenney-nature/stone-small-flat-b` `kenney-nature/stone-small-flat-c` | 1.29–1.49 × 0.2 × 1.08–1.29 |  | stone mist | nature, stone | Stone small flat a (+2 variants) |
| `kenney-nature/stone-small-top-a` `kenney-nature/stone-small-top-b` | 1.46–1.87 × 0.66–0.84 × 1.47–1.94 |  | stone mist | nature, stone | Stone small top a (+1 variant) |
| `kenney-nature/stone-tall-a` `kenney-nature/stone-tall-b` `kenney-nature/stone-tall-c` `kenney-nature/stone-tall-d` `kenney-nature/stone-tall-e` `kenney-nature/stone-tall-f` `kenney-nature/stone-tall-g` `kenney-nature/stone-tall-h` `kenney-nature/stone-tall-i` `kenney-nature/stone-tall-j` | 1.27–2.95 × 1.33–2.99 × 1.31–2.31 |  | stone mist, c1 white | nature, stone | Stone tall a (+9 variants) |
| `kenney-nature/stump-old` | 1.07 × 0.8 × 1.11 |  | dirt orange | nature, wood | Stump old |
| `kenney-nature/stump-old-tall` | 1.07 × 2 × 1.11 |  | dirt orange | nature, wood | Stump old tall |
| `kenney-nature/stump-round` | 0.96 × 0.62 × 1.11 |  | dirt orange, c1 white | nature, wood | Stump round |
| `kenney-nature/stump-round-detailed` | 1.07 × 0.62 × 1.11 |  | dirt orange, c1 white | nature, wood | Stump round detailed |
| `kenney-nature/stump-square` | 1.08 × 0.9 × 0.9 |  | dirt orange, c1 white | nature, wood | Stump square |
| `kenney-nature/stump-square-detailed` | 1.32 × 0.6 × 1.32 |  | dirt orange, c1 white | nature, wood | Stump square detailed |
| `kenney-nature/stump-square-detailed-wide` | 1.92 × 0.6 × 1.92 |  | dirt orange, c1 white | nature, wood | Stump square detailed wide |
| `kenney-nature/tent-detailed-closed` | 2.62 × 1.68 × 1.91 |  | dirt orange, red red | nature, camp, cloth | Tent detailed closed |
| `kenney-nature/tent-detailed-open` | 2.62 × 1.68 × 2 |  | dirt orange, red red | nature, camp, cloth | Tent detailed open |
| `kenney-nature/tent-small-closed` | 1.64 × 1.68 × 1.91 |  | dirt orange, c1 white, red red | nature, camp, cloth | Tent small closed |
| `kenney-nature/tent-small-open` | 1.64 × 1.68 × 2 |  | dirt orange, red red | nature, camp, cloth | Tent small open |
| `kenney-nature/tree-blocks` | 1.8 × 3.55 × 1.8 |  | dirt orange, grass green | nature, tree, plant | Tree blocks |
| `kenney-nature/tree-blocks-dark` | 1.8 × 3.55 × 1.8 |  | dirt orange, leafsDark teal | nature, tree, plant | Tree blocks dark |
| `kenney-nature/tree-blocks-fall` | 1.8 × 3.55 × 1.8 |  | c1 white, leafsFall sand | nature, tree, plant | Tree blocks fall |
| `kenney-nature/tree-cone` | 1.59 × 4.29 × 1.59 |  | dirt orange, grass green | nature, tree, plant | Tree cone |
| `kenney-nature/tree-cone-dark` | 1.59 × 4.29 × 1.59 |  | dirt orange, leafsDark teal | nature, tree, plant | Tree cone dark |
| `kenney-nature/tree-cone-fall` | 1.59 × 4.29 × 1.59 |  | c1 white, leafsFall sand | nature, tree, plant | Tree cone fall |
| `kenney-nature/tree-default` | 2.27 × 5.12 × 1.96 |  | dirt orange, grass green | nature, tree, plant | Tree default |
| `kenney-nature/tree-default-dark` | 2.27 × 5.12 × 1.96 |  | dirt orange, leafsDark teal | nature, tree, plant | Tree default dark |
| `kenney-nature/tree-default-fall` | 2.27 × 5.12 × 1.96 |  | c1 white, leafsFall sand | nature, tree, plant | Tree default fall |
| `kenney-nature/tree-detailed` | 2.54 × 4 × 2.28 |  | dirt orange, grass green, c1 white | nature, tree, plant | Tree detailed |
| `kenney-nature/tree-detailed-dark` | 2.54 × 4 × 2.28 |  | dirt orange, leafsDark teal, c1 white | nature, tree, plant | Tree detailed dark |
| `kenney-nature/tree-detailed-fall` | 2.54 × 4 × 2.28 |  | c1 white, leafsFall sand | nature, tree, plant | Tree detailed fall |
| `kenney-nature/tree-fat` | 2.27 × 3.45 × 1.96 |  | dirt orange, grass green | nature, tree, plant | Tree fat |
| `kenney-nature/tree-fat-darkh` | 2.27 × 3.45 × 1.96 |  | dirt orange, leafsDark teal | nature, tree, plant | Tree fat darkh |
| `kenney-nature/tree-fat-fall` | 2.27 × 3.45 × 1.96 |  | c1 white, leafsFall sand | nature, tree, plant | Tree fat fall |
| `kenney-nature/tree-oak` | 1.92 × 3.68 × 2.22 |  | dirt orange, grass green | nature, tree, plant | Tree oak |
| `kenney-nature/tree-oak-dark` | 1.92 × 3.68 × 2.22 |  | dirt orange, leafsDark teal | nature, tree, plant | Tree oak dark |
| `kenney-nature/tree-oak-fall` | 1.92 × 3.68 × 2.22 |  | c1 white, leafsFall sand | nature, tree, plant | Tree oak fall |
| `kenney-nature/tree-palm` | 2.81 × 4.54 × 3.04 |  | dirt orange, grass green | nature, tree, plant | Tree palm |
| `kenney-nature/tree-palm-bend` | 2.81 × 4.14 × 3.04 |  | dirt orange, grass green | nature, tree, plant | Tree palm bend |
| `kenney-nature/tree-palm-detailed-short` | 3.1 × 3.37 × 3.1 |  | dirt orange, grass green | nature, tree, plant | Tree palm detailed short |
| `kenney-nature/tree-palm-detailed-tall` | 3.1 × 4.27 × 3.1 |  | dirt orange, grass green | nature, tree, plant | Tree palm detailed tall |
| `kenney-nature/tree-palm-short` | 3.1 × 3.17 × 3.1 |  | dirt orange, grass green | nature, tree, plant | Tree palm short |
| `kenney-nature/tree-palm-tall` | 3.1 × 4.07 × 3.1 |  | dirt orange, grass green | nature, tree, plant | Tree palm tall |
| `kenney-nature/tree-pine-default-a` `kenney-nature/tree-pine-default-b` | 1.6 × 4.64 × 1.6 |  | dirt orange, leafsDark teal | nature, tree, plant | Tree pine default a (+1 variant) |
| `kenney-nature/tree-pine-ground-a` `kenney-nature/tree-pine-ground-b` | 1.44 × 2.74–3.13 × 1.66 |  | leafsDark teal | nature, tree, plant, ground | Tree pine ground a (+1 variant) |
| `kenney-nature/tree-pine-round-a` `kenney-nature/tree-pine-round-b` `kenney-nature/tree-pine-round-c` `kenney-nature/tree-pine-round-d` `kenney-nature/tree-pine-round-e` `kenney-nature/tree-pine-round-f` | 1.44–1.85 × 3.25–4.1 × 1.6–2.14 |  | dirt orange, leafsDark teal, c1 white | nature, tree, plant | Tree pine round a (+5 variants) |
| `kenney-nature/tree-pine-small-a` `kenney-nature/tree-pine-small-b` `kenney-nature/tree-pine-small-c` `kenney-nature/tree-pine-small-d` | 1.07–1.5 × 2.87–3.37 × 1.07–1.5 |  | dirt orange, leafsDark teal | nature, tree, plant | Tree pine small a (+3 variants) |
| `kenney-nature/tree-pine-tall-a` `kenney-nature/tree-pine-tall-b` `kenney-nature/tree-pine-tall-c` `kenney-nature/tree-pine-tall-d` | 1.16–1.44 × 4.59–6.23 × 1.18–1.66 |  | dirt orange, leafsDark teal | nature, tree, plant | Tree pine tall a (+3 variants) |
| `kenney-nature/tree-pine-tall-a-detailed` `kenney-nature/tree-pine-tall-b-detailed` `kenney-nature/tree-pine-tall-c-detailed` `kenney-nature/tree-pine-tall-d-detailed` | 1.16–1.44 × 4.59–6.23 × 1.18–1.66 |  | dirt orange, leafsDark teal | nature, tree, plant | Tree pine tall a detailed (+3 variants) |
| `kenney-nature/tree-plateau` | 1.84 × 3.75 × 1.96 |  | dirt orange, grass green | nature, tree, plant, stone | Tree plateau |
| `kenney-nature/tree-plateau-dark` | 1.84 × 3.75 × 1.96 |  | dirt orange, leafsDark teal | nature, tree, plant, stone | Tree plateau dark |
| `kenney-nature/tree-plateau-fall` | 1.84 × 3.75 × 1.96 |  | c1 white, leafsFall sand | nature, tree, plant, stone | Tree plateau fall |
| `kenney-nature/tree-simple` | 1.06 × 4.56 × 1.23 |  | dirt orange, grass green | nature, tree, plant | Tree simple |
| `kenney-nature/tree-simple-dark` | 1.06 × 4.56 × 1.23 |  | dirt orange, leafsDark teal | nature, tree, plant | Tree simple dark |
| `kenney-nature/tree-simple-fall` | 1.06 × 4.56 × 1.23 |  | c1 white, leafsFall sand | nature, tree, plant | Tree simple fall |
| `kenney-nature/tree-small` | 1.06 × 3.33 × 1.23 |  | dirt orange, grass green | nature, tree, plant | Tree small |
| `kenney-nature/tree-small-dark` | 1.06 × 3.33 × 1.23 |  | dirt orange, leafsDark teal | nature, tree, plant | Tree small dark |
| `kenney-nature/tree-small-fall` | 1.06 × 3.33 × 1.23 |  | c1 white, leafsFall sand | nature, tree, plant | Tree small fall |
| `kenney-nature/tree-tall` | 1.2 × 5.06 × 1.38 |  | dirt orange, grass green | nature, tree, plant | Tree tall |
| `kenney-nature/tree-tall-dark` | 1.2 × 5.06 × 1.38 |  | dirt orange, leafsDark teal | nature, tree, plant | Tree tall dark |
| `kenney-nature/tree-tall-fall` | 1.2 × 5.06 × 1.38 |  | c1 white, leafsFall sand | nature, tree, plant | Tree tall fall |
| `kenney-nature/tree-thin` | 2.04 × 4.47 × 1.85 |  | dirt orange, grass green | nature, tree, plant | Tree thin |
| `kenney-nature/tree-thin-dark` | 2.04 × 4.47 × 1.85 |  | dirt orange, leafsDark teal | nature, tree, plant | Tree thin dark |
| `kenney-nature/tree-thin-fall` | 2.04 × 4.47 × 1.85 |  | c1 white, leafsFall sand | nature, tree, plant | Tree thin fall |

### kenney-tiny-dungeon: Kenney Tiny Dungeon 1.0

0 models, 132 textures, CC0-1.0 by Kenney (https://kenney.nl/assets/tiny-dungeon). Load it: `const kit = await loadPack('packs/kenney-tiny-dungeon.json', { textures: TEXTURE_LIBRARY })`, then `buildModel(id, { catalog: kit })` and `hudSprite(id)` / `textureMap(id)`.

| id | texels | palette slots | tags | about |
| --- | --- | --- | --- | --- |
| `kenney-tiny-dungeon/wall-top` | 16 × 16, tiles | c6 plum | dungeon, sprite, surface, architecture, wall | Wall top |
| `kenney-tiny-dungeon/wall-top-b` | 16 × 16, tiles | c1 ink, c2 mist, c4 mist, c6 plum | dungeon, sprite, surface, architecture, wall | Wall top b |
| `kenney-tiny-dungeon/wall-ledge-corner-a` | 16 × 16 | c1 ink, c2 mist, c4 mist, c6 plum, c8 slate | dungeon, sprite, architecture, wall | Wall ledge corner a |
| `kenney-tiny-dungeon/wall-ledge-corner-b` | 16 × 16 | c1 ink, c2 mist, c4 mist, c6 plum | dungeon, sprite, architecture, wall | Wall ledge corner b |
| `kenney-tiny-dungeon/wall-cap-left` | 16 × 16 | c1 ink, c2 mist, c3 sand, c4 mist, c6 plum, c7 orange, c8 slate | dungeon, sprite, architecture, wall | Wall cap left |
| `kenney-tiny-dungeon/wall-cap-right` | 16 × 16 | c1 ink, c2 mist, c3 sand, c4 mist, c6 plum, c7 orange, c8 slate | dungeon, sprite, architecture, wall | Wall cap right |
| `kenney-tiny-dungeon/wall-pillar` | 16 × 16 | c1 ink, c2 mist, c4 mist, c6 plum, c8 slate | dungeon, sprite, architecture, wall, column | Wall pillar |
| `kenney-tiny-dungeon/wall-fountain` | 16 × 16 | c2 mist, c4 mist, c5 night, c8 slate | dungeon, sprite, architecture, wall | Wall fountain |
| `kenney-tiny-dungeon/wall-fountain-slime` | 16 × 16 | c2 mist, c4 mist, c5 night, c8 slate, c11 cyan, c13 green | dungeon, sprite, architecture, wall, character, monster | Wall fountain slime |
| `kenney-tiny-dungeon/doorway-rubble` | 16 × 16 | c2 mist, c4 mist, c5 night, c7 orange, c8 slate | dungeon, sprite, architecture, door | Doorway rubble |
| `kenney-tiny-dungeon/doorway-left` | 16 × 16 | c2 mist, c4 mist, c5 night, c7 orange, c8 slate | dungeon, sprite, architecture, door | Doorway left |
| `kenney-tiny-dungeon/doorway-right` | 16 × 16 | c2 mist, c4 mist, c5 night, c7 orange, c8 slate | dungeon, sprite, architecture, door | Doorway right |
| `kenney-tiny-dungeon/wall-top-holes` | 16 × 16 | c1 ink, c6 plum, c7 orange | dungeon, sprite, architecture, wall | Wall top holes |
| `kenney-tiny-dungeon/wall-edge-right` | 16 × 16 | c1 ink, c4 mist, c6 plum | dungeon, sprite, architecture, wall | Wall edge right |
| `kenney-tiny-dungeon/brick-wall` | 16 × 16, tiles | c2 mist, c4 mist, c8 slate | dungeon, sprite, surface, stone, wall, architecture | Brick wall |
| `kenney-tiny-dungeon/wall-edge-left` | 16 × 16 | c1 ink, c4 mist, c6 plum | dungeon, sprite, architecture, wall | Wall edge left |
| `kenney-tiny-dungeon/wall-frame-left` | 16 × 16 | c1 ink, c2 mist, c4 mist, c6 plum, c8 slate | dungeon, sprite, architecture, wall | Wall frame left |
| `kenney-tiny-dungeon/wall-frame-right` | 16 × 16 | c1 ink, c2 mist, c4 mist, c6 plum, c8 slate | dungeon, sprite, architecture, wall | Wall frame right |
| `kenney-tiny-dungeon/column` | 16 × 16 | c1 ink, c2 mist, c4 mist, c8 slate | dungeon, sprite, architecture, column | Column |
| `kenney-tiny-dungeon/wall-demon-face` | 16 × 16 | c2 mist, c4 mist, c5 night, c8 slate | dungeon, sprite, architecture, wall, character, monster | Wall demon face |
| `kenney-tiny-dungeon/wall-demon-slime` | 16 × 16 | c2 mist, c4 mist, c5 night, c8 slate, c11 cyan, c13 green | dungeon, sprite, architecture, wall, character, monster | Wall demon slime |
| `kenney-tiny-dungeon/door-open-left` | 16 × 16 | c1 ink, c2 mist, c4 mist, c5 night, c7 orange, c8 slate | dungeon, sprite, architecture, door | Door open left |
| `kenney-tiny-dungeon/door-open` | 16 × 16 | c1 ink, c2 mist, c4 mist, c5 night, c7 orange, c8 slate | dungeon, sprite, architecture, door | Door open |
| `kenney-tiny-dungeon/door-open-right` | 16 × 16 | c1 ink, c2 mist, c4 mist, c5 night, c7 orange, c8 slate | dungeon, sprite, architecture, door | Door open right |
| `kenney-tiny-dungeon/wall-top-rubble` | 16 × 16 | c1 ink, c2 mist, c4 mist, c6 plum, c7 orange | dungeon, sprite, architecture, wall | Wall top rubble |
| `kenney-tiny-dungeon/wall-top-c` | 16 × 16, tiles | c1 ink, c2 mist, c4 mist, c6 plum, c8 slate | dungeon, sprite, surface, architecture, wall | Wall top c |
| `kenney-tiny-dungeon/wall-base-left` | 16 × 16 | c1 ink, c2 mist, c3 sand, c4 mist, c6 plum, c7 orange, c8 slate | dungeon, sprite, architecture, wall | Wall base left |
| `kenney-tiny-dungeon/wall-base-right` | 16 × 16 | c1 ink, c2 mist, c4 mist, c6 plum, c8 slate | dungeon, sprite, architecture, wall | Wall base right |
| `kenney-tiny-dungeon/wall-vent` | 16 × 16 | c2 mist, c4 mist, c5 night, c8 slate | dungeon, sprite, architecture, wall | Wall vent |
| `kenney-tiny-dungeon/banner-red` | 16 × 16 | c1 ink, c2 mist, c3 sand, c4 mist, c8 slate, c10 red, c16 lime | dungeon, sprite, banner, cloth | Banner red |
| `kenney-tiny-dungeon/floor-pillar-base` | 16 × 16 | c1 ink, c2 mist, c3 sand, c7 orange, c8 slate | dungeon, sprite, architecture, floor, column | Floor pillar base |
| `kenney-tiny-dungeon/basin` | 16 × 16 | c2 mist, c3 sand, c4 mist, c5 night, c8 slate | dungeon, sprite, water | Basin |
| `kenney-tiny-dungeon/basin-slime` | 16 × 16 | c2 mist, c3 sand, c4 mist, c5 night, c8 slate, c11 cyan, c13 green | dungeon, sprite, water, character, monster | Basin slime |
| `kenney-tiny-dungeon/door-ajar-left` | 16 × 16 | c1 ink, c2 mist, c4 mist, c5 night, c6 plum, c7 orange, c8 slate | dungeon, sprite, architecture, door | Door ajar left |
| `kenney-tiny-dungeon/door-ajar` | 16 × 16 | c1 ink, c2 mist, c4 mist, c5 night, c6 plum, c7 orange, c8 slate | dungeon, sprite, architecture, door | Door ajar |
| `kenney-tiny-dungeon/door-ajar-right` | 16 × 16 | c1 ink, c2 mist, c4 mist, c5 night, c6 plum, c7 orange, c8 slate | dungeon, sprite, architecture, door | Door ajar right |
| `kenney-tiny-dungeon/stairs-left` | 16 × 16 | c2 mist, c4 mist, c5 night, c8 slate | dungeon, sprite, architecture, stairs | Stairs left |
| `kenney-tiny-dungeon/stairs` | 16 × 16 | c2 mist, c4 mist, c8 slate | dungeon, sprite, architecture, stairs | Stairs |
| `kenney-tiny-dungeon/stairs-right` | 16 × 16 | c2 mist, c4 mist, c5 night, c8 slate | dungeon, sprite, architecture, stairs | Stairs right |
| `kenney-tiny-dungeon/stairs-narrow` | 16 × 16 | c2 mist, c4 mist, c5 night, c8 slate | dungeon, sprite, architecture, stairs | Stairs narrow |
| `kenney-tiny-dungeon/brick-wall-b` | 16 × 16, tiles | c2 mist, c4 mist, c8 slate | dungeon, sprite, surface, stone, wall, architecture | Brick wall b |
| `kenney-tiny-dungeon/gate-bars` | 16 × 16 | c2 mist, c3 sand, c4 mist, c5 night, c8 slate | dungeon, sprite, architecture, door | Gate bars |
| `kenney-tiny-dungeon/floor-flagstones` | 16 × 16 | c3 sand, c4 mist, c7 orange | dungeon, sprite, architecture, floor | Floor flagstones |
| `kenney-tiny-dungeon/drain` | 16 × 16 | c2 mist, c3 sand, c4 mist, c5 night, c7 orange, c8 slate | dungeon, sprite | Drain |
| `kenney-tiny-dungeon/drain-slime` | 16 × 16 | c2 mist, c3 sand, c4 mist, c5 night, c7 orange, c8 slate, c11 cyan | dungeon, sprite, character, monster | Drain slime |
| `kenney-tiny-dungeon/door-closed` | 16 × 16 | c1 ink, c2 mist, c4 mist, c5 night, c6 plum, c7 orange, c8 slate | dungeon, sprite, architecture, door | Door closed |
| `kenney-tiny-dungeon/door-double-left` | 16 × 16 | c1 ink, c2 mist, c4 mist, c5 night, c6 plum, c7 orange, c8 slate | dungeon, sprite, architecture, door | Door double left |
| `kenney-tiny-dungeon/door-double-right` | 16 × 16 | c1 ink, c2 mist, c4 mist, c5 night, c6 plum, c7 orange, c8 slate | dungeon, sprite, architecture, door | Door double right |
| `kenney-tiny-dungeon/floor` | 16 × 16, tiles | c3 sand | dungeon, sprite, surface, architecture, floor | Floor |
| `kenney-tiny-dungeon/floor-speckled` | 16 × 16, tiles | c3 sand, c7 orange | dungeon, sprite, surface, architecture, floor | Floor speckled |
| `kenney-tiny-dungeon/floor-patch-a` | 16 × 16 | c3 sand, c7 orange | dungeon, sprite, architecture, floor | Floor patch a |
| `kenney-tiny-dungeon/floor-patch-b` | 16 × 16 | c3 sand, c7 orange | dungeon, sprite, architecture, floor | Floor patch b |
| `kenney-tiny-dungeon/floor-patch-c` | 16 × 16 | c3 sand, c7 orange | dungeon, sprite, architecture, floor | Floor patch c |
| `kenney-tiny-dungeon/floor-patch-d` | 16 × 16 | c3 sand, c7 orange | dungeon, sprite, architecture, floor | Floor patch d |
| `kenney-tiny-dungeon/iron-box` | 16 × 16 | c2 mist, c4 mist, c5 night, c8 slate, c9 white | dungeon, sprite, container | Iron box |
| `kenney-tiny-dungeon/stone-frame` | 16 × 16 | c2 mist, c4 mist, c5 night, c8 slate | dungeon, sprite, stone | Stone frame |
| `kenney-tiny-dungeon/hole` | 16 × 16 | c2 mist, c4 mist, c5 night, c8 slate, c9 white | dungeon, sprite | Hole |
| `kenney-tiny-dungeon/brick-pillar-a` | 16 × 16 | c1 ink, c2 mist, c4 mist, c8 slate | dungeon, sprite, stone, wall, architecture, column | Brick pillar a |
| `kenney-tiny-dungeon/brick-pillar-b` | 16 × 16 | c1 ink, c2 mist, c4 mist, c8 slate | dungeon, sprite, stone, wall, architecture, column | Brick pillar b |
| `kenney-tiny-dungeon/brick-pillar-c` | 16 × 16 | c1 ink, c2 mist, c4 mist, c8 slate | dungeon, sprite, stone, wall, architecture, column | Brick pillar c |
| `kenney-tiny-dungeon/cursor` | 16 × 16 | c9 white | dungeon, sprite, ui | Cursor |
| `kenney-tiny-dungeon/marker-box` | 16 × 16 | c9 white | dungeon, sprite, ui, container | Marker box |
| `kenney-tiny-dungeon/marker-stripes` | 16 × 16 | c9 white | dungeon, sprite, ui | Marker stripes |
| `kenney-tiny-dungeon/bookshelf` | 16 × 16 | c1 ink, c3 sand, c6 plum, c7 orange | dungeon, sprite | Bookshelf |
| `kenney-tiny-dungeon/grave-cross` | 16 × 16 | c2 mist, c4 mist, c5 night, c8 slate | dungeon, sprite, grave, tomb | Grave cross |
| `kenney-tiny-dungeon/gravestone` | 16 × 16 | c2 mist, c4 mist, c5 night, c8 slate | dungeon, sprite, grave, tomb | Gravestone |
| `kenney-tiny-dungeon/wooden-board` | 16 × 16 | c1 ink, c3 sand, c6 plum, c7 orange | dungeon, sprite | Wooden board |
| `kenney-tiny-dungeon/ladder` | 16 × 16 | c1 ink, c3 sand, c4 mist, c7 orange | dungeon, sprite, ladder, wood | Ladder |
| `kenney-tiny-dungeon/ladder-b` | 16 × 16 | c1 ink, c2 mist, c3 sand, c4 mist, c7 orange | dungeon, sprite, ladder, wood | Ladder b |
| `kenney-tiny-dungeon/rail-curve-left` | 16 × 16 | c1 ink, c2 mist, c3 sand, c4 mist, c7 orange | dungeon, sprite, fence | Rail curve left |
| `kenney-tiny-dungeon/rail-straight` | 16 × 16 | c1 ink, c2 mist, c3 sand, c4 mist, c7 orange | dungeon, sprite, fence | Rail straight |
| `kenney-tiny-dungeon/rail-curve-right` | 16 × 16 | c1 ink, c2 mist, c3 sand, c4 mist, c7 orange | dungeon, sprite, fence | Rail curve right |
| `kenney-tiny-dungeon/table` | 16 × 16 | c1 ink, c3 sand, c6 plum, c7 orange | dungeon, sprite, furniture, table | Table |
| `kenney-tiny-dungeon/stool` | 16 × 16 | c1 ink, c3 sand, c6 plum, c7 orange | dungeon, sprite, furniture, seat | Stool |
| `kenney-tiny-dungeon/anvil` | 16 × 16 | c2 mist, c4 mist, c5 night, c8 slate, c9 white | dungeon, sprite, tool, iron | Anvil |
| `kenney-tiny-dungeon/cabinet` | 16 × 16 | c1 ink, c3 sand, c6 plum, c7 orange | dungeon, sprite, furniture, storage | Cabinet |
| `kenney-tiny-dungeon/fence-left` | 16 × 16 | c1 ink, c2 mist, c4 mist, c5 night | dungeon, sprite, fence, farm | Fence left |
| `kenney-tiny-dungeon/fence` | 16 × 16 | c1 ink, c2 mist, c4 mist, c5 night | dungeon, sprite, fence, farm | Fence |
| `kenney-tiny-dungeon/fence-right` | 16 × 16 | c1 ink, c2 mist, c4 mist, c5 night | dungeon, sprite, fence, farm | Fence right |
| `kenney-tiny-dungeon/rail-a` | 16 × 16 | c1 ink, c2 mist, c3 sand, c4 mist, c7 orange | dungeon, sprite, fence | Rail a |
| `kenney-tiny-dungeon/rail-b` | 16 × 16 | c1 ink, c2 mist, c3 sand, c4 mist, c7 orange | dungeon, sprite, fence | Rail b |
| `kenney-tiny-dungeon/ladder-c` | 16 × 16 | c1 ink, c3 sand, c4 mist, c7 orange | dungeon, sprite, ladder, wood | Ladder c |
| `kenney-tiny-dungeon/barrel` | 16 × 16 | c1 ink, c2 mist, c3 sand, c4 mist, c7 orange | dungeon, sprite, container, wood | Barrel |
| `kenney-tiny-dungeon/ladder-d` | 16 × 16 | c1 ink, c3 sand, c4 mist, c7 orange | dungeon, sprite, ladder, wood | Ladder d |
| `kenney-tiny-dungeon/wizard` | 16 × 16 | c1 ink, c2 mist, c3 sand, c4 mist, c5 night, c7 orange, c12 plum | dungeon, sprite, character, magic | Wizard |
| `kenney-tiny-dungeon/villager` | 16 × 16 | c1 ink, c2 mist, c3 sand, c4 mist, c5 night, c6 plum, c7 orange | dungeon, sprite, character | Villager |
| `kenney-tiny-dungeon/peasant` | 16 × 16 | c1 ink, c2 mist, c3 sand, c4 mist, c5 night, c6 plum, c7 orange | dungeon, sprite, character | Peasant |
| `kenney-tiny-dungeon/dwarf` | 16 × 16 | c1 ink, c2 mist, c3 sand, c4 mist, c5 night, c7 orange, c8 slate | dungeon, sprite, character | Dwarf |
| `kenney-tiny-dungeon/rogue` | 16 × 16 | c1 ink, c3 sand, c5 night, c6 plum, c7 orange | dungeon, sprite, character | Rogue |
| `kenney-tiny-dungeon/chest` | 16 × 16 | c1 ink, c2 mist, c3 sand, c4 mist, c5 night, c6 plum, c7 orange, c8 slate | dungeon, sprite, container, loot | Chest |
| `kenney-tiny-dungeon/chest-wood` | 16 × 16 | c1 ink, c2 mist, c3 sand, c4 mist, c5 night, c6 plum, c7 orange, c8 slate | dungeon, sprite, container, loot | Chest wood |
| `kenney-tiny-dungeon/chest-iron` | 16 × 16 | c1 ink, c2 mist, c3 sand, c4 mist, c5 night, c6 plum, c7 orange, c8 slate | dungeon, sprite, container, loot | Chest iron |
| `kenney-tiny-dungeon/mimic` | 16 × 16 | c1 ink, c2 mist, c3 sand, c4 mist, c5 night, c6 plum, c7 orange, c8 slate, c9 white, c10 red | dungeon, sprite, character, monster, container | Mimic |
| `kenney-tiny-dungeon/rail-bend-left` | 16 × 16 | c1 ink, c2 mist, c3 sand, c4 mist, c7 orange | dungeon, sprite, fence | Rail bend left |
| `kenney-tiny-dungeon/rail-bend` | 16 × 16 | c1 ink, c2 mist, c3 sand, c4 mist, c7 orange | dungeon, sprite, fence | Rail bend |
| `kenney-tiny-dungeon/rail-bend-right` | 16 × 16 | c1 ink, c2 mist, c3 sand, c4 mist, c7 orange | dungeon, sprite, fence | Rail bend right |
| `kenney-tiny-dungeon/knight` | 16 × 16 | c1 ink, c2 mist, c4 mist, c7 orange, c8 slate | dungeon, sprite, character | Knight |
| `kenney-tiny-dungeon/knight-visor` | 16 × 16 | c1 ink, c2 mist, c3 sand, c4 mist, c5 night, c7 orange, c8 slate | dungeon, sprite, character | Knight visor |
| `kenney-tiny-dungeon/soldier` | 16 × 16 | c1 ink, c2 mist, c3 sand, c4 mist, c5 night, c6 plum, c7 orange, c8 slate | dungeon, sprite, character | Soldier |
| `kenney-tiny-dungeon/maiden` | 16 × 16 | c1 ink, c3 sand, c5 night, c6 plum, c7 orange, c12 plum | dungeon, sprite, character | Maiden |
| `kenney-tiny-dungeon/elder` | 16 × 16 | c1 ink, c2 mist, c3 sand, c4 mist, c5 night, c6 plum, c7 orange | dungeon, sprite, character | Elder |
| `kenney-tiny-dungeon/shield-square` | 16 × 16 | c1 ink, c2 mist, c4 mist, c7 orange | dungeon, sprite, shield | Shield square |
| `kenney-tiny-dungeon/shield-round` | 16 × 16 | c1 ink, c2 mist, c4 mist | dungeon, sprite, shield | Shield round |
| `kenney-tiny-dungeon/dagger` | 16 × 16 | c1 ink, c2 mist, c4 mist, c7 orange | dungeon, sprite, weapon, dagger | Dagger |
| `kenney-tiny-dungeon/sword` | 16 × 16 | c1 ink, c2 mist, c4 mist, c7 orange | dungeon, sprite, weapon, sword | Sword |
| `kenney-tiny-dungeon/cleaver` | 16 × 16 | c1 ink, c2 mist, c4 mist, c7 orange, c8 slate | dungeon, sprite, weapon | Cleaver |
| `kenney-tiny-dungeon/broadsword` | 16 × 16 | c1 ink, c2 mist, c4 mist, c7 orange | dungeon, sprite, weapon, sword | Broadsword |
| `kenney-tiny-dungeon/wooden-sword` | 16 × 16 | c1 ink, c3 sand, c4 mist, c7 orange, c10 red | dungeon, sprite, weapon, sword | Wooden sword |
| `kenney-tiny-dungeon/slime` | 16 × 16 | c1 ink, c11 cyan, c13 green | dungeon, sprite, character, monster | Slime |
| `kenney-tiny-dungeon/cyclops` | 16 × 16 | c1 ink, c3 sand, c5 night, c6 plum, c7 orange, c9 white | dungeon, sprite, character, monster | Cyclops |
| `kenney-tiny-dungeon/crab-demon` | 16 × 16 | c1 ink, c3 sand, c6 plum, c7 orange, c10 red | dungeon, sprite, character, monster | Crab demon |
| `kenney-tiny-dungeon/dark-wizard` | 16 × 16 | c1 ink, c2 mist, c3 sand, c4 mist, c6 plum, c7 orange, c10 red | dungeon, sprite, character, magic | Dark wizard |
| `kenney-tiny-dungeon/bandit` | 16 × 16 | c1 ink, c3 sand, c5 night, c6 plum, c7 orange, c11 cyan, c13 green | dungeon, sprite, character | Bandit |
| `kenney-tiny-dungeon/potion-empty` | 16 × 16 | c1 ink, c2 mist, c3 sand, c4 mist, c7 orange | dungeon, sprite, loot, potion, consumable | Potion empty |
| `kenney-tiny-dungeon/potion-green` | 16 × 16 | c1 ink, c2 mist, c3 sand, c4 mist, c7 orange, c11 cyan, c13 green | dungeon, sprite, loot, potion, consumable | Potion green |
| `kenney-tiny-dungeon/potion-red` | 16 × 16 | c1 ink, c2 mist, c3 sand, c4 mist, c7 orange, c10 red | dungeon, sprite, loot, potion, consumable | Potion red |
| `kenney-tiny-dungeon/potion-blue` | 16 × 16 | c1 ink, c2 mist, c3 sand, c4 mist, c7 orange, c14 sky, c15 cyan | dungeon, sprite, loot, potion, consumable | Potion blue |
| `kenney-tiny-dungeon/hammer` | 16 × 16 | c1 ink, c2 mist, c3 sand, c4 mist, c6 plum, c7 orange, c8 slate | dungeon, sprite, weapon, hammer | Hammer |
| `kenney-tiny-dungeon/double-axe` | 16 × 16 | c1 ink, c2 mist, c3 sand, c4 mist, c7 orange, c8 slate | dungeon, sprite, weapon, axe | Double axe |
| `kenney-tiny-dungeon/axe` | 16 × 16 | c1 ink, c2 mist, c3 sand, c4 mist, c7 orange, c8 slate | dungeon, sprite, weapon, axe | Axe |
| `kenney-tiny-dungeon/bat` | 16 × 16 | c1 ink, c3 sand, c6 plum, c7 orange, c9 white | dungeon, sprite, character, monster, critter | Bat |
| `kenney-tiny-dungeon/ghost` | 16 × 16 | c1 ink, c2 mist, c4 mist | dungeon, sprite, character, monster | Ghost |
| `kenney-tiny-dungeon/spider` | 16 × 16 | c1 ink, c2 mist, c3 sand, c4 mist, c6 plum, c7 orange, c8 slate, c9 white | dungeon, sprite, character, monster, critter | Spider |
| `kenney-tiny-dungeon/rat` | 16 × 16 | c1 ink, c3 sand, c4 mist, c7 orange | dungeon, sprite, character, monster, critter | Rat |
| `kenney-tiny-dungeon/rat-grey` | 16 × 16 | c1 ink, c2 mist, c3 sand, c4 mist | dungeon, sprite, character, monster, critter | Rat grey |
| `kenney-tiny-dungeon/vial-empty` | 16 × 16 | c1 ink, c2 mist, c3 sand, c4 mist, c7 orange | dungeon, sprite, loot, potion, consumable | Vial empty |
| `kenney-tiny-dungeon/vial-green` | 16 × 16 | c1 ink, c2 mist, c3 sand, c4 mist, c7 orange, c11 cyan, c13 green | dungeon, sprite, loot, potion, consumable | Vial green |
| `kenney-tiny-dungeon/vial-red` | 16 × 16 | c1 ink, c2 mist, c3 sand, c4 mist, c7 orange, c10 red | dungeon, sprite, loot, potion, consumable | Vial red |
| `kenney-tiny-dungeon/vial-blue` | 16 × 16 | c1 ink, c2 mist, c3 sand, c4 mist, c7 orange, c14 sky, c15 cyan | dungeon, sprite, loot, potion, consumable | Vial blue |
| `kenney-tiny-dungeon/staff-purple` | 16 × 16 | c1 ink, c3 sand, c6 plum, c7 orange, c12 plum | dungeon, sprite, weapon, staff, magic | Staff purple |
| `kenney-tiny-dungeon/staff-blue` | 16 × 16 | c1 ink, c3 sand, c6 plum, c7 orange, c15 cyan | dungeon, sprite, weapon, staff, magic | Staff blue |
| `kenney-tiny-dungeon/spear` | 16 × 16 | c1 ink, c2 mist, c3 sand, c4 mist, c6 plum, c7 orange | dungeon, sprite, weapon, spear | Spear |

### kenney-tiny-town: Kenney Tiny Town 1.1

0 models, 132 textures, CC0-1.0 by Kenney (https://kenney.nl/assets/tiny-town). Load it: `const kit = await loadPack('packs/kenney-tiny-town.json', { textures: TEXTURE_LIBRARY })`, then `buildModel(id, { catalog: kit })` and `hudSprite(id)` / `textureMap(id)`.

| id | texels | palette slots | tags | about |
| --- | --- | --- | --- | --- |
| `kenney-tiny-town/grass` | 16 × 16, tiles | c6 lime | town, sprite, surface, nature, plant, grass | Grass |
| `kenney-tiny-town/grass-tufts` | 16 × 16, tiles | c6 lime, c10 green | town, sprite, surface, nature, plant, grass | Grass tufts |
| `kenney-tiny-town/grass-flowers` | 16 × 16, tiles | c2 sand, c6 lime, c10 green, c11 sand, c13 white | town, sprite, surface, nature, plant, grass, flower | Grass flowers |
| `kenney-tiny-town/pine-autumn` | 16 × 16 | c1 ink, c2 sand, c11 sand | town, sprite, nature, tree, plant | Pine autumn |
| `kenney-tiny-town/pine` | 16 × 16 | c1 ink, c6 lime, c10 green | town, sprite, nature, tree, plant | Pine |
| `kenney-tiny-town/bush` | 16 × 16 | c1 ink, c6 lime, c10 green | town, sprite, nature, plant | Bush |
| `kenney-tiny-town/forest-a` | 16 × 16 | c1 ink, c5 orange, c6 lime, c10 green | town, sprite, nature, tree, plant | Forest a |
| `kenney-tiny-town/forest-b` | 16 × 16 | c1 ink, c6 lime, c10 green | town, sprite, nature, tree, plant | Forest b |
| `kenney-tiny-town/forest-c` | 16 × 16 | c1 ink, c5 orange, c6 lime, c10 green | town, sprite, nature, tree, plant | Forest c |
| `kenney-tiny-town/forest-autumn-a` | 16 × 16 | c1 ink, c2 sand, c5 orange, c11 sand | town, sprite, nature, tree, plant | Forest autumn a |
| `kenney-tiny-town/forest-autumn-b` | 16 × 16 | c1 ink, c2 sand, c11 sand | town, sprite, nature, tree, plant | Forest autumn b |
| `kenney-tiny-town/forest-autumn-c` | 16 × 16 | c1 ink, c2 sand, c5 orange, c11 sand | town, sprite, nature, tree, plant | Forest autumn c |
| `kenney-tiny-town/path-top-left` | 16 × 16 | c2 sand, c5 orange, c6 lime, c10 green | town, sprite, ground, road | Path top left |
| `kenney-tiny-town/path-top` | 16 × 16 | c2 sand, c5 orange, c6 lime, c10 green | town, sprite, ground, road | Path top |
| `kenney-tiny-town/path-top-right` | 16 × 16 | c2 sand, c5 orange, c6 lime, c10 green | town, sprite, ground, road | Path top right |
| `kenney-tiny-town/tree-autumn` | 16 × 16 | c1 ink, c2 sand, c5 orange, c11 sand | town, sprite, nature, tree, plant | Tree autumn |
| `kenney-tiny-town/tree` | 16 × 16 | c1 ink, c2 sand, c5 orange, c6 lime, c10 green | town, sprite, nature, tree, plant | Tree |
| `kenney-tiny-town/sapling` | 16 × 16 | c1 ink, c6 lime, c10 green | town, sprite, nature, tree, plant | Sapling |
| `kenney-tiny-town/forest-d` | 16 × 16 | c1 ink, c5 orange, c6 lime, c10 green | town, sprite, nature, tree, plant | Forest d |
| `kenney-tiny-town/forest-e` | 16 × 16 | c1 ink, c5 orange, c6 lime, c10 green | town, sprite, nature, tree, plant | Forest e |
| `kenney-tiny-town/forest-f` | 16 × 16 | c1 ink, c5 orange, c6 lime, c10 green | town, sprite, nature, tree, plant | Forest f |
| `kenney-tiny-town/forest-autumn-d` | 16 × 16 | c1 ink, c2 sand, c5 orange, c11 sand | town, sprite, nature, tree, plant | Forest autumn d |
| `kenney-tiny-town/forest-autumn-e` | 16 × 16 | c1 ink, c2 sand, c5 orange, c11 sand | town, sprite, nature, tree, plant | Forest autumn e |
| `kenney-tiny-town/forest-autumn-f` | 16 × 16 | c1 ink, c2 sand, c5 orange, c11 sand | town, sprite, nature, tree, plant | Forest autumn f |
| `kenney-tiny-town/path-left` | 16 × 16 | c2 sand, c5 orange, c6 lime, c10 green | town, sprite, ground, road | Path left |
| `kenney-tiny-town/path` | 16 × 16, tiles | c2 sand | town, sprite, surface, ground, road | Path |
| `kenney-tiny-town/path-right` | 16 × 16 | c2 sand, c5 orange, c6 lime, c10 green | town, sprite, ground, road | Path right |
| `kenney-tiny-town/pine-autumn-b` | 16 × 16 | c1 ink, c2 sand, c5 orange, c11 sand | town, sprite, nature, tree, plant | Pine autumn b |
| `kenney-tiny-town/pine-b` | 16 × 16 | c1 ink, c5 orange, c6 lime, c10 green | town, sprite, nature, tree, plant | Pine b |
| `kenney-tiny-town/mushrooms` | 16 × 16 | c1 ink, c2 sand, c5 orange, c8 red, c13 white, c16 orange | town, sprite, nature, plant | Mushrooms |
| `kenney-tiny-town/forest-g` | 16 × 16 | c1 ink, c5 orange, c6 lime, c10 green | town, sprite, nature, tree, plant | Forest g |
| `kenney-tiny-town/forest-h` | 16 × 16 | c1 ink, c5 orange, c6 lime, c10 green | town, sprite, nature, tree, plant | Forest h |
| `kenney-tiny-town/forest-i` | 16 × 16 | c1 ink, c5 orange, c6 lime, c10 green | town, sprite, nature, tree, plant | Forest i |
| `kenney-tiny-town/forest-autumn-g` | 16 × 16 | c1 ink, c2 sand, c5 orange, c11 sand | town, sprite, nature, tree, plant | Forest autumn g |
| `kenney-tiny-town/forest-autumn-h` | 16 × 16 | c1 ink, c2 sand, c5 orange, c11 sand | town, sprite, nature, tree, plant | Forest autumn h |
| `kenney-tiny-town/forest-autumn-i` | 16 × 16 | c1 ink, c2 sand, c5 orange, c11 sand | town, sprite, nature, tree, plant | Forest autumn i |
| `kenney-tiny-town/path-bottom-left` | 16 × 16 | c2 sand, c5 orange, c6 lime, c10 green | town, sprite, ground, road | Path bottom left |
| `kenney-tiny-town/path-bottom` | 16 × 16 | c2 sand, c5 orange, c6 lime | town, sprite, ground, road | Path bottom |
| `kenney-tiny-town/path-bottom-right` | 16 × 16 | c2 sand, c5 orange, c6 lime, c10 green | town, sprite, ground, road | Path bottom right |
| `kenney-tiny-town/path-corner-a` | 16 × 16 | c2 sand, c5 orange, c6 lime, c10 green | town, sprite, ground, road | Path corner a |
| `kenney-tiny-town/path-corner-b` | 16 × 16 | c2 sand, c5 orange, c6 lime, c10 green | town, sprite, ground, road | Path corner b |
| `kenney-tiny-town/path-corner-c` | 16 × 16 | c2 sand, c5 orange, c6 lime, c10 green | town, sprite, ground, road | Path corner c |
| `kenney-tiny-town/path-corner-d` | 16 × 16 | c2 sand, c5 orange, c6 lime, c10 green | town, sprite, ground, road | Path corner d |
| `kenney-tiny-town/cobbles` | 16 × 16, tiles | c3 mist, c6 lime, c10 green | town, sprite, surface, ground, road, stone | Cobbles |
| `kenney-tiny-town/fence-left` | 16 × 16 | c1 ink, c2 sand, c5 orange, c9 plum | town, sprite, fence, farm | Fence left |
| `kenney-tiny-town/fence` | 16 × 16 | c1 ink, c2 sand, c5 orange, c9 plum | town, sprite, fence, farm | Fence |
| `kenney-tiny-town/fence-right` | 16 × 16 | c1 ink, c2 sand, c5 orange, c9 plum | town, sprite, fence, farm | Fence right |
| `kenney-tiny-town/fence-post` | 16 × 16 | c1 ink, c2 sand, c5 orange | town, sprite, fence, farm | Fence post |
| `kenney-tiny-town/roof-grey-left` | 16 × 16 | c1 ink, c3 mist, c4 slate, c7 night | town, sprite, architecture, roof | Roof grey left |
| `kenney-tiny-town/roof-grey` | 16 × 16, tiles | c1 ink, c3 mist, c4 slate, c7 night | town, sprite, surface, architecture, roof | Roof grey |
| `kenney-tiny-town/roof-grey-right` | 16 × 16 | c1 ink, c3 mist, c4 slate, c7 night | town, sprite, architecture, roof | Roof grey right |
| `kenney-tiny-town/roof-grey-window` | 16 × 16 | c1 ink, c3 mist, c4 slate, c7 night | town, sprite, architecture, roof, window | Roof grey window |
| `kenney-tiny-town/roof-red-left` | 16 × 16 | c1 ink, c2 sand, c3 mist, c4 slate, c5 orange, c8 red | town, sprite, architecture, roof | Roof red left |
| `kenney-tiny-town/roof-red` | 16 × 16, tiles | c1 ink, c2 sand, c3 mist, c4 slate, c5 orange, c8 red | town, sprite, surface, architecture, roof | Roof red |
| `kenney-tiny-town/roof-red-right` | 16 × 16 | c1 ink, c2 sand, c3 mist, c4 slate, c5 orange, c8 red | town, sprite, architecture, roof | Roof red right |
| `kenney-tiny-town/roof-red-window` | 16 × 16 | c1 ink, c2 sand, c3 mist, c4 slate, c5 orange, c7 night, c8 red | town, sprite, architecture, roof, window | Roof red window |
| `kenney-tiny-town/fence-vertical-top` | 16 × 16 | c1 ink, c2 sand, c5 orange | town, sprite, fence, farm | Fence vertical top |
| `kenney-tiny-town/cart` | 16 × 16 | c1 ink, c2 sand, c3 mist, c5 orange, c9 plum | town, sprite, transport, wood | Cart |
| `kenney-tiny-town/fence-vertical` | 16 × 16 | c1 ink, c2 sand, c5 orange | town, sprite, fence, farm | Fence vertical |
| `kenney-tiny-town/fence-vertical-bottom` | 16 × 16 | c1 ink, c2 sand, c5 orange | town, sprite, fence, farm | Fence vertical bottom |
| `kenney-tiny-town/roof-grey-low-left` | 16 × 16 | c1 ink, c3 mist, c4 slate, c5 orange, c7 night, c9 plum | town, sprite, architecture, roof | Roof grey low left |
| `kenney-tiny-town/roof-grey-low` | 16 × 16 | c3 mist, c4 slate, c7 night, c9 plum | town, sprite, architecture, roof | Roof grey low |
| `kenney-tiny-town/roof-grey-low-right` | 16 × 16 | c1 ink, c3 mist, c4 slate, c5 orange, c7 night, c9 plum | town, sprite, architecture, roof | Roof grey low right |
| `kenney-tiny-town/gable-grey` | 16 × 16 | c1 ink, c2 sand, c3 mist, c4 slate, c5 orange, c7 night, c9 plum | town, sprite, architecture, roof | Gable grey |
| `kenney-tiny-town/roof-red-low-left` | 16 × 16 | c1 ink, c2 sand, c4 slate, c5 orange, c7 night, c8 red | town, sprite, architecture, roof | Roof red low left |
| `kenney-tiny-town/roof-red-low` | 16 × 16 | c2 sand, c5 orange, c7 night, c8 red | town, sprite, architecture, roof | Roof red low |
| `kenney-tiny-town/roof-red-low-right` | 16 × 16 | c1 ink, c2 sand, c4 slate, c5 orange, c7 night, c8 red | town, sprite, architecture, roof | Roof red low right |
| `kenney-tiny-town/gable-red` | 16 × 16 | c1 ink, c2 sand, c3 mist, c4 slate, c5 orange, c7 night, c8 red | town, sprite, architecture, roof | Gable red |
| `kenney-tiny-town/fence-corner` | 16 × 16 | c1 ink, c2 sand, c5 orange, c9 plum | town, sprite, fence, farm | Fence corner |
| `kenney-tiny-town/fence-gap-left` | 16 × 16 | c1 ink, c2 sand, c5 orange, c9 plum | town, sprite, fence, farm | Fence gap left |
| `kenney-tiny-town/fence-gap-right` | 16 × 16 | c1 ink, c2 sand, c5 orange, c9 plum | town, sprite, fence, farm | Fence gap right |
| `kenney-tiny-town/fence-post-b` | 16 × 16 | c1 ink, c2 sand, c5 orange | town, sprite, fence, farm | Fence post b |
| `kenney-tiny-town/wall-wood-left` | 16 × 16 | c1 ink, c2 sand, c5 orange, c9 plum | town, sprite, architecture, wall | Wall wood left |
| `kenney-tiny-town/wall-wood` | 16 × 16 | c2 sand, c5 orange, c9 plum | town, sprite, architecture, wall | Wall wood |
| `kenney-tiny-town/doorway-wood` | 16 × 16 | c1 ink, c2 sand, c5 orange | town, sprite, architecture, door | Doorway wood |
| `kenney-tiny-town/wall-wood-right` | 16 × 16 | c1 ink, c2 sand, c5 orange, c9 plum | town, sprite, architecture, wall | Wall wood right |
| `kenney-tiny-town/wall-stone-left` | 16 × 16 | c1 ink, c3 mist, c4 slate, c7 night | town, sprite, architecture, wall, stone | Wall stone left |
| `kenney-tiny-town/wall-stone` | 16 × 16 | c3 mist, c4 slate, c7 night | town, sprite, architecture, wall, stone | Wall stone |
| `kenney-tiny-town/doorway-stone` | 16 × 16 | c1 ink, c3 mist, c4 slate | town, sprite, architecture, door, stone | Doorway stone |
| `kenney-tiny-town/wall-stone-right` | 16 × 16 | c1 ink, c3 mist, c4 slate, c7 night | town, sprite, architecture, wall, stone | Wall stone right |
| `kenney-tiny-town/rail-left` | 16 × 16 | c1 ink, c2 sand, c5 orange, c9 plum | town, sprite, fence | Rail left |
| `kenney-tiny-town/rail` | 16 × 16 | c1 ink, c2 sand, c5 orange | town, sprite, fence | Rail |
| `kenney-tiny-town/rail-right` | 16 × 16 | c1 ink, c2 sand, c5 orange, c9 plum | town, sprite, fence | Rail right |
| `kenney-tiny-town/signpost` | 16 × 16 | c1 ink, c2 sand, c5 orange, c9 plum | town, sprite, sign | Signpost |
| `kenney-tiny-town/window-wood` | 16 × 16 | c1 ink, c2 sand, c3 mist, c4 slate, c5 orange, c9 plum | town, sprite, architecture, window | Window wood |
| `kenney-tiny-town/door-wood` | 16 × 16 | c1 ink, c2 sand, c4 slate, c5 orange, c9 plum | town, sprite, architecture, door | Door wood |
| `kenney-tiny-town/door-wood-b` | 16 × 16 | c1 ink, c2 sand, c4 slate, c5 orange, c9 plum | town, sprite, architecture, door | Door wood b |
| `kenney-tiny-town/door-wood-c` | 16 × 16 | c1 ink, c2 sand, c4 slate, c5 orange, c9 plum | town, sprite, architecture, door | Door wood c |
| `kenney-tiny-town/window-stone` | 16 × 16 | c1 ink, c3 mist, c4 slate, c5 orange, c9 plum | town, sprite, architecture, window, stone | Window stone |
| `kenney-tiny-town/door-stone` | 16 × 16 | c1 ink, c3 mist, c4 slate, c5 orange, c9 plum | town, sprite, architecture, door, stone | Door stone |
| `kenney-tiny-town/door-stone-b` | 16 × 16 | c1 ink, c3 mist, c4 slate, c5 orange, c9 plum | town, sprite, architecture, door, stone | Door stone b |
| `kenney-tiny-town/door-stone-c` | 16 × 16 | c1 ink, c3 mist, c4 slate, c5 orange, c9 plum | town, sprite, architecture, door, stone | Door stone c |
| `kenney-tiny-town/dirt-mound` | 16 × 16 | c1 ink, c2 sand, c5 orange, c9 plum | town, sprite, ground | Dirt mound |
| `kenney-tiny-town/coin` | 16 × 16 | c1 ink, c2 sand, c11 sand | town, sprite, loot, gold, coin | Coin |
| `kenney-tiny-town/beehive` | 16 × 16 | c1 ink, c2 sand, c11 sand | town, sprite, farm | Beehive |
| `kenney-tiny-town/target` | 16 × 16 | c1 ink, c2 sand, c5 orange, c8 red, c13 white, c16 orange | town, sprite, training | Target |
| `kenney-tiny-town/castle-top-left` | 16 × 16 | c1 ink, c3 mist, c4 slate, c7 night | town, sprite, castle | Castle top left |
| `kenney-tiny-town/castle-top` | 16 × 16 | c1 ink, c3 mist, c4 slate, c7 night | town, sprite, castle | Castle top |
| `kenney-tiny-town/castle-top-right` | 16 × 16 | c1 ink, c3 mist, c4 slate, c7 night | town, sprite, castle | Castle top right |
| `kenney-tiny-town/battlement-left` | 16 × 16 | c1 ink, c3 mist, c4 slate, c7 night | town, sprite, architecture, wall | Battlement left |
| `kenney-tiny-town/battlement` | 16 × 16 | c1 ink, c3 mist, c4 slate, c7 night | town, sprite, architecture, wall | Battlement |
| `kenney-tiny-town/battlement-right` | 16 × 16 | c1 ink, c3 mist, c4 slate, c7 night | town, sprite, architecture, wall | Battlement right |
| `kenney-tiny-town/battlement-narrow` | 16 × 16 | c1 ink, c3 mist, c4 slate, c7 night | town, sprite, architecture, wall | Battlement narrow |
| `kenney-tiny-town/ladder` | 16 × 16 | c1 ink, c2 sand, c3 mist, c4 slate, c5 orange, c7 night, c9 plum, c12 ink | town, sprite, ladder, wood | Ladder |
| `kenney-tiny-town/well` | 16 × 16 | c1 ink, c2 sand, c3 mist, c4 slate, c5 orange, c7 night, c9 plum, c14 sky, c15 cyan | town, sprite, water | Well |
| `kenney-tiny-town/bomb` | 16 × 16 | c1 ink, c2 sand, c4 slate, c5 orange, c7 night | town, sprite, weapon, bomb | Bomb |
| `kenney-tiny-town/log` | 16 × 16 | c1 ink, c2 sand, c5 orange, c9 plum | town, sprite, nature, wood | Log |
| `kenney-tiny-town/sack` | 16 × 16 | c1 ink, c2 sand, c3 mist, c5 orange, c9 plum | town, sprite, container | Sack |
| `kenney-tiny-town/castle-wall-left` | 16 × 16 | c1 ink, c3 mist, c4 slate, c7 night | town, sprite, castle, architecture, wall | Castle wall left |
| `kenney-tiny-town/castle-wall` | 16 × 16, tiles | c3 mist | town, sprite, surface, castle, architecture, wall | Castle wall |
| `kenney-tiny-town/castle-wall-right` | 16 × 16 | c1 ink, c3 mist, c4 slate, c7 night | town, sprite, castle, architecture, wall | Castle wall right |
| `kenney-tiny-town/portcullis-left` | 16 × 16 | c3 mist, c4 slate, c7 night, c12 ink | town, sprite, architecture, door | Portcullis left |
| `kenney-tiny-town/portcullis-right` | 16 × 16 | c3 mist, c4 slate, c7 night, c12 ink | town, sprite, architecture, door | Portcullis right |
| `kenney-tiny-town/archway-left` | 16 × 16 | c3 mist, c4 slate, c7 night, c12 ink | town, sprite, architecture, door | Archway left |
| `kenney-tiny-town/archway-right` | 16 × 16 | c3 mist, c4 slate, c7 night, c12 ink | town, sprite, architecture, door | Archway right |
| `kenney-tiny-town/pickaxe` | 16 × 16 | c1 ink, c2 sand, c4 slate, c5 orange, c7 night | town, sprite, tool | Pickaxe |
| `kenney-tiny-town/pitchfork` | 16 × 16 | c1 ink, c2 sand, c3 mist, c4 slate, c5 orange, c7 night | town, sprite, tool, farm | Pitchfork |
| `kenney-tiny-town/key` | 16 × 16 | c1 ink, c3 mist, c4 slate | town, sprite, loot, key | Key |
| `kenney-tiny-town/bow` | 16 × 16 | c1 ink, c3 mist, c4 slate, c5 orange, c9 plum | town, sprite, weapon, bow | Bow |
| `kenney-tiny-town/arrow` | 16 × 16 | c1 ink, c3 mist, c5 orange | town, sprite, ammo, arrow | Arrow |
| `kenney-tiny-town/castle-base-left` | 16 × 16 | c1 ink, c3 mist, c4 slate, c7 night | town, sprite, castle | Castle base left |
| `kenney-tiny-town/castle-base` | 16 × 16 | c1 ink, c3 mist, c4 slate, c7 night | town, sprite, castle | Castle base |
| `kenney-tiny-town/castle-base-right` | 16 × 16 | c1 ink, c3 mist, c4 slate, c7 night | town, sprite, castle | Castle base right |
| `kenney-tiny-town/tower-left` | 16 × 16 | c3 mist, c4 slate, c7 night, c12 ink | town, sprite, architecture, tower | Tower left |
| `kenney-tiny-town/tower-dark` | 16 × 16 | c3 mist, c4 slate, c7 night, c12 ink | town, sprite, architecture, tower | Tower dark |
| `kenney-tiny-town/tower-window` | 16 × 16 | c1 ink, c3 mist, c4 slate, c7 night, c12 ink | town, sprite, architecture, tower, window | Tower window |
| `kenney-tiny-town/bricks` | 16 × 16, tiles | c3 mist, c4 slate, c7 night | town, sprite, surface, stone, wall | Bricks |
| `kenney-tiny-town/axe` | 16 × 16 | c1 ink, c2 sand, c3 mist, c4 slate, c5 orange, c7 night | town, sprite, weapon, axe | Axe |
| `kenney-tiny-town/mallet` | 16 × 16 | c1 ink, c3 mist, c4 slate, c5 orange, c8 red, c9 plum | town, sprite, weapon, hammer | Mallet |
| `kenney-tiny-town/sickle` | 16 × 16 | c1 ink, c2 sand, c3 mist, c4 slate, c5 orange, c7 night | town, sprite, tool, farm | Sickle |
| `kenney-tiny-town/bucket` | 16 × 16 | c1 ink, c3 mist, c4 slate, c5 orange, c7 night, c9 plum | town, sprite, container | Bucket |
| `kenney-tiny-town/bucket-water` | 16 × 16 | c1 ink, c3 mist, c4 slate, c5 orange, c7 night, c9 plum, c14 sky, c15 cyan | town, sprite, container, nature, water | Bucket water |
