/**
 * Things that sway in the wind: a copy of a mesh's material whose vertex shader leans
 * everything above a height along the wind, more the higher it is (squared: a trunk stays
 * put, the crown moves), with a slow sway, a faster flutter and its own phase. One shared
 * `WindUniforms` drives every swaying thing in a level, so a gust moves them all together.
 *
 *   const wind = new WindUniforms();
 *   swayObject(treeModel, wind, { height: 3, amount: 0.25, phase: 1.7 });
 *   // per frame: wind.update(time, [2, 0.5])
 */
import type { Material, Object3D } from 'three/webgpu';
import { Vector2 } from 'three/webgpu';
export declare class WindUniforms {
    readonly time: any;
    readonly wind: any;
    /** Per frame (game time); `wind` along x and z (its length is the strength). */
    update(time: number, wind: Vector2 | readonly [number, number]): void;
}
export interface SwayOptions {
    /** Height (in the mesh's own units) of its top: the lean is 0 at `base` and full there. */
    height: number;
    /** Where the lean starts (the trunk below stays still). Default 0. */
    base?: number;
    /** Lean at the top per unit of wind. Default 0.15. */
    amount?: number;
    /** Its own phase (radians): neighbours don't move in lockstep. */
    phase?: number;
}
/**
 * A room-owned copy of `material` that sways. For ordinary meshes: heights are in the mesh's
 * own space (`positionGeometry`), measured from its origin (an instanced mesh would need its
 * own per-instance base).
 */
export declare function swayMaterial(material: Material, wind: WindUniforms, o: SwayOptions): Material;
/** Make every mesh under `root` sway (its materials replaced by swaying copies). */
export declare function swayObject(root: Object3D, wind: WindUniforms, o: SwayOptions): void;
