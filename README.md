# Signal Debt

**Start date:** 2026-10-15 · **Research source:** Grand Theft Auto V · **Engine:** Pixel Engine 0.40.0 (2026-10-15, 3f59c1e).

**Environment:** Codex CLI 0.163.0; Ubuntu 26.04.1 LTS under WSL; Playwright 1.63.0 / Chromium 153.0.8010.12 for automated gameplay. Native Windows Chrome 155 can use the local NVIDIA GeForce RTX 3060 Ti through WebGPU. **Model and effort:** GPT6-Astra / Ultracode, **stated by the user**, not independently verified. The user also stated a 1.05M context and CLI 0.162.1; the installed CLI reports 0.163.0.

An original open-district driving caper. Port Sable sold its residents’ future. Ren Vale, Bo Serrin and Iona Venn are taking back the receipt.

Drive the Breakwater, recover an impounded car, steal the contractor’s network keys, intercept a moving ledger shipment and put the evidence on the public frequency. Four connected jobs combine driving, combat, preparation, pursuit and a final broadcast. Free roam includes courier work, six hidden evidence cases, garage repairs and a performance upgrade.

Everything in the game’s world, characters, dialogue, music, signage and equipment is original or from the credited engine kit. The research source supplies no game assets. Read [DESIGN.md](DESIGN.md) for the complete scope, research and eleven inspected sources; [PLAN.md](PLAN.md) tracks verification.

## Play locally

The game is static files. No build step or runtime package installation is needed.

```sh
git clone https://github.com/michaelcrosato/SignalDebt-GH.git
cd SignalDebt-GH
python3 -m http.server 8080 --bind 127.0.0.1
```

Open **http://localhost:8080** in a WebGPU-capable Chrome or Edge with hardware acceleration enabled. Use `?touch=1` to show touch controls on a desktop. The game fills landscape and portrait windows. Fullscreen is available on the title screen and in Options; browsers may require a keyboard or pointer gesture before granting fullscreen.

For controller-only audio and fullscreen from a fresh start, use the included couch launcher:

```sh
npm ci
npm run couch
```

It serves the game at `http://127.0.0.1:8127` and opens a dedicated Chrome game profile. On this WSL machine it uses native Windows Chrome for the RTX 3060 Ti. The profile keeps its own checkpoints. Closing the game window stops its browser and local server. The launcher grants [automatic fullscreen for the local game origin](https://chromedevtools.github.io/devtools-protocol/tot/Browser/#method-setPermission) and uses Chrome’s [documented autoplay flag](https://developer.chrome.com/blog/autoplay). Chrome briefly limits automatic fullscreen re-entry after exiting; wait five seconds before toggling it on again. Keyboard/touch fullscreen works in the ordinary browser version too.

Progress saves locally at mission checkpoints. Continue resumes the last checkpoint. Restart checkpoint restores useful supplies and at least 60 health. Health recovers to 60 after eight seconds without damage. Choose a new story twice to replace an existing save. No account, network game service or API key is needed.

## Controls

| Action | PS5 / standard controller | Keyboard / mouse | Touch |
|---|---|---|---|
| Move / steer | Left stick | WASD / arrows | Left joystick |
| Sprint | R1 | Shift | SPRINT |
| Dodge / handbrake | ✕ | Space | DODGE / DRIFT |
| Interact / enter / exit | △ | F | INTERACT |
| Aim / fire | L2 / R2 | C / J or left mouse | AIM / FIRE |
| Accelerate | R2, analog | W | GAS |
| Brake / reverse | L2, analog | S | BRAKE |
| Reload / recover car | □; hold to recover | R; hold to recover | RELOAD / RECOVER |
| Signal scan | L1 | V | SCAN |
| District map | Share / view button | M | Pause → Map |
| Pause / back | Options / ○ | Escape | Pause |
| Menu navigation / select | D-pad or stick / ✕ | Arrows or WASD / Enter | Tap |
| Camera | Right stick | Drag mouse / Q–E | Drag world |

Vehicle recovery needs a short hold and returns the car to the nearest road. Slow below walking speed before exiting. On-foot aim assistance highlights a visible guard; shots respect building occlusion. Red ground rings telegraph incoming shots. During a broadcast, stay within the marked signal range and protect the equipment. Breaking sight starts Civic Shield’s search; avoid being spotted until the alert clears.

Options expose engine look, pixel rendering/size, lighting quality, frame cap, performance display, audio volumes, motion reduction, steering sensitivity and rumble. The engine’s default gear menu is disabled.

## Verification commands

For browser checks only, install the development dependency and browsers if they are not already installed:

```sh
npm ci
npx playwright-core install chromium
npm test
node check.mjs --keys 'Enter*1,*2,Enter*1,*2,KeyF*2' --out /tmp/signal-debt-check
node tests/ui-integration.mjs
node tests/systems.mjs
node tests/actor-audio-review.mjs
node tests/first-job.mjs --mode keyboard
node tests/first-job.mjs --mode gamepad
node tests/first-job.mjs --mode touch
node tests/campaign.mjs --fresh --mode keyboard
node tests/campaign.mjs --fresh --mode gamepad --approach diversion
node tests/campaign.mjs --fresh --mode touch
node scripts/couch.cjs --verify --headless
```

Browser integration scripts expect the local server on port 8080. `check.mjs` supplies its own server. All screenshot output stays outside the repository unless deliberately selected for documentation. Engine checks capture the rendered game and engine HUD; the integration scripts also capture the game’s DOM interface.

Three independent **New Story → ending** runs completed all 45 objectives with no page, game or GPU errors:

| Input | Active simulated play | Checkpoint retries |
|---|---:|---:|
| Keyboard | 30:25.63 | 0 |
| Scripted standard gamepad, diversion preparation | 31:59.97 | 1 |
| Portrait touch | 30:00.62 | 0 |

Controller and touch runs used no keyboard fallback. These are accelerated fixed-step gameplay times, including the controller retry; they are not a first-time human timing study. [Campaign evidence](docs/fresh-campaign-review.json) retains the complete ordered histories and input counts. The last presentation-only changes are reconciled against the exact tested source bytes in [this record](docs/campaign-source-reconciliation.json).

The final native **RTX 3060 Ti / Chrome 155** test measured **56.66 FPS in the garage, 56.32 while driving and 56.42 in combat/pursuit**, with audio running, medium quality, a 1920×1080 viewport and 640×360 internal rendering. Blank headed/headless Chrome had the same roughly 56–57 FPS requestAnimationFrame cadence. The game's 60 FPS target therefore remains **unverified on this host**; the result is not rounded up to 60. Diagnostic browser flags were not shipped. See [performance measurements](docs/performance-native.json) and [cadence controls](docs/performance-diagnostic-headed.json).

The physical **Galaxy S25** and physical DualSense vibration were not available for verification. Touch defaults to low quality and a 30 FPS cap. Actual gameplay layouts passed in WebGPU-enabled Chromium at 360×640, 390×844, 820×1180, 1920×1080 and 2560×1080. The installed 24-profile Chromium/WebKit/Firefox matrix verified the unsupported-WebGPU fallback in those default launches; it does not prove playable Safari support. Real iOS Safari was unavailable.

[VERIFICATION.md](docs/VERIFICATION.md) maps the system, UI, persistence, model, animation and side-activity evidence. [ENGINE-FEEDBACK.md](ENGINE-FEEDBACK.md) records engine integration limitations and workarounds.

## Structure and credits

- `city-game.js`: integration, combat, pursuits, interactions and saves.
- `missions.js`: four authored jobs, progression and checkpoints.
- `world.js`, `models.js`, `equipment.js`: district geometry and original model data.
- `vehicles.js`: engine vehicle integration, analog braking and traffic.
- `actors.js`, `audio.js`: character styling/animation and original procedural score.
- `ui.js`, `style.css`: controller-first menus, HUD, map and touch controls.
- `persistence.js`: validated browser-local checkpoints.
- `pixel-engine.js`: unchanged upstream engine. All three.js and Rapier APIs come through this module.

[ENGINE-README.md](ENGINE-README.md), [GUIDE.md](GUIDE.md), [API.md](API.md) and the unchanged examples document the kit. [CREDITS.md](CREDITS.md) preserves all engine and pack attribution, including Kenney nature assets (CC0). Engine license: [MIT](LICENSE).
