/**
 * Navigation on a grid: which cells can be walked, the shortest path between two points
 * (A*, 8-connected, no corner cutting, smoothed by line of sight), a flow field toward one
 * target (one Dijkstra fill, then any number of agents read a direction per cell for free),
 * and line-of-sight tests (vision cones, stealth). Pure and allocation-light; unit-tested.
 *
 *   const nav = NavGrid.fromRows(['#########', '#...#...#', '#.#...#.#', '#########'], { cell: 1, origin: [-4.5, 0, -2] });
 *   const path = nav.path([-3, 0, -1], [3, 0, -1]);       // world points, corners only
 *   nav.flowTo(hero.x, hero.z);                            // once when the target changes cell
 *   nav.flowDirection(x, z, out);                          // per agent per step
 *   nav.lineOfSight(ax, az, bx, bz);                       // walls block, open cells don't
 */
export interface NavGridOptions {
    /** Metres per cell. Default 1. */
    cell?: number;
    /** World x, z of the top-left cell's corner (column 0, row 0). Default: centred on the origin. */
    origin?: readonly [number, number, number];
}
export declare class NavGrid {
    readonly width: number;
    readonly height: number;
    readonly cell: number;
    /** World x, z of cell (0, 0)'s corner. */
    readonly ox: number;
    readonly oz: number;
    /** 1 = walkable. */
    readonly open: Uint8Array;
    /** Bumped by `setOpen`: flow fields rebuild. */
    version: number;
    private readonly g;
    private readonly from;
    private readonly flow;
    private readonly heap;
    private flowTarget;
    private flowVersion;
    /** How many times a flow field was built (tools: should be one per target cell change). */
    flowBuilds: number;
    constructor(width: number, height: number, o?: NavGridOptions);
    /**
     * From an ASCII map: `blocked` characters are closed, everything else open. Default '# ': walls
     * and pits (a ' ' has no floor in RoomKit's maps); past the end of a short row is a wall.
     */
    static fromRows(rows: readonly string[], o?: NavGridOptions & {
        blocked?: string;
    }): NavGrid;
    col(x: number): number;
    row(z: number): number;
    /** World x, z of a cell's centre. */
    centerX(col: number): number;
    centerZ(row: number): number;
    isOpen(col: number, row: number): boolean;
    /** Is the world point on a walkable cell? */
    walkable(x: number, z: number): boolean;
    setOpen(col: number, row: number, open: boolean): void;
    /**
     * Shortest path between two world points (x, z used; y kept from `from`): A* over cells,
     * no corner cutting, then smoothed so it only turns where a wall is in the way. Null when
     * there is no way. The first point is `from`, the last `to` (snapped into its cell).
     */
    path(from: readonly [number, number, number], to: readonly [number, number, number]): [number, number, number][] | null;
    /** A* from cell `start` to cell `goal`: the cells of a shortest way, or null. */
    private search;
    /** Drop every point the path can skip in a straight line. */
    smooth(pts: [number, number, number][]): [number, number, number][];
    /** Open cells near (col, row), nearest first (itself if open; else within 4 cells, straight neighbours before diagonals). */
    private openNear;
    /**
     * Can you see (or walk straight) from a to b? Walks the cells under the segment (a DDA);
     * `radius` > 0 also tests two lines offset sideways (a body that wide fits).
     */
    lineOfSight(ax: number, az: number, bx: number, bz: number, radius?: number): boolean;
    /**
     * Distance from a along a direction to the first closed cell (at most `max`): the same cell
     * walk as `lineOfSight`, so a vision cone drawn with it shows exactly what a guard can see.
     */
    castWall(ax: number, az: number, dx: number, dz: number, max: number): number;
    /** Grid DDA: true if every cell the segment crosses is open. */
    private ray;
    /**
     * Walk the cells along a + t·d for t in 0..1 (a DDA): where the first closed cell begins, as
     * a fraction of d (0 when a is in one), or 1 when there is none.
     */
    private walk;
    /**
     * A flow field toward the world point (x, z): the walking distance from every cell to it.
     * Rebuilt only when the target changes cell or the grid changed (`version`). Returns
     * whether it was rebuilt.
     */
    flowTo(x: number, z: number): boolean;
    /** Walking distance to the flow target from a world point (Infinity: no way). */
    flowDistance(x: number, z: number): number;
    /**
     * Which way to go from (x, z) toward the flow target: the unit direction to the
     * lowest-distance neighbour (into `out` [x, z]). Returns false at the target or with no way.
     */
    flowDirection(x: number, z: number, out: [number, number]): boolean;
}
