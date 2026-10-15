import { type BakedTexture } from './bake';
import type { TextureDef } from './types';
/** Share of opaque texels with no same-coloured 4-neighbour above which a texture reads as noise. */
export declare const MAX_ISOLATED = 0.15;
/** How much further (0..1 of the largest colour distance) a tiling texture's wrap may jump than any line inside it. */
export declare const MAX_SEAM_EXCESS = 0.08;
export interface TextureMetrics {
    readonly width: number;
    readonly height: number;
    readonly colours: number;
    readonly transparent: number;
    /** Opaque texels with no 4-neighbour of their colour, as a share of the opaque ones. */
    readonly isolated: number;
    /** Tiling textures with drawn layers: the mean colour jump across the wrap line, and across the line inside that jumps most (0..1). */
    readonly seam: {
        readonly wrap: number;
        readonly inside: number;
    } | null;
}
export interface TextureCheck {
    readonly id: string;
    readonly problems: readonly string[];
    readonly warnings: readonly string[];
    readonly metrics: TextureMetrics | null;
}
/** Isolated texels, and (when tiling) how often neighbours differ across the wrap vs inside. */
export declare function textureMetrics(b: BakedTexture, tile: boolean): TextureMetrics;
export declare function validateTexture(def: TextureDef): TextureCheck;
