/**
 * Forces in the world: zones that push (wind, an updraft fan, a current), pull (a gravity well,
 * a magnet) or drag (water, mud); conveyor belts; explosions. Dynamic bodies inside a zone get
 * its acceleration every fixed step; the character reads it too (`accelerationAt`), so the
 * same fan lifts crates and the hero.
 *
 *   physics.fields.add({ box: [1.5, 3, 1.5], at: [4, 3, 0], force: [0, 22, 0] });          // a fan
 *   physics.fields.add({ sphere: 5, at: [0, 1, 0], radial: -18, falloff: true });          // a well
 *   physics.fields.add({ box: [6, 2, 2], at: [0, 1, 6], force: [8, 0, 0], drag: 0.6 });    // a current
 *   physics.conveyor(beltCollider, [2.5, 0, 0]);                                             // a belt
 *   physics.explode([0, 0.5, 0], { radius: 4, impulse: 12 });
 */
import type RAPIER_TYPE from '@dimforge/rapier3d';
type Vec3 = readonly [number, number, number];
export interface FieldOptions {
    /** Half extents of a box zone, or the radius of a sphere zone. */
    box?: Vec3;
    sphere?: number;
    at: Vec3;
    /** A box zone's turn about Y (radians). */
    rotationY?: number;
    /** Acceleration (m/s²) in a direction: wind, an updraft (> 9.8 up lifts things), a current. */
    force?: Vec3;
    /** Acceleration away from the zone's centre (m/s²); negative pulls toward it (a well). */
    radial?: number;
    /** Weaker toward the edge (spheres: by distance; boxes: by height above the bottom). */
    falloff?: boolean;
    /** Pull velocities toward the field's own flow (0..1 per second-ish): water, mud. */
    drag?: number;
    /** Push the character too (default true). */
    character?: boolean;
    /** Push dynamic bodies (default true). */
    bodies?: boolean;
    enabled?: boolean;
    name?: string;
}
export interface Field extends FieldOptions {
    enabled: boolean;
    /** Stop and forget it. */
    remove(): void;
}
/** A pure acceleration query: what a field does at a point (no physics world needed). */
export declare function fieldAcceleration(f: FieldOptions, x: number, y: number, z: number, out: [number, number, number]): boolean;
/** The zones of a physics world. */
export declare class ForceFields {
    private list;
    private readonly a;
    private readonly sum;
    get count(): number;
    get all(): readonly Field[];
    add(o: FieldOptions): Field;
    clear(): void;
    /** Total acceleration at a point from every field that pushes the character. Returns `out`. */
    accelerationAt(x: number, y: number, z: number, out: [number, number, number], who?: 'character' | 'bodies'): [number, number, number];
    /** The strongest drag (and its flow) at a point for the character or the bodies: water, mud. */
    dragAt(x: number, y: number, z: number, who?: 'character' | 'bodies'): {
        drag: number;
        flow: [number, number, number];
    } | null;
    /** Push every dynamic body inside a field (one fixed step). */
    step(world: RAPIER_TYPE.World, dt: number): void;
}
export interface ExplosionOptions {
    radius?: number;
    /** Speed change (m/s) at the centre, fading to 0 at the radius. Default 10. */
    impulse?: number;
    /** Extra upward share (0..1): blasts throw things up. Default 0.4. */
    up?: number;
}
/**
 * Push every dynamic body within `radius` of `at` away from it (a speed change, so light and
 * heavy things fly alike). Returns how many were hit.
 */
export declare function explode(world: RAPIER_TYPE.World, at: Vec3, o?: ExplosionOptions): number;
export {};
