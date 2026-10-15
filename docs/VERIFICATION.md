# Verification record — in progress

The completion contract is DESIGN.md. This file records current evidence; unchecked items in PLAN.md remain required. Simulation checks are separate from real rendered performance measurements.

## Verified so far

| Requirement | Current evidence | Scope |
|---|---|---|
| Upstream engine unchanged | SHA-256 `2cd3cf6b1365288a01b0a106e2fd742f3248e34ab2f2bee17a8049457b4ebb50` matches downloaded kit | pixel-engine.js only |
| Original title/research/repository | research/title-selection.json; DESIGN.md; Git origin | 50 candidates, uniform random choice, 11 inspected source pages |
| District/models/lift | docs/world-review.json; /tmp/signal-world-preview/; /tmp/signal-debt-model-check-final/ | 95 building records, accessible sites, real character rides lift to y=8.22 |
| Animation/audio | docs/animation-review.json; tests/actor-audio-review.mjs | 22 clips rendered as contact sheets; all inspected, no validation problems; original aim clips; audio unlock and nonzero bounded samples |
| Equipment models | /tmp/signal-equipment-final/ | Three original data models, zero problems/warnings; sheets inspected |
| Engine smoke objective | /tmp/signal-debt-first-check-2/report.json and index.png | check.mjs exits0; Enter, Enter, F completes Meet Bo and advances stage; screenshot inspected |
| Actual DOM interface | tests/ui-integration.mjs; /tmp/signal-debt-ui-integration/ | 33 checks, real engine; keyboard, fake gamepad, portrait touch |
| First complete job — keyboard | /tmp/signal-debt-first-job-keyboard/first-job.json | 12 stages, public inputs only; 491.55 simulation seconds; no errors |
| First complete job — controller | /tmp/signal-debt-first-job-gamepad/first-job.json | Standard fake pad, real analog trigger/stick routes; 457.33 simulation seconds; no errors |
| First complete job — touch | /tmp/signal-debt-first-job-touch/first-job.json | CDP touch joystick/pedals/buttons in portrait; 372.63 simulation seconds; no errors |
| Vehicle/menu/combat mechanics | tests/systems.mjs; /tmp/signal-debt-systems/systems.json | Isolated fixtures plus real input: analog throttle/brake, turn, repair, upgrade, reload, dodge, scan, retry, reload/Continue |
| Save validation | tests/persistence.test.mjs | Malformed/inaccessible storage, terminal stage invariants, zero values, known vehicles, roundtrip |
| LOS/navigation | tests/navigation.test.mjs | Occlusion geometry and road connectors, including nearest vertical entry |
| Native target availability | docs/native-engine-adapter.json | Windows Chrome155 actually selects nonfallback NVIDIA Ampere adapter, GPU identified as RTX3060Ti |

The first-job timing is the game clock under manual accelerated engine steps, including an automated driver's maneuvering. It does not establish first-time human duration or rendered FPS. The complete four-job chain is not yet verified.

## Current limitations and pending checks

- Jobs2–4 still need complete input-only traversal with all three input paths, both preparation branches, checkpoint failure and finale.
- Native GPU frame-rate sampling is in progress. A GPU name alone is not performance evidence.
- Physical GalaxyS25 and physical DualSense hardware have not been tested. Fake-controller behavior cannot establish physical vibration quality.
- The installed viewport matrix's 24 profiles showed WebGPU unavailable under its default launches. Those captures verify the fallback interface, not playable WebKit/Firefox support. Dedicated Chromium WebGPU layout checks cover actual gameplay separately.
- Real iOS Safari is unavailable. WebKit engine checks are the closest installed approximation, and this WebKit build does not expose WebGPU.
- Optional courier, every evidence case, replay/continue edge cases and final guide audit remain to be completed.

## Evidence conventions

Full playthrough tests must not teleport, grant health, mutate objectives or call completion methods. They may advance the engine's manual clock and observe current state to choose real input. Targeted systems tests and benchmarks may position a scenario, but explicitly state that scope and do not prove campaign completion. Screenshots of manually stepped frames must allow real rendering before page capture; the engine's capture API alone does not update the DOM screenshot.
