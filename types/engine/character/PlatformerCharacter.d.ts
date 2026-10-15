import { type AnimationClip, type Object3D, Vector3 } from 'three/webgpu';
import type { FootPlacementState } from '../animation/footPlacement';
import type { RigSpec } from '../animation/types';
import { type Physics, RAPIER } from '../physics/Physics';
import { type AnimRequest } from './animator';
import { type MoveState } from './states';
/**
 * Mario-64-style third-person platformer character (and then some), built on Rapier's
 * kinematic character controller. Physics positions are continuous; pixel alignment is
 * presentation-only. Expects the hero rig clips from src/game/hero/clips/.
 *
 * Moves: walk / tiptoe / run / skid-turn / bonk · crouch / crouch-walk / crouch-slide ·
 * prone / crawl / get-up · lie down / sleep / get-up · sit · jump / jump-up / double /
 * triple / backflip / side-flip / long jump / wall kick · dive → belly slide · ground
 * pound · fall / land / hard landing · ledge hang / shimmy / pull-up / drop · climb
 * (tagged 'climbable') and climb over the top · push / grab / pull (tagged 'pushable'
 * or 'grabbable') · slope slide ('slippery' or steep) · teeter at edges · step up /
 * step down · punch-punch-kick combo, sweep kick, jump kick · wave, victory.
 *
 * Layout: this file is the core (body, collider, physics sweep, probes, ledge detection,
 * stance, animation playback); every state's rules live in one table in states.ts, and
 * every tuning number in tuning.ts.
 */
export type { MoveState } from './states';
export type JumpKind = 'Jump' | 'JumpUp' | 'DoubleJump' | 'TripleJump' | 'Backflip' | 'SideFlip' | 'LongJump' | 'WallKick' | 'JumpKick';
export interface MoveInput {
    /** Desired horizontal direction in world space, length 0..1. */
    move: Vector3;
    /** Walk / tiptoe modifier. */
    walk?: boolean;
    jump: boolean;
    jumpHeld: boolean;
    /** Crouch (held). */
    crouch: boolean;
    /** Crouch pressed this step (in the air: ground pound). */
    crouchPressed?: boolean;
    /** Toggle prone (pressed). */
    prone?: boolean;
    /** Toggle lying on the back (pressed). */
    lie?: boolean;
    /** Grab / pull (held). */
    grab?: boolean;
    attack?: boolean;
    wave?: boolean;
    sit?: boolean;
    /** First person: always face this direction and strafe. */
    face?: Vector3 | null;
}
export interface PlatformerOptions {
    position: [number, number, number];
    /** Side-scroller: keep the character on its starting Z lane. */
    lockDepth?: boolean;
    runSpeed?: number;
}
export type Stance = 'stand' | 'crouch' | 'prone';
export interface Ledge {
    y: number;
    normal: Vector3;
    point: Vector3;
}
export declare class PlatformerCharacter {
    readonly body: RAPIER.RigidBody;
    readonly collider: RAPIER.Collider;
    readonly kcc: RAPIER.KinematicCharacterController;
    state: MoveState;
    stateTime: number;
    jumpKind: JumpKind;
    /** Yaw in radians (0 = facing +Z). */
    facing: number;
    /** Horizontal velocity (world). */
    readonly hvel: Vector3;
    vy: number;
    grounded: boolean;
    stance: Stance;
    /** Last animation clip requested (for tests / debug UI). */
    anim: string;
    /** Counters for tests/tooling. */
    readonly stats: {
        jumps: number;
        landings: number;
        ledgeGrabs: number;
        pullUps: number;
        pushes: number;
        pulls: number;
        hurts: number;
        crushes: number;
    };
    /**
     * The collider under the feet (its handle; -1 in the air). A moving platform's, a conveyor's
     * or a dynamic plank's: the character rides it (`move`).
     */
    groundCollider: number;
    /**
     * How hard the character presses the dynamic floor it stands on (a rope bridge sags where it
     * stands, a spring pad sinks), in the physics world's mass units (density × m³: a 1 m crate
     * of density 2 weighs 2), under the world's gravity. 0 (the default): it rides dynamic
     * floors without pressing them.
     */
    weight: number;
    /**
     * The most mass the character shoves at walking speed when it walks into a loose dynamic body
     * (a swing door, a ball, a hanging bag, debris); heavier bodies move proportionally less.
     * 0 (the default): dynamic bodies block like walls. Bodies tagged `pushable` are left to the
     * push state either way.
     */
    shove: number;
    /**
     * A moving body is coming down on the head with the floor underneath: squeezed (a lift
     * lowering onto the character, a crusher). `stats.crushes` counts each one; games decide
     * what it does (hurt, respawn): the character itself just stays on the floor.
     */
    crushed: boolean;
    /** Seconds left in which hits are ignored (after `hurt`). Games can blink the model meanwhile. */
    invulnerable: number;
    /**
     * Something worth looking at (world position), set by the game: a coin, an enemy, a sign.
     * Standing and walking, the head turns toward it (within its limits); null = look where
     * the character is going.
     */
    lookAt: Vector3 | null;
    private laneZ;
    /**
     * Speed the last move lost sliding along a wall at a glancing angle. groundMove builds on
     * it again, so steering along a wall doesn't bleed the run away step after step; the
     * realised `speed` is still the slower slide.
     */
    private wallSlip;
    private readonly collision;
    private readonly tmpOrigin;
    private readonly tmpDir;
    private readonly groundHit;
    private readonly rootHit;
    private readonly takeOffInput;
    /** Whether this step moved the body yet. */
    private moved;
    /** After a lift onto a step: how much further (m) it holds its height without falling back. */
    private riseHold;
    /** Drawn height of the body (groundRoot). */
    private rootY;
    private rootStarted;
    private readonly rootOne;
    private readonly rootGuard;
    private readonly tmpClimb;
    /** Smoothed grade of the ground being covered (rise per metre; + = uphill). */
    climb: number;
    /** Share of run speed the ground allows (uphillSpeed). */
    private uphillShare;
    private readonly tmpProbe;
    private readonly tmpFwd;
    private readonly tmpChest;
    private readonly tmpWallFeet;
    private readonly desired;
    private readonly nextPos;
    private animator;
    /** Ground rays for foot placement (no garbage per frame). */
    private readonly groundProbe;
    /** Procedural layers' inputs, reused every frame, and what they remember between frames. */
    private readonly procedural;
    /** Foot placement as it was before the last fixed step (see fixedUpdate). */
    private readonly feetBefore;
    private lastYaw;
    private lastVisualSpeed;
    private accel;
    private impactTime;
    private impactStrength;
    private seenLandings;
    constructor(physics: Physics, options: PlatformerOptions);
    /** Feet position (bottom of the capsule). Allocates: hot paths use `feetInto`. */
    get feet(): Vector3;
    /** `feet` without allocating: writes the feet position into `target`. */
    feetInto(target: Vector3): Vector3;
    /** Feet between the last two fixed steps (render interpolation), into `target`. */
    interpolatedFeet(alpha: number, target?: Vector3): Vector3;
    /** Facing direction (horizontal, unit). Allocates: hot paths use `forwardInto`. */
    get forward(): Vector3;
    /** `forward` without allocating. */
    forwardInto(target: Vector3): Vector3;
    get speed(): number;
    /** Eye position for first-person cameras. */
    eye(alpha?: number): Vector3;
    /** Side-scroller lane lock on/off (locks to the current Z). */
    setLockDepth(on: boolean): void;
    teleport(position: [number, number, number]): void;
    /** Jump right now (no headroom: nothing happens). Normally the state machine decides. */
    jump(kind: JumpKind, input?: MoveInput): void;
    /**
     * Get hit: knocked back away from `fromDirection` (where the hit came from, e.g. enemy
     * position minus hero position; only its horizontal part counts) in an arc, playing Hurt,
     * with no control for ~0.4 s, then invulnerable for a moment (`invulnerable`). `strength`
     * scales the knockback. Lets go of ledges, walls and blocks. Returns false (and does
     * nothing) while still invulnerable.
     */
    hurt(fromDirection: Vector3, strength?: number): boolean;
    /**
     * Thrown into the air at `vy` m/s (a trampoline, a spring, a geyser): a jump whose arc no
     * button can cut short. `hvel` replaces the horizontal velocity (default: kept).
     */
    launch(vy: number, o?: {
        hvel?: Vector3;
        kind?: JumpKind;
    }): void;
    /** Celebrate (games call this, e.g. on level complete). */
    celebrate(): void;
    fixedUpdate(dt: number, input: MoveInput): void;
    /** Find a grabbable ledge in front of `feet` (facing `dir`). */
    findLedge(feet: Vector3, dir: Vector3): Ledge | null;
    /**
     * Top running speed on this ground: Mario 64 slows going uphill (the steeper, the slower;
     * too steep to stand on slides back, see checkSlope). Stairs count by their average climb.
     */
    uphillSpeed(): number;
    /**
     * Smoothed grade (rise per metre) of the ground ahead, the way it's moving: the ground
     * `ahead` m on, against the ground under the feet. Steps count (by their average); a wall
     * or ledge higher than a step doesn't.
     */
    private measureClimb;
    /**
     * What carries the character this step, into `carried` (m): the platform under the feet (a
     * kinematic mover's next pose, a dynamic body's velocity there), a conveyor belt, and wind
     * from force fields. In the air, fields accelerate the velocity instead (a fan lifts, a gust
     * pushes); on a dynamic floor the character presses down with its `weight`. A platform that
     * turns turns the character with it.
     */
    private ride;
    /**
     * An updraft stronger than gravity under a standing character lifts it off: it starts to fall
     * upward this step (before the state step, so the ground states don't snap it back down).
     */
    private liftOff;
    /**
     * A kinematic body above the head that closes the gap this step, with the feet on the ground:
     * crushed (counted once, until it moves away again).
     */
    private checkCrush;
    /**
     * Walking into loose dynamic bodies shoves them (the KCC alone treats every body as a wall):
     * the point touched is pushed toward the character's horizontal speed, with at most `shove`
     * worth of mass.
     */
    private shoveBodies;
    private readonly kccHit;
    private readonly rideFeet;
    private readonly rideAcc;
    private readonly rideP;
    private readonly rideRel;
    private readonly rideQ;
    private readonly rideQ2;
    /**
     * How far up the step the capsule is about to run into this move (0: none). A riser just
     * ahead at ankle height, with flat ground on top no higher than the autostep height.
     */
    private riseAhead;
    private loseSpeedToWalls;
    /** Change collider height, keeping the feet planted. Growing needs headroom unless forced. */
    setStance(stance: Stance, force?: boolean): boolean;
    /**
     * Drive `model` with `clips`. Call again (e.g. on hot reload) to swap the clip set. With
     * the model's `rig`, the procedural layers run too: foot placement on the real ground,
     * leaning into turns, looking ahead, landing squash (docs/ANIMATION.md).
     */
    attachModel(model: Object3D, clips: readonly AnimationClip[], rig?: RigSpec): void;
    /** Tooling: every clip currently contributing to the pose, with its blend weight and time (s). */
    animationMix(): {
        name: string;
        weight: number;
        time: number;
        rate: number;
    }[];
    /** Tooling: what foot placement did this frame (weight, pelvis drop, per-foot offsets and locks). */
    footPlacement(): FootPlacementState | null;
    clipDuration(name: string, fallback: number): number;
    /** Name of the clip the current state wants (the table's `anim`). */
    animationFor(): AnimRequest;
    /** Per render frame: orient the model, pick and advance animation, then the procedural layers. */
    updateVisual(model: Object3D, dt: number, alpha: number): void;
    /**
     * With foot placement, the drawn body stands on the ground under its middle, not on the
     * capsule: the capsule's round bottom climbs a step before the body gets there and dips
     * as it rolls off a step's edge. Slopes are followed exactly; a step (the middle crossing
     * a riser) eases over (PopGuard), so stairs are a smooth climb and the feet still land on
     * each tread (foot placement).
     */
    private groundRoot;
    /** Foot placement on: a state with feet, on the ground (through brief no-ground moments: autosteps, edges). */
    private feetIK;
    /** The procedural layers' inputs for this frame (numbers in tuning.ts `visual`). */
    private proceduralInput;
}
