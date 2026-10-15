/**
 * Motion trails: a ribbon through the last points something passed (a sword's tip, a dash, a
 * comet), facing the camera, tapering and fading from its colour to its tail colour as the
 * points age. One mesh, its vertices rebuilt each frame (a few dozen points), unlit, drawn in
 * stepped colour bands so it stays pixel art.
 *
 *   const trail = new Trail({ points: 24, width: 0.35, life: 0.35, color: PALETTE.sand, tail: PALETTE.orange });
 *   scene.add(trail);
 *   // per frame: trail.push(tip, t); trail.update(t, camera)
 */
import { BufferGeometry, type Camera, Color, Mesh, MeshBasicNodeMaterial, Vector3 } from 'three/webgpu';
export interface TrailOptions {
    /** Most points kept. Default 24. */
    points?: number;
    /** Width at the head (m). */
    width?: number;
    /** Seconds a point lasts. Default 0.35. */
    life?: number;
    /** Head and tail colours (hex). */
    color?: number;
    tail?: number;
    /** A new point only after moving this far (m). Default 0.05. */
    minStep?: number;
}
export declare class Trail extends Mesh<BufferGeometry, MeshBasicNodeMaterial> {
    readonly capacity: number;
    width: number;
    life: number;
    private readonly minStep;
    private readonly pts;
    private readonly pos;
    private readonly col;
    /** Head and tail colours (live: `trail.head.setHex(...)`). */
    readonly head: Color;
    readonly tail: Color;
    private readonly view;
    private readonly tan;
    private readonly side;
    constructor(o?: TrailOptions);
    /** The trail's newest point (call every frame while it moves). */
    push(p: Vector3, time: number): void;
    /** Drop every point. */
    reset(): void;
    /** Points alive now. */
    get length(): number;
    /** Per frame: forget old points, rebuild the ribbon facing `camera`. */
    update(time: number, camera: Camera): void;
    dispose(): void;
}
