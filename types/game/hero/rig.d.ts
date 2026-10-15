import type { RigSpec } from '../../engine/animation/types';
/**
 * The hero rig (public/assets/hero.glb, built by scripts/assets/hero.mjs).
 *
 * The character faces +Z. L/R are the character's own sides (its right = -X).
 * Rotations are Euler XYZ degrees relative to rest; Z is applied first, then Y, then X,
 * all about the parent's axes. Verified against contact sheets (`npm run anim -- sheet`).
 *
 *   Pelvis   +X tip forward (90 = face down, -90 = on its back, 360 = front flip)
 *            +Y turn to its left, +Z roll to its RIGHT. p = [x, y, z] offset (m), s = squash
 *   Torso    +X bend forward, +Y twist left, +Z lean right
 *   Head     +X look down, +Y look left, +Z tilt right
 *   Arm*     X swings: -90 = straight ahead, -180 = overhead, +40 = back
 *            Z spreads (applied first): ArmR -Z / ArmL +Z = out to the side, 90 = T-pose.
 *            e.g. ArmR [-90, 0, -40] points ahead and out to its right.
 *   Forearm* -X bends the elbow (forearm comes forward/up)
 *   Hand*    -X curl wrist forward
 *   Leg*     -X swing forward (kick/step), +X swing back; LegR -Z / LegL +Z = out to the side
 *   Shin*    +X bends the knee (foot goes back)
 *   Foot*    +X points the toes down, -X pulls the toes up (heel strike)
 *
 * Standing: hip 0.62, shoulders 1.12, top of head ~1.74. Leg = thigh 0.30 + shin 0.22 +
 * ankle 0.10. Arm = 0.25 + 0.16 + hand. Prefer `placeFeet` / `gaitClip` over posing legs
 * by hand: they keep the soles on the floor.
 */
export declare const HERO_RIG: RigSpec;
