import { type Object3D, Quaternion } from 'three/webgpu';
import type { RigSpec } from './types';
/**
 * Runtime foot placement: the clips assume flat ground at the character's feet; this puts
 * the soles on the real ground and keeps planted feet planted. Every render frame, after
 * the mixer (and RotationBlend):
 *
 *   capture()  where the clips put the feet (before any procedural layer moves the body)
 *   ...        procedural layers (lean, landing squash) move the body
 *   apply()    put the feet back where the clips had them, on the real ground
 *
 * Per foot, a ray under the heel and one under the toe find the ground (the `probe`):
 *
 * - **Terrain**: the foot keeps the clip's height above the ground under it (on a step edge,
 *   the higher side), and never goes through it (a sinking blend is lifted out). A planted
 *   foot is pitched to the slope it stands on. A swinging foot also looks a little ahead, so
 *   it lifts over a riser before it gets there.
 * - **Pelvis**: the body is lowered by the deeper planted foot's offset (smoothed), so the
 *   foot on the lower step reaches it; the other leg bends.
 * - **Locking** (optional): a foot that touches down stays where it touched down (on its
 *   heel or toe, whichever is lower) until the animation lifts it. Blends, turns and
 *   playback-rate mismatches would otherwise slide it. If the animation drifts more than
 *   `maxDrift` away, the foot re-plants with a quick step (lift, move, set down), one foot
 *   at a time. A foot that lifts off returns to the animation in the air.
 *
 * Legs are re-solved with the planar two-bone IK (`twoBoneX`) as a change from the current
 * angles (no change = exactly the current pose, so fading in never pops), plus a little hip
 * abduction for sideways offsets. Everything fades in and out.
 */
export interface GroundHit {
    /** Height of the hit (world). */
    y: number;
    /** Surface normal. */
    nx: number;
    ny: number;
    nz: number;
    /** Which surface (collider id): heel and toe on the same surface may be pitched to it. */
    id: number;
}
/** Ray straight down from (x, y, z), at most `maxDown`; fills `out`, returns whether it hit. */
export type GroundProbe = (x: number, y: number, z: number, maxDown: number, out: GroundHit) => boolean;
export interface FootPlacementTuning {
    /** Ground probes start this far above the character's feet and reach `probeDown` below them. */
    probeUp: number;
    probeDown: number;
    /** Ground whose normal has a smaller y is a wall, not something to stand on. */
    minNormalY: number;
    /** The body drops at most this far (m); a foot moves at most `maxRaise` up for the terrain. */
    maxDrop: number;
    maxRaise: number;
    /** Fade in / out (s). */
    fadeIn: number;
    fadeOut: number;
    /** Smoothing rates (1/s): a foot's terrain offset, the pelvis drop, the slope pitch. */
    footRate: number;
    dropRate: number;
    pitchRate: number;
    /** Largest slope pitch for a foot (degrees). */
    maxPitch: number;
    /** A heel or toe this close to the floor (m, as animated) is on it. */
    contact: number;
    /** A locked foot lets go once its lower end is `release` × `contact` up. */
    release: number;
    /** Locked feet: re-plant with a step once the animation is this far away (m). */
    maxDrift: number;
    /** The re-plant step: shortest duration (s), top speed (m/s: a longer way takes longer), and lift (m). */
    stepTime: number;
    stepSpeed: number;
    stepLift: number;
    /** A released foot returns to the animation at this rate (1/s). */
    releaseRate: number;
    /** Most hip abduction for a sideways offset (degrees). */
    maxSpread: number;
    /**
     * A swinging foot also looks ahead of its toe, to lift over a riser in time: this far (m),
     * plus `lookaheadTime` seconds of the foot's own forward speed. A foot counts as swinging
     * (for this) while it is off the floor, or moving forward faster than the body (a foot
     * about to touch down is still on its way to where it lands).
     */
    lookahead: number;
    lookaheadTime: number;
    /**
     * A planted foot that the animation pushes into the ground (a blend between two poses) is
     * lifted out at most this fast (m/s): on a straight leg a few centimetres is a big knee bend.
     */
    liftRate: number;
    /** Largest sideways correction (m) the legs are asked to reach. */
    maxReach: number;
    /**
     * A foot moving forward faster than `swingShare` × the body's speed + `swingSpeed` (m/s)
     * is swinging, even when it passes low: it doesn't lock.
     */
    swingShare: number;
    swingSpeed: number;
    /** A foot swinging forward at speed keeps this clear of the ground (m). */
    swingClear: number;
    /**
     * A gait's swinging foot goes from the ground it left to the ground it lands on between
     * these points of its swing (0..1): going up, and going down.
     */
    swingUp: readonly [number, number];
    swingDown: readonly [number, number];
    /**
     * Pop guard (popGuard.ts): each foot's correction (where its ankle goes, relative to where
     * the clip has it: the terrain offset, the lock's, and the slope's pitch) follows its
     * target at up to `guardMove` m/s and `guardPitch` deg/s; anything faster (a correction
     * switching on, a re-target, a constraint) eases over at `guardRate` (rad/s, critically
     * damped) instead. A locked foot's hold and a re-planting step are never held back.
     */
    guardRate: number;
    guardMove: number;
    guardPitch: number;
    /**
     * A re-planting step under way finishes even if locking stops meanwhile (cut short, the
     * lifted foot drops and snaps back to the clip in a frame), and the foot locks again on the
     * frame it comes down (no frame unlocked in between for a blend to drag it). Off by default
     * (the platformer's tuning predates it); Riftlight's hero turns it on.
     */
    settleSteps: boolean;
}
export declare const FOOT_PLACEMENT_DEFAULTS: FootPlacementTuning;
/** Where a swinging foot is in its swing (from the gait): progress 0..1 and where it lands. */
export interface SwingInfo {
    progress: number;
    /** How far ahead of the body's current position (m, along its facing) the foot touches down. */
    land: number;
}
export interface FootPlacementInput {
    /** Terrain IK wanted (grounded standing / locomotion states). */
    ik: boolean;
    /** Foot locking wanted as well (not while the feet are meant to slide). */
    lock: boolean;
    /**
     * Per foot, while a gait swings it (null: planted, or not a gait): its swing is blended in
     * world space from the ground it took off from to the ground where it will land, early
     * in the swing going up (it is over the riser in time), late going down.
     */
    swing?: {
        R: SwingInfo | null;
        L: SwingInfo | null;
    } | null;
    /** Ground speed (m/s): how far ahead a swinging foot looks for risers. */
    speed?: number;
}
/** What it did this frame (tooling, tests). */
export interface FootPlacementState {
    weight: number;
    drop: number;
    feet: {
        side: 'R' | 'L';
        offset: number;
        pitch: number;
        locked: boolean;
        stepping: boolean;
        correction: number;
        height: number;
        easing: number;
        miss: number;
    }[];
}
export declare class FootPlacement {
    private readonly model;
    private readonly probe;
    readonly tuning: FootPlacementTuning;
    private readonly legs;
    private readonly pelvis;
    private readonly feet;
    private weight;
    /** Smoothed body height (world) and the pelvis drop it means this frame (m). */
    private bodyY;
    private bodyV;
    private drop;
    /** Smoothing starts over (fading in from nothing). */
    private fresh;
    private readonly lastRoot;
    private started;
    private captured;
    private readonly legGuard;
    /** Per foot: the correction (x, y, z, world; slope pitch, deg) this frame, guarded. */
    private readonly task8;
    /** Per foot: what the layers and the pelvis drop moved the ankle by (to undo), and the pitch to undo. */
    private readonly undo8;
    /** Per leg: hip swing, hip spread, knee, ankle (radians), as solved this frame. */
    private readonly legs8;
    constructor(model: Object3D, rig: RigSpec, probe: GroundProbe, tuning?: Partial<FootPlacementTuning>);
    /** Rest rotations of the leg joints (the clips' reference), if the model was already posed. */
    setRest(rest: ReadonlyMap<string, Quaternion>): void;
    /** Forget locks and smoothing (teleports, new clip sets), and any jump still easing out. */
    reset(): void;
    /** Forget locks and smoothing (placement switched off). */
    private forget;
    state(): FootPlacementState;
    /** Remember where the clips put the feet. Call after the mixer, before procedural layers. */
    capture(): void;
    apply(dt: number, input: FootPlacementInput): void;
    /**
     * Move the leg so its ankle moves by `task8[at..at+2]` (world) and its sole pitches by
     * `task8[at+3]` degrees: the planar solve is a linearisation, so it is applied, what is
     * left measured, and solved again.
     */
    private placeLeg;
    /** Lower the pelvis by `drop` (m, ≤ 0), straight down in its parent's space. */
    private applyDrop;
    /** Add the (guarded) leg corrections at `legs8[at..at+3]` to the leg's joints. */
    private setLeg;
    /** The ground (into HIT) where a swinging foot will land: ahead of the body, as far out to the side as the foot is now. */
    private landing;
    /** Ground straight under (x, z), into HIT; false if none (or a wall, or started inside something). */
    private ground;
    /**
     * The joint changes (into `legs8[at..at+3]`: hip swing, hip spread, knee, ankle) that move
     * the ankle (now at `ankle`, world) by `d` and pitch the foot by `pitch` degrees (+ = toes down).
     */
    private solveLeg;
}
