import { type ClipDef, type Ease, type FeetGoals, type Pose } from '../../../engine/animation';
/**
 * Helpers for writing hero clips: friendly limb and root poses, foot IK keys, somersaults.
 * Conventions (see rig.ts for the full cheat-sheet): frames at 30 fps, degrees, the
 * character faces +Z, R/L are its own sides. `arm()` / `leg()` take friendly values:
 * swing (−90 = forward), out (+ = away from the body), bend (+ = elbow/knee bent).
 *
 * Feet: `track()` keys take foot goals (IK). Where two neighbouring keys both have goals
 * the legs are solved every frame, so feet stay on the floor through the transition.
 * `null` = legs as keyed (airborne, lying down).
 */
export type Side = 'R' | 'L';
export type V3 = [number, number, number];
/** Arm: swing (−90 ahead, −180 overhead, + back), out (+ away from body), elbow bend, wrist curl, twist. */
export declare function arm(side: Side, swing: number, out?: number, elbow?: number, wrist?: number, twist?: number): Pose;
export declare const arms: (swing: number, out?: number, elbow?: number, wrist?: number) => Pose;
/** Leg: swing (−X forward), out (+ away from body), knee bend, toes (+ pointed down). */
export declare function leg(side: Side, swing: number, out?: number, knee?: number, toes?: number): Pose;
/** Root pose: rotation (deg), offset from standing (m), squash (uniform or xyz). */
export declare const pelvis: (r?: V3, p?: V3, s?: number | V3) => Pose;
/** Squash (+) or stretch (−), volume-ish preserving. */
export declare const squash: (k: number) => V3;
/** Pin feet on a single pose (IK). */
export declare const F: (body: Pose, feet: FeetGoals) => Pose;
export type TrackKey = readonly [frame: number, body: Pose, feet: FeetGoals | null, ease?: Ease];
/** Keys with foot goals: poses are solved at the keys and the feet track in between. */
export declare function track(keys: readonly TrackKey[]): Pick<ClipDef, 'keys' | 'feet'>;
/** Both feet flat at these forward positions. */
export declare const flat: (r: number, l: number) => FeetGoals;
/**
 * Root for a body spinning `angle` degrees about X (flip) or Z (cartwheel) around its
 * middle (`pivot`, relative to the hips) instead of the hips, lifted by `lift`.
 */
export declare function spinRoot(axis: 'x' | 'z', angle: number, pivot?: V3, lift?: number): Pose;
/** Keys (≤ 30° apart, eased overall) for a somersault from `from` to `to` degrees. */
export declare function somersault(axis: 'x' | 'z', from: number, to: number, f0: number, f1: number, body: Pose, pivot?: V3, shape?: 'linear' | 'inOut' | 'out'): TrackKey[];
