import { type ResolvedJoint } from './joint';
import type { Euler, FeetKey, JointPose, LegRig, Pose, RigSpec } from './types';
/**
 * Foot-placement IK: say where a foot should be, get the hip/knee/ankle rotations.
 *
 * Authors write the body (pelvis height, lean, arms...) and then pin the feet:
 *
 *   placeFeet({ Pelvis: { p: [0, -0.2, 0] }, Torso: [20, 0, 0] }, rig, {
 *     R: { z: 0.15 },                             // right foot flat, 15 cm ahead
 *     L: { z: -0.2, pitch: 30, pivot: 'ball' },   // left heel raised on its toes
 *   })
 *
 * Coordinates are the character's ground frame: y up from the floor, z forward. The solve
 * is planar (legs bend about X, knees forward); lateral offsets are ignored. It accounts
 * for the root's position, rotation and squash, so a squashed or leaning body still
 * keeps its feet exactly where they were asked to be.
 */
export interface FootGoal {
    /** Forward position of the ankle (m) when the foot is flat. */
    z: number;
    /**
     * Sideways position (m, + = the character's left). Default: under the hip at rest.
     * Only matters when the root is turned (e.g. a pivot on one foot); the solve itself
     * stays in the leg's plane.
     */
    x?: number;
    /** Height of the sole above the floor (m). 0 = standing on it. */
    y?: number;
    /** Sole pitch in degrees: + = toes down / heel raised, − = toes up. */
    pitch?: number;
    /** Point that stays at (z, y) while pitching: heel (heel strike), toe tip (tiptoe, toe-off) or ankle. */
    pivot?: 'heel' | 'ball' | 'ankle';
    /**
     * 0..1: let the foot hang from the shin instead of holding its world pitch (swinging
     * feet, dangling in the air). 1 = foot at `relax` degrees relative to the shin.
     */
    follow?: number;
    /** Foot angle relative to the shin when following (default 15 = toes slightly down). */
    relax?: number;
}
export type Side = 'R' | 'L';
/** Ankle position (y, z) for a foot goal. */
export declare function ankleFor(goal: FootGoal, legs: LegRig): {
    y: number;
    z: number;
};
/**
 * Planar two-bone IK in the Y/Z plane. Returns [upper, lower] X rotations in degrees.
 * The middle joint never folds past `maxBend` degrees (targets closer than that are
 * reached as far as the joint allows).
 */
export declare function twoBoneX(ty: number, tz: number, upper: number, lower: number, bend?: 1 | -1, maxBend?: number): [number, number];
/** Rotations for one leg so its foot meets `goal`, given the root joint's pose. */
export declare function legIK(legs: LegRig, side: Side, root: JointPose | Euler | undefined, goal: FootGoal): {
    upper: number;
    lower: number;
    foot: number;
};
/**
 * Return `pose` with its legs solved so the feet land on the goals. Existing Y/Z
 * rotations on the leg joints (spread, twist) are kept; X is replaced.
 */
export declare function placeFeet(pose: Pose, rig: RigSpec, goals: Partial<Record<Side, FootGoal>>): Pose;
/** Solve the feet track at frame `f` into `out` (a resolved pose). */
export declare function applyFeet(track: readonly FeetKey[], f: number, out: Record<string, ResolvedJoint>, rig: RigSpec): void;
/** Interpolate two foot goals: same pivot → blend directly (the foot rolls); else blend ankles. */
export declare function lerpGoal(a: FootGoal, b: FootGoal, t: number, legs: LegRig): FootGoal;
