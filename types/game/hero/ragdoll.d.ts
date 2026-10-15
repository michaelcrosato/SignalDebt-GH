import type { RagdollPart } from '../../engine/physics/ragdoll';
/**
 * The hero as a ragdoll (the joints of `hero.glb`, see rig.ts): pelvis, torso and head, upper
 * arms and legs on ball joints held in cones, elbows and knees as hinges bending the way the
 * clips bend them (Forearm −X, Shin +X). Hands and feet ride on their forearm and shin.
 */
export declare const HERO_RAGDOLL: readonly RagdollPart[];
