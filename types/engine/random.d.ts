/**
 * Seeded randomness. Everything random in a game comes from an `Rng`, so the same seed always
 * gives the same result (docs/DOCTRINE.md, principle 1). Each level gets one, `ctx.random`,
 * seeded from the engine's seed and the game's name; fork it by purpose so streams stay
 * independent of how many numbers each one drew:
 *
 *   const level = ctx.random.fork(`level:${n}`);
 *   const room = level.fork(`room:${i}`);   // independent of how many numbers `level` drew
 *
 * Never use Math.random in game or engine code (the lint refuses it).
 */
export declare class Rng {
    private s;
    constructor(seed: number | string);
    /** The generator's whole state: save it, and set it back to draw the same numbers again. */
    get state(): number;
    set state(s: number);
    /** Uniform in [0, 1). mulberry32. */
    next(): number;
    /** A child generator for one purpose; does not advance this one. */
    fork(purpose: string | number): Rng;
    /** Float in [min, max). */
    range(min: number, max: number): number;
    /** Integer in [min, max] (inclusive). */
    int(min: number, max: number): number;
    chance(p: number): boolean;
    pick<T>(items: readonly T[]): T;
    /** Pick by weight; entries with weight <= 0 never come up. */
    weighted<T>(items: readonly T[], weight: (item: T) => number): T;
    shuffle<T>(items: T[]): T[];
    /** Normal distribution (Box–Muller). */
    gaussian(mean?: number, sd?: number): number;
}
/** FNV-1a, 32-bit. */
export declare function hashString(s: string): number;
