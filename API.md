# Pixel Engine API (v0.40.0)

Every export of `pixel-engine.js` (484 names), generated from the engine's TypeScript at build 2026-10-15 3f59c1e. Signatures are the source declarations; descriptions are their doc comments. Read GUIDE.md first: it says how the pieces fit; come here for exact names and parameters (search this file, don't read it whole).

## Sections

1. Engine and games: `ADAPTIVE_ASPECT`, `AspectMode`, `BUILTIN_MODELS`, `chunkyResolution`, `clearScene`, `computeFraming`, `countObjects`, `DebugAction`, `DebugKeyChanges`, `DebugKeyMap`, `DebugKeysOption`, `DEFAULT_DEBUG_KEYS`, `disposeObject`, `Engine`, `ENGINE_VERSION`, `EngineOptions`, `FPS_OPTIONS`, `FrameLimiter`, `Framing`, `Game`, `GameContext`, `LoadingScreen`, `loadSettings`, `normalizeSettings`, `optionsFromUrl`, `PIXEL_SIZES`, `PlayerSettings`, `QUALITY`, `QUALITY_LEVELS`, `QUALITY_OPTIONS`, `QualityLevel`, `QualityOption`, `QualitySettings`, `rebindDebugKeys`, `Resolution`, `RESOLUTIONS`, `resolveDebugKeys`, `Settings`, `SettingsHost`, `SettingsPanel`, `storeSettings`, `urlSettings`, `withUrlOptions`
2. Camera: `CAMERA_PRESETS`, `CameraConfig`, `CameraPreset`, `CameraRig`, `CameraRigState`, `createCameraRig`, `FirstPersonRig`, `FreeRig`, `OrthoRig`, `ThirdPersonRig`
3. Rendering, looks and filters: `AMOUNT`, `applyFilter`, `applyFilters`, `BackendName`, `CapturedFrame`, `clampParam`, `cloneLook`, `DEFAULT_EDGES`, `DEFAULT_PIXEL`, `defaultLook`, `defaultParams`, `EdgeSettings`, `FILTER_IDS`, `FILTER_PRESETS`, `FilterContext`, `FilterDef`, `FilterGroup`, `filterOrder`, `FilterParam`, `filterParams`, `filterPresetOf`, `filterPresets`, `FILTERS`, `FilterSpace`, `getFilter`, `LayerLook`, `Look`, `LOOK_ALIASES`, `LOOK_PRESETS`, `LOOK_TARGET_LABELS`, `LOOK_TARGETS`, `LookFilter`, `lookFilters`, `lookFromFilters`, `LookLayer`, `lookLayerOf`, `LookPlan`, `lookPresetLabel`, `lookPresetName`, `lookPresetOf`, `looksEqual`, `LookTarget`, `NO_WEBGPU`, `normalizeLook`, `PALETTES`, `paramsOf`, `PIXEL_PARAMS`, `PIXEL_PRESETS`, `PixelLook`, `PixelRenderer`, `planLook`, `RenderMode`, `scenePixel`, `setLookLayer`, `splitFilters`
4. Materials, meshes and lights: `AssignItem`, `ContactShadow`, `flicker`, `FLICKER_PRESETS`, `FlickerPreset`, `glowMaterial`, `LIGHT_POOL_SIZES`, `LightAssigner`, `LightHandle`, `LightPool`, `LightPoolOptions`, `LightPoolStats`, `LightRequestOptions`, `MergeOptions`, `mergeStaticMeshes`, `PALETTE`, `PaletteColor`, `pixelTexture`, `TOON_BANDS`, `toonGradient`, `toonify`, `toonMaterial`, `ToonMaterialOptions`
5. Physics: `BoxOptions`, `Breakable`, `BreakableOptions`, `Breakables`, `BridgeOptions`, `Built`, `chain`, `ChainOptions`, `CharacterAnim`, `CharacterController`, `CharacterOptions`, `Chunk`, `clothGrid`, `ClothOptions`, `Crumble`, `CrumbleOptions`, `DoorOptions`, `DriveInput`, `explode`, `ExplosionOptions`, `Field`, `fieldAcceleration`, `FieldOptions`, `FIXED_DT`, `FloaterOptions`, `Floaters`, `ForceFields`, `fractureBox`, `FractureOptions`, `hingeDoor`, `InstancedBodies`, `InstancedBodiesOptions`, `InstancedShape`, `KinematicBody`, `Mover`, `MoverOptions`, `moverRotation`, `Movers`, `orbit`, `pathPoint`, `pendulum`, `Physics`, `PhysicsState`, `Ragdoll`, `RagdollOptions`, `RagdollPart`, `Rewind`, `RewindOptions`, `RippleField`, `RippleOptions`, `ropeBridge`, `ropeLine`, `seeded`, `seesaw`, `SeesawOptions`, `softBlob`, `springPad`, `SpringPadOptions`, `Trigger`, `TriggerOptions`, `TriggerShape`, `Vehicle`, `VehicleOptions`, `VerletBody`, `VerletOptions`, `waterHeight`, `WaterWave`, `WAVES_CALM`, `WAVES_CHOPPY`
6. Characters: `JumpKind`, `KEYMAP`, `MoveInput`, `MoveState`, `PlatformerCharacter`, `PlatformerOptions`, `readMoveInput`
7. Input and touch: `applyDeadzone`, `ButtonEvent`, `DEFAULT_TOUCH_BUTTONS`, `GAMEPAD_BUTTONS`, `GamepadLike`, `Input`, `InputFrame`, `InputState`, `MOUSE_BUTTONS`, `PRESS_WINDOW`, `TOUCH_KEY`, `TouchButton`, `TouchButtonState`, `TouchControls`, `TouchCorner`
8. Audio: `attenuation`, `AudioManager`, `AudioSettings`, `Instrument`, `Listener`, `muffleCutoff`, `noteFrequency`, `parseSong`, `PLAYGROUND_SONG`, `PlayOptions`, `renderSound`, `SFX`, `SfxName`, `Song`, `SoundDef`, `Spatial`, `spatialize`, `SpatialOptions`, `Voice`, `VoiceSettings`, `VolumeChannel`, `Wave`
9. Particles: `BurstOptions`, `ParticlePool`, `ParticlePreset`, `ParticlePresetName`, `Particles`, `PARTICLES`
10. HUD: `Hud`, `HudAnchor`, `HudColor`, `HudOptions`, `hudPlace`
11. Models and textures (ASSETS.md): `addModelColliders`, `around`, `assetProgress`, `BakedTexture`, `bakeTexture`, `boxFrame`, `buildModel`, `Catalog`, `CatalogEntry`, `checkModel`, `decodePng`, `DEFAULT_TEXEL`, `ExpandedModel`, `expandModel`, `gridOf`, `groupVariants`, `hudSprite`, `ImportError`, `importSheet`, `LICENCES`, `loadModel`, `loadPack`, `loadPackIndex`, `meanColour`, `model`, `Model`, `MODEL_FAMILIES`, `MODEL_LIBRARY`, `ModelBinding`, `ModelBuild`, `ModelCatalog`, `ModelCheck`, `ModelCollider`, `ModelDef`, `ModelError`, `ModelLight`, `ModelLightRequest`, `ModelOptions`, `ModelPack`, `ModelPart`, `ModelProvenance`, `modelSheet`, `ModelSheet`, `ModelSheetOptions`, `MOVING_TEXEL`, `PackIndex`, `PackIndexEntry`, `packTextures`, `parsePack`, `PngError`, `preloadModels`, `RgbaImage`, `rowOf`, `scatterOf`, `searchDefs`, `SearchHit`, `searchHits`, `SearchOptions`, `searchWords`, `SheetImport`, `SheetImportOptions`, `spriteSheet`, `TEXTURE_FAMILIES`, `TEXTURE_LIBRARY`, `TextureCatalog`, `TextureCheck`, `textureDef`, `TextureDef`, `TextureError`, `TextureLayer`, `textureMap`, `textureSheet`, `TextureSheet`, `TextureSheetOptions`, `validateModel`, `validateTexture`, `VariantGroup`, `variantName`
12. Animation toolkit: `analyzeClip`, `ClipDef`, `ClipReport`, `compileClip`, `compileClips`, `Foot`, `FootGoal`, `gaitClip`, `gaitPartners`, `GaitSpec`, `Key`, `LegDef`, `LegStepper`, `LegStepperOptions`, `mirror`, `placeFeet`, `Pose`, `renderCurves`, `renderSheet`, `RigSpec`, `sampleClip`, `SheetImage`, `SpringChain`, `SpringChainOptions`, `Squash`, `twoBoneIK`, `validateClip`
13. Hero kit: `HERO_CLIPS`, `HERO_MODEL`, `HERO_RAGDOLL`, `HERO_RIG`
14. three.js and Rapier: `RAPIER`, `THREE`, `TSL`
15. More: `applySky`, `bayer4`, `BehaviorTree`, `beltMaterial`, `BeltMaterial`, `BoidOptions`, `Boids`, `Branch`, `bt`, `BtNode`, `BtStatus`, `BulletPool`, `CameraKey`, `CameraShake`, `CameraShot`, `ClockState`, `coversPixel`, `createNoise`, `crystalMaterial`, `Cue`, `DECAL_SHAPES`, `DecalOptions`, `Decals`, `DecalShape`, `decodeState`, `drawSheet`, `ease`, `Ease`, `EASE_NAMES`, `EaseName`, `EASES`, `emitter`, `Emitter`, `encodeState`, `ErosionOptions`, `expand`, `FbmOptions`, `FlashOptions`, `forceFieldMaterial`, `GpuSwarm`, `GpuSwarmOptions`, `GrassField`, `GrassOptions`, `groundFog`, `hashString`, `hologramMaterial`, `lavaMaterial`, `Leaf`, `LRule`, `LSystemDef`, `marbleMaterial`, `MAX_FRAMES`, `MAX_PUSHERS`, `MAX_WAVES`, `Mirror`, `MirrorOptions`, `NavGrid`, `NavGridOptions`, `Noise`, `Pattern`, `PatternDef`, `PatternTile`, `patternTiles`, `PLANTS`, `Precipitation`, `PrecipitationKind`, `PrecipitationOptions`, `Recording`, `recordingProblem`, `RenderView`, `RenderViewOptions`, `Rng`, `RopeMesh`, `SCREEN_LAYER`, `ScreenFx`, `ScreenFxState`, `ShaderOptions`, `ShakeState`, `ShockwaveOptions`, `skyAt`, `SkyState`, `Snapshot`, `snapshotProblem`, `SoftMesh`, `SpriteBatch`, `SpriteOptions`, `SpriteSheet`, `swayMaterial`, `swayObject`, `SwayOptions`, `Team`, `Terrain`, `TERRAIN_BANDS`, `TerrainBand`, `TerrainOptions`, `Timeline`, `TimelineLine`, `TimelineOptions`, `TraceRow`, `Trail`, `TrailOptions`, `TRANSITION_CELLS`, `TransitionKind`, `TransitionOptions`, `TRANSITIONS`, `turtle`, `TurtleOptions`, `Tween`, `TweenOptions`, `Tweens`, `WaterOptions`, `WaterSurface`, `Wfc`, `WfcOptions`, `WfcTile`, `WindUniforms`, `woodMaterial`

## 1. Engine and games

### ADAPTIVE_ASPECT

```ts
const ADAPTIVE_ASPECT: { readonly min: 0.4; readonly max: 2.4; }
```

Art aspect ratios (width / height) the adaptive mode allows; beyond them it letterboxes.

### type AspectMode

```ts
type AspectMode = 'fixed' | 'adaptive' | 'fill'
```

### BUILTIN_MODELS

```ts
const BUILTIN_MODELS: readonly string[]
```

Models every bundle carries: `ctx.loadModel('assets/hero.glb')` works with no files next to it.

### chunkyResolution()

```ts
function chunkyResolution(base: Resolution): Resolution
```

Chunky pixels for a resolution: the engine's 320×180 for its 480×270, else two thirds of it.

### clearScene()

```ts
function clearScene(scene: Scene): number
```

Remove (and dispose) every scene child that is not engine-owned. Returns how many went.

### computeFraming()

```ts
function computeFraming(viewportWidth: number, viewportHeight: number, devicePixelRatio: number, internal: Resolution, aspect: AspectMode = 'fixed'): Framing
```

### countObjects()

```ts
function countObjects(root: Object3D): number
```

Number of objects in the tree under `root` (inclusive): a leak probe for tests.

### type DebugAction

```ts
type DebugAction = 'mode' | 'resolution' | 'debug' | 'nextLook' | 'prevLook' | 'mute'
```

Engine hotkeys (tooling / review), configurable through `EngineOptions.debugKeys`. They are
developer tools: on with the debug panel (the dev server, `?debug=1`), off in a shipped game,
whose players find the same options in its settings (`engine.settings`, the ⚙ button).

### type DebugKeyChanges

```ts
type DebugKeyChanges = Partial<Record<DebugAction, string | readonly string[] | null>>
```

Single hotkeys moved (a key code, a list of codes) or dropped (`null` / `[]`).

### type DebugKeyMap

```ts
type DebugKeyMap = Record<DebugAction, readonly string[]>
```

### type DebugKeysOption

```ts
type DebugKeysOption = DebugKeyChanges | boolean
```

`EngineOptions.debugKeys`. Left out, the hotkeys come with the debug panel: on in the dev
server and with `?debug=1`, off otherwise. `true` turns the defaults on always and `false` off
always. An object rebinds (a key code, a list of codes) or disables (`null` / `[]`) single
actions, and the keys still come with the debug panel.

  debugKeys: { resolution: 'F2', mute: null }   // with the panel: R freed for the game, no mute key

### DEFAULT_DEBUG_KEYS

```ts
const DEFAULT_DEBUG_KEYS: DebugKeyMap
```

The keys when they are on: P Pixel/Raw · R resolution · ` debug panel · ] / [ looks · M mute.

### disposeObject()

```ts
function disposeObject(root: Object3D): void
```

Free the GPU resources of `root` and its children: geometry, materials, the textures
they reference (as properties such as `map`, or inside TSL node graphs such as
`colorNode = texture(t)`), and skinned meshes' bone textures.

### class Engine

- `static readonly version: string`: The engine's version (package.json).
- `static start(game: Game, options: EngineOptions = {}): Promise<Engine>`
- `readonly errors: string[]`: Errors thrown by the game's hooks while the render loop ran, each message once, oldest first (at most 20). They are logged to the console and shown in a box on screen; the frame keeps rendering so the picture stays up. Fix the first one first. (`step()` throw…
- `readonly input: Input`
- `readonly sun: DirectionalLight`
- `readonly ambient: AmbientLight`
- `readonly context: GameContext`
- `readonly audio: AudioManager`
- `readonly particles: Particles`
- `readonly hud: Hud`
- `readonly tweens: Tweens`: Tweens on game time (`ctx.tweens`).
- `readonly shake: CameraShake`: Screen shake (trauma 0..1): `engine.shake.add(0.4)`. Added to the camera after the rig placed it, on real time; ortho cameras move by whole art pixels. Reset on level unload.
- `debug: DebugUI | null`
- `touch: TouchControls | null`
- `readonly settings: Settings`: The player's settings: look, pixel art, pixel size, quality, frame rate and debug info (plain data, saved per game), applied over the game's own choices; `open()` shows them in the settings panel (the ⚙ button, `EngineOptions.settings`). Sound is `audio`'s.
- `debugKeys: DebugKeyMap`: Active engine hotkeys (from EngineOptions.debugKeys; none until the engine starts).
- `manual: boolean`: Tooling: the render loop stops driving the game; advance it yourself with `step()`. Frame-exact and independent of how fast the browser renders (filmstrips, replays).
- `frame: number`
- `fps: number`: Rendered frames per second (measured over ~0.5 s).
- `readonly qualityOption: QualityOption`: Requested quality (`auto` adapts); `quality` is the level in use.
- `time: number`
- `readonly renderer: PixelRenderer`
- `readonly physics: Physics`
- `camera: CameraRig`
- `readonly scene: Scene`
- `get game: Game`: The running game. Replace it with `loadGame()`.
- `get paused: boolean`: Freeze simulation, animation, particles and game time (rendering continues). For tooling, capture and pause menus. Queued key presses are dropped while paused.
- `get lights: LightPool`: The dynamic light pool (render/lights.ts), engine-owned: its lights stay in the scene across levels, so loading another level never changes the light count (no recompiles). Created on first use; sized by quality.
- `get timeScale: number`: Game speed: 1 normal, 0.25 slow motion, 2 double, 0 frozen (a menu: key presses made meanwhile are dropped, like a pause). Scales game time, physics, animation, particles, tweens and the camera follow; not transitions, shake or the render loop. Back to 1 when…
- `hitstop(seconds: number): void`: Freeze the game for `seconds` of real time: impact frames that sell a hit. Rendering, screen shake and transitions keep going; overlapping hitstops keep the longest. Key presses made during a hitstop still count afterwards (a buffered jump).
- `get screen: ScreenFx`: Transitions, flashes and shockwaves (render/screenFx.ts): `await engine.screen.cover('iris')`.
- `get sunDir: Vector3`: The direction sunlight comes from (unit, pointing at the sun).
- `setSunDirection(dir: Vector3 | readonly [number, number, number]): void`: Point the sun (and its shadows): a direction toward the sun, normalised here. A level's time of day or a sun dial; reset to the engine default when the level unloads. Below the horizon the sun is kept just above it (lower `sun.intensity` for night instead).
- `get quality: QualityLevel`: The quality level in use (see `EngineOptions.quality`).
- `useQuality(option: QualityOption): void`: Quality by option: a level, or `auto`: the device's level (low on phones and tablets, else medium), lowered once if a few seconds of frames are slow (measured once, then remembered).
- `get debugShown: boolean`: Whether the debug panel is showing.
- `showDebug(on: boolean): void`: Show or hide the debug panel (created the first time it shows, filled at once: the loop fills it only while the game runs).
- `setQuality(level: QualityLevel): void`
- `get maxFps: number`: Frame cap of the render loop (0 = display rate).
- `setCamera(config: CameraConfig, options: { syncUrl?: boolean } = {}): CameraRig`: Swap the camera preset mid-game (review tool: presets are a per-game choice). The player, physics and the rest of the world are left exactly as they are. `free` and `fixed` without an explicit position start from the view currently on screen. Keeps `?camera=`…
- `toggleMode(): RenderMode`
- `toggleResolution(): Resolution`
- `get availableFilters: readonly string[]`: Every filter id the engine ships (see render/filters.ts).
- `get filters: readonly string[]`
- `setFilters(ids: readonly string[]): void`
- `get look: Look`: The current look (a copy): per-layer pixel art and filters, whole-scene filters.
- `get lookPresets: Readonly<Record<string, Look>>`: Every named look (LOOK_PRESETS): `engine.setLook(engine.lookPresets.pixel_heroes)`.
- `setLook(look: Look): void`: Apply a look (render/look.ts); `LOOK_PRESETS` has named ones.
- `cycleLook(step: 1 | -1): string`: Cycle through LOOK_PRESETS ([ and ] keys).
- `state(): { version: string; game: string; seed: number; ready: boolean; paused: boolean; time: number; timeScale: number; hitstop: number; screen: ScreenFxState; backend: "WebGPU"; mode: RenderMode; ... 18 more ...; sta…`: Snapshot for tests, tooling and agents.
- `step(n = 1, dt = 1 / 60): void`: Tooling: switch to manual time and advance `n` frames of `dt` seconds (simulation, animation, camera). Nothing is drawn; call `renderer.capture()` to see the result.
- `loadGame(game: Game, options: { camera?: CameraConfig } = {}): Promise<void>`: Unload the running game and start `game` in the same engine (renderer, canvas, camera rig, input, audio context and debug UI stay).
- `dispose(): void`: Stop the loop and free everything: game, scene, physics, audio, input listeners, DOM, GPU. With a `loadGame()` in flight, the world and GPU resources are freed once its `setup()` has finished (it never runs against a freed physics world or renderer).
- `get seed: number`: The seed every level's `ctx.random` comes from (`EngineOptions.seed`, `?seed=`; a replay sets it).
- `get random: Rng`: This level's seeded randomness (`ctx.random`).
- `recording(): Recording | null`: The running level's recording: its seed, when it began and every frame's input since (src/engine/replay.ts). Plain JSON: save it, attach it to a bug, replay it with `replay()`.
- `replay(rec: Recording, start: () => unknown, o: { frames?: number } = {}): Promise<void>`: Play a recording back: its seed and start time are restored, `start` loads the level it was made in (e.g. `() => engine.loadGame(new MyGame())`; it must not wait on frames, so load without a transition), then every frame runs with the recorded input, in manua…
- `snapshot(): Promise<Snapshot>`: The running level as data, between frames (docs/ENGINE.md, *Save-states*): game time, the clock, `ctx.random`, the physics world, the camera, the shake, input still waiting, and the game's own state (`Game.snapshot`). Plain JSON. Taken once the last frame's p…
- `restore(saved: Snapshot): Promise<void>`: Put the running level back to a snapshot of it: the same game (by name), already loaded; nothing in between is replayed. The level's recording starts again from it (`Recording.from`), so what is played next replays with `replay()`. Live input held now is let…
- `fingerprint(): string`: A hash of the simulation: game time, every physics body (exact), `ctx.random`'s state and the game's own (`Game.fingerprint`). Two runs that should be the same (a replay) compare equal. Not the `status()` line: a debug line may carry measurements (a step's mi…

### ENGINE_VERSION

```ts
const ENGINE_VERSION: string
```

### interface EngineOptions

- `container?: HTMLElement`
- `resolution?: Resolution`
- `aspect?: AspectMode`: `adaptive` (default): the art height stays `resolution.height` and the art width follows the screen's aspect (portrait phones fill the screen). `fixed`: always exactly `resolution`, letterboxed. `fill`: adjusts both art dimensions to cover the viewport at an…
- `maxFps?: number`: Cap the render loop (simulation keeps its fixed 60 Hz physics step). Default 60, so 120 Hz phones don't run the whole pipeline twice per game frame. 0 = display rate.
- `quality?: QualityOption`: Shadow map quality, or `auto` (default: low on touch devices, else medium; lowered once on a slow start).
- `loadingScreen?: boolean`: Pixel-styled loading indicator while the renderer, physics and assets load. Default true.
- `mode?: RenderMode`
- `edges?: EdgeSettings`
- `camera?: CameraConfig`: Camera preset + parameters. Pick one per game; not meant to change during play.
- `filters?: readonly string[]`: Post filters (ids from FILTERS) applied in Pixel mode, in order.
- `look?: Look`: A full look: pixel art or clean rendering and filters per layer (characters & objects, environment) plus whole-scene filters (render/look.ts). Wins over `filters` and `edges`.
- `seed?: number`: Seed for `ctx.random`: each level gets its own stream from this and the game's name, so the same seed replays the same game. Default 1. `?seed=` in the URL.
- `record?: number`: Frames of input the engine keeps for each level (`recording()`). Default `MAX_FRAMES`, an hour at 60 fps (up to some 20 MB of JSON with the mouse moving all the time); 0 records nothing.
- `debugUI?: boolean`: Debug panel. Default: on in dev (`vite`) or with ?debug=1, off in production builds.
- `debugKeys?: DebugKeysOption`: Engine hotkeys (P Pixel/Raw, R resolution, ` debug panel, [ ] looks, M mute): developer tools. Default: on with the debug panel (dev, ?debug=1), off in a shipped game, whose players have the same options in the settings. `true` / `false`: always on / off; an…
- `settings?: { button?: TouchCorner | boolean; key?: string | false }`: The player's settings (`engine.settings`): look, pixel art, pixel size, quality, frame rate, sound and debug info, in a panel the ⚙ button opens. `button`: its corner (default, or true: 'top-right'; on a mouse it shows while the pointer moves), or false for n…
- `touch?: boolean`: On-screen joystick + buttons. Default: auto (coarse pointer), or ?touch=1 / ?touch=0.
- `touchButtons?: readonly TouchButton[]`: On-screen action buttons. Default: the platformer's (DEFAULT_TOUCH_BUTTONS).
- `touchBar?: boolean`: The touch top bar of the engine hotkeys (ⓘ debug panel, P, R, ◐ looks, ♪ mute), on a touch screen while they are on (see `debugKeys`). Default true; false hides it even then, unless the debug panel is on (`?debug=1`, dev builds).
- `background?: number`

### FPS_OPTIONS

```ts
const FPS_OPTIONS: readonly number[]
```

### class FrameLimiter

Frame cap for `requestAnimationFrame` loops. Returns whether the frame at `now` (ms)
should run, and advances the schedule so the long-run rate is `maxFps` even when the
display rate isn't a multiple of it (90 Hz, 144 Hz) and timestamps jitter.

- `new FrameLimiter(maxFps: number)`
- `maxFps: number`
- `shouldRun(now: number): boolean`

### interface Framing

- `readonly artWidth: number`: Art (internal) resolution actually rendered. Equals `internal` in fixed mode.
- `readonly artHeight: number`
- `readonly scale: number`: Device pixels per art pixel. Integer whenever `integer` is true.
- `readonly integer: boolean`: True when every art pixel maps to an integer block of device pixels.
- `readonly canvasWidth: number`: Canvas backing-store size in device pixels.
- `readonly canvasHeight: number`
- `readonly cssWidth: number`: Canvas CSS size and offset inside the viewport, in CSS pixels.
- `readonly cssHeight: number`
- `readonly offsetX: number`
- `readonly offsetY: number`

### interface Game

A game is a plain object. The engine owns rendering, physics stepping, camera,
lighting and debug UI; the game only builds its world and reacts to input.

- `readonly name: string`
- `readonly assets?: readonly string[]`: Models `setup` will load (`ctx.loadModel` URLs). Optional: listing them lets the engine start downloading while the renderer and physics initialise.
- `setup(ctx: GameContext): Promise<void> | void`: Build the level: load models, add colliders, spawn entities.
- `fixedUpdate?(ctx: GameContext, dt: number): void`: Runs before every fixed 60 Hz physics step. Move characters/apply forces here.
- `update?(ctx: GameContext, dt: number): void`: Runs once per rendered frame after physics (animation, pickups, UI state).
- `cameraTarget(ctx: GameContext): Vector3`: World position the camera follows.
- `eyePosition?(ctx: GameContext): Vector3`: First-person eye position (defaults to cameraTarget + 0.7 up).
- `status?(ctx: GameContext): string`: One-line status for the debug UI (score, lives...).
- `fingerprint?(ctx: GameContext): string`: The game's own state as a short string or hash, for `engine.fingerprint()`: what lives outside physics and `ctx.random` (positions, life, counters, the game's own random streams), so two runs that should match (a replay) can be compared. Only what a replay mu…
- `snapshot?(ctx: GameContext): unknown`: The game's own state as plain data, between frames (`engine.snapshot()`): everything a later frame reads that the engine does not keep (its entities, timers, random streams; the handles of its physics bodies). With `restore`, the game has save-states.
- `restore?(ctx: GameContext, state: unknown): void | Promise<void>`: Put the game back to what `snapshot` returned (`engine.restore()`): the same game, already set up. Find physics bodies again by handle (`ctx.physics.world.getRigidBody(h)`).
- `beforeRestore?(ctx: GameContext): void | Promise<void>`: Optional: leave whatever mode the game is in before a restore changes anything (a mode with a camera of its own, a dialog, a level): `engine.restore()` calls it first, then checks the snapshot fits (the camera preset) and puts the engine's part back, then `re…
- `onCameraChange?(ctx: GameContext): void`: Called after `engine.setCamera()` swapped the camera preset mid-game. The world, physics and player are untouched; adjust anything that depends on the preset (e.g. side-scroller lane lock, hiding the player model in first person).
- `dispose?(ctx: GameContext): void`: Called when the game is unloaded (`engine.loadGame(other)` or `engine.dispose()`), before the engine removes its scene objects, physics bodies, triggers, particles, HUD and music. Free anything else the game owns: DOM, timers, listeners, HMR hooks.

### interface GameContext

- `readonly engine: Engine`
- `readonly scene: Scene`
- `readonly physics: Physics`
- `readonly input: Input`
- `readonly camera: CameraRig`
- `readonly loadModel: typeof loadModel`
- `readonly palette: typeof PALETTE`
- `readonly time: number`: Game time in seconds since start. Frozen while paused or loading.
- `readonly random: Rng`: This level's seeded randomness (src/engine/random.ts): the same engine seed and game give the same numbers. Use it (or forks of it) for everything random; never Math.random.
- `readonly audio: AudioManager`: Sound effects, music, volumes (src/engine/audio).
- `readonly particles: Particles`: Pixel particles: `particles.burst('dust', at)` (src/engine/particles).
- `readonly hud: Hud`: Pixel HUD text and icons in art pixels (src/engine/hud).
- `readonly lights: LightPool`: Dynamic point lights: `lights.request({ position, color, intensity, radius, flicker })` (src/engine/render/lights.ts). A fixed pool sized by quality, created on first use.
- `readonly tweens: Tweens`: Tweens on game time: `tweens.to(door.position, { y: 3 }, { duration: 0.8, ease: 'outBack' })` (src/engine/tween.ts). Cleared when the level unloads.

### class LoadingScreen

Minimal pixel-styled loading indicator: a blocky segmented bar and a status word,
plain DOM (it shows before the renderer exists). Reuses a `.pixel-loading` element
already in the container (index.html ships one so it appears before any JS runs).

- `new LoadingScreen(container: HTMLElement, segments = 12)`
- `readonly root: HTMLElement`
- `set(progress: number, label?: string): void`: `progress` 0..1; `label` is shown in capitals.
- `done(): void`

### loadSettings()

```ts
function loadSettings(key: string): PlayerSettings
```

The settings saved under `key` ({} when there are none, or storage is blocked or holds junk).

### normalizeSettings()

```ts
function normalizeSettings(raw: unknown): PlayerSettings
```

Keep only fields with a valid value: what storage or a caller handed over may be anything.

### optionsFromUrl()

```ts
function optionsFromUrl(search = location.search): Partial<EngineOptions>
```

Read engine options from the URL:
  ?mode=raw  ?res=320  ?debug=1|0
  ?aspect=fixed|adaptive  ?fps=30 (0 = uncapped)  ?quality=low|medium|high|auto
  ?camera=iso|topdown|side|third|first|free|fixed  ?zoom=1.5
  ?cam=<JSON CameraConfig>   (e.g. the config printed by the free camera)
  ?filters=crt,lcd  or  ?look=handheld (a LOOK_PRESETS name, e.g. pixel_heroes)

### PIXEL_SIZES

```ts
const PIXEL_SIZES: readonly ["fine", "chunky"]
```

### interface PlayerSettings

The player's settings: the standard picture and engine options every game gets, as plain data
(sound is the AudioManager's, which keeps its own volumes). A field left out is the game's own
choice; a field set is the player's and wins over it. `engine.settings` holds them, applies
them, saves them per game and shows them in the settings panel (the ⚙ button).

- `look?: string`: A LOOK_PRESETS name. Left out: the look the game gives each level.
- `pixelArt?: boolean`: Pixel art (the pixel pass), or false for smooth 3D (render mode `raw`).
- `pixelSize?: 'fine' | 'chunky'`: The art resolution: `fine` (the game's, 480×270 by default) or `chunky` (two thirds of it: bigger pixels).
- `quality?: QualityOption`: Shadow and light quality: a level, or `auto` (the device's).
- `fps?: number`: Frame cap: 60, 30, or 0 for the display's own rate.
- `debugInfo?: boolean`: The debug panel: frame rate, camera, GPU errors and the game's status.

### QUALITY

```ts
const QUALITY: Readonly<Record<QualityLevel, QualitySettings>>
```

At the iso preset's default zoom the shadow box spans ~30 world units, i.e. ~600 art
pixels: 512² is about one shadow texel per art pixel, 1024² is finer than the art can show.

### QUALITY_LEVELS

```ts
const QUALITY_LEVELS: readonly QualityLevel[]
```

### QUALITY_OPTIONS

```ts
const QUALITY_OPTIONS: readonly QualityOption[]
```

### type QualityLevel

```ts
type QualityLevel = 'low' | 'medium' | 'high'
```

Render quality presets. Pure data + decisions (no DOM, no three.js): unit-tested.

The pixel pipeline is cheap by design (the scene and every art-pixel filter render at
the art resolution), so quality trades the shadow map size and the number of dynamic
point lights (`ctx.lights`, render/lights.ts). `auto` picks `low` on
phones/tablets and `medium` elsewhere, then lowers it once if the first seconds of play
run well below the frame-rate target.

### type QualityOption

```ts
type QualityOption = QualityLevel | 'auto'
```

### interface QualitySettings

- `readonly shadowMapSize: number`: Directional-light shadow map size (texels per side).
- `readonly lights: number`: Real point lights in the dynamic light pool (`ctx.lights`); constant per level.

### rebindDebugKeys()

```ts
function rebindDebugKeys(keys: DebugKeyMap, changes: DebugKeyChanges): DebugKeyMap
```

Rebind the hotkeys that are on and leave the ones that are off off: what a game with its own
use for a key does at runtime (`engine.debugKeys = rebindDebugKeys(engine.debugKeys, {
resolution: 'F7' })`), so a shipped game, which has no hotkeys, gets none back.

### interface Resolution

Pure layout math for pixel-perfect presentation. No DOM, no three.js: unit-tested.

The canvas backing store is sized to `art × scale` device pixels with an integer
`scale`, and the scene renders at exactly the art resolution (pixelSize = scale). Every
art pixel therefore covers an integer block of device pixels, and the canvas is centered
inside the viewport. Fixed/adaptive framing letterboxes; fill framing crops only the
excess device pixels at the edges of the last art pixel.

Three aspect modes:
- `fixed`: the art resolution is exactly `internal` (16:9); other screen shapes letterbox.
- `adaptive`: the art *height* stays `internal.height` and the art width follows the
  screen's aspect…

- `readonly width: number`
- `readonly height: number`

### RESOLUTIONS

```ts
const RESOLUTIONS: { readonly default: { readonly width: 480; readonly height: 270; }; readonly compare: { readonly width: 320; readonly height: 180; }; }
```

### resolveDebugKeys()

```ts
function resolveDebugKeys(option?: DebugKeysOption): DebugKeyMap
```

The key map an option gives: none for `false` or nothing, the defaults for `true`, the defaults with an object's changes.

### class Settings

`engine.settings`: the player's settings, applied to the engine and saved. A field the page URL
sets (`?look=`, `?mode=`, `?res=`, `?quality=`, `?fps=`, `?debug=`: review flags) wins over a
saved one at start (which stays saved). `open`, `close` and `toggle` show and hide the
settings panel.

- `new Settings(host: SettingsHost, key: string | null)`
- `readonly key: string | null`
- `get values: Readonly<PlayerSettings>`: The player's choices in effect: fields left out are the game's (or a review flag's).
- `get isOpen: boolean`
- `set(patch: PlayerSettings): void`: Change some settings: applied at once and saved. A field set to `undefined` goes back to the game's.
- `reset(): void`: Forget every choice, the held ones too: the game's own picture again.
- `replace(values: PlayerSettings): void`: Make `values` the settings, changing only the fields that differ: the ones it leaves out go back to the game's.
- `onChange(fn: (values: Readonly<PlayerSettings>) => void): () => void`: Called with the values after every change; returns the unsubscribe.
- `open(): void`
- `close(): void`
- `toggle(): void`

### interface SettingsHost

What the settings change in the engine (Engine implements it; tests pass a fake).

- `readonly look: Look`
- `setLook(look: Look): void`
- `readonly renderer: { readonly mode: RenderMode; readonly baseResolution: Resolution; readonly lookVersion: number; setMode(mode: RenderMode): void; setResolution(resolution: Reso…`
- `maxFps: number`
- `readonly qualityOption: QualityOption`
- `useQuality(option: QualityOption): void`
- `readonly debugShown: boolean`
- `showDebug(on: boolean): void`

### class SettingsPanel

The settings panel (DOM, like the debug panel: it stays legible at any art resolution) and the
⚙ button that opens it: the player's picture, sound and engine options (`engine.settings`,
settings.ts; the AudioManager's volumes). The engine pauses the game while it is open. Keys
pressed in it never reach the game; Escape or Done closes it.

- `new SettingsPanel(engine: Engine, container: HTMLElement, corner: TouchCorner | false)`
- `readonly root: HTMLDivElement`
- `readonly button: HTMLButtonElement | null`
- `show(): void`: Show the panel with the engine's current values. The panel takes the focus, not a control: a game key pressed out of habit (D, Space) must not pick an option; Tab reaches the controls.
- `hide(): void`
- `sync(): void`: Put the engine's current values into the controls, and into the debug panel (the loop fills it only while the game runs).
- `dispose(): void`

### storeSettings()

```ts
function storeSettings(key: string, settings: PlayerSettings): void
```

### urlSettings()

```ts
function urlSettings(url: UrlFlags, options: UrlFlags = url): Set<keyof PlayerSettings>
```

The settings a page URL's review flags set (`?look=`, `?filters=`, `?mode=`, `?res=`,
`?quality=`, `?fps=`, `?debug=`): the fields `url` (optionsFromUrl) holds that the game's
`options` took (`withUrlOptions`). They win over the saved ones at start.

### withUrlOptions()

```ts
function withUrlOptions(options: EngineOptions, search = location.search): EngineOptions
```

A game's own options with the review flags from the page URL (optionsFromUrl) on top:
`Engine.start(game, withUrlOptions({ container, camera: { preset: 'side', zoom: 1.2 } }))`.
The camera is merged key by key (`?zoom=1.5` keeps the game's `side` preset), and
`?filters=` replaces the game's look (a look would win over filters otherwise).

## 2. Camera

### CAMERA_PRESETS

```ts
const CAMERA_PRESETS: readonly CameraPreset[]
```

### interface CameraConfig

- `preset?: CameraPreset`
- `zoom?: number`: Zoom factor, 1 = preset default, >1 = closer. Ignored by `first`.
- `minZoom?: number`
- `maxZoom?: number`
- `viewHeight?: number`: Ortho presets: visible world height at zoom 1.
- `pitch?: number`: iso: degrees below horizon / around Y.
- `yaw?: number`
- `fov?: number`: Perspective presets: vertical field of view in degrees.
- `distance?: number`: third: orbit distance at zoom 1.
- `position?: [number, number, number]`: fixed: camera position and look-at target.
- `target?: [number, number, number]`
- `projection?: 'perspective' | 'ortho'`: fixed/free: projection.
- `stiffness?: number`: Follow smoothing; higher is snappier.

### type CameraPreset

```ts
type CameraPreset = 'iso' | 'topdown' | 'side' | 'third' | 'first' | 'free' | 'fixed'
```

Camera presets. A game picks ONE at startup (EngineOptions.camera / `?camera=`). For
reviewing, `engine.setCamera()` swaps presets live without touching the world. `free`
is an authoring tool: fly around, press Enter to fix the view, and paste the printed
`fixed` config into your game.

### class CameraRig

Base rig: owns the three.js camera, zoom and the ground-plane movement basis.

- `new CameraRig(config: CameraConfig)`
- `readonly preset: CameraPreset`
- `readonly camera: OrthographicCamera | PerspectiveCamera`
- `readonly focus: Vector3`: World point the rig is centred on (used for shadow framing).
- `zoom: number`
- `readonly minZoom: number`
- `readonly maxZoom: number`
- `readonly zoomable: boolean`: Whether zoom applies (all presets except first person).
- `readonly hidesTarget: boolean`: First person hides the player model.
- `readonly lockDepth: boolean`: Side-scroller: characters should stay on their depth lane.
- `controlsCharacter: boolean`: False while the free camera is flying (input drives the camera, not the player).
- `snap: boolean`: Pixel-snap the camera (ortho only).
- `aspect: number`: Viewport aspect (width / height), following the art resolution (see `setAspect`).
- `rayAt(x: number, y: number, origin: Vector3, dir: Vector3): void`: The ray through screen point (x, y) in normalised device coordinates (−1..1, y up, as `input.pointer` gives them): where it starts (on the near plane) and its unit direction. For picking things with the mouse, or aiming at it. An orthographic rig stands far b…
- `setZoom(zoom: number): void`
- `setAspect(aspect: number): void`: Match the art resolution's aspect (adaptive framing changes it with the screen). `update()` calls this from `CameraUpdate.resolution`; the engine also calls it on swap.
- `teleport(target: Vector3): void`: Place the camera without smoothing.
- `groundBasis(): { right: Vector3; forward: Vector3 }`: Screen-relative movement basis on the ground plane.
- `update(u: CameraUpdate): void`
- `describe(): Record<string, unknown>`: Serializable description (debug UI, `state()`).
- `state(): CameraRigState`: The rig as data, exact (`engine.snapshot()`).
- `setState(s: CameraRigState): void`: Put the rig back where `state()` found it (the same preset).

### interface CameraRigState

Where a rig is and looks, as data (`engine.snapshot()`): the frame after a restore sees the camera the frame after the snapshot did.

- `readonly preset: CameraPreset`
- `readonly focus: readonly number[]`
- `readonly zoom: number`
- `readonly aspect: number`
- `readonly position: readonly number[]`
- `readonly quaternion: readonly number[]`
- `readonly shaken: readonly number[]`
- `readonly own: Readonly<Record<string, number>>`: What a preset keeps of its own (an orbit's yaw, pitch and distance).

### createCameraRig()

```ts
function createCameraRig(config: CameraConfig = {}): CameraRig
```

### class FirstPersonRig

Eyes of the character: mouse look (click to lock the pointer) or Q/E to turn. No zoom.

- `new FirstPersonRig(config: CameraConfig = {})`
- `readonly preset: "first"`
- `readonly camera: PerspectiveCamera`
- `readonly zoomable: false`: Whether zoom applies (all presets except first person).
- `readonly hidesTarget: true`: First person hides the player model.
- `yaw: number`
- `pitch: number`
- `groundBasis(): { right: Vector3; forward: Vector3; }`: Screen-relative movement basis on the ground plane.
- `describe(): { yaw: number; pitch: number; }`: Serializable description (debug UI, `state()`).

### class FreeRig

Authoring camera. While flying: WASD move, Q/E down/up, drag (or click to lock) to look,
Shift = fast, wheel = field of view. Press Enter to fix it: the view freezes, the player
gets control, and `fixedConfig()` returns the config to hard-code (preset 'fixed').
Enter again unfixes.

- `new FreeRig(preset: 'free' | 'fixed', config: CameraConfig = {})`
- `readonly preset: 'free' | 'fixed'`
- `readonly camera: PerspectiveCamera | OrthographicCamera`
- `fixed: boolean`
- `yaw: number`
- `pitch: number`
- `onFix: ((config: CameraConfig) => void) | null`
- `setFixed(fixed: boolean): void`: Freeze (or unfreeze) the view.
- `fixedConfig(): CameraConfig`
- `describe(): { fixed: boolean; config: CameraConfig; }`: Serializable description (debug UI, `state()`).

### class OrthoRig

Orthographic presets: classic 3/4 isometric, straight top-down, straight side-on.

- `new OrthoRig(preset: 'iso' | 'topdown' | 'side', config: CameraConfig = {})`
- `readonly camera: OrthographicCamera`
- `readonly preset: 'iso' | 'topdown' | 'side'`
- `readonly lockDepth: boolean`: Side-scroller: characters should stay on their depth lane.
- `readonly baseViewHeight: number`
- `get viewHeight: number`

### class ThirdPersonRig

Over-the-shoulder orbit camera: mouse-drag or Q/E to orbit, wheel to zoom, avoids walls.

- `new ThirdPersonRig(config: CameraConfig = {})`
- `readonly preset: "third"`
- `readonly camera: PerspectiveCamera`
- `yaw: number`
- `pitch: number`
- `describe(): { yaw: number; pitch: number; }`: Serializable description (debug UI, `state()`).

## 3. Rendering, looks and filters

### AMOUNT

```ts
const AMOUNT: FilterParam
```

Every filter's strength: the filtered colour mixed over the input (0 = off, 1 = full).

### applyFilter()

```ts
function applyFilter(color: N, id: string, fx: FilterContext): N
```

Apply one filter: its parameters come from `fx.param` (defaults without it), and the
result is mixed over the input by its `amount`. Unknown ids return the input.

### applyFilters()

```ts
function applyFilters(color: N, ids: readonly string[], fx: FilterContext): N
```

Apply filters in order. Unknown ids are skipped.

### type BackendName

```ts
type BackendName = 'WebGPU'
```

The engine renders with WebGPU only (docs/DOCTRINE.md, principle 6).

### interface CapturedFrame

- `width: number`
- `height: number`
- `pixels: Uint8Array`: Tightly packed RGBA8, top row first, sRGB-encoded (exactly what is presented).

### clampParam()

```ts
function clampParam(p: FilterParam, v: number): number
```

Clamp a value into a parameter's range, on its step.

### cloneLook()

```ts
function cloneLook(look: Look): Look
```

### DEFAULT_EDGES

```ts
const DEFAULT_EDGES: EdgeSettings
```

### DEFAULT_PIXEL

```ts
const DEFAULT_PIXEL: Readonly<PixelLook>
```

### defaultLook()

```ts
function defaultLook(): Look
```

The engine default: pixel art everywhere, no filters.

### defaultParams()

```ts
function defaultParams(def: FilterDef): Record<string, number>
```

Every parameter of a filter at its default.

### interface EdgeSettings

- `depth: number`: Silhouette / depth-discontinuity outline darkening, 0..1.
- `normal: number`: Internal crease highlight from normal discontinuities, 0..1. Keep weak.

### FILTER_IDS

```ts
const FILTER_IDS: string[]
```

### FILTER_PRESETS

```ts
const FILTER_PRESETS: Record<string, readonly string[]>
```

Named stacks that read well together.

### interface FilterContext

- `pixelSize: N`: Device pixels per art pixel (uniform). 1 in the art-resolution stage.
- `texture?(node: N): N`: Render a node into a texture at the current stage's resolution (art-sized in the art stage). Defaults to `convertToTexture` (drawing-buffer sized).
- `param?(id: string, key: string): N`: A filter parameter's value as a node. The renderer hands out one uniform per layer, filter and parameter, so moving a slider never rebuilds or recompiles a graph. Without it every parameter is its default, as a constant.
- `depth?(uv: N): N`: Scene depth (0 near … 1 far) at a screen uv, where the stage has one (the cel filter's ink).

### interface FilterDef

- `readonly id: string`
- `readonly label: string`
- `readonly group: FilterGroup`
- `readonly space: FilterSpace`: Resolution the filter runs at (see the module comment).
- `readonly params?: readonly FilterParam[]`: Tunable numbers besides `amount` (every filter has that one: see `filterParams`).
- `readonly presets?: Readonly<Record<string, Readonly<Record<string, number>>>>`: Named parameter sets ("subtle", "heavy", …). Missing keys keep their defaults.
- `apply(color: N, fx: FilterContext, p: ParamReader): N`
- `readonly sceneOnly?: boolean`: Moves pixels (curves, splits, smears): runs on the whole scene only. A layer's filters run before the layers are composed by depth, so a warp there would no longer line up with the other layer (render/look.ts drops these from layer stacks).
- `setActive?(active: boolean): void`: Side effects outside the post pass (e.g. PS1 vertex snapping), toggled with the filter.

### type FilterGroup

```ts
type FilterGroup = 'shading' | 'era' | 'palette' | 'color' | 'display' | 'signal' | 'stylize'
```

### filterOrder()

```ts
function filterOrder(id: string): number
```

Canonical position of a filter (the order of FILTERS), so stacks edited by a UI stay in a sensible order.

### interface FilterParam

A tunable number of a filter (a slider in a look editor).

- `readonly key: string`
- `readonly label: string`
- `readonly min: number`
- `readonly max: number`
- `readonly step: number`
- `readonly default: number`
- `readonly unit?: '%' | 'x' | 'px'`: How a value reads: `%` (0..1 as a percentage), `x` (a multiplier), `px` (art pixels).

### filterParams()

```ts
function filterParams(def: FilterDef): readonly FilterParam[]
```

A filter's parameters: its own, then `amount` (strength), which every filter has.

### filterPresetOf()

```ts
function filterPresetOf(presets: Readonly<Record<string, Readonly<Record<string, number>>>>, defaults: Record<string, number>, values: Record<string, number>): string | null
```

The parameter preset a filter's values match, or null (custom). A preset sets its own
keys and the defaults for the rest; strength (`amount`) only counts when the preset sets it,
so a half-strength "heavy" is still "heavy".

### filterPresets()

```ts
function filterPresets(def: FilterDef): Readonly<Record<string, Readonly<Record<string, number>>>>
```

Named parameter sets of a filter: its own presets, or strengths for filters with none.

### FILTERS

```ts
const FILTERS: readonly FilterDef[]
```

### type FilterSpace

```ts
type FilterSpace = 'art' | 'display'
```

### getFilter()

```ts
function getFilter(id: string): FilterDef | undefined
```

### interface LayerLook

A layer's own look: its source (pixel art or clean) and its filters.

- `pixel: PixelLook | null`: Pixel-art settings, or null for clean full-resolution rendering.
- `filters: LookFilter[]`

### interface Look

- `scene: LookFilter[]`: Filters on the composed frame (both layers).
- `actors: LayerLook`
- `environment: LayerLook`

### LOOK_ALIASES

```ts
const LOOK_ALIASES: Readonly<Record<string, string>>
```

Names looks used to have (stored settings, links): `hd_clean` is `no_filters` now.

### LOOK_PRESETS

```ts
const LOOK_PRESETS: Readonly<Record<string, Look>>
```

Named looks: the default (`none`: pixel art, no filters), `no_filters` (nothing at all:
full resolution, no pixel art, no outlines, no filters), every plain filter stack
(`FILTER_PRESETS`) as a whole-scene look, then looks that mix layers and stacks.

### LOOK_TARGET_LABELS

```ts
const LOOK_TARGET_LABELS: Readonly<Record<LookTarget, string>>
```

### LOOK_TARGETS

```ts
const LOOK_TARGETS: readonly LookTarget[]
```

### interface LookFilter

One filter in a stack, with its parameter values (missing ones are the defaults).

- `id: string`
- `params?: Record<string, number>`

### lookFilters()

```ts
function lookFilters(look: Look, target: LookTarget): LookFilter[]
```

The filters of one target (scene stack or a layer's).

### lookFromFilters()

```ts
function lookFromFilters(ids: readonly string[], base: Look = defaultLook()): Look
```

A plain stack of filters on the whole scene (what `setFilters(ids)` means), keeping `base`'s layers.

### type LookLayer

```ts
type LookLayer = 'actors' | 'environment'
```

The two parts of a frame that can carry their own look.

### lookLayerOf()

```ts
function lookLayerOf(object: Object3D): LookLayer
```

The look layer of an object: its own tag or its nearest tagged ancestor's, else environment.

### interface LookPlan

- `split: boolean`: Two scene passes (actors and environment) composed by depth.
- `sources: LookSource[]`
- `scene: LookFilter[]`: Filters on the composed frame.
- `key: string`: What decides the node graph: pixel on/off per source and the filter ids in order. Parameter values and pixel sizes are uniforms and stay out of it.

### lookPresetLabel()

```ts
function lookPresetLabel(name: string): string
```

How a menu shows a look's name: `none` is the default, underscores are spaces.

### lookPresetName()

```ts
function lookPresetName(name: string): string | null
```

The `LOOK_PRESETS` name a name means (aliases resolved), or null when there is none.

### lookPresetOf()

```ts
function lookPresetOf(look: Look): string | null
```

The preset name a look matches, or null (custom).

### looksEqual()

```ts
function looksEqual(a: Look, b: Look): boolean
```

### type LookTarget

```ts
type LookTarget = 'scene' | LookLayer
```

Where a filter stack applies: the whole composed frame, or one layer.

### NO_WEBGPU

```ts
const NO_WEBGPU: "WebGPU unavailable: this browser has no WebGPU, which Pixel Engine games need (a recent Chrome or Edge, Safari 26, or Firefox 141 on Windows, with hardware acceleration on)"
```

What a browser without WebGPU is told (the start fails with it: "Failed to start: …").

### normalizeLook()

```ts
function normalizeLook(raw: unknown): Look
```

A complete, valid look from anything (storage, the URL, an agent): unknown filters and
duplicates dropped (and `sceneOnly` filters from layer stacks), every parameter present
and clamped to its range, layers defaulted.

### PALETTES

```ts
const PALETTES: { readonly sweetie16: (1711148 | 6104925 | 11615827 | 15695191 | 16764277 | 11006064 | 3716964 | 2453881 | 2700911 | 3890633 | 4302582 | 7598071 | 16053492 | 9744578 | 5663878 | 3357783)[]; ... 5 more ...; readonly nes: readonly [...]; }
```

### paramsOf()

```ts
function paramsOf(f: LookFilter): Record<string, number>
```

Parameter values of a filter in a look (defaults filled in).

### PIXEL_PARAMS

```ts
const PIXEL_PARAMS: readonly FilterParam[]
```

### PIXEL_PRESETS

```ts
const PIXEL_PRESETS: Readonly<Record<string, Readonly<PixelLook>>>
```

### interface PixelLook

Pixel-art rendering of a layer: the scene at the art resolution with outlines.

- `size: number`: Art pixels per rendered pixel: 1 = the native art resolution, 2+ = chunkier.
- `outline: number`: Silhouette (depth) outline darkening, 0..1.
- `crease: number`: Internal crease highlight (normal edges), 0..1. Keep it weak.

### class PixelRenderer

One WebGPURenderer, one RenderPipeline, two output nodes.

Pixel mode:  toon/node scene → scene pass at the art resolution (nearest-filtered MRT:
             color + normal + depth) → art-resolution stage: depth/normal edges, output
             color transform, then every *art-pixel* filter (palettes, dither, colour
             grades…) into one art-sized target → ONE nearest-neighbour upscale to the
             canvas (an integer multiple of the art resolution) → *display* filters
             (scanlines, LCD grid, CRT…) at device resolution, only when there are any.
Raw mode:    the same scene/camera through a plain full-resolution `pass()` and the
             output color transform only; same pipeline, same canvas size, same
             framing. Only `outputNode` changes.

So the per-fragment cost at device resolution is one texture read unless a display
filter is active; the e…

- `static create(options: PixelRendererOptions): Promise<PixelRenderer>`
- `readonly container: HTMLElement`
- `readonly gpuErrors: GpuErrorRecord[]`
- `readonly backend: BackendName`
- `framing: Framing`
- `recoveries: number`: How many times a lost GPU device was recovered from.
- `lookVersion: number`: Counts look changes (UIs that mirror the look re-sync when it moves).
- `onRecovered: ((canvas: HTMLCanvasElement) => void) | null`: Called after a lost device was recovered with a new renderer and canvas.
- `readonly screen: ScreenFx`: Transitions, flashes and shockwaves at the end of every output graph (uniforms only: `engine.screen`, render/screenFx.ts).
- `onError: ((e: unknown) => void) | null`: Where a throwing `onBeforeRender` listener is reported (the engine shows it on screen).
- `get renderer: WebGPURenderer`: The one WebGPURenderer (replaced only when a lost GPU device is recovered).
- `get pipeline: RenderPipeline`
- `precompile(): Promise<void>`: Compile the scene's shaders for both scene passes without blocking (`compileAsync`), then build the post-processing quads with one offscreen render. Call after the scene is built and before the first visible frame, so the first frames don't stall.
- `get mode: RenderMode`
- `setMode(mode: RenderMode): void`
- `get filters: readonly string[]`: The whole-scene filter ids, in order (see `look` for the per-layer ones).
- `setFilters(ids: readonly string[]): void`: Replace the whole-scene filter stack (ids from FILTERS, applied in order; Pixel mode only). Layers keep their looks.
- `get look: Look`: The current look (a copy: change it and pass it to `setLook`).
- `get split: boolean`: True while the look renders characters/objects and the environment as two passes.
- `setLook(look: Look): void`: Apply a look: pixel art or clean rendering and a filter stack per layer, plus filters on the whole frame (see render/look.ts). Parameters and pixel sizes only update uniforms; the graph is rebuilt (or taken from the cache) only when its shape changes.
- `toggleMode(): RenderMode`
- `get resolution: Resolution`: The actual art resolution; adaptive varies its width, fill varies both dimensions.
- `get baseResolution: Resolution`: The configured resolution preset (RESOLUTIONS.default or .compare).
- `setResolution(resolution: Resolution): void`
- `get aspect: AspectMode`
- `setAspect(aspect: AspectMode): void`
- `get activeCamera: Camera`: The camera the frame is drawn from (mirrors reflect it).
- `setCamera(camera: Camera): void`: Point both passes at a different camera (camera preset hot-swap). The pipeline, canvas and all nodes stay the same; only the camera the scene is rendered with changes.
- `get edges: EdgeSettings`: Pixel-art outline strengths (of the environment layer; the look holds both layers').
- `setEdges(edges: Partial<EdgeSettings>): void`: Set the pixel-art outline strengths of every pixel-art layer.
- `layout(): void`: Recompute integer-scaled canvas layout for the current viewport and aspect mode.
- `onBeforeRender(f: () => void): () => void`: Run `f` before every frame's render (and capture), outside the pipeline: render-to-texture views draw their cameras here, so this frame's screens show this frame. Returns an unsubscribe.
- `clearBeforeRender(): void`: Drop every `onBeforeRender` listener (the engine does this when a level unloads).
- `render(): void`
- `capture(): Promise<CapturedFrame>`: Render the current frame through the full pipeline into an offscreen target and read it back. Output is identical to what the canvas presents (same pipeline, same size), so tests and agents can inspect frames even where canvas screenshots don't work.
- `setAnimationLoop(callback: ((time: number) => void) | null): void`: Set (or stop, with null) the render loop. While a lost device is being recovered the callback is only remembered; the new renderer starts the latest one, so there is never more than one loop.
- `dispose(): void`

### planLook()

```ts
function planLook(look: Look): LookPlan
```

What a look needs from the renderer. One scene pass when both layers look the same
(same pixel settings, no per-layer filters), two otherwise.

### type RenderMode

```ts
type RenderMode = 'pixel' | 'raw'
```

### scenePixel()

```ts
function scenePixel(look: Look): PixelLook | null | undefined
```

The layers' pixel settings when they are the same (what "whole scene" pixel art means), else undefined.

### setLookLayer()

```ts
function setLookLayer(object: Object3D, layer: LookLayer): void
```

Put an object (and everything under it that has no layer of its own) on a look layer.
Untagged objects are environment. Tag a character's root once: parts attached later
(weapons, effects) follow it.

### splitFilters()

```ts
function splitFilters(ids: readonly string[]): { art: string[]; display: string[] }
```

Split a stack into the part that runs at art resolution (its leading `art` filters) and
the part that runs per device pixel (from the first `display` filter on, in order).
Unknown ids are dropped.

## 4. Materials, meshes and lights

### interface AssignItem

One request as the assigner sees it. `slot`/`level` are owned by the assigner.

- `score: number`: Importance this frame (≥ 0); 0 = not wanted (out of range, off).
- `alive: boolean`: False once released: fades out, then leaves.
- `fadeIn: number`: Seconds to fade in / out.
- `fadeOut: number`
- `slot: number`: Pool slot held, or -1.
- `level: number`: Shown fraction 0..1 (fades).

### class ContactShadow

Classic hard-edged blob shadow that sits on the ground under a character.
Drawn as a TSL disc (step on distance from center) so it quantizes into a crisp
pixel ellipse in pixel mode. Position it with `place()` each frame.

- `new ContactShadow(radius = 0.45)`
- `readonly radius: number`
- `place(x: number, groundY: number, z: number, height: number): void`

### flicker()

```ts
function flicker(preset: FlickerPreset, t: number, seed = 0): number
```

Intensity multiplier of a flicker preset at time `t` (seconds). Averages ~1, stays within
roughly 0.6..1.25 for fire so a torch never goes dark.

### FLICKER_PRESETS

```ts
const FLICKER_PRESETS: readonly FlickerPreset[]
```

### type FlickerPreset

```ts
type FlickerPreset = 'none' | 'torch' | 'candle' | 'brazier' | 'pulse' | 'strobe' | 'spell'
```

Flicker presets: intensity multipliers over time (deterministic per request seed).

### glowMaterial()

```ts
function glowMaterial(color: ColorRepresentation): MeshBasicNodeMaterial
```

Unlit, full-bright material for a colour (flames, eyes, screens, crystal cores), shared and
cached per colour like `toonMaterial` (`userData.shared`; disposing it drops it from the
cache). Its vertices snap with the toon materials' under the `ps1` filter, so a glowing part
stays on its model.

### LIGHT_POOL_SIZES

```ts
const LIGHT_POOL_SIZES: { readonly low: 4; readonly medium: 8; readonly high: 16; }
```

Pool sizes by quality level (`QUALITY[level].lights`).

### class LightAssigner

Pure light assignment: `capacity` slots, many items. Each step picks the `capacity`
highest-scoring live items (items already holding a slot score × `hysteresis`, so two
similar requests don't trade a light back and forth), fades winners in and losers out,
and moves a slot to a new owner only once the old one has faded to 0. A fade changes a
level by at most `dt / fade` per step: nothing ever pops.

- `new LightAssigner(capacity: number)`
- `readonly slots: (T | null)[]`: Slot → item holding it.
- `hysteresis: number`
- `get capacity: number`
- `resize(capacity: number, items: Iterable<T>): void`: Change the slot count (the pool's lights are rebuilt: a one-off shader recompile).
- `rank(it: T): number`: Effective rank of an item (score with the hysteresis bonus for holders).
- `step(dt: number, items: readonly T[]): AssignStats`

### interface LightHandle

A light request. Change it freely; the pool decides whether it currently owns a real light.

- `readonly id: number`
- `readonly position: Vector3`: World position (mutable; ignored while following).
- `readonly color: Color`: Colour (mutable).
- `intensity: number`
- `radius: number`
- `decay: number`
- `flicker: FlickerPreset`
- `priority: number`
- `follow: Object3D | null`
- `readonly offset: Vector3`
- `name: string`
- `lifetime: number`: Seconds left before auto-release (Infinity = until `release()`).
- `update(options: LightRequestOptions): this`: Set several fields at once.
- `release(): void`: Fade out and give the light back. Safe to call twice.
- `readonly alive: boolean`
- `readonly lit: boolean`: Whether it holds one of the pool's real lights right now.
- `readonly level: number`: 0..1: how much of it is shown (fades).

### class LightPool

A fixed pool of point lights shared by many requests (see the file comment). Available
to games as `ctx.lights` (sized by quality: low 4, medium 8, high 16), or create your
own with `new LightPool({ size, parent: scene })` and call `update` every frame.

- `new LightPool(options: LightPoolOptions = {})`
- `readonly group: Group<Object3DEventMap>`
- `readonly lights: PointLight[]`
- `get size: number`: Number of real lights (constant unless `resize`d).
- `request(options: LightRequestOptions = {}): LightHandle`: Ask for a light. Returns a handle to move, recolour or release.
- `update(dt: number, focus: Vector3, range = 18): void`: Assign lights for this frame. `focus` is what the camera looks at; requests further than `range` + their radius from it are not lit. Call once per rendered frame.
- `clear(): void`: Release every request at once and darken the lights (level unload).
- `resize(size: number): void`: Change the number of real lights. Every material using lights recompiles once, so do it rarely (a quality change), never per frame.
- `stats(): LightPoolStats`
- `describe(): { id: number; name: string; score: number; slot: number; level: number; alive: boolean }[]`: Every live request with its score and slot (debugging, inspectors).
- `dispose(): void`

### interface LightPoolOptions

- `size?: number`: Real lights in the pool (constant: changing it recompiles materials). Default 8.
- `parent?: Object3D`: Parent for the pool's lights (added to it). Usually the scene.

### interface LightPoolStats

- `size: number`
- `requests: number`
- `lit: number`
- `assignments: number`: Slot hand-overs since creation (a request got a light).
- `waiting: number`: Requests that wanted a light but had to wait last frame.
- `updateMs: number`: Milliseconds spent in the last update (CPU).

### interface LightRequestOptions

- `position?: Vector3 | readonly [number, number, number]`: World position (copied). Ignored while `follow` is set (then it is `follow` + `offset`).
- `follow?: Object3D | null`: Follow an object's world position every frame (a projectile, a monster, the hero).
- `offset?: readonly [number, number, number]`: Offset from `follow` (world axes).
- `color?: ColorRepresentation`
- `intensity?: number`: Point light intensity at full strength (before flicker and fades). Default 4.
- `radius?: number`: Reach in metres (PointLight.distance: light is 0 beyond it). Default 6.
- `decay?: number`: Distance falloff exponent (PointLight.decay; a uniform, free to change). Default 1.2.
- `flicker?: FlickerPreset`
- `priority?: number`: Importance multiplier: the hero's light 4, a loot beam 2, a torch 1 (default).
- `fadeIn?: number`: Fade times in seconds (defaults 0.25 in, 0.2 out).
- `fadeOut?: number`
- `lifetime?: number`: Release automatically after this many seconds (spell flashes, explosions).
- `name?: string`: Optional label for debugging (`pool.describe()`).

### interface MergeOptions

- `castShadow?: boolean`: Override castShadow on every merged mesh (default: keep each source mesh's flag).
- `receiveShadow?: boolean`: Override receiveShadow on every merged mesh (default: keep each source mesh's flag).

### mergeStaticMeshes()

```ts
function mergeStaticMeshes(sources: readonly Object3D[], options: MergeOptions = {}): Mesh[]
```

Merge static meshes into one mesh per (material, shadow flags): N blocks with M
materials become ≤ M draw calls instead of N × groups (a BoxGeometry with 6 material
groups is 6 draws, plus 6 more in the shadow pass).

World transforms are baked into the vertices, multi-material geometry is split by its
groups, and `position` + `normal` are kept, plus `uv` under a material with a `map` and
`color` under one with `vertexColors` (what toon materials read). The
sources are left untouched (don't add them to the scene). Physics is separate: keep
one collider per block. Merged meshes are culled as a whole, so merge things that are
on screen together (a level, a room), and keep anything that moves…

### PALETTE

```ts
const PALETTE: { readonly ink: 1711148; readonly plum: 6104925; readonly red: 11615827; readonly orange: 15695191; readonly sand: 16764277; readonly lime: 11006064; readonly green: 3716964; readonly teal: 2453881; ... 7 more ...; readonly night: 3357783; }
```

Restrained 16-color palette (Sweetie 16 by GrafxKid). Every color in a game should come
from here: authentic pixel art reads as "designed" because the palette is small.
Keep in sync with scripts/generate-assets.mjs.

### type PaletteColor

```ts
type PaletteColor = keyof typeof PALETTE
```

### pixelTexture()

```ts
function pixelTexture(texture: T): T
```

Make a texture pixel-art friendly: nearest-neighbor sampling, no mipmaps. Returns it.

### TOON_BANDS

```ts
const TOON_BANDS: readonly [96, 176, 255]
```

3-band toon ramp (shadow / mid / lit). Sampled with NearestFilter so light falls
off in hard bands, the way hand-shaded sprites look. Values are 0..255 intensity.

### toonGradient()

```ts
function toonGradient(): DataTexture
```

### toonify()

```ts
function toonify(root: Object3D, options: ToonifyOptions = {}): Object3D
```

Replace every mesh material under `root` with the shared toon material of the same base
color, keeping its base color texture (`map`, nearest-filtered) and vertex colors. Makes
any GLB (or hand-built mesh) match the engine's look without per-asset work.

### toonMaterial()

```ts
function toonMaterial(color: ColorRepresentation, options: ToonMaterialOptions = {}): MeshToonNodeMaterial
```

Shared 3-band toon node material for a palette color, optionally textured and/or
vertex-colored (color × map × vertex color), cached per combination. Untextured ones
(and ones whose texture is itself shared, e.g. from a cached GLB) are marked
`userData.shared`, so level unloads keep them; a material with a level's own texture is
disposed with the level, and disposing it drops it from the cache.

### interface ToonMaterialOptions

- `map?: Texture | null`: Base color texture. Switched to nearest filtering (crisp texels, no mip blur).
- `vertexColors?: boolean`: Multiply by the geometry's `color` attribute (vertex colors).
- `rim?: number`: A hard-banded rim light in this colour (hex) on grazing, upward-facing surfaces: a silhouette that reads against dark floors (monsters in dark levels). Added to the emissive, so `material.emissive` (hit flashes) still works on top. Same shader for every rim c…
- `dissolve?: boolean`: Pixel dissolve: the material reads its own `dissolve` property (0 = solid, 1 = gone) and discards a per-art-pixel noise pattern below it, with a 1-pixel glowing front in the rim colour (or white). Set it on per-body clones (`material.dissolve = 0.4`), not on…

## 5. Physics

### interface BoxOptions

- `position: [number, number, number]`
- `halfExtents: [number, number, number]`
- `rotationY?: number`
- `friction?: number`
- `density?: number`

### interface Breakable

- `readonly o: BreakableOptions`
- `readonly mesh: Mesh`
- `collider: RAPIER.Collider | null`
- `broken: boolean`

### interface BreakableOptions

- `at: Vec3`: Centre and full size of the block.
- `size: Vec3`
- `rotationY?: number`: Turn about Y (radians).
- `color: PaletteColor`
- `cuts?: Vec3`: Pieces along x, y, z (default [3, 3, 1]).
- `jitter?: number`
- `seed?: number`
- `linger?: number`: Seconds the pieces lie around before they dissolve (default 4).
- `density?: number`: Chunk density (default 1.5).
- `tags?: string[]`

### class Breakables

- `new Breakables(ctx: Ctx)`
- `readonly blocks: Breakable[]`
- `readonly tiles: Crumble[]`
- `get chunks: number`: Chunks alive now (tests, HUDs).
- `add(o: BreakableOptions): Breakable`
- `restore(b: Breakable): void`: Put a broken block back, whole (its old pieces dissolve as usual).
- `byCollider(handle: number): Breakable | undefined`: The block whose collider this is (a punch's ray hit, a projectile).
- `near(at: Vec3, reach: number): Breakable | undefined`: The unbroken block nearest to `at` within `reach` of its surface (a punch, a blast radius).
- `break(b: Breakable, at?: Vec3, speed = 5): void`: Shatter a block: chunks fly away from `at` (default its middle) at up to `speed` m/s.
- `crumble(o: CrumbleOptions): Crumble`: A floor tile that drops shortly after you step on it, and grows back.
- `update(dt: number, standing = -1): void`: Per frame: tiles under `standing` (a collider handle: the character's `groundCollider`) start to shake, shaking tiles drop, dropped ones grow back; old chunks dissolve away.

### interface BridgeOptions

- `planks?: number`
- `width?: number`: Width across (m). Default 1.6.
- `sag?: number`: How far the middle hangs below the ends (m). Default 0.4.
- `thickness?: number`
- `color?: PaletteColor`
- `rope?: PaletteColor`
- `gap?: number`: Gap between planks (m). Default 0.06.

### interface Built

What every builder returns: its bodies, and a way to take it all out of the level again.

- `readonly bodies: RAPIER.RigidBody[]`: Every body it made (fixed anchors included).
- `remove(): void`: Remove its bodies, joints and meshes (a rebuild, a cut rope's leftovers).

### chain()

```ts
function chain(ctx: Ctx, at: Vec3, o: ChainOptions = {}): Built & { links: RAPIER.RigidBody[]; end: RAPIER.RigidBody | null }
```

A chain of capsule links on ball joints, hanging from `at`: its links, and the end weight.
An iterative solver stretches a chain whose end is far heavier than its links (like
elastic), so the links weigh at least 1/15 of the end and get 4 extra solver passes: a
wrecking ball's chain stretches by a few cm. (Multibody joints would be exact, but impulses
— blasts, punches, shoves — don't reach their links.)

### interface ChainOptions

- `links?: number`: Links (capsules). Default 8.
- `linkLength?: number`: Length of one link (m). Default 0.35.
- `radius?: number`: Link thickness (radius, m). Default 0.06.
- `color?: PaletteColor`
- `end?: { ball?: number; box?: Vec3; density?: number; color?: PaletteColor }`: Something heavy at the end: a ball of this radius (a wrecking ball) or a box.
- `direction?: Vec3`: Hang toward this direction from the anchor (default straight down).
- `body?: RAPIER.RigidBody`: Attach to this body instead of the world (`at` is then in its local space).

### type CharacterAnim

```ts
type CharacterAnim = 'Idle' | 'Walk' | 'Jump'
```

### class CharacterController

Kinematic capsule driven by Rapier's KinematicCharacterController, with classic
platformer affordances (coyote time, jump buffering, variable jump height).

The body moves in continuous world space; the visual model is interpolated by
Physics.bind and only *looks* pixel-aligned through the render pipeline.

- `new CharacterController(physics: Physics, options: CharacterOptions)`
- `readonly body: RAPIER.RigidBody`
- `readonly collider: RAPIER.Collider`
- `readonly controller: RAPIER.KinematicCharacterController`
- `readonly velocity: Vector3`
- `grounded: boolean`
- `facing: number`
- `get feet: Vector3`: Feet position (bottom of the capsule), continuous world space.
- `interpolatedFeet(alpha: number): Vector3`: Feet position blended between the previous and current physics step (render use).
- `setInput(move: Vector3, jumpPressed: boolean, jumpHeld: boolean): void`: Set desired horizontal move direction (world space, length ≤ 1) and jump input.
- `teleport(position: [number, number, number]): void`
- `fixedUpdate(dt: number): void`: Call from Physics.update's fixedUpdate callback.
- `attachAnimations(model: Object3D, clips: readonly AnimationClip[]): void`: Attach a model's animation clips (expects Idle / Walk / Jump).
- `get animation: CharacterAnim`
- `updateVisual(model: Object3D, dt: number): void`: Per render frame: pick animation state and advance the mixer.

### interface CharacterOptions

- `position: [number, number, number]`
- `radius?: number`
- `halfHeight?: number`: Height of the cylindrical part of the capsule.
- `speed?: number`
- `jumpSpeed?: number`
- `gravity?: number`

### interface Chunk

Breaking a box into pieces: cut planes along each axis at jittered positions, so the
chunks tile the box exactly (nothing missing, nothing overlapping) but look hand-broken,
not like a grid. Pure and seeded (the same box breaks the same way every time).

  const chunks = fractureBox([2, 3, 0.4], { cuts: [3, 4, 1], jitter: 0.35, seed: 7 });
  // [{ center: [x, y, z], size: [w, h, d] }, ...] in the box's own space

- `readonly center: [number, number, number]`: Centre in the box's local space (the box is centred on the origin).
- `readonly size: [number, number, number]`

### clothGrid()

```ts
function clothGrid(o: ClothOptions): VerletBody & { cols: number; rows: number; uv: Float32Array }
```

A sheet of cloth: a grid of particles with structural, shear and bend edges, two triangles per cell.

### interface ClothOptions

- `width: number`
- `height: number`
- `cols: number`: Particles across and down (≥ 2).
- `rows: number`
- `origin: readonly [number, number, number]`: The top-left corner. The cloth lies in the plane spanned by `across` and `down`.
- `across?: readonly [number, number, number]`: Direction along the top edge (unit). Default +X.
- `down?: readonly [number, number, number]`: Direction from the top edge to the bottom one (unit). Default −Y (hanging); +Z lays it flat.
- `pin?: 'top' | 'corners' | 'left' | 'none'`: Pinned particles: the whole top edge, its two corners, the left edge (a flag), or none.
- `shear?: number`: Shear and bend springs (0..1 stiffness). Default 0.8 / 0.3.
- `bend?: number`
- `iterations?: number`

### interface Crumble

- `readonly o: CrumbleOptions`
- `readonly mesh: Mesh`
- `collider: RAPIER.Collider | null`
- `state: 'solid' | 'shaking' | 'falling'`: 'solid' → 'shaking' → 'falling' → (regrow) 'solid'.
- `t: number`

### interface CrumbleOptions

- `at: Vec3`
- `size: Vec3`
- `color: PaletteColor`
- `delay?: number`: Seconds standing on it before it drops (it shakes meanwhile). Default 0.6.
- `regrow?: number`: Seconds until it grows back (0: never). Default 5.

### interface DoorOptions

- `width?: number`
- `height?: number`
- `thickness?: number`
- `swing?: number`: Swing limit either way (degrees). Default 110.
- `yaw?: number`: Turn the door frame about Y (radians).
- `color?: PaletteColor`
- `closing?: number`: A spring that swings it shut again (stiffness per unit inertia, 0: none). Default 4.

### interface DriveInput

- `throttle: number`: -1 (reverse) … 1
- `steer: number`: -1 (left) … 1 (right)
- `brake?: boolean`
- `handbrake?: boolean`

### explode()

```ts
function explode(world: RAPIER_TYPE.World, at: Vec3, o: ExplosionOptions = {}): number
```

Push every dynamic body within `radius` of `at` away from it (a speed change, so light and
heavy things fly alike). Returns how many were hit.

### interface ExplosionOptions

- `radius?: number`
- `impulse?: number`: Speed change (m/s) at the centre, fading to 0 at the radius. Default 10.
- `up?: number`: Extra upward share (0..1): blasts throw things up. Default 0.4.

### interface Field

- `enabled: boolean`
- `remove(): void`: Stop and forget it.

### fieldAcceleration()

```ts
function fieldAcceleration(f: FieldOptions, x: number, y: number, z: number, out: [number, number, number]): boolean
```

A pure acceleration query: what a field does at a point (no physics world needed).

### interface FieldOptions

- `box?: Vec3`: Half extents of a box zone, or the radius of a sphere zone.
- `sphere?: number`
- `at: Vec3`
- `rotationY?: number`: A box zone's turn about Y (radians).
- `force?: Vec3`: Acceleration (m/s²) in a direction: wind, an updraft (> 9.8 up lifts things), a current.
- `radial?: number`: Acceleration away from the zone's centre (m/s²); negative pulls toward it (a well).
- `falloff?: boolean`: Weaker toward the edge (spheres: by distance; boxes: by height above the bottom).
- `drag?: number`: Pull velocities toward the field's own flow (0..1 per second-ish): water, mud.
- `character?: boolean`: Push the character too (default true).
- `bodies?: boolean`: Push dynamic bodies (default true).
- `enabled?: boolean`
- `name?: string`

### FIXED_DT

```ts
const FIXED_DT: number
```

### interface FloaterOptions

- `density?: number`: Water density in the world's mass units (default 1: a body of density 0.5 floats half in).
- `drag?: number`: How fast velocities die in the water (per second, times how deep it is in). Default 2.5.
- `angularDrag?: number`: Turning drag (per second). Default 1.6.
- `onSplash?: (x: number, y: number, z: number, speed: number) => void`: Called when a body falls into the water fast enough to splash (speed m/s).

### class Floaters

- `new Floaters(world: RAPIER_TYPE.World, surface: (x: number, z: number) => number | null, o: FloaterOptions = {})`
- `readonly list: Floater[]`
- `readonly o: FloaterOptions`
- `add(body: RAPIER_TYPE.RigidBody): void`: Float `body`: its first collider's shape sets the octants (its bounding box) and the volume it can push aside (a box, ball, capsule, cylinder or cone; any other shape counts as a box).
- `remove(body: RAPIER_TYPE.RigidBody): void`
- `submerged(body: RAPIER_TYPE.RigidBody): number`: How deep (0..1 of its height) a floater sits in the water now (tests, HUDs).
- `step(dt: number): void`: One fixed step: buoyancy at each sample point under the surface, then drag.

### class ForceFields

The zones of a physics world.

- `get count: number`
- `get all: readonly Field[]`
- `add(o: FieldOptions): Field`
- `clear(): void`
- `accelerationAt(x: number, y: number, z: number, out: [number, number, number], who: 'character' | 'bodies' = 'character'): [number, number, number]`: Total acceleration at a point from every field that pushes the character. Returns `out`.
- `dragAt(x: number, y: number, z: number, who: 'character' | 'bodies' = 'bodies'): { drag: number; flow: [number, number, number] } | null`: The strongest drag (and its flow) at a point for the character or the bodies: water, mud.
- `step(world: RAPIER_TYPE.World, dt: number): void`: Push every dynamic body inside a field (one fixed step).

### fractureBox()

```ts
function fractureBox(size: readonly [number, number, number], o: FractureOptions = {}): Chunk[]
```

### interface FractureOptions

- `cuts?: readonly [number, number, number]`: Pieces along x, y and z (default [3, 3, 1]).
- `jitter?: number`: How far a cut may wander from even spacing, as a share of a piece (0..0.45). Default 0.3.
- `seed?: number`

### hingeDoor()

```ts
function hingeDoor(ctx: Ctx, at: Vec3, o: DoorOptions = {}): Built & { door: RAPIER.RigidBody; hinge: RAPIER.RevoluteImpulseJoint }
```

A door on a vertical hinge at `at` (the hinge's foot); push it open by walking into it.

### class InstancedBodies

- `new InstancedBodies(physics: Physics, scene: Scene, o: InstancedBodiesOptions)`
- `readonly mesh: InstancedMesh`
- `readonly bodies: RAPIER.RigidBody[]`
- `readonly o: InstancedBodiesOptions`
- `get count: number`
- `add(at: readonly [number, number, number], o: { velocity?: readonly [number, number, number]; spin?: readonly [number, number, number]; color?: ColorRepresentation } = {}): RAPIER.RigidBody | null`: A new body at `at` (false when full).
- `spawn(at: readonly [number, number, number], o: { velocity?: readonly [number, number, number]; spin?: readonly [number, number, number] } = {}): RAPIER.RigidBody`: Like `add`, but when full the oldest body is moved to `at` instead (a cannon's shots).
- `clear(): void`: Remove every body (and stop drawing them).
- `dispose(): void`: Remove the bodies and the mesh.
- `recycle(y: number, to: (i: number) => readonly [number, number, number]): number`: Bodies that fell below `y` go back up to `to` (a fountain of crates).
- `sleeping(): number`: Bodies asleep (resting: Rapier stops simulating them).
- `sync(alpha: number): void`: Per frame: instance matrices between the last two steps (`alpha` = physics.alpha).

### interface InstancedBodiesOptions

- `shape: InstancedShape`
- `size: number`: Box: edge length; ball: radius; capsule: radius (its height is 3 × radius).
- `capacity: number`: Most bodies at once.
- `color?: ColorRepresentation`
- `density?: number`
- `friction?: number`
- `restitution?: number`
- `ccd?: boolean`: Sweep fast bodies so they can't skip through thin walls (default: only tiny ones).

### type InstancedShape

```ts
type InstancedShape = 'box' | 'ball' | 'capsule'
```

### interface KinematicBody

The parts of a Rapier body a mover drives.

- `setNextKinematicTranslation(t: { x: number; y: number; z: number }): void`
- `setNextKinematicRotation(r: { x: number; y: number; z: number; w: number }): void`
- `setTranslation?(t: { x: number; y: number; z: number }, wake: boolean): void`: Set right away (Rapier bodies have them): a mover starts where its clock says.
- `setRotation?(r: { x: number; y: number; z: number; w: number }, wake: boolean): void`

### interface Mover

- `readonly body: KinematicBody`
- `readonly options: MoverOptions`
- `readonly time: number`: Its own clock: seconds since it was added (what its pose is a function of).
- `remove(): void`: Stop moving it (it stays where it is).
- `set(options: MoverOptions): void`: Change the options (a lift that starts moving: set a path). Its clock keeps running.

### interface MoverOptions

- `path?: readonly Vec3[]`: Waypoints (world positions of the body's origin), visited in order.
- `speed?: number`: Metres per second along the path (default 2).
- `hold?: number`: Seconds to wait at each waypoint.
- `mode?: 'pingpong' | 'loop'`: `pingpong` (default): there and back; `loop`: the last point leads back to the first.
- `ease?: Ease`: Easing of each leg (default `inOutSine`).
- `spin?: Vec3`: Spin: angular velocity (rad/s) about each axis.
- `swing?: { axis: Vec3; angle: number; period: number }`: A pendulum swing: about `axis` (unit), ± `angle` degrees, one full swing every `period` s.
- `phase?: number`: Seconds added to the clock (offsets two movers on the same path).
- `baseRotation?: readonly [number, number, number, number]`: Rotation the swing and spin start from (a quaternion x, y, z, w).
- `curve?: (t: number, out: [number, number, number]) => void`: Position as any function of time instead of a path (an orbit, a pendulum's arc), into `out`. Keep it pure: the same `t`, the same point.

### moverRotation()

```ts
function moverRotation(o: MoverOptions, t: number, out: [number, number, number, number]): [number, number, number, number]
```

Quaternion (x, y, z, w) of a spin or swing at time `t`, composed onto `baseRotation`.

### class Movers

- `get count: number`
- `add(body: KinematicBody, options: MoverOptions, start = 0): Mover`: Drive `body` from now on: its clock starts at 0 at world time `start`.
- `step(t: number): void`: Set every mover's next pose for world time `t`.
- `pose(body: KinematicBody, o: MoverOptions, t: number, next: boolean): void`: Put `body` where `o` says it is at its own time `t` (`next`: as the next kinematic pose).
- `removeBody(body: KinematicBody): void`: Stop driving `body` (it left the world).
- `clear(): void`

### orbit()

```ts
function orbit(center: Vec3, radius: number, period: number, o: { axis?: 'x' | 'z'; start?: number } = {}): (t: number, out: [number, number, number]) => void
```

A level platform going round a circle: a Ferris wheel's seat (`curve`).

### pathPoint()

```ts
function pathPoint(o: MoverOptions, t: number, out: [number, number, number]): [number, number, number]
```

Where a path is at time `t` (seconds), into `out`.

### pendulum()

```ts
function pendulum(pivot: Vec3, length: number, angle: number, period: number, o: { axis?: 'x' | 'z' } = {}): (t: number, out: [number, number, number]) => void
```

A level platform hanging `length` below `pivot`, swinging ± `angle` degrees (`curve`).

### class Physics

Rapier world with a fixed 60 Hz step and render interpolation.

Physics owns the truth; visuals follow. Bound Object3Ds are *interpolated* between
the last two physics states for smooth motion. Pixel alignment is purely a camera /
presentation concern and never touches bodies here.

- `static create(gravity = -24): Promise<Physics>`: Loads Rapier's wasm on first use (a separate, streamed .wasm file), then builds a world.
- `world: RAPIER.World`: The Rapier world. A new one per level (`clear()`): read it from here, don't keep it across levels.
- `alpha: number`: Interpolation factor between the previous and current physics step, 0..1.
- `steps: number`
- `readonly fields: ForceFields`: Zones that push, pull or drag (wind, fans, wells, currents): dynamic bodies get them every step, `PlatformerCharacter` reads them (physics/forces.ts).
- `stepMs: number`: Milliseconds Rapier took for one step (smoothed): what a pile of bodies costs.
- `update(dt: number, fixedUpdate?: (dt: number) => void): void`: Advance the simulation by real elapsed time. `fixedUpdate` runs before each fixed step (apply forces, move kinematic characters there).
- `state(): PhysicsState`: The physics as data, between frames (`engine.snapshot()`): the fixed step's clock and the whole Rapier world, exact. Bodies and colliders keep their handles across `setState`: a game finds its own again with `world.getRigidBody(handle)` / `getCollider(handle)…
- `setState(s: PhysicsState): void`: Back to `state()`: the world it saved replaces this one, bound meshes re-found by handle.
- `restoreState(s: PhysicsState): PhysicsRestore`: `setState`, undoable: the saved world is built first (nothing changes if that fails), then replaces this one; `undo()` puts everything back as it was, `commit()` frees the old world. A mesh bound to a body the saved world doesn't have is let go (it stays wher…
- `get time: number`: Seconds of physics simulated (fixed steps × 1/60): the clock movers run on.
- `onStep(f: () => void, o: { first?: boolean } = {}): () => void`: Run `f` after every fixed step, before bound meshes (`bind`) read their bodies. Listeners run in the order they were added (instanced bodies keep their last two poses, a ragdoll holds its joint limits); `{ first: true }` runs `f` ahead of all of those, for so…
- `addMover(body: KinematicBody, options: MoverOptions): Mover`: Drive a kinematic body (`RigidBodyDesc.kinematicPositionBased()`) along a path, spinning or swinging, as a pure function of its own clock (physics/movers.ts), which starts at 0 now: the same however fast frames come. The character rides it. Removing the body…
- `conveyor(collider: RAPIER.Collider, velocity: readonly [number, number, number] | null): void`: Make a collider a conveyor belt moving at `velocity` (m/s, world axes): dynamic bodies touching it are dragged along, the character standing on it is carried.
- `beltVelocity(handle: number): readonly [number, number, number] | null`: A conveyor's velocity, by collider handle (null: not a belt).
- `explode(at: readonly [number, number, number] | Vector3, o: ExplosionOptions = {}): number`: Push every dynamic body near `at` away from it (physics/forces.ts). Returns how many.
- `bind(body: RAPIER.RigidBody, object: Object3D): void`: Make `object` follow `body` (interpolated).
- `unbind(object: Object3D): void`
- `addStaticBox(o: BoxOptions): RAPIER.Collider`
- `addStaticCylinder(position: [number, number, number], halfHeight: number, radius: number): RAPIER.Collider`
- `addDynamicBox(o: BoxOptions): RAPIER.RigidBody`
- `tag(collider: RAPIER.Collider, ...tags: string[]): RAPIER.Collider`: Tag a collider with gameplay semantics the character controller understands: 'climbable' (ladders/vines), 'pushable', 'grabbable', 'slippery', 'noLedge', 'character', 'noCamera' (camera rays pass through). Games may add their own.
- `hasTag(collider: RAPIER.Collider | null | undefined, tag: string): boolean`
- `raycast(from: Vector3, dir: Vector3, maxDistance: number, ignoreTags: readonly string[] = NO_TAGS): number | null`: Distance along `dir` (unit) from `from` to the first collider not carrying any of `ignoreTags`.
- `castRay(from: Vector3, dir: Vector3, maxDistance: number, ignoreTags: readonly string[] = NO_TAGS, exclude?: RAPIER.RigidBody): { distance: number; collider: RAPIER.Collider; normal: Vector3; point: Vector3 } | null`: Ray cast returning distance, hit collider and surface normal.
- `castUp(x: number, y: number, z: number, maxDistance: number, out: { y: number; nx: number; ny: number; nz: number; id: number }, ignoreTags: readonly string[] = NO_TAGS, exclude?: RAPIER.RigidBody): boolean`: Straight up from (x, y, z), at most `maxDistance` (a ceiling, a lift coming down): like `castDown`, `out.y` is the hit height.
- `castDown(x: number, y: number, z: number, maxDistance: number, out: { y: number; nx: number; ny: number; nz: number; id: number }, ignoreTags: readonly string[] = NO_TAGS, exclude?: RAPIER.RigidBody): boolean`: Straight down from (x, y, z), at most `maxDistance`, skipping colliders with any of `ignoreTags` (pass a constant array) and `exclude`. Fills `out` (hit height, normal, collider handle) without allocating; returns whether something was hit.
- `groundBelow(origin: Vector3, maxDistance = 20, exclude?: RAPIER.RigidBody): { y: number; distance: number } | null`: Distance straight down from `origin` to the first collider (excluding `exclude`).
- `trigger(shape: TriggerShape, at: readonly [number, number, number] | Vector3, options: TriggerOptions = {}): Trigger`: A trigger volume with enter/exit callbacks (pickups, checkpoints, kill zones, doors). Checked after every fixed step against dynamic and kinematic bodies (the character included); set `includeStatic` for level geometry. Never blocks movement or rays.
- `updateTriggers(): void`: Run every trigger's overlap query now (Physics.update does this after each step).
- `isAlive(target: { isValid(): boolean }): boolean`: Whether `target` (a body, collider or joint) still exists in the current world: false once removed, and for anything from a level before (its world is gone; `isValid()` would throw).
- `remove(target: RAPIER.RigidBody | RAPIER.Collider): void`: Remove a rigid body (with its colliders and any bound Object3D binding) or a single collider. Removing a collider whose fixed body has no other colliders removes that body too (what `addStaticBox` & co. create). Tags and trigger overlaps are cleaned up.
- `clear(): void`: Empty the world: every body, collider, joint, character and vehicle controller, trigger, tag, binding, mover, field and belt goes; gravity and the solver's iterations go back to their defaults, the step accumulator and the step count reset. `world` is a new R…
- `fingerprint(): string`: A hash of the physics state: every body (position, rotation, velocities, asleep, enabled) and collider (pose, friction, restitution, sensor, enabled), exact, plus the step count and the time not yet stepped. Two runs that should be the same compare equal only…
- `counts(): { bodies: number; colliders: number; joints: number; tags: number; bindings: number; triggers: number; controllers: number; vehicles: number; movers: number; fields: number; belts: number; }`: Sizes of everything Physics tracks (leak checks, debug UI).
- `dispose(): void`

### interface PhysicsState

The physics as data (`engine.snapshot()`): the fixed step's clock and the Rapier world (Rapier's own snapshot, base64).

- `readonly accumulator: number`
- `readonly alpha: number`
- `readonly steps: number`
- `readonly world: string`
- `readonly tags: readonly (readonly [number, readonly string[]])[]`: Collider tags and conveyor belts by collider handle, and each force field's `enabled` (in order).
- `readonly belts: readonly (readonly [number, readonly [number, number, number]])[]`
- `readonly fields: readonly boolean[]`

### class Ragdoll

- `new Ragdoll(physics: Physics, root: Object3D, parts: readonly RagdollPart[], o: RagdollOptions = {})`
- `readonly parts: readonly RagdollPart[]`
- `readonly o: Required<RagdollOptions>`
- `readonly root: Object3D`
- `get active: boolean`: Whether the bodies exist (a `physics.clear()`, a level unload, removes them: then it is off).
- `get bodies: RAPIER.RigidBody[]`: The bodies (root part first), while active.
- `enable(o: { velocity?: Vec3; spin?: Vec3 } = {}): void`: Make the bodies from the model's current pose, moving at `velocity` (and spinning at `spin`, rad/s).
- `push(at: Vec3 | Vector3, velocity: Vec3): void`: Knock the part nearest `at`: it gains `velocity` (m/s, applied there as an impulse of its own mass, so the same push works whatever the ragdoll's density), and its joints pass some of it on.
- `mass(): number`: Total mass of the parts (world units), while active.
- `speed(): number`: Fastest part (m/s): settled when this stays low.
- `rootPose(out = new Vector3()): { at: Vector3; faceUp: boolean; heading: number }`: Where the root part (the pelvis) is and how it lies: face up (on its back: its forward, +Z, points up) or down, and the heading (yaw) a character lying like that has: on its back its head is behind it (−Z), on its front ahead (+Z). That is the heading to get…
- `sync(): void`: Write the bodies into the joints (between the last two physics steps). Call every frame after the physics update.
- `release(o: { ground?: number | ((x: number, z: number) => number); heading?: number; offset?: Vec3 } = {}): { apply(w: number): void }`: Remove the bodies and hand the pose back. The model root moves under the root part (feet at `ground`: a height, or a function of x, z called once the bodies are gone; turned to `heading`, default `rootPose().heading`) without moving the joints in the world; t…
- `disable(): void`: Remove the bodies (the joints keep the last pose).

### interface RagdollOptions

- `density?: number`: World density of the parts (the world's mass units per m³). Default 3.
- `damping?: number`: Linear and angular damping (air drag, joint friction). Defaults 0.1 and 1.5.
- `angularDamping?: number`
- `friction?: number`: Friction of the parts on the ground. Default 0.5.

### interface RagdollPart

- `bone: string`: The joint (Object3D name) this part moves.
- `parent?: string`: The part it hangs from (that part's bone); none for the root (the pelvis).
- `from?: Vec3`: The capsule, in the joint's own space: from `from` (default the joint) to `to`.
- `to: Vec3`
- `radius: number`
- `hinge?: readonly [number, number]`: How it hangs: a hinge about local X (degrees, min and max) or a ball joint with a swing cone (degrees). Default a 60° cone.
- `cone?: number`
- `density?: number`: Relative density (default 1).

### class Rewind

- `new Rewind(physics: Physics, o: RewindOptions = {})`
- `readonly capacity: number`: Steps of history kept.
- `rewinding: boolean`: True: each physics step goes one step back instead of recording.
- `length: number`: Steps recorded now (rewinding uses them up).
- `get fill: number`: How much history there is, 0..1.
- `track(...bodies: RAPIER_TYPE.RigidBody[]): void`: Record `body` from now on (the history so far is dropped: every frame holds the same bodies).
- `trackAll(): void`: Record every dynamic body in the world now.
- `extra(get: () => readonly number[], set: (v: number[]) => void): void`: Something else to rewind: `get` returns numbers to keep each step, `set` puts them back.
- `reset(): void`: Forget the history.
- `dispose(): void`

### interface RewindOptions

- `seconds?: number`: History length in seconds of physics (default 5).

### class RippleField

The 2D wave equation on a grid (two height buffers, leapfrog): each cell is pulled toward
the average of its neighbours, so a dent spreads out as rings, bounces off the edges and
dies away. Stable for speed × dt / cell < 0.7; `step` substeps when it has to.

- `new RippleField(o: RippleOptions)`
- `readonly cols: number`
- `readonly rows: number`
- `readonly width: number`
- `readonly depth: number`
- `readonly cx: number`
- `readonly cz: number`
- `speed: number`
- `damping: number`
- `h: Float32Array`: Heights now and one step ago.
- `get cell: number`
- `contains(x: number, z: number): boolean`: Is (x, z) over this water?
- `heightAt(x: number, z: number): number`: Ripple height at a world point (bilinear between cells; 0 outside).
- `splash(x: number, z: number, radius: number, strength: number): void`: Push the surface down (strength > 0) in a disc: a splash, a footstep, a raindrop.
- `energy(): number`: Total |height| (tests: ripples spread and die away).
- `step(dt: number): void`

### interface RippleOptions

- `size: readonly [number, number]`: Width and depth of the water (m).
- `cells: readonly [number, number]`: Grid cells across and down (more: finer ripples, more cost).
- `center?: readonly [number, number]`: World x, z of the water's middle.
- `speed?: number`: Wave speed (m/s). Default 2.2.
- `damping?: number`: Energy kept per second (0..1). Default 0.35.

### ropeBridge()

```ts
function ropeBridge(ctx: Ctx, from: Vec3, to: Vec3, o: BridgeOptions = {}): Built & { planks: RAPIER.RigidBody[]; cut(end: 'from' | 'to'): void }
```

A rope bridge from `from` to `to` (the middles of its two ends, at walking height):
planks on ball joints at both edges of every seam (so each seam bends like a hinge but the
bridge can also twist), hanging in a sag. The character can walk it: it presses the planks
down and rides them.

### ropeLine()

```ts
function ropeLine(from: readonly [number, number, number], to: readonly [number, number, number], segments: number, o: { pinEnd?: boolean; slack?: number; iterations?: number } = {}): VerletBody
```

A rope from `from` to `to` in `segments` (the first particle pinned; `pinEnd` pins the last).

### seeded()

```ts
function seeded(seed: number): () => number
```

A small seeded random number generator (mulberry32).

### seesaw()

```ts
function seesaw(ctx: Ctx, at: Vec3, o: SeesawOptions = {}): Built & { plank: RAPIER.RigidBody; hinge: RAPIER.RevoluteImpulseJoint }
```

A plank on a hinge across its middle, on a wedge: weight on one end tips it.

### interface SeesawOptions

- `length?: number`: Plank length (m). Default 5.
- `width?: number`
- `height?: number`: Height of the pivot above `at` (m). Default 0.7.
- `yaw?: number`: Turn about Y (radians): 0 runs the plank along X.
- `tilt?: number`: Tilt limit either way (degrees). Default 16.
- `color?: PaletteColor`

### softBlob()

```ts
function softBlob(center: readonly [number, number, number], radius: number, o: { rings?: number; segments?: number; pressure?: number; stiffness?: number } = {}): VerletBody
```

A pressure blob: a sphere of particles (latitude × longitude rings plus poles) with edges
along and across, that keeps its volume. `pressure` 0..1 sets how firm it is.

### springPad()

```ts
function springPad(ctx: Ctx, at: Vec3, o: SpringPadOptions = {}): Built & { pad: RAPIER.RigidBody; slider: RAPIER.PrismaticImpulseJoint }
```

A platform on a vertical slider with a spring motor: it rests at `at` (the spring holds its
own weight), sinks under a load (the character presses with its `weight`) and bounces back.

### interface SpringPadOptions

- `size?: Vec3`
- `stiffness?: number`: Spring stiffness (1/s²: mass-independent). Higher: firmer. Default 40.
- `damping?: number`
- `travel?: number`: How far it can sink (m). Default 0.6.
- `color?: PaletteColor`

### class Trigger

A sensor volume with enter/exit callbacks. It is not a collider in the world: after
every fixed step Physics runs an intersection query for it and diffs the result, so a
trigger never blocks the character controller, ray casts or camera rays.
Create with `physics.trigger(shape, at, options)`.

- `new Trigger(def: TriggerShape, at: readonly [number, number, number] | Vector3, options: TriggerOptions, accept: (c: RAPIER.Collider) => boolean, detach: (t: Trigger) => void)`
- `readonly position: Vector3`: World position; move it freely (moving platforms, carried zones).
- `readonly inside: Map<number, Collider>`: Colliders inside the volume right now, by handle.
- `enabled: boolean`: A disabled trigger reports nothing (everything inside exits on the next step).
- `removed: boolean`
- `readonly shape: RAPIER.Shape`: Built once; Rapier converts it for each query.
- `readonly def: TriggerShape`
- `readonly options: TriggerOptions`
- `remove(): void`: Stop reporting and leave the world (no exit callbacks).
- `update(world: RAPIER.World): void`: Physics: refresh overlaps after a step and fire callbacks.
- `forget(handle: number): void`: Physics: a collider left the world while inside.

### interface TriggerOptions

- `onEnter?(other: RAPIER.Collider, trigger: Trigger): void`: Called once when a collider starts overlapping the volume.
- `onExit?(other: RAPIER.Collider, trigger: Trigger): void`: Called once when it stops overlapping (or leaves the world).
- `tag?: string`: Only colliders carrying this tag (e.g. 'character', which PlatformerCharacter sets).
- `filter?(other: RAPIER.Collider): boolean`: Extra filter: return false to ignore a collider.
- `includeStatic?: boolean`: Also report colliders on fixed bodies (level geometry). Default false.
- `once?: boolean`: Remove the trigger after its first enter (pickups).
- `rotationY?: number`: Rotation about Y in radians.

### type TriggerShape

```ts
type TriggerShape = | { box: [number, number, number] } | { sphere: number } | { capsule: { halfHeight: number; radius: number } } | { cylinder: { halfHeight: number; radius: number } }
```

Trigger volume shape (half extents / radius in world units).

### class Vehicle

- `new Vehicle(physics: Physics, o: VehicleOptions)`
- `readonly body: RAPIER.RigidBody`
- `readonly controller: RAPIER.DynamicRayCastVehicleController`
- `readonly o: Required<Omit<VehicleOptions, 'at' | 'yaw'>>`
- `readonly mounts: [number, number, number][]`: Wheels' chassis-space mount points (front left, front right, rear left, rear right).
- `steering: number`: Smoothed steering (-1..1).
- `slip: number`: How fast the car slides sideways (m/s), and the angle between where it points and where it goes (radians): drifting when high.
- `slipAngle: number`
- `setSuspension(stiffness: number): void`: Spring stiffness of every wheel's suspension (live).
- `get speed: number`: Speed along the car's heading (m/s, negative reversing). Not Rapier's `currentVehicleSpeed`, which counts the up-and-down too (the suspension holding the body up against gravity every step reads as a crawl when parked).
- `drive(input: DriveInput, dt: number): void`: One fixed step of driving.
- `wheelPose(i: number, pos: Vector3, rot: Quaternion, local = false): void`: Where wheel `i` is drawn: on its suspension, turned by steering and spin. In the world, or with `local` in the chassis' own space (a wheel mesh parented to a chassis mesh that a physics binding draws between steps).
- `get yaw: number`: The chassis' heading (radians about Y; 0 drives toward +Z).
- `reset(at: readonly [number, number, number], yaw = 0): void`: Put it back on its wheels at `at` (a reset after a roll).
- `dispose(): void`

### interface VehicleOptions

- `at: readonly [number, number, number]`
- `yaw?: number`: Heading (radians about Y; 0 drives toward +Z).
- `size?: readonly [number, number, number]`: Chassis half extents (m). Default [0.9, 0.35, 1.8].
- `mass?: number`: Chassis mass in world units. Default 8.
- `wheelRadius?: number`
- `suspension?: number`: Suspension rest length and stiffness.
- `stiffness?: number`
- `power?: number`: Forward drive force per driven wheel at full throttle. Default 30.
- `topSpeed?: number`: The engine gives out toward this speed (m/s). Default 16.
- `steer?: number`: Most steering angle (radians). Default 0.55.
- `grip?: number`: Grip (friction slip): how much sideways force the tyres hold before sliding. Default 2.2.
- `driftYaw?: number`: Most spin (rad/s) the handbrake's drift push builds up. Default 2.4; 0 turns the assist off.

### class VerletBody

- `new VerletBody(count: number, o: VerletOptions = {})`
- `readonly count: number`
- `readonly pos: Float32Array`: Positions, xyz per particle.
- `readonly prev: Float32Array`: Last step's positions (velocity = pos − prev).
- `readonly invMass: Float32Array`: 0 for pinned particles.
- `readonly pinAt: Float32Array`: Where pinned particles are held (move them to drag a cloth by its corner).
- `ea: Uint32Array<ArrayBuffer>`: Distance constraints: particle pairs, rest lengths and stiffness 0..1.
- `eb: Uint32Array<ArrayBuffer>`
- `rest: Float32Array<ArrayBuffer>`
- `stiff: Float32Array<ArrayBuffer>`
- `tris: Uint32Array<ArrayBuffer>`: Triangles (cloth and blobs): wind drag, volume and drawing.
- `gravity: [number, number, number]`
- `wind: [number, number, number]`: Wind velocity (m/s): drags triangles (by their facing) or particles (ropes).
- `gust: number`: How much the wind varies in time and space (0..1).
- `drag: number`: How hard the wind pushes. Cloth: acceleration per (m/s)² of wind hitting it squarely (light cloth: high; canvas: low). Ropes: per m/s of speed relative to the wind.
- `skin: number`: Cloth: drag along its surface, as a share of `drag` (it streams a flag out).
- `iterations: number`
- `damping: number`
- `floor: number | null`: A floor plane every particle stays above (null: none).
- `friction: number`: Ground friction: how much sideways motion a particle on the floor keeps.
- `readonly spheres: Sphere[]`
- `readonly boxes: Box[]`
- `restVolume: number`: Pressure blobs: the volume it tries to keep (0: off), and how hard.
- `pressure: number`
- `time: number`: Seconds simulated (drives gusts).
- `set(i: number, x: number, y: number, z: number): void`: Place particle `i` (and stop it).
- `pin(i: number, x?: number, y?: number, z?: number): void`: Hold particle `i` where it is (or at x, y, z).
- `unpin(i: number): void`
- `setEdges(pairs: readonly (readonly [number, number, number?])[]): void`: Set the edges (pairs of particle indices) with rest lengths from the current positions.
- `distance(a: number, b: number): number`
- `volume(): number`: Signed volume enclosed by the triangles (blobs; needs a closed, outward-wound surface).
- `center(out: [number, number, number] = [0, 0, 0]): [number, number, number]`: Centre of mass (average position).
- `impulse(vx: number, vy: number, vz: number, dt: number, near?: { x: number; y: number; z: number; r: number }): void`: Push every particle by a velocity change (an explosion, a kick).
- `step(dt: number): void`

### interface VerletOptions

- `iterations?: number`: Constraint passes per step: more is stiffer. Default 8.
- `damping?: number`: Velocity kept per step (0..1). Default 0.99.

### waterHeight()

```ts
function waterHeight(waves: readonly Wave[], x: number, z: number, t: number): number
```

Height of the waves above the water's rest level at (x, z), time t.

### interface WaterWave

One travelling wave: direction (unit x, z), wavelength (m), amplitude (m), speed (m/s).

- `readonly dir: readonly [number, number]`
- `readonly length: number`
- `readonly amplitude: number`
- `readonly speed: number`

### WAVES_CALM

```ts
const WAVES_CALM: readonly Wave[]
```

A pond on a still day.

### WAVES_CHOPPY

```ts
const WAVES_CHOPPY: readonly Wave[]
```

A choppy lake.

## 6. Characters

### type JumpKind

```ts
type JumpKind = 'Jump' | 'JumpUp' | 'DoubleJump' | 'TripleJump' | 'Backflip' | 'SideFlip' | 'LongJump' | 'WallKick' | 'JumpKick'
```

### KEYMAP

```ts
const KEYMAP: { readonly jump: readonly ["Space"]; readonly walk: readonly ["ShiftLeft", "ShiftRight"]; readonly crouch: readonly ["KeyC", "ControlLeft", "ControlRight"]; readonly prone: readonly ["KeyZ"]; readonly lie: readonly ["KeyX"]; readonly grab: readonly [...]; readonly attack: readonly [...]; readonly wave: readonly [......
```

Default key map for PlatformerCharacter. Movement is camera-relative for every preset
(strafing in first person; left/right only on a side-scroller lane, except while
climbing or hanging). Call from Game.fixedUpdate.

  WASD / arrows  move          Shift   walk / tiptoe
  Space          jump          C / Ctrl crouch (air: ground pound)
  Z              prone toggle  X        lie down / get up
  F (hold)       grab / pull   J        attack (punch, punch, kick; air: dive / kick)
  V              wave          B        sit

### interface MoveInput

- `move: Vector3`: Desired horizontal direction in world space, length 0..1.
- `walk?: boolean`: Walk / tiptoe modifier.
- `jump: boolean`
- `jumpHeld: boolean`
- `crouch: boolean`: Crouch (held).
- `crouchPressed?: boolean`: Crouch pressed this step (in the air: ground pound).
- `prone?: boolean`: Toggle prone (pressed).
- `lie?: boolean`: Toggle lying on the back (pressed).
- `grab?: boolean`: Grab / pull (held).
- `attack?: boolean`
- `wave?: boolean`
- `sit?: boolean`
- `face?: Vector3 | null`: First person: always face this direction and strafe.

### type MoveState

```ts
type MoveState = keyof typeof STATES
```

### class PlatformerCharacter

- `new PlatformerCharacter(physics: Physics, options: PlatformerOptions)`
- `readonly body: RAPIER.RigidBody`
- `readonly collider: RAPIER.Collider`
- `readonly kcc: RAPIER.KinematicCharacterController`
- `state: MoveState`
- `stateTime: number`
- `jumpKind: JumpKind`
- `facing: number`: Yaw in radians (0 = facing +Z).
- `readonly hvel: Vector3`: Horizontal velocity (world).
- `vy: number`
- `grounded: boolean`
- `stance: Stance`
- `anim: string`: Last animation clip requested (for tests / debug UI).
- `readonly stats: { jumps: number; landings: number; ledgeGrabs: number; pullUps: number; pushes: number; pulls: number; hurts: number; crushes: number; }`: Counters for tests/tooling.
- `groundCollider: number`: The collider under the feet (its handle; -1 in the air). A moving platform's, a conveyor's or a dynamic plank's: the character rides it (`move`).
- `weight: number`: How hard the character presses the dynamic floor it stands on (a rope bridge sags where it stands, a spring pad sinks), in the physics world's mass units (density × m³: a 1 m crate of density 2 weighs 2), under the world's gravity. 0 (the default): it rides d…
- `shove: number`: The most mass the character shoves at walking speed when it walks into a loose dynamic body (a swing door, a ball, a hanging bag, debris); heavier bodies move proportionally less. 0 (the default): dynamic bodies block like walls. Bodies tagged `pushable` are…
- `crushed: boolean`: A moving body is coming down on the head with the floor underneath: squeezed (a lift lowering onto the character, a crusher). `stats.crushes` counts each one; games decide what it does (hurt, respawn): the character itself just stays on the floor.
- `invulnerable: number`: Seconds left in which hits are ignored (after `hurt`). Games can blink the model meanwhile.
- `lookAt: Vector3 | null`: Something worth looking at (world position), set by the game: a coin, an enemy, a sign. Standing and walking, the head turns toward it (within its limits); null = look where the character is going.
- `climb: number`: Smoothed grade of the ground being covered (rise per metre; + = uphill).
- `get feet: Vector3`: Feet position (bottom of the capsule). Allocates: hot paths use `feetInto`.
- `feetInto(target: Vector3): Vector3`: `feet` without allocating: writes the feet position into `target`.
- `interpolatedFeet(alpha: number, target = new Vector3()): Vector3`: Feet between the last two fixed steps (render interpolation), into `target`.
- `get forward: Vector3`: Facing direction (horizontal, unit). Allocates: hot paths use `forwardInto`.
- `forwardInto(target: Vector3): Vector3`: `forward` without allocating.
- `get speed: number`
- `eye(alpha = 1): Vector3`: Eye position for first-person cameras.
- `setLockDepth(on: boolean): void`: Side-scroller lane lock on/off (locks to the current Z).
- `teleport(position: [number, number, number]): void`
- `jump(kind: JumpKind, input?: MoveInput): void`: Jump right now (no headroom: nothing happens). Normally the state machine decides.
- `hurt(fromDirection: Vector3, strength = 1): boolean`: Get hit: knocked back away from `fromDirection` (where the hit came from, e.g. enemy position minus hero position; only its horizontal part counts) in an arc, playing Hurt, with no control for ~0.4 s, then invulnerable for a moment (`invulnerable`). `strength…
- `launch(vy: number, o: { hvel?: Vector3; kind?: JumpKind } = {}): void`: Thrown into the air at `vy` m/s (a trampoline, a spring, a geyser): a jump whose arc no button can cut short. `hvel` replaces the horizontal velocity (default: kept).
- `celebrate(): void`: Celebrate (games call this, e.g. on level complete).
- `fixedUpdate(dt: number, input: MoveInput): void`
- `findLedge(feet: Vector3, dir: Vector3): Ledge | null`: Find a grabbable ledge in front of `feet` (facing `dir`).
- `uphillSpeed(): number`: Top running speed on this ground: Mario 64 slows going uphill (the steeper, the slower; too steep to stand on slides back, see checkSlope). Stairs count by their average climb.
- `setStance(stance: Stance, force = false): boolean`: Change collider height, keeping the feet planted. Growing needs headroom unless forced.
- `attachModel(model: Object3D, clips: readonly AnimationClip[], rig?: RigSpec): void`: Drive `model` with `clips`. Call again (e.g. on hot reload) to swap the clip set. With the model's `rig`, the procedural layers run too: foot placement on the real ground, leaning into turns, looking ahead, landing squash (docs/ANIMATION.md).
- `animationMix(): { name: string; weight: number; time: number; rate: number }[]`: Tooling: every clip currently contributing to the pose, with its blend weight and time (s).
- `footPlacement(): FootPlacementState | null`: Tooling: what foot placement did this frame (weight, pelvis drop, per-foot offsets and locks).
- `clipDuration(name: string, fallback: number): number`
- `animationFor(): AnimRequest`: Name of the clip the current state wants (the table's `anim`).
- `updateVisual(model: Object3D, dt: number, alpha: number): void`: Per render frame: orient the model, pick and advance animation, then the procedural layers.

### interface PlatformerOptions

- `position: [number, number, number]`
- `lockDepth?: boolean`: Side-scroller: keep the character on its starting Z lane.
- `runSpeed?: number`

### readMoveInput()

```ts
function readMoveInput(ctx: GameContext, character: PlatformerCharacter, out?: MoveInput): MoveInput
```

Read the default key map into a MoveInput. Pass `out` (kept by the game) to reuse it and
its `move` vector every step instead of allocating a new one.

## 7. Input and touch

### applyDeadzone()

```ts
function applyDeadzone(x: number, y: number, deadzone = 0.2): { x: number; y: number }
```

Radial deadzone with rescaling: inside `deadzone` reads 0, the rim reads 1, and the
direction is kept (no square-gate snapping to the axes).

### interface ButtonEvent

A pointer button pressed or let go (`Input.buttonEvents`): its key, and where the pointer was (normalised device coordinates).

- `readonly code: string`
- `readonly down: boolean`
- `readonly x: number`
- `readonly y: number`

### DEFAULT_TOUCH_BUTTONS

```ts
const DEFAULT_TOUCH_BUTTONS: readonly TouchButton[]
```

Default buttons for PlatformerCharacter (see character/controls.ts KEYMAP).

### GAMEPAD_BUTTONS

```ts
const GAMEPAD_BUTTONS: Readonly<Record<number, string>>
```

Standard-mapping gamepad buttons → the key codes they press (see character/controls.ts
KEYMAP). Change `input.gamepadButtons` to remap. Indices follow the W3C "standard" layout:
0 A · 1 B · 2 X · 3 Y · 4 LB · 5 RB · 6 LT · 7 RT · 8 Back · 9 Start · 12–15 d-pad.

### interface GamepadLike

The parts of the Gamepad API that Input reads (tests can pass plain objects).

- `readonly connected?: boolean`
- `readonly mapping?: string`
- `readonly axes: readonly number[]`
- `readonly buttons: readonly { readonly pressed: boolean; readonly value?: number }[]`

### class Input

Keyboard + pointer + gamepad input.
- Keys: held state, per-frame presses (`wasPressed`) and queued presses for fixed-step
  code (`consumePress`). Queued presses expire after `pressWindow` s of game time.
- Gamepads (standard mapping): the left stick feeds `moveAxis()` (radial deadzone), the
  right stick feeds the pointer delta (camera look), buttons press key codes
  (`gamepadButtons`). Polled once per frame by the engine (`beginFrame`).
- Pointer: accumulated movement per frame (while a button is held or the pointer is
  locked), wheel delta per frame, optional pointer lock (first-person). Mouse buttons on
  the canvas are keys too (`MOUSE_BUTTONS`: `MouseLeft`, `MouseRight`, `MouseMiddle`), and a
  finger is `Touch` (`TOUCH_KEY`), held and pressed like any other, so a click shorter than
  a frame is not lost.
- Commands (`send`): data from outside the canvas, delivered to the game…

- `new Input(target: Window = window)`
- `readonly mouseDelta: { x: number; y: number; }`: Pointer movement this frame, in CSS pixels (drag or pointer lock).
- `readonly pointer: { x: number; y: number; over: boolean; touch: boolean; }`: Where the pointer last was over the canvas, in normalised device coordinates (−1..1, y up: `camera.rayAt(pointer.x, pointer.y, …)` turns it into a ray), and whether it is over it now. Under pointer lock it is the screen's centre (the crosshair).
- `wheel: number`: Wheel ticks this frame (+1 = scroll down / zoom out).
- `wantsPointerLock: boolean`: When true, clicking the canvas requests pointer lock (first-person / free camera).
- `readonly analog: { x: number; y: number; }`: Touch joystick, -1..1 per axis; overrides keys when active.
- `readonly padAxis: { x: number; y: number; }`: Gamepad left stick after the deadzone, -1..1 (y = forward).
- `gamepadConnected: boolean`: True while any gamepad is connected.
- `readonly preventKeys: Set<string>`: Extra key codes whose browser default is blocked (arrows and Space always are): a game's own F1 / F2 / Tab panels, so the browser's help page or focus change doesn't fire.
- `gamepadButtons: Record<number, string>`: Gamepad button index → key code (defaults: GAMEPAD_BUTTONS).
- `gamepadDeadzone: number`: Stick deadzone (radial, 0..1).
- `gamepadLookSpeed: number`: Right stick look speed: pointer pixels per second at full tilt.
- `now: number`: Game time (s) of the current frame; set by the engine through `beginFrame`.
- `get playing: boolean`: True while a replay drives input (`engine.replay()`): keyboard, pointer and wheel events, `setKey` / `setPointer` / `setButtons` / `addPointer` (touch buttons, scripts) and `send` are ignored, and `playBefore` / `playAfter` set everything.
- `pressWindow: number`: Queued presses older than this many seconds of game time are dropped.
- `attachPointer(el: HTMLElement): void`: Listen for pointer input on the game canvas. Only pointers that went down on the canvas drive the camera (so a touch joystick doesn't orbit it). Two canvas touches pinch to zoom (emitted as wheel ticks).
- `dispose(): void`: Remove every listener this Input added (window and canvas).
- `release(): void`: Let go of everything held (keys, gamepad buttons, sticks, pointer buttons); queued presses stay.
- `reset(): void`: Forget held keys, presses, sticks and pointer movement (e.g. when a level loads).
- `beginFrame(now: number, dt: number, pads?: readonly (GamepadLike | null)[]): void`: Engine: begin a frame at game time `now` (seconds). Polls gamepads and drops expired queued presses. `pads` defaults to `navigator.getGamepads()`; tests can pass fakes.
- `get pointerLocked: boolean`
- `isDown(...codes: string[]): boolean`
- `anyDown(codes: readonly string[]): boolean`: `isDown` for a list of codes, without building a rest-argument array (fixed-step code).
- `wasPressed(...codes: string[]): boolean`: True once per physical key press (valid for the current render frame).
- `consumePress(...codes: string[]): boolean`: True once per physical key press, kept until consumed or until it is older than `pressWindow` (150 ms of game time). Use from fixed-step code (which may run zero or several times per frame) so no press is dropped, while a stale press (made during a pause, a l…
- `consumeAny(codes: readonly string[]): boolean`: `consumePress` for a list of codes, without building a rest-argument array.
- `state(): InputState`: Held keys, queued presses and the pointer as data (`engine.snapshot()`), between frames.
- `setState(s: InputState, now: number): void`: Back to `state()` at game time `now` (a restore): held keys are those the snapshot held, live ones let go.
- `get queuedPresses: string[]`: Presses waiting to be consumed (tooling / tests).
- `clearQueued(...codes: string[]): void`: Drop queued presses (e.g. when a menu or mode swallows input).
- `moveAxis(): { x: number; y: number }`: -1..1 on each axis (x = right, y = forward): the touch joystick or a gamepad's left stick (whichever is tilted further), else WASD / arrow keys / d-pad.
- `endFrame(): void`: Call at the end of each rendered frame.
- `setKey(code: string, down: boolean): void`: Test hook: simulate a key being held (true) or released (false).
- `setPointer(x: number, y: number, down?: boolean): void`: Test hook: put the pointer at (x, y) in normalised device coordinates, pressed or not.
- `setButtons(bits: number): void`: Test hook: hold mouse buttons (`PointerEvent.buttons` bits: 1 left, 2 right, 4 middle) as the canvas would.
- `get mouseButtons: number`: Buttons held, as `PointerEvent.buttons` bits (1 left, 2 right, 4 middle; a finger is left): the same keys as `isDown('MouseLeft')`.
- `get buttonEvents: readonly ButtonEvent[]`: This frame's pointer button presses and releases, in order, each with where the pointer was: a drag shorter than a frame (a script's) still starts where it started and ends where it ended. Recorded with the frame. UI that acts on clicks reads these; play read…
- `send(command: unknown): void`: Hand the game data from outside the canvas: a DOM widget's value, a file the player picked, a save read from storage, anything a game would otherwise take straight from the page. It arrives in `commands` at the next frame the game runs, and the recording keep…
- `get commands: readonly unknown[]`: This frame's commands (`send`), oldest first; empty on most frames. They last one rendered frame: read them in `update` (`fixedUpdate` runs zero or more times a frame).
- `deliver(): void`: Engine: a live frame begins to run: what was sent since the last one becomes its `commands`.
- `addPointer(dx: number, dy: number, wheel = 0): void`: Test hook: inject pointer movement / wheel for the next frame.
- `snapshot(dt: number, last?: SnapshotMemory): InputFrame`: This frame's input as data (after `beginFrame`), for a recording. `last` is the frame before: unchanged held keys, pointer and gamepad connection are left out.
- `playBefore(f: InputFrame): void`: Replay, before the engine's `beginFrame`: the frame's held keys and presses (presses queue at the time they would have arrived, the frame before's game time).
- `playAfter(f: InputFrame): void`: Replay, after `beginFrame` (which polled no gamepads): sticks, pointer, wheel, gamepad connection.

### interface InputFrame

What the game could read from input in one frame (a recorded frame, see src/engine/replay.ts).
Optional fields are left out when empty or zero; `held` and `pointer` also when unchanged
from the frame before.

- `dt: number`: Real seconds this frame lasted (game time follows from it).
- `held?: string[]`: Keys held, keyboard and gamepad buttons together, sorted.
- `pressed?: string[]`: Keys pressed since the frame before (a tap can be pressed and not held).
- `analog?: [number, number]`: The touch joystick and the gamepad's left stick (after its deadzone).
- `pad?: [number, number]`
- `delta?: [number, number]`: Pointer movement (CSS pixels) and wheel ticks this frame.
- `wheel?: number`
- `pointer?: [number, number, number, number]`: Pointer position (normalised device coordinates), over the canvas (1/0), buttons (`mouseButtons`: what `held` says).
- `gamepad?: boolean`: Whether a gamepad is connected (`gamepadConnected`), when that changes.
- `touch?: boolean`: Whether the pointer is a touch (`pointer.touch`), when that changes.
- `clicks?: [string, 0 | 1, number, number][]`: Pointer buttons pressed (1) and let go (0) this frame, in order, each where the pointer was (`buttonEvents`).
- `commands?: unknown[]`: Data from outside the canvas delivered this frame (`send()`): a DOM widget's value, a save read from storage.
- `sync?: true`: Ran in the same task as the frame before (frames of one `step(n)` call): no promise callbacks ran between them. A replay waits for them before every other frame.

### interface InputState

What input a later frame still reads, as data (`engine.snapshot()`): keys held, presses not yet used and how old they are, the pointer.

- `readonly held: readonly string[]`
- `readonly queued: readonly (readonly [string, number])[]`: Queued presses: [key, seconds of game time since it was pressed].
- `readonly pointer: readonly [number, number, number, number]`
- `readonly gamepad: boolean`
- `readonly outbox: readonly unknown[]`: Data sent (`send`) and not yet delivered: the next frame that runs delivers it.

### MOUSE_BUTTONS

```ts
const MOUSE_BUTTONS: readonly (readonly [code: string, bit: number])[]
```

Mouse buttons as key codes (`isDown('MouseLeft')`, `consumePress('MouseRight')`), each with
its `PointerEvent.buttons` bit, by `PointerEvent.button` (0 left, 1 middle, 2 right).

### PRESS_WINDOW

```ts
const PRESS_WINDOW: 0.15
```

How long a queued press stays consumable, in seconds of game time.

### TOUCH_KEY

```ts
const TOUCH_KEY: "Touch"
```

A finger on the canvas, as a key: held while one is down (not a mouse button, so a tap is not a click).

### interface TouchButton

- `label: string`
- `code: string`: Key code this button presses (e.g. 'Space').
- `hint?: string`: Short hint shown under the label.
- `at?: { x: number; y: number; size?: number; corner?: TouchCorner }`: Place the button yourself instead of in the default grid: its centre, in CSS pixels from `corner` (default bottom-right; `x` grows inward from the side, `y` inward from the top or bottom edge), and its diameter (`size`, default 58). An action game's cluster (…

### interface TouchButtonState

What a button shows right now (`TouchControls.set`): a game drives its buttons from its own
state each frame (skill icons, cooldowns, costs, a contextual action). Only what changed
touches the DOM.

- `label?: string`
- `hint?: string`
- `icon?: HTMLCanvasElement | HTMLImageElement | null`: A picture instead of the label (a canvas or image; drawn pixelated); null removes it.
- `cooldown?: number`: Cooldown shutter, 0..1 of the button covered (0 = ready).
- `timer?: string`: Text over the shutter (seconds left).
- `badge?: string`: A small corner badge (a cost, a count).
- `disabled?: boolean`: Dimmed (can't be used now); it still presses its key.
- `hidden?: boolean`: Not shown (its place is kept), and its key is released.

### class TouchControls

On-screen controls for phones and tablets: a virtual joystick (bottom-left) that feeds
`input.analog`, action buttons (bottom-right, in a grid or placed one by one with `at`)
that press key codes, and a small top bar (debug panel, Pixel/Raw, resolution, looks).
Camera: drag on the game to orbit/look, pinch to zoom (handled by Input.attachPointer).
Shown automatically on coarse pointers, or with `?touch=1`.

A game drives it at runtime: `set(code, state)` (icon, cooldown, badge, disabled, hidden),
`show(false)` while a menu owns the screen, and `rects()` to lay its HUD out around the
controls.

- `new TouchControls(container: HTMLElement, input: Input, buttons: readonly TouchButton[] = DEFAULT_TOUCH_BUTTONS, topBar: readonly TouchButton[] = [])`
- `static wanted(search = location.search): boolean`
- `readonly root: HTMLDivElement`
- `set(code: string, state: TouchButtonState): void`: Update every button that presses `code` (see TouchButtonState).
- `show(on: boolean): void`: Show or hide the joystick and the action buttons (the top bar stays): hide them while a menu or a full-screen view owns the screen. Hiding releases every held key and the stick.
- `get visible: boolean`
- `rects(): { stick: DOMRect | null; buttons: { code: string; label: string; hidden: boolean; rect: DOMRect }[]; bar: DOMRect | null }`: Client rects (CSS pixels) of the controls on screen now: the joystick and every button, with the key code it presses. A hidden button keeps its place (`hidden` says it isn't drawn), so a HUD laid out around them doesn't move when a contextual button comes and…

### type TouchCorner

```ts
type TouchCorner = 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
```

Corner of the screen a placed touch button is measured from (inside the safe area).

## 8. Audio

### attenuation()

```ts
function attenuation(distance: number, o: SpatialOptions = {}): number
```

Volume at `distance` (m): 1 inside `ref`, then inverse distance, fading to 0 at `max`.

### class AudioManager

Web Audio for games: procedural retro sound effects (`SFX`, data), a small chiptune
sequencer (`Song`, data), optional audio files, and master / sfx / music volume + mute
persisted in localStorage. Available as `ctx.audio`.

Browsers only allow sound after a user gesture, so the AudioContext is created on the
first key / pointer / touch input. Before that, and wherever Web Audio does not exist
(headless tests, old browsers), every call is a silent no-op that still records what
was played in `log`, so games behave identically and tests can assert on sounds.

- `new AudioManager(target: EventTarget | null = typeof window !== 'undefined' ? window : null)`
- `static get supported: boolean`: Web Audio exists in this environment.
- `readonly sounds: Map<string, SoundDef>`: Sound registry: the built-in SFX plus anything registered or loaded.
- `readonly log: { name: string; at: number }[]`: The most recent plays (name and game-independent wall time), newest last; tooling/tests.
- `readonly counts: Record<string, number>`: How many times each sound was requested.
- `context: AudioContext | null`
- `get unlocked: boolean`: True once the AudioContext is running (after the first user input).
- `get volume: Readonly<AudioSettings>`: Current volumes and mute (persisted).
- `get muted: boolean`
- `get playing: string`: Name of the playing song ('' when none).
- `unlock(): void`: Create / resume the AudioContext. Called automatically on the first user input; call it yourself from a click handler if you start sound from your own UI.
- `register(name: string, def: SoundDef): void`: Add or replace a sound effect (data, see SoundDef).
- `play(sound: string | SoundDef, options: PlayOptions = {}): boolean`: Play a sound effect by name (built-in SFX, `register`ed or `load`ed) or directly from a SoundDef. Returns false when nothing could be heard (locked, muted, no Web Audio).
- `loop(sound: string | SoundDef, settings: VoiceSettings = {}): Voice`: Start a sound looping, as a voice you steer while it plays (volume, pan, muffle, pitch: with `spatialize` it sits at a place in the world). Before the first user input, or with no Web Audio, the voice keeps its settings silently and starts once audio unlocks.…
- `get loops: readonly Voice[]`: Voices playing or waiting to (tooling and tests).
- `stopLoops(): void`: Stop every looping voice (the engine does this when a level unloads).
- `load(name: string, url: string): Promise<void>`: Load an audio file (wav/ogg/mp3…) under `name`; `play(name)` then plays it. Works before the first user input too: the file is decoded once audio unlocks.
- `playMusic(song: Song | null, name = 'song'): void`: Start a song (looping by default), replacing the current one. `null` stops music.
- `stopMusic(): void`
- `persist: boolean`: Volume changes are written to storage. The engine turns this off while a replay plays: the recording sets the volumes it set, nothing is written, and the player's come back after.
- `setVolume(channel: VolumeChannel, value: number): void`
- `setMuted(muted: boolean): void`
- `toggleMute(): boolean`
- `resetVolumes(): void`: The default volumes, sound on (the settings panel's Reset).
- `update(): void`: Engine: once per rendered frame. Schedules the next notes of the song.
- `dispose(): void`: Stop everything and close the AudioContext.

### interface AudioSettings

- `master: number`
- `sfx: number`
- `music: number`
- `muted: boolean`

### type Instrument

```ts
type Instrument = Omit<SoundDef, 'freq' | 'freqEnd' | 'sustain' | 'delay'>
```

A track's instrument: a SoundDef without pitch or length (each note sets those).

### interface Listener

- `position: V3Like`
- `right: V3Like`: The listener's right, in world space (unit): the camera's right for a third-person game.

### muffleCutoff

```ts
const muffleCutoff: (muffle: number) => number
```

Low-pass cutoff (Hz) for a muffle of 0..1: wide open to a dull thud.

### noteFrequency()

```ts
function noteFrequency(note: string): number | null
```

'A4' → 440, 'C#5', 'Eb3'… Returns null for anything that is not a note.

### parseSong()

```ts
function parseSong(song: Song): ParsedSong
```

Flatten a song into timed notes. Throws on malformed patterns, so tests catch typos.

### PLAYGROUND_SONG

```ts
const PLAYGROUND_SONG: Song
```

The playground's short looping track: C major, bouncy, 2 × 16 steps.

### interface PlayOptions

- `volume?: number`: 0..1 multiplier on the sound's own volume.
- `pitch?: number`: Pitch shift in semitones (playback rate), e.g. a rising combo.
- `pan?: number`: Stereo position -1 (left) .. 1 (right).

### renderSound()

```ts
function renderSound(def: SoundDef, sampleRate = 44100, seed = 1): Float32Array<ArrayBuffer>
```

Render a sound to mono samples in -1..1.

### SFX

```ts
const SFX: { jump: { wave: "square"; duty: number; freq: number; freqEnd: number; attack: number; sustain: number; decay: number; volume: number; }; doubleJump: { wave: "square"; duty: number; freq: number; freqEnd: number; ... 5 more ...; volume: number; }; ... 8 more ...; fanfare: { ...; }; }
```

Built-in retro sound effects, as data. Tweak numbers here (or register your own with
`ctx.audio.register(name, def)`) and every `ctx.audio.play(name)` picks them up.
See docs/ENGINE.md (Audio) for the SoundDef fields.

### type SfxName

```ts
type SfxName = keyof typeof SFX
```

### interface Song

A chiptune song as data. Each pattern holds one string per track: space-separated steps,
where a step is a note ('C4', 'F#5', 'Bb2'), '.' (rest) or '-' (hold the previous note).
Every track of a pattern must have the same number of steps. For `noise` tracks the
note's pitch is the noise rate: C6 is a snare-ish hiss, C8 a hi-hat tick.

- `bpm: number`
- `stepsPerBeat?: number`: Steps per beat (4 = sixteenth notes). Default 4.
- `tracks: Record<string, Instrument>`
- `patterns: Record<string, Record<string, string>>`
- `order: readonly string[]`: Pattern names in play order.
- `loop?: boolean`: Loop forever (default true).

### interface SoundDef

- `wave: Wave`
- `freq: number`: Start pitch in Hz. For `noise` it is the sample-and-hold rate (higher = hissier).
- `freqEnd?: number`: End pitch for a sweep (exponential glide from `freq`).
- `sweepTime?: number`: Seconds the sweep takes (default: the whole sound).
- `duty?: number`: Square duty cycle: 0.125, 0.25 or 0.5 are the classic NES widths. Default 0.5.
- `attack?: number`: Envelope (seconds): ramp up, hold at full volume, then fade out.
- `sustain?: number`
- `decay?: number`
- `volume?: number`: Peak level 0..1 (default 0.5).
- `arp?: readonly number[]`: Arpeggio: semitone offsets stepped every `arpRate` seconds (the coin "ba-ding").
- `arpRate?: number`
- `vibrato?: { depth: number; rate: number }`: Vibrato depth in semitones and rate in Hz.
- `crush?: number`: Quantize to this many levels (4-bit style crunch). 0 = off.
- `delay?: number`: Seconds of silence before the sound starts (for layers).
- `layers?: readonly SoundDef[]`: Extra sounds mixed in (e.g. a noise burst under a thump).

### interface Spatial

- `gain: number`: 0..1 volume.
- `pan: number`: -1 (left) .. 1 (right).
- `distance: number`

### spatialize()

```ts
function spatialize(listener: Listener, at: V3Like, o: SpatialOptions = {}): Spatial
```

Gain and pan of a sound at `at` for `listener`.

### interface SpatialOptions

- `ref?: number`: Within this distance (m) the sound is at full volume (default 1).
- `max?: number`: Silent from this distance on (default 30); it fades out over the last fifth.
- `rolloff?: number`: How fast it falls off past `ref` (default 1: inverse distance, the way sound really does).

### interface Voice

A looping sound steered while it plays (`AudioManager.loop`): a hum, a fire, a waterfall.

- `readonly name: string`
- `readonly settings: Readonly<Required<VoiceSettings>>`: The values last set (kept headless too, so games and tests can read them).
- `readonly sounding: boolean`: Really sounding: Web Audio running and the loop started.
- `readonly stopped: boolean`
- `set(s: VoiceSettings): void`: Change any of its settings; they glide over a few hundredths of a second (no clicks).
- `stop(): void`

### interface VoiceSettings

- `volume?: number`: 0..1 (default 1).
- `pan?: number`: Stereo position -1 (left) .. 1 (right).
- `muffle?: number`: 0 (clear) .. 1 (behind a thick wall, under water): a low-pass filter closing down.
- `pitch?: number`: Pitch shift in semitones.

### type VolumeChannel

```ts
type VolumeChannel = 'master' | 'sfx' | 'music'
```

### type Wave

```ts
type Wave = 'square' | 'triangle' | 'saw' | 'sine' | 'noise'
```

Retro sound synthesis as pure functions (no Web Audio): a sound is data (`SoundDef`)
rendered to samples once, then played as a buffer. Deterministic (seeded noise), so
sounds are unit-testable and identical on every machine.

## 9. Particles

### interface BurstOptions

- `count?: number`: Override the particle count.
- `direction?: Vec3`: Override the launch direction (e.g. opposite to a skid).
- `speed?: number`: Multiply launch speed.
- `scale?: number`: Multiply size.
- `colors?: readonly PaletteColor[]`: Override the colors for this burst.

### class ParticlePool

Fixed-size particle storage with CPU simulation. Alive particles are packed at the
front (swap-remove), so the GPU draws exactly `alive` instances from one buffer.
Pure (no three.js): unit-tested.

- `new ParticlePool(preset: ParticlePreset)`
- `readonly max: number`
- `alive: number`
- `readonly pos: Float32Array`
- `readonly vel: Float32Array`
- `readonly age: Float32Array`
- `readonly life: Float32Array`
- `readonly size0: Float32Array`
- `readonly size1: Float32Array`
- `readonly colorSet: Uint8Array`: Index into `colorSets` per particle.
- `readonly colorSets: (readonly PaletteColor[])[]`: Color lists in use: [0] is the preset's, bursts with custom colors add more.
- `readonly preset: ParticlePreset`
- `spawn(at: Vec3, o: BurstOptions = {}, random: () => number = this.ownRandom): number`: Spawn a burst at `at`. Returns how many particles were spawned (the pool may be full). `random` in [0, 1): seeded, so bursts repeat.
- `step(dt: number): void`: Advance every particle by `dt` seconds and drop the dead ones.
- `t(i: number): number`: Life fraction 0..1 of particle `i`.
- `sizeAt(i: number): number`: Size in whole art pixels (0 = invisible).
- `colorAt(i: number): PaletteColor`: Current palette color name: stepped through the particle's color list.
- `clear(): void`

### interface ParticlePreset

A particle effect as data. Sizes are in art pixels (whole pixels, so particles stay crisp
squares), colors are palette names stepped over each particle's life (no blending).

- `count: Range`: Particles per burst.
- `life: Range`: Seconds each particle lives.
- `speed: Range`: Launch speed, world units / s.
- `direction?: Vec3`: Main launch direction (default straight up).
- `spread?: number`: Cone half-angle around `direction`, degrees (180 = every direction). Default 180.
- `flatten?: number`: Multiply vertical launch speed (0.2 = dust that hugs the ground). Default 1.
- `gravity?: number`: Downward acceleration, world units / s² (negative floats up). Default 0.
- `drag?: number`: Velocity damping per second (0 = none).
- `size: readonly [number, number]`: Size in art pixels at birth and at death (rounded to whole pixels).
- `colors: readonly PaletteColor[]`: Palette colors stepped through over the lifetime.
- `radius?: number`: Random spawn offset radius, world units.
- `max?: number`: Pool size (max alive at once). Default 256.

### type ParticlePresetName

```ts
type ParticlePresetName = keyof typeof PARTICLES
```

### class Particles

Pixel-art particles: CPU-simulated pools, drawn as camera-facing square sprites in flat
palette colors. One emitter (one instanced draw call, one pooled instance buffer) per
preset; sizes are whole art pixels, so in Pixel mode a particle is a crisp N×N block.
Available as `ctx.particles`; emitters are created on first use and freed by `clear()`
(the engine calls it when a level unloads).

  ctx.particles.burst('dust', hero.feet);
  ctx.particles.burst('skid', feet, { direction: [-vx, 0.3, -vz], count: 2 });

- `new Particles(view: () => ParticleView)`
- `readonly group: Group<Object3DEventMap>`: Engine-owned group holding every emitter.
- `readonly presets: Map<string, ParticlePreset>`: Preset registry: the built-ins plus anything registered.
- `readonly pixelWorld: UniformNode<"float", number>`: World units per art pixel at the camera focus (updated every frame).
- `register(name: string, preset: ParticlePreset): void`: Add or replace a named preset. Replacing frees the old preset's emitter.
- `burst(preset: string | ParticlePreset, at: Vector3 | readonly [number, number, number], options: BurstOptions = {}): number`: Spawn a burst of `preset` (a name or a ParticlePreset) at `at`. Returns the number of particles spawned (fewer when the pool is full, 0 for an unknown preset). Inline preset objects share one emitter per distinct content, so `burst({ ...literal }, at)` every…
- `get alive: number`: Particles alive right now, over all emitters.
- `get emitterCount: number`: Emitters (= draw calls at most) currently allocated.
- `update(dt: number): void`: Simulate and upload. Called by the engine every frame (frozen while paused).
- `reseed(rng: Rng): void`: Take bursts' randomness from `rng` (the engine passes each level's `ctx.random` fork).
- `clear(): void`: Kill every particle and free the emitters (GPU buffers, materials).
- `dispose(): void`

### PARTICLES

```ts
const PARTICLES: { dust: { count: [number, number]; life: [number, number]; speed: [number, number]; spread: number; flatten: number; gravity: number; drag: number; size: [number, number]; colors: ("white" | "mist" | "slate")[]; radius: number; }; skid: { ...; }; sparkle: { ...; }; smoke: { ...; }; impact: { ...; }; }
```

Built-in particle effects, as data (see ParticlePreset). Register more with
`ctx.particles.register(name, preset)`. Sizes are art pixels; colors are PALETTE names.

## 10. HUD

### class Hud

Pixel HUD: crisp text and icons drawn in art pixels on top of the game, never through
the post filters. It is a 2D canvas at the internal resolution (480×270 / 320×180),
laid over the game canvas with the same integer scale and letterbox offset
(`framing.ts`), so one HUD pixel is exactly one art pixel at every resolution.

Retained: what you add stays on screen until `clear()`. Redraw everything each frame
(clear + add) or only when something changes; the canvas repaints only when the content,
resolution or framing changed. Available as `ctx.hud`.

  ctx.hud.clear();
  ctx.hud.text(4, 4, `COINS ${n}/12`, { color: 'sand' });
  ctx.hud.text(4, 4, 'PAUSED', { anchor: 'center', scale: 2 });

- `new Hud(container: HTMLElement | null)`
- `canvas: HTMLCanvasElement | null`: The overlay canvas (created on the first draw; null when nothing was ever drawn).
- `visible: boolean`
- `get width: number`: HUD width/height in art pixels (the internal resolution).
- `get height: number`
- `text(x: number, y: number, text: string, options: HudOptions = {}): void`: Text in the 5×7 bitmap font (uppercase; digits and common punctuation).
- `rect(x: number, y: number, w: number, h: number, color: HudColor, anchor: HudAnchor = 'top-left'): void`: A filled rectangle (panels, bars).
- `sprite(x: number, y: number, rows: readonly string[], colors: Record<string, HudColor>, options: HudOptions = {}): void`: A tiny pixel-art icon as data: one string per row, one character per pixel, mapped through `colors` ('.' or ' ' = transparent).
- `clear(): void`: Remove everything.
- `measure(text: string, scale = 1): { width: number; height: number }`: Size of `text` in art pixels at `scale`.
- `sync(resolution: Resolution, framing: Framing): void`: Engine: follow the renderer's resolution and framing, and repaint if needed.
- `dispose(): void`

### type HudAnchor

```ts
type HudAnchor = 'top-left' | 'top' | 'top-right' | 'left' | 'center' | 'right' | 'bottom-left' | 'bottom' | 'bottom-right'
```

Where an element is attached on screen; it is also aligned that way (right-anchored text grows left).

### type HudColor

```ts
type HudColor = PaletteColor | number
```

### interface HudOptions

- `color?: HudColor`: Default 'white'.
- `shadow?: HudColor | false`: 1-pixel drop shadow color, or false. Default 'ink'.
- `scale?: number`: Integer art-pixel scale (2 = double-size glyphs). Default 1.
- `anchor?: HudAnchor`: Default 'top-left': x/y are offsets from that screen corner/edge, in art pixels.

### hudPlace()

```ts
function hudPlace(x: number, y: number, w: number, h: number, anchor: HudAnchor, size: Resolution): [number, number]
```

Top-left corner, in whole art pixels, of a w×h element placed at offset (x, y) from
`anchor` on a screen of `size` art pixels. Pure (unit-tested).

## 11. Models and textures (ASSETS.md)

### addModelColliders()

```ts
function addModelColliders(physics: Physics, build: Pick<ModelBuild, 'colliders'>, at: Vec3 = [0, 0, 0], yaw = 0): RAPIER.Collider[]
```

Static Rapier colliders for a placed model (its `colliders` data), at `at` turned `yaw`
radians about Y: a box, an upright cylinder or a convex hull, with `addStaticBox`'s friction.

### around()

```ts
function around(n: number, part: Each<[i: number]>, o: { r?: number; phase?: number } = {}): Part[]
```

`n` copies turned about Y, `360 / n` degrees apart from `phase`. `r` first pushes each copy
out along its own +Z; with the default 0 the part's own `at` places it.

### assetProgress()

```ts
function assetProgress(): number
```

Progress of every model requested so far: 0..1 (bytes where known, else files).

### interface BakedTexture

- `readonly id: string`
- `readonly width: number`
- `readonly height: number`
- `readonly indices: Uint8Array`: Per texel, row by row from the top: the slot's index in `slots` + 1, or 0 (transparent).
- `readonly slots: readonly TexSlot[]`: The palette's slots, in order.
- `readonly rgba: Uint8Array`: RGBA per texel (sRGB), row by row from the top; transparent texels are 0, 0, 0, 0.
- `readonly problems: readonly string[]`

### bakeTexture()

```ts
function bakeTexture(def: TextureDef, opts: BakeOptions = {}): BakedTexture
```

### boxFrame()

```ts
function boxFrame(o: { size: Vec3; beam: number; at?: Vec3; c?: Slot; name?: string }): GroupPart
```

The 12 beams along the edges of a box of outer size `size` centred on `at`: crates, cages,
windows.

### buildModel()

```ts
function buildModel(idOrDef: string | ModelDef, opts: ModelOptions = {}): ModelBuild
```

### class Catalog

- `new Catalog(defs: readonly T[] = [], kind = 'def', tool = '')`
- `add(...defs: readonly T[]): this`: Add defs; an id that is already taken throws.
- `has(id: string): boolean`
- `get(id: string): T`
- `all(): T[]`
- `find(q: { tags?: readonly string[]; text?: string } = {}): T[]`: Defs with every tag in `tags` whose id, about or tags contain every word of `text`.
- `search(text: string, o: SearchOptions = {}): T[]`: Defs ranked by how well they match `text`, best first (`searchDefs`).

### interface CatalogEntry

Defs by id: the engine's built-in libraries (`MODEL_LIBRARY`, `TEXTURE_LIBRARY`) and a game's
own. Ids are how parts, layers and saves refer to defs, so an id names one def per catalog.

- `readonly id: string`
- `readonly about: string`
- `readonly tags: readonly string[]`

### checkModel()

```ts
function checkModel(idOrDef: string | ModelDef, opts: CheckOptions = {}): ModelCheck
```

Every check over the model's range: the defaults, then each param at its min and at its max
(one at a time), each at seeds 1, 2 and 3 when the parts read the rng. Messages say which
build they came from unless every build agrees.

### decodePng()

```ts
function decodePng(bytes: Uint8Array, inflate: Inflate): RgbaImage
```

Decode a PNG file's bytes to RGBA (see the file comment for what it reads).

### DEFAULT_TEXEL

```ts
const DEFAULT_TEXEL: 8
```

Texels per metre for `tex` parts when the def doesn't set `texel`: the densest Gate B passed for
surfaces the camera zooms over (docs/ASSETS.md, *Texel density*). A model that moves may set
up to `MOVING_TEXEL`.

### interface ExpandedModel

A model as plain data: no functions, no `use`, every primitive with its slot.

- `readonly id: string`
- `readonly about: string`
- `readonly tags: readonly string[]`
- `readonly palette: Readonly<Record<Slot, Binding>>`
- `readonly params: Readonly<Record<string, number>>`
- `readonly seed: number`
- `readonly parts: readonly Part[]`
- `readonly size?: Vec3`
- `readonly anchors?: Readonly<Record<string, Anchor>>`
- `readonly light?: ModelLight`
- `readonly collider: 'box' | 'cyl' | 'hull' | 'parts' | 'none'`
- `readonly texel?: number`
- `readonly floats?: boolean`
- `readonly source?: Provenance`

### expandModel()

```ts
function expandModel(idOrDef: string | ModelDef, opts: ModelOptions = {}): ExpandedModel
```

The plain-JSON form of a model: params applied, `use` resolved (throws a ModelError on problems).

### gridOf()

```ts
function gridOf(nx: number, nz: number, step: number | readonly [number, number], part: Each<[ix: number, iz: number]>): Part[]
```

`nx × nz` copies on the floor plane, copy (ix, iz) offset by `(ix × sx, 0, iz × sz)`.

### groupVariants()

```ts
function groupVariants(defs: readonly T[]): VariantGroup<T>[]
```

Defs grouped by `variantName`: each group where its first def was, that def standing for it
(in a ranked list, the best match of its variants). Search results and listings read shorter:
one entry for a rock and its five variants, where an agent pays for every line it reads.

### hudSprite()

```ts
function hudSprite(idOrDef: string | TextureDef, o: TextureOptions & { frame?: number } = {}): { rows: string[]; colors: Record<string, PaletteColor | number> }
```

One frame as `hud.sprite` rows and colours: a character per slot (a, b, c, … in palette order),
'.' for transparent.

  const s = hudSprite('gem-icon'); hud.sprite(8, 8, s.rows, s.colors, { scale: 2 });

### class ImportError

A file the importer can't read, with what is wrong and what to do.

- `new ImportError(message: string)`

### importSheet()

```ts
function importSheet(img: RgbaImage, o: SheetImportOptions): SheetImport
```

Slice a pixel-art sheet into TextureDefs (see the file comment). Throws `ImportError` saying what to fix.

### LICENCES

```ts
const LICENCES: Readonly<Record<string, LicenceTerms>>
```

### loadModel()

```ts
function loadModel(url: string, options?: ToonifyOptions): Promise<Model>
```

Load a local GLB (e.g. `assets/hero.glb` from /public) once; every call returns a fresh
clone whose materials are converted to the engine's toon materials.

### loadPack()

```ts
function loadPack(url: string, opts: { readonly into?: ModelCatalog; readonly textures?: TextureCatalog } = {}): Promise<ModelCatalog>
```

Load a pack of imported models and textures (`public/packs/<pack>.json`, docs/ASSETS.md
*Importing*) once, the way `loadModel` loads a GLB: the URL resolved the same way (under the
base URL; a page may put a data URL for it in `__PIXEL_ASSETS__`, as single-file builds do for
every `packs/<id>.json` path the built code names, cut to the models it names), counted by
`assetProgress`. Resolves to a catalog of the
pack's ModelDefs, to build from with `buildModel(id, { catalog })`; `into` also adds them to a
catalog of yours (e.g. `MODEL_LIBRARY`, so `use` finds them), and `textures` gets the pack's
TextureDefs (e.g. `TEXTURE_LIBRARY`, so `textureMap(id)` and `hudSprite(id)` find them).

### loadPackIndex()

```ts
function loadPackIndex(url = 'packs/index.json'): Promise<PackIndex>
```

The packs a site carries (`public/packs/index.json`, written by the importers): each pack's
id, title, file (relative to the index), how many models and textures it holds, its licence
and author. Load one with `loadPack(new URL(entry.file, indexUrl))`, or `packs/<file>`.

### meanColour()

```ts
function meanColour(b: BakedTexture): number
```

The mean colour of the opaque texels (0xrrggbb, sRGB): what a textured surface reads as from afar.

### model()

```ts
function model(def: T): T
```

Returns the def as written, typed, so tuples and literals don't widen.

### interface Model

- `scene: Object3D`
- `animations: AnimationClip[]`

### MODEL_FAMILIES

```ts
const MODEL_FAMILIES: Readonly<Record<string, readonly string[]>>
```

The library's families (one file each, src/engine/model/library/<family>.ts) in order: each
family's model ids. Browse by family (the Asset Gallery's shelves, LIBRARY.md's sections).

### MODEL_LIBRARY

```ts
const MODEL_LIBRARY: ModelCatalog
```

The engine's built-in models (src/engine/model/library/<family>.ts). Games add their own
(`MODEL_LIBRARY.add(def)`) or build a catalog on top of it; `npm run model -- find` lists them.

### type ModelBinding

```ts
type ModelBinding = PaletteColor | number
```

What a slot is bound to at build time: a PALETTE name, or a computed colour (hex).

### interface ModelBuild

- `readonly id: string`
- `readonly object: Group`: Named after the model; pivots are named Groups inside it.
- `readonly bounds: Bounds`
- `readonly anchors: Readonly<Record<string, { readonly at: Vec3; readonly rot: Vec3 }>>`
- `readonly colliders: readonly ColliderData[]`
- `readonly light: ModelLightRequest | null`
- `readonly report: ModelReport`

### class ModelCatalog

Models by id: the engine's built-in library (`MODEL_LIBRARY`) or a game's own. `use` parts
and `buildModel('id')` resolve ids through one (the library unless a build passes another);
a game adds its models to the library, or builds a catalog of its own on top of it.

- `new ModelCatalog(defs: readonly ModelDef[] = [])`

### interface ModelCheck

- `readonly id: string`
- `readonly problems: readonly string[]`
- `readonly warnings: readonly string[]`
- `readonly metrics: ModelMetrics | null`: At the default params and seed (null when it can't be built).

### type ModelCollider

```ts
type ModelCollider = | { readonly kind: 'box'; readonly center: Vec3; readonly half: Vec3 } | { readonly kind: 'cyl'; readonly center: Vec3; readonly radius: number; readonly halfHeight: number } | { readonly kind: 'hull'; readonly points: readonly number[] }
```

### interface ModelDef

- `readonly id: string`
- `readonly about: string`: One line, searched by `find`.
- `readonly tags: readonly string[]`
- `readonly palette: Readonly<Record<Slot, PaletteColor>>`
- `readonly size?: Vec3`: Declared bounds, checked (10% slack).
- `readonly params?: Readonly<Record<string, ParamSpec>>`
- `readonly parts: readonly Part[] | ((p: Readonly<Record<string, number>>, rng: Rng) => readonly Part[])`
- `readonly anchors?: Readonly<Record<string, Anchor>>`: Oriented ones (`{ at, rot }`) for grips and mounts.
- `readonly light?: ModelLight`
- `readonly collider?: 'box' | 'cyl' | 'hull' | 'parts' | 'none'`: Default 'box' (the bounds). 'parts': a box round each part that isn't glow or `collide: false`, for models with openings (an arch, a doorway, a gate) that one box would close.
- `readonly texel?: number`: Texels per metre for `tex` parts, 2–64 (default `DEFAULT_TEXEL` = 8, Gate B's; up to `MOVING_TEXEL` = 20 for a model that moves).
- `readonly floats?: boolean`: Hangs, mounts on walls or hovers: may sit below or above the floor.
- `readonly source?: Provenance`

### class ModelError

A model that can't be built; `problems` says why and how to fix each one.

- `new ModelError(id: string, problems: readonly string[])`
- `readonly id: string`
- `readonly problems: readonly string[]`

### interface ModelLight

- `readonly at: Vec3`
- `readonly c: Slot`: A palette slot (a build's override takes `c` or a `color`).
- `readonly intensity: number`
- `readonly radius: number`
- `readonly flicker?: FlickerPreset`

### interface ModelLightRequest

What to hand `ctx.lights.request` (positions are model space: add the placement).

- `readonly at: Vec3`
- `readonly color: number`
- `readonly intensity: number`
- `readonly radius: number`
- `readonly flicker?: FlickerPreset`

### interface ModelOptions

- `readonly params?: Readonly<Record<string, number>>`: Param values (unset ones take the def's default).
- `readonly seed?: number`: Seed for parts that read the rng (default 1).
- `readonly palette?: Readonly<Record<Slot, Binding>>`: Re-bind slots: PALETTE names, or computed colours for game bindings (theme tints).
- `readonly light?: Partial<ModelLight> & { readonly color?: number }`: Override the def's light (a theme's torch colour, a dimmer lamp).
- `readonly catalog?: ModelCatalog`: Where `use` ids (and a string id passed to build) resolve; default `MODEL_LIBRARY`.
- `readonly textures?: TextureCatalog`: Where parts' `tex` ids resolve; default `TEXTURE_LIBRARY`.

### interface ModelPack

- `readonly pack: string`
- `readonly about: string`
- `readonly title?: string`: The pack's name as people know it ("Kenney Nature Kit 2.1").
- `readonly source: { readonly url: string; readonly licence: string; readonly author?: string; readonly sha256?: string; readonly homepage?: string }`: Where the pack came from (each model's own `source` says it too).
- `readonly models: readonly ModelDef[]`
- `readonly textures?: readonly TextureDef[]`: Textures sliced from the pack's pixel-art sheets (`npm run tex -- import-pack`).

### type ModelPart

```ts
type ModelPart = Prim | GroupPart | MirrorPart | UsePart
```

### interface ModelProvenance

Where an imported or traced model came from (a check fails without it).

- `readonly url: string`
- `readonly licence: string`
- `readonly pack?: string`
- `readonly file?: string`
- `readonly author?: string`
- `readonly sha256?: string`
- `readonly tool?: string`
- `readonly colours?: Readonly<Record<Slot, string>>`: Source sRGB per slot, for re-mapping later.
- `readonly fidelity?: Fidelity`

### modelSheet()

```ts
function modelSheet(idOrDef: string | ModelDef, opts: ModelSheetOptions = {}): ModelSheet
```

The model sheet `npm run model -- sheet` draws, for a library id or any def (a game's own):
the turntable, front / side / top on a 0.1 m grid with the size, the game-scale previews, the
palette and `checkModel`'s problems and warnings over every param's range. Software-drawn: no
GPU, no DOM, so it runs in Node and in a browser (the kit's `check.mjs --sheets`). A def that
can't be built (an unknown slot, `use` or texture) gets a sheet of its problems alone.

  const { image, problems } = modelSheet(myStall, { catalog: myModels }); // image: RGBA pixels

### interface ModelSheet

A model's sheet (`image`: width, height and RGBA `data`) and the check it shows.

- `readonly image: SheetImage`
- `readonly problems: readonly string[]`
- `readonly warnings: readonly string[]`
- `readonly report: ModelReport | null`: Tris, draws, materials, parts (null when it can't be built).
- `readonly bounds: Bounds | null`: Its bounds in metres: min, max and size (null when it can't be built).

### interface ModelSheetOptions

`modelSheet`'s options: `buildModel`'s (`params`, `seed`, `palette`, `light`, `catalog` where
ids and `use` resolve, `textures` where `tex` resolves), plus what the sheet draws.

- `readonly labels?: boolean`: Named parts' and groups' names on the views.
- `readonly rig?: boolean`: Anchors (cyan) and colliders (green) on the views.
- `readonly note?: string`: One more line under the title.

### MOVING_TEXEL

```ts
const MOVING_TEXEL: 20
```

The densest a moving model passed Gate B at (its sliding crate); denser wasn't measured.

### interface PackIndex

- `readonly packs: readonly PackIndexEntry[]`

### interface PackIndexEntry

One line of `public/packs/index.json`: a pack, what it holds and where it came from.

- `readonly id: string`
- `readonly title: string`
- `readonly about: string`
- `readonly file: string`: The pack file, relative to the index ("kenney-nature.json").
- `readonly models: number`
- `readonly textures: number`
- `readonly licence: string`
- `readonly author?: string`
- `readonly homepage?: string`
- `readonly url: string`

### packTextures()

```ts
function packTextures(pack: ModelPack): TextureCatalog
```

A pack's textures as a catalog of their own (empty for a pack of models only).

### parsePack()

```ts
function parsePack(data: unknown, where = 'pack'): ModelPack
```

Check a pack file's shape (the models' and textures' own checks are `validateModel`'s and `validateTexture`'s).

### class PngError

A PNG the decoder can't read, with what is wrong.

- `new PngError(message: string)`

### preloadModels()

```ts
function preloadModels(urls: readonly string[]): void
```

Start downloading (and parsing) models now, without waiting for them. Later
`loadModel` calls for the same URLs reuse the in-flight requests. The engine calls this
with `Game.assets` before the renderer and physics initialise.

### interface RgbaImage

RGBA, 4 bytes a pixel, row by row from the top (the shape `encodePng` takes).

- `readonly width: number`
- `readonly height: number`
- `readonly data: Uint8ClampedArray`

### rowOf()

```ts
function rowOf(n: number, step: Vec3, part: Each<[i: number]>): Part[]
```

`n` copies, copy `i` offset by `i × step`.

### scatterOf()

```ts
function scatterOf(n: number, [w, d]: readonly [number, number], seed: number, part: Each<[i: number, rng: Rng]>): Part[]
```

`n` copies scattered over a `w × d` area centred on the origin, from their own `seed` (so the
result does not depend on the build's seed); `part(i, rng)` may draw from the same stream.

### searchDefs()

```ts
function searchDefs(defs: readonly T[], text: string, o: SearchOptions = {}): T[]
```

Defs ranked by how well they match `text` (any order; plurals and partial words count), best
first. Each word scores most when it names a part of the id (4) or a tag (3), less in `about`
(2), least as the start (1) or the inside (0.5) of a longer word. Every word must match; when
no def matches them all, the defs matching the most words come back instead, so a search for
"oak tree stump" still finds the stumps. Empty text: every def (after `tags`). Ties keep the
defs' own order, except that a pack's defs (ids with a prefix) whose name starts with a query
word take that pack's first places in the tie: `kenney-nature/rock-large-a` before
`kenney-nature/cliff-block-rock` for "rock". A pack's n…

### interface SearchHit

One result of `searchHits`: the def, its score, and whether it matched every word.

- `readonly def: T`
- `readonly score: number`
- `readonly full: boolean`

### searchHits()

```ts
function searchHits(defs: readonly T[], text: string, o: SearchOptions = {}): SearchHit<T>[]
```

`searchDefs` with each def's score, and whether it matched every word (false: the fallback).

### interface SearchOptions

- `readonly tags?: readonly string[]`: Only defs with every one of these tags.
- `readonly limit?: number`: At most this many (default: every match).

### searchWords()

```ts
function searchWords(text: string): string[]
```

Lower-case words of letters and digits: `bookcaseClosed_wide-2` → bookcase, closed, wide, 2.

### interface SheetImport

- `readonly defs: readonly TextureDef[]`
- `readonly colours: readonly SheetColour[]`: Every distinct opaque source colour of the imported cells, biggest first.
- `readonly merges: readonly SheetMerge[]`: Every PALETTE entry two or more of those colours bake as, biggest first.
- `readonly map: ColourMap`: The mapper's result (slots and their entries, before `palette` re-binds them).
- `readonly cells: readonly SheetCell[]`: Every cell of the grid, in reading order.
- `readonly columns: number`
- `readonly rows: number`

### interface SheetImportOptions

- `readonly as: string`: The ids' prefix (`IMPORT_ID`: `tiles`, `kit/tiles`): cells are `<as>-<index>` (or `<as>-<name>`), a strip of frames is `<as>`.
- `readonly grid: readonly [w: number, h: number]`: A cell's size in pixels, width × height; the sheet must be whole cells.
- `readonly source: Omit<Provenance, 'tool' | 'colours' | 'fidelity'>`: What the caller knows of the source (url, licence, pack, file, author, sha256); the import adds `tool` and `colours`.
- `readonly tile?: boolean`: The cells are surfaces that tile: each def gets `tile: true` (the check measures the seam).
- `readonly frames?: boolean`: One def of frames, left to right, from the cells in reading order (an animation strip).
- `readonly cells?: readonly number[]`: Cells to import by index, in reading order (row by row from the top; default every cell).
- `readonly names?: readonly string[]`: Names by cell index, in reading order: cell `i` becomes `<as>-<names[i]>` ('' keeps the index).
- `readonly alpha?: number`: Alpha (0–255) under which a pixel is transparent (default `ALPHA_THRESHOLD`).
- `readonly palette?: Readonly<Record<TexSlot, PaletteColor>>`: Slots re-bound after mapping, for every def at once: `{ c3: 'sand' }`.
- `readonly tags?: readonly string[]`

### spriteSheet()

```ts
function spriteSheet(idOrDef: string | TextureDef, opts: TextureOptions = {}): SpriteSheet
```

A sprite sheet for `SpriteBatch`: the def's frames left to right in one row, rows stored top
first (`flipY` false, which SpriteBatch reads). Not cached: a SpriteBatch disposes its sheet.

### TEXTURE_FAMILIES

```ts
const TEXTURE_FAMILIES: Readonly<Record<string, readonly string[]>>
```

The texture library's families (src/engine/texture/library/<family>.ts): each one's texture ids.

### TEXTURE_LIBRARY

```ts
const TEXTURE_LIBRARY: TextureCatalog
```

The engine's built-in textures (src/engine/texture/library/<family>.ts). Games add their own
(`TEXTURE_LIBRARY.add(def)`) or build a catalog of their own; `npm run tex -- find` lists them.

### class TextureCatalog

Textures by id: the built-in `TEXTURE_LIBRARY` or a game's own (as `ModelCatalog` is for models).

- `new TextureCatalog(defs: readonly TextureDef[] = [])`

### interface TextureCheck

- `readonly id: string`
- `readonly problems: readonly string[]`
- `readonly warnings: readonly string[]`
- `readonly metrics: TextureMetrics | null`

### textureDef()

```ts
function textureDef(def: T): T
```

Returns the def as written, typed, so tuples and literals don't widen (as `model` does). Not
`texture`: TSL's `texture()` samples a map, and games import both.

### interface TextureDef

- `readonly id: string`
- `readonly about: string`: One line: what it is (`npm run tex -- find` searches it).
- `readonly tags: readonly string[]`
- `readonly size: readonly [w: number, h: number]`: Texels, width × height; powers of two for surfaces that tile. Sprite sheets: all frames.
- `readonly palette: Readonly<Record<TexSlot, PaletteColor>>`: Slots → PALETTE names (at most 255). Layers name slots, never colours, so a bake can re-bind them.
- `readonly tile?: boolean`: Seamless: patterns wrap by construction; the check measures the seam of pixels, paths and gradients.
- `readonly frames?: number`: Sprite sheets: this many frames left to right; they must divide the width.
- `readonly layers: readonly Layer[]`
- `readonly source?: Provenance`: Where an imported texture came from (`npm run tex -- import`), as models record it: url, licence, file, author, sha256, tool, and each slot's source colour. The check refuses a missing url or licence, or one not allowed (`LICENCES`).

### class TextureError

- `new TextureError(id: string, problems: readonly string[])`
- `readonly id: string`
- `readonly problems: readonly string[]`

### type TextureLayer

```ts
type TextureLayer = PixelsLayer | PatternLayer | PathLayer | OutlineLayer
```

### textureMap()

```ts
function textureMap(idOrDef: string | TextureDef, opts: TextureOptions = {}): DataTexture
```

The texture as a map for `toonMaterial(0xffffff, { map })`: nearest, no mipmaps, sRGB,
repeat-wrapped when it tiles. Its rows are stored bottom first, so v = 0 is the texture's
bottom row (three's convention). Cached per def and palette and `userData.shared`, so level
unloads keep it and the toon material cache sees one texture.

### textureSheet()

```ts
function textureSheet(idOrDef: string | TextureDef, opts: TextureSheetOptions = {}): TextureSheet
```

The texture sheet `npm run tex -- sheet` draws, for a library id or any def (a game's own): the
texels at 1× and enlarged, a 3×3 tiling and a cube and cylinder at game scale when it tiles,
its frames, palette and `validateTexture`'s problems and warnings. Software-drawn, so it runs in
Node and in a browser (the kit's `check.mjs --sheets`). `palette` re-binds slots as a bake does.

### interface TextureSheet

A texture's sheet (`image`: width, height and RGBA `data`) and the check it shows, as
`validateTexture` gives it: `id`, `problems`, `warnings` and `metrics`.

- `readonly image: SheetImage`

### interface TextureSheetOptions

`textureSheet`'s options.

- `readonly palette?: BakeOptions['palette']`: Re-bind slots to other palette names or hex numbers, as a bake does.
- `readonly catalog?: TextureCatalog`: Where a string id resolves (default `TEXTURE_LIBRARY`).

### validateModel()

```ts
function validateModel(idOrDef: string | ModelDef, opts: CheckOptions = {}): ModelCheck
```

One build's problems and warnings (and its metrics when it builds).

### validateTexture()

```ts
function validateTexture(def: TextureDef): TextureCheck
```

### interface VariantGroup

One def standing for its variants (the defs that share its `variantName`), and the others.

- `readonly def: T`
- `readonly variants: readonly T[]`

### variantName()

```ts
function variantName(id: string): string
```

The name a model's variants share: its id without its last part that is one letter or a
number, at the end or before the rest of the name (`kenney-nature/rock-large-a` … `-f`,
`crate-1` … `-3`, `tree-pine-tall-a-detailed` … `-d-detailed` → `kenney-nature/rock-large`,
`crate`, `tree-pine-tall-detailed`). An id without one is its own. For models: a sheet's
lettered tiles (`forest-a` … `-i`) are pieces of a set, not variants.

## 12. Animation toolkit

### analyzeClip()

```ts
function analyzeClip(model: Object3D, rig: RigSpec, def: ClipDef, clip: AnimationClip): ClipReport
```

### interface ClipDef

- `name: string`
- `frames: number`: Length in frames at 30 fps.
- `loop?: boolean`
- `keys: readonly Key[]`
- `layers?: readonly Layer[]`
- `feet?: readonly FeetKey[]`: Feet track: foot goals interpolated between its own keys and solved with IK every frame, overriding the keyed leg rotations. Use it whenever feet touch the floor through a transition (kneel → stand, sit → lie) so they roll instead of sinking.
- `speed?: number`: Ground speed (m/s) the clip is authored for at playback rate 1. Locomotion clips set this; metrics then measure foot sliding against it and the runtime can scale playback.
- `stance?: number`: Gait cycles (gaitClip): the share of the cycle each foot is planted. The right heel strikes at phase 0, the left at 0.5, so the right foot is mid-stance at `stance / 2`.
- `reach?: number`: Gaits: how far ahead of the hips (m) the middle of the stance is (feet touch down `reach` + half a stance's ground ahead).
- `grounded?: boolean`: Grounded clip: soles should rest on y = 0 (metrics flag floating / penetration).
- `fast?: boolean`: Intentionally snappy (flips, punches, launches): skip the angular-speed warning.
- `notes?: string`

### interface ClipReport

Objective checks for a clip, computed by actually posing the rig (no renderer). These
are the numbers an agent can't eyeball: foot sliding, ground contact, loop seams,
velocity spikes, joint limits. Thresholds are deliberately forgiving; `problems` are
real defects, `warnings` are worth a look.

- `name: string`
- `frames: number`
- `loop: boolean`
- `speed: number | null`
- `minSoleY: number`: Lowest sole point over the clip (m) and the frame it happens. Negative = through the floor.
- `minSoleFrame: number`
- `minBodyY: number`: Lowest point of any other body part (knees, hands, head...), where and when.
- `minBodyMesh: string`
- `minBodyFrame: number`
- `floatingFrames: number`: Frames (of grounded clips) where neither sole is within 5 cm of the floor.
- `footSlide: number`: Mean horizontal slip of the planted foot, m/s (0 = perfectly planted).
- `loopSeam: number`: Largest joint-angle jump between the last and first frame of a loop, degrees.
- `maxAngularSpeed: { joint: string; degPerSec: number; frame: number }`: Fastest joint rotation, degrees per second, and where.
- `limitViolations: { joint: string; axis: 'x' | 'y' | 'z'; frame: number; value: number; range: [number, number] }[]`
- `pelvisY: [number, number]`: Pelvis height range (m) — how much the body bobs.
- `problems: string[]`
- `warnings: string[]`

### compileClip()

```ts
function compileClip(def: ClipDef, rig: RigSpec, rest: RestPose): AnimationClip
```

Bake a ClipDef into a three.js AnimationClip (quaternion + position + scale tracks,
sampled at 60 Hz so easing and per-axis Euler interpolation — including 360° flips —
survive exactly).

### compileClips()

```ts
function compileClips(defs: readonly ClipDef[], rig: RigSpec, model: Object3D): AnimationClip[]
```

### interface Foot

- `readonly at: Vec3`: World position of the foot now.
- `t: number`: Stepping: 0 → 1 through the step; -1 planted.
- `readonly from: Vec3`
- `readonly to: Vec3`

### interface FootGoal

Foot-placement IK: say where a foot should be, get the hip/knee/ankle rotations.

Authors write the body (pelvis height, lean, arms...) and then pin the feet:

  placeFeet({ Pelvis: { p: [0, -0.2, 0] }, Torso: [20, 0, 0] }, rig, {
    R: { z: 0.15 },                             // right foot flat, 15 cm ahead
    L: { z: -0.2, pitch: 30, pivot: 'ball' },   // left heel raised on its toes
  })

Coordinates are the character's ground frame: y up from the floor, z forward. The solve
is planar (legs bend about X, knees forward); lateral offsets are ignored. It accounts
for the root's position, rotation and squash, so a squashed or leaning body still
keeps its feet exactly where they were asked…

- `z: number`: Forward position of the ankle (m) when the foot is flat.
- `x?: number`: Sideways position (m, + = the character's left). Default: under the hip at rest. Only matters when the root is turned (e.g. a pivot on one foot); the solve itself stays in the leg's plane.
- `y?: number`: Height of the sole above the floor (m). 0 = standing on it.
- `pitch?: number`: Sole pitch in degrees: + = toes down / heel raised, − = toes up.
- `pivot?: 'heel' | 'ball' | 'ankle'`: Point that stays at (z, y) while pitching: heel (heel strike), toe tip (tiptoe, toe-off) or ankle.
- `follow?: number`: 0..1: let the foot hang from the shin instead of holding its world pitch (swinging feet, dangling in the air). 1 = foot at `relax` degrees relative to the shin.
- `relax?: number`: Foot angle relative to the shin when following (default 15 = toes slightly down).

### gaitClip()

```ts
function gaitClip(rig: RigSpec, g: GaitSpec): ClipDef
```

### gaitPartners()

```ts
function gaitPartners(n: number): number[][]
```

Partners for `n` legs in two rows (left 0, 2, 4…, right 1, 3, 5…): a leg waits for the legs beside and opposite it.

### interface GaitSpec

Procedural locomotion cycles with planted feet. Instead of posing every frame, describe
the gait (speed, cadence, stance, bounce, arm swing...) and the generator plants each
foot on the ground, sliding it backwards at exactly `speed` while it is in stance, then
swings it forward on an arc — heel strike, roll, toe-off included. Tweak numbers,
re-run `npm run anim -- check Walk`, look at the sheet.

Phase: the RIGHT heel strikes at frame 0, the left at frames / 2.

- `name: string`
- `frames: number`: One full cycle (two steps), frames at 30 fps.
- `speed: number`: Ground speed the cycle is authored for (m/s at playback rate 1).
- `stance: number`: Fraction of the cycle each foot is on the ground. Walk ≈ 0.55–0.6, run ≈ 0.3.
- `hip: number`: Mean pelvis height offset from rest (m); negative bends the knees.
- `bob?: number`: Pelvis bounce amplitude (m), twice per cycle.
- `low?: number`: Cycle fraction at which the pelvis is lowest (default: walk just after contact, run mid-stance).
- `squash?: number`: Squash at the lowest point (e.g. 0.05 = 5 % shorter, wider).
- `lift?: number`: How high the lowest point of the swinging foot clears the floor at its peak (m).
- `liftPeak?: number`: Where in the swing (0..1) the foot is highest (default 0.4).
- `reach?: number`: Shift the whole stride forward (m).
- `swingReach?: number`: Extra forward throw of the swinging foot late in the swing, before it settles (m).
- `swingDelay?: number`: Swing timing: 0 = even, + = the foot hangs back then whips forward (running).
- `plant?: number`: 0..1: how much the swinging foot sweeps back to meet the ground at touchdown. At 1 it arrives moving backwards at exactly the ground speed (still, in the world), so the foot plants without sliding; at 0 it eases to a stop relative to the hips and slides forwa…
- `heelStrike?: number`: Toes-up angle at heel strike (deg).
- `toeOff?: number`: Heel-raise angle at toe-off (deg).
- `roll?: [heel: number, toe: number]`: Fraction of stance spent rolling off the heel / onto the toes.
- `tiptoe?: number`: Walk on the balls of the feet: extra pitch through stance (deg), pivoting on the ball.
- `swingPitch?: number`: Extra toes-down droop mid-swing (deg).
- `dangle?: number`: How much the swinging foot hangs from the shin mid-swing (0..1, default 0.8).
- `lean?: number`: Torso lean forward (deg) and twist of the shoulders against the legs (deg).
- `twist?: number`
- `sway?: number`: Side-to-side torso roll (deg).
- `pelvisPitch?: number`: Pelvis pitch (deg): tips the whole body, legs are re-solved.
- `head?: number`: Head pitch (deg) and how much it counters the torso twist (0..1).
- `headSteady?: number`
- `arms?: { /** Swing amplitude (deg). */ swing: number; /** Base elbow bend (deg). */ elbow: number; /** Extra elbow bend when the arm is forward (deg). */ pump?: numbe…`
- `pose?: Pose`: Extra joints/overrides mixed into every frame (hands, hat...).
- `extra?: (u: number, pose: Record<string, Euler | JointPose>) => void`: Per-frame hook for anything else: receives the cycle phase 0..1.
- `step?: number`: Key spacing in frames (default 0.5 — IK is non-linear, keep it fine).
- `notes?: string`

### type Key

```ts
type Key = readonly [number, Pose, Ease?]
```

`[frame, pose, easeToNextKey?]`

### interface LegDef

- `rest: readonly [number, number]`: Where the foot rests, in the body's space (x right, z forward; y ignored).
- `partners?: readonly number[]`: Legs that must not be lifting when this one starts a step (its neighbours; mutual, so listing a pair once is enough).

### class LegStepper

Feet for a body with any number of legs. `update(dt, body, yaw, velocity, ground)`:
the body's world position and heading, how fast it moves, and the ground height at a point.

- `new LegStepper(o: LegStepperOptions)`
- `readonly feet: Foot[]`
- `o: Required<Omit<LegStepperOptions, 'legs'>> & { legs: readonly LegDef[] }`
- `steps: number`: Steps started (tests).
- `target(i: number, body: Vec3, yaw: number, velocity: Vec3, ground: (x: number, z: number) => number, out: Vec3 = [0, 0, 0]): Vec3`: Where leg `i` wants to be: its rest spot around the body, ahead by the lead, on the ground.
- `reset(body: Vec3, yaw: number, ground: (x: number, z: number) => number): void`: Every foot planted on its rest spot around `body` (a spawn or a teleport). The first `update` does this itself.
- `update(dt: number, body: Vec3, yaw: number, velocity: Vec3, ground: (x: number, z: number) => number): void`
- `planted(): number`: Feet on the ground now.

### interface LegStepperOptions

- `legs: readonly LegDef[]`
- `threshold?: number`: Step when the foot is this far from its target (m). Default 0.3.
- `stepTime?: number`: Seconds a step takes. Default 0.18.
- `lift?: number`: How high a step lifts the foot (m). Default 0.15.
- `lead?: number`: Aim ahead of the body's motion by this many seconds (feet land where it is going). Default 0.25.

### mirror()

```ts
function mirror(pose: Pose, rig: Pick<RigSpec, 'mirror'>): Pose
```

Mirror a pose left ↔ right (rig.mirror pairs; Y/Z rotations and X offsets flip).

### placeFeet()

```ts
function placeFeet(pose: Pose, rig: RigSpec, goals: Partial<Record<Side, FootGoal>>): Pose
```

Return `pose` with its legs solved so the feet land on the goals. Existing Y/Z
rotations on the leg joints (spread, twist) are kept; X is replaced.

### type Pose

```ts
type Pose = Readonly<Record<string, Euler | JointPose>>
```

Joint name → rotation (degrees) or full joint pose. Missing joints are at rest.

### renderCurves()

```ts
function renderCurves(model: Object3D, rig: RigSpec, def: ClipDef, clip: AnimationClip, options: CurveOptions = {}): SheetImage
```

### renderSheet()

```ts
function renderSheet(model: Object3D, rig: RigSpec, def: ClipDef, clip: AnimationClip, options: SheetOptions = {}): SheetImage
```

Render a contact sheet for one clip.

### interface RigSpec

Everything the tools need to know about a rig beyond its hierarchy.

- `joints: readonly string[]`: Joint names in hierarchy order (root first).
- `root: string`
- `mirror: Readonly<Record<string, string>>`: Left/right counterparts for mirroring.
- `soles: readonly string[]`: Mesh names that touch the ground (soles).
- `trace: readonly string[]`: Points to trace in contact sheets (joint or mesh names).
- `limits: Readonly<Record<string, JointLimit>>`: Human-plausible rotation ranges, degrees.
- `fps: number`: Frame rate of the authoring format.
- `legs?: LegRig`: Leg geometry, enabling foot IK and the gait generator.
- `spine?: { torso?: string; head?: string; cap?: string }`: Joints the runtime procedural layers turn (PoseLayers): the torso and head look where the character is going; `cap` is an optional springy joint (not animated by clips).

### sampleClip()

```ts
function sampleClip(clip: ClipDef, frame: number, rig: RigSpec | readonly string[]): Record<string, ResolvedJoint>
```

Evaluate a clip's pose at `frame` (keys + layers + feet track), fully resolved for every
joint of `rig` (or the listed joints — then the feet track needs a rig and is skipped).

### interface SheetImage

Tiny RGBA software canvas shared by contact sheets, curve plots and filmstrips (no GPU, no DOM).

- `width: number`
- `height: number`
- `data: Uint8ClampedArray`

### class SpringChain

A chain of points hanging off a moving root. Call `update(dt, root, basis)` every frame
with the root's world position and its orientation (three columns: right, up, forward),
then read `points` (root first).

- `new SpringChain(o: SpringChainOptions)`
- `readonly points: Vec3[]`
- `o: Required<SpringChainOptions>`
- `reset(root: Vec3, basis: readonly [Vec3, Vec3, Vec3]): void`: Put the chain straight out in its rest pose (no swing).
- `update(dt: number, root: Vec3, basis: readonly [Vec3, Vec3, Vec3]): void`
- `swing(basis: readonly [Vec3, Vec3, Vec3]): number`: How far the tip is from where the rest pose puts it (m): how much it is swinging.

### interface SpringChainOptions

- `segments: number`: Points after the root (≥ 1).
- `length: number`: Length of each segment (m).
- `rest?: Vec3`: Rest direction from the root in the root's own space (normalised; default straight back, −Z).
- `stiffness?: number`: Pull toward the rest pose per second (0 floppy … 30 stiff). Default 10.
- `keep?: number`: Velocity kept per 1/60 s (0..1). Default 0.94.
- `gravity?: number`: Gravity on the chain (m/s²). Default 6 (lighter than real: tails hold up a bit).

### class Squash

Squash and stretch as a damped spring on `value` (0 = rest, + stretched, − squashed).
`scale()` turns it into a volume-preserving pair: `const [h, v] = squash.scale();
mesh.scale.set(h, v, h)`.

- `value: number`
- `velocity: number`
- `stiffness: number`: Spring stiffness and damping (a critically damped spring has damping = 2√stiffness).
- `damping: number`
- `amount: number`: 0 turns it off; 2.5 is rubbery.
- `kick(v: number): void`: Add a kick: negative squashes (a landing), positive stretches (a jump).
- `set(v: number): void`: Set the shape directly (a held squash).
- `update(dt: number): void`
- `scale(out: [number, number] = [1, 1]): [number, number]`: [horizontal, vertical] scale: y = 1 + s, xz = 1 / √(1 + s), so the volume stays put.

### twoBoneIK()

```ts
function twoBoneIK(root: Vec3, target: Vec3, a: number, b: number, pole: Vec3, out: Vec3 = [0, 0, 0]): Vec3
```

Where the middle joint of a two-bone limb goes (a knee, an elbow) so the end reaches
`target` from `root` with bones `a` and `b` long, bending toward `pole` (a point the knee
points at). Analytic (the law of cosines), no iterations; a target out of reach straightens
the limb toward it, one too close folds it as far as it goes. Returns the joint, into `out`.

### validateClip()

```ts
function validateClip(clip: ClipDef, rig: RigSpec): string[]
```

Problems with a clip definition itself (unknown joints, bad key order, loop mismatch).

## 13. Hero kit

### HERO_CLIPS

```ts
const HERO_CLIPS: readonly ClipDef[]
```

### HERO_MODEL

```ts
const HERO_MODEL: "assets/hero.glb"
```

### HERO_RAGDOLL

```ts
const HERO_RAGDOLL: readonly RagdollPart[]
```

The hero as a ragdoll (the joints of `hero.glb`, see rig.ts): pelvis, torso and head, upper
arms and legs on ball joints held in cones, elbows and knees as hinges bending the way the
clips bend them (Forearm −X, Shin +X). Hands and feet ride on their forearm and shin.

### HERO_RIG

```ts
const HERO_RIG: RigSpec
```

The hero rig (public/assets/hero.glb, built by scripts/assets/hero.mjs).

The character faces +Z. L/R are the character's own sides (its right = -X).
Rotations are Euler XYZ degrees relative to rest; Z is applied first, then Y, then X,
all about the parent's axes. Verified against contact sheets (`npm run anim -- sheet`).

  Pelvis   +X tip forward (90 = face down, -90 = on its back, 360 = front flip)
           +Y turn to its left, +Z roll to its RIGHT. p = [x, y, z] offset (m), s = squash
  Torso    +X bend forward, +Y twist left, +Z lean right
  Head     +X look down, +Y look left, +Z tilt right
  Arm*     X swings: -90 = straight ahead, -180 = overhead, +40 = back
           Z spreads (…

## 14. three.js and Rapier

### RAPIER

The Rapier 3D physics module (`@dimforge/rapier3d` 0.20), already initialised by `Engine.start`. Most games only need `ctx.physics`; use `RAPIER.X` for raw shapes, joints and queries on `ctx.physics.world`.

### THREE

`three/webgpu` (three.js r186: Mesh, Group, Vector3, BoxGeometry, MeshBasicNodeMaterial, ...). Use `THREE.X` for anything three.js has; never import a second copy of three (two copies break `instanceof` and the renderer).

### TSL

`three/tsl` (three.js shading language: `uniform`, `vec3`, `mix`, `Fn`, ...) for node materials and custom filters. All shader code is TSL; there is no GLSL.

## 15. More

### applySky()

```ts
function applySky(engine: Pick<Engine, 'sun' | 'ambient' | 'scene' | 'setSunDirection'>, s: SkyState): void
```

Put a sky on the engine: sun direction, colour and strength, ambient light, background.

### bayer4()

```ts
function bayer4(): any
```

A 4 x 4 ordered dither threshold per art pixel (0..1): keep a pixel where it is below its opacity.

### class BehaviorTree

- `new BehaviorTree(root: BtNode<B>, blackboard: B)`
- `ticks: number`: Ticks so far.
- `time: number`: Seconds ticked so far (the sum of every dt).
- `status: Status | null`
- `readonly root: BtNode<B>`
- `readonly blackboard: B`
- `tick(dt: number): Status`
- `halt(): void`: Stop everything (a cutscene, a stun): running actions are told to halt.
- `trace(): TraceRow[]`: Every node depth-first with this tick's answer: for drawing the tree.
- `activePath(): string[]`: The names down the branch that decided this tick, root first (the last child each node ran that didn't fail).

### beltMaterial()

```ts
function beltMaterial(base: number, stripe: number, o: { length: number; speed: number; pitch?: number; along?: 'u' | 'v' }): BeltMaterial
```

### type BeltMaterial

```ts
type BeltMaterial = MeshToonNodeMaterial & { /** Belt speed (m/s along +u; negative runs back). */ speed: number; /** Move the stripes on by `dt` seconds of game time. */ advance(dt: number): void; }
```

### interface BoidOptions

- `bounds?: { min: Vec3; max: Vec3 }`: Agents stay inside this box (they steer back in near its walls).
- `view?: number`: Neighbour radius (m). Default 2.
- `space?: number`: Desired gap (m): closer neighbours push apart. Default 0.8.
- `maxSpeed?: number`
- `minSpeed?: number`
- `maxForce?: number`: Steering acceleration limit (m/s²).
- `separation?: number`: Rule weights.
- `alignment?: number`
- `cohesion?: number`
- `flat?: boolean`: Keep to a horizontal plane (fish in a pond, sheep on a field): y never changes.
- `margin?: number`: How far inside the bounds the push back in starts (m). Default the view radius; small for a tight pen.
- `seed?: number`

### class Boids

- `new Boids(count: number, o: BoidOptions = {})`
- `readonly count: number`
- `readonly pos: Float32Array`
- `readonly vel: Float32Array`
- `o: Required<Omit<BoidOptions, 'bounds' | 'seed'>> & { bounds: BoidOptions['bounds'] }`
- `seek: Vec3 | null`: A point everyone is drawn toward (null: none).
- `seekWeight: number`
- `flee: { at: Vec3; radius: number } | null`: A threat to scatter from.
- `fleeWeight: number`
- `obstacles: { x: number; y: number; z: number; r: number }[]`: Spheres to steer around (x, y, z, r).
- `spacing(): number`: Average distance to the nearest neighbour (tests, tools).
- `order(): { speed: number; alignment: number }`: Average speed and how lined up the headings are (0 random, 1 all the same way).
- `step(dt: number): void`

### interface Branch

- `from: V3`
- `to: V3`
- `radius: number`
- `depth: number`: Branching level (0 = trunk).

### bt

```ts
const bt: { readonly selector: <B>(name: string, ...children: BtNode<B>[]) => BtNode<B>; readonly sequence: <B>(name: string, ...children: BtNode<B>[]) => BtNode<B>; ... 8 more ...; readonly cooldown: <B>(child: BtNode<...>, seconds: number, name?: string) => BtNode<...>; }
```

The builders in one object, for `bt.selector(...)` without importing each.

### class BtNode

- `new BtNode(name: string, kind: string)`
- `status: Status | null`: Status at the last tick that reached this node.
- `visited: number`: The tree's tick count when this node last ran.
- `readonly children: BtNode<B>[]`
- `tree: BehaviorTree<B> | null`: The tree it belongs to: a node keeps its own state, so it can be in one tree only.
- `readonly name: string`
- `readonly kind: string`
- `run(b: B, dt: number, tree: BehaviorTree<B>): Status`: Tick this node (keeps `status` and `visited` for the trace).
- `halt(b: B): void`: Interrupted: forget any progress, and tell actions that were running to stop.

### type BtStatus

```ts
type BtStatus = 'success' | 'failure' | 'running'
```

Behaviour trees: an agent's decisions as a tree of small nodes, ticked every step. Each tick
a node answers success, failure or running (still at it). Selectors try their children in
priority order until one doesn't fail; sequences run theirs in order until one doesn't
succeed. Both are reactive: every tick starts again from the first child, so a higher
priority (flee!) takes over at once, and whatever was running below it is halted.

  const tree = new BehaviorTree(
    selector('root',
      sequence('flee', condition('scared?', (b) => b.threat < 3), action('run away', fleeStep)),
      seq…

### class BulletPool

- `new BulletPool(capacity: number)`
- `readonly capacity: number`
- `readonly state: Float32Array`: x, z, vx, vz per bullet.
- `readonly life: Float32Array`
- `readonly radius: Float32Array`
- `readonly team: Uint8Array`: 0 enemy, 1 player.
- `readonly kind: Uint8Array`: A small number games use for the look (colour, size).
- `readonly grazed: Uint8Array`: 1 once a bullet has been grazed (counted by `graze`), so each counts once.
- `alive: number`: Live bullets are 0 .. alive − 1 (dead ones are swapped to the end).
- `readonly sparks: number[]`: Bullets that hit a wall last step (x, z pairs), for sparks.
- `fired: number`
- `fire(x: number, z: number, vx: number, vz: number, o: { life?: number; radius?: number; team?: Team; kind?: number } = {}): number`
- `kill(i: number): void`
- `killAll(indices: number[]): void`: Kill several (indices from `hits`): highest first, since a kill moves the last live bullet into the gap and would otherwise shift an index still to come.
- `clear(): void`
- `step(dt: number, open?: (x: number, z: number) => boolean): void`: Move every bullet; ones whose life runs out or that hit a wall (`open(x, z)` false) die.
- `hits(x: number, z: number, r: number, team: Team, out: number[] = []): number[]`: Indices of live bullets of `team` within `r` of (x, z), each tested as a circle.
- `near(x: number, z: number, r: number, team?: Team): number`: Bullets within `r` of a point, of `team` or any (bombs, danger meters).
- `graze(x: number, z: number, r: number, team: Team): number`: Grazes: bullets of `team` within `r` of (x, z) not counted before. Each bullet grazes once (shoot-'em-ups score the near misses); call it after the hit test, so a bullet that hits is gone and never grazes.

### interface CameraKey

- `at: number`: Time (s) the camera is exactly here.
- `position: V3`
- `target: V3`: The point it looks at.
- `fov?: number`: Vertical field of view (degrees); default the previous key's, or 50.
- `cut?: boolean`: Jump here instead of gliding from the key before (a cut to a new shot).

### class CameraShake

- `trauma: number`
- `maxOffset: number`: World units at full trauma.
- `decay: number`: Trauma lost per second.
- `strength: number`: Global multiplier (settings: 0 turns shake off).
- `readonly offset: Vector3`
- `state(): ShakeState`: Trauma and the noise clock, as data (`engine.snapshot()`): what the next frames shake by follows from them.
- `setState(s: ShakeState): void`
- `add(amount: number): void`
- `update(dt: number): Vector3`: Advance and compute `offset`.
- `apply(rig: { readonly focus: Vector3 }, dt: number): void`: Update and move a camera rig's focus by the change in offset since the last call.
- `reset(): void`

### interface CameraShot

- `position: [number, number, number]`
- `target: [number, number, number]`
- `fov: number`

### interface ClockState

A clock as data.

- `readonly scale: number`
- `readonly hitstop: number`

### coversPixel()

```ts
function coversPixel(kind: TransitionKind, progress: number, x: number, y: number, w: number, h: number, center: readonly [number, number] = [0.5, 0.5]): number
```

Whether an art pixel is covered by a transition: the same rules as the shader, on the CPU
(unit tests, tools). `x, y` art pixel, `w, h` art size, `center` uv.

### createNoise()

```ts
function createNoise(seed = 1): Noise
```

### crystalMaterial()

```ts
function crystalMaterial(o: ShaderOptions = {}): MeshToonNodeMaterial
```

Crystal: Worley cells with bright seams, slowly shifting, toon-lit.

### interface Cue

- `at: number`
- `name?: string`
- `run: () => void`
- `cosmetic?: boolean`: Cosmetic (a sound, a puff of dust): not run when the scene is skipped past it. Cues that change the world (a door left open, an item given) are run on skip so the world ends up the same either way.

### DECAL_SHAPES

```ts
const DECAL_SHAPES: readonly ["footprint", "scorch", "splat", "crack", "ring"]
```

### interface DecalOptions

- `size?: number`: Width of the mark (m). Default 0.5.
- `rotation?: number`: Turn about the normal (radians). Default random.
- `color?: number`: Colour (hex). Default dark.
- `life?: number`: Seconds before it starts to fade (0: forever). Default 10.

### class Decals

- `new Decals(scene: Scene, o: { capacity?: number } = {})`
- `readonly meshes: Map<"ring" | "crack" | "footprint" | "scorch" | "splat", InstancedMesh<BufferGeometry<NormalBufferAttributes, BufferGeometryEventMap>, Material<...> | Material…`
- `readonly o: { capacity?: number }`
- `add(shape: DecalShape, at: Vector3Like, normal: Vector3Like, o: DecalOptions = {}): number`: Lay a mark at `at` on a surface facing `normal`. Returns its index in that shape's pool.
- `count(shape?: DecalShape): number`: Marks alive (per shape or all).
- `update(dt: number): void`: Per frame: age the marks; old ones dither away over a second.
- `clear(): void`: Remove every mark (the meshes stay for reuse).
- `dispose(): void`

### type DecalShape

```ts
type DecalShape = (typeof DECAL_SHAPES)[number]
```

### decodeState()

```ts
function decodeState(v: unknown): unknown
```

`encodeState` undone: a deep copy with the marked numbers (and the game's own `@` strings) back.

### drawSheet()

```ts
function drawSheet(o: { frame: readonly [number, number]; frames: number; cols?: number }, draw: (g: CanvasRenderingContext2D, frame: number) => void): SpriteSheet
```

Draw a sheet in code: `draw(g, frame)` paints one frame into a `frame`-sized box (the
context is translated there and clipped). Pixel coordinates; draw with `fillRect`.

### ease()

```ts
function ease(e: Ease, u: number): number
```

### type Ease

```ts
type Ease = EaseName | ((u: number) => number)
```

### EASE_NAMES

```ts
const EASE_NAMES: EaseName[]
```

### type EaseName

```ts
type EaseName = | 'linear' | 'inQuad' | 'outQuad' | 'inOutQuad' | 'inCubic' | 'outCubic' | 'inOutCubic' | 'inSine' | 'outSine' | 'inOutSine' | 'inExpo' | 'outExpo' | 'inOutExpo' | 'inBack' | 'outBack' | 'inOutBack' | 'outElastic' | 'outBounce' | 'smooth' | 'steps2' | 'steps4' | 'steps8'
```

Tweens: numbers that glide to a value over time, for doors, lifts, pickups, menus and
pads. Game time (they pause, slow down and freeze with `engine.timeScale` and hitstops)
and cleared when a level unloads. `ctx.tweens`:

  ctx.tweens.to(door.position, { y: 3 }, { duration: 0.8, ease: 'outBack' });
  const t = ctx.tweens.to(lamp, { intensity: 0 }, { duration: 0.3, yoyo: true, repeat: Infinity });
  t.cancel();
  if (await ctx.tweens.to(door.position, { y: 0 }, { duration: 0.5 }).done) slam(); // false: cancelled / level gone
  ctx.tweens.call(0.5, () => spawn());                            /…

### EASES

```ts
const EASES: Readonly<Record<EaseName, (u: number) => number>>
```

Every named ease: u in 0..1 → progress (back and elastic overshoot past 1).

### emitter()

```ts
function emitter(def: PatternDef): Emitter
```

An emitter for a pattern (pure: the same volleys every run).

### interface Emitter

- `readonly def: PatternDef`
- `volleys: number`: Volleys fired.
- `enabled: boolean`
- `update(pool: BulletPool, dt: number, at: readonly [number, number], aim?: readonly [number, number] | null): void`: Fire due volleys from (x, z); `aim` is what aimed patterns turn toward.

### encodeState()

```ts
function encodeState(v: unknown): unknown
```

A deep copy of `v` as plain JSON that `JSON.stringify` keeps exactly: `-0`, `Infinity`,
`-Infinity` and `NaN` become the strings `'@-0'`, `'@Infinity'`... (JSON would write 0 and null,
and `atan2(-0, x)` is not `atan2(0, x)`), and a string of the game's own that starts with `@`
gets one more (`'@x'` → `'@@x'`). `decodeState` turns them back. `engine.snapshot()` and
`restore()` do both; a game's `snapshot()` returns its values as they are (never through JSON).

### interface ErosionOptions

- `droplets?: number`: Raindrops to roll (default one per grid point).
- `seed?: number`
- `lifetime?: number`: Steps a drop lives (default 40).
- `inertia?: number`: How much a drop keeps its direction instead of following the slope (0..1, default 0.05).
- `capacity?: number`: Soil a drop can carry, per unit of speed, water and drop in height (default 4).
- `erode?: number`: Fraction of its spare capacity a drop digs up per step (default 0.3).
- `deposit?: number`: Fraction of its excess it lays down per step (default 0.3).
- `evaporate?: number`: Water lost per step (default 0.02).
- `gravity?: number`: How fast drops speed up downhill (default 4).
- `radius?: number`: Radius (whole cells) a drop digs over, so it carves gullies rather than pits (default 2).
- `margin?: number`: Grid points along each edge left exactly as they are (default 0): where the land meets a floor or a wall.

### expand()

```ts
function expand(sys: LSystemDef, iterations: number, seed = 1, maxLength = 250_000): string
```

Grow `iterations` generations. Stops early (keeping the last whole generation) past `maxLength` symbols.

### interface FbmOptions

- `octaves?: number`: How many layers of noise (default 5). Each adds detail at twice the frequency.
- `lacunarity?: number`: Frequency step per octave (default 2).
- `gain?: number`: Amplitude step per octave, the roughness (default 0.5).

### interface FlashOptions

- `duration?: number`: Seconds to fade out (real time). Default 0.15.
- `strength?: number`: 0..1 at the start. Default 0.8.

### forceFieldMaterial()

```ts
function forceFieldMaterial(o: ShaderOptions = {}): MeshBasicNodeMaterial
```

A force field: a bubble of hexagonal-looking cells (Worley noise) that drift, brightest at
the rim and where cells meet, a pulse running up it.

### class GpuSwarm

- `new GpuSwarm(o: GpuSwarmOptions)`
- `readonly count: number`
- `readonly mesh: Sprite`
- `readonly positions: any`: Storage buffers (vec3 per particle): `renderer.getArrayBufferAsync(swarm.positions.value)` reads them back.
- `readonly velocities: any`
- `readonly attractor: any`: Where they are pulled to (and swirl round).
- `readonly pull: any`: Spring toward the attractor (m/s² per metre away).
- `readonly swirl: any`: Swirl round its vertical axis.
- `readonly turbulence: any`: Strength of the noise flow that stirs them.
- `readonly drag: any`: Velocity lost per second (0..1).
- `steps: number`: Compute dispatches so far.
- `update(renderer: WebGPURenderer, dt: number): void`: One frame: (the first time, place them all), then one compute dispatch moving every particle.
- `reset(): void`: Scatter them back into the ball they started in (next update).
- `read(renderer: WebGPURenderer): Promise<Float32Array>`: Positions read back from the GPU (x, y, z per particle, padded to 4). For tests and tools: slow and async.
- `dispose(): void`: Remove it and free the material and both compute shaders (the storage buffers go with garbage collection).

### interface GpuSwarmOptions

- `count: number`
- `center?: readonly [number, number, number]`: Middle of the ball it starts in. Default [0, 2, 0].
- `radius?: number`: Radius of that ball (m). Default 6.
- `size?: number`: Particle size (m). Default 0.08.
- `colors?: readonly [number, number]`: Colours: slow, fast.
- `floor?: number`: Height of the floor they bounce off. Default 0.
- `seed?: number`: Varies the starting layout and the flow. Default: a new one per swarm.

### class GrassField

- `new GrassField(o: GrassOptions)`
- `readonly wind: Vector2`: Wind along x and z (its length is the strength).
- `sway: number`: How far blades lean per unit of wind (m at the tip). Default 0.12.
- `readonly blades: number`: Blades actually placed (the mask can leave fewer than `count`).
- `push(i: number, at: Vector3Like | null, radius = 0.8): void`: Pusher `i` (0..3): blades within `radius` of `at` part and flatten (radius 0: none).
- `update(time: number): void`: Per frame (game time).
- `dispose(): this`: Frees the GPU-related resources allocated by this instance

### interface GrassOptions

- `area: readonly [number, number]`: Width (x) and depth (z) of the patch, m.
- `at: readonly [number, number, number]`: Centre of the patch on the ground.
- `count: number`
- `height?: readonly [number, number]`: Blade heights (m): shortest and tallest. Default [0.25, 0.55].
- `width?: number`: Blade width at the root (m). Default 0.07.
- `base?: number`: Colours (hex): roots and tips.
- `tip?: number`
- `mask?: (x: number, z: number) => boolean`: Where blades grow (world x, z); default everywhere in the patch.
- `ground?: (x: number, z: number) => number`: Ground height under a blade (default: the patch's y).
- `seed?: number`

### groundFog()

```ts
function groundFog(o: { color?: number; top?: number; amount?: number; near?: number; far?: number } = {}): { node: Node; color: UniformNode<"color", Color>; amount: UniformNode<"float", number>; top: UniformNode<"float", number>; }
```

Fog for `scene.fogNode` with live settings (uniforms: changing them never recompiles):
ground mist that thickens below `top` (m) and a haze that grows with distance from the
camera, both up to `amount` (0..1), in `color` (match the sky).

  const mist = groundFog({ color: s.sky, top: 1.5 });
  (scene as { fogNode: unknown }).fogNode = mist.node;
  mist.amount.value = 0.8; mist.color.value.setHex(s.sky);

### hashString()

```ts
function hashString(s: string): number
```

FNV-1a, 32-bit.

### hologramMaterial()

```ts
function hologramMaterial(o: ShaderOptions = {}): MeshBasicNodeMaterial
```

A hologram: scanlines climbing the object, a bright rim where it turns away from you, a
flicker; the middle mostly see-through.

### lavaMaterial()

```ts
function lavaMaterial(o: ShaderOptions = {}): MeshBasicNodeMaterial
```

Lava: slow churning fractal noise, banded dark crust to white-hot, unlit (it glows).

### interface Leaf

- `at: V3`
- `dir: V3`: The way the twig it grows on points.
- `depth: number`

### interface LRule

One right-hand side, chosen with probability `p` among a symbol's rules.

- `to: string`
- `p?: number`

### interface LSystemDef

- `axiom: string`
- `rules: Readonly<Record<string, string | readonly LRule[]>>`: symbol → what replaces it (one string, or several to choose from by probability)

### marbleMaterial()

```ts
function marbleMaterial(o: ShaderOptions = {}): MeshToonNodeMaterial
```

Marble: veins (a sine bent by fractal noise) in three bands of white and grey, toon-lit.

### MAX_FRAMES

```ts
const MAX_FRAMES: 216000
```

Frames a recording keeps: an hour at 60 fps.

### MAX_PUSHERS

```ts
const MAX_PUSHERS: 4
```

### MAX_WAVES

```ts
const MAX_WAVES: 4
```

Waves the shader sums (more are ignored).

### class Mirror

- `new Mirror(o: MirrorOptions = {})`
- `readonly mesh: Mesh`
- `readonly target: RenderTarget`
- `enabled: boolean`: False: the glass shows plain glass and nothing is rendered for it.
- `renders: number`: Times it has rendered.
- `render(renderer: WebGPURenderer, scene: Scene, camera: Camera, width: number, height: number): boolean`: Reflect `camera` in the glass and draw `scene` from there into the texture (sized `width` x `height`, the art resolution). Skipped when the camera is behind the glass.
- `attach(pixel: { onBeforeRender(f: () => void): () => void; renderer: WebGPURenderer; activeCamera: Camera; resolution: { width: number; height: number } }, scene: Scene): () => void`: Render before every frame of `pixel` (the engine's PixelRenderer), from its camera, at its art size. Returns a stop.
- `dispose(): void`

### interface MirrorOptions

- `size?: readonly [number, number]`: Width and height of the glass (m). Default [4, 2].
- `tint?: number`: A colour the reflection leans toward, and how much (0..1). Default a faint blue, 0.15.
- `tintAmount?: number`

### class NavGrid

- `new NavGrid(width: number, height: number, o: NavGridOptions = {})`
- `static fromRows(rows: readonly string[], o: NavGridOptions & { blocked?: string } = {}): NavGrid`: From an ASCII map: `blocked` characters are closed, everything else open. Default '# ': walls and pits (a ' ' has no floor in RoomKit's maps); past the end of a short row is a wall.
- `readonly width: number`
- `readonly height: number`
- `readonly cell: number`
- `readonly ox: number`: World x, z of cell (0, 0)'s corner.
- `readonly oz: number`
- `readonly open: Uint8Array`: 1 = walkable.
- `version: number`: Bumped by `setOpen`: flow fields rebuild.
- `flowBuilds: number`: How many times a flow field was built (tools: should be one per target cell change).
- `col(x: number): number`
- `row(z: number): number`
- `centerX(col: number): number`: World x, z of a cell's centre.
- `centerZ(row: number): number`
- `isOpen(col: number, row: number): boolean`
- `walkable(x: number, z: number): boolean`: Is the world point on a walkable cell?
- `setOpen(col: number, row: number, open: boolean): void`
- `path(from: readonly [number, number, number], to: readonly [number, number, number]): [number, number, number][] | null`: Shortest path between two world points (x, z used; y kept from `from`): A* over cells, no corner cutting, then smoothed so it only turns where a wall is in the way. Null when there is no way. The first point is `from`, the last `to` (snapped into its cell).
- `smooth(pts: [number, number, number][]): [number, number, number][]`: Drop every point the path can skip in a straight line.
- `lineOfSight(ax: number, az: number, bx: number, bz: number, radius = 0): boolean`: Can you see (or walk straight) from a to b? Walks the cells under the segment (a DDA); `radius` > 0 also tests two lines offset sideways (a body that wide fits).
- `castWall(ax: number, az: number, dx: number, dz: number, max: number): number`: Distance from a along a direction to the first closed cell (at most `max`): the same cell walk as `lineOfSight`, so a vision cone drawn with it shows exactly what a guard can see.
- `flowTo(x: number, z: number): boolean`: A flow field toward the world point (x, z): the walking distance from every cell to it. Rebuilt only when the target changes cell or the grid changed (`version`). Returns whether it was rebuilt.
- `flowDistance(x: number, z: number): number`: Walking distance to the flow target from a world point (Infinity: no way).
- `flowDirection(x: number, z: number, out: [number, number]): boolean`: Which way to go from (x, z) toward the flow target: the unit direction to the lowest-distance neighbour (into `out` [x, z]). Returns false at the target or with no way.

### interface NavGridOptions

Navigation on a grid: which cells can be walked, the shortest path between two points
(A*, 8-connected, no corner cutting, smoothed by line of sight), a flow field toward one
target (one Dijkstra fill, then any number of agents read a direction per cell for free),
and line-of-sight tests (vision cones, stealth). Pure and allocation-light; unit-tested.

  const nav = NavGrid.fromRows(['#########', '#...#...#', '#.#...#.#', '#########'], { cell: 1, origin: [-4.5, 0, -2] });
  const path = nav.path([-3, 0, -1], [3, 0, -1]);       // world points, corners only
  nav.flowTo(hero.x, hero.z);                            // once when the target changes cell
  nav.flowDirection(x, z, out);…

- `cell?: number`: Metres per cell. Default 1.
- `origin?: readonly [number, number, number]`: World x, z of the top-left cell's corner (column 0, row 0). Default: centred on the origin.

### interface Noise

- `readonly seed: number`
- `n2(x: number, y: number): number`: Simplex noise in 2D, about -1..1.
- `n3(x: number, y: number, z: number): number`: Simplex noise in 3D, about -1..1 (a 2D field that changes over time: n3(x, y, t)).
- `fbm2(x: number, y: number, o?: FbmOptions): number`: Fractal Brownian motion: octaves of 2D noise added up, normalised to about -1..1.
- `ridged2(x: number, y: number, o?: FbmOptions): number`: Ridged noise: 1 − |noise| per octave, squared, so creases become sharp crests; 0..1.

### type Pattern

```ts
type Pattern = 'aimed' | 'fan' | 'ring' | 'spiral' | 'wave' | 'burst'
```

### interface PatternDef

- `pattern: Pattern`
- `every: number`: Seconds between volleys.
- `count?: number`: Bullets per volley (arms of a spiral, the size of a ring or fan).
- `spread?: number`: Spread of a fan or a burst (degrees).
- `speed?: number`
- `turn?: number`: Spiral and wave: degrees turned per volley.
- `sweep?: number`: Wave: half the sweep (degrees) and its period (s).
- `period?: number`
- `life?: number`
- `radius?: number`
- `kind?: number`
- `team?: Team`
- `delay?: number`: Seconds before the first volley.
- `seed?: number`

### interface PatternTile

- `readonly pattern: readonly string[]`: The tile as rows of characters (north row first).

### patternTiles()

```ts
function patternTiles(defs: readonly { pattern: readonly string[]; weight?: number; name?: string; rotate?: boolean }[]): PatternTile[]
```

Tiles from square character patterns: the edges are read off the pattern, and each pattern
is turned to its four quarter turns (unless `rotate: false`), repeats dropped.

### PLANTS

```ts
const PLANTS: { bush: { system: { axiom: string; rules: { A: string; F: string; S: string; }; }; iterations: number; turtle: { angle: number; length: number; lengthScale: number; radius: number; radiusScale: number; }; }; fern: { ...; }; weed: { ...; }; tree: { ...; }; }
```

Classic plants (after The Algorithmic Beauty of Plants), with turtle settings that suit them.

### class Precipitation

- `new Precipitation(o: PrecipitationOptions)`
- `readonly kind: PrecipitationKind`
- `readonly area: readonly [number, number, number]`
- `readonly wind: Vector2`: Wind (m/s along x and z): rain slants, snow drifts.
- `get intensity: number`: Share of the drops falling (0..1).
- `get speed: number`: Fall speed (m/s).
- `update(dt: number, center: Vector3): void`: Per frame (game time): advance the fall and follow `center`.
- `splashes(dt: number): number`: How many drops hit the ground in `dt` seconds at this intensity (for splash particles, ripples).
- `dispose(): this`: Frees the GPU-related resources allocated by this instance

### type PrecipitationKind

```ts
type PrecipitationKind = 'rain' | 'snow'
```

### interface PrecipitationOptions

- `kind: PrecipitationKind`
- `count: number`: Most drops at once (the instance count).
- `area?: readonly [number, number, number]`: Width, height and depth of the air the drops fall through, around the centre.
- `color?: number`: Drop colour (hex).
- `speed?: number`: Fall speed (m/s). Rain 16, snow 1.4.

### interface Recording

- `readonly format: 1`
- `readonly engine: string`: The engine version that recorded it (a different one may not replay the same).
- `readonly game: string`: The game's name when it was recorded.
- `readonly seed: number`: The engine seed (`ctx.random` comes from it and the game's name).
- `readonly time: number`: Game time when the level began (`ctx.time` carries on across levels).
- `readonly frames: readonly InputFrame[]`: Every frame the level ran, from its first.
- `readonly truncated?: boolean`: True when the level ran longer than a recording keeps (the frames are its start).
- `readonly from?: Snapshot`: The save-state the frames start from (`engine.restore()` began this recording), if any.

### recordingProblem()

```ts
function recordingProblem(v: unknown): string | null
```

Is `v` a recording this engine can replay? Returns the problem, or null.

### class RenderView

- `new RenderView(o: RenderViewOptions = {})`
- `static screen(object: Object3D): void`: Put `object` (and its children) on the screens' layer.
- `readonly target: RenderTarget`
- `readonly camera: PerspectiveCamera`
- `every: number`: Render every nth frame.
- `renders: number`: Times it has rendered.
- `enabled: boolean`
- `get texture: Texture`
- `setSize(w: number, h: number): void`: Resize the texture (the camera's aspect follows).
- `render(renderer: WebGPURenderer, scene: Scene): boolean`: Draw `scene` from the view's camera into its texture, if this is one of its frames. True if it drew.
- `attach(pixel: { onBeforeRender(f: () => void): () => void; renderer: WebGPURenderer }, scene: Scene): () => void`: Render before every frame of `pixel` (the engine's PixelRenderer). Returns a stop.
- `screenMaterial(): MeshBasicNodeMaterial`: An unlit material showing the view (a new one each call: tint it as you like).
- `dispose(): void`

### interface RenderViewOptions

- `size?: readonly [number, number]`: Texture size in pixels (default [160, 90]).
- `fov?: number`: Vertical field of view, degrees (default 60).
- `near?: number`
- `far?: number`
- `every?: number`: Render every nth frame (default 1): a slow refresh costs less.

### class Rng

Seeded randomness. Everything random in a game comes from an `Rng`, so the same seed always
gives the same result (docs/DOCTRINE.md, principle 1). Each level gets one, `ctx.random`,
seeded from the engine's seed and the game's name; fork it by purpose so streams stay
independent of how many numbers each one drew:

  const level = ctx.random.fork(`level:${n}`);
  const room = level.fork(`room:${i}`);   // independent of how many numbers `level` drew

Never use Math.random in game or engine code (the lint refuses it).

- `new Rng(seed: number | string)`
- `get state: number`: The generator's whole state: save it, and set it back to draw the same numbers again.
- `next(): number`: Uniform in [0, 1). mulberry32.
- `fork(purpose: string | number): Rng`: A child generator for one purpose; does not advance this one.
- `range(min: number, max: number): number`: Float in [min, max).
- `int(min: number, max: number): number`: Integer in [min, max] (inclusive).
- `chance(p: number): boolean`
- `pick(items: readonly T[]): T`
- `weighted(items: readonly T[], weight: (item: T) => number): T`: Pick by weight; entries with weight <= 0 never come up.
- `shuffle(items: T[]): T[]`
- `gaussian(mean = 0, sd = 1): number`: Normal distribution (Box–Muller).

### class RopeMesh

- `new RopeMesh(body: VerletBody, material: Material, thickness = 0.06)`
- `readonly body: VerletBody`
- `sync(): void`

### SCREEN_LAYER

```ts
const SCREEN_LAYER: 2
```

The layer for screens and mirrors: drawn by the main camera, never by a RenderView.

### class ScreenFx

- `cover(kind: TransitionKind = 'fade', o: TransitionOptions = {}): Promise<boolean>`: Cover the picture (progress → 1). Resolves when it stops: `true` when it is fully covered, `false` when another transition (or `set`, `clear`) took over first.
- `reveal(kind?: TransitionKind, o: TransitionOptions = {}): Promise<boolean>`: Uncover it (progress → 0) with `kind` (default: the one that covered it). Resolves like `cover`.
- `transition(kind: TransitionKind, between: () => unknown, o: TransitionOptions & { revealCenter?: TransitionOptions['center'] } = {}): Promise<boolean>`: Cover, run `between` (load a level, teleport), then reveal, also when `between` throws (the error is passed on). Resolves to whether the cover completed.
- `set(kind: TransitionKind | null, progress: number): void`: Jump straight to a progress (0 clear, 1 covered), no animation.
- `flash(color: ScreenColor = 'white', o: FlashOptions = {}): void`: A full-screen flash that fades out.
- `shockwave(at: Vector3 | readonly [number, number], o: ShockwaveOptions = {}): void`: A ring that pushes the picture outwards from `at` (oldest ring is replaced when 4 run).
- `clear(): void`: Stop everything (a clear picture).
- `state(): ScreenFxState`
- `update(dt: number, camera: Camera | null): void`: Engine, every rendered frame (real seconds; `camera` projects world centres).
- `sampleNode(tex: any, scale: any): any`: Sample an art-resolution picture for the device pass, pushed by the shockwaves and blocked up by a mosaic transition, with the rings' bright edge. `tex` is the art target (a texture node); `scale` is device pixels per art pixel.
- `colorNode(color: any, scale: any): any`: The transition and the flash over a finished colour (device pass).

### interface ScreenFxState

What `state()` reports (tests, tools).

- `transition: TransitionKind | null`
- `progress: number`: 0 clear … 1 covered.
- `moving: boolean`: A transition is animating.
- `flash: number`
- `shockwaves: number`

### interface ShaderOptions

- `color?: number`
- `time?: any`: The clock it animates by (a float node). Default three's `time`, in seconds.

### interface ShakeState

A shake as data.

- `readonly trauma: number`
- `readonly t: number`
- `readonly offset: readonly number[]`
- `readonly applied: readonly number[]`

### interface ShockwaveOptions

- `radius?: number`: Final radius in screen heights. Default 0.45.
- `duration?: number`: Seconds (real time). Default 0.6.
- `strength?: number`: Push strength (1 = a strong blast). Default 1.

### skyAt()

```ts
function skyAt(hour: number): SkyState
```

The sky at `hour` (wraps around 24).

### interface SkyState

- `readonly sunDir: [number, number, number]`: Unit vector toward the sun (or the moon, at night).
- `readonly sunColor: number`
- `readonly sunIntensity: number`
- `readonly ambientColor: number`
- `readonly ambientIntensity: number`
- `readonly sky: number`: Background (sky) and fog colour.
- `readonly night: number`: 0 by day, 1 deep at night: lanterns, stars, windows.

### interface Snapshot

- `readonly format: 1`
- `readonly engine: string`: The engine version that took it (a different one may not restore the same).
- `readonly game: string`: The game's name: a snapshot restores into the same game.
- `readonly seed: number`: The engine seed and game time when it was taken.
- `readonly time: number`
- `readonly clock: ClockState`
- `readonly random: number`: `ctx.random`'s state.
- `readonly physics: PhysicsState`
- `readonly camera: CameraRigState`
- `readonly shake: ShakeState`
- `readonly input: InputState`
- `readonly state: unknown`: The game's own state (`Game.snapshot`), as JSON.

### snapshotProblem()

```ts
function snapshotProblem(v: unknown): string | null
```

Is `v` a snapshot this engine can restore? Returns the problem, or null.

### class SoftMesh

- `new SoftMesh(body: VerletBody, material: Material, o: { uv?: Float32Array; doubleSided?: boolean } = {})`
- `readonly body: VerletBody`
- `sync(): void`: Copy the particles into the mesh (call once per frame after stepping the body).

### class SpriteBatch

- `new SpriteBatch(sheet: SpriteSheet, o: { capacity: number })`
- `readonly sheet: SpriteSheet`
- `spawn(at: readonly [number, number, number], o: SpriteOptions = {}): number`: A new sprite (its index), or -1 when full.
- `set(i: number, o: SpriteOptions & { at?: readonly [number, number, number] }): void`: Move or change sprite `i`.
- `put(i: number, x: number, y: number, z: number, frame?: number, flip?: boolean): void`: `set` without the options object, for many sprites every frame: position, then frame and mirror.
- `at(i: number): [number, number, number]`: Where sprite `i` stands.
- `frameOf(i: number): number`: The frame sprite `i` shows.
- `dispose(): this`: Frees the GPU-related resources allocated by this instance

### interface SpriteOptions

- `size?: number`: Height in metres (the width follows the frame's aspect). Default 1.
- `frame?: number`
- `flip?: boolean`: Mirror left-right (a sprite facing the other way).

### interface SpriteSheet

- `readonly texture: Texture`: The sheet (nearest-filtered); `drawSheet` makes one from code. Frames run left to right, top to bottom, from the image's top-left; a texture with `flipY` false (a `DataTexture`) holds its rows top line first.
- `readonly frame: readonly [number, number]`: Frame size in pixels and the frames across and down.
- `readonly cols: number`
- `readonly rows: number`
- `readonly frames: number`

### swayMaterial()

```ts
function swayMaterial(material: Material, wind: WindUniforms, o: SwayOptions): Material
```

A room-owned copy of `material` that sways. For ordinary meshes: heights are in the mesh's
own space (`positionGeometry`), measured from its origin (an instanced mesh would need its
own per-instance base).

### swayObject()

```ts
function swayObject(root: Object3D, wind: WindUniforms, o: SwayOptions): void
```

Make every mesh under `root` sway (its materials replaced by swaying copies).

### interface SwayOptions

- `height: number`: Height (in the mesh's own units) of its top: the lean is 0 at `base` and full there.
- `base?: number`: Where the lean starts (the trunk below stays still). Default 0.
- `amount?: number`: Lean at the top per unit of wind. Default 0.15.
- `phase?: number`: Its own phase (radians): neighbours don't move in lockstep.

### type Team

```ts
type Team = 'enemy' | 'player'
```

### class Terrain

- `new Terrain(o: TerrainOptions = {})`
- `readonly nx: number`
- `readonly nz: number`
- `readonly sizeX: number`
- `readonly sizeZ: number`
- `readonly at: readonly [number, number, number]`
- `readonly heights: Float32Array`: Heights at the grid points, row by row along z: `heights[ix + iz * (nx + 1)]`.
- `readonly mesh: Mesh`
- `collider: RAPIER.Collider | null`
- `get cell: [number, number]`: Metres between grid points along x and z.
- `pointX(ix: number): number`: World x, z of grid point (ix, iz).
- `pointZ(iz: number): number`
- `generate(f: (x: number, z: number) => number): this`: Fill the heights from `f(x, z)` (world x, z; metres above the terrain's origin), then redraw.
- `heightAt(x: number, z: number): number`: Height of the surface at world (x, z), in world y: the triangle it is over, as the mesh and the collider have it. Outside the grid: its nearest edge.
- `normalAt(x: number, z: number, out = new Vector3()): Vector3`: The surface's normal at world (x, z) (central differences over half a cell).
- `update(): void`: Redraw the mesh from the heights (positions, flat normals, colours per face).
- `attach(physics: Physics): RAPIER.Collider`: Make (or remake, after `generate` / `erode`) the heightfield collider: a fixed body at the terrain's origin. Returns it.
- `detach(): void`: Remove the collider (the mesh stays).
- `dispose(): void`: The collider and the mesh's geometry go (the shared material stays).
- `erode(o: ErosionOptions = {}): void`: Hydraulic erosion: `droplets` raindrops, each rolling downhill from a random point. A drop carries soil up to a capacity that grows with its speed, water and how steeply it is falling: below capacity it digs (over a small radius), above it, or going uphill, i…

### TERRAIN_BANDS

```ts
const TERRAIN_BANDS: readonly TerrainBand[]
```

Sea, beach, grass, forest, rock, snow (the engine palette).

### interface TerrainBand

- `below: number`: Heights below this (metres above the terrain's origin) take this colour.
- `color: number`

### interface TerrainOptions

- `size?: readonly [number, number]`: Size in metres along x and z (default [32, 32]).
- `cells?: readonly [number, number]`: Cells along x and z (default one per metre).
- `at?: readonly [number, number, number]`: Where the middle of the grid's height 0 is (default the origin).
- `bands?: readonly TerrainBand[]`: Colour by height, lowest first; the last band takes everything above.
- `steep?: number`: Faces steeper than this (their normal's y below it) are rock. Default 0.72 (about 44°).
- `rock?: number`

### class Timeline

- `new Timeline(o: TimelineOptions)`
- `readonly duration: number`
- `time: number`: The playhead (s).
- `playing: boolean`
- `speed: number`: Playback rate (1: real time, 0.5: slow motion).
- `ended: boolean`: True once the end has been reached (by playing or skipping).
- `readonly fired: string[]`: Cue names in the order they fired (tests and tools).
- `play(): void`
- `pause(): void`
- `update(dt: number): void`: Advance by `dt` seconds of game time (times `speed`) while playing, firing the cues passed.
- `seek(t: number): void`: Move the playhead to `t` without firing the cues in between (scrubbing). Cues before `t` count as done and cues after it will fire again (going back re-arms them). Ignored while skipping (a cue that loops back cannot undo a skip).
- `skip(): void`: Jump to the end: the cues not yet fired run (except the cosmetic ones), then `onEnd`. Cues after `duration` never fire, played or skipped.
- `camera(t = this.time): CameraShot | null`: Where the camera is at `t` (default now): on each key at its time, gliding between keys on a smooth curve (Catmull-Rom tangents, so the speed has no jolt at a key; the first and last key of each shot ease in and out). A `cut` key starts a new shot. Null witho…
- `line(t = this.time): Line | null`: The subtitle showing at `t` (default now), or null.
- `bars(t = this.time): number`: How far the letterbox bars are in (0..1) at `t` (default now): sliding in at the start, out at the end.

### interface TimelineLine

- `at: number`
- `until: number`
- `text: string`
- `who?: string`: Who is speaking (shown before the text).

### interface TimelineOptions

- `shots?: readonly CameraKey[]`
- `cues?: readonly Cue[]`
- `lines?: readonly Line[]`
- `duration?: number`: Length (s); default the last key, cue or line.
- `bars?: number`: Seconds the letterbox bars take to slide in and out (default 0.6; 0: no bars).
- `onEnd?: () => void`: Called once when the playhead reaches the end (or the scene is skipped).

### interface TraceRow

- `name: string`
- `kind: string`
- `depth: number`
- `status: Status | null`: This tick's answer, or null if this tick never reached the node.

### class Trail

- `new Trail(o: TrailOptions = {})`
- `readonly capacity: number`
- `width: number`
- `life: number`
- `readonly head: Color`: Head and tail colours (live: `trail.head.setHex(...)`).
- `readonly tail: Color`
- `push(p: Vector3, time: number): void`: The trail's newest point (call every frame while it moves).
- `reset(): void`: Drop every point.
- `get length: number`: Points alive now.
- `update(time: number, camera: Camera): void`: Per frame: forget old points, rebuild the ribbon facing `camera`.
- `dispose(): void`: Frees the GPU-related resources allocated by this instance.

### interface TrailOptions

- `points?: number`: Most points kept. Default 24.
- `width?: number`: Width at the head (m).
- `life?: number`: Seconds a point lasts. Default 0.35.
- `color?: number`: Head and tail colours (hex).
- `tail?: number`
- `minStep?: number`: A new point only after moving this far (m). Default 0.05.

### TRANSITION_CELLS

```ts
const TRANSITION_CELLS: { readonly diamonds: 16; readonly blinds: 12; readonly dissolve: 3; readonly mosaic: 20; }
```

Art pixels per diamond cell, blind band, dissolve block; the most a mosaic block grows to.

### type TransitionKind

```ts
type TransitionKind = 'fade' | 'iris' | 'diamonds' | 'dissolve' | 'dither' | 'blinds' | 'wipe' | 'curtain' | 'mosaic'
```

Screen effects every output graph ends with (pixel and raw mode, every look): retro
**transitions** that cover the picture in art-pixel patterns, a **flash**, and up to four
**shockwave** rings that push the picture outwards. All of it is uniforms, so starting
one never rebuilds or recompiles a graph. `engine.screen`:

  await engine.screen.cover('iris', { center: hero.position });   // closes on the hero
  await engine.loadGame(next);
  await engine.screen.reveal('iris');
  engine.screen.flash('white', { duration: 0.1 });
  engine.screen.shockwave(blastPosition, { radius: 0.4, strength: 1 })…

### interface TransitionOptions

- `duration?: number`: Seconds (real time). Default 0.45.
- `color?: ScreenColor`: Colour it covers with. Default ink (palette black).
- `center?: Vector3 | readonly [number, number]`: Where an iris closes / a shockwave starts: a world point (a Vector3 is followed while it moves), or `[u, v]` on the screen (0..1 from the top-left). Default the middle.

### TRANSITIONS

```ts
const TRANSITIONS: readonly TransitionKind[]
```

Every transition, in the order a picker lists them.

### turtle()

```ts
function turtle(s: string, o: TurtleOptions = {}): { branches: Branch[]; leaves: Leaf[] }
```

Read an L-system string as a 3D turtle starting at the origin heading up (+y). Turns are about
the turtle's own axes (its heading is its +y): + turns the heading toward its −x and − toward
+x (about its z), & pitches it toward its +z and ^ toward −z (about its x), \ and / roll about
the heading, | turns round. `[` pushes position, orientation, length and radius (both shrink a
level), `]` pops. `!` thins the radius. `L` puts a leaf. Other symbols are ignored.

### interface TurtleOptions

- `angle?: number`: Turn per + − & ^ \ / (degrees, default 25).
- `length?: number`: Length of an F at the trunk (default 1).
- `lengthScale?: number`: Length kept per branching level (each `[`, default 0.8).
- `radius?: number`: Trunk radius (default 0.08).
- `radiusScale?: number`: Radius kept per branching level, and per `!` (default 0.65).
- `jitter?: number`: Degrees of random wobble on every turn (default 0), seeded.
- `seed?: number`
- `tropism?: { dir: V3; amount: number }`: Bend toward this direction a little each segment (gravity, light): [x, y, z] and how much per segment (radians).

### interface Tween

- `readonly done: Promise<boolean>`: Resolves when it stops: `true` when it played to the end, `false` when it was cancelled, taken over or cleared (the level unloaded: don't carry on with dead objects).
- `readonly active: boolean`
- `cancel(finish?: boolean): void`: Stop where it is (`finish`: jump to the target values first).

### interface TweenOptions

- `duration?: number`: Seconds (game time). Default 0.3.
- `delay?: number`: Seconds before it starts.
- `ease?: Ease`
- `repeat?: number`: Extra plays after the first (Infinity loops). With `yoyo`, each way counts as one.
- `yoyo?: boolean`: Play back the other way on every repeat.
- `onUpdate?: (progress: number) => void`
- `onComplete?: () => void`

### class Tweens

A set of running tweens (the engine keeps one per game: `ctx.tweens`).

- `get count: number`: Tweens still running.
- `to(target: T, to: Partial<Record<keyof T, number>>, options: TweenOptions = {}): Tween`: Glide `target`'s numeric properties to `to`. A new tween on the same target and property takes over (the old one stops where it is).
- `value(from: number, to: number, options: TweenOptions, apply: (v: number) => void): Tween`: Tween a plain number from `from` to `to`, calling `apply(v)` every frame.
- `call(seconds: number, fn: () => void): Tween`: Call `fn` after `seconds` of game time.
- `cancel(target?: object): void`: Stop every tween on `target` (or everything).
- `clear(): void`: Stop everything (level unload). Pending `done` promises resolve.
- `update(dt: number): void`

### interface WaterOptions

- `size: readonly [number, number]`: Width (x) and depth (z) of the surface, m.
- `at: readonly [number, number, number]`: Centre of the surface at rest.
- `segments?: readonly [number, number]`: Grid quads along x and z (default: one per ripple cell, or 4 per metre without ripples).
- `waves?: readonly Wave[]`
- `ripples?: RippleField | null`: A ripple field covering the same rectangle (its size and centre must match).
- `deep?: number`: Colours (hex): troughs, crests, foam.
- `shallow?: number`
- `foam?: number`
- `foamAt?: number`: Height above rest (m) where foam starts. Default: 75% of the waves' combined height (the tallest crests).
- `opacity?: number`: 1: opaque; less: see-through by a 4×4 ordered dither per art pixel.

### class WaterSurface

- `new WaterSurface(o: WaterOptions)`
- `readonly size: readonly [number, number]`
- `waves: Wave[]`
- `readonly ripples: RippleField | null`
- `readonly uOpacity: UniformNode<"float", number>`
- `readonly uFoamAt: UniformNode<"float", number>`
- `setWaves(waves: readonly Wave[]): void`: Change the waves (up to MAX_WAVES; the CPU height follows too).
- `update(time: number, sun?: Vector3): void`: Per frame: the waves' clock (use physics time: floaters read the same), the ripples, the sun.
- `heightAt(x: number, z: number, t = this.time): number`: World height of the drawn surface at (x, z) (waves and ripples), at the last `update` time or `t`.
- `covers(x: number, z: number): boolean`: Is (x, z) over this water?
- `dispose(): void`: Frees the GPU-related resources allocated by this instance.

### class Wfc

- `new Wfc(tiles: readonly WfcTile[], width: number, height: number, o: WfcOptions = {})`
- `readonly tiles: readonly WfcTile[]`
- `readonly wave: Uint8Array`: Options still open per cell: `wave[cell * tiles + t]` is 1 while tile t is possible.
- `readonly options: Uint16Array`: How many options each cell has left.
- `readonly result: Int32Array`: The chosen tile per cell (−1 until it has one option left).
- `attempt: number`: Starts so far (1 + the contradictions met).
- `done: boolean`: True once every cell has one tile, false while solving or after giving up.
- `failed: boolean`
- `choices: number`: Cells collapsed by choice (the rest followed from propagation).
- `readonly width: number`
- `readonly height: number`
- `restart(): void`: Start again from scratch (each start after the first uses the next seed).
- `run(): boolean`: Solve to the end (restarting on contradictions). True if every cell has a tile.
- `step(): boolean`: One collapse: the cell with the least entropy gets one tile, and that is propagated. Returns false when there is nothing left to do (solved, or given up).
- `entropy(c: number): number`: Shannon entropy of a cell's options, by weight (0 when it has one left).

### interface WfcOptions

- `seed?: number`
- `border?: string`: The socket every edge on the grid's outside must be (a closed map: '###'). Default: any.
- `fixed?: Readonly<Record<number, number>>`: Cells set before solving: cell index (x + y × width) → tile index (they may break the border: a way in).
- `attempts?: number`: Starts allowed before giving up on contradictions (default 30).

### interface WfcTile

- `readonly name: string`
- `readonly edges: readonly [string, string, string, string]`: North (−z, up the map), east (+x), south (+z), west (−x).
- `readonly weight?: number`: How often it is chosen, relative to the others (default 1).

### class WindUniforms

- `readonly time: any`
- `readonly wind: any`
- `update(time: number, wind: Vector2 | readonly [number, number]): void`: Per frame (game time); `wind` along x and z (its length is the strength).

### woodMaterial()

```ts
function woodMaterial(o: ShaderOptions = {}): MeshToonNodeMaterial
```

Wood: rings round the y axis, wobbled by noise, light and dark grain, toon-lit.
