/**
 * Procedural motion: things that move because something else moved, computed every frame
 * instead of keyed.
 *
 *   SpringChain   secondary motion: a tail, antennae, a ponytail, a cape strip. Verlet points
 *                 that keep most of their velocity, are pulled back toward their rest
 *                 direction (`stiffness`), sag under gravity and stay their length apart.
 *   Squash        squash and stretch: a spring on one number, drawn as a volume-preserving
 *                 scale (taller is thinner). Kick it on landings, jumps and hits.
 *   LegStepper    planted feet for creatures with any number of legs: a foot stays where it
 *                 is in the world until it is too far from where it should be, then steps
 *                 there in an arc, never lifting at the same time as its neighbours.
 *
 * All pure (no three.js), deterministic, unit-tested; the Animation wing's rooms draw them.
 */
type Vec3 = [number, number, number];
export interface SpringChainOptions {
    /** Points after the root (≥ 1). */
    segments: number;
    /** Length of each segment (m). */
    length: number;
    /** Rest direction from the root in the root's own space (normalised; default straight back, −Z). */
    rest?: Vec3;
    /** Pull toward the rest pose per second (0 floppy … 30 stiff). Default 10. */
    stiffness?: number;
    /** Velocity kept per 1/60 s (0..1). Default 0.94. */
    keep?: number;
    /** Gravity on the chain (m/s²). Default 6 (lighter than real: tails hold up a bit). */
    gravity?: number;
}
/**
 * A chain of points hanging off a moving root. Call `update(dt, root, basis)` every frame
 * with the root's world position and its orientation (three columns: right, up, forward),
 * then read `points` (root first).
 */
export declare class SpringChain {
    readonly points: Vec3[];
    private readonly prev;
    o: Required<SpringChainOptions>;
    private started;
    /** Time not yet stepped, and where the root was at the last step. */
    private pending;
    private readonly lastRoot;
    private readonly dir;
    constructor(o: SpringChainOptions);
    /** Put the chain straight out in its rest pose (no swing). */
    reset(root: Vec3, basis: readonly [Vec3, Vec3, Vec3]): void;
    update(dt: number, root: Vec3, basis: readonly [Vec3, Vec3, Vec3]): void;
    /** How far the tip is from where the rest pose puts it (m): how much it is swinging. */
    swing(basis: readonly [Vec3, Vec3, Vec3]): number;
    /** Each segment back to its length, from the root out (the root is fixed). */
    private keepLengths;
    /** The rest direction in the world (unit), into a reused array. */
    private restDir;
}
/**
 * Squash and stretch as a damped spring on `value` (0 = rest, + stretched, − squashed).
 * `scale()` turns it into a volume-preserving pair: `const [h, v] = squash.scale();
 * mesh.scale.set(h, v, h)`.
 */
export declare class Squash {
    value: number;
    velocity: number;
    /** Spring stiffness and damping (a critically damped spring has damping = 2√stiffness). */
    stiffness: number;
    damping: number;
    /** 0 turns it off; 2.5 is rubbery. */
    amount: number;
    /** Add a kick: negative squashes (a landing), positive stretches (a jump). */
    kick(v: number): void;
    /** Set the shape directly (a held squash). */
    set(v: number): void;
    update(dt: number): void;
    /** [horizontal, vertical] scale: y = 1 + s, xz = 1 / √(1 + s), so the volume stays put. */
    scale(out?: [number, number]): [number, number];
}
export interface LegDef {
    /** Where the foot rests, in the body's space (x right, z forward; y ignored). */
    rest: readonly [number, number];
    /** Legs that must not be lifting when this one starts a step (its neighbours; mutual, so listing a pair once is enough). */
    partners?: readonly number[];
}
export interface LegStepperOptions {
    legs: readonly LegDef[];
    /** Step when the foot is this far from its target (m). Default 0.3. */
    threshold?: number;
    /** Seconds a step takes. Default 0.18. */
    stepTime?: number;
    /** How high a step lifts the foot (m). Default 0.15. */
    lift?: number;
    /** Aim ahead of the body's motion by this many seconds (feet land where it is going). Default 0.25. */
    lead?: number;
}
export interface Foot {
    /** World position of the foot now. */
    readonly at: Vec3;
    /** Stepping: 0 → 1 through the step; -1 planted. */
    t: number;
    readonly from: Vec3;
    readonly to: Vec3;
}
/**
 * Feet for a body with any number of legs. `update(dt, body, yaw, velocity, ground)`:
 * the body's world position and heading, how fast it moves, and the ground height at a point.
 */
export declare class LegStepper {
    readonly feet: Foot[];
    o: Required<Omit<LegStepperOptions, 'legs'>> & {
        legs: readonly LegDef[];
    };
    /** Steps started (tests). */
    steps: number;
    private started;
    /** Each leg's partners, both ways round (a leg waits for its partners, and they for it). */
    private readonly partners;
    /** Scratch for `update`: each foot's distance from its target, and the feet by that distance. */
    private readonly behind;
    private readonly order;
    private readonly t;
    private static readonly STILL;
    constructor(o: LegStepperOptions);
    /** Where leg `i` wants to be: its rest spot around the body, ahead by the lead, on the ground. */
    target(i: number, body: Vec3, yaw: number, velocity: Vec3, ground: (x: number, z: number) => number, out?: Vec3): Vec3;
    /** Every foot planted on its rest spot around `body` (a spawn or a teleport). The first `update` does this itself. */
    reset(body: Vec3, yaw: number, ground: (x: number, z: number) => number): void;
    update(dt: number, body: Vec3, yaw: number, velocity: Vec3, ground: (x: number, z: number) => number): void;
    /** Feet on the ground now. */
    planted(): number;
}
/** Partners for `n` legs in two rows (left 0, 2, 4…, right 1, 3, 5…): a leg waits for the legs beside and opposite it. */
export declare function gaitPartners(n: number): number[][];
/**
 * Where the middle joint of a two-bone limb goes (a knee, an elbow) so the end reaches
 * `target` from `root` with bones `a` and `b` long, bending toward `pole` (a point the knee
 * points at). Analytic (the law of cosines), no iterations; a target out of reach straightens
 * the limb toward it, one too close folds it as far as it goes. Returns the joint, into `out`.
 */
export declare function twoBoneIK(root: Vec3, target: Vec3, a: number, b: number, pole: Vec3, out?: Vec3): Vec3;
export {};
