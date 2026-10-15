export type Team = 'enemy' | 'player';
export declare class BulletPool {
    readonly capacity: number;
    /** x, z, vx, vz per bullet. */
    readonly state: Float32Array;
    readonly life: Float32Array;
    readonly radius: Float32Array;
    /** 0 enemy, 1 player. */
    readonly team: Uint8Array;
    /** A small number games use for the look (colour, size). */
    readonly kind: Uint8Array;
    /** 1 once a bullet has been grazed (counted by `graze`), so each counts once. */
    readonly grazed: Uint8Array;
    /** Live bullets are 0 .. alive − 1 (dead ones are swapped to the end). */
    alive: number;
    /** Bullets that hit a wall last step (x, z pairs), for sparks. */
    readonly sparks: number[];
    fired: number;
    constructor(capacity: number);
    fire(x: number, z: number, vx: number, vz: number, o?: {
        life?: number;
        radius?: number;
        team?: Team;
        kind?: number;
    }): number;
    kill(i: number): void;
    /**
     * Kill several (indices from `hits`): highest first, since a kill moves the last live
     * bullet into the gap and would otherwise shift an index still to come.
     */
    killAll(indices: number[]): void;
    clear(): void;
    /** Move every bullet; ones whose life runs out or that hit a wall (`open(x, z)` false) die. */
    step(dt: number, open?: (x: number, z: number) => boolean): void;
    /** Indices of live bullets of `team` within `r` of (x, z), each tested as a circle. */
    hits(x: number, z: number, r: number, team: Team, out?: number[]): number[];
    /** Bullets within `r` of a point, of `team` or any (bombs, danger meters). */
    near(x: number, z: number, r: number, team?: Team): number;
    /**
     * Grazes: bullets of `team` within `r` of (x, z) not counted before. Each bullet grazes
     * once (shoot-'em-ups score the near misses); call it after the hit test, so a bullet that
     * hits is gone and never grazes.
     */
    graze(x: number, z: number, r: number, team: Team): number;
}
export type Pattern = 'aimed' | 'fan' | 'ring' | 'spiral' | 'wave' | 'burst';
export interface PatternDef {
    pattern: Pattern;
    /** Seconds between volleys. */
    every: number;
    /** Bullets per volley (arms of a spiral, the size of a ring or fan). */
    count?: number;
    /** Spread of a fan or a burst (degrees). */
    spread?: number;
    speed?: number;
    /** Spiral and wave: degrees turned per volley. */
    turn?: number;
    /** Wave: half the sweep (degrees) and its period (s). */
    sweep?: number;
    period?: number;
    life?: number;
    radius?: number;
    kind?: number;
    team?: Team;
    /** Seconds before the first volley. */
    delay?: number;
    seed?: number;
}
export interface Emitter {
    readonly def: PatternDef;
    /** Volleys fired. */
    volleys: number;
    enabled: boolean;
    /** Fire due volleys from (x, z); `aim` is what aimed patterns turn toward. */
    update(pool: BulletPool, dt: number, at: readonly [number, number], aim?: readonly [number, number] | null): void;
}
/** An emitter for a pattern (pure: the same volleys every run). */
export declare function emitter(def: PatternDef): Emitter;
