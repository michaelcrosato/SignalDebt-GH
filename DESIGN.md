# Signal Debt

Started 2026-10-15. Research source: **Grand Theft Auto V**. Pixel Engine **0.40.0**, build 2026-10-15 3f59c1e. An original single-player crime caper; no source names, dialogue, maps, art, logos or music enter the game.

## What makes the source work

Driving is enjoyable before it has a destination. Travel, spontaneous trouble, authored jobs and escape share one continuous city. Traffic and recognizable neighborhoods make the space feel inhabited. Preparation makes a later heist matter. Police are most interesting when the player can understand their search and break line of sight. Checkpoints make bold experimentation affordable. The best missions combine several established verbs instead of merely enlarging an enemy wave.

The research also points to opportunities: respond immediately to movement input; communicate aim assistance; let alternate routes work; make preparation consequences visible; keep one clear next action on the HUD; avoid long, passive wanted cooldowns. These are design inferences from the eleven distinct inspected sources below, not claims that every player agrees.

## Original premise and visual direction

Port Sable's waterfront has been sold twice: once to its residents, then to the company paid to remove them. Driver **Ren Vale**, mechanic **Bo Serrin** and radio engineer **Iona Venn** steal the ledger proving it. The antagonist is **Civic Shield**, a security contractor that calls evictions "neighborhood upgrades."

One open district, **the Breakwater**, contains a market, repair yard, commercial streets, security depot, coastal promenade, cargo quay and broadcast infrastructure. Warm apricot concrete, teal sea, dark asphalt, palms, rooftop plant, road paint and original shop signage form a bright coastal noir. A high chase camera keeps road choices and combat legible. Chunky 3D silhouettes and pixel outlines suit the engine; presentation never pretends to use source assets. Menus use large editorial typography, warm paper, ink and signal orange. Music is an original procedural nocturnal synth score with driving and pursuit arrangements.

## Full-game direction (outside this deliverable)

Additional districts, a longer crew story, more planning choices, vehicle acquisition and customization, boats and extended interiors. These are future direction only and will not appear as disabled menu items or promises inside the slice.

## Slice contract

Every item below is a required working feature, not a placeholder.

- One continuous, freely explorable dense district with connected roads, useful alleys, distinct landmarks, water, parked/drivable vehicles, circulating traffic and reactive pedestrians. Solid buildings and world boundaries have matching collision. A minimap shows streets, the player, relevant danger and the current objective.
- Immediate animated on-foot movement, sprint, a defensive roll/dodge or cover action, reliable assisted weapon fire with visible targeting, ammunition/reload, enemy telegraphs, health, damage, defeat and checkpoint retry. Combat avoids gore.
- Enter/exit cars, analog throttle/brake and steering, handbrake, collision response, damage, recovery from a stuck/overturned car, repair, and at least two meaningfully different vehicle profiles. Traffic and security vehicles participate in the world.
- A readable heat system: witnessed trouble creates pursuit, pursuers search the last seen area after contact is broken, and hiding clears heat. Occluding buildings and alternate streets matter. Do not require waiting through long passive timers.
- Four original story missions, each with brief/debrief, crew dialogue, several distinct objectives, useful stage checkpoints and a final resolution. First-time campaign target is 20–40 minutes, including travel, planning, interaction and combat. Verification must record actual elapsed play and any remaining uncertainty instead of asserting this from stage counts.
  1. **Borrowed Ignition:** meet Bo, retrieve the impounded getaway car, prove it on a district-spanning courier run, return to the garage. Teaches foot interaction, car entry, driving and delivery.
  2. **Terms of Service:** choose a signal-jamming or diversion preparation, collect access from three sites and steal the contractor's manifest. Preparation visibly changes the finale's pressure. Teaches infiltration, aimed combat, observation and escape.
  3. **Moving Assets:** intercept a moving security shipment, recover its cargo and keep the crew safe while evidence is copied; deliver the evidence under pursuit. Teaches interception, vehicle switching and mixed combat/driving.
  4. **Public Record:** install the stolen transmission equipment, secure relays, ride the service lift and defend the broadcast before escaping to the waterfront. Previous preparation changes this mission. Completes the story, then opens free roam and mission replay.
- Rewards pay for repair and one functional vehicle upgrade. A compact optional courier challenge and hidden evidence caches reward free exploration. Progress saves locally at safe checkpoints, supports Continue and can be reset deliberately. Corrupt/unavailable storage fails gracefully.
- Engine systems visibly used during play: Rapier vehicle/collision physics; compiled character animation; water; pooled lights; impact/dust particles; camera/screen feedback; a rideable service lift; original synthesized effects/music; a signal scan that briefly changes the scene look to reveal mission equipment. Effect intensity can be reduced.
- Controller-first title, pause, mission, map, help, options, retry and ending screens. D-pad/left stick navigate; ✕ confirms; ○ goes back. All controls work from keyboard/mouse and touch as well. Prompts follow the last active input. Gamepad digital remapping uses `input.gamepadButtons`; trigger values come from `navigator.getGamepads()` and are recorded through input commands.
- Full-window adaptive 16:9 and 9:16 layouts, touch controls with safe targets, TV-readable objective text and selected menu items, subtitles, fullscreen on title/options, optional rumble, steering sensitivity and motion reduction.
- Own controller-operable options expose engine look, pixel rendering/size, quality, FPS cap, debug information and audio volumes via `engine.settings` / `engine.audio`. Engine gear button is disabled. No external three.js/Rapier import and no engine bundle edits.

## Verification and performance

`PLAN.md` defines evidence for each feature. Run the kit's check with keys that complete a real objective, inspect its images, play the full chain through each input path, and independently inspect portrait touch and fake-controller navigation. Run the installed viewport matrix across phone/tablet/wide sizes and WebKit; report unsupported WebGPU honestly. Measure real rendered frame rate separately from manual simulation. The targets are Chrome + RTX 3060 Ti at 60 fps and Galaxy S25 at 30 fps; emulation or software rendering cannot verify those devices.

## Research sources

Eleven unique pages were opened and read on 2026-10-15. Detailed paraphrased notes and unsuccessful opens are recorded in `research/`.

1. [Official GTA V Game Help / manual](https://dlassets-ssl.xboxlive.com/public/content/4f0a3089-ba2c-4f3d-9e38-102a41cbd885/GameManual/bffef18e-3f19-4190-a9b1-75402359b13b/en-IL/index.html) — controls, HUD, world services, heists.
2. [TechSpot: Grand Theft Auto V Review](https://www.techspot.com/review/714-grand-theft-auto-5/) — emergent city, search behavior, checkpoints.
3. [Push Square: Grand Theft Auto V Review (PS5)](https://www.pushsquare.com/reviews/ps5/grand-theft-auto-v) — neighborhood identity, tactile response and control criticism.
4. [GamesRadar+: Grand Theft Auto 5 review](https://www.gamesradar.com/gta-5-review/) — atmosphere, travel and preparation.
5. [Destructoid: Review: Grand Theft Auto V](https://www.destructoid.com/reviews/review-grand-theft-auto-v/) — driving, aiming and escape friction.
6. [New Game Network: Grand Theft Auto V Review](https://www.newgamenetwork.com/article/946/grand-theft-auto-v-review/) — freedom, landmark legibility, scripting constraints.
7. [Rockstar Support: GTAV Title Update 1.19 / 1.05](https://support.rockstargames.com/articles/VwB3r6tbVAvoZQfSWGG0I/gtav-title-update-1-19-ps3-xbox-360-1-05-ps4-xbox-one) — deadzone, acceleration and leveling options.
8. [Rockstar Support: Changing Camera Perspective to 1st Person](https://support.rockstargames.com/articles/4SLMPiZCrVUVcuL71dBD29/changing-camera-perspective-to-1st-person-in-gtav) — dedicated camera controls.
9. [GameSpot: Grand Theft Auto V Review](https://www.gamespot.com/reviews/grand-theft-auto-v-review/1900-6414475/) — varied missions, heists and characterization.
10. [GameSpot: The Making of a Great Heist Sequence](https://www.gamespot.com/articles/grand-theft-auto-v-the-making-of-a-great-heist-sequence/1100-6407826/) — anticipation, equipment, coordination and payoff.
11. [GameSpot: GTA 5 PS4/Xbox One/PC Review](https://www.gamespot.com/reviews/grand-theft-auto-5-ps4-xbox-one-pc-review/1900-6415959/) — cinematic missions and arbitrary failure criticism.

Title selection: 50 original candidates, uniform random selection and suffix recorded in `research/title-selection.json`. Selected **Signal Debt**, repository **SignalDebt-GH**.
