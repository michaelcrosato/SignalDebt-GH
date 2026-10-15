/**
 * Baked textures as the engine uses them: `textureMap` for a model's toon material (nearest
 * filtered, wrapped when the texture tiles, cached and shared), `spriteSheet` for `SpriteBatch`
 * (no DOM canvas), and `hudSprite` rows for `hud.sprite`. A texture with problems throws a
 * `TextureError` naming them all.
 */
import { DataTexture } from 'three/webgpu';
import type { PaletteColor } from '../palette';
import type { SpriteSheet } from '../render/sprites';
import { type BakeOptions } from './bake';
import type { TextureCatalog } from './catalog';
import type { TextureDef } from './types';
export declare class TextureError extends Error {
    readonly id: string;
    readonly problems: readonly string[];
    constructor(id: string, problems: readonly string[]);
}
export interface TextureOptions extends BakeOptions {
    /** Where an id resolves (default `TEXTURE_LIBRARY`). */
    readonly catalog?: TextureCatalog;
}
/** Set by the library module, so a bare id resolves without an import cycle. */
export declare function setDefaultTextureCatalog(c: TextureCatalog): void;
/**
 * The texture as a map for `toonMaterial(0xffffff, { map })`: nearest, no mipmaps, sRGB,
 * repeat-wrapped when it tiles. Its rows are stored bottom first, so v = 0 is the texture's
 * bottom row (three's convention). Cached per def and palette and `userData.shared`, so level
 * unloads keep it and the toon material cache sees one texture.
 */
export declare function textureMap(idOrDef: string | TextureDef, opts?: TextureOptions): DataTexture;
/**
 * A sprite sheet for `SpriteBatch`: the def's frames left to right in one row, rows stored top
 * first (`flipY` false, which SpriteBatch reads). Not cached: a SpriteBatch disposes its sheet.
 */
export declare function spriteSheet(idOrDef: string | TextureDef, opts?: TextureOptions): SpriteSheet;
/**
 * One frame as `hud.sprite` rows and colours: a character per slot (a, b, c, … in palette order),
 * '.' for transparent.
 *
 *   const s = hudSprite('gem-icon'); hud.sprite(8, 8, s.rows, s.colors, { scale: 2 });
 */
export declare function hudSprite(idOrDef: string | TextureDef, o?: TextureOptions & {
    frame?: number;
}): {
    rows: string[];
    colors: Record<string, PaletteColor | number>;
};
