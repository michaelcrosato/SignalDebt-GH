export interface WfcTile {
    readonly name: string;
    /** North (−z, up the map), east (+x), south (+z), west (−x). */
    readonly edges: readonly [string, string, string, string];
    /** How often it is chosen, relative to the others (default 1). */
    readonly weight?: number;
}
export interface PatternTile extends WfcTile {
    /** The tile as rows of characters (north row first). */
    readonly pattern: readonly string[];
}
export interface WfcOptions {
    seed?: number;
    /** The socket every edge on the grid's outside must be (a closed map: '###'). Default: any. */
    border?: string;
    /** Cells set before solving: cell index (x + y × width) → tile index (they may break the border: a way in). */
    fixed?: Readonly<Record<number, number>>;
    /** Starts allowed before giving up on contradictions (default 30). */
    attempts?: number;
}
/**
 * Tiles from square character patterns: the edges are read off the pattern, and each pattern
 * is turned to its four quarter turns (unless `rotate: false`), repeats dropped.
 */
export declare function patternTiles(defs: readonly {
    pattern: readonly string[];
    weight?: number;
    name?: string;
    rotate?: boolean;
}[]): PatternTile[];
export declare class Wfc {
    readonly width: number;
    readonly height: number;
    readonly tiles: readonly WfcTile[];
    /** Options still open per cell: `wave[cell * tiles + t]` is 1 while tile t is possible. */
    readonly wave: Uint8Array;
    /** How many options each cell has left. */
    readonly options: Uint16Array;
    /** The chosen tile per cell (−1 until it has one option left). */
    readonly result: Int32Array;
    /** Starts so far (1 + the contradictions met). */
    attempt: number;
    /** True once every cell has one tile, false while solving or after giving up. */
    done: boolean;
    failed: boolean;
    /** Cells collapsed by choice (the rest followed from propagation). */
    choices: number;
    private readonly T;
    private readonly fits;
    private readonly weights;
    private readonly o;
    private rand;
    private readonly stack;
    constructor(tiles: readonly WfcTile[], width: number, height: number, o?: WfcOptions);
    /** Start again from scratch (each start after the first uses the next seed). */
    restart(): void;
    /** Solve to the end (restarting on contradictions). True if every cell has a tile. */
    run(): boolean;
    /**
     * One collapse: the cell with the least entropy gets one tile, and that is propagated.
     * Returns false when there is nothing left to do (solved, or given up).
     */
    step(): boolean;
    /** Shannon entropy of a cell's options, by weight (0 when it has one left). */
    entropy(c: number): number;
    /** The undecided cell with the least entropy (a hair of noise breaks ties), or −1. */
    private observe;
    private ban;
    /** Spread bans from the cells on the stack: a neighbour's tile goes when nothing here fits it. False on a contradiction. */
    private propagate;
    private contradiction;
    private finishIfDone;
}
