/**
 * A conveyor belt's look: stripes across the belt that scroll along it at the belt's speed, so
 * it reads as moving while the mesh stays put (`physics.conveyor` moves what is on it). A
 * room-owned copy of the toon material: shading, outlines and filters as usual.
 *
 *   const mat = beltMaterial(PALETTE.slate, PALETTE.sand, { length: 8, speed: 2 });
 *   // per frame: mat.advance(dt)     (game time: a hitstop or slow motion slows it too)
 */
import { type MeshToonNodeMaterial } from 'three/webgpu';
export type BeltMaterial = MeshToonNodeMaterial & {
    /** Belt speed (m/s along +u; negative runs back). */
    speed: number;
    /** Move the stripes on by `dt` seconds of game time. */
    advance(dt: number): void;
};
export declare function beltMaterial(base: number, stripe: number, o: {
    length: number;
    speed: number;
    pitch?: number;
    along?: 'u' | 'v';
}): BeltMaterial;
