import { Mesh, type Object3D } from 'three/webgpu';
export interface MergeOptions {
    /** Override castShadow on every merged mesh (default: keep each source mesh's flag). */
    castShadow?: boolean;
    /** Override receiveShadow on every merged mesh (default: keep each source mesh's flag). */
    receiveShadow?: boolean;
}
/**
 * Merge static meshes into one mesh per (material, shadow flags): N blocks with M
 * materials become ≤ M draw calls instead of N × groups (a BoxGeometry with 6 material
 * groups is 6 draws, plus 6 more in the shadow pass).
 *
 * World transforms are baked into the vertices, multi-material geometry is split by its
 * groups, and `position` + `normal` are kept, plus `uv` under a material with a `map` and
 * `color` under one with `vertexColors` (what toon materials read). The
 * sources are left untouched (don't add them to the scene). Physics is separate: keep
 * one collider per block. Merged meshes are culled as a whole, so merge things that are
 * on screen together (a level, a room), and keep anything that moves separate.
 */
export declare function mergeStaticMeshes(sources: readonly Object3D[], options?: MergeOptions): Mesh[];
