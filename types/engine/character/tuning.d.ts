/**
 * Every number that shapes how PlatformerCharacter moves and feels, in one place.
 * Units: metres, seconds, m/s, m/s², radians (or degrees where the name says `Deg`).
 * The state table (states.ts) and the core (PlatformerCharacter.ts) read these; change a
 * value here and film the move (`npm run film -- <scenario>`) to see the effect.
 */
export declare const TUNING: {
    /** Capsule and character controller. */
    readonly body: {
        readonly radius: 0.3;
        /** Capsule half height (between the hemispheres) per stance: prone is a ball. */
        readonly half: {
            readonly stand: 0.5;
            readonly crouch: 0.2;
            readonly prone: 0;
        };
        /** Eye height per stance (first person), and how far ahead of the feet the eye sits. */
        readonly eye: {
            readonly stand: 1.45;
            readonly crouch: 0.85;
            readonly prone: 0.35;
            readonly ahead: 0.12;
            readonly aheadProne: 0.5;
        };
        /** Spawn/teleport this far above the given feet height: starting in exact contact with
         *  the ground can leave Rapier's KCC with a degenerate contact (it stops moving). */
        readonly spawnLift: 0.03;
        readonly kccOffset: 0.02;
        readonly autostepHeight: 0.4;
        readonly autostepMinWidth: 0.15;
        /**
         * Stepping up (PlatformerCharacter.riseAhead): a riser found by a ray `low` m above the
         * feet, within `ahead` m of where this step's move takes the capsule; its top probed
         * `onto` m past the edge must be flat (normal y ≥ `flat`) and at least `min` m up.
         */
        readonly stepAssist: {
            readonly low: 0.04;
            readonly ahead: 0.08;
            readonly onto: 0.06;
            readonly flat: 0.9;
            readonly min: 0.03;
        };
        readonly snapToGround: 0.35;
        readonly maxSlopeClimbDeg: 46;
        readonly minSlopeSlideDeg: 40;
        /**
         * Standing in a force field's sideways push (wind, a current: physics.fields), the feet drift
         * at acceleration × this (m/s per m/s²): a 20 m/s² gale moves a standing hero at 1.6 m/s,
         * a running one fights it. In the air the full acceleration applies (momentum).
         */
        readonly windGrip: 0.08;
    };
    /** Ray probes around the capsule (heights above the feet, lengths). */
    readonly probes: {
        /** Wall / climb / wall-kick rays start this high above the feet. */
        readonly chest: 1;
        /** Block rays (push / grab) start at knee height. */
        readonly knee: 0.45;
        /** Ground rays start this high above the feet and reach `groundDown` below that. */
        readonly groundUp: 0.3;
        readonly groundDown: 0.8;
        /** Grounded with ground this close under the middle of the feet: supported (no gravity). */
        readonly supportDown: 0.12;
        /** "Ground ahead" rays (teeter, braking) reach this far down. */
        readonly aheadDown: 0.9;
        /** A surface whose normal has |y| below this is a wall; above `floorY` it's a floor. */
        readonly wallY: 0.3;
        readonly floorY: 0.7;
        /** Room to stand: rays this far around the spot (and the stance check's 0.95 r ring). */
        readonly standSpread: 0.25;
        readonly standRing: 0.95;
        readonly standStart: 0.25;
        readonly standMargin: 0.02;
        /** Pull-up / climb top-out: stand this far in from the wall, this high above the top. */
        readonly standIn: 0.25;
        readonly topLift: 0.05;
        readonly pullTopLift: 0.02;
        /** Hang this far out from the wall. */
        readonly hangGap: 0.04;
        /** Ledge probes: past the wall face, and just outside it (overhang check). */
        readonly ledgeIn: 0.15;
        readonly ledgeOut: 0.05;
    };
    /** Presentation: the model turns toward the facing at this rate (1/s; snapFacing states turn at once), default fade-in (s). */
    readonly visual: {
        readonly turnRate: 16;
        readonly fade: 0.12;
        /**
         * With foot placement, going down a step the drawn body sinks with the ground under it
         * and up to `rootAhead` m ahead (averaged over `rootSamples` points), fully once the
         * ground ahead is `rootDrop` m lower, instead of staying up with the capsule on the edge
         * (the feet would float). On the flat and going up it is where the capsule is (up a step
         * early, as the body is). It follows at up to `rootSpeed` m/s (a slope); faster (a step)
         * eases over at `rootRate` (rad/s, critically damped).
         */
        readonly rootAhead: 0.35;
        readonly rootSamples: 8;
        readonly rootDrop: 0.15;
        readonly rootRate: 18;
        readonly rootSpeed: 2;
        /** Lean into turns: roll (deg) per (rad/s of turning × m/s), at most `maxRoll`. */
        readonly leanRoll: 0.55;
        readonly maxRoll: 14;
        /** Lean into acceleration: pitch (deg) per m/s², at most `maxPitch` either way. */
        readonly leanAccel: 0.7;
        readonly maxPitch: 7;
        /** How fast the lean follows (1/s), and how much the acceleration it reads is smoothed (1/s). */
        readonly leanRate: 8;
        readonly accelSmoothing: 10;
        /** Head turns toward where it's going (or `lookAt`): at most this far (deg), at this rate (1/s). */
        readonly maxLook: 50;
        readonly lookRate: 9;
        /** Landing on the move: squash rises over `impactRise` s and settles over `impactFall` s;
         *  a landing at `impactFullVy` m/s (down) squashes fully, a soft one at least `impactMin`. */
        readonly impactRise: 0.05;
        readonly impactFall: 0.22;
        readonly impactFullVy: 16;
        readonly impactMin: 0.35;
    };
    /** The locomotion blend space (animator.ts): its clips, by role. */
    readonly gait: {
        readonly tiptoe: "Tiptoe";
        readonly walk: "Walk";
        readonly run: "Run";
        readonly blend: readonly [2.8, 4.2];
    };
    /** Runtime foot placement (src/engine/animation/footPlacement.ts); anything not set here uses its defaults. */
    readonly feet: {
        readonly maxDrift: 0.14;
        readonly stepTime: 0.15;
        readonly stepLift: 0.06;
    };
    /** Procedural layers (src/engine/animation/poseLayers.ts): landing squash at full impact. */
    readonly layers: {
        readonly impactDrop: 0.12;
        readonly impactSquash: 0.1;
        readonly impactTorso: 14;
    };
    readonly gravity: -32;
    /** Terminal fall speed (m/s, downward). */
    readonly maxFall: -30;
    /**
     * Walking and running (Mario-style: turn toward the stick, speed builds along facing).
     *
     * Weight, Mario 64 style: speed builds over ~0.65 s to the top (it was 0.14 s at a flat
     * 45 m/s²), but the acceleration is highest from a standstill (`accel`, 16 m/s²) and falls
     * to `accelTop` (6 m/s²) near full speed. A small stick input asks for a small speed and
     * gets there in under 0.1 s, so it stays snappy; only the last metres per second take time.
     * Turning is quick at walking pace (`turnRate`, 12 rad/s; ×`slowTurnBoost` from a near
     * standstill) and slower at full speed (`turnRateTop`, 5 rad/s: a running turn is a ~1.3 m
     * radius arc, not a pivot); turning the stick right round at speed still skids. The stick's
     * tilt is squared (`stickCurve`, as Mario 64 does), so a gentle tilt tiptoes slowly.
     */
    readonly ground: {
        readonly runSpeed: 6.5;
        /** Top speed with the walk modifier held. */
        readonly walkSpeed: 2.2;
        /** Acceleration (m/s²) from a standstill, falling linearly to `accelTop` at run speed. */
        readonly accel: 16;
        readonly accelTop: 6;
        /** Slowing down: stick let go (m/s²), or eased back to a slower speed. */
        readonly brake: 20;
        /** States that pass their own acceleration slow down this much quicker than they speed up. */
        readonly brakeFactor: 1.3;
        /** Turn rate (rad/s) standing to walking, falling linearly to `turnRateTop` at run speed. */
        readonly turnRate: 12;
        readonly turnRateTop: 5;
        /** Speed asked for = top speed × tilt^stickCurve. */
        readonly stickCurve: 2;
        /** First person (strafing): velocity follows the stick at this rate (1/s). */
        readonly strafeResponse: 12;
        /** Side-scroller lane lock: close this share of the drift off the lane per step. */
        readonly laneGain: 0.5;
        /** Below `slowTurnSpeed` the character turns `slowTurnBoost` times faster. */
        readonly slowTurnSpeed: 2;
        readonly slowTurnBoost: 1.6;
        /** Walk below this speed, run above (also the speed a skid or landing runs on at). */
        readonly runAbove: 3.2;
        /** Below this speed with the stick let go: standing (idle / teeter). */
        readonly stopSpeed: 0.3;
        /** Stick tilt under which the stick counts as let go. */
        readonly deadzone: 0.1;
        /** Stick tilt under which walking is tiptoeing (keyboard is always full tilt). */
        readonly tiptoeBelow: 0.5;
        /** Grace period for jumping after walking off an edge. */
        readonly coyote: 0.1;
        /**
         * Uphill (Mario 64): running up a slope or stairs, the top speed drops by up to `slow`
         * of run speed, easing in from a grade (rise per metre `ahead` m on, smoothed at `rate`
         * 1/s) of `from` to `to`; the top speed follows at `ease` (share of run speed per
         * second). The 15° ramp (grade 0.27) runs at ~4.8 m/s, the playground stairs (0.35) at
         * ~3.3: one stair per stride instead of two or three. Downhill and gentle slopes keep full speed; ground too steep
         * to stand on slides you back down (checkSlope).
         */
        readonly uphill: {
            readonly from: 0.2;
            readonly to: 0.33;
            readonly slow: 0.6;
            readonly ahead: 0.9;
            readonly rate: 6;
            readonly ease: 3;
        };
        /** Look this far ahead for ground: none = teeter at the edge. */
        readonly teeterLookahead: 0.45;
        /** Idle this long and the character lies down and dozes off. */
        readonly dozeAfter: 16;
        /** After this long idle, glance around (IdleLook) for the first `lookFor` s of every `lookEvery`. */
        readonly lookAfter: 6;
        readonly lookEvery: 10;
        readonly lookFor: 3.4;
    };
    /** Step up / step down animation when the feet change height between steps. */
    readonly steps: {
        readonly minSpeed: 0.3;
        readonly maxSpeed: 4.5;
        readonly rise: 0.08;
        readonly duration: 0.25;
    };
    /** Skids: turning around at speed, or braking when the stick is let go at a run. */
    readonly skid: {
        /** Reversing the stick (more than `turnAngle` from facing) above this speed skids. */
        readonly turnSpeed: 4.5;
        readonly turnAngle: 2.3;
        readonly turnStick: 0.2;
        /** Letting go at a run faster than this brakes (with ground `brakeLookahead` ahead). */
        readonly brakeSpeed: 5;
        readonly brakeLookahead: 0.9;
        readonly turnDecel: 18;
        readonly brakeDecel: 28;
        /** Braking toward a drop: stop hard if the ground ends this close. */
        readonly edgeLookahead: 0.35;
        readonly edgeDecel: 60;
        /** In a skid, the stick this far from facing (rad) still counts as reversing. */
        readonly reverseAngle: 1.6;
        /** Stick (squared tilt) that counts as steering during a skid. */
        readonly stickMinSq: 0.04;
        readonly endSpeed: 0.8;
        /** Turning round after a skid (SkidTurn): the facing turns while the feet are off the floor. */
        readonly spinFrom: 0.09;
        readonly spinTo: 0.2;
        /** ... and runs off (or stands) this long after it starts: just after the landing. */
        readonly turnEnd: 0.27;
    };
    /** Crouch, crouch walk and crouch slide. */
    readonly crouch: {
        readonly walkSpeed: 1.6;
        readonly accel: 30;
        /** Crouching faster than this slides. */
        readonly slideAbove: 4;
        readonly slideDecel: 7;
        readonly slideEnd: 0.6;
        /** Jumping out of a crouch slide faster than this is a long jump (else a backflip). */
        readonly longJumpAbove: 3;
    };
    readonly prone: {
        readonly crawlSpeed: 1;
        readonly accel: 8;
        readonly turnRate: 3;
        readonly downDecel: 20;
    };
    /** Jumps: launch speeds (m/s up) and what they need. */
    readonly jump: {
        readonly vy: {
            readonly Jump: 10.5;
            readonly JumpUp: 11.5;
            readonly DoubleJump: 12.5;
            readonly TripleJump: 15;
            readonly Backflip: 15.5;
            readonly SideFlip: 14;
            readonly LongJump: 7.5;
            readonly WallKick: 12.5;
        };
        /** Triple jump: at least this ground speed. */
        readonly tripleMinSpeed: 5;
        /** Backflip: backwards at this speed. Side flip and wall kick: forwards. */
        readonly backflipBack: 2.2;
        readonly sideFlipForward: 2.5;
        readonly wallKickForward: 5;
        /** Long jump: ground speed × this, at most `longJumpMax`. */
        readonly longJumpBoost: 1.5;
        readonly longJumpMax: 11;
        /** Crouch + jump faster than this is a long jump (else a backflip). */
        readonly longJumpAbove: 4;
        /** First person: a jump carries the stick direction at this share of the run speed. */
        readonly firstPersonCarry: 0.8;
        /** Double / triple jump: jump again within this long of landing, moving faster than `chainSpeed`. */
        readonly chainWindow: 0.22;
        readonly chainSpeed: 1.5;
        readonly tripleSpeed: 3;
        /** Stick tilt that counts as moving (Jump instead of JumpUp, chains). */
        readonly movingStick: 0.2;
        /** Faster than this jumps forward (Jump) even with the stick let go. */
        readonly forwardAbove: 0.5;
        /** A jump pressed this long before touchdown still jumps on landing. */
        readonly buffer: 0.12;
        /** The feet stay planted (foot locking) for this long after a jump starts: the launch step (its clock reads one step). */
        readonly launchFeet: 0.02;
    };
    /**
     * In the air. Mario 64 keeps a jump's momentum: the stick bends the path (`steerRate`,
     * rad/s at full tilt), adds speed only up to `maxSteerSpeed` × run speed (`accel` m/s²),
     * and pulling back against the motion (more than `brakeAngle` rad off it) slows it at
     * `brake` m/s², so a full-speed jump can't be turned round before it lands (it could be
     * reversed outright before). Facing follows the stick at `turnRate`.
     */
    readonly air: {
        readonly steerRate: 2.2;
        readonly maxSteerSpeed: 0.7;
        readonly accel: 7;
        readonly brake: 6;
        readonly brakeAngle: 2;
        /** First person: strafing in the air follows the stick at this rate (1/s). */
        readonly strafeRate: 3;
        readonly turnRate: 3;
        /** Releasing jump while rising multiplies gravity by this (variable jump height). */
        readonly shortHopGravity: 2.2;
        /** Falling faster than this (m/s down) turns a jump into a fall. */
        readonly fallBelow: -6;
        /** A ground pound can start this long into a jump. */
        readonly poundAfter: 0.1;
        /** Ledges and climbable walls are grabbed once rising slower than this. */
        readonly grabBelowVy: 3;
        /** Falling further than this lands hard (face-plant). */
        readonly hardLandDrop: 5.5;
        /** A soft landing with the stick let go keeps this share of the speed. */
        readonly landKeep: 0.3;
        /** Wall kick: a wall within this reach of the capsule, at chest height. */
        readonly wallKickReach: 0.35;
        readonly touchWallReach: 0.3;
    };
    /** Dive (attack in the air while moving) and belly slide. */
    readonly dive: {
        readonly minSpeed: 3;
        readonly minStick: 0.5;
        readonly boost: 3;
        readonly baseSpeed: 5;
        readonly maxSpeed: 10;
        readonly lift: 3;
        readonly slideDecel: 5;
        readonly slideEnd: 0.5;
    };
    readonly groundPound: {
        readonly hang: 0.28;
        readonly speed: -24;
    };
    /** Landing lag, get-ups and other locked states: decelerate, then idle. */
    readonly lock: {
        readonly decel: 30;
        readonly land: 0.16;
        readonly default: 0.3;
    };
    /** Lie down, sit, emote: decelerate in place; a stick tilt (squared) over `wakeStickSq` gets up. */
    readonly rest: {
        readonly decel: 30;
        readonly wakeStickSq: 0.1;
        readonly sleepAfter: 6;
    };
    /** Punch, punch, kick. */
    readonly attack: {
        readonly decel: 20;
        /** Chain the next hit when pressed within this long of the last one ending. */
        readonly chainWindow: 0.35;
        /** A press this far into a hit queues the next one. */
        readonly queueAfter: 0.1;
    };
    /** Running into walls. */
    readonly wall: {
        /** Head-on into a wall faster than this (the part of the velocity into it) bonks. */
        readonly bonkSpeed: 5;
        /** Obstacles reaching this high above the feet are walls; lower ones are steps. */
        readonly checkHeight: 0.45;
        readonly checkReach: 0.15;
        /** cos of the widest angle between velocity and wall normal that is still head-on (~30°). */
        readonly headOnCos: 0.87;
    };
    /** Sliding down a wall: falling while pushing into it. A jump kicks off (wall kick). */
    readonly wallSlide: {
        /** Stick tilt, and how squarely into the wall it must point (cos), to start sliding. */
        readonly minStick: 0.5;
        readonly pushIn: 0.6;
        /** A wall within this reach of the capsule at chest height (to start, and to stay on it). */
        readonly reach: 0.25;
        readonly holdReach: 0.35;
        /** Slide speed (m/s, down) and how fast a quicker fall slows to it (m/s²). */
        readonly speed: 3;
        readonly friction: 40;
        /** Pressing into the wall at this speed keeps it in contact. */
        readonly press: 0.5;
        /** The stick under this (along the wall's inward direction) lets go; pushed off at `pushOff`. */
        readonly letGo: 0.2;
        readonly pushOff: 1.2;
        readonly cooldown: 0.3;
    };
    /** Getting hurt (PlatformerCharacter.hurt): knocked back in an arc, no control, then invulnerable. */
    readonly hurt: {
        /** Knockback speed (m/s, away from the hit) and lift (m/s up) at strength 1. */
        readonly knockback: 4.5;
        readonly lift: 6;
        /** No control for this long (s). */
        readonly stun: 0.4;
        /** Hits are ignored for this long (s). */
        readonly invulnerable: 1.5;
        /** Once down, sliding to a stop at this rate (m/s²). */
        readonly groundDecel: 18;
    };
    /** Ledge grab, hang, shimmy, pull up. */
    readonly ledge: {
        /** Feet this far below the ledge top while hanging. */
        readonly hangDrop: 1.72;
        /** Chest height of the wall probe, and its reach beyond the capsule. */
        readonly chest: 1.25;
        readonly reach: 0.4;
        /** Probe for the top from this high above the feet; a grabbable top is within `minTop..maxTop` of the feet. */
        readonly probe: 2.3;
        readonly topReach: 1.3;
        readonly minTop: 1.3;
        readonly maxTop: 2.25;
        /** Hang this long before a pull-up or drop is accepted. */
        readonly settle: 0.2;
        /** Stick toward / away from the wall needed to pull up / drop. */
        readonly pushIn: 0.5;
        /** Dropping off: pushed away at this speed, no re-grab for `cooldown` s. */
        readonly dropPush: 1.2;
        readonly cooldown: 0.4;
        readonly shimmySpeed: 1.5;
        readonly shimmyLookahead: 0.3;
        readonly shimmyStick: 0.2;
        /** A ledge ahead must be within this height of the current one to shimmy onto it. */
        readonly shimmyStep: 0.2;
        /** Pull-up path: rise over the first `rise` of the clip, move in over `inFrom..inTo`. */
        readonly pullRise: 0.55;
        readonly pullInFrom: 0.4;
        readonly pullInTo: 0.85;
    };
    /** Climbing walls tagged 'climbable'. */
    readonly climb: {
        readonly upSpeed: 2.2;
        readonly sideSpeed: 1.6;
        /** Start climbing with the stick at least this much toward the wall. */
        readonly startStick: 0.5;
        readonly reach: 0.3;
        readonly holdReach: 0.5;
        /** Stay glued: close this share of the gap to the wall per step. */
        readonly glue: 0.5;
        /** Top-out: look for a top this far above the chest. */
        readonly topProbe: 1.3;
        readonly topReach: 0.45;
        readonly topDown: 2.2;
        /** Climbing down onto the ground with the stick this far back steps off. */
        readonly downStick: 0.1;
        readonly wallKickCooldown: 0.3;
        readonly dropCooldown: 0.4;
        readonly dropPush: 1;
        /** Climbing faster than this (up or sideways) plays Climb, else ClimbIdle. */
        readonly moving: 0.2;
    };
    /** Push, grab and pull blocks tagged 'pushable' / 'grabbable'. */
    readonly block: {
        readonly pushSpeed: 1.5;
        readonly pullSpeed: 1.3;
        readonly pushReach: 0.12;
        readonly grabReach: 0.4;
        readonly holdReach: 0.5;
        readonly pushHoldReach: 0.2;
        /** Pushing needs the stick this far over and pointing this much along facing (cos). */
        readonly pushStick: 0.3;
        readonly pushAlign: 0.75;
        /** Stick along facing that pushes / pulls. */
        readonly moveStick: 0.3;
        /** Keep this gap to the block, closing `gapGain` of the difference per step. */
        readonly gap: 0.03;
        readonly gapGain: 0.3;
        /** Pushing for this long (s) with the block moving slower than `stuckSpeed`: it's stuck (lean on it). */
        readonly stuckAfter: 0.25;
        readonly stuckSpeed: 0.2;
    };
    /** Slope sliding on steep or 'slippery' ground. */
    readonly slope: {
        readonly slideAboveDeg: 38;
        readonly slipperyAboveDeg: 12;
        readonly accel: 22;
        readonly maxSpeed: 9;
        readonly turnRate: 8;
        readonly steer: 4;
        readonly flatDecel: 14;
        /** Ground flatter than this (horizontal part of its downhill vector) doesn't pull. */
        readonly minSteep: 0.05;
        readonly stopBelowDeg: 10;
        readonly stopSpeed: 1.2;
        readonly offEndSpeed: 1;
        readonly vy: -2;
    };
};
