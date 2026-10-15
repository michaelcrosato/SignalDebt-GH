/**
 * A second camera's view rendered into a texture: security monitors, a minimap, a scope, the
 * far side of a portal. Each frame (or every few) the view draws the scene from its own camera
 * into a small render target before the main frame renders; any material can show
 * `view.texture`, and the pixel pass then pixelates the screen like everything else.
 *
 *   const cam = new RenderView({ size: [160, 90], fov: 60, every: 2 });
 *   cam.camera.position.set(4, 3, 4); cam.camera.lookAt(0, 1, 0);
 *   const stop = cam.attach(engine.renderer, scene);   // renders before each frame
 *   screen.material = cam.screenMaterial();             // and screen.layers.set(SCREEN_LAYER)
 *
 * Screens (and mirrors) go on `SCREEN_LAYER`: the main camera always sees it, views never
 * do, so a texture is never sampled while it is being drawn (and views don't recurse).
 */
import { MeshBasicNodeMaterial, type Object3D, PerspectiveCamera, RenderTarget, type Scene, type Texture, type WebGPURenderer } from 'three/webgpu';
/** The layer for screens and mirrors: drawn by the main camera, never by a RenderView. */
export declare const SCREEN_LAYER = 2;
export interface RenderViewOptions {
    /** Texture size in pixels (default [160, 90]). */
    size?: readonly [number, number];
    /** Vertical field of view, degrees (default 60). */
    fov?: number;
    near?: number;
    far?: number;
    /** Render every nth frame (default 1): a slow refresh costs less. */
    every?: number;
}
export declare class RenderView {
    readonly target: RenderTarget;
    readonly camera: PerspectiveCamera;
    /** Render every nth frame. */
    every: number;
    /** Times it has rendered. */
    renders: number;
    enabled: boolean;
    private frame;
    constructor(o?: RenderViewOptions);
    get texture(): Texture;
    /** Resize the texture (the camera's aspect follows). */
    setSize(w: number, h: number): void;
    /** Draw `scene` from the view's camera into its texture, if this is one of its frames. True if it drew. */
    render(renderer: WebGPURenderer, scene: Scene): boolean;
    /** Render before every frame of `pixel` (the engine's PixelRenderer). Returns a stop. */
    attach(pixel: {
        onBeforeRender(f: () => void): () => void;
        renderer: WebGPURenderer;
    }, scene: Scene): () => void;
    /** An unlit material showing the view (a new one each call: tint it as you like). */
    screenMaterial(): MeshBasicNodeMaterial;
    /** Put `object` (and its children) on the screens' layer. */
    static screen(object: Object3D): void;
    dispose(): void;
}
