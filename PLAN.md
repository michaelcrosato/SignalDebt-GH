# Build and verification plan

The slice contract is in DESIGN.md. An unchecked item remains required work. Performance targets that could not be verified are explicitly reported, as requested in the brief’s Done section. Evidence belongs in docs/VERIFICATION.md and test output; passing smoke checks alone does not prove the campaign.

- [x] Read engine README, GUIDE in full; inspect ASSETS and animation API. Evidence: engine 0.40.0 copied intact; research notes and engine exploration.
- [x] Research source from 10–20 inspected sources, generate 50 names, select randomly, create and push public repository. Evidence: DESIGN sources, research/title-selection.json, initial Git commit and origin.
- [x] Write design and this verification plan before implementation.
- [x] Build district and original models from library-first data; inspect model sheets and in-game views. Verify collision, roads, alleys, landmarks, water, moving lift, readable signage, draw calls and camera occlusion.
- [x] Integrate animated foot controls, combat, aim assistance, enemies, health and retry. Inspect every used animation's contact sheet; test attack/reload/dodge/defeat through user input.
- [x] Integrate at least two drivable vehicle profiles, traffic and civilians. Verify entering/exiting, analog triggers, steering, handbrake, impacts, recovery, repair and upgrade.
- [x] Build pursuit/search/escape with occlusion and readable HUD; verify actual chase, a building breaking sight, reacquisition and cleared heat.
- [x] Build the complete four-mission chain with briefs, dialogue, preparation consequences, checkpoint retry, meaningful rewards and ending. Verify objectives from start to end without teleporting or invoking completion methods; measure campaign time.
- [x] Add optional courier challenge, caches, free roam and replay; verify rewards are collectible once and reset behavior is intentional.
- [x] Add save/continue/reset and validate snapshots, unavailable/corrupt storage and retry without losing completed preparation.
- [x] Complete controller-operable title/pause/map/help/options/mission/retry/ending screens, dynamic glyphs and touch equivalents. Test every menu with fake standard gamepad, keyboard/mouse and touch.
- [x] Expose engine picture/audio/debug settings with gear disabled; verify options take effect and persist. Verify title/options fullscreen and reduced motion/rumble toggles.
- [x] Run `node check.mjs --keys ...` with a real completed objective; inspect PNGs and ensure meaningful changing status. Run shipped example pages or document their untouched engine-sample status and verify them before handoff.
- [x] Play full campaign with keyboard, scripted gamepad and portrait touch; cover both preparation branches and retry. Tests must exercise public input routes and inspect resulting state.
- [x] Run viewport matrix outside repo for small phones, tablets, wide screens and WebKit. Inspect representative PNGs, overflow and console reports; distinguish unsupported WebGPU from game defects.
- [x] Measure rendered frame rate and document machine/browser/GPU. Report unverified RTX 3060 Ti, Galaxy S25 and physical DualSense behavior explicitly if unavailable.
- [x] Audit GUIDE “Before you hand back” and every DESIGN slice item against current evidence; fix outstanding work.
- [x] Finish README with run/controls, date, source, engine, verified environment and user-stated model/effort; preserve engine/asset credits.
- [x] Write ENGINE-FEEDBACK.md last: version, used/unused systems and why, documentation gaps, all workarounds/files, one requested engine change. Commit and push final milestone.

Milestones: foundation/research; playable district and controls; complete mission chain; interaction/visual polish; verified delivery. Commit and push at each.

Current proof: 45 ordered objectives from New Story through ending in all three input modes; 30–32 active simulated minutes; all current functional gates pass. The final native measurement is 56–57 rendered FPS, matching the host’s blank-browser cadence. The 60 FPS target and physical Galaxy S25 target are not claimed as verified. See docs/VERIFICATION.md for full scope and evidence.
