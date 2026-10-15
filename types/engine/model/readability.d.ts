import type { CompiledPart } from './compile';
import type { ExpandedModel } from './expand';
/** A part's own extents, scaled by its matrix and sorted (so turning a rod doesn't make it thick). */
export declare function partExtents(p: CompiledPart): number[];
/** Lightness (OKLab L) two touching large masses need between them to read apart. */
export declare const MIN_LIGHTNESS_STEP = 0.08;
/** One colour may cover at most this share of the model's pixels at game scale… */
export declare const MAX_ONE_COLOUR_SHARE = 0.4;
/** …when it joins at least this many large parts into one block. */
export declare const BLOCK_PARTS = 4;
/** Glow draws flat (no shading): it may cover at most this share of the model's pixels… */
export declare const MAX_GLOW_SHARE = 0.15;
/**
 * Hidden parts, z-fighting faces and touching masses too close in lightness. `texColour` gives a
 * textured part's mean colour (else it counts as its slot's).
 */
export declare function readabilityWarnings(parts: readonly CompiledPart[], palette: ExpandedModel['palette'], floats?: boolean, texColour?: (id: string) => number): string[];
