/**
 * Decals: marks left on surfaces (footprints, scorch marks, paint splats, cracks), each a
 * small flat quad laid on the surface along its normal, its shape cut out in the shader (no
 * texture), coloured per mark, and faded out at the end of its life by an ordered dither (no
 * blending). One instanced draw per shape, a fixed pool: when it is full the oldest mark goes.
 *
 *   const decals = new Decals(scene, { capacity: 256 });
 *   decals.add('scorch', hit.point, hit.normal, { size: 1.6, color: PALETTE.ink, life: 8 });
 *   decals.add('footprint', feet, UP, { size: 0.3, rotation: heading, color: PALETTE.slate });
 *   // per frame: decals.update(dt)
 */
import { InstancedMesh, type Scene, type Vector3Like } from 'three/webgpu';
export declare const DECAL_SHAPES: readonly ["footprint", "scorch", "splat", "crack", "ring"];
export type DecalShape = (typeof DECAL_SHAPES)[number];
export interface DecalOptions {
    /** Width of the mark (m). Default 0.5. */
    size?: number;
    /** Turn about the normal (radians). Default random. */
    rotation?: number;
    /** Colour (hex). Default dark. */
    color?: number;
    /** Seconds before it starts to fade (0: forever). Default 10. */
    life?: number;
}
export declare class Decals {
    private readonly scene;
    readonly o: {
        capacity?: number;
    };
    readonly meshes: Map<"ring" | "crack" | "footprint" | "scorch" | "splat", InstancedMesh<import("three").BufferGeometry<import("three").NormalBufferAttributes, import("three").BufferGeometryEventMap>, import("three").Material<import("three").MaterialEventMap> | import("three").Material<import("three").MaterialEventMap>[], import("three").Object3DEventMap>>;
    private readonly slots;
    private readonly next;
    private readonly fades;
    private readonly m;
    private readonly q;
    private readonly q2;
    private readonly s;
    private readonly p;
    private readonly n;
    private readonly c;
    private seed;
    constructor(scene: Scene, o?: {
        capacity?: number;
    });
    private mesh;
    /** Lay a mark at `at` on a surface facing `normal`. Returns its index in that shape's pool. */
    add(shape: DecalShape, at: Vector3Like, normal: Vector3Like, o?: DecalOptions): number;
    /** Marks alive (per shape or all). */
    count(shape?: DecalShape): number;
    /** Per frame: age the marks; old ones dither away over a second. */
    update(dt: number): void;
    /** Remove every mark (the meshes stay for reuse). */
    clear(): void;
    dispose(): void;
}
