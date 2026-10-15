/**
 * Destruction: walls and blocks that shatter into chunks (cut along jittered planes so the
 * pieces tile the block exactly, physics/fracture.ts), and floor tiles that crumble a moment
 * after you step on them and grow back later. Chunks are dynamic bodies that fly, tumble and
 * settle, then dissolve away (the toon material's pixel dissolve) and leave the world.
 *
 *   const breaks = new Breakables(ctx);
 *   const wall = breaks.add({ at: [0, 1.5, 0], size: [3, 3, 0.4], color: 'sand', cuts: [4, 4, 1] });
 *   breaks.break(wall, punchPoint, 6);                 // a punch, a blast
 *   const tile = breaks.crumble({ at: [2, -0.25, 0], size: [1, 0.5, 1], color: 'mist' });
 *   // per frame: breaks.update(dt, hero.groundCollider)
 */
import { Mesh } from 'three/webgpu';
import type { GameContext } from '../Engine';
import { type PaletteColor } from '../palette';
import { RAPIER } from './Physics';
type Vec3 = readonly [number, number, number];
type Ctx = Pick<GameContext, 'physics' | 'scene' | 'particles'>;
export interface BreakableOptions {
    /** Centre and full size of the block. */
    at: Vec3;
    size: Vec3;
    /** Turn about Y (radians). */
    rotationY?: number;
    color: PaletteColor;
    /** Pieces along x, y, z (default [3, 3, 1]). */
    cuts?: Vec3;
    jitter?: number;
    seed?: number;
    /** Seconds the pieces lie around before they dissolve (default 4). */
    linger?: number;
    /** Chunk density (default 1.5). */
    density?: number;
    tags?: string[];
}
export interface Breakable {
    readonly o: BreakableOptions;
    readonly mesh: Mesh;
    collider: RAPIER.Collider | null;
    broken: boolean;
}
export interface CrumbleOptions {
    at: Vec3;
    size: Vec3;
    color: PaletteColor;
    /** Seconds standing on it before it drops (it shakes meanwhile). Default 0.6. */
    delay?: number;
    /** Seconds until it grows back (0: never). Default 5. */
    regrow?: number;
}
export interface Crumble {
    readonly o: CrumbleOptions;
    readonly mesh: Mesh;
    collider: RAPIER.Collider | null;
    /** 'solid' → 'shaking' → 'falling' → (regrow) 'solid'. */
    state: 'solid' | 'shaking' | 'falling';
    t: number;
}
export declare class Breakables {
    private readonly ctx;
    readonly blocks: Breakable[];
    readonly tiles: Crumble[];
    private debris;
    private falling;
    /** Chunks alive now (tests, HUDs). */
    get chunks(): number;
    constructor(ctx: Ctx);
    add(o: BreakableOptions): Breakable;
    /** Put a broken block back, whole (its old pieces dissolve as usual). */
    restore(b: Breakable): void;
    /** The block whose collider this is (a punch's ray hit, a projectile). */
    byCollider(handle: number): Breakable | undefined;
    /** The unbroken block nearest to `at` within `reach` of its surface (a punch, a blast radius). */
    near(at: Vec3, reach: number): Breakable | undefined;
    /** Shatter a block: chunks fly away from `at` (default its middle) at up to `speed` m/s. */
    break(b: Breakable, at?: Vec3, speed?: number): void;
    /** A floor tile that drops shortly after you step on it, and grows back. */
    crumble(o: CrumbleOptions): Crumble;
    /**
     * Per frame: tiles under `standing` (a collider handle: the character's `groundCollider`)
     * start to shake, shaking tiles drop, dropped ones grow back; old chunks dissolve away.
     */
    update(dt: number, standing?: number): void;
    private solidify;
    private drop;
}
export {};
