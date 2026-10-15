import { TextureCatalog } from '../catalog';
/**
 * The engine's built-in textures (src/engine/texture/library/<family>.ts). Games add their own
 * (`TEXTURE_LIBRARY.add(def)`) or build a catalog of their own; `npm run tex -- find` lists them.
 */
export declare const TEXTURE_LIBRARY: TextureCatalog;
/** The texture library's families (src/engine/texture/library/<family>.ts): each one's texture ids. */
export declare const TEXTURE_FAMILIES: Readonly<Record<string, readonly string[]>>;
