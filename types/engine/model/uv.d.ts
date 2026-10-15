import type { CompiledPart } from './compile';
/**
 * Texels per metre for `tex` parts when the def doesn't set `texel`: the densest Gate B passed for
 * surfaces the camera zooms over (docs/ASSETS.md, *Texel density*). A model that moves may set
 * up to `MOVING_TEXEL`.
 */
export declare const DEFAULT_TEXEL = 8;
/** The densest a moving model passed Gate B at (its sliding crate); denser wasn't measured. */
export declare const MOVING_TEXEL = 20;
/**
 * UVs (2 per vertex, in the part's own vertex order) at `texel` texels per metre over a `w × h`
 * texture.
 */
export declare function partUVs(p: CompiledPart, texel: number, [w, h]: readonly [number, number]): Float32Array;
