import type { GameContext } from '../Engine';
import { type PaletteColor } from '../palette';
import { RAPIER } from './Physics';
type Vec3 = readonly [number, number, number];
type Ctx = Pick<GameContext, 'physics' | 'scene'>;
/** What every builder returns: its bodies, and a way to take it all out of the level again. */
export interface Built {
    /** Every body it made (fixed anchors included). */
    readonly bodies: RAPIER.RigidBody[];
    /** Remove its bodies, joints and meshes (a rebuild, a cut rope's leftovers). */
    remove(): void;
}
export interface ChainOptions {
    /** Links (capsules). Default 8. */
    links?: number;
    /** Length of one link (m). Default 0.35. */
    linkLength?: number;
    /** Link thickness (radius, m). Default 0.06. */
    radius?: number;
    color?: PaletteColor;
    /** Something heavy at the end: a ball of this radius (a wrecking ball) or a box. */
    end?: {
        ball?: number;
        box?: Vec3;
        density?: number;
        color?: PaletteColor;
    };
    /** Hang toward this direction from the anchor (default straight down). */
    direction?: Vec3;
    /** Attach to this body instead of the world (`at` is then in its local space). */
    body?: RAPIER.RigidBody;
}
/**
 * A chain of capsule links on ball joints, hanging from `at`: its links, and the end weight.
 * An iterative solver stretches a chain whose end is far heavier than its links (like
 * elastic), so the links weigh at least 1/15 of the end and get 4 extra solver passes: a
 * wrecking ball's chain stretches by a few cm. (Multibody joints would be exact, but impulses
 * — blasts, punches, shoves — don't reach their links.)
 */
export declare function chain(ctx: Ctx, at: Vec3, o?: ChainOptions): Built & {
    links: RAPIER.RigidBody[];
    end: RAPIER.RigidBody | null;
};
export interface BridgeOptions {
    planks?: number;
    /** Width across (m). Default 1.6. */
    width?: number;
    /** How far the middle hangs below the ends (m). Default 0.4. */
    sag?: number;
    thickness?: number;
    color?: PaletteColor;
    rope?: PaletteColor;
    /** Gap between planks (m). Default 0.06. */
    gap?: number;
}
/**
 * A rope bridge from `from` to `to` (the middles of its two ends, at walking height):
 * planks on ball joints at both edges of every seam (so each seam bends like a hinge but the
 * bridge can also twist), hanging in a sag. The character can walk it: it presses the planks
 * down and rides them.
 */
export declare function ropeBridge(ctx: Ctx, from: Vec3, to: Vec3, o?: BridgeOptions): Built & {
    planks: RAPIER.RigidBody[];
    cut(end: 'from' | 'to'): void;
};
export interface DoorOptions {
    width?: number;
    height?: number;
    thickness?: number;
    /** Swing limit either way (degrees). Default 110. */
    swing?: number;
    /** Turn the door frame about Y (radians). */
    yaw?: number;
    color?: PaletteColor;
    /** A spring that swings it shut again (stiffness per unit inertia, 0: none). Default 4. */
    closing?: number;
}
/** A door on a vertical hinge at `at` (the hinge's foot); push it open by walking into it. */
export declare function hingeDoor(ctx: Ctx, at: Vec3, o?: DoorOptions): Built & {
    door: RAPIER.RigidBody;
    hinge: RAPIER.RevoluteImpulseJoint;
};
export interface SpringPadOptions {
    size?: Vec3;
    /** Spring stiffness (1/s²: mass-independent). Higher: firmer. Default 40. */
    stiffness?: number;
    damping?: number;
    /** How far it can sink (m). Default 0.6. */
    travel?: number;
    color?: PaletteColor;
}
/**
 * A platform on a vertical slider with a spring motor: it rests at `at` (the spring holds its
 * own weight), sinks under a load (the character presses with its `weight`) and bounces back.
 */
export declare function springPad(ctx: Ctx, at: Vec3, o?: SpringPadOptions): Built & {
    pad: RAPIER.RigidBody;
    slider: RAPIER.PrismaticImpulseJoint;
};
export interface SeesawOptions {
    /** Plank length (m). Default 5. */
    length?: number;
    width?: number;
    /** Height of the pivot above `at` (m). Default 0.7. */
    height?: number;
    /** Turn about Y (radians): 0 runs the plank along X. */
    yaw?: number;
    /** Tilt limit either way (degrees). Default 16. */
    tilt?: number;
    color?: PaletteColor;
}
/** A plank on a hinge across its middle, on a wedge: weight on one end tips it. */
export declare function seesaw(ctx: Ctx, at: Vec3, o?: SeesawOptions): Built & {
    plank: RAPIER.RigidBody;
    hinge: RAPIER.RevoluteImpulseJoint;
};
export {};
