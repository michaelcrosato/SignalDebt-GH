/**
 * Texture sheets (`npm run tex -- sheet`): the texture at 1× and ×4, a 3×3 tiling when it tiles,
 * on a cube and a cylinder at game scale (the level and town zooms, at the default texel
 * density), its frames one by one, its palette and its check. Transparent texels show over a dim
 * checker. Software-drawn, like the model sheets; the Asset Lab is the truth. The import sheet
 * (`npm run tex -- import`) puts a source sheet and its imported defs side by side.
 */
import { type SheetImage } from '../animation/raster';
import { type PaletteColor } from '../palette';
import type { RgbaImage } from '../png';
import { type BakedTexture, type BakeOptions } from './bake';
import { TextureCatalog } from './catalog';
import type { SheetImport } from './import';
import type { TextureDef } from './types';
import { type TextureCheck } from './validate';
/** Texels as an image, transparent ones over the dim checker; `x0`/`w` crop a frame. */
export declare function texelImage(b: BakedTexture, x0?: number, w?: number): SheetImage;
/** The image repeated `nx × ny` times. */
export declare function tiled(img: SheetImage, nx: number, ny: number): SheetImage;
/** A 1 m cube and a cylinder wearing the texture, through Riftlight's camera at the level and town zooms. */
export declare function onShapes(def: TextureDef, texel?: number): SheetImage;
/** The sheet; `palette` is the bake's re-binding, so the swatches show the colours drawn. */
export declare function renderTextureSheet(def: TextureDef, b: BakedTexture, check: TextureCheck, palette?: Readonly<Record<string, PaletteColor | number>>): SheetImage;
/**
 * A texture's sheet (`image`: width, height and RGBA `data`) and the check it shows, as
 * `validateTexture` gives it: `id`, `problems`, `warnings` and `metrics`.
 */
export interface TextureSheet extends TextureCheck {
    readonly image: SheetImage;
}
/** `textureSheet`'s options. */
export interface TextureSheetOptions {
    /** Re-bind slots to other palette names or hex numbers, as a bake does. */
    readonly palette?: BakeOptions['palette'];
    /** Where a string id resolves (default `TEXTURE_LIBRARY`). */
    readonly catalog?: TextureCatalog;
}
/**
 * The texture sheet `npm run tex -- sheet` draws, for a library id or any def (a game's own): the
 * texels at 1× and enlarged, a 3×3 tiling and a cube and cylinder at game scale when it tiles,
 * its frames, palette and `validateTexture`'s problems and warnings. Software-drawn, so it runs in
 * Node and in a browser (the kit's `check.mjs --sheets`). `palette` re-binds slots as a bake does.
 */
export declare function textureSheet(idOrDef: string | TextureDef, opts?: TextureSheetOptions): TextureSheet;
export interface ImportSheetOptions {
    readonly title: string;
    readonly subtitle?: string;
    /** The cell size the sheet was sliced on. */
    readonly grid: readonly [w: number, h: number];
    /** Each def's check, for the summary. */
    readonly checks?: readonly TextureCheck[];
}
/**
 * The import sheet: the source (alpha over the dim checker) and the imported defs, baked, side
 * by side on the same grid (cells not imported dark); every source colour with its legend
 * character, slot and PALETTE entry; the merges (source colours that bake as one entry); the
 * checks.
 */
export declare function renderImportSheet(img: RgbaImage, r: SheetImport, o: ImportSheetOptions): SheetImage;
