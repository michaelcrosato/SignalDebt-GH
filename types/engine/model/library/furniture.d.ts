import type { Rng } from '../../random';
import type { Part } from '../types';
export declare const table: {
    readonly id: "table";
    readonly about: "Plank-top table, 0.75 m tall, on four square legs with a dark apron under the top";
    readonly tags: readonly ["furniture", "wood"];
    readonly palette: {
        readonly wood: "orange";
        readonly frame: "red";
        readonly joint: "plum";
    };
    readonly params: {
        readonly length: readonly [1.4, 0.8, 2.4];
        readonly width: readonly [0.8, 0.6, 1.2];
    };
    readonly anchors: {
        readonly top: readonly [0, 0.75, 0];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
};
export declare const chair: {
    readonly id: "chair";
    readonly about: "Wooden chair, seat at 0.45 m on four legs, the back legs rising into a two-rail back";
    readonly tags: readonly ["furniture", "wood"];
    readonly palette: {
        readonly wood: "orange";
        readonly frame: "red";
        readonly joint: "plum";
    };
    readonly anchors: {
        readonly seat: readonly [0, 0.45, 0];
    };
    readonly parts: readonly [{
        readonly box: readonly [0.46, 0.05, 0.44];
        readonly at: readonly [0, 0.425, 0];
        readonly c: "wood";
        readonly name: "seat";
    }, {
        readonly box: readonly [0.4, 0.07, 0.38];
        readonly at: readonly [0, 0.365, 0];
        readonly c: "joint";
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.06, 0.42, 0.06];
            readonly at: readonly [0.18, 0.21, 0.17];
            readonly c: "frame";
        }];
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.06, 0.98, 0.06];
            readonly at: readonly [0.18, 0.49, -0.18];
            readonly c: "frame";
        }];
    }, {
        readonly box: readonly [0.4, 0.14, 0.05];
        readonly at: readonly [0, 0.87, -0.18];
        readonly c: "wood";
        readonly name: "back";
    }, {
        readonly box: readonly [0.3, 0.1, 0.04];
        readonly at: readonly [0, 0.66, -0.18];
        readonly c: "wood";
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.05, 0.06, 0.34];
            readonly at: readonly [0.18, 0.14, -0.005];
            readonly c: "joint";
        }];
    }];
};
export declare const bench: {
    readonly id: "bench";
    readonly about: "Backless plank bench, seat at 0.45 m on two notched board trestles and a dark stretcher";
    readonly tags: readonly ["furniture", "wood"];
    readonly palette: {
        readonly wood: "orange";
        readonly frame: "red";
        readonly joint: "plum";
    };
    readonly params: {
        readonly length: readonly [1.4, 0.8, 2.4];
    };
    readonly anchors: {
        readonly seat: readonly [0, 0.45, 0];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
};
export declare const stool: {
    readonly id: "stool";
    readonly about: "Round stool: an eight-sided seat at 0.5 m on four splayed legs and a dark ring";
    readonly tags: readonly ["furniture", "wood"];
    readonly palette: {
        readonly wood: "orange";
        readonly frame: "red";
        readonly joint: "plum";
    };
    readonly collider: "cyl";
    readonly anchors: {
        readonly seat: readonly [0, 0.5, 0];
    };
    readonly parts: readonly [{
        readonly cyl: readonly [0.4, 0.06, 0.4];
        readonly at: readonly [0, 0.47, 0];
        readonly seg: 8;
        readonly c: "wood";
        readonly name: "seat";
    }, {
        readonly cyl: readonly [0.3, 0.04, 0.3];
        readonly at: readonly [0, 0.42, 0];
        readonly seg: 8;
        readonly c: "joint";
    }, ...Part[], {
        readonly torus: readonly [0.38, 0.06, 0.38];
        readonly at: readonly [0, 0.17, 0];
        readonly seg: 8;
        readonly c: "joint";
    }];
};
export declare const bed: {
    readonly id: "bed";
    readonly about: "Single bed (1 x 2 m): wooden frame and headboard, a mattress, a white pillow and a blue blanket turned down";
    readonly tags: readonly ["furniture", "wood", "cloth"];
    readonly palette: {
        readonly wood: "orange";
        readonly frame: "red";
        readonly joint: "plum";
        readonly sheet: "mist";
        readonly pillow: "white";
        readonly blanket: "blue";
        readonly fold: "sky";
    };
    readonly parts: readonly [{
        readonly mirror: readonly [{
            readonly box: readonly [0.08, 1, 0.08];
            readonly at: readonly [0.47, 0.5, -0.96];
            readonly c: "frame";
        }];
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.08, 0.55, 0.08];
            readonly at: readonly [0.47, 0.275, 0.96];
            readonly c: "frame";
        }];
    }, {
        readonly box: readonly [0.86, 0.43, 0.05];
        readonly at: readonly [0, 0.645, -0.96];
        readonly c: "wood";
        readonly name: "headboard";
    }, {
        readonly box: readonly [0.86, 0.1, 0.06];
        readonly at: readonly [0, 0.91, -0.96];
        readonly c: "frame";
    }, {
        readonly box: readonly [0.86, 0.16, 0.05];
        readonly at: readonly [0, 0.42, 0.96];
        readonly c: "wood";
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.05, 0.14, 1.84];
            readonly at: readonly [0.465, 0.29, 0];
            readonly c: "wood";
        }];
    }, {
        readonly box: readonly [0.88, 0.05, 1.84];
        readonly at: readonly [0, 0.305, 0];
        readonly c: "joint";
    }, {
        readonly box: readonly [0.88, 0.16, 1.84];
        readonly at: readonly [0, 0.41, 0];
        readonly c: "sheet";
        readonly name: "mattress";
    }, {
        readonly ball: readonly [0.64, 0.14, 0.32];
        readonly at: readonly [0, 0.53, -0.7];
        readonly seg: 8;
        readonly c: "pillow";
        readonly name: "pillow";
    }, {
        readonly box: readonly [0.92, 0.15, 1.26];
        readonly at: readonly [0, 0.445, 0.3];
        readonly c: "blanket";
        readonly name: "blanket";
    }, {
        readonly box: readonly [0.94, 0.04, 0.16];
        readonly at: readonly [0, 0.53, -0.26];
        readonly c: "fold";
    }];
};
export declare const bookshelf: {
    readonly id: "bookshelf";
    readonly about: "Tall bookshelf (1.8 m), four bays of seeded books in four colours, standing, stacked and leaning";
    readonly tags: readonly ["furniture", "wood", "books"];
    readonly palette: {
        readonly wood: "orange";
        readonly frame: "red";
        readonly joint: "plum";
        readonly book: "blue";
        readonly book2: "green";
        readonly book3: "sand";
        readonly book4: "white";
    };
    readonly parts: (_p: Readonly<Record<string, number>>, rng: Rng) => Part[];
};
export declare const cabinet: {
    readonly id: "cabinet";
    readonly about: "Wooden cupboard, 1 m tall: two panelled doors on hinges (pivots door.l, door.r), brass handles, a shelf inside";
    readonly tags: readonly ["furniture", "wood"];
    readonly palette: {
        readonly wood: "orange";
        readonly frame: "red";
        readonly joint: "plum";
        readonly handle: "sand";
    };
    readonly parts: readonly [{
        readonly box: readonly [0.84, 0.08, 0.38];
        readonly at: readonly [0, 0.04, -0.01];
        readonly c: "joint";
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.05, 0.88, 0.44];
            readonly at: readonly [0.425, 0.52, 0];
            readonly c: "frame";
        }];
    }, {
        readonly box: readonly [0.84, 0.86, 0.03];
        readonly at: readonly [0, 0.52, -0.2];
        readonly c: "frame";
    }, {
        readonly box: readonly [0.79, 0.8, 0.01];
        readonly at: readonly [0, 0.52, -0.18];
        readonly c: "joint";
    }, {
        readonly box: readonly [0.83, 0.04, 0.41];
        readonly at: readonly [0, 0.1, 0.01];
        readonly c: "frame";
    }, {
        readonly box: readonly [0.8, 0.03, 0.38];
        readonly at: readonly [0, 0.52, -0.02];
        readonly c: "wood";
    }, {
        readonly box: readonly [0.98, 0.06, 0.5];
        readonly at: readonly [0, 0.99, 0.01];
        readonly c: "wood";
        readonly name: "top";
    }, Part, Part];
};
export declare const wardrobe: {
    readonly id: "wardrobe";
    readonly about: "Tall wardrobe (1.96 m): two doors with long and short raised panels on hinges (pivots door.l, door.r), brass handles, a crown on top; map `wood`";
    readonly tags: readonly ["furniture", "wood", "storage", "town"];
    readonly palette: {
        readonly wood: "orange";
        readonly frame: "red";
        readonly joint: "plum";
        readonly handle: "sand";
    };
    readonly parts: readonly [{
        readonly box: readonly [0.94, 0.1, 0.5];
        readonly at: readonly [0, 0.05, -0.01];
        readonly c: "joint";
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.05, 1.78, 0.56];
            readonly at: readonly [0.475, 0.99, 0];
            readonly c: "frame";
        }];
    }, {
        readonly box: readonly [0.9, 1.76, 0.03];
        readonly at: readonly [0, 0.99, -0.265];
        readonly c: "frame";
    }, {
        readonly box: readonly [0.88, 1.68, 0.01];
        readonly at: readonly [0, 1, -0.245];
        readonly c: "joint";
    }, {
        readonly box: readonly [0.9, 0.04, 0.53];
        readonly at: readonly [0, 0.12, 0.005];
        readonly c: "frame";
    }, {
        readonly box: readonly [0.9, 0.05, 0.53];
        readonly at: readonly [0, 1.855, 0.005];
        readonly c: "frame";
    }, {
        readonly box: readonly [1.1, 0.08, 0.64];
        readonly at: readonly [0, 1.92, 0.01];
        readonly c: "wood";
        readonly name: "top";
    }, Part, Part];
};
export declare const desk: {
    readonly id: "desk";
    readonly about: "Writing desk, 0.76 m tall: a board top over a block of two drawers with brass pulls on the right, two legs and a dark back panel on the left; `length` (m)";
    readonly tags: readonly ["furniture", "wood", "table", "town"];
    readonly palette: {
        readonly wood: "orange";
        readonly frame: "red";
        readonly joint: "plum";
        readonly handle: "sand";
    };
    readonly params: {
        readonly length: readonly [1.2, 1, 1.6];
    };
    readonly anchors: {
        readonly top: readonly [0, 0.76, 0];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
};
export declare const dresser: {
    readonly id: "dresser";
    readonly about: "Chest of drawers: `drawers` (2-5) stacked fronts, 0.3 m each, with a wide brass pull apiece in a dark carcass under a lighter top, on a plinth; `width` (m)";
    readonly tags: readonly ["furniture", "wood", "storage", "town"];
    readonly palette: {
        readonly wood: "orange";
        readonly frame: "red";
        readonly joint: "plum";
        readonly handle: "sand";
    };
    readonly params: {
        readonly drawers: readonly [3, 2, 5];
        readonly width: readonly [0.9, 0.6, 1.2];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
};
export declare const throne: {
    readonly id: "throne";
    readonly about: "Throne, 1.96 m to its crest: a high dark panelled back between red posts under a gold crest and finials, gold-tipped arms, a cushioned seat on a plinth; map `cushion`";
    readonly tags: readonly ["furniture", "wood", "seat", "royal", "town", "dungeon"];
    readonly palette: {
        readonly wood: "red";
        readonly panel: "plum";
        readonly gold: "sand";
        readonly cushion: "blue";
    };
    readonly anchors: {
        readonly seat: readonly [0, 0.56, 0.04];
    };
    readonly parts: readonly [{
        readonly box: readonly [1, 0.1, 0.9];
        readonly at: readonly [0, 0.05, -0.02];
        readonly c: "wood";
        readonly name: "plinth";
    }, {
        readonly box: readonly [0.76, 0.36, 0.62];
        readonly at: readonly [0, 0.28, 0.02];
        readonly c: "panel";
        readonly name: "seat";
    }, {
        readonly box: readonly [0.78, 0.06, 0.02];
        readonly at: readonly [0, 0.42, 0.34];
        readonly c: "gold";
    }, {
        readonly box: readonly [0.66, 0.1, 0.56];
        readonly at: readonly [0, 0.51, 0.04];
        readonly c: "cushion";
        readonly name: "cushion";
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.12, 1.52, 0.12];
            readonly at: readonly [0.38, 0.84, -0.26];
            readonly c: "wood";
        }];
    }, {
        readonly box: readonly [0.64, 1.2, 0.06];
        readonly at: readonly [0, 1.06, -0.28];
        readonly c: "panel";
        readonly name: "back";
    }, {
        readonly box: readonly [0.46, 0.78, 0.06];
        readonly at: readonly [0, 1, -0.22];
        readonly c: "cushion";
    }, {
        readonly slab: [number, number][];
        readonly depth: 0.08;
        readonly at: readonly [0, 1.66, -0.28];
        readonly c: "gold";
        readonly name: "crest";
    }, {
        readonly mirror: readonly [{
            readonly ball: readonly [0.16, 0.16, 0.16];
            readonly at: readonly [0.38, 1.68, -0.26];
            readonly c: "gold";
        }];
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.1, 0.08, 0.64];
            readonly at: readonly [0.38, 0.8, 0.02];
            readonly c: "wood";
        }];
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.1, 0.34, 0.1];
            readonly at: readonly [0.38, 0.59, 0.27];
            readonly c: "wood";
        }];
    }, {
        readonly mirror: readonly [{
            readonly ball: readonly [0.13, 0.13, 0.13];
            readonly at: readonly [0.38, 0.84, 0.34];
            readonly c: "gold";
        }];
    }];
};
export declare const armchair: {
    readonly id: "armchair";
    readonly about: "Upholstered armchair, seat at 0.52 m: a padded back and rolled arms in `cloth` (map it), lighter `cushion`s, a dark skirt and short wooden feet";
    readonly tags: readonly ["furniture", "cloth", "seat", "town"];
    readonly palette: {
        readonly cloth: "blue";
        readonly cushion: "sky";
        readonly trim: "navy";
        readonly wood: "red";
    };
    readonly anchors: {
        readonly seat: readonly [0, 0.52, 0.08];
    };
    readonly parts: readonly [{
        readonly mirror: readonly [{
            readonly mirror: readonly [{
                readonly box: readonly [0.08, 0.08, 0.08];
                readonly at: readonly [0.34, 0.04, 0.32];
                readonly c: "wood";
            }];
            readonly axis: "z";
        }];
    }, {
        readonly box: readonly [0.86, 0.06, 0.8];
        readonly at: readonly [0, 0.11, 0];
        readonly c: "trim";
    }, {
        readonly box: readonly [0.84, 0.3, 0.78];
        readonly at: readonly [0, 0.25, 0];
        readonly c: "cloth";
        readonly name: "base";
    }, {
        readonly box: readonly [0.56, 0.12, 0.6];
        readonly at: readonly [0, 0.46, 0.08];
        readonly c: "cushion";
        readonly name: "seat";
    }, {
        readonly box: readonly [0.84, 0.62, 0.16];
        readonly at: readonly [0, 0.71, -0.31];
        readonly c: "cloth";
        readonly name: "back";
    }, {
        readonly box: readonly [0.56, 0.44, 0.1];
        readonly at: readonly [0, 0.74, -0.17];
        readonly rot: readonly [-8, 0, 0];
        readonly c: "cushion";
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.14, 0.24, 0.62];
            readonly at: readonly [0.35, 0.52, 0.08];
            readonly c: "trim";
        }];
    }, {
        readonly mirror: readonly [{
            readonly cyl: readonly [0.18, 0.64, 0.18];
            readonly at: readonly [0.35, 0.66, 0.08];
            readonly rot: readonly [90, 0, 0];
            readonly seg: 6;
            readonly c: "cloth";
        }];
    }];
};
export declare const rug: {
    readonly id: "rug";
    readonly about: "Rug, 14 mm thick: a `field` inside a `border` (map both), a gold line and a diamond medallion, fringes across the ends of its `length`";
    readonly tags: readonly ["furniture", "cloth", "floor", "town"];
    readonly palette: {
        readonly field: "red";
        readonly border: "navy";
        readonly trim: "sand";
        readonly fringe: "white";
    };
    readonly params: {
        readonly length: readonly [2, 1.2, 3];
        readonly width: readonly [1.4, 0.8, 2];
    };
    readonly collider: "none";
    readonly parts: (p: Readonly<Record<string, number>>) => ({
        mirror: {
            box: [number, number, number];
            at: [number, number, number];
            c: string;
        }[];
        box?: undefined;
        at?: undefined;
        c?: undefined;
        name?: undefined;
        rot?: undefined;
    } | {
        box: [number, number, number];
        at: [number, number, number];
        c: string;
        name: string;
        mirror?: undefined;
        rot?: undefined;
    } | {
        box: [number, number, number];
        at: [number, number, number];
        c: string;
        mirror?: undefined;
        name?: undefined;
        rot?: undefined;
    } | {
        box: [number, number, number];
        at: [number, number, number];
        rot: [number, number, number];
        c: string;
        name: string;
        mirror?: undefined;
    } | {
        box: [number, number, number];
        at: [number, number, number];
        rot: [number, number, number];
        c: string;
        mirror?: undefined;
        name?: undefined;
    })[];
};
export declare const fireplace: {
    readonly id: "fireplace";
    readonly about: "Stone fireplace, its back on a wall at z = 0: coursed jambs, a lintel and a wooden mantel round a sooty firebox of charred logs and glowing embers (seeded); `chimney` (m) raises a stone breast above the mantel";
    readonly tags: readonly ["furniture", "stone", "fire", "light", "town"];
    readonly palette: {
        readonly stone: "mist";
        readonly stone2: "slate";
        readonly mortar: "night";
        readonly soot: "ink";
        readonly wood: "red";
        readonly log: "plum";
        readonly ember: "orange";
        readonly hot: "sand";
    };
    readonly params: {
        readonly chimney: readonly [0.9, 0, 1.4];
    };
    readonly light: {
        readonly at: readonly [0, 0.3, 0.45];
        readonly c: "ember";
        readonly intensity: 2;
        readonly radius: 5;
        readonly flicker: "brazier";
    };
    readonly anchors: {
        readonly mantel: readonly [0, 1.26, 0.3];
    };
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => Part[];
};
export declare const wallShelf: {
    readonly id: "wall-shelf";
    readonly about: "Wall shelf, its back on a wall at z = 0 and its top at 1.4 m: a board on two brackets holding seeded books and corked jars; `width` (m)";
    readonly tags: readonly ["furniture", "wood", "wall", "books", "town"];
    readonly palette: {
        readonly wood: "orange";
        readonly frame: "red";
        readonly jar: "mist";
        readonly cork: "red";
        readonly book: "blue";
        readonly book2: "green";
    };
    readonly params: {
        readonly width: readonly [0.9, 0.5, 1.4];
    };
    readonly floats: true;
    readonly collider: "none";
    readonly anchors: {
        readonly mount: readonly [0, 1.4, 0];
    };
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => Part[];
};
export declare const roundTable: {
    readonly id: "round-table";
    readonly about: "Round table, 0.75 m tall: a ten-sided top over a dark rim on a pedestal and four feet; `d` is its diameter (m)";
    readonly tags: readonly ["furniture", "wood", "table", "town"];
    readonly palette: {
        readonly wood: "orange";
        readonly frame: "red";
        readonly joint: "plum";
    };
    readonly params: {
        readonly d: readonly [1, 0.7, 1.4];
    };
    readonly collider: "cyl";
    readonly anchors: {
        readonly top: readonly [0, 0.75, 0];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
};
export declare const washstand: {
    readonly id: "washstand";
    readonly about: "Washstand, 0.8 m tall: a white basin of water on a board with a splashback, four legs and a low shelf";
    readonly tags: readonly ["furniture", "wood", "water", "town"];
    readonly palette: {
        readonly wood: "orange";
        readonly frame: "red";
        readonly joint: "plum";
        readonly basin: "white";
        readonly water: "sky";
    };
    readonly parts: readonly [{
        readonly box: readonly [0.64, 0.04, 0.46];
        readonly at: readonly [0, 0.78, 0];
        readonly c: "wood";
        readonly name: "top";
    }, {
        readonly box: readonly [0.64, 0.18, 0.04];
        readonly at: readonly [0, 0.89, -0.21];
        readonly c: "frame";
        readonly name: "splashback";
    }, {
        readonly mirror: readonly [{
            readonly mirror: readonly [{
                readonly box: readonly [0.06, 0.76, 0.06];
                readonly at: readonly [0.27, 0.38, 0.18];
                readonly c: "frame";
            }];
            readonly axis: "z";
        }];
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.48, 0.08, 0.03];
            readonly at: readonly [0, 0.72, 0.18];
            readonly c: "joint";
        }];
        readonly axis: "z";
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.03, 0.08, 0.3];
            readonly at: readonly [0.27, 0.72, 0];
            readonly c: "joint";
        }];
    }, {
        readonly box: readonly [0.54, 0.03, 0.36];
        readonly at: readonly [0, 0.2, 0];
        readonly c: "wood";
    }, {
        readonly lathe: [number, number][];
        readonly at: readonly [0, 0.8, 0.03];
        readonly seg: 10;
        readonly c: "basin";
        readonly name: "basin";
    }, {
        readonly cyl: readonly [0.27, 0.02, 0.27];
        readonly at: readonly [0, 0.885, 0.03];
        readonly seg: 10;
        readonly c: "water";
    }];
};
export declare const cradle: {
    readonly id: "cradle";
    readonly about: "Wooden cradle, head at -X: its ends stand on two dark curved rockers wider than the body; an arched headboard, low sides, a mattress, a pillow and a blue blanket turned down";
    readonly tags: readonly ["furniture", "wood", "cloth", "town"];
    readonly palette: {
        readonly wood: "orange";
        readonly frame: "red";
        readonly joint: "plum";
        readonly sheet: "mist";
        readonly pillow: "white";
        readonly blanket: "blue";
        readonly fold: "sky";
    };
    readonly parts: readonly [{
        readonly mirror: readonly [{
            readonly slab: [number, number][];
            readonly depth: 0.06;
            readonly at: readonly [0.415, 0, 0];
            readonly rot: readonly [0, 90, 0];
            readonly c: "joint";
            readonly name: "rocker";
        }];
    }, {
        readonly slab: [number, number][];
        readonly depth: 0.05;
        readonly at: readonly [-0.415, 0.2, 0];
        readonly rot: readonly [0, 90, 0];
        readonly c: "frame";
        readonly name: "headboard";
    }, {
        readonly box: readonly [0.05, 0.38, 0.5];
        readonly at: readonly [0.415, 0.39, 0];
        readonly c: "frame";
    }, {
        readonly box: readonly [0.78, 0.025, 0.44];
        readonly at: readonly [0, 0.2175, 0];
        readonly c: "joint";
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.78, 0.3, 0.04];
            readonly at: readonly [0, 0.38, 0.23];
            readonly c: "wood";
        }];
        readonly axis: "z";
    }, {
        readonly box: readonly [0.74, 0.12, 0.38];
        readonly at: readonly [0, 0.29, 0];
        readonly c: "sheet";
        readonly name: "mattress";
    }, {
        readonly ball: readonly [0.18, 0.08, 0.28];
        readonly at: readonly [-0.27, 0.39, 0];
        readonly seg: 8;
        readonly c: "pillow";
        readonly name: "pillow";
    }, {
        readonly box: readonly [0.44, 0.05, 0.39];
        readonly at: readonly [0.13, 0.375, 0];
        readonly c: "blanket";
        readonly name: "blanket";
    }, {
        readonly box: readonly [0.07, 0.06, 0.4];
        readonly at: readonly [-0.12, 0.383, 0];
        readonly c: "fold";
    }];
};
export declare const foldingScreen: {
    readonly id: "folding-screen";
    readonly about: "Folding screen of three wooden panels 1.7 m tall, hinged in a zigzag: `fold` turns the outer two (degrees; 0 stands it flat)";
    readonly tags: readonly ["furniture", "wood", "town"];
    readonly palette: {
        readonly wood: "orange";
        readonly frame: "red";
        readonly joint: "plum";
    };
    readonly params: {
        readonly fold: readonly [35, 0, 80];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => ({
        name: string;
        at: [number, number, number];
        group: Part[];
        rot?: undefined;
    } | {
        name: string;
        at: [number, number, number];
        rot: [number, number, number];
        group: Part[];
    })[];
};
export declare const FURNITURE: ({
    readonly id: "table";
    readonly about: "Plank-top table, 0.75 m tall, on four square legs with a dark apron under the top";
    readonly tags: readonly ["furniture", "wood"];
    readonly palette: {
        readonly wood: "orange";
        readonly frame: "red";
        readonly joint: "plum";
    };
    readonly params: {
        readonly length: readonly [1.4, 0.8, 2.4];
        readonly width: readonly [0.8, 0.6, 1.2];
    };
    readonly anchors: {
        readonly top: readonly [0, 0.75, 0];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
} | {
    readonly id: "chair";
    readonly about: "Wooden chair, seat at 0.45 m on four legs, the back legs rising into a two-rail back";
    readonly tags: readonly ["furniture", "wood"];
    readonly palette: {
        readonly wood: "orange";
        readonly frame: "red";
        readonly joint: "plum";
    };
    readonly anchors: {
        readonly seat: readonly [0, 0.45, 0];
    };
    readonly parts: readonly [{
        readonly box: readonly [0.46, 0.05, 0.44];
        readonly at: readonly [0, 0.425, 0];
        readonly c: "wood";
        readonly name: "seat";
    }, {
        readonly box: readonly [0.4, 0.07, 0.38];
        readonly at: readonly [0, 0.365, 0];
        readonly c: "joint";
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.06, 0.42, 0.06];
            readonly at: readonly [0.18, 0.21, 0.17];
            readonly c: "frame";
        }];
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.06, 0.98, 0.06];
            readonly at: readonly [0.18, 0.49, -0.18];
            readonly c: "frame";
        }];
    }, {
        readonly box: readonly [0.4, 0.14, 0.05];
        readonly at: readonly [0, 0.87, -0.18];
        readonly c: "wood";
        readonly name: "back";
    }, {
        readonly box: readonly [0.3, 0.1, 0.04];
        readonly at: readonly [0, 0.66, -0.18];
        readonly c: "wood";
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.05, 0.06, 0.34];
            readonly at: readonly [0.18, 0.14, -0.005];
            readonly c: "joint";
        }];
    }];
} | {
    readonly id: "bench";
    readonly about: "Backless plank bench, seat at 0.45 m on two notched board trestles and a dark stretcher";
    readonly tags: readonly ["furniture", "wood"];
    readonly palette: {
        readonly wood: "orange";
        readonly frame: "red";
        readonly joint: "plum";
    };
    readonly params: {
        readonly length: readonly [1.4, 0.8, 2.4];
    };
    readonly anchors: {
        readonly seat: readonly [0, 0.45, 0];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
} | {
    readonly id: "stool";
    readonly about: "Round stool: an eight-sided seat at 0.5 m on four splayed legs and a dark ring";
    readonly tags: readonly ["furniture", "wood"];
    readonly palette: {
        readonly wood: "orange";
        readonly frame: "red";
        readonly joint: "plum";
    };
    readonly collider: "cyl";
    readonly anchors: {
        readonly seat: readonly [0, 0.5, 0];
    };
    readonly parts: readonly [{
        readonly cyl: readonly [0.4, 0.06, 0.4];
        readonly at: readonly [0, 0.47, 0];
        readonly seg: 8;
        readonly c: "wood";
        readonly name: "seat";
    }, {
        readonly cyl: readonly [0.3, 0.04, 0.3];
        readonly at: readonly [0, 0.42, 0];
        readonly seg: 8;
        readonly c: "joint";
    }, ...Part[], {
        readonly torus: readonly [0.38, 0.06, 0.38];
        readonly at: readonly [0, 0.17, 0];
        readonly seg: 8;
        readonly c: "joint";
    }];
} | {
    readonly id: "bed";
    readonly about: "Single bed (1 x 2 m): wooden frame and headboard, a mattress, a white pillow and a blue blanket turned down";
    readonly tags: readonly ["furniture", "wood", "cloth"];
    readonly palette: {
        readonly wood: "orange";
        readonly frame: "red";
        readonly joint: "plum";
        readonly sheet: "mist";
        readonly pillow: "white";
        readonly blanket: "blue";
        readonly fold: "sky";
    };
    readonly parts: readonly [{
        readonly mirror: readonly [{
            readonly box: readonly [0.08, 1, 0.08];
            readonly at: readonly [0.47, 0.5, -0.96];
            readonly c: "frame";
        }];
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.08, 0.55, 0.08];
            readonly at: readonly [0.47, 0.275, 0.96];
            readonly c: "frame";
        }];
    }, {
        readonly box: readonly [0.86, 0.43, 0.05];
        readonly at: readonly [0, 0.645, -0.96];
        readonly c: "wood";
        readonly name: "headboard";
    }, {
        readonly box: readonly [0.86, 0.1, 0.06];
        readonly at: readonly [0, 0.91, -0.96];
        readonly c: "frame";
    }, {
        readonly box: readonly [0.86, 0.16, 0.05];
        readonly at: readonly [0, 0.42, 0.96];
        readonly c: "wood";
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.05, 0.14, 1.84];
            readonly at: readonly [0.465, 0.29, 0];
            readonly c: "wood";
        }];
    }, {
        readonly box: readonly [0.88, 0.05, 1.84];
        readonly at: readonly [0, 0.305, 0];
        readonly c: "joint";
    }, {
        readonly box: readonly [0.88, 0.16, 1.84];
        readonly at: readonly [0, 0.41, 0];
        readonly c: "sheet";
        readonly name: "mattress";
    }, {
        readonly ball: readonly [0.64, 0.14, 0.32];
        readonly at: readonly [0, 0.53, -0.7];
        readonly seg: 8;
        readonly c: "pillow";
        readonly name: "pillow";
    }, {
        readonly box: readonly [0.92, 0.15, 1.26];
        readonly at: readonly [0, 0.445, 0.3];
        readonly c: "blanket";
        readonly name: "blanket";
    }, {
        readonly box: readonly [0.94, 0.04, 0.16];
        readonly at: readonly [0, 0.53, -0.26];
        readonly c: "fold";
    }];
} | {
    readonly id: "bookshelf";
    readonly about: "Tall bookshelf (1.8 m), four bays of seeded books in four colours, standing, stacked and leaning";
    readonly tags: readonly ["furniture", "wood", "books"];
    readonly palette: {
        readonly wood: "orange";
        readonly frame: "red";
        readonly joint: "plum";
        readonly book: "blue";
        readonly book2: "green";
        readonly book3: "sand";
        readonly book4: "white";
    };
    readonly parts: (_p: Readonly<Record<string, number>>, rng: Rng) => Part[];
} | {
    readonly id: "cabinet";
    readonly about: "Wooden cupboard, 1 m tall: two panelled doors on hinges (pivots door.l, door.r), brass handles, a shelf inside";
    readonly tags: readonly ["furniture", "wood"];
    readonly palette: {
        readonly wood: "orange";
        readonly frame: "red";
        readonly joint: "plum";
        readonly handle: "sand";
    };
    readonly parts: readonly [{
        readonly box: readonly [0.84, 0.08, 0.38];
        readonly at: readonly [0, 0.04, -0.01];
        readonly c: "joint";
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.05, 0.88, 0.44];
            readonly at: readonly [0.425, 0.52, 0];
            readonly c: "frame";
        }];
    }, {
        readonly box: readonly [0.84, 0.86, 0.03];
        readonly at: readonly [0, 0.52, -0.2];
        readonly c: "frame";
    }, {
        readonly box: readonly [0.79, 0.8, 0.01];
        readonly at: readonly [0, 0.52, -0.18];
        readonly c: "joint";
    }, {
        readonly box: readonly [0.83, 0.04, 0.41];
        readonly at: readonly [0, 0.1, 0.01];
        readonly c: "frame";
    }, {
        readonly box: readonly [0.8, 0.03, 0.38];
        readonly at: readonly [0, 0.52, -0.02];
        readonly c: "wood";
    }, {
        readonly box: readonly [0.98, 0.06, 0.5];
        readonly at: readonly [0, 0.99, 0.01];
        readonly c: "wood";
        readonly name: "top";
    }, Part, Part];
} | {
    readonly id: "wardrobe";
    readonly about: "Tall wardrobe (1.96 m): two doors with long and short raised panels on hinges (pivots door.l, door.r), brass handles, a crown on top; map `wood`";
    readonly tags: readonly ["furniture", "wood", "storage", "town"];
    readonly palette: {
        readonly wood: "orange";
        readonly frame: "red";
        readonly joint: "plum";
        readonly handle: "sand";
    };
    readonly parts: readonly [{
        readonly box: readonly [0.94, 0.1, 0.5];
        readonly at: readonly [0, 0.05, -0.01];
        readonly c: "joint";
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.05, 1.78, 0.56];
            readonly at: readonly [0.475, 0.99, 0];
            readonly c: "frame";
        }];
    }, {
        readonly box: readonly [0.9, 1.76, 0.03];
        readonly at: readonly [0, 0.99, -0.265];
        readonly c: "frame";
    }, {
        readonly box: readonly [0.88, 1.68, 0.01];
        readonly at: readonly [0, 1, -0.245];
        readonly c: "joint";
    }, {
        readonly box: readonly [0.9, 0.04, 0.53];
        readonly at: readonly [0, 0.12, 0.005];
        readonly c: "frame";
    }, {
        readonly box: readonly [0.9, 0.05, 0.53];
        readonly at: readonly [0, 1.855, 0.005];
        readonly c: "frame";
    }, {
        readonly box: readonly [1.1, 0.08, 0.64];
        readonly at: readonly [0, 1.92, 0.01];
        readonly c: "wood";
        readonly name: "top";
    }, Part, Part];
} | {
    readonly id: "desk";
    readonly about: "Writing desk, 0.76 m tall: a board top over a block of two drawers with brass pulls on the right, two legs and a dark back panel on the left; `length` (m)";
    readonly tags: readonly ["furniture", "wood", "table", "town"];
    readonly palette: {
        readonly wood: "orange";
        readonly frame: "red";
        readonly joint: "plum";
        readonly handle: "sand";
    };
    readonly params: {
        readonly length: readonly [1.2, 1, 1.6];
    };
    readonly anchors: {
        readonly top: readonly [0, 0.76, 0];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
} | {
    readonly id: "dresser";
    readonly about: "Chest of drawers: `drawers` (2-5) stacked fronts, 0.3 m each, with a wide brass pull apiece in a dark carcass under a lighter top, on a plinth; `width` (m)";
    readonly tags: readonly ["furniture", "wood", "storage", "town"];
    readonly palette: {
        readonly wood: "orange";
        readonly frame: "red";
        readonly joint: "plum";
        readonly handle: "sand";
    };
    readonly params: {
        readonly drawers: readonly [3, 2, 5];
        readonly width: readonly [0.9, 0.6, 1.2];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
} | {
    readonly id: "throne";
    readonly about: "Throne, 1.96 m to its crest: a high dark panelled back between red posts under a gold crest and finials, gold-tipped arms, a cushioned seat on a plinth; map `cushion`";
    readonly tags: readonly ["furniture", "wood", "seat", "royal", "town", "dungeon"];
    readonly palette: {
        readonly wood: "red";
        readonly panel: "plum";
        readonly gold: "sand";
        readonly cushion: "blue";
    };
    readonly anchors: {
        readonly seat: readonly [0, 0.56, 0.04];
    };
    readonly parts: readonly [{
        readonly box: readonly [1, 0.1, 0.9];
        readonly at: readonly [0, 0.05, -0.02];
        readonly c: "wood";
        readonly name: "plinth";
    }, {
        readonly box: readonly [0.76, 0.36, 0.62];
        readonly at: readonly [0, 0.28, 0.02];
        readonly c: "panel";
        readonly name: "seat";
    }, {
        readonly box: readonly [0.78, 0.06, 0.02];
        readonly at: readonly [0, 0.42, 0.34];
        readonly c: "gold";
    }, {
        readonly box: readonly [0.66, 0.1, 0.56];
        readonly at: readonly [0, 0.51, 0.04];
        readonly c: "cushion";
        readonly name: "cushion";
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.12, 1.52, 0.12];
            readonly at: readonly [0.38, 0.84, -0.26];
            readonly c: "wood";
        }];
    }, {
        readonly box: readonly [0.64, 1.2, 0.06];
        readonly at: readonly [0, 1.06, -0.28];
        readonly c: "panel";
        readonly name: "back";
    }, {
        readonly box: readonly [0.46, 0.78, 0.06];
        readonly at: readonly [0, 1, -0.22];
        readonly c: "cushion";
    }, {
        readonly slab: [number, number][];
        readonly depth: 0.08;
        readonly at: readonly [0, 1.66, -0.28];
        readonly c: "gold";
        readonly name: "crest";
    }, {
        readonly mirror: readonly [{
            readonly ball: readonly [0.16, 0.16, 0.16];
            readonly at: readonly [0.38, 1.68, -0.26];
            readonly c: "gold";
        }];
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.1, 0.08, 0.64];
            readonly at: readonly [0.38, 0.8, 0.02];
            readonly c: "wood";
        }];
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.1, 0.34, 0.1];
            readonly at: readonly [0.38, 0.59, 0.27];
            readonly c: "wood";
        }];
    }, {
        readonly mirror: readonly [{
            readonly ball: readonly [0.13, 0.13, 0.13];
            readonly at: readonly [0.38, 0.84, 0.34];
            readonly c: "gold";
        }];
    }];
} | {
    readonly id: "armchair";
    readonly about: "Upholstered armchair, seat at 0.52 m: a padded back and rolled arms in `cloth` (map it), lighter `cushion`s, a dark skirt and short wooden feet";
    readonly tags: readonly ["furniture", "cloth", "seat", "town"];
    readonly palette: {
        readonly cloth: "blue";
        readonly cushion: "sky";
        readonly trim: "navy";
        readonly wood: "red";
    };
    readonly anchors: {
        readonly seat: readonly [0, 0.52, 0.08];
    };
    readonly parts: readonly [{
        readonly mirror: readonly [{
            readonly mirror: readonly [{
                readonly box: readonly [0.08, 0.08, 0.08];
                readonly at: readonly [0.34, 0.04, 0.32];
                readonly c: "wood";
            }];
            readonly axis: "z";
        }];
    }, {
        readonly box: readonly [0.86, 0.06, 0.8];
        readonly at: readonly [0, 0.11, 0];
        readonly c: "trim";
    }, {
        readonly box: readonly [0.84, 0.3, 0.78];
        readonly at: readonly [0, 0.25, 0];
        readonly c: "cloth";
        readonly name: "base";
    }, {
        readonly box: readonly [0.56, 0.12, 0.6];
        readonly at: readonly [0, 0.46, 0.08];
        readonly c: "cushion";
        readonly name: "seat";
    }, {
        readonly box: readonly [0.84, 0.62, 0.16];
        readonly at: readonly [0, 0.71, -0.31];
        readonly c: "cloth";
        readonly name: "back";
    }, {
        readonly box: readonly [0.56, 0.44, 0.1];
        readonly at: readonly [0, 0.74, -0.17];
        readonly rot: readonly [-8, 0, 0];
        readonly c: "cushion";
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.14, 0.24, 0.62];
            readonly at: readonly [0.35, 0.52, 0.08];
            readonly c: "trim";
        }];
    }, {
        readonly mirror: readonly [{
            readonly cyl: readonly [0.18, 0.64, 0.18];
            readonly at: readonly [0.35, 0.66, 0.08];
            readonly rot: readonly [90, 0, 0];
            readonly seg: 6;
            readonly c: "cloth";
        }];
    }];
} | {
    readonly id: "rug";
    readonly about: "Rug, 14 mm thick: a `field` inside a `border` (map both), a gold line and a diamond medallion, fringes across the ends of its `length`";
    readonly tags: readonly ["furniture", "cloth", "floor", "town"];
    readonly palette: {
        readonly field: "red";
        readonly border: "navy";
        readonly trim: "sand";
        readonly fringe: "white";
    };
    readonly params: {
        readonly length: readonly [2, 1.2, 3];
        readonly width: readonly [1.4, 0.8, 2];
    };
    readonly collider: "none";
    readonly parts: (p: Readonly<Record<string, number>>) => ({
        mirror: {
            box: [number, number, number];
            at: [number, number, number];
            c: string;
        }[];
        box?: undefined;
        at?: undefined;
        c?: undefined;
        name?: undefined;
        rot?: undefined;
    } | {
        box: [number, number, number];
        at: [number, number, number];
        c: string;
        name: string;
        mirror?: undefined;
        rot?: undefined;
    } | {
        box: [number, number, number];
        at: [number, number, number];
        c: string;
        mirror?: undefined;
        name?: undefined;
        rot?: undefined;
    } | {
        box: [number, number, number];
        at: [number, number, number];
        rot: [number, number, number];
        c: string;
        name: string;
        mirror?: undefined;
    } | {
        box: [number, number, number];
        at: [number, number, number];
        rot: [number, number, number];
        c: string;
        mirror?: undefined;
        name?: undefined;
    })[];
} | {
    readonly id: "fireplace";
    readonly about: "Stone fireplace, its back on a wall at z = 0: coursed jambs, a lintel and a wooden mantel round a sooty firebox of charred logs and glowing embers (seeded); `chimney` (m) raises a stone breast above the mantel";
    readonly tags: readonly ["furniture", "stone", "fire", "light", "town"];
    readonly palette: {
        readonly stone: "mist";
        readonly stone2: "slate";
        readonly mortar: "night";
        readonly soot: "ink";
        readonly wood: "red";
        readonly log: "plum";
        readonly ember: "orange";
        readonly hot: "sand";
    };
    readonly params: {
        readonly chimney: readonly [0.9, 0, 1.4];
    };
    readonly light: {
        readonly at: readonly [0, 0.3, 0.45];
        readonly c: "ember";
        readonly intensity: 2;
        readonly radius: 5;
        readonly flicker: "brazier";
    };
    readonly anchors: {
        readonly mantel: readonly [0, 1.26, 0.3];
    };
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => Part[];
} | {
    readonly id: "wall-shelf";
    readonly about: "Wall shelf, its back on a wall at z = 0 and its top at 1.4 m: a board on two brackets holding seeded books and corked jars; `width` (m)";
    readonly tags: readonly ["furniture", "wood", "wall", "books", "town"];
    readonly palette: {
        readonly wood: "orange";
        readonly frame: "red";
        readonly jar: "mist";
        readonly cork: "red";
        readonly book: "blue";
        readonly book2: "green";
    };
    readonly params: {
        readonly width: readonly [0.9, 0.5, 1.4];
    };
    readonly floats: true;
    readonly collider: "none";
    readonly anchors: {
        readonly mount: readonly [0, 1.4, 0];
    };
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => Part[];
} | {
    readonly id: "round-table";
    readonly about: "Round table, 0.75 m tall: a ten-sided top over a dark rim on a pedestal and four feet; `d` is its diameter (m)";
    readonly tags: readonly ["furniture", "wood", "table", "town"];
    readonly palette: {
        readonly wood: "orange";
        readonly frame: "red";
        readonly joint: "plum";
    };
    readonly params: {
        readonly d: readonly [1, 0.7, 1.4];
    };
    readonly collider: "cyl";
    readonly anchors: {
        readonly top: readonly [0, 0.75, 0];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
} | {
    readonly id: "washstand";
    readonly about: "Washstand, 0.8 m tall: a white basin of water on a board with a splashback, four legs and a low shelf";
    readonly tags: readonly ["furniture", "wood", "water", "town"];
    readonly palette: {
        readonly wood: "orange";
        readonly frame: "red";
        readonly joint: "plum";
        readonly basin: "white";
        readonly water: "sky";
    };
    readonly parts: readonly [{
        readonly box: readonly [0.64, 0.04, 0.46];
        readonly at: readonly [0, 0.78, 0];
        readonly c: "wood";
        readonly name: "top";
    }, {
        readonly box: readonly [0.64, 0.18, 0.04];
        readonly at: readonly [0, 0.89, -0.21];
        readonly c: "frame";
        readonly name: "splashback";
    }, {
        readonly mirror: readonly [{
            readonly mirror: readonly [{
                readonly box: readonly [0.06, 0.76, 0.06];
                readonly at: readonly [0.27, 0.38, 0.18];
                readonly c: "frame";
            }];
            readonly axis: "z";
        }];
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.48, 0.08, 0.03];
            readonly at: readonly [0, 0.72, 0.18];
            readonly c: "joint";
        }];
        readonly axis: "z";
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.03, 0.08, 0.3];
            readonly at: readonly [0.27, 0.72, 0];
            readonly c: "joint";
        }];
    }, {
        readonly box: readonly [0.54, 0.03, 0.36];
        readonly at: readonly [0, 0.2, 0];
        readonly c: "wood";
    }, {
        readonly lathe: [number, number][];
        readonly at: readonly [0, 0.8, 0.03];
        readonly seg: 10;
        readonly c: "basin";
        readonly name: "basin";
    }, {
        readonly cyl: readonly [0.27, 0.02, 0.27];
        readonly at: readonly [0, 0.885, 0.03];
        readonly seg: 10;
        readonly c: "water";
    }];
} | {
    readonly id: "cradle";
    readonly about: "Wooden cradle, head at -X: its ends stand on two dark curved rockers wider than the body; an arched headboard, low sides, a mattress, a pillow and a blue blanket turned down";
    readonly tags: readonly ["furniture", "wood", "cloth", "town"];
    readonly palette: {
        readonly wood: "orange";
        readonly frame: "red";
        readonly joint: "plum";
        readonly sheet: "mist";
        readonly pillow: "white";
        readonly blanket: "blue";
        readonly fold: "sky";
    };
    readonly parts: readonly [{
        readonly mirror: readonly [{
            readonly slab: [number, number][];
            readonly depth: 0.06;
            readonly at: readonly [0.415, 0, 0];
            readonly rot: readonly [0, 90, 0];
            readonly c: "joint";
            readonly name: "rocker";
        }];
    }, {
        readonly slab: [number, number][];
        readonly depth: 0.05;
        readonly at: readonly [-0.415, 0.2, 0];
        readonly rot: readonly [0, 90, 0];
        readonly c: "frame";
        readonly name: "headboard";
    }, {
        readonly box: readonly [0.05, 0.38, 0.5];
        readonly at: readonly [0.415, 0.39, 0];
        readonly c: "frame";
    }, {
        readonly box: readonly [0.78, 0.025, 0.44];
        readonly at: readonly [0, 0.2175, 0];
        readonly c: "joint";
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.78, 0.3, 0.04];
            readonly at: readonly [0, 0.38, 0.23];
            readonly c: "wood";
        }];
        readonly axis: "z";
    }, {
        readonly box: readonly [0.74, 0.12, 0.38];
        readonly at: readonly [0, 0.29, 0];
        readonly c: "sheet";
        readonly name: "mattress";
    }, {
        readonly ball: readonly [0.18, 0.08, 0.28];
        readonly at: readonly [-0.27, 0.39, 0];
        readonly seg: 8;
        readonly c: "pillow";
        readonly name: "pillow";
    }, {
        readonly box: readonly [0.44, 0.05, 0.39];
        readonly at: readonly [0.13, 0.375, 0];
        readonly c: "blanket";
        readonly name: "blanket";
    }, {
        readonly box: readonly [0.07, 0.06, 0.4];
        readonly at: readonly [-0.12, 0.383, 0];
        readonly c: "fold";
    }];
} | {
    readonly id: "folding-screen";
    readonly about: "Folding screen of three wooden panels 1.7 m tall, hinged in a zigzag: `fold` turns the outer two (degrees; 0 stands it flat)";
    readonly tags: readonly ["furniture", "wood", "town"];
    readonly palette: {
        readonly wood: "orange";
        readonly frame: "red";
        readonly joint: "plum";
    };
    readonly params: {
        readonly fold: readonly [35, 0, 80];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => ({
        name: string;
        at: [number, number, number];
        group: Part[];
        rot?: undefined;
    } | {
        name: string;
        at: [number, number, number];
        rot: [number, number, number];
        group: Part[];
    })[];
})[];
