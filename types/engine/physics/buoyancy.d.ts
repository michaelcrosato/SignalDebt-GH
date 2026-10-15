/**
 * Things that float: each body is split into eight octants; each octant under the surface
 * pushes up, at its centre, by the weight of the water it displaces (how deep its own vertical
 * extent is in, whichever way the body is turned), so a body tilts with the waves, rights
 * itself and never loses its lift by flipping over; water drag slows it while it is in. Bodies lighter than the water (density below `density`) float, heavier ones
 * sink slowly. The surface is any height function: flat, `waterHeight` waves, a ripple field
 * (`render/water.ts`'s `WaterSurface.heightAt`).
 *
 *   const floaters = new Floaters(physics.world, (x, z) => water.covers(x, z) ? water.heightAt(x, z) : null);
 *   floaters.add(crate.body);
 *   // per fixed step, before the physics step (a game's fixedUpdate): floaters.step(dt)
 *
 * Masses here are the physics world's (density × m³), so water has density 1 by default.
 */
import type RAPIER_TYPE from '@dimforge/rapier3d';
export interface FloaterOptions {
    /** Water density in the world's mass units (default 1: a body of density 0.5 floats half in). */
    density?: number;
    /** How fast velocities die in the water (per second, times how deep it is in). Default 2.5. */
    drag?: number;
    /** Turning drag (per second). Default 1.6. */
    angularDrag?: number;
    /** Called when a body falls into the water fast enough to splash (speed m/s). */
    onSplash?: (x: number, y: number, z: number, speed: number) => void;
}
interface Floater {
    body: RAPIER_TYPE.RigidBody;
    /** Octant centres in the body's own space. */
    points: [number, number, number][];
    /** Volume per octant (m³), an octant's half extents, and the body's half height. */
    share: number;
    ext: [number, number, number];
    half: number;
    wet: boolean;
    /** Seconds since it was last in the water. */
    dry: number;
}
export declare class Floaters {
    private readonly world;
    private readonly surface;
    readonly o: FloaterOptions;
    readonly list: Floater[];
    private readonly p;
    constructor(world: RAPIER_TYPE.World, surface: (x: number, z: number) => number | null, o?: FloaterOptions);
    /**
     * Float `body`: its first collider's shape sets the octants (its bounding box) and the volume
     * it can push aside (a box, ball, capsule, cylinder or cone; any other shape counts as a box).
     */
    add(body: RAPIER_TYPE.RigidBody): void;
    remove(body: RAPIER_TYPE.RigidBody): void;
    /** How deep (0..1 of its height) a floater sits in the water now (tests, HUDs). */
    submerged(body: RAPIER_TYPE.RigidBody): number;
    /** One fixed step: buoyancy at each sample point under the surface, then drag. */
    step(dt: number): void;
}
/** A collider's half extents (its box, Y up) and volume (m³). */
export declare function measure(col: RAPIER_TYPE.Collider): [number, number, number, number];
export {};
