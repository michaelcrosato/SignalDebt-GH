import type { Part } from '../types';
export declare const statue: {
    readonly id: "statue";
    readonly about: "Robed stone figure on a plinth, sword point-down";
    readonly tags: readonly ["stone", "monument"];
    readonly palette: {
        readonly stone: "mist";
        readonly dark: "slate";
        readonly trim: "sand";
    };
    readonly parts: readonly [{
        readonly box: readonly [0.9, 0.28, 0.9];
        readonly at: readonly [0, 0.14, 0];
        readonly c: "dark";
    }, {
        readonly box: readonly [0.98, 0.08, 0.98];
        readonly at: readonly [0, 0.32, 0];
        readonly c: "trim";
    }, {
        readonly lathe: readonly [readonly [0, 0], readonly [0.3, 0], readonly [0.27, 0.2], readonly [0.19, 0.72], readonly [0.2, 0.92], readonly [0.28, 1.04], readonly [0.11, 1.12], readonly [0, 1.12]];
        readonly at: readonly [0, 0.36, 0];
        readonly c: "stone";
    }, {
        readonly ball: readonly [0.24, 0.28, 0.25];
        readonly at: readonly [0, 1.6, 0.01];
        readonly c: "stone";
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.11, 0.4, 0.12];
            readonly at: readonly [0.2, 1.2, 0.12];
            readonly rot: readonly [-38, 0, 12];
            readonly c: "dark";
        }];
    }, {
        readonly name: "sword";
        readonly at: readonly [0, 0.36, 0.34];
        readonly group: readonly [{
            readonly slab: readonly [readonly [-0.05, 0.06], readonly [0, 0], readonly [0.05, 0.06], readonly [0.05, 0.6], readonly [-0.05, 0.6]];
            readonly depth: 0.03;
            readonly c: "stone";
        }, {
            readonly box: readonly [0.3, 0.05, 0.06];
            readonly at: readonly [0, 0.62, 0];
            readonly c: "trim";
        }, {
            readonly cyl: readonly [0.06, 0.12, 0.06];
            readonly at: readonly [0, 0.705, 0];
            readonly seg: 6;
            readonly c: "stone";
        }, {
            readonly ball: readonly [0.08, 0.08, 0.08];
            readonly at: readonly [0, 0.8, 0];
            readonly c: "trim";
        }];
    }];
};
export declare const well: {
    readonly id: "well";
    readonly about: "Stone well with water, a winch and a gable roof";
    readonly tags: readonly ["town", "stone", "water"];
    readonly palette: {
        readonly stone: "mist";
        readonly dark: "slate";
        readonly wood: "orange";
        readonly roof: "red";
        readonly water: "blue";
    };
    readonly parts: readonly [...Part[], {
        readonly cyl: readonly [1.1, 0.05, 1.1];
        readonly at: readonly [0, 0.3, 0];
        readonly seg: 10;
        readonly c: "water";
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.1, 1.5, 0.1];
            readonly at: readonly [0.62, 1.05, 0];
            readonly c: "wood";
        }];
    }, {
        readonly cyl: readonly [0.12, 1.4, 0.12];
        readonly at: readonly [0, 1.55, 0];
        readonly rot: readonly [0, 0, 90];
        readonly seg: 6;
        readonly c: "wood";
    }, {
        readonly cyl: readonly [0.06, 0.7, 0.06];
        readonly at: readonly [0, 1.15, 0];
        readonly seg: 4;
        readonly c: "dark";
    }, {
        readonly cyl: readonly [0.2, 0.16, 0.2];
        readonly at: readonly [0, 0.76, 0];
        readonly top: 1.2;
        readonly c: "wood";
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.86, 0.06, 1.1];
            readonly at: readonly [0.33, 2, 0];
            readonly rot: readonly [0, 0, -38];
            readonly c: "roof";
        }];
    }];
};
export declare const marketStall: {
    readonly id: "market-stall";
    readonly about: "Market stall with a striped awning, crates and a barrel";
    readonly tags: readonly ["town", "market"];
    readonly palette: {
        readonly wood: "orange";
        readonly cloth: "red";
        readonly cloth2: "white";
        readonly top: "sand";
    };
    readonly parts: readonly [{
        readonly box: readonly [1.8, 0.08, 0.8];
        readonly at: readonly [0, 0.9, 0];
        readonly c: "top";
    }, {
        readonly mirror: readonly [{
            readonly mirror: readonly [{
                readonly box: readonly [0.08, 0.86, 0.08];
                readonly at: readonly [0.8, 0.43, 0.32];
                readonly c: "wood";
            }];
            readonly axis: "z";
        }];
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.07, 1.3, 0.07];
            readonly at: readonly [0.86, 1.55, -0.36];
            readonly c: "wood";
        }];
    }, ...Part[], {
        readonly use: "barrel";
        readonly at: readonly [1.25, 0, 0.1];
    }, {
        readonly use: "crate";
        readonly at: readonly [-1.35, 0, 0.15];
        readonly rot: readonly [0, 20, 0];
    }, {
        readonly use: "crate";
        readonly at: readonly [-1.3, 0.72, 0.1];
        readonly rot: readonly [0, -10, 0];
        readonly scale: 0.8;
    }];
};
export declare const arch: {
    readonly id: "arch";
    readonly about: "Stone arch of voussoirs in two shades over dark mortar; `piers` (m) stands it on two coursed stone piers that tall, 0 puts its feet on y = 0";
    readonly tags: readonly ["stone", "building"];
    readonly palette: {
        readonly stone: "mist";
        readonly stone2: "slate";
        readonly mortar: "night";
    };
    readonly collider: "parts";
    readonly params: {
        readonly span: readonly [2, 0.8, 5];
        readonly ring: readonly [0.42, 0.2, 0.8];
        readonly depth: readonly [0.6, 0.2, 1.5];
        readonly blocks: readonly [9, 5, 15];
        readonly piers: readonly [0, 0, 4];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
};
export declare const brickWall: {
    readonly id: "brick-wall";
    readonly about: "A stretch of brick wall (the bricks texture, 0.5 m courses at the default texel) under a stone coping";
    readonly tags: readonly ["town", "wall", "stone", "textured"];
    readonly palette: {
        readonly cap: "mist";
    };
    readonly params: {
        readonly length: readonly [2, 0.5, 6];
        readonly height: readonly [1.5, 0.5, 3];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => ({
        box: [number, number, number];
        at: [number, number, number];
        tex: string;
        name: string;
        c?: undefined;
    } | {
        box: [number, number, number];
        at: [number, number, number];
        c: string;
        name: string;
        tex?: undefined;
    })[];
};
export declare const fountain: {
    readonly id: "fountain";
    readonly about: "Round stone fountain: a basin wall under a dark coping round the pool, a centre column with an upper bowl and a jet; map `water` and `spray`; `r` is the basin's radius";
    readonly tags: readonly ["town", "stone", "water"];
    readonly palette: {
        readonly stone: "mist";
        readonly trim: "slate";
        readonly water: "blue";
        readonly spray: "sky";
    };
    readonly params: {
        readonly r: readonly [1.1, 0.8, 1.6];
    };
    readonly collider: "cyl";
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
};
export declare const haystack: {
    readonly id: "haystack";
    readonly about: "Beehive haystack bound by a rope, darker loose hay round its foot and a straw tuft on its crown (seeded); `h` is its height";
    readonly tags: readonly ["town", "farm", "hay"];
    readonly palette: {
        readonly hay: "sand";
        readonly hay2: "orange";
        readonly rope: "red";
    };
    readonly params: {
        readonly h: readonly [1.6, 1, 2.4];
    };
    readonly collider: "cyl";
    readonly parts: (p: Readonly<Record<string, number>>, rng: import("../..").Rng) => Part[];
};
export declare const hitchingPost: {
    readonly id: "hitching-post";
    readonly about: "Hitching rail: a round log rail on two square posts, iron tie rings hanging from it; `length` along x";
    readonly tags: readonly ["town", "wood", "farm"];
    readonly palette: {
        readonly post: "red";
        readonly rail: "orange";
        readonly iron: "mist";
    };
    readonly params: {
        readonly length: readonly [2, 1.2, 3];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => ({
        mirror: {
            box: [number, number, number];
            at: [number, number, number];
            c: string;
        }[];
        cyl?: undefined;
        at?: undefined;
        rot?: undefined;
        seg?: undefined;
        c?: undefined;
        name?: undefined;
    } | {
        mirror: {
            box: [number, number, number];
            at: [number, number, number];
            rot: [number, number, number];
            c: string;
        }[];
        cyl?: undefined;
        at?: undefined;
        rot?: undefined;
        seg?: undefined;
        c?: undefined;
        name?: undefined;
    } | {
        cyl: [number, number, number];
        at: [number, number, number];
        rot: [number, number, number];
        seg: number;
        c: string;
        name: string;
        mirror?: undefined;
    } | {
        mirror: {
            torus: [number, number, number];
            at: [number, number, number];
            rot: [number, number, number];
            seg: number;
            c: string;
            name: string;
        }[];
        cyl?: undefined;
        at?: undefined;
        rot?: undefined;
        seg?: undefined;
        c?: undefined;
        name?: undefined;
    })[];
};
export declare const produceCrate: {
    readonly id: "produce-crate";
    readonly about: "Market display: an open crate of fruit tipped toward the buyer on a four-legged stand, mostly one kind with a few of another (seeded); map `fruit`, `fruit2`, `fruit3`";
    readonly tags: readonly ["town", "market", "food", "wood"];
    readonly palette: {
        readonly wood: "orange";
        readonly frame: "plum";
        readonly bed: "night";
        readonly fruit: "red";
        readonly fruit2: "lime";
        readonly fruit3: "sand";
    };
    readonly parts: (_: Readonly<Record<string, number>>, rng: import("../..").Rng) => ({
        mirror: {
            box: [number, number, number];
            at: [number, number, number];
            c: string;
        }[];
        name?: undefined;
        at?: undefined;
        rot?: undefined;
        group?: undefined;
    } | {
        name: string;
        at: [number, number, number];
        rot: [number, number, number];
        group: Part[];
        mirror?: undefined;
    })[];
};
export declare const parkBench: {
    readonly id: "park-bench";
    readonly about: "Park bench: wooden slats on two cast-iron ends with armrests, seat at 0.45 m, the back leaning; `length` along x";
    readonly tags: readonly ["town", "bench", "iron", "wood"];
    readonly palette: {
        readonly iron: "night";
        readonly wood: "orange";
        readonly wood2: "red";
    };
    readonly params: {
        readonly length: readonly [1.6, 1, 2.4];
    };
    readonly anchors: {
        readonly seat: readonly [0, 0.46, 0.03];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
};
export declare const clothesline: {
    readonly id: "clothesline";
    readonly about: "Clothesline: a sagging rope between two T-posts hung with seeded sheets, towels and shirts in four colours; `length` along x";
    readonly tags: readonly ["town", "cloth", "yard"];
    readonly palette: {
        readonly post: "orange";
        readonly bar: "red";
        readonly rope: "mist";
        readonly cloth: "white";
        readonly cloth2: "blue";
        readonly cloth3: "red";
        readonly cloth4: "sand";
    };
    readonly params: {
        readonly length: readonly [3, 2, 5];
    };
    readonly parts: (p: Readonly<Record<string, number>>, rng: import("../..").Rng) => Part[];
};
export declare const planter: {
    readonly id: "planter";
    readonly about: "Wooden flower box: board sides between dark corner posts under a rim, soil and leaves, seeded blossoms in `a`, `b`, `c`; `length` along x";
    readonly tags: readonly ["town", "plant", "flower", "wood"];
    readonly palette: {
        readonly wood: "orange";
        readonly frame: "plum";
        readonly soil: "night";
        readonly leaf: "green";
        readonly a: "red";
        readonly b: "sand";
        readonly c: "sky";
    };
    readonly params: {
        readonly length: readonly [1, 0.6, 1.8];
    };
    readonly parts: (p: Readonly<Record<string, number>>, rng: import("../..").Rng) => Part[];
};
export declare const waterTrough: {
    readonly id: "water-trough";
    readonly about: "Wooden water trough: two-plank sides held by iron bands between thick end boards, on two skids, full of water; map `water`; `length` along x";
    readonly tags: readonly ["town", "farm", "water", "wood"];
    readonly palette: {
        readonly wood: "orange";
        readonly wood2: "red";
        readonly frame: "plum";
        readonly iron: "night";
        readonly water: "blue";
    };
    readonly params: {
        readonly length: readonly [1.6, 1, 2.4];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => ({
        mirror: {
            box: [number, number, number];
            at: [number, number, number];
            c: string;
        }[];
        box?: undefined;
        at?: undefined;
        c?: undefined;
        axis?: undefined;
        name?: undefined;
    } | {
        box: [number, number, number];
        at: [number, number, number];
        c: string;
        mirror?: undefined;
        axis?: undefined;
        name?: undefined;
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
    } | {
        mirror: {
            box: [number, number, number];
            at: [number, number, number];
            c: string;
            name: string;
        }[];
        box?: undefined;
        at?: undefined;
        c?: undefined;
        axis?: undefined;
        name?: undefined;
    } | {
        box: [number, number, number];
        at: [number, number, number];
        c: string;
        name: string;
        mirror?: undefined;
        axis?: undefined;
    } | {
        mirror: {
            mirror: {
                box: [number, number, number];
                at: [number, number, number];
                c: string;
            }[];
            axis: "z";
        }[];
        box?: undefined;
        at?: undefined;
        c?: undefined;
        axis?: undefined;
        name?: undefined;
    })[];
};
export declare const TOWN: ({
    readonly id: "statue";
    readonly about: "Robed stone figure on a plinth, sword point-down";
    readonly tags: readonly ["stone", "monument"];
    readonly palette: {
        readonly stone: "mist";
        readonly dark: "slate";
        readonly trim: "sand";
    };
    readonly parts: readonly [{
        readonly box: readonly [0.9, 0.28, 0.9];
        readonly at: readonly [0, 0.14, 0];
        readonly c: "dark";
    }, {
        readonly box: readonly [0.98, 0.08, 0.98];
        readonly at: readonly [0, 0.32, 0];
        readonly c: "trim";
    }, {
        readonly lathe: readonly [readonly [0, 0], readonly [0.3, 0], readonly [0.27, 0.2], readonly [0.19, 0.72], readonly [0.2, 0.92], readonly [0.28, 1.04], readonly [0.11, 1.12], readonly [0, 1.12]];
        readonly at: readonly [0, 0.36, 0];
        readonly c: "stone";
    }, {
        readonly ball: readonly [0.24, 0.28, 0.25];
        readonly at: readonly [0, 1.6, 0.01];
        readonly c: "stone";
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.11, 0.4, 0.12];
            readonly at: readonly [0.2, 1.2, 0.12];
            readonly rot: readonly [-38, 0, 12];
            readonly c: "dark";
        }];
    }, {
        readonly name: "sword";
        readonly at: readonly [0, 0.36, 0.34];
        readonly group: readonly [{
            readonly slab: readonly [readonly [-0.05, 0.06], readonly [0, 0], readonly [0.05, 0.06], readonly [0.05, 0.6], readonly [-0.05, 0.6]];
            readonly depth: 0.03;
            readonly c: "stone";
        }, {
            readonly box: readonly [0.3, 0.05, 0.06];
            readonly at: readonly [0, 0.62, 0];
            readonly c: "trim";
        }, {
            readonly cyl: readonly [0.06, 0.12, 0.06];
            readonly at: readonly [0, 0.705, 0];
            readonly seg: 6;
            readonly c: "stone";
        }, {
            readonly ball: readonly [0.08, 0.08, 0.08];
            readonly at: readonly [0, 0.8, 0];
            readonly c: "trim";
        }];
    }];
} | {
    readonly id: "well";
    readonly about: "Stone well with water, a winch and a gable roof";
    readonly tags: readonly ["town", "stone", "water"];
    readonly palette: {
        readonly stone: "mist";
        readonly dark: "slate";
        readonly wood: "orange";
        readonly roof: "red";
        readonly water: "blue";
    };
    readonly parts: readonly [...Part[], {
        readonly cyl: readonly [1.1, 0.05, 1.1];
        readonly at: readonly [0, 0.3, 0];
        readonly seg: 10;
        readonly c: "water";
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.1, 1.5, 0.1];
            readonly at: readonly [0.62, 1.05, 0];
            readonly c: "wood";
        }];
    }, {
        readonly cyl: readonly [0.12, 1.4, 0.12];
        readonly at: readonly [0, 1.55, 0];
        readonly rot: readonly [0, 0, 90];
        readonly seg: 6;
        readonly c: "wood";
    }, {
        readonly cyl: readonly [0.06, 0.7, 0.06];
        readonly at: readonly [0, 1.15, 0];
        readonly seg: 4;
        readonly c: "dark";
    }, {
        readonly cyl: readonly [0.2, 0.16, 0.2];
        readonly at: readonly [0, 0.76, 0];
        readonly top: 1.2;
        readonly c: "wood";
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.86, 0.06, 1.1];
            readonly at: readonly [0.33, 2, 0];
            readonly rot: readonly [0, 0, -38];
            readonly c: "roof";
        }];
    }];
} | {
    readonly id: "market-stall";
    readonly about: "Market stall with a striped awning, crates and a barrel";
    readonly tags: readonly ["town", "market"];
    readonly palette: {
        readonly wood: "orange";
        readonly cloth: "red";
        readonly cloth2: "white";
        readonly top: "sand";
    };
    readonly parts: readonly [{
        readonly box: readonly [1.8, 0.08, 0.8];
        readonly at: readonly [0, 0.9, 0];
        readonly c: "top";
    }, {
        readonly mirror: readonly [{
            readonly mirror: readonly [{
                readonly box: readonly [0.08, 0.86, 0.08];
                readonly at: readonly [0.8, 0.43, 0.32];
                readonly c: "wood";
            }];
            readonly axis: "z";
        }];
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.07, 1.3, 0.07];
            readonly at: readonly [0.86, 1.55, -0.36];
            readonly c: "wood";
        }];
    }, ...Part[], {
        readonly use: "barrel";
        readonly at: readonly [1.25, 0, 0.1];
    }, {
        readonly use: "crate";
        readonly at: readonly [-1.35, 0, 0.15];
        readonly rot: readonly [0, 20, 0];
    }, {
        readonly use: "crate";
        readonly at: readonly [-1.3, 0.72, 0.1];
        readonly rot: readonly [0, -10, 0];
        readonly scale: 0.8;
    }];
} | {
    readonly id: "arch";
    readonly about: "Stone arch of voussoirs in two shades over dark mortar; `piers` (m) stands it on two coursed stone piers that tall, 0 puts its feet on y = 0";
    readonly tags: readonly ["stone", "building"];
    readonly palette: {
        readonly stone: "mist";
        readonly stone2: "slate";
        readonly mortar: "night";
    };
    readonly collider: "parts";
    readonly params: {
        readonly span: readonly [2, 0.8, 5];
        readonly ring: readonly [0.42, 0.2, 0.8];
        readonly depth: readonly [0.6, 0.2, 1.5];
        readonly blocks: readonly [9, 5, 15];
        readonly piers: readonly [0, 0, 4];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
} | {
    readonly id: "brick-wall";
    readonly about: "A stretch of brick wall (the bricks texture, 0.5 m courses at the default texel) under a stone coping";
    readonly tags: readonly ["town", "wall", "stone", "textured"];
    readonly palette: {
        readonly cap: "mist";
    };
    readonly params: {
        readonly length: readonly [2, 0.5, 6];
        readonly height: readonly [1.5, 0.5, 3];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => ({
        box: [number, number, number];
        at: [number, number, number];
        tex: string;
        name: string;
        c?: undefined;
    } | {
        box: [number, number, number];
        at: [number, number, number];
        c: string;
        name: string;
        tex?: undefined;
    })[];
} | {
    readonly id: "fountain";
    readonly about: "Round stone fountain: a basin wall under a dark coping round the pool, a centre column with an upper bowl and a jet; map `water` and `spray`; `r` is the basin's radius";
    readonly tags: readonly ["town", "stone", "water"];
    readonly palette: {
        readonly stone: "mist";
        readonly trim: "slate";
        readonly water: "blue";
        readonly spray: "sky";
    };
    readonly params: {
        readonly r: readonly [1.1, 0.8, 1.6];
    };
    readonly collider: "cyl";
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
} | {
    readonly id: "haystack";
    readonly about: "Beehive haystack bound by a rope, darker loose hay round its foot and a straw tuft on its crown (seeded); `h` is its height";
    readonly tags: readonly ["town", "farm", "hay"];
    readonly palette: {
        readonly hay: "sand";
        readonly hay2: "orange";
        readonly rope: "red";
    };
    readonly params: {
        readonly h: readonly [1.6, 1, 2.4];
    };
    readonly collider: "cyl";
    readonly parts: (p: Readonly<Record<string, number>>, rng: import("../..").Rng) => Part[];
} | {
    readonly id: "hitching-post";
    readonly about: "Hitching rail: a round log rail on two square posts, iron tie rings hanging from it; `length` along x";
    readonly tags: readonly ["town", "wood", "farm"];
    readonly palette: {
        readonly post: "red";
        readonly rail: "orange";
        readonly iron: "mist";
    };
    readonly params: {
        readonly length: readonly [2, 1.2, 3];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => ({
        mirror: {
            box: [number, number, number];
            at: [number, number, number];
            c: string;
        }[];
        cyl?: undefined;
        at?: undefined;
        rot?: undefined;
        seg?: undefined;
        c?: undefined;
        name?: undefined;
    } | {
        mirror: {
            box: [number, number, number];
            at: [number, number, number];
            rot: [number, number, number];
            c: string;
        }[];
        cyl?: undefined;
        at?: undefined;
        rot?: undefined;
        seg?: undefined;
        c?: undefined;
        name?: undefined;
    } | {
        cyl: [number, number, number];
        at: [number, number, number];
        rot: [number, number, number];
        seg: number;
        c: string;
        name: string;
        mirror?: undefined;
    } | {
        mirror: {
            torus: [number, number, number];
            at: [number, number, number];
            rot: [number, number, number];
            seg: number;
            c: string;
            name: string;
        }[];
        cyl?: undefined;
        at?: undefined;
        rot?: undefined;
        seg?: undefined;
        c?: undefined;
        name?: undefined;
    })[];
} | {
    readonly id: "produce-crate";
    readonly about: "Market display: an open crate of fruit tipped toward the buyer on a four-legged stand, mostly one kind with a few of another (seeded); map `fruit`, `fruit2`, `fruit3`";
    readonly tags: readonly ["town", "market", "food", "wood"];
    readonly palette: {
        readonly wood: "orange";
        readonly frame: "plum";
        readonly bed: "night";
        readonly fruit: "red";
        readonly fruit2: "lime";
        readonly fruit3: "sand";
    };
    readonly parts: (_: Readonly<Record<string, number>>, rng: import("../..").Rng) => ({
        mirror: {
            box: [number, number, number];
            at: [number, number, number];
            c: string;
        }[];
        name?: undefined;
        at?: undefined;
        rot?: undefined;
        group?: undefined;
    } | {
        name: string;
        at: [number, number, number];
        rot: [number, number, number];
        group: Part[];
        mirror?: undefined;
    })[];
} | {
    readonly id: "park-bench";
    readonly about: "Park bench: wooden slats on two cast-iron ends with armrests, seat at 0.45 m, the back leaning; `length` along x";
    readonly tags: readonly ["town", "bench", "iron", "wood"];
    readonly palette: {
        readonly iron: "night";
        readonly wood: "orange";
        readonly wood2: "red";
    };
    readonly params: {
        readonly length: readonly [1.6, 1, 2.4];
    };
    readonly anchors: {
        readonly seat: readonly [0, 0.46, 0.03];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
} | {
    readonly id: "clothesline";
    readonly about: "Clothesline: a sagging rope between two T-posts hung with seeded sheets, towels and shirts in four colours; `length` along x";
    readonly tags: readonly ["town", "cloth", "yard"];
    readonly palette: {
        readonly post: "orange";
        readonly bar: "red";
        readonly rope: "mist";
        readonly cloth: "white";
        readonly cloth2: "blue";
        readonly cloth3: "red";
        readonly cloth4: "sand";
    };
    readonly params: {
        readonly length: readonly [3, 2, 5];
    };
    readonly parts: (p: Readonly<Record<string, number>>, rng: import("../..").Rng) => Part[];
} | {
    readonly id: "planter";
    readonly about: "Wooden flower box: board sides between dark corner posts under a rim, soil and leaves, seeded blossoms in `a`, `b`, `c`; `length` along x";
    readonly tags: readonly ["town", "plant", "flower", "wood"];
    readonly palette: {
        readonly wood: "orange";
        readonly frame: "plum";
        readonly soil: "night";
        readonly leaf: "green";
        readonly a: "red";
        readonly b: "sand";
        readonly c: "sky";
    };
    readonly params: {
        readonly length: readonly [1, 0.6, 1.8];
    };
    readonly parts: (p: Readonly<Record<string, number>>, rng: import("../..").Rng) => Part[];
} | {
    readonly id: "water-trough";
    readonly about: "Wooden water trough: two-plank sides held by iron bands between thick end boards, on two skids, full of water; map `water`; `length` along x";
    readonly tags: readonly ["town", "farm", "water", "wood"];
    readonly palette: {
        readonly wood: "orange";
        readonly wood2: "red";
        readonly frame: "plum";
        readonly iron: "night";
        readonly water: "blue";
    };
    readonly params: {
        readonly length: readonly [1.6, 1, 2.4];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => ({
        mirror: {
            box: [number, number, number];
            at: [number, number, number];
            c: string;
        }[];
        box?: undefined;
        at?: undefined;
        c?: undefined;
        axis?: undefined;
        name?: undefined;
    } | {
        box: [number, number, number];
        at: [number, number, number];
        c: string;
        mirror?: undefined;
        axis?: undefined;
        name?: undefined;
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
    } | {
        mirror: {
            box: [number, number, number];
            at: [number, number, number];
            c: string;
            name: string;
        }[];
        box?: undefined;
        at?: undefined;
        c?: undefined;
        axis?: undefined;
        name?: undefined;
    } | {
        box: [number, number, number];
        at: [number, number, number];
        c: string;
        name: string;
        mirror?: undefined;
        axis?: undefined;
    } | {
        mirror: {
            mirror: {
                box: [number, number, number];
                at: [number, number, number];
                c: string;
            }[];
            axis: "z";
        }[];
        box?: undefined;
        at?: undefined;
        c?: undefined;
        axis?: undefined;
        name?: undefined;
    })[];
})[];
