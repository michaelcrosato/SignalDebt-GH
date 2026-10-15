/**
 * Defs by id: the engine's built-in libraries (`MODEL_LIBRARY`, `TEXTURE_LIBRARY`) and a game's
 * own. Ids are how parts, layers and saves refer to defs, so an id names one def per catalog.
 */
export interface CatalogEntry {
    readonly id: string;
    readonly about: string;
    readonly tags: readonly string[];
}
export declare class Catalog<T extends CatalogEntry> {
    private readonly kind;
    private readonly tool;
    private readonly defs;
    /** `kind` names the defs in messages ("model", "texture"); `tool` is the CLI that finds them. */
    constructor(defs?: readonly T[], kind?: string, tool?: string);
    /** Add defs; an id that is already taken throws. */
    add(...defs: readonly T[]): this;
    has(id: string): boolean;
    get(id: string): T;
    all(): T[];
    /** Defs with every tag in `tags` whose id, about or tags contain every word of `text`. */
    find(q?: {
        tags?: readonly string[];
        text?: string;
    }): T[];
    /** Defs ranked by how well they match `text`, best first (`searchDefs`). */
    search(text: string, o?: SearchOptions): T[];
}
export interface SearchOptions {
    /** Only defs with every one of these tags. */
    readonly tags?: readonly string[];
    /** At most this many (default: every match). */
    readonly limit?: number;
}
/** Lower-case words of letters and digits: `bookcaseClosed_wide-2` → bookcase, closed, wide, 2. */
export declare function searchWords(text: string): string[];
/** A word without its plural ending: trees → tree, benches → bench, berries → berry. */
export declare function stemWord(w: string): string;
/**
 * The forms a word may take in a name: itself, `stemWord`'s, and the irregular plurals it can't
 * tell apart (shelves → shelf, knives → knife, cookies → cookie; stoves keeps stove).
 */
export declare function wordForms(w: string): string[];
/**
 * Defs ranked by how well they match `text` (any order; plurals and partial words count), best
 * first. Each word scores most when it names a part of the id (4) or a tag (3), less in `about`
 * (2), least as the start (1) or the inside (0.5) of a longer word. Every word must match; when
 * no def matches them all, the defs matching the most words come back instead, so a search for
 * "oak tree stump" still finds the stumps. Empty text: every def (after `tags`). Ties keep the
 * defs' own order, except that a pack's defs (ids with a prefix) whose name starts with a query
 * word take that pack's first places in the tie: `kenney-nature/rock-large-a` before
 * `kenney-nature/cliff-block-rock` for "rock". A pack's names start with what a thing is; the
 * library's end with it (`stone-wall`), so its keep their order.
 */
export declare function searchDefs<T extends CatalogEntry>(defs: readonly T[], text: string, o?: SearchOptions): T[];
/** One result of `searchHits`: the def, its score, and whether it matched every word. */
export interface SearchHit<T> {
    readonly def: T;
    readonly score: number;
    readonly full: boolean;
}
/**
 * The name a model's variants share: its id without its last part that is one letter or a
 * number, at the end or before the rest of the name (`kenney-nature/rock-large-a` … `-f`,
 * `crate-1` … `-3`, `tree-pine-tall-a-detailed` … `-d-detailed` → `kenney-nature/rock-large`,
 * `crate`, `tree-pine-tall-detailed`). An id without one is its own. For models: a sheet's
 * lettered tiles (`forest-a` … `-i`) are pieces of a set, not variants.
 */
export declare function variantName(id: string): string;
/** One def standing for its variants (the defs that share its `variantName`), and the others. */
export interface VariantGroup<T> {
    readonly def: T;
    readonly variants: readonly T[];
}
/**
 * Defs grouped by `variantName`: each group where its first def was, that def standing for it
 * (in a ranked list, the best match of its variants). Search results and listings read shorter:
 * one entry for a rock and its five variants, where an agent pays for every line it reads.
 */
export declare function groupVariants<T extends CatalogEntry>(defs: readonly T[]): VariantGroup<T>[];
/**
 * A group's variants in one line: the first by its id, the rest from their variant part on when
 * what comes before it is the first's (`rock-large-b, -c, -d`; `tree-pine-tall-b-detailed,
 * -c-detailed`), else by id.
 */
export declare function variantsInShort(g: VariantGroup<CatalogEntry>): string;
/** `searchDefs` with each def's score, and whether it matched every word (false: the fallback). */
export declare function searchHits<T extends CatalogEntry>(defs: readonly T[], text: string, o?: SearchOptions): SearchHit<T>[];
