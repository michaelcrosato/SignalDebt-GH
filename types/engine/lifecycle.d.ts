import type { Object3D, Scene } from 'three/webgpu';
/**
 * Level lifecycle helpers. Objects marked `userData.engineOwned` (lights, the particle
 * group) survive a level unload; resources marked `userData.shared` (cached toon
 * materials, GLB geometry shared by every clone) are never disposed.
 */
/**
 * Free the GPU resources of `root` and its children: geometry, materials, the textures
 * they reference (as properties such as `map`, or inside TSL node graphs such as
 * `colorNode = texture(t)`), and skinned meshes' bone textures.
 */
export declare function disposeObject(root: Object3D): void;
/** Remove (and dispose) every scene child that is not engine-owned. Returns how many went. */
export declare function clearScene(scene: Scene): number;
/** Number of objects in the tree under `root` (inclusive): a leak probe for tests. */
export declare function countObjects(root: Object3D): number;
