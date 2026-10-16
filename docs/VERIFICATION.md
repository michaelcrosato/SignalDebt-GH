# Verification record

Start date: 2026-10-15, America/Vancouver. Engine 0.40.0. The acceptance scope is the user’s attached brief and DESIGN.md. Full gameplay, targeted fixtures, visual checks and real-time performance measurements are deliberately identified below so one does not stand in for another.

## Campaign and input paths

[Fresh campaign review](fresh-campaign-review.json) records three separate empty-browser-storage runs from New Story to the ending. Each completed all 45 authored objective tuples in order, all four chapters, and the final resolution. There were no browser, game-hook or GPU errors.

| Input | Active fixed-step play time | Retry count | Input evidence |
|---|---:|---:|---|
| Keyboard | 30:25.63 | 0 | 8,822 keyboard events |
| Standard fake gamepad, diversion | 31:59.97 | 1 | 14,900 pad updates; zero keyboard events |
| Portrait touch, jam | 30:00.62 | 0 | 27,211 touch events and 9 menu taps; zero keyboard events |

Times are accelerated simulation time, not wall time or a human pacing study. Controller time includes the public checkpoint retry; its saved ending clock is 31:50.92. Runs use ordinary vehicle recovery and retry controls when necessary. They never assign gameplay position, health, money or objective completion. Both preparation branches show their real downstream effects: jam uses 100 uplink integrity and 25-second wave spacing; diversion uses 150 integrity and 18-second spacing.

Three post-load presentation changes are proven by exact SHA-256 reconstruction in [campaign-source-reconciliation.json](campaign-source-reconciliation.json): live input-specific toast wording, clearing a stale Map return parent, and correcting one cover hint to name cargo containers. Mission gates, coordinates, durations, rewards, physics and movement are identical to the completed runs. Current UI behavior is covered separately by the focused navigation/prompt tests.

Inspected ending captures: [keyboard](campaign-keyboard-ending.png), [controller](campaign-gamepad-ending.png), [touch](campaign-touch-ending.png).

## Requirement evidence

| Required behavior | Authoritative evidence and scope |
|---|---|
| Required kit, random title and public repository | ENGINE-README.md; research/title-selection.json (50 candidates, random index22); DESIGN.md (11 distinct inspected source pages); Git milestones and public origin. Engine SHA-256 remains `2cd3cf6b1365288a01b0a106e2fd742f3248e34ab2f2bee17a8049457b4ebb50`, matching the downloaded kit. |
| Original district, art, cast and music | world.js/models.js/equipment.js/actors.js/audio.js, CREDITS.md; [world review](world-review.json), [model checks](model-review.json), [animation/audio review](animation-review.json). 95 building/occluder records, connected roads and accessible sites; library-first assets and original data models; no source-game assets. |
| Animation, foot control, collision, shooting, aiming, dodge and reload | 22 contact sheets rendered and inspected; all clip validation problems empty. Actor runtime tests verify grounded movement, distinct sprint, solid-wall collision and roll recovery. [Systems checks](systems-review.json) additionally verify real left-mouse shooting and camera drag, reload, dodge, scan, defeat and retry. Inherited Run/Skid angular-speed warnings are recorded. |
| Cars, van, analog controls, handbrake, damage, recovery, repair and upgrade | [Systems checks](systems-review.json) measure partial/full throttle and brake response and real turning. [Steering/boarding review](boarding-steering-review.json) proves keyboard/pad/touch full steering parity. [Remaining gates](remaining-gates.json) records real van entry/driving and visible handbrake dust. [Completion regressions](completion-regressions.json) proves an occupied overturned-car recovery selects clear road space. |
| Pursuit, search and hiding | Complete campaign escape stages; navigation unit tests; [side-activity/collision review](side-activities-review.json) confirms NPC cars stop before buildings and boundaries. Contact damage requires vertical proximity, verified against a roof/same-level control. |
| Meaningful preparation, mission chain and ending | Complete fresh ordered histories and wave/integrity samples in fresh-campaign-review.json. All mission briefs, dialogue, jobs, rewards and ending exercised through public input. |
| Safe stage checkpoints, Continue, replay and storage failures | persistence unit tests validate schema, terminal stages, corruption and unavailable storage. completion-regressions.json verifies replay preserves the original campaign even when Storage throws, and clears transient courier/scan state. [Lift checkpoint review](lift-checkpoint-review.json) proves a real walk onto the static roof, completion only after grounding there, and safe reload while the lift is elsewhere. |
| Optional courier, hidden evidence and free roam | side-activities-review.json: four courier deliveries in 130.67 simulation seconds, exactly $450 earned; six cases each collected through walking inputs, $120/12-round reward and one-time persistence. Cache setup uses explicit nearby fixtures; the timed courier starts from an authentic played checkpoint and uses only public inputs. |
| Controller-first menus, touch parity and dynamic prompts | [69 UI checks](ui-review.json) plus [24 focused navigation/prompt checks](ui-navigation-review.json). Real keyboard/touch/pad menu input, settings, retry, recorded UI actions, actual engine replay of touch input, menu parent history, live glyph/help/toast changes, touch hold/release and 44px targets. |
| All picture/audio options persist | ui-review.json changes the controls, performs an actual page reload, and verifies look, pixel mode/size, quality, frame cap, debug visibility and three audio volumes. Engine gear is disabled; settings use a stable storage key. |
| Controller-only fullscreen/audio startup | [Couch launcher review](couch-launcher-review.json): fresh native Chrome profile, raw-CDP fake pad with no trusted activation at any point; title/options fullscreen enter/exit, running audio, first objective and persisted Continue all pass. Grant applies to the local game origin; another origin is denied. Window close releases server/port. Chrome requires five seconds before automatic fullscreen re-entry. Ordinary keyboard/touch fullscreen also passes in remaining-gates.json. |
| Engine features visible in play | Real suspension/collisions, compiled poses, coast water and pooled lights, handbrake dust/impact particles, moving lift and signal scan. [Scan review](scan-review.json) includes actual active/restored images and doubled evidence-case scale. Original score/effects have nonzero bounded samples and real audio unlock evidence. |
| Phone, tablet, wide and WebKit checks | [Gameplay viewport review](viewport-review.json): five sizes, 20 images, no critical overlap, clipping or horizontal overflow. [Default engine matrix](viewport-fallback-review.json): 24 profiles, unsupported-WebGPU fallback fits. Images were recaptured after waiting for actual rendered frames; manual-step stale canvases are not used as final visual evidence. |

## Performance and physical-device limits

[Final native performance](performance-native.json) measures real renderer callbacks, never manual steps: Windows Chrome 155, nonfallback NVIDIA/Ampere adapter identified as RTX 3060 Ti, 1920×1080 viewport, 640×360 internal rendering, medium quality and running audio.

| Scene | Average rendered FPS | p95 frame interval |
|---|---:|---:|
| Garage | 56.66 | 21.7 ms |
| Driving | 56.32 | 23.3 ms |
| Six enemies and two pursuers | 56.42 | 23.4 ms |

All 16 runtime file/asset hashes match the bytes served, before/after files and the current runtime. No engine/GPU errors. The roof capture shows Ren clearly after moving the antenna to a rear corner.

The earlier approximately 60 FPS sample is superseded by this final measurement. Blank visible headed Chrome measured 55.96 FPS; blank headless Chrome approximately 56.69 FPS. Game main-thread work was only about 14–16% in the paired headed control, with physics about 0.03–0.09 ms. Audio suspension, frame-cap changes and experimental browser flags did not produce a valid 60 FPS capped configuration. Those flags/clock bridges were not shipped. These controls support a host/browser cadence limit, not a rendering saturation diagnosis. **The 60 FPS target remains unverified here.** The requested handoff explicitly permits reporting targets that could not be verified; this report does so rather than claiming a pass.

Physical Galaxy S25 performance, physical DualSense vibration and real iOS Safari remain unverified. Device profiles prove layout/input behavior, not those hardware targets. The installed WebKit/Firefox builds lacked WebGPU; their fallback results are not gameplay compatibility evidence.

## GUIDE “Before you hand back”

- `npm run check` uses Enter, neutral frames, Enter, neutral frames and F to complete Meet Bo. `status()` changes from title/briefing to playing/job1/stage2 and reports health, heat, ride and elapsed play.
- [Page checks](engine-page-checks.json) include every shipped HTML page. Main game advances an objective; Side Scroller records a fall; Top Down lights a pad; Looks changes to noir; Market is the unchanged static kit showcase. All exit0 and all captures were inspected.
- Current screenshots show grounded actors, readable HUD/menus and visible scenes. The kit checker captures its engine HUD; DOM menus/HUD are additionally verified with full-page screenshots after real rendering.
- No game module imports a second three.js/Rapier, constructs PointLight or uses WebGL-era materials/renderers. Model checks report no unknown palette slots or problems. The engine bundle is unchanged.
- Controls are documented in README and the in-game Help screen. Portrait touch and scripted standard-controller paths complete the entire slice.

## Reproduce

Run a server with `npm run dev`, then use the commands in README. Node unit tests, per-system browser tests, fresh campaigns and the native performance script are retained under tests/ and scripts/. Some system tests explicitly position fixtures to isolate behavior; their reports say so and never substitute for the fresh campaign runs. Raw exploratory outputs remain under /tmp; selected durable reports and images are checked into docs/.
