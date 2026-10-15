/**
 * Palette mapping for imports (docs/plans/asset-system.md §7.3): source colours → a few palette
 * slots, each bound to a PALETTE entry. It works on a whole model (or a whole pack), never one
 * colour at a time, because a nearest match per colour turns pale wood into `white`:
 *
 * 1. **Cluster** the per-face colours in OKLab into 2–6 clusters, hue weighted up and lightness
 *    down (baked shading varies lightness most): near duplicates and the steps of a baked
 *    gradient join; colours further apart than the palette's closest pair stay apart.
 * 2. **Assign** clusters to entries, biggest area first, at the cost
 *    `ΔL² + (0.7·ΔC)² + (2.5·ΔH)²`, where ΔH is the hue chord `2·√(C₁C₂)·sin(Δh/2)` (it shrinks
 *    to nothing for greys, whose hue means nothing), plus a penalty when a grey and a colour swap
 *    and another for an entry a bigger cluster already took. Then move clusters one at a time
 *    while that lowers the total, so a big pale wood steps aside to `sand` when that lets a small
 *    pink cushion keep `orange` to itself.
 * 3. **Keep lightness order** within a hue family: a light and a dark wood stay light and dark.
 *
 * Slots take the material's name when it means something (`wood`, `metalDark`), else `c1`,
 * `c2`… by area. Deterministic: the same colours give the same slots, in any order.
 */
import { type PaletteColor } from '../../palette';
import type { Slot } from '../types';
/** One source colour and how much of the model it covers. */
export interface ColourSample {
    /** sRGB, 0xrrggbb. */
    readonly hex: number;
    /** Area it covers (m²); weights the cluster centres and the order of assignment. */
    readonly area: number;
    /** The source material's name, for the slot's name. */
    readonly name?: string;
}
export interface ColourSlot {
    readonly slot: Slot;
    readonly colour: PaletteColor;
    /** The cluster's centre (area-weighted in OKLab), sRGB: `source.colours` keeps it. */
    readonly source: number;
    readonly area: number;
    /** The source colours that joined it (sRGB). */
    readonly members: readonly number[];
}
/** The mapping, as plain data. */
export interface ColourMap {
    /** Biggest area first. */
    readonly slots: readonly ColourSlot[];
    /** Source colour ('#rrggbb') → slot. */
    readonly of: Readonly<Record<string, Slot>>;
}
export interface MapOptions {
    /** Fewest clusters while there are that many distinct colours (default 2). */
    readonly min?: number;
    /** Most clusters (default 6; a pack shares one map, so it may take the palette's 16). */
    readonly max?: number;
}
/** Clusters closer than this join (below the palette's closest pair, navy and night at 0.051). */
export declare const MERGE_DISTANCE = 0.035;
/** Cost of mapping a grey to a colour or a colour to a grey. */
export declare const SWAP_PENALTY = 0.08;
/** Cost of taking an entry a bigger cluster already took (the two would read as one colour). */
export declare const REUSE_PENALTY = 0.05;
export declare const hexString: (hex: number) => string;
/** A material name as a slot name when it means something ('metal_dark' → 'metalDark'), else null. */
export declare function slotName(name: string | undefined): string | null;
/** Map source colours to palette slots (see the file comment). */
export declare function mapColours(samples: readonly ColourSample[], o?: MapOptions): ColourMap;
/**
 * The map with some slots bound to other PALETTE entries: an agent's per-pack choice after
 * looking at the swatches (a pack's mint leaves read as `green` in a game, not `cyan`). A slot
 * the map doesn't have, or a name that isn't a PALETTE entry, throws: a typo never passes quietly.
 */
export declare function rebindColours(map: ColourMap, palette: Readonly<Record<Slot, PaletteColor>>): ColourMap;
