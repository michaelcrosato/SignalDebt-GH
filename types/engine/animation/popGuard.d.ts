/**
 * Keeps procedural corrections from popping. Each channel follows its target with the
 * target's own velocity, up to `maxSpeed`: a correction that tracks something steadily (a
 * locked foot against a moving body) follows it exactly, with no lag. Whatever the target
 * moves beyond that in a frame (it switched on, re-targeted, hit a constraint) becomes an
 * error that decays like a critically damped spring, so it eases over in a few frames
 * instead of jumping in one.
 *
 * One instance guards `n` scalar channels (joint angles in radians, offsets in metres).
 */
export declare class PopGuard {
    readonly n: number;
    private readonly omega;
    private readonly maxSpeed;
    private readonly last;
    /** Output minus target, and its rate of change. */
    private readonly err;
    private readonly errVel;
    private fresh;
    /**
     * @param n channels
     * @param omega how fast an absorbed jump eases out (rad/s; settled in about 5/omega s)
     * @param maxSpeed per channel: the fastest the target is followed as it is (units/s)
     */
    constructor(n: number, omega: number, maxSpeed: number[]);
    /** Forget everything (teleports): the next targets are taken as they are. */
    reset(): void;
    /** Change channel `i`'s speed limit (units/s), e.g. while a deliberate fast move runs. */
    setMaxSpeed(i: number, v: number): void;
    /** Is a jump still easing out? */
    active(): boolean;
    /** Current error (output − target) of channel `i`. */
    error(i: number): number;
    /** Feed this frame's targets (`values`, length n); they are replaced by the guarded values. */
    apply(values: number[], dt: number): number[];
}
