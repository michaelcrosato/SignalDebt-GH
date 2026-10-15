/**
 * A flat mirror: before each frame a camera reflected in the mirror's plane draws the scene
 * into a texture at the art resolution, and the glass shows it at each pixel's screen position
 * (mirrored left to right), so the reflection lines up from wherever the camera looks. An
 * oblique near plane (Lengyel) on that camera cuts away everything behind the glass; it works
 * for orthographic cameras (the iso view) as well as perspective ones.
 *
 *   const mirror = new Mirror({ size: [8, 3] });
 *   mirror.mesh.position.set(0, 1.8, -6.9);              // the glass faces its local +z
 *   scene.add(mirror.mesh);
 *   const stop = mirror.attach(engine.renderer, scene);  // renders before each frame
 *
 * The glass is on `SCREEN_LAYER`, so neither it nor other screens appear in the reflection.
 */
import { type Camera, Mesh, Plane, RenderTarget, type Scene, type WebGPURenderer } from 'three/webgpu';
export interface MirrorOptions {
    /** Width and height of the glass (m). Default [4, 2]. */
    size?: readonly [number, number];
    /** A colour the reflection leans toward, and how much (0..1). Default a faint blue, 0.15. */
    tint?: number;
    tintAmount?: number;
}
/**
 * Set `virtual` to `camera` reflected in `plane` (world space, its normal toward the side that
 * is seen): the position, the way it looks and its up reflected (a proper rotation: the picture
 * comes out mirrored left to right), and an oblique near plane on the mirror plane, so nothing
 * behind it is drawn. Orthographic or perspective, either depth range. Returns `virtual`.
 */
export declare function mirrorCamera<T extends Camera>(camera: Camera, virtual: T, plane: Plane): T;
export declare class Mirror {
    readonly mesh: Mesh;
    readonly target: RenderTarget;
    /** False: the glass shows plain glass and nothing is rendered for it. */
    enabled: boolean;
    /** Times it has rendered. */
    renders: number;
    private virtual;
    private readonly material;
    private readonly on;
    constructor(o?: MirrorOptions);
    /**
     * Reflect `camera` in the glass and draw `scene` from there into the texture (sized
     * `width` x `height`, the art resolution). Skipped when the camera is behind the glass.
     */
    render(renderer: WebGPURenderer, scene: Scene, camera: Camera, width: number, height: number): boolean;
    /** Render before every frame of `pixel` (the engine's PixelRenderer), from its camera, at its art size. Returns a stop. */
    attach(pixel: {
        onBeforeRender(f: () => void): () => void;
        renderer: WebGPURenderer;
        activeCamera: Camera;
        resolution: {
            width: number;
            height: number;
        };
    }, scene: Scene): () => void;
    dispose(): void;
}
