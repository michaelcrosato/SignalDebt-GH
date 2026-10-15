import { type ClipDef, type FeetGoals, type Pose } from '../../../engine/animation';
/** Combat stance: knees soft, left foot forward, sword up in front, off hand guarding. */
export declare const COMBAT_FEET: FeetGoals;
export declare const COMBAT_BODY: Pose;
/**
 * When each clip lands its hit (frames at 30 fps), when it may be cancelled into a dodge,
 * for leaps when the feet touch down, and for bow shots when the string hand takes the string
 * (`draw`, from..to: the string follows the hand from then until it is let go at `hit`). The
 * hero controller releases the skill at `hit` and scales the clip's rate so the whole clip
 * takes the skill's cast time.
 */
export declare const COMBAT_TIMING: Readonly<Record<string, {
    hit: number;
    cancel: number;
    land?: number;
    draw?: readonly [number, number];
}>>;
/**
 * How far the bow string is in the drawing hand at `frame` of `clip` (0..1): eased in over the
 * clip's `draw` frames, held, let go at its hit frame. 0 for clips that don't draw a bow.
 */
export declare function stringEngage(clip: string, frame: number): number;
/**
 * First swing: coil right (hips, then shoulders, the blade cocked back past the ear, the off
 * hand reaching ahead to aim), then the hips fire first, the shoulders and the arm follow and
 * the blade cuts flat across at frame 5 with the weight driven onto the front foot and the
 * off arm flung back; it carries on past and settles.
 */
export declare const Slash1: ClipDef;
/**
 * Second swing: from the first's follow-through, the blade loops over and the hips wind left,
 * then a backhand rips out to the right at frame 5, the off arm crossing the other way.
 */
export declare const Slash2: ClipDef;
/**
 * Finisher: a big overhead chop. Sink and rise up tall on the toes with both hands high and
 * the blade behind the head (anticipation), then drop the whole body into it: the blade
 * drives down in front at frame 8 with a squash, the hips sunk and pushed forward, and holds
 * the hit before rising back to guard.
 */
export declare const Slash3: ClipDef;
/**
 * Ground slam: gather low, heave both arms overhead rising tall onto the toes (a held beat of
 * anticipation), then the whole body drops into the smash: the blade hits the floor ahead at
 * frame 13 with a hard squash, holds, and the body pushes back up to guard.
 */
export declare const Slam: ClipDef;
/**
 * Leap slam: sink deep, arms swung back (anticipation), spring off stretched tall with the
 * sword thrown overhead (launch at 7), tuck in the air, reach down and land smashing at 19.6
 * (the land frame: the physics arc ends there), then rise.
 */
export declare const LeapSlam: ClipDef;
/**
 * Whirlwind: the spinning pose, looped while channelled. The whole model turns (the hero
 * controller spins it, `HERO_TUNING.spinTurns`, rightwards), so the clip holds the pose and
 * only bobs: feet skim clear of the floor, the blade stays level at arm's length.
 */
export declare const Spin: ClipDef;
/** One-handed cast: draw the off hand back, thrust it out at the target. */
export declare const Cast: ClipDef;
/** Two-handed cast: gather low, then throw both arms up and out. */
export declare const CastBig: ClipDef;
/**
 * Casting with a staff or a wand in hand: the weapon does the pointing. Wind the weapon back
 * high past the ear, the off arm reaching ahead to aim, then drive the right shoulder round
 * and thrust the weapon straight at the target (wrist curled back: it extends the arm),
 * the off arm flung back to balance. Same timing as Cast.
 */
export declare const CastWeapon: ClipDef;
/**
 * Big cast with a staff or wand: gather it low across the body, then sweep it up overhead in
 * both hands, pointing at the sky, chest open (the release at 12); hold, settle.
 */
export declare const CastBigWeapon: ClipDef;
/** Full bow shot: raise and nock, push-pull to the anchor, release (the hand flies back), recover. */
export declare const BowDraw: ClipDef;
/** Quick follow-up shot: the same draw, nocked on the way up, released at 6. */
export declare const BowRelease: ClipDef;
export declare const ROLL_TUCK: Pose;
export declare const Roll: ClipDef;
/**
 * Shield charge / dash: drop the shoulder and explode off the back foot (the dash starts at
 * frame 2), drive forward in long bounds (legs scissoring), then brake: the feet come down
 * ahead as the dash's root motion slows (DASH_PROFILE), the body leaning back, and recover.
 */
export declare const Charge: ClipDef;
/**
 * War cry: hunch and draw breath, fists pulled in across the chest (anticipation), then burst
 * open at frame 9: chest out, head thrust up, arms flung wide and down with the fists
 * clenched, a stretch; hold it shaking, then settle back to guard.
 */
export declare const Shout: ClipDef;
/**
 * Hit react: snapped back from the blow at once (head whipped back, arms flung up and out),
 * the knees give, then the body folds forward past guard and recovers.
 */
export declare const HitReact: ClipDef;
export declare const Death: ClipDef;
/** Victory: sword thrust to the sky, off hand on the hip. */
export declare const Triumph: ClipDef;
/** Every combat clip, in the order the tools show them. */
export declare const COMBAT_CLIPS: readonly ClipDef[];
