/**
 * Game time from real time: a speed (`engine.timeScale`: slow motion, fast forward, 0 to
 * freeze) and hitstops (the game freezes for a few real seconds when a hit lands). Pure; the
 * engine runs every frame's real `dt` through `delta()`.
 */
/** A clock as data. */
export interface ClockState {
    readonly scale: number;
    readonly hitstop: number;
}
export declare class GameClock {
    private _scale;
    private stop;
    /** Game seconds per real second (≥ 0; anything not a number is ignored). */
    get scale(): number;
    set scale(v: number);
    /** Real seconds of hitstop left. */
    get hitstop(): number;
    /** Game time can't move (speed 0): presses queued now must not fire later. */
    get frozen(): boolean;
    /** Freeze for `seconds` of real time (overlapping freezes keep the longest). */
    freeze(seconds: number): void;
    /** Game seconds for `dt` real seconds (and the hitstop runs down). */
    delta(dt: number): number;
    reset(): void;
    /** Its speed and the hitstop left, as data (`engine.snapshot()`). */
    state(): ClockState;
    setState(s: ClockState): void;
}
