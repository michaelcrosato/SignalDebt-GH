import type { Part } from '../types';
/**
 * Stone blocks (slots `stone`, `stone2`) in running bond across `x` on a wall `d` deep (centred on
 * z = 0), in courses between the levels `ys`, the first being course `k` (odd courses are
 * `stone2` and shifted half a block), blocks about `len` long. Courses alternate shades rather
 * than blocks: at game scale a joint is under a pixel, and blocks checkered in running bond touch
 * their like corner to corner, chaining into one block. A single course (`ys` of two levels) has
 * nothing to chain with, so its blocks alternate instead (in one shade they'd read as one slab);
 * the rule is per call, so a course that carries on the courses of another call (a window's top
 * course over its jambs) passes `band` to keep its course's shade. Joints open between blocks
 * but not on the edges `open` names (the outside, an opening): put a `mortar` core behind them.
 * Walls, jambs, piers. `cut` leaves openings: `[x0, x1, y0?, y1?]` clears x0..x1 in the courses
 * whose middle lies between y0 and y1 (default all), the blocks it crosses cut back flush to its
 * edges. `run` names the ends that meet the next modular piece (it overrides `open`
 * there): a shifted course's half block stays bare, to make a whole block with the neighbour's,
 * and a whole block keeps half a joint, to make a whole joint with the neighbour's, so the bond
 * runs on across pieces.
 */
export declare function masonry(o: {
    x: [number, number];
    ys: number[];
    d: number;
    k?: number;
    len?: number;
    open?: {
        l?: boolean;
        r?: boolean;
        b?: boolean;
        t?: boolean;
    };
    run?: {
        l?: boolean;
        r?: boolean;
    };
    cut?: readonly (readonly number[])[];
    band?: boolean;
}): Part[];
/** `n` + 1 evenly spaced levels from `a` to `b`. */
export declare const levels: (a: number, b: number, n: number) => number[];
export declare const door: {
    readonly id: "door";
    readonly about: "Plank door 2.2 m tall in a stone frame; the leaf is a pivot (`leaf`) hinged on the left, with iron straps and a brass ring handle";
    readonly tags: readonly ["architecture", "stone", "wood"];
    readonly palette: {
        readonly stone: "mist";
        readonly stone2: "slate";
        readonly mortar: "night";
        readonly wood: "orange";
        readonly wood2: "red";
        readonly iron: "night";
        readonly brass: "sand";
    };
    readonly parts: () => ({
        mirror: Part[];
        box?: undefined;
        at?: undefined;
        c?: undefined;
        name?: undefined;
        pivot?: undefined;
        group?: undefined;
    } | {
        box: [number, number, number];
        at: [number, number, number];
        c: string;
        name: string;
        mirror?: undefined;
        pivot?: undefined;
        group?: undefined;
    } | {
        name: string;
        pivot: true;
        at: [number, number, number];
        group: Part[];
        mirror?: undefined;
        box?: undefined;
        c?: undefined;
    })[];
};
export declare const framedWindow: {
    readonly id: "window";
    readonly about: "Framed window with a cross mullion, a stone sill and lintel and two plank shutters open flat, in a short stone wall";
    readonly tags: readonly ["architecture", "stone", "wood"];
    readonly palette: {
        readonly stone: "mist";
        readonly stone2: "slate";
        readonly mortar: "night";
        readonly wood: "orange";
        readonly wood2: "red";
        readonly glass: "navy";
        readonly iron: "night";
    };
    readonly params: {
        readonly width: readonly [0.8, 0.4, 2];
        readonly height: readonly [1, 0.5, 1.8];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
};
export declare const column: {
    readonly id: "column";
    readonly about: "Stone column: a square plinth and moulded base, a tapering shaft, a flared capital under a square abacus";
    readonly tags: readonly ["architecture", "stone"];
    readonly palette: {
        readonly stone: "mist";
        readonly stone2: "slate";
    };
    readonly params: {
        readonly height: readonly [2.6, 1, 5];
    };
    readonly collider: "cyl";
    readonly parts: (p: Readonly<Record<string, number>>) => ({
        box: [number, number, number];
        at: [number, number, number];
        c: string;
        name: string;
        cyl?: undefined;
        top?: undefined;
        seg?: undefined;
    } | {
        cyl: [number, number, number];
        at: [number, number, number];
        top: number;
        seg: number;
        c: string;
        box?: undefined;
        name?: undefined;
    } | {
        cyl: [number, number, number];
        at: [number, number, number];
        top: number;
        seg: number;
        c: string;
        name: string;
        box?: undefined;
    })[];
};
export declare const stairs: {
    readonly id: "stairs";
    readonly about: "Flight of stone steps climbing toward the back (-Z), one box per step from the floor, shades alternating so each edge reads";
    readonly tags: readonly ["architecture", "stone"];
    readonly palette: {
        readonly stone: "mist";
        readonly stone2: "slate";
    };
    readonly params: {
        readonly steps: readonly [6, 2, 16];
        readonly width: readonly [1.2, 0.6, 3];
        readonly rise: readonly [0.18, 0.12, 0.25];
    };
    readonly collider: "hull";
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
};
export declare const fence: {
    readonly id: "fence";
    readonly about: "Wooden fence along X: square posts with pyramid caps about every metre, two rails nailed across their fronts";
    readonly tags: readonly ["architecture", "wood"];
    readonly palette: {
        readonly wood: "orange";
        readonly wood2: "red";
    };
    readonly params: {
        readonly length: readonly [3, 1, 8];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
};
export declare const roof: {
    readonly id: "roof";
    readonly about: "Gable roof to sit on walls (y = 0 is the wall top): two pitched slabs of tile courses, stone gable ends, a ridge beam";
    readonly tags: readonly ["architecture", "roof", "stone", "wood"];
    readonly palette: {
        readonly tile: "red";
        readonly tile2: "plum";
        readonly stone: "mist";
        readonly wood: "orange";
    };
    readonly params: {
        readonly width: readonly [4, 1.5, 10];
        readonly depth: readonly [3, 1.5, 8];
        readonly pitch: readonly [40, 15, 60];
    };
    readonly floats: true;
    readonly parts: (p: Readonly<Record<string, number>>) => ({
        mirror: Part[];
        axis: "z";
        box?: undefined;
        at?: undefined;
        c?: undefined;
        name?: undefined;
    } | {
        mirror: {
            slab: [number, number][];
            depth: number;
            at: [number, number, number];
            rot: [number, number, number];
            c: string;
            name: string;
        }[];
        axis?: undefined;
        box?: undefined;
        at?: undefined;
        c?: undefined;
        name?: undefined;
    } | {
        box: [number, number, number];
        at: [number, number, number];
        c: string;
        name: string;
        mirror?: undefined;
        axis?: undefined;
    })[];
};
export declare const gate: {
    readonly id: "gate";
    readonly about: "Wooden yard gate between two capped posts: a picket leaf (pivot `leaf`, hinged on the left) with rails, a brace and an iron latch";
    readonly tags: readonly ["architecture", "wood"];
    readonly palette: {
        readonly wood: "orange";
        readonly wood2: "red";
        readonly iron: "night";
    };
    readonly parts: () => Part[];
};
export declare const stoneWall: {
    readonly id: "stone-wall";
    readonly about: "Modular stone wall along X, `length` x 0.3 m centred on the origin, `height` 3 m to a storey: blocks in two shaded courses over dark mortar (one course alternates its blocks); its ends meet the next piece so the bond runs on across pieces set end to end on the 1 m grid";
    readonly tags: readonly ["architecture", "stone", "wall", "modular"];
    readonly palette: {
        readonly stone: "mist";
        readonly stone2: "slate";
        readonly mortar: "night";
    };
    readonly params: {
        readonly length: readonly [2, 0.5, 6];
        readonly height: readonly [3, 0.5, 5];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
};
export declare const wallCorner: {
    readonly id: "wall-corner";
    readonly about: "Corner of the modular stone walls: a pier of dressed quoins on the origin, two `arm` m arms along -X and -Z (footprint 1.2 x 1.2 m at the default), `height` 3 m; turn it in 90-degree steps";
    readonly tags: readonly ["architecture", "stone", "wall", "modular"];
    readonly palette: {
        readonly stone: "mist";
        readonly stone2: "slate";
        readonly mortar: "night";
        readonly dressed: "sand";
    };
    readonly params: {
        readonly arm: readonly [1, 0.5, 3];
        readonly height: readonly [3, 0.5, 5];
    };
    readonly collider: "parts";
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
};
export declare const doorway: {
    readonly id: "doorway";
    readonly about: "Modular stone wall along X (`length` x 0.3 m, like `stone-wall`) with a 1 m wide, 2.3 m high opening under a dressed lintel, open to colliders so actors walk through";
    readonly tags: readonly ["architecture", "stone", "wall", "modular"];
    readonly palette: {
        readonly stone: "mist";
        readonly stone2: "slate";
        readonly mortar: "night";
        readonly dressed: "sand";
    };
    readonly params: {
        readonly length: readonly [2, 1.5, 5];
        readonly height: readonly [3, 2.7, 5];
    };
    readonly collider: "parts";
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
};
export declare const wideWindow: {
    readonly id: "wide-window";
    readonly about: "Modular stone wall along X (`length` x 0.3 m, like `stone-wall`) with a window as wide as the wall less a block each side and three courses tall: glass between dressed mullions, a sill and a lintel; the glazed window blocks like the wall (its glass collides); map `glass`";
    readonly tags: readonly ["architecture", "stone", "wall", "modular"];
    readonly palette: {
        readonly glass: "navy";
        readonly stone: "mist";
        readonly stone2: "slate";
        readonly mortar: "night";
        readonly dressed: "sand";
    };
    readonly params: {
        readonly length: readonly [3, 2, 5];
        readonly height: readonly [3, 2.7, 5];
    };
    readonly collider: "parts";
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
};
export declare const ruinedWall: {
    readonly id: "ruined-wall";
    readonly about: "Ruin of the modular stone wall along X, `length` x 0.3 m: its courses broken off to a seeded jagged top under `height`, deepest at a seeded point; add `rubble` at its foot";
    readonly tags: readonly ["architecture", "stone", "wall", "ruin", "modular"];
    readonly palette: {
        readonly stone: "mist";
        readonly stone2: "slate";
        readonly mortar: "night";
    };
    readonly params: {
        readonly length: readonly [2, 1, 5];
        readonly height: readonly [2.25, 1, 3];
    };
    readonly collider: "parts";
    readonly parts: (p: Readonly<Record<string, number>>, rng: import("../..").Rng) => Part[];
};
export declare const balcony: {
    readonly id: "balcony";
    readonly about: "Wooden balcony to hang on a wall at z = 0, its deck 3 m up (a storey of `stone-wall`): boards on joists and knee braces, a baluster railing round three sides; footprint `width` x `depth` m";
    readonly tags: readonly ["architecture", "wood", "town", "modular"];
    readonly palette: {
        readonly wood: "orange";
        readonly wood2: "red";
        readonly frame: "plum";
    };
    readonly params: {
        readonly width: readonly [2, 1, 4];
        readonly depth: readonly [1, 0.6, 1.5];
    };
    readonly floats: true;
    readonly collider: "parts";
    readonly anchors: {
        readonly wall: readonly [0, 3, 0];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
};
export declare const bridge: {
    readonly id: "bridge";
    readonly about: "Wooden footbridge span along X, `length` x `width` m: seeded planks laid across two dark beams whose feet rest on the banks at y = 0, the deck 0.32 m up, a dark rail on low posts along each side; the deck carries actors and the rails stop them";
    readonly tags: readonly ["architecture", "wood", "nature", "town", "modular"];
    readonly palette: {
        readonly wood: "orange";
        readonly wood2: "red";
        readonly beam: "plum";
    };
    readonly params: {
        readonly length: readonly [3, 1, 8];
        readonly width: readonly [1.6, 1, 3];
    };
    readonly collider: "parts";
    readonly parts: (p: Readonly<Record<string, number>>, rng: import("../..").Rng) => Part[];
};
export declare const chimney: {
    readonly id: "chimney";
    readonly about: "Stone chimney stack, 0.9 x 0.6 m and `height` to its dressed cap: coursed blocks over mortar, two clay pots with dark flues; stand it against a gable or on a ridge";
    readonly tags: readonly ["architecture", "stone", "roof", "town"];
    readonly palette: {
        readonly pot: "orange";
        readonly flue: "ink";
        readonly stone: "mist";
        readonly stone2: "slate";
        readonly mortar: "night";
        readonly dressed: "sand";
    };
    readonly params: {
        readonly height: readonly [2.5, 1, 5];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
};
export declare const battlement: {
    readonly id: "battlement";
    readonly about: "Crenellated parapet to sit on a wall top (y = 0 there): a dressed string course, a coursed breast wall and coping, `merlons` slit merlons one to each metre with half a crenel at each end so pieces line up; footprint `merlons` x 0.42 m";
    readonly tags: readonly ["architecture", "stone", "wall", "castle", "modular"];
    readonly palette: {
        readonly slit: "ink";
        readonly stone: "mist";
        readonly stone2: "slate";
        readonly mortar: "night";
        readonly dressed: "sand";
    };
    readonly params: {
        readonly merlons: readonly [3, 1, 8];
    };
    readonly collider: "parts";
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
};
export declare const trapdoor: {
    readonly id: "trapdoor";
    readonly about: "Trapdoor on the floor, 1 x 1 m: a frame round a plank hatch with iron strap hinges and a brass ring, on the pivot `hatch` hinged at the back; `open` (degrees) lifts it off a dark pit that stays open to colliders";
    readonly tags: readonly ["architecture", "wood", "dungeon", "floor"];
    readonly palette: {
        readonly wood: "orange";
        readonly wood2: "red";
        readonly frame: "plum";
        readonly iron: "night";
        readonly ring: "sand";
        readonly pit: "ink";
    };
    readonly params: {
        readonly open: readonly [0, 0, 110];
    };
    readonly collider: "parts";
    readonly parts: (p: Readonly<Record<string, number>>) => ({
        box: [number, number, number];
        at: [number, number, number];
        c: string;
        name: string;
        collide: false;
        mirror?: undefined;
        axis?: undefined;
        pivot?: undefined;
        rot?: undefined;
        group?: undefined;
    } | {
        mirror: {
            box: [number, number, number];
            at: [number, number, number];
            c: string;
        }[];
        axis: "z";
        box?: undefined;
        at?: undefined;
        c?: undefined;
        name?: undefined;
        collide?: undefined;
        pivot?: undefined;
        rot?: undefined;
        group?: undefined;
    } | {
        mirror: {
            box: [number, number, number];
            at: [number, number, number];
            c: string;
        }[];
        box?: undefined;
        at?: undefined;
        c?: undefined;
        name?: undefined;
        collide?: undefined;
        axis?: undefined;
        pivot?: undefined;
        rot?: undefined;
        group?: undefined;
    } | {
        name: string;
        pivot: true;
        at: [number, number, number];
        rot: [number, number, number];
        group: Part[];
        box?: undefined;
        c?: undefined;
        collide?: undefined;
        mirror?: undefined;
        axis?: undefined;
    })[];
};
export declare const stoneSteps: {
    readonly id: "stone-steps";
    readonly about: "Stone steps up to a landing: `steps` risers of 0.2 m climbing toward -Z between dark cheek walls with dressed copings, a 1 m landing at the back; footprint 2 x 2 m at the defaults";
    readonly tags: readonly ["architecture", "stone", "town", "modular"];
    readonly palette: {
        readonly stone: "mist";
        readonly stone2: "slate";
        readonly cheek: "night";
        readonly dressed: "sand";
    };
    readonly params: {
        readonly steps: readonly [5, 2, 12];
        readonly width: readonly [1.4, 0.8, 3];
    };
    readonly collider: "parts";
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
};
export declare const timberWall: {
    readonly id: "timber-wall";
    readonly about: "Timber-frame wall panel along X (Tudor), `length` x 0.3 m, `height` 3 m to a storey: white plaster between dark posts, plates, a rail and braces on a course of stone in two shades; lines up with `stone-wall`";
    readonly tags: readonly ["architecture", "wood", "wall", "town", "modular"];
    readonly palette: {
        readonly plaster: "white";
        readonly plate: "ink";
        readonly beam: "plum";
        readonly stone: "mist";
        readonly stone2: "slate";
        readonly mortar: "night";
    };
    readonly params: {
        readonly length: readonly [2, 1, 4];
        readonly height: readonly [3, 2, 4];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
};
export declare const ARCHITECTURE: ({
    readonly id: "door";
    readonly about: "Plank door 2.2 m tall in a stone frame; the leaf is a pivot (`leaf`) hinged on the left, with iron straps and a brass ring handle";
    readonly tags: readonly ["architecture", "stone", "wood"];
    readonly palette: {
        readonly stone: "mist";
        readonly stone2: "slate";
        readonly mortar: "night";
        readonly wood: "orange";
        readonly wood2: "red";
        readonly iron: "night";
        readonly brass: "sand";
    };
    readonly parts: () => ({
        mirror: Part[];
        box?: undefined;
        at?: undefined;
        c?: undefined;
        name?: undefined;
        pivot?: undefined;
        group?: undefined;
    } | {
        box: [number, number, number];
        at: [number, number, number];
        c: string;
        name: string;
        mirror?: undefined;
        pivot?: undefined;
        group?: undefined;
    } | {
        name: string;
        pivot: true;
        at: [number, number, number];
        group: Part[];
        mirror?: undefined;
        box?: undefined;
        c?: undefined;
    })[];
} | {
    readonly id: "window";
    readonly about: "Framed window with a cross mullion, a stone sill and lintel and two plank shutters open flat, in a short stone wall";
    readonly tags: readonly ["architecture", "stone", "wood"];
    readonly palette: {
        readonly stone: "mist";
        readonly stone2: "slate";
        readonly mortar: "night";
        readonly wood: "orange";
        readonly wood2: "red";
        readonly glass: "navy";
        readonly iron: "night";
    };
    readonly params: {
        readonly width: readonly [0.8, 0.4, 2];
        readonly height: readonly [1, 0.5, 1.8];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
} | {
    readonly id: "column";
    readonly about: "Stone column: a square plinth and moulded base, a tapering shaft, a flared capital under a square abacus";
    readonly tags: readonly ["architecture", "stone"];
    readonly palette: {
        readonly stone: "mist";
        readonly stone2: "slate";
    };
    readonly params: {
        readonly height: readonly [2.6, 1, 5];
    };
    readonly collider: "cyl";
    readonly parts: (p: Readonly<Record<string, number>>) => ({
        box: [number, number, number];
        at: [number, number, number];
        c: string;
        name: string;
        cyl?: undefined;
        top?: undefined;
        seg?: undefined;
    } | {
        cyl: [number, number, number];
        at: [number, number, number];
        top: number;
        seg: number;
        c: string;
        box?: undefined;
        name?: undefined;
    } | {
        cyl: [number, number, number];
        at: [number, number, number];
        top: number;
        seg: number;
        c: string;
        name: string;
        box?: undefined;
    })[];
} | {
    readonly id: "stairs";
    readonly about: "Flight of stone steps climbing toward the back (-Z), one box per step from the floor, shades alternating so each edge reads";
    readonly tags: readonly ["architecture", "stone"];
    readonly palette: {
        readonly stone: "mist";
        readonly stone2: "slate";
    };
    readonly params: {
        readonly steps: readonly [6, 2, 16];
        readonly width: readonly [1.2, 0.6, 3];
        readonly rise: readonly [0.18, 0.12, 0.25];
    };
    readonly collider: "hull";
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
} | {
    readonly id: "fence";
    readonly about: "Wooden fence along X: square posts with pyramid caps about every metre, two rails nailed across their fronts";
    readonly tags: readonly ["architecture", "wood"];
    readonly palette: {
        readonly wood: "orange";
        readonly wood2: "red";
    };
    readonly params: {
        readonly length: readonly [3, 1, 8];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
} | {
    readonly id: "roof";
    readonly about: "Gable roof to sit on walls (y = 0 is the wall top): two pitched slabs of tile courses, stone gable ends, a ridge beam";
    readonly tags: readonly ["architecture", "roof", "stone", "wood"];
    readonly palette: {
        readonly tile: "red";
        readonly tile2: "plum";
        readonly stone: "mist";
        readonly wood: "orange";
    };
    readonly params: {
        readonly width: readonly [4, 1.5, 10];
        readonly depth: readonly [3, 1.5, 8];
        readonly pitch: readonly [40, 15, 60];
    };
    readonly floats: true;
    readonly parts: (p: Readonly<Record<string, number>>) => ({
        mirror: Part[];
        axis: "z";
        box?: undefined;
        at?: undefined;
        c?: undefined;
        name?: undefined;
    } | {
        mirror: {
            slab: [number, number][];
            depth: number;
            at: [number, number, number];
            rot: [number, number, number];
            c: string;
            name: string;
        }[];
        axis?: undefined;
        box?: undefined;
        at?: undefined;
        c?: undefined;
        name?: undefined;
    } | {
        box: [number, number, number];
        at: [number, number, number];
        c: string;
        name: string;
        mirror?: undefined;
        axis?: undefined;
    })[];
} | {
    readonly id: "gate";
    readonly about: "Wooden yard gate between two capped posts: a picket leaf (pivot `leaf`, hinged on the left) with rails, a brace and an iron latch";
    readonly tags: readonly ["architecture", "wood"];
    readonly palette: {
        readonly wood: "orange";
        readonly wood2: "red";
        readonly iron: "night";
    };
    readonly parts: () => Part[];
} | {
    readonly id: "stone-wall";
    readonly about: "Modular stone wall along X, `length` x 0.3 m centred on the origin, `height` 3 m to a storey: blocks in two shaded courses over dark mortar (one course alternates its blocks); its ends meet the next piece so the bond runs on across pieces set end to end on the 1 m grid";
    readonly tags: readonly ["architecture", "stone", "wall", "modular"];
    readonly palette: {
        readonly stone: "mist";
        readonly stone2: "slate";
        readonly mortar: "night";
    };
    readonly params: {
        readonly length: readonly [2, 0.5, 6];
        readonly height: readonly [3, 0.5, 5];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
} | {
    readonly id: "wall-corner";
    readonly about: "Corner of the modular stone walls: a pier of dressed quoins on the origin, two `arm` m arms along -X and -Z (footprint 1.2 x 1.2 m at the default), `height` 3 m; turn it in 90-degree steps";
    readonly tags: readonly ["architecture", "stone", "wall", "modular"];
    readonly palette: {
        readonly stone: "mist";
        readonly stone2: "slate";
        readonly mortar: "night";
        readonly dressed: "sand";
    };
    readonly params: {
        readonly arm: readonly [1, 0.5, 3];
        readonly height: readonly [3, 0.5, 5];
    };
    readonly collider: "parts";
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
} | {
    readonly id: "doorway";
    readonly about: "Modular stone wall along X (`length` x 0.3 m, like `stone-wall`) with a 1 m wide, 2.3 m high opening under a dressed lintel, open to colliders so actors walk through";
    readonly tags: readonly ["architecture", "stone", "wall", "modular"];
    readonly palette: {
        readonly stone: "mist";
        readonly stone2: "slate";
        readonly mortar: "night";
        readonly dressed: "sand";
    };
    readonly params: {
        readonly length: readonly [2, 1.5, 5];
        readonly height: readonly [3, 2.7, 5];
    };
    readonly collider: "parts";
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
} | {
    readonly id: "wide-window";
    readonly about: "Modular stone wall along X (`length` x 0.3 m, like `stone-wall`) with a window as wide as the wall less a block each side and three courses tall: glass between dressed mullions, a sill and a lintel; the glazed window blocks like the wall (its glass collides); map `glass`";
    readonly tags: readonly ["architecture", "stone", "wall", "modular"];
    readonly palette: {
        readonly glass: "navy";
        readonly stone: "mist";
        readonly stone2: "slate";
        readonly mortar: "night";
        readonly dressed: "sand";
    };
    readonly params: {
        readonly length: readonly [3, 2, 5];
        readonly height: readonly [3, 2.7, 5];
    };
    readonly collider: "parts";
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
} | {
    readonly id: "ruined-wall";
    readonly about: "Ruin of the modular stone wall along X, `length` x 0.3 m: its courses broken off to a seeded jagged top under `height`, deepest at a seeded point; add `rubble` at its foot";
    readonly tags: readonly ["architecture", "stone", "wall", "ruin", "modular"];
    readonly palette: {
        readonly stone: "mist";
        readonly stone2: "slate";
        readonly mortar: "night";
    };
    readonly params: {
        readonly length: readonly [2, 1, 5];
        readonly height: readonly [2.25, 1, 3];
    };
    readonly collider: "parts";
    readonly parts: (p: Readonly<Record<string, number>>, rng: import("../..").Rng) => Part[];
} | {
    readonly id: "balcony";
    readonly about: "Wooden balcony to hang on a wall at z = 0, its deck 3 m up (a storey of `stone-wall`): boards on joists and knee braces, a baluster railing round three sides; footprint `width` x `depth` m";
    readonly tags: readonly ["architecture", "wood", "town", "modular"];
    readonly palette: {
        readonly wood: "orange";
        readonly wood2: "red";
        readonly frame: "plum";
    };
    readonly params: {
        readonly width: readonly [2, 1, 4];
        readonly depth: readonly [1, 0.6, 1.5];
    };
    readonly floats: true;
    readonly collider: "parts";
    readonly anchors: {
        readonly wall: readonly [0, 3, 0];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
} | {
    readonly id: "bridge";
    readonly about: "Wooden footbridge span along X, `length` x `width` m: seeded planks laid across two dark beams whose feet rest on the banks at y = 0, the deck 0.32 m up, a dark rail on low posts along each side; the deck carries actors and the rails stop them";
    readonly tags: readonly ["architecture", "wood", "nature", "town", "modular"];
    readonly palette: {
        readonly wood: "orange";
        readonly wood2: "red";
        readonly beam: "plum";
    };
    readonly params: {
        readonly length: readonly [3, 1, 8];
        readonly width: readonly [1.6, 1, 3];
    };
    readonly collider: "parts";
    readonly parts: (p: Readonly<Record<string, number>>, rng: import("../..").Rng) => Part[];
} | {
    readonly id: "chimney";
    readonly about: "Stone chimney stack, 0.9 x 0.6 m and `height` to its dressed cap: coursed blocks over mortar, two clay pots with dark flues; stand it against a gable or on a ridge";
    readonly tags: readonly ["architecture", "stone", "roof", "town"];
    readonly palette: {
        readonly pot: "orange";
        readonly flue: "ink";
        readonly stone: "mist";
        readonly stone2: "slate";
        readonly mortar: "night";
        readonly dressed: "sand";
    };
    readonly params: {
        readonly height: readonly [2.5, 1, 5];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
} | {
    readonly id: "battlement";
    readonly about: "Crenellated parapet to sit on a wall top (y = 0 there): a dressed string course, a coursed breast wall and coping, `merlons` slit merlons one to each metre with half a crenel at each end so pieces line up; footprint `merlons` x 0.42 m";
    readonly tags: readonly ["architecture", "stone", "wall", "castle", "modular"];
    readonly palette: {
        readonly slit: "ink";
        readonly stone: "mist";
        readonly stone2: "slate";
        readonly mortar: "night";
        readonly dressed: "sand";
    };
    readonly params: {
        readonly merlons: readonly [3, 1, 8];
    };
    readonly collider: "parts";
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
} | {
    readonly id: "trapdoor";
    readonly about: "Trapdoor on the floor, 1 x 1 m: a frame round a plank hatch with iron strap hinges and a brass ring, on the pivot `hatch` hinged at the back; `open` (degrees) lifts it off a dark pit that stays open to colliders";
    readonly tags: readonly ["architecture", "wood", "dungeon", "floor"];
    readonly palette: {
        readonly wood: "orange";
        readonly wood2: "red";
        readonly frame: "plum";
        readonly iron: "night";
        readonly ring: "sand";
        readonly pit: "ink";
    };
    readonly params: {
        readonly open: readonly [0, 0, 110];
    };
    readonly collider: "parts";
    readonly parts: (p: Readonly<Record<string, number>>) => ({
        box: [number, number, number];
        at: [number, number, number];
        c: string;
        name: string;
        collide: false;
        mirror?: undefined;
        axis?: undefined;
        pivot?: undefined;
        rot?: undefined;
        group?: undefined;
    } | {
        mirror: {
            box: [number, number, number];
            at: [number, number, number];
            c: string;
        }[];
        axis: "z";
        box?: undefined;
        at?: undefined;
        c?: undefined;
        name?: undefined;
        collide?: undefined;
        pivot?: undefined;
        rot?: undefined;
        group?: undefined;
    } | {
        mirror: {
            box: [number, number, number];
            at: [number, number, number];
            c: string;
        }[];
        box?: undefined;
        at?: undefined;
        c?: undefined;
        name?: undefined;
        collide?: undefined;
        axis?: undefined;
        pivot?: undefined;
        rot?: undefined;
        group?: undefined;
    } | {
        name: string;
        pivot: true;
        at: [number, number, number];
        rot: [number, number, number];
        group: Part[];
        box?: undefined;
        c?: undefined;
        collide?: undefined;
        mirror?: undefined;
        axis?: undefined;
    })[];
} | {
    readonly id: "stone-steps";
    readonly about: "Stone steps up to a landing: `steps` risers of 0.2 m climbing toward -Z between dark cheek walls with dressed copings, a 1 m landing at the back; footprint 2 x 2 m at the defaults";
    readonly tags: readonly ["architecture", "stone", "town", "modular"];
    readonly palette: {
        readonly stone: "mist";
        readonly stone2: "slate";
        readonly cheek: "night";
        readonly dressed: "sand";
    };
    readonly params: {
        readonly steps: readonly [5, 2, 12];
        readonly width: readonly [1.4, 0.8, 3];
    };
    readonly collider: "parts";
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
} | {
    readonly id: "timber-wall";
    readonly about: "Timber-frame wall panel along X (Tudor), `length` x 0.3 m, `height` 3 m to a storey: white plaster between dark posts, plates, a rail and braces on a course of stone in two shades; lines up with `stone-wall`";
    readonly tags: readonly ["architecture", "wood", "wall", "town", "modular"];
    readonly palette: {
        readonly plaster: "white";
        readonly plate: "ink";
        readonly beam: "plum";
        readonly stone: "mist";
        readonly stone2: "slate";
        readonly mortar: "night";
    };
    readonly params: {
        readonly length: readonly [2, 1, 4];
        readonly height: readonly [3, 2, 4];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
})[];
