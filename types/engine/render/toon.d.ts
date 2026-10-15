import { type ColorRepresentation, DataTexture, MeshBasicNodeMaterial, MeshToonNodeMaterial, type Object3D, type Texture, Vector2 } from 'three/webgpu';
/**
 * PS1-style vertex snapping ("wobble"): clip-space vertices snap to the internal pixel
 * grid. Off by default; the `ps1` filter switches it on (PixelRenderer drives these).
 */
export declare const vertexSnap: {
    enabled: import("three/webgpu").UniformNode<"float", number>;
    /** Internal resolution (art pixels). */
    resolution: import("three/webgpu").UniformNode<"vec2", Vector2>;
};
/**
 * The toon materials' vertex stage (clip position, snapped to the art grid while the `ps1`
 * filter is on). Exported so procedural toon materials (`colorNode` from attributes) keep
 * the same wobble as every other toon material.
 */
export declare function snappedClipPosition(): import("three/webgpu").VarNode<"vec4", import("three/webgpu").JoinNode<"vec4">>;
/**
 * 3-band toon ramp (shadow / mid / lit). Sampled with NearestFilter so light falls
 * off in hard bands, the way hand-shaded sprites look. Values are 0..255 intensity.
 */
export declare const TOON_BANDS: readonly [96, 176, 255];
export declare function toonGradient(): DataTexture;
export interface ToonMaterialOptions {
    /** Base color texture. Switched to nearest filtering (crisp texels, no mip blur). */
    map?: Texture | null;
    /** Multiply by the geometry's `color` attribute (vertex colors). */
    vertexColors?: boolean;
    /**
     * A hard-banded rim light in this colour (hex) on grazing, upward-facing surfaces: a
     * silhouette that reads against dark floors (monsters in dark levels). Added to the
     * emissive, so `material.emissive` (hit flashes) still works on top. Same shader for
     * every rim colour (the colour is a uniform).
     */
    rim?: number;
    /**
     * Pixel dissolve: the material reads its own `dissolve` property (0 = solid, 1 = gone)
     * and discards a per-art-pixel noise pattern below it, with a 1-pixel glowing front in
     * the rim colour (or white). Set it on per-body clones (`material.dissolve = 0.4`), not on
     * the shared cached material.
     */
    dissolve?: boolean;
}
/** A toon material made with `dissolve: true` has this property. */
export type DissolvableMaterial = MeshToonNodeMaterial & {
    dissolve: number;
};
/**
 * Make a texture pixel-art friendly: nearest-neighbor sampling, no mipmaps. Returns it.
 */
export declare function pixelTexture<T extends Texture>(texture: T): T;
/**
 * Shared 3-band toon node material for a palette color, optionally textured and/or
 * vertex-colored (color × map × vertex color), cached per combination. Untextured ones
 * (and ones whose texture is itself shared, e.g. from a cached GLB) are marked
 * `userData.shared`, so level unloads keep them; a material with a level's own texture is
 * disposed with the level, and disposing it drops it from the cache.
 */
export declare function toonMaterial(color: ColorRepresentation, options?: ToonMaterialOptions): MeshToonNodeMaterial;
/**
 * Unlit, full-bright material for a colour (flames, eyes, screens, crystal cores), shared and
 * cached per colour like `toonMaterial` (`userData.shared`; disposing it drops it from the
 * cache). Its vertices snap with the toon materials' under the `ps1` filter, so a glowing part
 * stays on its model.
 */
export declare function glowMaterial(color: ColorRepresentation): MeshBasicNodeMaterial;
export interface ToonifyOptions {
    castShadow?: boolean;
    receiveShadow?: boolean;
}
/**
 * Replace every mesh material under `root` with the shared toon material of the same base
 * color, keeping its base color texture (`map`, nearest-filtered) and vertex colors. Makes
 * any GLB (or hand-built mesh) match the engine's look without per-asset work.
 */
export declare function toonify(root: Object3D, options?: ToonifyOptions): Object3D;
