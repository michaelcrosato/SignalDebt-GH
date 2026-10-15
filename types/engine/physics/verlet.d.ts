/**
 * Soft bodies by Verlet integration (position-based dynamics): cloth, ropes and pressure
 * blobs. Particles remember where they were; each step they keep moving by that difference
 * (velocity without storing it), gravity and wind push them, and then a few passes of
 * constraints pull them back into shape: distances along edges, pins, a volume for blobs,
 * and simple colliders (a floor, spheres, boxes). Cheap, stable at any time step, and it
 * looks right: flags flap, ropes swing and stretch a little, jelly wobbles.
 *
 *   const flag = clothGrid({ width: 2, height: 1.2, cols: 12, rows: 8, origin: [0, 3, 0], pin: 'left' });
 *   flag.wind = [4, 0, 1];
 *   flag.step(1 / 60);                   // per fixed step
 *   flag.spheres.push({ x, y, z, r });  // the hero pushes through it
 *
 * Pure (no three.js): the engine's `SoftMesh` (render/softMesh.ts) draws one. Unit-tested.
 */
export interface Sphere {
    x: number;
    y: number;
    z: number;
    r: number;
}
/** An axis-aligned box collider (centre and half extents). */
export interface Box {
    x: number;
    y: number;
    z: number;
    hx: number;
    hy: number;
    hz: number;
}
export interface VerletOptions {
    /** Constraint passes per step: more is stiffer. Default 8. */
    iterations?: number;
    /** Velocity kept per step (0..1). Default 0.99. */
    damping?: number;
}
export declare class VerletBody {
    readonly count: number;
    /** Positions, xyz per particle. */
    readonly pos: Float32Array;
    /** Last step's positions (velocity = pos − prev). */
    readonly prev: Float32Array;
    /** 0 for pinned particles. */
    readonly invMass: Float32Array;
    /** Where pinned particles are held (move them to drag a cloth by its corner). */
    readonly pinAt: Float32Array;
    /** Distance constraints: particle pairs, rest lengths and stiffness 0..1. */
    ea: Uint32Array<ArrayBuffer>;
    eb: Uint32Array<ArrayBuffer>;
    rest: Float32Array<ArrayBuffer>;
    stiff: Float32Array<ArrayBuffer>;
    /** Triangles (cloth and blobs): wind drag, volume and drawing. */
    tris: Uint32Array<ArrayBuffer>;
    gravity: [number, number, number];
    /** Wind velocity (m/s): drags triangles (by their facing) or particles (ropes). */
    wind: [number, number, number];
    /** How much the wind varies in time and space (0..1). */
    gust: number;
    /**
     * How hard the wind pushes. Cloth: acceleration per (m/s)² of wind hitting it squarely (light
     * cloth: high; canvas: low). Ropes: per m/s of speed relative to the wind.
     */
    drag: number;
    /** Cloth: drag along its surface, as a share of `drag` (it streams a flag out). */
    skin: number;
    iterations: number;
    damping: number;
    /** A floor plane every particle stays above (null: none). */
    floor: number | null;
    /** Ground friction: how much sideways motion a particle on the floor keeps. */
    friction: number;
    readonly spheres: Sphere[];
    readonly boxes: Box[];
    /** Pressure blobs: the volume it tries to keep (0: off), and how hard. */
    restVolume: number;
    pressure: number;
    /** Seconds simulated (drives gusts). */
    time: number;
    constructor(count: number, o?: VerletOptions);
    /** Place particle `i` (and stop it). */
    set(i: number, x: number, y: number, z: number): void;
    /** Hold particle `i` where it is (or at x, y, z). */
    pin(i: number, x?: number, y?: number, z?: number): void;
    unpin(i: number): void;
    /** Set the edges (pairs of particle indices) with rest lengths from the current positions. */
    setEdges(pairs: readonly (readonly [number, number, number?])[]): void;
    distance(a: number, b: number): number;
    /** Signed volume enclosed by the triangles (blobs; needs a closed, outward-wound surface). */
    volume(): number;
    /** Centre of mass (average position). */
    center(out?: [number, number, number]): [number, number, number];
    /** Push every particle by a velocity change (an explosion, a kick). */
    impulse(vx: number, vy: number, vz: number, dt: number, near?: {
        x: number;
        y: number;
        z: number;
        r: number;
    }): void;
    step(dt: number): void;
    private accBuf;
    private areaBuf;
    /**
     * Wind. Cloth (triangles): each triangle is pushed along its normal by the wind hitting it
     * (pressure, growing with the relative speed squared) and along its surface by skin drag,
     * shared out to its corners by area, so the acceleration doesn't depend on how finely the
     * cloth is cut. Ropes (no triangles): each particle is pulled toward the wind's speed.
     */
    private forces;
    private solveEdges;
    /** Blobs: push every surface particle along its normal until the volume is back. */
    private solveVolume;
    private collide;
}
export interface ClothOptions {
    width: number;
    height: number;
    /** Particles across and down (≥ 2). */
    cols: number;
    rows: number;
    /** The top-left corner. The cloth lies in the plane spanned by `across` and `down`. */
    origin: readonly [number, number, number];
    /** Direction along the top edge (unit). Default +X. */
    across?: readonly [number, number, number];
    /** Direction from the top edge to the bottom one (unit). Default −Y (hanging); +Z lays it flat. */
    down?: readonly [number, number, number];
    /** Pinned particles: the whole top edge, its two corners, the left edge (a flag), or none. */
    pin?: 'top' | 'corners' | 'left' | 'none';
    /** Shear and bend springs (0..1 stiffness). Default 0.8 / 0.3. */
    shear?: number;
    bend?: number;
    iterations?: number;
}
/** A sheet of cloth: a grid of particles with structural, shear and bend edges, two triangles per cell. */
export declare function clothGrid(o: ClothOptions): VerletBody & {
    cols: number;
    rows: number;
    uv: Float32Array;
};
/** A rope from `from` to `to` in `segments` (the first particle pinned; `pinEnd` pins the last). */
export declare function ropeLine(from: readonly [number, number, number], to: readonly [number, number, number], segments: number, o?: {
    pinEnd?: boolean;
    slack?: number;
    iterations?: number;
}): VerletBody;
/**
 * A pressure blob: a sphere of particles (latitude × longitude rings plus poles) with edges
 * along and across, that keeps its volume. `pressure` 0..1 sets how firm it is.
 */
export declare function softBlob(center: readonly [number, number, number], radius: number, o?: {
    rings?: number;
    segments?: number;
    pressure?: number;
    stiffness?: number;
}): VerletBody;
