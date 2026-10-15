import { type Object3D, Quaternion } from 'three/webgpu';
import type { RigSpec } from './types';
/**
 * Procedural layers on top of the clips: small, physically motivated offsets that clips
 * can't know about because they depend on how the character is moving right now. Apply
 * them every render frame after the mixer (and RotationBlend), before foot placement, which
 * then puts the feet back on the ground.
 *
 * - **lean**: the whole body tips about the feet. `roll` (degrees, + = to its right) leans
 *   into turns; `pitch` (+ = forward) leans into acceleration and back when braking.
 * - **look**: the head (and a little of the torso) turns toward where the character is
 *   going, or toward something worth looking at. `yaw` in degrees, + = to its left.
 * - **impact**: 0..1, a landing squash: hips drop, body squashes and tips forward.
 * - **cap**: an optional springy joint (a hat): it lags behind the head's motion and settles.
 *
 * Every joint stays inside `rig.limits`.
 */
export interface PoseLayerInput {
    lean: {
        roll: number;
        pitch: number;
    };
    look: number;
    impact: number;
}
export interface PoseLayerTuning {
    /** Share of a look that the torso takes (the head takes the rest). */
    torsoLook: number;
    /** Landing impact at 1: pelvis drop (m), squash, torso pitch (deg). */
    impactDrop: number;
    impactSquash: number;
    impactTorso: number;
    /** Springy cap: stiffness (1/s²), damping (1/s), degrees per m/s² of head acceleration, max angle (deg). */
    capStiffness: number;
    capDamping: number;
    capGain: number;
    capMax: number;
}
export declare const POSE_LAYER_DEFAULTS: PoseLayerTuning;
export declare class PoseLayers {
    readonly tuning: PoseLayerTuning;
    private readonly pelvis;
    private readonly torso;
    private readonly head;
    private readonly cap;
    private readonly rest;
    private readonly limits;
    private readonly capAngle;
    private readonly capVel;
    private readonly lastHead;
    private readonly lastHeadVel;
    private capStarted;
    constructor(model: Object3D, rig: RigSpec, tuning?: Partial<PoseLayerTuning>);
    /** Rest rotations (the clips' reference), if the model was posed when this was built. */
    setRest(rest: ReadonlyMap<string, Quaternion>): void;
    reset(): void;
    apply(dt: number, input: PoseLayerInput): void;
    /** Springy cap: driven by the head's acceleration, in the head's frame. */
    private spring;
    /** Add degrees to a joint's Euler XYZ (relative to rest), clamped to its limits. */
    private addEuler;
}
