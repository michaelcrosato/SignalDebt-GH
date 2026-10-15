import { type ResolvedJoint } from './joint';
import type { ClipDef, Ease, Pose, RigSpec } from './types';
export { applyEase } from './ease';
export { REST_JOINT, resolveJoint, type ResolvedJoint } from './joint';
/** Mirror a pose left ↔ right (rig.mirror pairs; Y/Z rotations and X offsets flip). */
export declare function mirror(pose: Pose, rig: Pick<RigSpec, 'mirror'>): Pose;
/** A whole clip mirrored left ↔ right (e.g. ShimmyLeft from ShimmyRight). */
export declare function mirrorClip(clip: ClipDef, name: string, rig: Pick<RigSpec, 'mirror'>): ClipDef;
/** Linear blend of two poses (0 = a, 1 = b). */
export declare function blend(a: Pose, b: Pose, t: number): Pose;
/** Add rotation offsets (degrees) on top of a pose — handy for variations. */
export declare function offset(pose: Pose, deltas: Pose): Pose;
/**
 * Evaluate a clip's pose at `frame` (keys + layers + feet track), fully resolved for every
 * joint of `rig` (or the listed joints — then the feet track needs a rig and is skipped).
 */
export declare function sampleClip(clip: ClipDef, frame: number, rig: RigSpec | readonly string[]): Record<string, ResolvedJoint>;
/** The keys around frame `f` and the eased 0..1 position between them. */
export declare function bracket<T extends readonly [number, unknown, Ease?]>(keys: readonly T[], f: number): [T, T, number];
/** Problems with a clip definition itself (unknown joints, bad key order, loop mismatch). */
export declare function validateClip(clip: ClipDef, rig: RigSpec): string[];
