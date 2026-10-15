import type { Euler, JointPose, Vec3 } from './types';
/** Normalised joint pose (all channels present). */
export interface ResolvedJoint {
    r: Euler;
    p: Vec3;
    s: Vec3;
}
export declare const REST_JOINT: ResolvedJoint;
export declare function resolveJoint(v: Euler | JointPose | undefined): ResolvedJoint;
