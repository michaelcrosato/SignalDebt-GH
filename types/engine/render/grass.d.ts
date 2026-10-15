/**
 * A meadow: thousands of grass blades in one instanced draw, bent by the vertex shader. Wind
 * leans every blade and sends gusts across the field as visible waves; up to four pushers
 * (the hero, a ball) part and flatten the blades around them. Blades are two crossed
 * triangles (they read from any side), toon-lit as if they were the ground (an up normal), so
 * they take the same light bands and shadows as the floor they stand on.
 *
 *   const grass = new GrassField({ area: [12, 8], at: [0, 0, 0], count: 6000 });
 *   scene.add(grass);
 *   // per frame: grass.update(t); grass.push(0, hero.position, 0.9)
 *   grass.wind.set(2.5, 0.5);       // m/s-ish: direction and strength
 */
import { InstancedMesh, Vector2, type Vector3Like } from 'three/webgpu';
export declare const MAX_PUSHERS = 4;
export interface GrassOptions {
    /** Width (x) and depth (z) of the patch, m. */
    area: readonly [number, number];
    /** Centre of the patch on the ground. */
    at: readonly [number, number, number];
    count: number;
    /** Blade heights (m): shortest and tallest. Default [0.25, 0.55]. */
    height?: readonly [number, number];
    /** Blade width at the root (m). Default 0.07. */
    width?: number;
    /** Colours (hex): roots and tips. */
    base?: number;
    tip?: number;
    /** Where blades grow (world x, z); default everywhere in the patch. */
    mask?: (x: number, z: number) => boolean;
    /** Ground height under a blade (default: the patch's y). */
    ground?: (x: number, z: number) => number;
    seed?: number;
}
export declare class GrassField extends InstancedMesh {
    /** Wind along x and z (its length is the strength). */
    readonly wind: Vector2;
    /** How far blades lean per unit of wind (m at the tip). Default 0.12. */
    sway: number;
    private readonly uTime;
    private readonly uWind;
    private readonly uSway;
    private readonly uPush;
    /** Blades actually placed (the mask can leave fewer than `count`). */
    readonly blades: number;
    constructor(o: GrassOptions);
    /** Pusher `i` (0..3): blades within `radius` of `at` part and flatten (radius 0: none). */
    push(i: number, at: Vector3Like | null, radius?: number): void;
    /** Per frame (game time). */
    update(time: number): void;
    dispose(): this;
}
