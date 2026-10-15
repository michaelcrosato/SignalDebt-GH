# Pixel Engine 0.40.0

A WebGPU engine that renders 3D scenes as authentic pixel art (WebGPU only), with
Rapier physics, a platformer character with a full animation set, pixel HUD, audio, particles
and a look system (filters per layer). This folder is everything a game needs.

Read in this order:

1. `GUIDE.md` (~15k tokens): how to host a game, the mental model, a complete game, recipes, the rules and common mistakes. Read it whole.
2. `API.md` (~60k tokens): every export with its signature and doc. Search it; don't read it whole.
3. `game.js`: the guide's quick start, a complete game. Edit it into yours.
4. `ASSETS.md` (~4k tokens), when the game builds with models and textures: the library, the format, the loop and the style rules. Read it whole; `LIBRARY.md` (~44k tokens) lists every model and texture, built in or from a pack: search it (or filter `library.json`).

| File | What |
| --- | --- |
| `pixel-engine.js` | The engine, 4754 KB: one ES module with three.js (`THREE`, `TSL`), Rapier and its wasm, the hero kit, the built-in models (`assets/coin.glb`, `assets/hero.glb`, `assets/tree.glb`) and the engine CSS. Never edit it. |
| `index.html`, `game.js` | A game to start from: serve this folder over HTTP and open `index.html` |
| `examples/` | The guides' other recipes as pages (`side-scroller`, `top-down`, `looks`, `market`) and the modules they import (`market-models.js`) |
| `check.mjs` | `node check.mjs [page] [--keys KeyD*60,Space*4] [--cameras] [--looks a,b]`: plays the page in a real browser, saves screenshots, fails on any error. Run it before you hand a game back. `node check.mjs --sheets models.js` draws your models and textures (ASSETS.md) |
| `ASSETS.md`, `LIBRARY.md`, `CREDITS.md` | Models and textures as data; the built-in library and the imported packs, by family; where everything the kit carries came from (ship it with your game) |
| `library.json` | Every model and texture as data (id, kind, family, pack, tags, size, licence): filter it to find what a game needs |
| `packs/` | Imported packs (`packs/index.json` lists them): `loadPack('packs/<id>.json')` |
| `pixel-engine.d.ts`, `types/` | TypeScript declarations (optional) |
| `CHANGELOG.md` | What changed between engine versions |
| `LICENSE` | The engine's licence (MIT) |
| `manifest.json` | Version, build, where newer versions are (`latest`, `releases`, `source`) and every file with its size |

Serve it: `npx serve .` or `python3 -m http.server` here, then open http://localhost:3000/ (or :8000).
ES modules don't load from `file://`.

Newer versions: the newest release of the kit is always https://github.com/michaelcrosato/riftlight/releases/latest/download/pixel-engine.zip, and every release stays
at https://github.com/michaelcrosato/riftlight/releases with what changed in it (the page for agents: https://riftlight.vercel.app/handoff/). To build one from
the engine's repository instead: `git clone --depth 1 https://github.com/michaelcrosato/riftlight && cd riftlight && npm ci && npm run bundle`
makes `bundle/pixel-engine/`. To upgrade a game, see GUIDE.md, section 10.
