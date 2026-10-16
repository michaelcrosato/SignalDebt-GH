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
```

Browser integration scripts expect the local server on port 8080. `check.mjs` supplies its own server. All screenshot output stays outside the repository unless deliberately selected for documentation. Engine checks capture the rendered game and engine HUD; the integration scripts also capture the game’s DOM interface.

Verification is ongoing: a passed opening-job test is not a claim that all four jobs, every input and the frame-rate targets are verified. Reports distinguish accelerated simulation time from real rendered frame-rate measurements, and device emulation from physical hardware.

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
