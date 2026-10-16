# Pixel Engine feedback

Version **0.40.0**, build **2026-10-15 3f59c1e**. The engine bundle was not edited.

Used: WebGPU pixel rendering and looks; THREE/Rapier exports; library models and Kenney Nature pack; model-data compilation and static merging; PlatformerCharacter and compiled animation; raycast Vehicle; pooled lights; WaterSurface; kinematic movers; particles; synthesized effects/music; settings, input commands and recording. These cover the district’s movement, driving, combat, signal equipment and presentation.

Not used: terrain/WFC/grass generation, cloth/soft bodies, flocks, GPU swarms, mirrors/render-to-texture views, ragdolls or destruction. The authored paved district and mission mechanics did not need them. Vehicle navigation uses a street graph rather than NavGrid. Authored stage checkpoints reconstruct mission actors instead of exposing raw physics snapshots. The platformer combo controls and stock settings/touch interface were replaced.

## Documentation gaps

- API.md truncates `EngineOptions.settings` before explaining `key`. The complete explanation—storage key, with `false` disabling persistence—is in `types/engine/Engine.d.ts`. This distinction matters when hiding the gear button.
- Animation API text refers to `npm run anim`, but the distributed kit has no such script. I wrote a browser harness around `renderSheet` to inspect the clips.
- `moveAxis()` is appropriate for a walking vector, but normalized keyboard diagonals reduce steering when W and A/D are held together. Driving guidance should distinguish digital steering from that vector.
- `check.mjs` captures the rendered world and engine HUD, not game-owned DOM. Manual stepping also leaves the onscreen canvas stale. Combined-interface checks need actual rendered frames before a page screenshot.

## Integration workarounds

| Constraint | Implementation |
|---|---|
| Digital, platformer-oriented pad mapping | `city-game.js`: remap buttons; poll trigger values separately and send them through recorded input commands; read keyboard steering independently. |
| Boolean vehicle brake | `vehicles.js`: proportional braking impulses retain analog L2 pressure. |
| Kinematic NPC poses bypass fixed-body response | `vehicles.js`, `navigation.js`: reject movement through building footprints; recovery searches unoccupied road positions. |
| Automatic ledge hangs require controls absent from this game | `actors.js`: disable ledge detection in a subclass, restrict requested poses, add two aiming clips. |
| Platform autostep threshold | `world.js`: bottom deck lowered to 24 cm; `missions.js`: checkpoint only after standing on the static roof, not during ascent. |
| Pond waves alias over a large coast | `world.js`: longer crossed waves and an explicit 96×160 grid. |
| No modern vehicle/radio equipment in the selected library | `models.js`, `equipment.js`: original ModelDefs; library furniture and palms remain reused. |
| Couch typography, glyphs and menu navigation | `ui.js`, `style.css`: DOM UI, device-aware prompts, focus/scroll behavior, touch controls, rumble and fullscreen. Actions use `input.send` so they replay. |
| Exact window fill and persistent custom options | `game.js`: `aspect:'fill'`, hidden gear, stable settings key; picture/audio options are driven through the engine APIs. |
| Controller-only browser activation | `scripts/couch.cjs`: dedicated Chrome profile, local-origin fullscreen permission and process-local autoplay configuration. This is a browser policy constraint, not an engine defect. |
| Animation and DOM capture tooling | `tests/actor-audio-review.mjs` encodes sheets in-browser; browser/UI/viewport tests wait for real render callbacks before screenshots. |

## One change

Expose raw analog triggers and last-active-device information in **Input’s recorded frame state**, independent of the platformer key map. That would remove separate navigator polling and custom command plumbing from non-platformer games.
