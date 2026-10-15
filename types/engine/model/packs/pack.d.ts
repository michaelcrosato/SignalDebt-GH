/**
 * The pack file: one JSON file per pack (`public/packs/<pack>.json`, written by
 * `npm run model -- import-pack` and `npm run tex -- import-pack`), holding its imported ModelDefs
 * and TextureDefs as plain data. Games load it with `loadPack(url)` (src/engine/assets.ts), never
 * import it: the engine kit bundles code only. `public/packs/index.json` lists every pack
 * (`PackIndex`, `loadPackIndex`), so a game or a tool can find them without knowing their names.
 */
import { TextureCatalog } from '../../texture/catalog';
import type { TextureDef } from '../../texture/types';
import { ModelCatalog } from '../catalog';
import type { ModelDef } from '../types';
import { type PackSource } from './sources';
export interface ModelPack {
    readonly pack: string;
    readonly about: string;
    /** The pack's name as people know it ("Kenney Nature Kit 2.1"). */
    readonly title?: string;
    /** Where the pack came from (each model's own `source` says it too). */
    readonly source: {
        readonly url: string;
        readonly licence: string;
        readonly author?: string;
        readonly sha256?: string;
        readonly homepage?: string;
    };
    readonly models: readonly ModelDef[];
    /** Textures sliced from the pack's pixel-art sheets (`npm run tex -- import-pack`). */
    readonly textures?: readonly TextureDef[];
}
/** One line of `public/packs/index.json`: a pack, what it holds and where it came from. */
export interface PackIndexEntry {
    readonly id: string;
    readonly title: string;
    readonly about: string;
    /** The pack file, relative to the index ("kenney-nature.json"). */
    readonly file: string;
    readonly models: number;
    readonly textures: number;
    readonly licence: string;
    readonly author?: string;
    readonly homepage?: string;
    readonly url: string;
}
export interface PackIndex {
    readonly packs: readonly PackIndexEntry[];
}
/** Check a pack file's shape (the models' and textures' own checks are `validateModel`'s and `validateTexture`'s). */
export declare function parsePack(data: unknown, where?: string): ModelPack;
/** Check `public/packs/index.json`'s shape. */
export declare function parsePackIndex(data: unknown, where?: string): PackIndex;
/** A pack's line in the index. */
export declare function packIndexEntry(pack: ModelPack, file?: string): PackIndexEntry;
/**
 * A pack file's own problems, beside each model's (`validateModel`) and texture's
 * (`validateTexture`): its id, its licence as a pack (someone else's pack needs its approved
 * `PACK_SOURCES` entry), and models or textures that don't say they come from it (each one's
 * own licence check must see the pack).
 */
export declare function packProblems(pack: ModelPack, sources?: readonly PackSource[]): string[];
/** A pack's models as a catalog of their own. */
export declare function packCatalog(pack: ModelPack): ModelCatalog;
/** A pack's textures as a catalog of their own (empty for a pack of models only). */
export declare function packTextures(pack: ModelPack): TextureCatalog;
