import type { AnimRequest } from './animator';
import type { JumpKind, MoveInput, PlatformerCharacter, Stance } from './PlatformerCharacter';
export type { AnimRequest } from './animator';
/**
 * PlatformerCharacter's state machine as one table: everything a state is, in one entry.
 * Adding a state means adding an entry here (its MoveState name comes from the key).
 *
 *   step        one fixed step: physics and transitions
 *   anim        the clip it plays (per render frame): name, once, playback speed, fade in
 *   stance      collider entering it needs: 'stand' stands up (or crouches without headroom)
 *   airborne    in the air: own vertical motion, fall height keeps measuring
 *   snapToGround false: no snapping down to the ground (rising, climbing)
 *   attached    facing comes from the wall / ledge / block, not from a first-person view
 *   snapFacing  the model turns to the facing at once (no smoothing)
 *   lock        locked for this long (s), decelerating, then idle (or crouch if held)
 *   feet        runtime foot placement while grounded: 'ik' puts the soles on the real ground
 *               (stairs, slopes); 'lock' also keeps planted feet planted through blends and
 *               turns (not for states whose feet are meant to slide)
 *   lean        the body leans into turns and into acceleration
 *
 * Shared physics and probes (move, setStance, rays, ledge detection) live in the core,
 * PlatformerCharacter.ts; numbers live in tuning.ts.
 */
export interface StateDef {
    step(c: PlatformerCharacter, dt: number, input: MoveInput): void;
    anim(c: PlatformerCharacter): AnimRequest;
    stance?: Stance | ((c: PlatformerCharacter) => Stance | undefined);
    airborne?: boolean;
    snapToGround?: false;
    attached?: boolean;
    snapFacing?: boolean;
    lock?(c: PlatformerCharacter): number;
    feet?: FeetMode | ((c: PlatformerCharacter) => FeetMode | undefined);
    lean?: boolean;
}
export type FeetMode = 'ik' | 'lock';
export declare const STATES: {
    idle: {
        step: typeof stepGround;
        anim: (c: PlatformerCharacter) => {
            name: string;
            once: true;
            fade?: undefined;
        } | {
            name: string;
            fade: number;
            once?: undefined;
        } | {
            name: string;
            once?: undefined;
            fade?: undefined;
        };
        stance: "stand";
        feet: "lock";
    };
    teeter: {
        step: typeof stepGround;
        anim: () => {
            name: string;
        };
        feet: "lock";
    };
    walk: {
        step: typeof stepGround;
        anim: (c: PlatformerCharacter) => AnimRequest;
        stance: "stand";
        feet: "lock";
        lean: true;
    };
    run: {
        step: typeof stepGround;
        anim: typeof gait;
        stance: "stand";
        feet: "lock";
        lean: true;
    };
    skid: {
        step: typeof stepSkid;
        anim: () => {
            name: string;
            once: true;
        };
        stance: "stand";
        feet: "ik";
    };
    skidTurn: {
        step: typeof stepSkidTurn;
        anim: () => {
            name: string;
            once: true;
            fade: number;
        };
        stance: "stand";
        snapFacing: true;
        feet: "lock";
    };
    bonk: {
        step: typeof stepLocked;
        anim: () => {
            name: string;
            once: true;
            fade: number;
        };
        stance: "stand";
        lock: (c: PlatformerCharacter) => number;
        feet: "lock";
    };
    crouch: {
        step: typeof stepCrouch;
        anim: () => {
            name: string;
        };
        feet: "lock";
    };
    crouchWalk: {
        step: typeof stepCrouch;
        anim: (c: PlatformerCharacter) => {
            name: string;
            speed: number;
        };
        feet: "lock";
    };
    crouchSlide: {
        step: typeof stepCrouchSlide;
        anim: () => {
            name: string;
        };
        feet: "ik";
    };
    proneDown: {
        step: typeof stepProneDown;
        anim: () => {
            name: string;
            once: true;
        };
        feet: "lock";
    };
    prone: {
        step: typeof stepProne;
        anim: () => {
            name: string;
        };
    };
    crawl: {
        step: typeof stepProne;
        anim: (c: PlatformerCharacter) => {
            name: string;
            speed: number;
        };
    };
    getUpFront: {
        step: typeof stepLocked;
        anim: () => {
            name: string;
            once: true;
        };
        lock: (c: PlatformerCharacter) => number;
        feet: "lock";
    };
    lieDown: {
        step: typeof stepLieDown;
        anim: () => {
            name: string;
            once: true;
        };
        feet: "lock";
    };
    lying: {
        step: typeof stepLying;
        anim: (c: PlatformerCharacter) => {
            name: string;
            fade: number;
        };
    };
    getUp: {
        step: typeof stepLocked;
        anim: () => {
            name: string;
            once: true;
        };
        lock: (c: PlatformerCharacter) => number;
        feet: "lock";
    };
    sit: {
        step: typeof stepSit;
        anim: (c: PlatformerCharacter) => {
            name: string;
            once: true;
            fade: number;
        } | {
            name: string;
            fade: number;
            once?: undefined;
        };
        feet: "lock";
    };
    standUp: {
        step: typeof stepLocked;
        anim: () => {
            name: string;
            once: true;
            fade: number;
        };
        lock: (c: PlatformerCharacter) => number;
        feet: "lock";
    };
    jump: {
        step: typeof stepAir;
        anim: (c: PlatformerCharacter) => {
            name: JumpKind;
            once: true;
            fade: number;
        };
        stance: "stand";
        airborne: true;
        snapToGround: false;
        feet: (c: PlatformerCharacter) => "lock" | undefined;
    };
    fall: {
        step: typeof stepAir;
        anim: () => {
            name: string;
            fade: number;
        };
        stance: "stand";
        airborne: true;
    };
    wallSlide: {
        step: typeof stepWallSlide;
        anim: () => {
            name: string;
            fade: number;
        };
        stance: "stand";
        airborne: true;
        attached: true;
    };
    hurt: {
        step: typeof stepHurt;
        anim: () => {
            name: string;
            once: true;
            fade: number;
        };
        stance: "stand";
        airborne: true;
        snapToGround: false;
        feet: (c: PlatformerCharacter) => "ik" | undefined;
    };
    dive: {
        step: typeof stepAir;
        anim: () => {
            name: string;
            once: true;
        };
        airborne: true;
    };
    groundPound: {
        step: typeof stepGroundPound;
        anim: (c: PlatformerCharacter) => {
            name: string;
            once: true;
            fade: number;
        };
        airborne: true;
    };
    land: {
        step: typeof stepLocked;
        anim: () => {
            name: string;
            once: true;
            fade: number;
        };
        stance: "stand";
        lock: () => 0.16;
        feet: "lock";
    };
    hardLand: {
        step: typeof stepLocked;
        anim: () => {
            name: string;
            once: true;
            fade: number;
        };
        stance: "stand";
        lock: (c: PlatformerCharacter) => number;
        feet: "lock";
    };
    groundPoundLand: {
        step: typeof stepLocked;
        anim: () => {
            name: string;
            once: true;
            fade: number;
        };
        lock: (c: PlatformerCharacter) => number;
        feet: "lock";
    };
    bellySlide: {
        step: typeof stepBellySlide;
        anim: () => {
            name: string;
        };
    };
    hang: {
        step: typeof stepHang;
        anim: (c: PlatformerCharacter) => {
            name: string;
        };
        stance: "stand";
        attached: true;
        snapFacing: true;
    };
    pullUp: {
        step: typeof stepPullUp;
        anim: () => {
            name: string;
            once: true;
            fade: number;
        };
        attached: true;
        snapFacing: true;
    };
    climb: {
        step: typeof stepClimb;
        anim: (c: PlatformerCharacter) => {
            name: string;
            speed: number;
        } | {
            name: string;
            speed?: undefined;
        };
        stance: "stand";
        snapToGround: false;
        attached: true;
        snapFacing: true;
    };
    push: {
        step: typeof stepBlock;
        anim: (c: PlatformerCharacter) => {
            name: string;
            fade: number;
        };
        stance: "stand";
        attached: true;
        snapFacing: true;
        feet: "ik";
    };
    grab: {
        step: typeof stepBlock;
        anim: () => {
            name: string;
        };
        stance: "stand";
        attached: true;
        snapFacing: true;
        feet: "lock";
    };
    pull: {
        step: typeof stepBlock;
        anim: () => {
            name: string;
        };
        stance: "stand";
        attached: true;
        snapFacing: true;
        feet: "ik";
    };
    slide: {
        step: typeof stepSlide;
        anim: () => {
            name: string;
        };
        stance: "stand";
    };
    attack: {
        step: typeof stepAttack;
        anim: (c: PlatformerCharacter) => {
            name: string;
            once: true;
            fade: number;
        };
        stance: (c: PlatformerCharacter) => "stand" | undefined;
        feet: (c: PlatformerCharacter) => "lock" | "ik";
    };
    emote: {
        step: typeof stepEmote;
        anim: (c: PlatformerCharacter) => {
            name: string;
            once: true;
        };
        stance: "stand";
        feet: "lock";
    };
};
export type MoveState = keyof typeof STATES;
/** The table entry for `state` (typed as the general StateDef). */
export declare function stateDef(state: MoveState): StateDef;
/** The state's foot placement mode right now (the table's `feet`). */
export declare function feetMode(c: PlatformerCharacter): FeetMode | undefined;
/**
 * Walking and running: the locomotion blend space (Tiptoe / Walk / Run by speed, phase
 * synced). A gentle stick tilt tiptoes; once the stick is let go the share stays as it was.
 */
declare function gait(c: PlatformerCharacter): AnimRequest;
declare function stepGround(c: PlatformerCharacter, dt: number, input: MoveInput): void;
declare function stepSkid(c: PlatformerCharacter, dt: number, input: MoveInput): void;
/**
 * Turning round out of a skid: the SkidTurn clip hops, and the facing turns only while both
 * feet are off the floor (`spinFrom`..`spinTo` s), so they never skate round on it. Then it
 * runs off the other way.
 */
declare function stepSkidTurn(c: PlatformerCharacter, dt: number, input: MoveInput): void;
/** Landings, get-ups, bonk: decelerate for the state's lock time, then idle (or crouch). */
declare function stepLocked(c: PlatformerCharacter, dt: number, input: MoveInput): void;
/**
 * Knocked back (PlatformerCharacter.hurt): an arc away from the hit, no control for
 * `hurt.stun` seconds, sliding to a stop once down; then back to standing (or falling).
 */
declare function stepHurt(c: PlatformerCharacter, dt: number, input: MoveInput): void;
declare function stepCrouch(c: PlatformerCharacter, dt: number, input: MoveInput): void;
declare function stepCrouchSlide(c: PlatformerCharacter, dt: number, input: MoveInput): void;
declare function stepProneDown(c: PlatformerCharacter, dt: number): void;
declare function stepProne(c: PlatformerCharacter, dt: number, input: MoveInput): void;
declare function stepLieDown(c: PlatformerCharacter, dt: number): void;
declare function stepLying(c: PlatformerCharacter, dt: number, input: MoveInput): void;
declare function stepSit(c: PlatformerCharacter, dt: number, input: MoveInput): void;
export declare function startEmote(c: PlatformerCharacter, clip: string): void;
declare function stepEmote(c: PlatformerCharacter, dt: number, input: MoveInput): void;
declare function stepAttack(c: PlatformerCharacter, dt: number, input: MoveInput): void;
export declare function startJump(c: PlatformerCharacter, kind: JumpKind, input?: MoveInput): void;
declare function stepAir(c: PlatformerCharacter, dt: number, input: MoveInput): void;
declare function stepWallSlide(c: PlatformerCharacter, dt: number, input: MoveInput): void;
declare function stepGroundPound(c: PlatformerCharacter, dt: number): void;
declare function stepBellySlide(c: PlatformerCharacter, dt: number, input: MoveInput): void;
declare function stepHang(c: PlatformerCharacter, dt: number, input: MoveInput): void;
declare function stepPullUp(c: PlatformerCharacter): void;
declare function stepClimb(c: PlatformerCharacter, dt: number, input: MoveInput): void;
declare function stepBlock(c: PlatformerCharacter, dt: number, input: MoveInput): void;
declare function stepSlide(c: PlatformerCharacter, dt: number, input: MoveInput): void;
