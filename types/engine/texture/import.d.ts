import { type ColourMap } from '../model/import/colours';
import type { PackSheet } from '../model/packs/sources';
import type { Provenance } from '../model/types';
import { type PaletteColor } from '../palette';
import type { RgbaImage } from '../png';
import type { TexSlot, TextureDef } from './types';
/** What `source.tool` records. */
export declare const SHEET_IMPORT_TOOL = "npm run tex -- import";
/** Alpha (0–255) under which a pixel is transparent, by default. */
export declare const ALPHA_THRESHOLD = 128;
/** Legend characters, in the order they are handed out: every printable ASCII but `.`, space, quotes and backslash. */
export declare const LEGEND_CHARS = "abcdefghijklmnopqrstuvwxyz0123456789#$%&*+-=@^~!?<>/|:;_()[]{},\"ABCDEFGHIJKLMNOPQRSTUVWXYZ";
export interface SheetImportOptions {
    /** The ids' prefix (`IMPORT_ID`: `tiles`, `kit/tiles`): cells are `<as>-<index>` (or `<as>-<name>`), a strip of frames is `<as>`. */
    readonly as: string;
    /** A cell's size in pixels, width × height; the sheet must be whole cells. */
    readonly grid: readonly [w: number, h: number];
    /** What the caller knows of the source (url, licence, pack, file, author, sha256); the import adds `tool` and `colours`. */
    readonly source: Omit<Provenance, 'tool' | 'colours' | 'fidelity'>;
    /** The cells are surfaces that tile: each def gets `tile: true` (the check measures the seam). */
    readonly tile?: boolean;
    /** One def of frames, left to right, from the cells in reading order (an animation strip). */
    readonly frames?: boolean;
    /** Cells to import by index, in reading order (row by row from the top; default every cell). */
    readonly cells?: readonly number[];
    /** Names by cell index, in reading order: cell `i` becomes `<as>-<names[i]>` ('' keeps the index). */
    readonly names?: readonly string[];
    /** Alpha (0–255) under which a pixel is transparent (default `ALPHA_THRESHOLD`). */
    readonly alpha?: number;
    /** Slots re-bound after mapping, for every def at once: `{ c3: 'sand' }`. */
    readonly palette?: Readonly<Record<TexSlot, PaletteColor>>;
    readonly tags?: readonly string[];
}
/** A distinct opaque source colour of the imported cells and where it went. */
export interface SheetColour {
    /** Source sRGB, 0xrrggbb. */
    readonly hex: number;
    /** Its legend character in every def (the same in any import of the sheet). */
    readonly char: string;
    readonly slot: TexSlot;
    /** The PALETTE entry it bakes as (after any re-binding). */
    readonly colour: PaletteColor;
    /** Opaque pixels of it in the imported cells. */
    readonly pixels: number;
}
/** Two or more distinct source colours that bake as one PALETTE entry. */
export interface SheetMerge {
    readonly colour: PaletteColor;
    /** Biggest first. They share a slot when the mapper clustered them, else their slots share the entry. */
    readonly sources: readonly SheetColour[];
}
export interface SheetCell {
    /** Index in reading order: row × columns + column. */
    readonly index: number;
    readonly column: number;
    readonly row: number;
    /** Opaque pixels in it. */
    readonly opaque: number;
    /** Picked (`cells`, default every cell). */
    readonly picked: boolean;
    /** The def it went into, or null: not picked, or picked and skipped as fully transparent. */
    readonly id: string | null;
}
export interface SheetImport {
    readonly defs: readonly TextureDef[];
    /** Every distinct opaque source colour of the imported cells, biggest first. */
    readonly colours: readonly SheetColour[];
    /** Every PALETTE entry two or more of those colours bake as, biggest first. */
    readonly merges: readonly SheetMerge[];
    /** The mapper's result (slots and their entries, before `palette` re-binds them). */
    readonly map: ColourMap;
    /** Every cell of the grid, in reading order. */
    readonly cells: readonly SheetCell[];
    readonly columns: number;
    readonly rows: number;
}
/** Slice a pixel-art sheet into TextureDefs (see the file comment). Throws `ImportError` saying what to fix. */
export declare function importSheet(img: RgbaImage, o: SheetImportOptions): SheetImport;
/** What `importPackSheet` needs beside the image: the pack, its sheet entry, the provenance. */
export interface PackSheetOptions {
    readonly pack: string;
    readonly sheet: PackSheet;
    readonly source: SheetImportOptions['source'];
    /** The pack's name, for each texture's `about`. */
    readonly title?: string;
    /** Tags every texture of the pack gets. */
    readonly tags?: readonly string[];
}
/**
 * An approved pack's sheet (its `PACK_SOURCES` entry's `sheets`, `npm run tex -- import-pack`)
 * as textures: every cell in one pass (one colour map, the sheet's `palette` re-bindings, ids
 * checked once, reading order), each `<pack>/<name>` with its name in words as `about` and
 * library tags (`describeImport`), and `tile: true` (tag `surface`) on the cells `tiles` names.
 */
export declare function importPackSheet(img: RgbaImage, o: PackSheetOptions): {
    defs: TextureDef[];
    sheet: SheetImport;
};
