/**
 * Tweens: numbers that glide to a value over time, for doors, lifts, pickups, menus and
 * pads. Game time (they pause, slow down and freeze with `engine.timeScale` and hitstops)
 * and cleared when a level unloads. `ctx.tweens`:
 *
 *   ctx.tweens.to(door.position, { y: 3 }, { duration: 0.8, ease: 'outBack' });
 *   const t = ctx.tweens.to(lamp, { intensity: 0 }, { duration: 0.3, yoyo: true, repeat: Infinity });
 *   t.cancel();
 *   if (await ctx.tweens.to(door.position, { y: 0 }, { duration: 0.5 }).done) slam(); // false: cancelled / level gone
 *   ctx.tweens.call(0.5, () => spawn());                            // a timer on game time
 *   ctx.tweens.value(0, 1, { duration: 2, ease: 'steps4' }, (v) => (fog.density = v));
 *
 * Pure (no three.js): `Tweens.update(dt)` is all it needs, so it is unit-tested.
 */
export type EaseName = 'linear' | 'inQuad' | 'outQuad' | 'inOutQuad' | 'inCubic' | 'outCubic' | 'inOutCubic' | 'inSine' | 'outSine' | 'inOutSine' | 'inExpo' | 'outExpo' | 'inOutExpo' | 'inBack' | 'outBack' | 'inOutBack' | 'outElastic' | 'outBounce' | 'smooth' | 'steps2' | 'steps4' | 'steps8';
export type Ease = EaseName | ((u: number) => number);
/** Every named ease: u in 0..1 → progress (back and elastic overshoot past 1). */
export declare const EASES: Readonly<Record<EaseName, (u: number) => number>>;
export declare const EASE_NAMES: EaseName[];
export declare function ease(e: Ease, u: number): number;
export interface TweenOptions {
    /** Seconds (game time). Default 0.3. */
    duration?: number;
    /** Seconds before it starts. */
    delay?: number;
    ease?: Ease;
    /** Extra plays after the first (Infinity loops). With `yoyo`, each way counts as one. */
    repeat?: number;
    /** Play back the other way on every repeat. */
    yoyo?: boolean;
    onUpdate?: (progress: number) => void;
    onComplete?: () => void;
}
export interface Tween {
    /**
     * Resolves when it stops: `true` when it played to the end, `false` when it was cancelled,
     * taken over or cleared (the level unloaded: don't carry on with dead objects).
     */
    readonly done: Promise<boolean>;
    readonly active: boolean;
    /** Stop where it is (`finish`: jump to the target values first). */
    cancel(finish?: boolean): void;
}
/** A set of running tweens (the engine keeps one per game: `ctx.tweens`). */
export declare class Tweens {
    private items;
    /** Tweens still running. */
    get count(): number;
    /**
     * Glide `target`'s numeric properties to `to`. A new tween on the same target and
     * property takes over (the old one stops where it is).
     */
    to<T extends object>(target: T, to: Partial<Record<keyof T, number>>, options?: TweenOptions): Tween;
    /** Tween a plain number from `from` to `to`, calling `apply(v)` every frame. */
    value(from: number, to: number, options: TweenOptions, apply: (v: number) => void): Tween;
    /** Call `fn` after `seconds` of game time. */
    call(seconds: number, fn: () => void): Tween;
    /** Stop every tween on `target` (or everything). */
    cancel(target?: object): void;
    /** Stop everything (level unload). Pending `done` promises resolve. */
    clear(): void;
    update(dt: number): void;
    private add;
    private start;
    private write;
    private finish;
}
