import { AmbientLight, DirectionalLight, Scene, Vector3 } from 'three/webgpu';
import { loadModel } from './assets';
import { AudioManager } from './audio/AudioManager';
import { type CameraConfig, type CameraRig } from './camera';
import { DebugUI } from './DebugUI';
import { type DebugKeyMap, type DebugKeysOption } from './debugKeys';
import { type AspectMode, type Resolution } from './framing';
import { Hud } from './hud/Hud';
import { Input } from './input';
import { Particles } from './particles/Particles';
import { type TouchButton, TouchControls, type TouchCorner } from './TouchControls';
import { Settings } from './settings';
import { PALETTE } from './palette';
import { Physics } from './physics/Physics';
import { type QualityLevel, type QualityOption } from './quality';
import { type Look } from './render/look';
import { LightPool } from './render/lights';
import { type EdgeSettings, PixelRenderer, type RenderMode } from './render/PixelRenderer';
import { Rng } from './random';
import { type Recording } from './replay';
import { CameraShake } from './shake';
import { type Snapshot } from './snapshot';
import { Tweens } from './tween';
import type { ScreenFx } from './render/screenFx';
export interface GameContext {
    readonly engine: Engine;
    readonly scene: Scene;
    readonly physics: Physics;
    readonly input: Input;
    readonly camera: CameraRig;
    readonly loadModel: typeof loadModel;
    readonly palette: typeof PALETTE;
    /** Game time in seconds since start. Frozen while paused or loading. */
    readonly time: number;
    /**
     * This level's seeded randomness (src/engine/random.ts): the same engine seed and game give
     * the same numbers. Use it (or forks of it) for everything random; never Math.random.
     */
    readonly random: Rng;
    /** Sound effects, music, volumes (src/engine/audio). */
    readonly audio: AudioManager;
    /** Pixel particles: `particles.burst('dust', at)` (src/engine/particles). */
    readonly particles: Particles;
    /** Pixel HUD text and icons in art pixels (src/engine/hud). */
    readonly hud: Hud;
    /**
     * Dynamic point lights: `lights.request({ position, color, intensity, radius, flicker })`
     * (src/engine/render/lights.ts). A fixed pool sized by quality, created on first use.
     */
    readonly lights: LightPool;
    /**
     * Tweens on game time: `tweens.to(door.position, { y: 3 }, { duration: 0.8, ease: 'outBack' })`
     * (src/engine/tween.ts). Cleared when the level unloads.
     */
    readonly tweens: Tweens;
}
/**
 * A game is a plain object. The engine owns rendering, physics stepping, camera,
 * lighting and debug UI; the game only builds its world and reacts to input.
 */
export interface Game {
    readonly name: string;
    /**
     * Models `setup` will load (`ctx.loadModel` URLs). Optional: listing them lets the
     * engine start downloading while the renderer and physics initialise.
     */
    readonly assets?: readonly string[];
    /** Build the level: load models, add colliders, spawn entities. */
    setup(ctx: GameContext): Promise<void> | void;
    /** Runs before every fixed 60 Hz physics step. Move characters/apply forces here. */
    fixedUpdate?(ctx: GameContext, dt: number): void;
    /** Runs once per rendered frame after physics (animation, pickups, UI state). */
    update?(ctx: GameContext, dt: number): void;
    /** World position the camera follows. */
    cameraTarget(ctx: GameContext): Vector3;
    /** First-person eye position (defaults to cameraTarget + 0.7 up). */
    eyePosition?(ctx: GameContext): Vector3;
    /** One-line status for the debug UI (score, lives...). */
    status?(ctx: GameContext): string;
    /**
     * The game's own state as a short string or hash, for `engine.fingerprint()`: what lives
     * outside physics and `ctx.random` (positions, life, counters, the game's own random
     * streams), so two runs that should match (a replay) can be compared. Only what a replay must
     * reproduce: no timings or measurements.
     */
    fingerprint?(ctx: GameContext): string;
    /**
     * The game's own state as plain data, between frames (`engine.snapshot()`): everything a
     * later frame reads that the engine does not keep (its entities, timers, random streams; the
     * handles of its physics bodies). With `restore`, the game has save-states.
     */
    snapshot?(ctx: GameContext): unknown;
    /**
     * Put the game back to what `snapshot` returned (`engine.restore()`): the same game, already
     * set up. Find physics bodies again by handle (`ctx.physics.world.getRigidBody(h)`).
     */
    restore?(ctx: GameContext, state: unknown): void | Promise<void>;
    /**
     * Optional: leave whatever mode the game is in before a restore changes anything (a mode
     * with a camera of its own, a dialog, a level): `engine.restore()` calls it first, then checks
     * the snapshot fits (the camera preset) and puts the engine's part back, then `restore`.
     */
    beforeRestore?(ctx: GameContext): void | Promise<void>;
    /**
     * Called after `engine.setCamera()` swapped the camera preset mid-game. The world,
     * physics and player are untouched; adjust anything that depends on the preset
     * (e.g. side-scroller lane lock, hiding the player model in first person).
     */
    onCameraChange?(ctx: GameContext): void;
    /**
     * Called when the game is unloaded (`engine.loadGame(other)` or `engine.dispose()`),
     * before the engine removes its scene objects, physics bodies, triggers, particles, HUD
     * and music. Free anything else the game owns: DOM, timers, listeners, HMR hooks.
     */
    dispose?(ctx: GameContext): void;
}
export interface EngineOptions {
    container?: HTMLElement;
    resolution?: Resolution;
    /**
     * `adaptive` (default): the art height stays `resolution.height` and the art width
     * follows the screen's aspect (portrait phones fill the screen). `fixed`: always exactly
     * `resolution`, letterboxed. `fill`: adjusts both art dimensions to cover the viewport
     * at an integer scale, without black borders or stretched pixels.
     */
    aspect?: AspectMode;
    /**
     * Cap the render loop (simulation keeps its fixed 60 Hz physics step). Default 60, so
     * 120 Hz phones don't run the whole pipeline twice per game frame. 0 = display rate.
     */
    maxFps?: number;
    /** Shadow map quality, or `auto` (default: low on touch devices, else medium; lowered once on a slow start). */
    quality?: QualityOption;
    /** Pixel-styled loading indicator while the renderer, physics and assets load. Default true. */
    loadingScreen?: boolean;
    mode?: RenderMode;
    edges?: EdgeSettings;
    /** Camera preset + parameters. Pick one per game; not meant to change during play. */
    camera?: CameraConfig;
    /** Post filters (ids from FILTERS) applied in Pixel mode, in order. */
    filters?: readonly string[];
    /**
     * A full look: pixel art or clean rendering and filters per layer (characters & objects,
     * environment) plus whole-scene filters (render/look.ts). Wins over `filters` and `edges`.
     */
    look?: Look;
    /**
     * Seed for `ctx.random`: each level gets its own stream from this and the game's name, so
     * the same seed replays the same game. Default 1. `?seed=` in the URL.
     */
    seed?: number;
    /**
     * Frames of input the engine keeps for each level (`recording()`). Default `MAX_FRAMES`, an
     * hour at 60 fps (up to some 20 MB of JSON with the mouse moving all the time); 0 records nothing.
     */
    record?: number;
    /** Debug panel. Default: on in dev (`vite`) or with ?debug=1, off in production builds. */
    debugUI?: boolean;
    /**
     * Engine hotkeys (P Pixel/Raw, R resolution, ` debug panel, [ ] looks, M mute): developer
     * tools. Default: on with the debug panel (dev, ?debug=1), off in a shipped game, whose players
     * have the same options in the settings. `true` / `false`: always on / off; an object rebinds
     * or disables (null) single actions, and they still come with the debug panel.
     */
    debugKeys?: DebugKeysOption;
    /**
     * The player's settings (`engine.settings`): look, pixel art, pixel size, quality, frame rate,
     * sound and debug info, in a panel the ⚙ button opens. `button`: its corner (default, or true:
     * 'top-right'; on a mouse it shows while the pointer moves), or false for none: open the
     * panel from your own menu (`engine.settings.open()`). `key`: where they are saved
     * (localStorage `pixel-engine:settings:<key>`; default the first game's name), false: nowhere.
     */
    settings?: {
        button?: TouchCorner | boolean;
        key?: string | false;
    };
    /** On-screen joystick + buttons. Default: auto (coarse pointer), or ?touch=1 / ?touch=0. */
    touch?: boolean;
    /** On-screen action buttons. Default: the platformer's (DEFAULT_TOUCH_BUTTONS). */
    touchButtons?: readonly TouchButton[];
    /**
     * The touch top bar of the engine hotkeys (ⓘ debug panel, P, R, ◐ looks, ♪ mute), on a touch
     * screen while they are on (see `debugKeys`). Default true; false hides it even then, unless
     * the debug panel is on (`?debug=1`, dev builds).
     */
    touchBar?: boolean;
    background?: number;
}
/**
 * Read engine options from the URL:
 *   ?mode=raw  ?res=320  ?debug=1|0
 *   ?aspect=fixed|adaptive  ?fps=30 (0 = uncapped)  ?quality=low|medium|high|auto
 *   ?camera=iso|topdown|side|third|first|free|fixed  ?zoom=1.5
 *   ?cam=<JSON CameraConfig>   (e.g. the config printed by the free camera)
 *   ?filters=crt,lcd  or  ?look=handheld (a LOOK_PRESETS name, e.g. pixel_heroes)
 */
export declare function optionsFromUrl(search?: string): Partial<EngineOptions>;
/**
 * A game's own options with the review flags from the page URL (optionsFromUrl) on top:
 * `Engine.start(game, withUrlOptions({ container, camera: { preset: 'side', zoom: 1.2 } }))`.
 * The camera is merged key by key (`?zoom=1.5` keeps the game's `side` preset), and
 * `?filters=` replaces the game's look (a look would win over filters otherwise).
 */
export declare function withUrlOptions(options: EngineOptions, search?: string): EngineOptions;
export declare class Engine {
    readonly renderer: PixelRenderer;
    readonly physics: Physics;
    camera: CameraRig;
    readonly scene: Scene;
    /** The engine's version (package.json). */
    static readonly version: string;
    /**
     * Errors thrown by the game's hooks while the render loop ran, each message once, oldest
     * first (at most 20). They are logged to the console and shown in a box on screen; the
     * frame keeps rendering so the picture stays up. Fix the first one first. (`step()` throws
     * a hook's error to its caller instead: it is for tools.)
     */
    readonly errors: string[];
    readonly input: Input;
    readonly sun: DirectionalLight;
    readonly ambient: AmbientLight;
    readonly context: GameContext;
    readonly audio: AudioManager;
    readonly particles: Particles;
    readonly hud: Hud;
    /** Tweens on game time (`ctx.tweens`). */
    readonly tweens: Tweens;
    /**
     * Screen shake (trauma 0..1): `engine.shake.add(0.4)`. Added to the camera after the rig
     * placed it, on real time; ortho cameras move by whole art pixels. Reset on level unload.
     */
    readonly shake: CameraShake;
    /** Game time from real time: the speed and hitstops (`timeScale`, `hitstop()`). */
    private readonly clock;
    debug: DebugUI | null;
    touch: TouchControls | null;
    /**
     * The player's settings: look, pixel art, pixel size, quality, frame rate and debug info (plain
     * data, saved per game), applied over the game's own choices; `open()` shows them in the
     * settings panel (the ⚙ button, `EngineOptions.settings`). Sound is `audio`'s.
     */
    readonly settings: Settings;
    private settingsPanel;
    /** Whether the game was paused when the settings opened (they pause it, and give it back). */
    private pausedBeforeSettings;
    /** The dynamic light pool, created on first use of `ctx.lights` / `engine.lights`. */
    private _lights;
    /** Active engine hotkeys (from EngineOptions.debugKeys; none until the engine starts). */
    debugKeys: DebugKeyMap;
    private _game;
    private _paused;
    /** False while a game's setup() is running (start, loadGame): nothing advances. */
    private ready;
    private disposed;
    /** Incremented by every loadGame() and by dispose(): a load that is no longer the latest stops. */
    private loadToken;
    /** The load in flight (loads run one at a time), if any. */
    private loading;
    /** What a level may change and the next level starts from again (see unloadGame). */
    private defaults;
    /**
     * Tooling: the render loop stops driving the game; advance it yourself with `step()`.
     * Frame-exact and independent of how fast the browser renders (filmstrips, replays).
     */
    manual: boolean;
    frame: number;
    /** Rendered frames per second (measured over ~0.5 s). */
    fps: number;
    /** Requested quality (`auto` adapts); `quality` is the level in use. */
    readonly qualityOption: QualityOption;
    private _quality;
    /** The game's own camera config; switching back to its preset restores zoom, yaw etc. */
    private startCamera;
    time: number;
    private lastTime;
    private readonly limiter;
    private fpsFrames;
    private fpsSince;
    /** `auto` quality: one measurement window after start-up (ms timestamps), then done. */
    private autoQuality;
    /** The level `auto` gives: the device's, then what the measurement chose. */
    private autoLevel;
    private autoMeasured;
    private readonly sunDirection;
    private readonly sunRight;
    private readonly sunUp;
    private readonly sunFocus;
    private shadowRadius;
    /** Shadow depth-bias unit: one shadow texel in normalized light depth. */
    private readonly shadowTexelDepth;
    private readonly tmp;
    private readonly eye;
    private readonly cameraWorld;
    private readonly cameraUpdate;
    private constructor();
    /** The running game. Replace it with `loadGame()`. */
    get game(): Game;
    /**
     * Freeze simulation, animation, particles and game time (rendering continues). For
     * tooling, capture and pause menus. Queued key presses are dropped while paused.
     */
    get paused(): boolean;
    set paused(value: boolean);
    /**
     * The dynamic light pool (render/lights.ts), engine-owned: its lights stay in the scene
     * across levels, so loading another level never changes the light count (no recompiles).
     * Created on first use; sized by quality.
     */
    get lights(): LightPool;
    /**
     * Game speed: 1 normal, 0.25 slow motion, 2 double, 0 frozen (a menu: key presses made
     * meanwhile are dropped, like a pause). Scales game time, physics, animation, particles,
     * tweens and the camera follow; not transitions, shake or the render loop. Back to 1 when a
     * level unloads. Values that aren't numbers are ignored.
     */
    get timeScale(): number;
    set timeScale(v: number);
    /**
     * Freeze the game for `seconds` of real time: impact frames that sell a hit. Rendering,
     * screen shake and transitions keep going; overlapping hitstops keep the longest. Key
     * presses made during a hitstop still count afterwards (a buffered jump).
     */
    hitstop(seconds: number): void;
    /** Transitions, flashes and shockwaves (render/screenFx.ts): `await engine.screen.cover('iris')`. */
    get screen(): ScreenFx;
    /** The direction sunlight comes from (unit, pointing at the sun). */
    get sunDir(): Vector3;
    /**
     * Point the sun (and its shadows): a direction toward the sun, normalised here. A level's
     * time of day or a sun dial; reset to the engine default when the level unloads. Below the
     * horizon the sun is kept just above it (lower `sun.intensity` for night instead).
     */
    setSunDirection(dir: Vector3 | readonly [number, number, number]): void;
    /** The quality level in use (see `EngineOptions.quality`). */
    get quality(): QualityLevel;
    /**
     * Quality by option: a level, or `auto`: the device's level (low on phones and tablets, else
     * medium), lowered once if a few seconds of frames are slow (measured once, then remembered).
     */
    useQuality(option: QualityOption): void;
    /** Whether the debug panel is showing. */
    get debugShown(): boolean;
    /** Show or hide the debug panel (created the first time it shows, filled at once: the loop fills it only while the game runs). */
    showDebug(on: boolean): void;
    setQuality(level: QualityLevel): void;
    /** Frame cap of the render loop (0 = display rate). */
    get maxFps(): number;
    set maxFps(fps: number);
    static start(game: Game, options?: EngineOptions): Promise<Engine>;
    /** Debug panel, touch controls, then the render loop. */
    private finishStart;
    /**
     * Swap the camera preset mid-game (review tool: presets are a per-game choice). The
     * player, physics and the rest of the world are left exactly as they are. `free` and
     * `fixed` without an explicit position start from the view currently on screen.
     * Keeps `?camera=` in the URL in sync so a reload restores the preset; a game that swaps
     * presets as part of play (a side-scroller stage, a first-person hall, a photo mode) passes
     * `{ syncUrl: false }` so a reload still starts with its own camera.
     */
    setCamera(config: CameraConfig, options?: {
        syncUrl?: boolean;
    }): CameraRig;
    private wireRig;
    toggleMode(): RenderMode;
    toggleResolution(): Resolution;
    /** Every filter id the engine ships (see render/filters.ts). */
    get availableFilters(): readonly string[];
    get filters(): readonly string[];
    setFilters(ids: readonly string[]): void;
    /** The current look (a copy): per-layer pixel art and filters, whole-scene filters. */
    get look(): Look;
    /** Every named look (LOOK_PRESETS): `engine.setLook(engine.lookPresets.pixel_heroes)`. */
    get lookPresets(): Readonly<Record<string, Look>>;
    /** Apply a look (render/look.ts); `LOOK_PRESETS` has named ones. */
    setLook(look: Look): void;
    /** Cycle through LOOK_PRESETS ([ and ] keys). */
    cycleLook(step: 1 | -1): string;
    /** Snapshot for tests, tooling and agents. */
    state(): {
        version: string;
        game: string;
        seed: number;
        ready: boolean;
        paused: boolean;
        time: number;
        timeScale: number;
        hitstop: number;
        screen: import(".").ScreenFxState;
        backend: "WebGPU";
        mode: RenderMode;
        resolution: {
            width: number;
            height: number;
        };
        aspect: AspectMode;
        framing: {
            artWidth: number;
            artHeight: number;
            scale: number;
            integer: boolean;
            canvasWidth: number;
            canvasHeight: number;
            cssWidth: number;
            cssHeight: number;
            offsetX: number;
            offsetY: number;
        };
        frame: number;
        fps: number;
        maxFps: number;
        quality: QualityLevel;
        gpuRecoveries: number;
        physicsSteps: number;
        gpuErrors: {
            api: string;
            type: string;
            message: string;
        }[];
        /** Errors the game's hooks threw in the render loop (each once; also on screen). */
        errors: string[];
        target: import("three").Vector3Tuple;
        camera: import("three").Vector3Tuple;
        cameraRig: Record<string, unknown>;
        /** Visible world extents of an orthographic camera (what's in frame). */
        view: {
            left: number;
            right: number;
            top: number;
            bottom: number;
        } | null;
        filters: string[];
        /** The look preset in use, or `custom`; `split` when layers render as two passes. */
        look: string;
        split: boolean;
        status: string;
    };
    /**
     * Tooling: switch to manual time and advance `n` frames of `dt` seconds (simulation,
     * animation, camera). Nothing is drawn; call `renderer.capture()` to see the result.
     */
    step(n?: number, dt?: number): void;
    /**
     * One manual frame (`step()`), its input live or from a recorded frame (`replay()`). A game
     * hook's exception finishes the frame first, then is thrown to the caller of `step()`; in a
     * replay it is reported and the replay goes on, as in live play (`tick()`).
     */
    private frameStep;
    /** The end of every frame: input's per-frame state goes, and a marker notes when promise callbacks run. */
    private endFrame;
    /**
     * Unload the running game and start `game` in the same engine (renderer, canvas,
     * camera rig, input, audio context and debug UI stay).
     *
     * Safe to call from anywhere, including a game's own hooks (a level door in `update`,
     * `fixedUpdate` or a trigger's `onEnter`): the swap waits for the current frame to end.
     * Loads run one at a time, and only the latest one wins: a newer `loadGame()` (or
     * `dispose()`) makes an older one stop after its `setup()`, and the newer one unloads
     * whatever it built. The returned promise resolves when the level runs (or was superseded).
     *
     * Unloading calls the old game's `dispose(ctx)`, removes every scene object that is not
     * engine-owned and frees its GPU resources, clears physics (bodies, colliders, joints,
     * controllers, triggers, tags, movers, force fields, belts; gravity and the solver back to
     * their defaults), particles, HUD and music, and resets the scene background, fog and the
     * sun / ambient light to the engine defaults. Filters, render
     * mode, resolution, quality, volumes and the camera rig carry over; pass `camera` to
     * switch the preset (applied before `setup()`, so `ctx.camera` is already the new one).
     * Nothing advances while loading, and input made while loading is dropped (data sent with
     * `ctx.input.send` waits for the first frame that runs).
     */
    loadGame(game: Game, options?: {
        camera?: CameraConfig;
    }): Promise<void>;
    /**
     * Stop the loop and free everything: game, scene, physics, audio, input listeners, DOM,
     * GPU. With a `loadGame()` in flight, the world and GPU resources are freed once its
     * `setup()` has finished (it never runs against a freed physics world or renderer).
     */
    dispose(): void;
    /** Switch the camera preset for a level that is loading (no game hooks, no URL sync). */
    private useCamera;
    /** Start running the game: nothing pressed or timed while loading carries over. */
    private becomeReady;
    private readonly loop;
    /** The seed every level's `ctx.random` comes from (`EngineOptions.seed`, `?seed=`; a replay sets it). */
    get seed(): number;
    private _seed;
    private _random;
    /** The running level's recording (from its start), and whether a replay is driving the frames. */
    private rec;
    private replaying;
    private readonly recordLimit;
    /** Whether promise callbacks (microtasks) ran since the last frame ended (`InputFrame.sync`). */
    private drained;
    private readonly markDrained;
    /** This level's seeded randomness (`ctx.random`). */
    get random(): Rng;
    /** A fresh stream for `game`, before its setup: the same seed and game give the same numbers. */
    private reseed;
    /** Keep this frame's input in the level's recording (live play and `step()`, not replays). */
    private record;
    /**
     * The running level's recording: its seed, when it began and every frame's input since
     * (src/engine/replay.ts). Plain JSON: save it, attach it to a bug, replay it with `replay()`.
     */
    recording(): Recording | null;
    /**
     * Play a recording back: its seed and start time are restored, `start` loads the level it was
     * made in (e.g. `() => engine.loadGame(new MyGame())`; it must not wait on frames, so load
     * without a transition), then every frame runs with the recorded input, in manual time
     * (`step()`), waiting for promise callbacks wherever the recorded run did. `frames` stops
     * early. Afterwards the level is where the recorded one was (`fingerprint()` matches if the
     * game is deterministic) and stays in manual time: `step()` plays on from there, live, and
     * the level's recording carries on from it. Live input is ignored during a replay, from the
     * moment `start` runs (`input.playing`: a game's setup can tell); afterwards nothing the
     * recording held stays held. A game hook's exception is reported and the replay
     * goes on, as in live play.
     */
    replay(rec: Recording, start: () => unknown, o?: {
        frames?: number;
    }): Promise<void>;
    /**
     * The running level as data, between frames (docs/ENGINE.md, *Save-states*): game time, the
     * clock, `ctx.random`, the physics world, the camera, the shake, input still waiting, and the
     * game's own state (`Game.snapshot`). Plain JSON. Taken once the last frame's promise
     * callbacks have run (it waits a task, as a replay does between frames). Throws when the game
     * has no `snapshot` / `restore`, while a tween runs (its callbacks are code), or with physics
     * that lives outside the Rapier world (`Physics.state`).
     */
    snapshot(): Promise<Snapshot>;
    /**
     * Put the running level back to a snapshot of it: the same game (by name), already loaded;
     * nothing in between is replayed. The level's recording starts again from it (`Recording.from`),
     * so what is played next replays with `replay()`. Live input held now is let go.
     */
    restore(saved: Snapshot): Promise<void>;
    /** A task boundary: promise callbacks queued so far (and chains of them) have run when it resolves. */
    private task;
    /**
     * A hash of the simulation: game time, every physics body (exact), `ctx.random`'s state and
     * the game's own (`Game.fingerprint`). Two runs that should be the same (a replay) compare equal. Not the `status()` line: a
     * debug line may carry measurements (a step's milliseconds) that differ run to run.
     */
    fingerprint(): string;
    private unloadGame;
    private tick;
    /** A game hook threw in the render loop: log it (once per message) and show it on screen. */
    private reportError;
    private handleDebugKeys;
    /** Rendered-fps counter, and the one-shot `auto` quality check a few seconds in. */
    private measure;
    /**
     * One frame of simulation, game logic, camera and light (no drawing). `dt` is game time
     * (scaled, 0 in a hitstop); `realDt` drives the screen shake.
     */
    private advance;
    /** How far from the camera focus a light can matter: half the view diagonal. */
    private lightRange;
    /** Camera follow + shadow box for the current game state. */
    private updateView;
    private readonly fixedStep;
    /**
     * Fit the sun's shadow box to what the camera sees: ortho presets cover the visible
     * ground (so zooming out keeps shadows), perspective presets cover a box reaching ahead
     * of the camera. The box moves in whole shadow texels so shadow edges don't crawl while
     * the camera follows the player.
     */
    private updateShadow;
}
