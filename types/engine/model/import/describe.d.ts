/** A name's word (singular) → the library tags it adds. */
export declare const NAME_TAGS: Readonly<Record<string, readonly string[]>>;
/** The library tags a name's words add (`NAME_TAGS`), in order, once each. */
export declare function nameTags(name: string): string[];
/** A name as words: `tree-pine-default-a` → "Tree pine default a". */
export declare function nameWords(name: string): string;
export interface Describe {
    /** The pack's id: the first tag after 'imported'. */
    readonly pack?: string;
    /** The pack's name, for `about` ("Kenney Nature Kit 2.1"). */
    readonly title?: string;
    /** The file it came from, for `about`. */
    readonly file?: string;
    /** Tags every asset of the pack gets. */
    readonly tags?: readonly string[];
}
/**
 * `about` and `tags` for an imported asset named `name` (an id's last part): the name in words,
 * where it came from, and 'imported', the pack, the pack's tags and the name's (`nameTags`).
 */
export declare function describeImport(name: string, o?: Describe): {
    about: string;
    tags: string[];
};
