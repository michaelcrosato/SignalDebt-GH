export * from './engine';
export * as THREE from 'three/webgpu';
export * as TSL from 'three/tsl';
export { HERO_CLIPS, HERO_MODEL, HERO_RAGDOLL, HERO_RIG } from './game/hero';
/** Models every bundle carries: `ctx.loadModel('assets/hero.glb')` works with no files next to it. */
export declare const BUILTIN_MODELS: readonly string[];
