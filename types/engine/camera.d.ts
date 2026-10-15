import { type Camera, OrthographicCamera, PerspectiveCamera, Vector3 } from 'three/webgpu';
import { type Resolution } from './framing';
import type { Input } from './input';
/**
 * Camera presets. A game picks ONE at startup (EngineOptions.camera / `?camera=`). For
 * reviewing, `engine.setCamera()` swaps presets live without touching the world. `free`
 * is an authoring tool: fly around, press Enter to fix the view, and paste the printed
 * `fixed` config into your game.
 */
export type CameraPreset = 'iso' | 'topdown' | 'side' | 'third' | 'first' | 'free' | 'fixed';
export declare const CAMERA_PRESETS: readonly CameraPreset[];
export interface CameraConfig {
    preset?: CameraPreset;
    /** Zoom factor, 1 = preset default, >1 = closer. Ignored by `first`. */
    zoom?: number;
    minZoom?: number;
    maxZoom?: number;
    /** Ortho presets: visible world height at zoom 1. */
    viewHeight?: number;
    /** iso: degrees below horizon / around Y. */
    pitch?: number;
    yaw?: number;
    /** Perspective presets: vertical field of view in degrees. */
    fov?: number;
    /** third: orbit distance at zoom 1. */
    distance?: number;
    /** fixed: camera position and look-at target. */
    position?: [number, number, number];
    target?: [number, number, number];
    /** fixed/free: projection. */
    projection?: 'perspective' | 'ortho';
    /** Follow smoothing; higher is snappier. */
    stiffness?: number;
}
/** What rigs may ask of the world (e.g. third-person wall avoidance). */
export interface CameraWorld {
    /** Distance from `from` along `dir` to the first obstacle, or null. */
    raycast?(from: Vector3, dir: Vector3, maxDistance: number): number | null;
}
export interface CameraUpdate {
    /** Point to follow (character center/chest). */
    target: Vector3;
    /** First-person eye point. */
    eye: Vector3;
    dt: number;
    resolution: Resolution;
    input: Input;
    world: CameraWorld;
    /**
     * Screen shake: added to the camera's position after the rig placed it (the engine's
     * `CameraShake`). Ortho rigs move it by whole art pixels.
     */
    shake?: Vector3;
}
/** Where a rig is and looks, as data (`engine.snapshot()`): the frame after a restore sees the camera the frame after the snapshot did. */
export interface CameraRigState {
    readonly preset: CameraPreset;
    readonly focus: readonly number[];
    readonly zoom: number;
    readonly aspect: number;
    readonly position: readonly number[];
    readonly quaternion: readonly number[];
    readonly shaken: readonly number[];
    /** What a preset keeps of its own (an orbit's yaw, pitch and distance). */
    readonly own: Readonly<Record<string, number>>;
}
/** Base rig: owns the three.js camera, zoom and the ground-plane movement basis. */
export declare abstract class CameraRig {
    abstract readonly preset: CameraPreset;
    abstract readonly camera: OrthographicCamera | PerspectiveCamera;
    /** World point the rig is centred on (used for shadow framing). */
    readonly focus: Vector3;
    zoom: number;
    readonly minZoom: number;
    readonly maxZoom: number;
    /** Whether zoom applies (all presets except first person). */
    readonly zoomable: boolean;
    /** First person hides the player model. */
    readonly hidesTarget: boolean;
    /** Side-scroller: characters should stay on their depth lane. */
    readonly lockDepth: boolean;
    /** False while the free camera is flying (input drives the camera, not the player). */
    controlsCharacter: boolean;
    /** Pixel-snap the camera (ortho only). */
    snap: boolean;
    /** Viewport aspect (width / height), following the art resolution (see `setAspect`). */
    aspect: number;
    protected readonly stiffness: number;
    constructor(config: CameraConfig);
    /**
     * The ray through screen point (x, y) in normalised device coordinates (−1..1, y up, as
     * `input.pointer` gives them): where it starts (on the near plane) and its unit direction.
     * For picking things with the mouse, or aiming at it. An orthographic rig stands far back from
     * what it frames (over a hundred metres for iso), so its rays start far from the scene: cast
     * them long (hundreds of metres).
     */
    rayAt(x: number, y: number, origin: Vector3, dir: Vector3): void;
    setZoom(zoom: number): void;
    /**
     * Match the art resolution's aspect (adaptive framing changes it with the screen).
     * `update()` calls this from `CameraUpdate.resolution`; the engine also calls it on swap.
     */
    setAspect(aspect: number): void;
    /** Called once after construction and whenever zoom (or the aspect of an ortho camera) changes. */
    protected abstract applyZoom(): void;
    /** Place the camera without smoothing. */
    teleport(target: Vector3): void;
    /** Screen-relative movement basis on the ground plane. */
    groundBasis(): {
        right: Vector3;
        forward: Vector3;
    };
    update(u: CameraUpdate): void;
    protected abstract step(u: CameraUpdate): void;
    /** The shake offset actually applied this frame (zero when still). */
    private readonly shaken;
    /** The offset a shake moves the placed camera by (into `out`). */
    protected shakeOffset(offset: Vector3, out: Vector3): void;
    /** Serializable description (debug UI, `state()`). */
    describe(): Record<string, unknown>;
    /** The rig as data, exact (`engine.snapshot()`). */
    state(): CameraRigState;
    /** Put the rig back where `state()` found it (the same preset). */
    setState(s: CameraRigState): void;
    /** What a preset keeps beyond the base (`state()`). */
    protected ownState(): Record<string, number>;
    protected setOwnState(own: Readonly<Record<string, number>>): void;
    protected follow(target: Vector3, dt: number): void;
}
/** Orthographic presets: classic 3/4 isometric, straight top-down, straight side-on. */
export declare class OrthoRig extends CameraRig {
    readonly camera: OrthographicCamera;
    readonly preset: 'iso' | 'topdown' | 'side';
    readonly lockDepth: boolean;
    readonly baseViewHeight: number;
    private readonly offset;
    private readonly right;
    private readonly up;
    private readonly forward;
    private readonly tmp;
    /** World units per art pixel at the last update. */
    private pixel;
    protected ownState(): Record<string, number>;
    protected setOwnState(own: Readonly<Record<string, number>>): void;
    constructor(preset: 'iso' | 'topdown' | 'side', config?: CameraConfig);
    get viewHeight(): number;
    protected applyZoom(): void;
    protected step(u: CameraUpdate): void;
    /** Shake by whole art pixels across the view (depth doesn't move an ortho picture). */
    protected shakeOffset(offset: Vector3, out: Vector3): void;
}
/** Over-the-shoulder orbit camera: mouse-drag or Q/E to orbit, wheel to zoom, avoids walls. */
export declare class ThirdPersonRig extends CameraRig {
    readonly preset: "third";
    readonly camera: PerspectiveCamera;
    yaw: number;
    pitch: number;
    private readonly baseDistance;
    private currentDistance;
    protected ownState(): Record<string, number>;
    protected setOwnState(own: Readonly<Record<string, number>>): void;
    constructor(config?: CameraConfig);
    protected applyZoom(): void;
    protected step(u: CameraUpdate): void;
    describe(): {
        yaw: number;
        pitch: number;
    };
}
/** Eyes of the character: mouse look (click to lock the pointer) or Q/E to turn. No zoom. */
export declare class FirstPersonRig extends CameraRig {
    readonly preset: "first";
    readonly camera: PerspectiveCamera;
    readonly zoomable = false;
    readonly hidesTarget = true;
    yaw: number;
    pitch: number;
    protected ownState(): Record<string, number>;
    protected setOwnState(own: Readonly<Record<string, number>>): void;
    constructor(config?: CameraConfig);
    protected applyZoom(): void;
    protected step(u: CameraUpdate): void;
    groundBasis(): {
        right: Vector3;
        forward: Vector3;
    };
    describe(): {
        yaw: number;
        pitch: number;
    };
}
/**
 * Authoring camera. While flying: WASD move, Q/E down/up, drag (or click to lock) to look,
 * Shift = fast, wheel = field of view. Press Enter to fix it: the view freezes, the player
 * gets control, and `fixedConfig()` returns the config to hard-code (preset 'fixed').
 * Enter again unfixes.
 */
export declare class FreeRig extends CameraRig {
    readonly preset: 'free' | 'fixed';
    readonly camera: PerspectiveCamera | OrthographicCamera;
    fixed: boolean;
    yaw: number;
    pitch: number;
    protected ownState(): Record<string, number>;
    protected setOwnState(own: Readonly<Record<string, number>>): void;
    private readonly baseFov;
    private readonly baseViewHeight;
    private readonly projection;
    onFix: ((config: CameraConfig) => void) | null;
    constructor(preset: 'free' | 'fixed', config?: CameraConfig);
    protected applyZoom(): void;
    /** Freeze (or unfreeze) the view. */
    setFixed(fixed: boolean): void;
    fixedConfig(): CameraConfig;
    protected step(u: CameraUpdate): void;
    describe(): {
        fixed: boolean;
        config: CameraConfig;
    };
}
export declare function createCameraRig(config?: CameraConfig): CameraRig;
export declare function isPerspective(camera: Camera): camera is PerspectiveCamera;
