import { type FootGoal } from './ik';
import type { ClipDef, Euler, JointPose, LegRig, Pose, RigSpec } from './types';
/**
 * Procedural locomotion cycles with planted feet. Instead of posing every frame, describe
 * the gait (speed, cadence, stance, bounce, arm swing...) and the generator plants each
 * foot on the ground, sliding it backwards at exactly `speed` while it is in stance, then
 * swings it forward on an arc — heel strike, roll, toe-off included. Tweak numbers,
 * re-run `npm run anim -- check Walk`, look at the sheet.
 *
 * Phase: the RIGHT heel strikes at frame 0, the left at frames / 2.
 */
export interface GaitSpec {
    name: string;
    /** One full cycle (two steps), frames at 30 fps. */
    frames: number;
    /** Ground speed the cycle is authored for (m/s at playback rate 1). */
    speed: number;
    /** Fraction of the cycle each foot is on the ground. Walk ≈ 0.55–0.6, run ≈ 0.3. */
    stance: number;
    /** Mean pelvis height offset from rest (m); negative bends the knees. */
    hip: number;
    /** Pelvis bounce amplitude (m), twice per cycle. */
    bob?: number;
    /** Cycle fraction at which the pelvis is lowest (default: walk just after contact, run mid-stance). */
    low?: number;
    /** Squash at the lowest point (e.g. 0.05 = 5 % shorter, wider). */
    squash?: number;
    /** How high the lowest point of the swinging foot clears the floor at its peak (m). */
    lift?: number;
    /** Where in the swing (0..1) the foot is highest (default 0.4). */
    liftPeak?: number;
    /** Shift the whole stride forward (m). */
    reach?: number;
    /** Extra forward throw of the swinging foot late in the swing, before it settles (m). */
    swingReach?: number;
    /** Swing timing: 0 = even, + = the foot hangs back then whips forward (running). */
    swingDelay?: number;
    /**
     * 0..1: how much the swinging foot sweeps back to meet the ground at touchdown. At 1 it
     * arrives moving backwards at exactly the ground speed (still, in the world), so the
     * foot plants without sliding; at 0 it eases to a stop relative to the hips and slides
     * forward for the frames it is already on the floor.
     */
    plant?: number;
    /** Toes-up angle at heel strike (deg). */
    heelStrike?: number;
    /** Heel-raise angle at toe-off (deg). */
    toeOff?: number;
    /** Fraction of stance spent rolling off the heel / onto the toes. */
    roll?: [heel: number, toe: number];
    /** Walk on the balls of the feet: extra pitch through stance (deg), pivoting on the ball. */
    tiptoe?: number;
    /** Extra toes-down droop mid-swing (deg). */
    swingPitch?: number;
    /** How much the swinging foot hangs from the shin mid-swing (0..1, default 0.8). */
    dangle?: number;
    /** Torso lean forward (deg) and twist of the shoulders against the legs (deg). */
    lean?: number;
    twist?: number;
    /** Side-to-side torso roll (deg). */
    sway?: number;
    /** Pelvis pitch (deg): tips the whole body, legs are re-solved. */
    pelvisPitch?: number;
    /** Head pitch (deg) and how much it counters the torso twist (0..1). */
    head?: number;
    headSteady?: number;
    arms?: {
        /** Swing amplitude (deg). */
        swing: number;
        /** Base elbow bend (deg). */
        elbow: number;
        /** Extra elbow bend when the arm is forward (deg). */
        pump?: number;
        /** Arms out from the body (deg). */
        spread?: number;
        /** Arms forward of hanging (deg) — offsets the swing centre. */
        forward?: number;
        /** Follow-through delay behind the legs, as a fraction of the cycle. */
        lag?: number;
    };
    /** Extra joints/overrides mixed into every frame (hands, hat...). */
    pose?: Pose;
    /** Per-frame hook for anything else: receives the cycle phase 0..1. */
    extra?: (u: number, pose: Record<string, Euler | JointPose>) => void;
    /** Key spacing in frames (default 0.5 — IK is non-linear, keep it fine). */
    step?: number;
    notes?: string;
}
export declare function gaitClip(rig: RigSpec, g: GaitSpec): ClipDef;
/** The pose at cycle phase u (0..1). */
export declare function gaitPose(rig: RigSpec, g: GaitSpec, u: number): Pose;
/** Where a foot is at its own phase (0 = heel strike). */
export declare function footAt(g: GaitSpec, legs: LegRig, phase: number, S: number): FootGoal;
