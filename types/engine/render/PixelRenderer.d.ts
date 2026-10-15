import { type Camera, RenderPipeline, type Scene, WebGPURenderer } from 'three/webgpu';
import { type AspectMode, type Framing, type Resolution } from '../framing';
import { type Look } from './look';
import { ScreenFx } from './screenFx';
/** The engine renders with WebGPU only (docs/DOCTRINE.md, principle 6). */
export type BackendName = 'WebGPU';
/** What a browser without WebGPU is told (the start fails with it: "Failed to start: …"). */
export declare const NO_WEBGPU = "WebGPU unavailable: this browser has no WebGPU, which Pixel Engine games need (a recent Chrome or Edge, Safari 26, or Firefox 141 on Windows, with hardware acceleration on)";
export type RenderMode = 'pixel' | 'raw';
export interface EdgeSettings {
    /** Silhouette / depth-discontinuity outline darkening, 0..1. */
    depth: number;
    /** Internal crease highlight from normal discontinuities, 0..1. Keep weak. */
    normal: number;
}
export declare const DEFAULT_EDGES: EdgeSettings;
export interface PixelRendererOptions {
    container: HTMLElement;
    scene: Scene;
    camera: Camera;
    resolution?: Resolution;
    /** `adaptive` (default): the art width follows the screen's aspect. `fixed`: always `resolution`. */
    aspect?: AspectMode;
    mode?: RenderMode;
    edges?: EdgeSettings;
    /** Post filters (ids from FILTERS), applied in order in Pixel mode, on the whole scene. */
    filters?: readonly string[];
    /** A full look (per-layer pixel art and filters); wins over `filters` and `edges`. */
    look?: Look;
}
export interface CapturedFrame {
    width: number;
    height: number;
    /** Tightly packed RGBA8, top row first, sRGB-encoded (exactly what is presented). */
    pixels: Uint8Array;
}
export interface GpuErrorRecord {
    api: string;
    type: string;
    message: string;
}
/**
 * One WebGPURenderer, one RenderPipeline, two output nodes.
 *
 * Pixel mode:  toon/node scene → scene pass at the art resolution (nearest-filtered MRT:
 *              color + normal + depth) → art-resolution stage: depth/normal edges, output
 *              color transform, then every *art-pixel* filter (palettes, dither, colour
 *              grades…) into one art-sized target → ONE nearest-neighbour upscale to the
 *              canvas (an integer multiple of the art resolution) → *display* filters
 *              (scanlines, LCD grid, CRT…) at device resolution, only when there are any.
 * Raw mode:    the same scene/camera through a plain full-resolution `pass()` and the
 *              output color transform only; same pipeline, same canvas size, same
 *              framing. Only `outputNode` changes.
 *
 * So the per-fragment cost at device resolution is one texture read unless a display
 * filter is active; the edge detection (~10 reads) and palette searches run 1/scale² as
 * often as they used to.
 *
 * WebGPU only: without it (no `navigator.gpu`, no adapter, or three falling back to its WebGL 2
 * backend) the renderer refuses to start, saying so (`NO_WEBGPU`). There is no second
 * renderer, except that a lost GPU device (mobile browsers drop it after backgrounding or under
 * memory pressure) is replaced by a fresh renderer + pipeline on a fresh canvas (`recoveries`
 * counts them).
 */
export declare class PixelRenderer {
    readonly container: HTMLElement;
    readonly gpuErrors: GpuErrorRecord[];
    readonly backend: BackendName;
    framing: Framing;
    /** How many times a lost GPU device was recovered from. */
    recoveries: number;
    /** Counts look changes (UIs that mirror the look re-sync when it moves). */
    lookVersion: number;
    /** Called after a lost device was recovered with a new renderer and canvas. */
    onRecovered: ((canvas: HTMLCanvasElement) => void) | null;
    /**
     * Transitions, flashes and shockwaves at the end of every output graph (uniforms only:
     * `engine.screen`, render/screenFx.ts).
     */
    readonly screen: ScreenFx;
    private _renderer;
    private _pipeline;
    private pixelNode;
    private rawNode;
    private readonly scene;
    private camera;
    private readonly beforeRender;
    private readonly reported;
    /** Where a throwing `onBeforeRender` listener is reported (the engine shows it on screen). */
    onError: ((e: unknown) => void) | null;
    private _mode;
    private _baseResolution;
    private _resolution;
    private _aspect;
    /** Device pixels per art pixel (the framing's integer scale). */
    private readonly scale;
    private _look;
    private plan;
    /** The whole-scene filter ids (stable array until they change: the debug UI compares it). */
    private _filters;
    private readonly sources;
    /** One uniform per target, filter and parameter (`scene/crt/curve`), shared by every graph. */
    private readonly params;
    private readonly outputCache;
    private readonly onResize;
    private resizeObserver;
    private dprQuery;
    private captureTarget;
    private loop;
    private disposed;
    private recovering;
    private warnedStaleCapture;
    private lossTimes;
    private constructor();
    static create(options: PixelRendererOptions): Promise<PixelRenderer>;
    /** The one WebGPURenderer (replaced only when a lost GPU device is recovered). */
    get renderer(): WebGPURenderer;
    get pipeline(): RenderPipeline;
    /** Renderer, canvas, scene passes and pipeline. Called once, and again after device loss. */
    private createRenderer;
    /** Initialise the backend, attach the canvas, lay out and build the output graph. */
    private initRenderer;
    /**
     * Compile the scene's shaders for both scene passes without blocking (`compileAsync`),
     * then build the post-processing quads with one offscreen render. Call after the scene
     * is built and before the first visible frame, so the first frames don't stall.
     */
    precompile(): Promise<void>;
    get mode(): RenderMode;
    setMode(mode: RenderMode): void;
    /** The whole-scene filter ids, in order (see `look` for the per-layer ones). */
    get filters(): readonly string[];
    /** Replace the whole-scene filter stack (ids from FILTERS, applied in order; Pixel mode only). Layers keep their looks. */
    setFilters(ids: readonly string[]): void;
    /** The current look (a copy: change it and pass it to `setLook`). */
    get look(): Look;
    /** True while the look renders characters/objects and the environment as two passes. */
    get split(): boolean;
    /**
     * Apply a look: pixel art or clean rendering and a filter stack per layer, plus filters
     * on the whole frame (see render/look.ts). Parameters and pixel sizes only update
     * uniforms; the graph is rebuilt (or taken from the cache) only when its shape changes.
     */
    setLook(look: Look): void;
    /** Mirror the look into uniforms: parameter values, pixel sizes and edges, the scene filter ids. */
    private syncLookState;
    private syncSources;
    private paramNode;
    private rebuildOutput;
    /**
     * Filters with effects outside the post pass (PS1 vertex snap) follow the active stack:
     * the whole-scene filters between passes, plus a layer's own filters while its pass draws.
     */
    private syncFilterEffects;
    toggleMode(): RenderMode;
    /** The actual art resolution; adaptive varies its width, fill varies both dimensions. */
    get resolution(): Resolution;
    /** The configured resolution preset (RESOLUTIONS.default or .compare). */
    get baseResolution(): Resolution;
    setResolution(resolution: Resolution): void;
    get aspect(): AspectMode;
    setAspect(aspect: AspectMode): void;
    /** The camera the frame is drawn from (mirrors reflect it). */
    get activeCamera(): Camera;
    /**
     * Point both passes at a different camera (camera preset hot-swap). The pipeline,
     * canvas and all nodes stay the same; only the camera the scene is rendered with changes.
     */
    setCamera(camera: Camera): void;
    /** Pixel-art outline strengths (of the environment layer; the look holds both layers'). */
    get edges(): EdgeSettings;
    /** Set the pixel-art outline strengths of every pixel-art layer. */
    setEdges(edges: Partial<EdgeSettings>): void;
    /** Recompute integer-scaled canvas layout for the current viewport and aspect mode. */
    layout(): void;
    /** Relayout when the container resizes or the device pixel ratio changes (zoom, monitor move). */
    private observeLayout;
    /** Re-arm the devicePixelRatio media query (it only matches the ratio it was made for). */
    private watchDpr;
    private readonly onDprChange;
    /**
     * Run `f` before every frame's render (and capture), outside the pipeline: render-to-texture
     * views draw their cameras here, so this frame's screens show this frame. Returns an unsubscribe.
     */
    onBeforeRender(f: () => void): () => void;
    /** Drop every `onBeforeRender` listener (the engine does this when a level unloads). */
    clearBeforeRender(): void;
    /** The views first, then the frame; the main camera always sees the screens' layer. */
    private renderFrame;
    render(): void;
    /**
     * Render the current frame through the full pipeline into an offscreen target and read
     * it back. Output is identical to what the canvas presents (same pipeline, same size),
     * so tests and agents can inspect frames even where canvas screenshots don't work.
     *
     * Always shows the scene as it is now: pass nodes (the scene / pixelation pass) render
     * at most once per node frame, which normally advances once per animation frame, so a
     * capture right after `engine.step()` in a frame that already rendered would get that
     * earlier render back. Starting a fresh node frame forces the passes to re-render.
     */
    capture(): Promise<CapturedFrame>;
    /**
     * Set (or stop, with null) the render loop. While a lost device is being recovered the
     * callback is only remembered; the new renderer starts the latest one, so there is
     * never more than one loop.
     */
    setAnimationLoop(callback: ((time: number) => void) | null): void;
    dispose(): void;
    private outputFor;
    private buildRawOutput;
    /**
     * The pixel-mode graph for a look. Pixel-art sources start in the art-resolution stage
     * (one fragment per art pixel) and run their leading `art` filters there; the first
     * `display` filter, a clean source or the end of the graph renders the stage into an
     * art-sized target, whose one nearest-neighbour upscale is sampled per device pixel.
     *
     * One source (both layers look the same): the scene, its filters, the screen. Two: each
     * layer renders only its own objects through its own filters, the nearer of the two wins
     * per pixel (their depth buffers), and the whole-scene filters run on the result. Both
     * layers in the art stage compose there too; otherwise both are upscaled first.
     */
    private buildPixelOutput;
    /** The scene pass of a source (created on first use, kept for the renderer's life). */
    private source;
    /**
     * Make a scene pass draw only one layer's opaque objects (`lookLayerOf`). Transparent
     * ones (glows, telegraphs, loot beams, contact shadows) draw in both passes: each blends
     * them over its own layer, depth-tested against it, so whichever layer wins a pixel shows
     * them correctly in front of or behind it. It filters draws, not the scene: lights, fog
     * and shadow maps (cast by every object, rendered by three with their own draw function)
     * are the same in both passes. While it draws, the layer's own filters' side effects (PS1
     * wobble) are on.
     */
    private drawOnly;
    private sizeArtTarget;
    /** Drop a cached output graph and free the render targets only it owns. */
    private evict;
    private handleDeviceLoss;
    /**
     * Replace a lost renderer: new WebGPURenderer, canvas, scene passes and pipeline, same
     * scene/camera/filters/framing. Scene objects re-upload themselves to the new device.
     * If that fails (or keeps failing), show a "tap to reload" overlay.
     */
    private recover;
    private showReloadOverlay;
    private recordGpuError;
}
