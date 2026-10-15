import type { Part, Vec3 } from '../types';
export declare const chest: {
    readonly id: "chest";
    readonly about: "Treasure chest: iron bands, a gold lock plate, a rounded lid on the pivot `lid` hinged at the back; `open` lifts it on a heap of gold";
    readonly tags: readonly ["dungeon", "wood"];
    readonly palette: {
        readonly wood: "orange";
        readonly iron: "night";
        readonly gold: "sand";
    };
    readonly params: {
        readonly open: readonly [0, 0, 110];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => ({
        box: [number, number, number];
        at: [number, number, number];
        c: string;
        mirror?: undefined;
        ball?: undefined;
        half?: undefined;
        name?: undefined;
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
        ball?: undefined;
        half?: undefined;
        name?: undefined;
        pivot?: undefined;
        rot?: undefined;
        group?: undefined;
    } | {
        ball: [number, number, number];
        at: [number, number, number];
        half: true;
        c: string;
        box?: undefined;
        mirror?: undefined;
        name?: undefined;
        pivot?: undefined;
        rot?: undefined;
        group?: undefined;
    } | {
        name: string;
        pivot: true;
        at: [number, number, number];
        rot: [number, number, number];
        group: ({
            slab: [number, number][];
            depth: number;
            at: [number, number, number];
            rot: [number, number, number];
            c: string;
            mirror?: undefined;
            box?: undefined;
        } | {
            mirror: {
                slab: [number, number][];
                depth: number;
                at: [number, number, number];
                rot: [number, number, number];
                c: string;
            }[];
            slab?: undefined;
            depth?: undefined;
            at?: undefined;
            rot?: undefined;
            c?: undefined;
            box?: undefined;
        } | {
            box: [number, number, number];
            at: [number, number, number];
            c: string;
            slab?: undefined;
            depth?: undefined;
            rot?: undefined;
            mirror?: undefined;
        })[];
        box?: undefined;
        c?: undefined;
        mirror?: undefined;
        ball?: undefined;
        half?: undefined;
    })[];
};
export declare const bones: {
    readonly id: "bones";
    readonly about: "Scatter of long bones round a skull on the floor, seeded; `n` bones over a `spread` metres wide";
    readonly tags: readonly ["dungeon", "bone"];
    readonly palette: {
        readonly bone: "white";
        readonly joint: "sand";
        readonly socket: "ink";
    };
    readonly params: {
        readonly n: readonly [6, 2, 9];
        readonly spread: readonly [1.2, 0.8, 1.8];
    };
    readonly parts: (p: Readonly<Record<string, number>>, rng: import("../..").Rng) => Part[];
};
export declare const cage: {
    readonly id: "cage";
    readonly about: "Standing round iron cage: bars on a base, two hoops, a domed top with a ring, a gold padlock";
    readonly tags: readonly ["dungeon", "iron"];
    readonly palette: {
        readonly iron: "slate";
        readonly bar: "night";
        readonly lock: "sand";
    };
    readonly anchors: {
        readonly hang: readonly [0, 2.19, 0];
    };
    readonly parts: readonly [{
        readonly cyl: readonly [1.2, 0.1, 1.2];
        readonly at: readonly [0, 0.05, 0];
        readonly seg: 8;
        readonly rot: readonly [0, 22.5, 0];
        readonly c: "iron";
    }, ...((import("..").PartBase & {
        readonly box: Vec3;
    }) | (import("..").PartBase & {
        readonly cyl: Vec3;
        readonly top?: number;
    }) | (import("..").PartBase & {
        readonly cone: Vec3;
    }) | (import("..").PartBase & {
        readonly ball: Vec3;
        readonly half?: boolean;
    }) | (import("..").PartBase & {
        readonly lump: Vec3;
        readonly seed?: number;
    }) | (import("..").PartBase & {
        readonly wedge: Vec3;
    }) | (import("..").PartBase & {
        readonly torus: Vec3;
    }) | (import("..").PartBase & {
        readonly lathe: readonly (readonly [number, number])[];
    }) | (import("..").PartBase & {
        readonly slab: readonly (readonly [number, number])[] | string;
        readonly depth: number;
    }) | (import("..").PartBase & {
        readonly tube: readonly Vec3[];
        readonly r: number | readonly [number, number];
    }) | (import("..").PartBase & {
        readonly mesh: import("..").MeshData;
    }) | import("..").GroupPart | import("..").MirrorPart | import("..").UsePart | {
        readonly torus: readonly [1.08, 0.1, 1.08];
        readonly at: readonly [0, 0.85, 0];
        readonly seg: 8;
        readonly rot: readonly [0, 22.5, 0];
        readonly c: "iron";
    } | {
        readonly torus: readonly [1.08, 0.1, 1.08];
        readonly at: readonly [0, 1.6, 0];
        readonly seg: 8;
        readonly rot: readonly [0, 22.5, 0];
        readonly c: "iron";
    })[], {
        readonly ball: readonly [0.18, 0.14, 0.18];
        readonly at: readonly [0, 2.04, 0];
        readonly c: "iron";
    }, {
        readonly torus: readonly [0.22, 0.07, 0.22];
        readonly at: readonly [0, 2.17, 0];
        readonly rot: readonly [90, 0, 0];
        readonly seg: 6;
        readonly c: "iron";
    }, {
        readonly group: readonly [{
            readonly box: readonly [0.15, 0.17, 0.07];
            readonly at: readonly [0, 0.72, 0.555];
            readonly c: "lock";
        }];
        readonly rot: readonly [0, 45, 0];
    }];
};
export declare const coffin: {
    readonly id: "coffin";
    readonly about: "Wooden coffin on the floor, head at -Z: a red body on a lighter plinth, a lighter lid on the pivot `lid`, iron handles";
    readonly tags: readonly ["dungeon", "wood"];
    readonly palette: {
        readonly wood: "red";
        readonly lid: "orange";
        readonly iron: "night";
    };
    readonly parts: readonly [{
        readonly slab: [number, number][];
        readonly depth: 0.06;
        readonly at: readonly [0, 0.03, 0];
        readonly rot: readonly [90, 0, 0];
        readonly c: "lid";
    }, {
        readonly slab: [number, number][];
        readonly depth: 0.38;
        readonly at: readonly [0, 0.19, 0];
        readonly rot: readonly [90, 0, 0];
        readonly c: "wood";
    }, {
        readonly name: "lid";
        readonly pivot: true;
        readonly at: readonly [0, 0.38, 0];
        readonly group: readonly [{
            readonly slab: [number, number][];
            readonly depth: 0.07;
            readonly at: readonly [0, 0.035, 0];
            readonly rot: readonly [90, 0, 0];
            readonly c: "lid";
        }, {
            readonly slab: [number, number][];
            readonly depth: 0.04;
            readonly at: readonly [0, 0.08, 0];
            readonly rot: readonly [90, 0, 0];
            readonly c: "wood";
        }];
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.06, 0.07, 0.2];
            readonly at: readonly [0.335, 0.22, -0.3];
            readonly rot: readonly [0, -5, 0];
            readonly c: "iron";
        }, {
            readonly box: readonly [0.06, 0.07, 0.2];
            readonly at: readonly [0.29, 0.22, 0.4];
            readonly rot: readonly [0, -5, 0];
            readonly c: "iron";
        }];
    }];
};
export declare const banner: {
    readonly id: "banner";
    readonly about: "Wall banner on an iron pole, its back on a wall at z = 0: a pointed `cloth` (map it) with a gold trim and emblem";
    readonly tags: readonly ["dungeon", "cloth"];
    readonly palette: {
        readonly cloth: "red";
        readonly trim: "sand";
        readonly pole: "night";
    };
    readonly params: {
        readonly w: readonly [0.8, 0.5, 1.2];
        readonly h: readonly [1.4, 0.8, 2];
    };
    readonly floats: true;
    readonly anchors: {
        readonly wall: readonly [0, 2.5, 0];
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
        group?: undefined;
    } | {
        cyl: [number, number, number];
        at: [number, number, number];
        rot: [number, number, number];
        seg: number;
        c: string;
        mirror?: undefined;
        group?: undefined;
    } | {
        mirror: {
            ball: [number, number, number];
            at: [number, number, number];
            c: string;
        }[];
        cyl?: undefined;
        at?: undefined;
        rot?: undefined;
        seg?: undefined;
        c?: undefined;
        group?: undefined;
    } | {
        at: [number, number, number];
        group: ({
            slab: [number, number][];
            depth: number;
            at: [number, number, number];
            c: string;
            box?: undefined;
        } | {
            box: [number, number, number];
            at: [number, number, number];
            c: string;
            slab?: undefined;
            depth?: undefined;
        })[];
        mirror?: undefined;
        cyl?: undefined;
        rot?: undefined;
        seg?: undefined;
        c?: undefined;
    })[];
};
export declare const spikes: {
    readonly id: "spikes";
    readonly about: "Floor spike trap: an iron plate with `n` steel spikes in dark holes, the spikes on the pivot `spikes` to raise and lower";
    readonly tags: readonly ["dungeon", "iron"];
    readonly palette: {
        readonly plate: "night";
        readonly rim: "slate";
        readonly hole: "ink";
        readonly spike: "mist";
    };
    readonly params: {
        readonly n: readonly [9, 4, 9];
        readonly h: readonly [0.4, 0.2, 0.55];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
};
export declare const altar: {
    readonly id: "altar";
    readonly about: "Stone altar on a step: a pale slab top over a dark moulding and a carved body, a `cloth` runner (map it) laid along it and hanging down the front";
    readonly tags: readonly ["dungeon", "stone", "cloth", "temple"];
    readonly palette: {
        readonly stone: "mist";
        readonly stone2: "slate";
        readonly dark: "night";
        readonly cloth: "red";
        readonly trim: "sand";
    };
    readonly params: {
        readonly w: readonly [1.6, 1, 2.4];
    };
    readonly anchors: {
        readonly top: readonly [0, 1.03, 0];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => ({
        box: [number, number, number];
        at: [number, number, number];
        c: string;
        name: string;
        mirror?: undefined;
        slab?: undefined;
        depth?: undefined;
    } | {
        readonly mirror: readonly [{
            readonly box: readonly [number, 0.38, 0.03];
            readonly at: readonly [number, 0.47, 0.31];
            readonly c: "stone2";
        }];
        box?: undefined;
        at?: undefined;
        c?: undefined;
        name?: undefined;
        slab?: undefined;
        depth?: undefined;
    } | {
        box: [number, number, number];
        at: [number, number, number];
        c: string;
        name?: undefined;
        mirror?: undefined;
        slab?: undefined;
        depth?: undefined;
    } | {
        slab: [number, number][];
        depth: number;
        at: [number, number, number];
        c: string;
        box?: undefined;
        name?: undefined;
        mirror?: undefined;
    })[];
};
export declare const sarcophagus: {
    readonly id: "sarcophagus";
    readonly about: "Stone sarcophagus on a plinth, head at -Z: carved panels down a pale body, a dark lid (the pivot `lid`) carved with a lying effigy holding a gold sword (map `trim`)";
    readonly tags: readonly ["dungeon", "stone", "tomb"];
    readonly palette: {
        readonly stone: "mist";
        readonly stone2: "slate";
        readonly trim: "sand";
    };
    readonly parts: readonly [{
        readonly box: readonly [1.04, 0.12, 2.3];
        readonly at: readonly [0, 0.06, 0];
        readonly c: "stone2";
        readonly name: "plinth";
    }, {
        readonly box: readonly [0.88, 0.6, 2.14];
        readonly at: readonly [0, 0.42, 0];
        readonly c: "stone";
        readonly name: "body";
    }, {
        readonly mirror: Part[];
    }, {
        readonly box: readonly [0.56, 0.34, 0.03];
        readonly at: readonly [0, 0.42, 1.07];
        readonly c: "stone2";
    }, {
        readonly name: "lid";
        readonly pivot: true;
        readonly at: readonly [0, 0.72, 0];
        readonly group: readonly [{
            readonly box: readonly [0.98, 0.12, 2.24];
            readonly at: readonly [0, 0.06, 0];
            readonly c: "stone2";
        }, {
            readonly box: readonly [0.5, 0.07, 0.3];
            readonly at: readonly [0, 0.155, -0.86];
            readonly c: "stone";
        }, {
            readonly ball: readonly [0.26, 0.22, 0.3];
            readonly at: readonly [0, 0.29, -0.8];
            readonly seg: 8;
            readonly c: "stone";
            readonly name: "head";
        }, {
            readonly slab: readonly [readonly [-0.25, -0.66], readonly [0.25, -0.66], readonly [0.19, 0.8], readonly [-0.19, 0.8]];
            readonly depth: 0.16;
            readonly at: readonly [0, 0.2, 0];
            readonly rot: readonly [90, 0, 0];
            readonly c: "stone";
            readonly name: "effigy";
        }, {
            readonly box: readonly [0.3, 0.12, 0.1];
            readonly at: readonly [0, 0.34, 0.74];
            readonly c: "stone";
        }, {
            readonly box: readonly [0.08, 0.03, 0.82];
            readonly at: readonly [0, 0.295, 0.2];
            readonly c: "trim";
            readonly name: "sword";
        }, {
            readonly box: readonly [0.28, 0.04, 0.07];
            readonly at: readonly [0, 0.3, -0.23];
            readonly c: "trim";
        }, {
            readonly box: readonly [0.22, 0.08, 0.14];
            readonly at: readonly [0, 0.32, -0.34];
            readonly c: "stone";
        }];
    }];
};
export declare const tombstone: {
    readonly id: "tombstone";
    readonly about: "Headstone on a low base with a tuft of moss (map `moss`), seeded lean: `shape` 0 a rounded top with an inscription, 1 a ringed cross, 2 a capped slab with a sunk panel; `h` is the height of the stone above its 0.12 m base";
    readonly tags: readonly ["dungeon", "stone", "grave"];
    readonly palette: {
        readonly stone: "mist";
        readonly stone2: "slate";
        readonly carve: "night";
        readonly moss: "green";
    };
    readonly params: {
        readonly shape: readonly [0, 0, 2];
        readonly h: readonly [0.9, 0.6, 1.3];
    };
    readonly parts: (p: Readonly<Record<string, number>>, rng: import("../..").Rng) => ({
        box: [number, number, number];
        at: [number, number, number];
        c: string;
        name: string;
        rot?: undefined;
        group?: undefined;
        lump?: undefined;
        seed?: undefined;
    } | {
        at: [number, number, number];
        rot: [number, number, number];
        group: Part[];
        box?: undefined;
        c?: undefined;
        name?: undefined;
        lump?: undefined;
        seed?: undefined;
    } | {
        lump: [number, number, number];
        at: [number, number, number];
        rot: [number, number, number];
        seed: number;
        c: string;
        name: string;
        box?: undefined;
        group?: undefined;
    })[];
};
export declare const skullPile: {
    readonly id: "skull-pile";
    readonly about: "Stacked pile of skulls facing out round a dark heap, in three bone shades so stacked skulls read apart, seeded; `n` skulls in up to three tiers";
    readonly tags: readonly ["dungeon", "bone"];
    readonly palette: {
        readonly bone: "white";
        readonly bone2: "sand";
        readonly bone3: "mist";
        readonly socket: "ink";
        readonly heap: "night";
    };
    readonly params: {
        readonly n: readonly [7, 4, 9];
    };
    readonly parts: (p: Readonly<Record<string, number>>, rng: import("../..").Rng) => Part[];
};
export declare const wallChains: {
    readonly id: "wall-chains";
    readonly about: "Iron chains hung from ring bolts on a wall plate at 2 m, its back on a wall at z = 0, a shackle on each; `n` chains about `len` metres long (seeded)";
    readonly tags: readonly ["dungeon", "iron", "wall"];
    readonly palette: {
        readonly plate: "slate";
        readonly iron: "night";
        readonly link: "slate";
        readonly link2: "mist";
    };
    readonly params: {
        readonly n: readonly [2, 1, 3];
        readonly len: readonly [1, 0.4, 1.5];
    };
    readonly floats: true;
    readonly collider: "none";
    readonly anchors: {
        readonly wall: readonly [0, 2, 0];
    };
    readonly parts: (p: Readonly<Record<string, number>>, rng: import("../..").Rng) => Part[];
};
export declare const portcullis: {
    readonly id: "portcullis";
    readonly about: "Iron portcullis for a doorway: slate bars ending in steel spikes, dark cross bands over them, all on the pivot `grate` to raise it; `w` x `h` metres";
    readonly tags: readonly ["dungeon", "iron", "door"];
    readonly palette: {
        readonly bar: "slate";
        readonly band: "night";
        readonly tip: "mist";
    };
    readonly params: {
        readonly w: readonly [1.4, 0.8, 3];
        readonly h: readonly [2.2, 1.6, 3.2];
    };
    readonly collider: "box";
    readonly parts: (p: Readonly<Record<string, number>>) => {
        name: string;
        pivot: true;
        group: Part[];
    }[];
};
export declare const lever: {
    readonly id: "lever";
    readonly about: "Floor lever: a steel handle with a red knob (map `knob`) on the pivot `handle`, hinged between iron cheeks on a stone block; `angle` throws it (+ toward the front)";
    readonly tags: readonly ["dungeon", "iron", "mechanism"];
    readonly palette: {
        readonly stone: "mist";
        readonly iron: "night";
        readonly slot: "ink";
        readonly axle: "slate";
        readonly handle: "mist";
        readonly knob: "red";
    };
    readonly params: {
        readonly angle: readonly [-30, -40, 40];
    };
    readonly anchors: {
        readonly pivot: readonly [0, 0.38, 0];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => ({
        box: [number, number, number];
        at: [number, number, number];
        c: string;
        name: string;
        mirror?: undefined;
        cyl?: undefined;
        rot?: undefined;
        seg?: undefined;
        pivot?: undefined;
        group?: undefined;
    } | {
        box: [number, number, number];
        at: [number, number, number];
        c: string;
        name?: undefined;
        mirror?: undefined;
        cyl?: undefined;
        rot?: undefined;
        seg?: undefined;
        pivot?: undefined;
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
        cyl?: undefined;
        rot?: undefined;
        seg?: undefined;
        pivot?: undefined;
        group?: undefined;
    } | {
        cyl: [number, number, number];
        at: [number, number, number];
        rot: [number, number, number];
        seg: number;
        c: string;
        name: string;
        box?: undefined;
        mirror?: undefined;
        pivot?: undefined;
        group?: undefined;
    } | {
        name: string;
        pivot: true;
        at: [number, number, number];
        rot: [number, number, number];
        group: ({
            box: [number, number, number];
            at: [number, number, number];
            c: string;
            ball?: undefined;
            seg?: undefined;
            name?: undefined;
        } | {
            ball: [number, number, number];
            at: [number, number, number];
            seg: number;
            c: string;
            name: string;
            box?: undefined;
        })[];
        box?: undefined;
        c?: undefined;
        mirror?: undefined;
        cyl?: undefined;
        seg?: undefined;
    })[];
};
export declare const pressurePlate: {
    readonly id: "pressure-plate";
    readonly about: "Pressure plate: a pale stone tile raised a few centimetres in a dark groove and a slate frame, a red mark on it (map `mark`); the tile is the pivot `plate` to press; `size` metres square";
    readonly tags: readonly ["dungeon", "stone", "trap", "mechanism"];
    readonly palette: {
        readonly frame: "slate";
        readonly groove: "ink";
        readonly plate: "mist";
        readonly mark: "red";
    };
    readonly params: {
        readonly size: readonly [0.9, 0.5, 1.4];
    };
    readonly collider: "none";
    readonly parts: (p: Readonly<Record<string, number>>) => ({
        box: [number, number, number];
        at: [number, number, number];
        c: string;
        name: string;
        pivot?: undefined;
        group?: undefined;
    } | {
        box: [number, number, number];
        at: [number, number, number];
        c: string;
        name?: undefined;
        pivot?: undefined;
        group?: undefined;
    } | {
        name: string;
        pivot: true;
        group: ({
            box: [number, number, number];
            at: [number, number, number];
            c: string;
            rot?: undefined;
            name?: undefined;
        } | {
            box: [number, number, number];
            at: [number, number, number];
            rot: [number, number, number];
            c: string;
            name: string;
        })[];
        box?: undefined;
        at?: undefined;
        c?: undefined;
    })[];
};
export declare const obelisk: {
    readonly id: "obelisk";
    readonly about: "Stone obelisk on stepped plinths: a tapering shaft, a dark pyramidion and a dark band of small glowing runes (map `rune`, which also lights it); `h` is its height";
    readonly tags: readonly ["dungeon", "stone", "monument", "magic", "light"];
    readonly palette: {
        readonly stone: "mist";
        readonly stone2: "slate";
        readonly band: "night";
        readonly rune: "cyan";
    };
    readonly params: {
        readonly h: readonly [3.2, 2.2, 5];
    };
    readonly light: {
        readonly at: readonly [0, 2.2, 0.5];
        readonly c: "rune";
        readonly intensity: 1.5;
        readonly radius: 4;
        readonly flicker: "pulse";
    };
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
};
export declare const runeStone: {
    readonly id: "rune-stone";
    readonly about: "Standing stone of seeded outline on a few pale footing stones: a dark carved strip down its face holding small glowing runes (map `rune`, which also lights it); `h` is its height";
    readonly tags: readonly ["dungeon", "stone", "magic", "light", "nature"];
    readonly palette: {
        readonly stone: "slate";
        readonly foot: "mist";
        readonly carve: "night";
        readonly rune: "cyan";
    };
    readonly params: {
        readonly h: readonly [1.8, 1.2, 2.6];
    };
    readonly light: {
        readonly at: readonly [0, 1, 0.5];
        readonly c: "rune";
        readonly intensity: 1.4;
        readonly radius: 3.5;
        readonly flicker: "pulse";
    };
    readonly parts: (p: Readonly<Record<string, number>>, rng: import("../..").Rng) => Part[];
};
export declare const pillory: {
    readonly id: "pillory";
    readonly about: "Wooden pillory on a stone footing: a capped post, a split yoke at neck height with a head hole and two hand holes, the upper board on the pivot `yoke` hinged at the left, an iron hasp and a gold lock (map `lock`)";
    readonly tags: readonly ["dungeon", "wood", "town"];
    readonly palette: {
        readonly wood: "orange";
        readonly wood2: "red";
        readonly stone: "mist";
        readonly iron: "night";
        readonly hole: "ink";
        readonly lock: "sand";
    };
    readonly parts: () => ({
        box: [number, number, number];
        at: [number, number, number];
        c: string;
        name: string;
        cyl?: undefined;
        top?: undefined;
        seg?: undefined;
        rot?: undefined;
        group?: undefined;
        pivot?: undefined;
    } | {
        cyl: [number, number, number];
        at: [number, number, number];
        top: number;
        seg: number;
        rot: [number, number, number];
        c: string;
        box?: undefined;
        name?: undefined;
        group?: undefined;
        pivot?: undefined;
    } | {
        box: [number, number, number];
        at: [number, number, number];
        c: string;
        name?: undefined;
        cyl?: undefined;
        top?: undefined;
        seg?: undefined;
        rot?: undefined;
        group?: undefined;
        pivot?: undefined;
    } | {
        group: Part[];
        at: [number, number, number];
        box?: undefined;
        c?: undefined;
        name?: undefined;
        cyl?: undefined;
        top?: undefined;
        seg?: undefined;
        rot?: undefined;
        pivot?: undefined;
    } | {
        name: string;
        pivot: true;
        at: [number, number, number];
        group: Part[];
        box?: undefined;
        c?: undefined;
        cyl?: undefined;
        top?: undefined;
        seg?: undefined;
        rot?: undefined;
    })[];
};
export declare const pitGrate: {
    readonly id: "pit-grate";
    readonly about: "Pit in the floor like a well head: a low curb of stones in two greys round a black hole, under an iron ring and grate of crossed bars (the pivot `grate`); `r` is the hole's radius";
    readonly tags: readonly ["dungeon", "stone", "iron", "trap"];
    readonly palette: {
        readonly stone: "mist";
        readonly stone2: "slate";
        readonly hole: "ink";
        readonly iron: "night";
    };
    readonly params: {
        readonly r: readonly [0.6, 0.4, 1];
    };
    readonly collider: "cyl";
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
};
export declare const DUNGEON: ({
    readonly id: "chest";
    readonly about: "Treasure chest: iron bands, a gold lock plate, a rounded lid on the pivot `lid` hinged at the back; `open` lifts it on a heap of gold";
    readonly tags: readonly ["dungeon", "wood"];
    readonly palette: {
        readonly wood: "orange";
        readonly iron: "night";
        readonly gold: "sand";
    };
    readonly params: {
        readonly open: readonly [0, 0, 110];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => ({
        box: [number, number, number];
        at: [number, number, number];
        c: string;
        mirror?: undefined;
        ball?: undefined;
        half?: undefined;
        name?: undefined;
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
        ball?: undefined;
        half?: undefined;
        name?: undefined;
        pivot?: undefined;
        rot?: undefined;
        group?: undefined;
    } | {
        ball: [number, number, number];
        at: [number, number, number];
        half: true;
        c: string;
        box?: undefined;
        mirror?: undefined;
        name?: undefined;
        pivot?: undefined;
        rot?: undefined;
        group?: undefined;
    } | {
        name: string;
        pivot: true;
        at: [number, number, number];
        rot: [number, number, number];
        group: ({
            slab: [number, number][];
            depth: number;
            at: [number, number, number];
            rot: [number, number, number];
            c: string;
            mirror?: undefined;
            box?: undefined;
        } | {
            mirror: {
                slab: [number, number][];
                depth: number;
                at: [number, number, number];
                rot: [number, number, number];
                c: string;
            }[];
            slab?: undefined;
            depth?: undefined;
            at?: undefined;
            rot?: undefined;
            c?: undefined;
            box?: undefined;
        } | {
            box: [number, number, number];
            at: [number, number, number];
            c: string;
            slab?: undefined;
            depth?: undefined;
            rot?: undefined;
            mirror?: undefined;
        })[];
        box?: undefined;
        c?: undefined;
        mirror?: undefined;
        ball?: undefined;
        half?: undefined;
    })[];
} | {
    readonly id: "bones";
    readonly about: "Scatter of long bones round a skull on the floor, seeded; `n` bones over a `spread` metres wide";
    readonly tags: readonly ["dungeon", "bone"];
    readonly palette: {
        readonly bone: "white";
        readonly joint: "sand";
        readonly socket: "ink";
    };
    readonly params: {
        readonly n: readonly [6, 2, 9];
        readonly spread: readonly [1.2, 0.8, 1.8];
    };
    readonly parts: (p: Readonly<Record<string, number>>, rng: import("../..").Rng) => Part[];
} | {
    readonly id: "cage";
    readonly about: "Standing round iron cage: bars on a base, two hoops, a domed top with a ring, a gold padlock";
    readonly tags: readonly ["dungeon", "iron"];
    readonly palette: {
        readonly iron: "slate";
        readonly bar: "night";
        readonly lock: "sand";
    };
    readonly anchors: {
        readonly hang: readonly [0, 2.19, 0];
    };
    readonly parts: readonly [{
        readonly cyl: readonly [1.2, 0.1, 1.2];
        readonly at: readonly [0, 0.05, 0];
        readonly seg: 8;
        readonly rot: readonly [0, 22.5, 0];
        readonly c: "iron";
    }, ...((import("..").PartBase & {
        readonly box: Vec3;
    }) | (import("..").PartBase & {
        readonly cyl: Vec3;
        readonly top?: number;
    }) | (import("..").PartBase & {
        readonly cone: Vec3;
    }) | (import("..").PartBase & {
        readonly ball: Vec3;
        readonly half?: boolean;
    }) | (import("..").PartBase & {
        readonly lump: Vec3;
        readonly seed?: number;
    }) | (import("..").PartBase & {
        readonly wedge: Vec3;
    }) | (import("..").PartBase & {
        readonly torus: Vec3;
    }) | (import("..").PartBase & {
        readonly lathe: readonly (readonly [number, number])[];
    }) | (import("..").PartBase & {
        readonly slab: readonly (readonly [number, number])[] | string;
        readonly depth: number;
    }) | (import("..").PartBase & {
        readonly tube: readonly Vec3[];
        readonly r: number | readonly [number, number];
    }) | (import("..").PartBase & {
        readonly mesh: import("..").MeshData;
    }) | import("..").GroupPart | import("..").MirrorPart | import("..").UsePart | {
        readonly torus: readonly [1.08, 0.1, 1.08];
        readonly at: readonly [0, 0.85, 0];
        readonly seg: 8;
        readonly rot: readonly [0, 22.5, 0];
        readonly c: "iron";
    } | {
        readonly torus: readonly [1.08, 0.1, 1.08];
        readonly at: readonly [0, 1.6, 0];
        readonly seg: 8;
        readonly rot: readonly [0, 22.5, 0];
        readonly c: "iron";
    })[], {
        readonly ball: readonly [0.18, 0.14, 0.18];
        readonly at: readonly [0, 2.04, 0];
        readonly c: "iron";
    }, {
        readonly torus: readonly [0.22, 0.07, 0.22];
        readonly at: readonly [0, 2.17, 0];
        readonly rot: readonly [90, 0, 0];
        readonly seg: 6;
        readonly c: "iron";
    }, {
        readonly group: readonly [{
            readonly box: readonly [0.15, 0.17, 0.07];
            readonly at: readonly [0, 0.72, 0.555];
            readonly c: "lock";
        }];
        readonly rot: readonly [0, 45, 0];
    }];
} | {
    readonly id: "coffin";
    readonly about: "Wooden coffin on the floor, head at -Z: a red body on a lighter plinth, a lighter lid on the pivot `lid`, iron handles";
    readonly tags: readonly ["dungeon", "wood"];
    readonly palette: {
        readonly wood: "red";
        readonly lid: "orange";
        readonly iron: "night";
    };
    readonly parts: readonly [{
        readonly slab: [number, number][];
        readonly depth: 0.06;
        readonly at: readonly [0, 0.03, 0];
        readonly rot: readonly [90, 0, 0];
        readonly c: "lid";
    }, {
        readonly slab: [number, number][];
        readonly depth: 0.38;
        readonly at: readonly [0, 0.19, 0];
        readonly rot: readonly [90, 0, 0];
        readonly c: "wood";
    }, {
        readonly name: "lid";
        readonly pivot: true;
        readonly at: readonly [0, 0.38, 0];
        readonly group: readonly [{
            readonly slab: [number, number][];
            readonly depth: 0.07;
            readonly at: readonly [0, 0.035, 0];
            readonly rot: readonly [90, 0, 0];
            readonly c: "lid";
        }, {
            readonly slab: [number, number][];
            readonly depth: 0.04;
            readonly at: readonly [0, 0.08, 0];
            readonly rot: readonly [90, 0, 0];
            readonly c: "wood";
        }];
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.06, 0.07, 0.2];
            readonly at: readonly [0.335, 0.22, -0.3];
            readonly rot: readonly [0, -5, 0];
            readonly c: "iron";
        }, {
            readonly box: readonly [0.06, 0.07, 0.2];
            readonly at: readonly [0.29, 0.22, 0.4];
            readonly rot: readonly [0, -5, 0];
            readonly c: "iron";
        }];
    }];
} | {
    readonly id: "banner";
    readonly about: "Wall banner on an iron pole, its back on a wall at z = 0: a pointed `cloth` (map it) with a gold trim and emblem";
    readonly tags: readonly ["dungeon", "cloth"];
    readonly palette: {
        readonly cloth: "red";
        readonly trim: "sand";
        readonly pole: "night";
    };
    readonly params: {
        readonly w: readonly [0.8, 0.5, 1.2];
        readonly h: readonly [1.4, 0.8, 2];
    };
    readonly floats: true;
    readonly anchors: {
        readonly wall: readonly [0, 2.5, 0];
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
        group?: undefined;
    } | {
        cyl: [number, number, number];
        at: [number, number, number];
        rot: [number, number, number];
        seg: number;
        c: string;
        mirror?: undefined;
        group?: undefined;
    } | {
        mirror: {
            ball: [number, number, number];
            at: [number, number, number];
            c: string;
        }[];
        cyl?: undefined;
        at?: undefined;
        rot?: undefined;
        seg?: undefined;
        c?: undefined;
        group?: undefined;
    } | {
        at: [number, number, number];
        group: ({
            slab: [number, number][];
            depth: number;
            at: [number, number, number];
            c: string;
            box?: undefined;
        } | {
            box: [number, number, number];
            at: [number, number, number];
            c: string;
            slab?: undefined;
            depth?: undefined;
        })[];
        mirror?: undefined;
        cyl?: undefined;
        rot?: undefined;
        seg?: undefined;
        c?: undefined;
    })[];
} | {
    readonly id: "spikes";
    readonly about: "Floor spike trap: an iron plate with `n` steel spikes in dark holes, the spikes on the pivot `spikes` to raise and lower";
    readonly tags: readonly ["dungeon", "iron"];
    readonly palette: {
        readonly plate: "night";
        readonly rim: "slate";
        readonly hole: "ink";
        readonly spike: "mist";
    };
    readonly params: {
        readonly n: readonly [9, 4, 9];
        readonly h: readonly [0.4, 0.2, 0.55];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
} | {
    readonly id: "altar";
    readonly about: "Stone altar on a step: a pale slab top over a dark moulding and a carved body, a `cloth` runner (map it) laid along it and hanging down the front";
    readonly tags: readonly ["dungeon", "stone", "cloth", "temple"];
    readonly palette: {
        readonly stone: "mist";
        readonly stone2: "slate";
        readonly dark: "night";
        readonly cloth: "red";
        readonly trim: "sand";
    };
    readonly params: {
        readonly w: readonly [1.6, 1, 2.4];
    };
    readonly anchors: {
        readonly top: readonly [0, 1.03, 0];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => ({
        box: [number, number, number];
        at: [number, number, number];
        c: string;
        name: string;
        mirror?: undefined;
        slab?: undefined;
        depth?: undefined;
    } | {
        readonly mirror: readonly [{
            readonly box: readonly [number, 0.38, 0.03];
            readonly at: readonly [number, 0.47, 0.31];
            readonly c: "stone2";
        }];
        box?: undefined;
        at?: undefined;
        c?: undefined;
        name?: undefined;
        slab?: undefined;
        depth?: undefined;
    } | {
        box: [number, number, number];
        at: [number, number, number];
        c: string;
        name?: undefined;
        mirror?: undefined;
        slab?: undefined;
        depth?: undefined;
    } | {
        slab: [number, number][];
        depth: number;
        at: [number, number, number];
        c: string;
        box?: undefined;
        name?: undefined;
        mirror?: undefined;
    })[];
} | {
    readonly id: "sarcophagus";
    readonly about: "Stone sarcophagus on a plinth, head at -Z: carved panels down a pale body, a dark lid (the pivot `lid`) carved with a lying effigy holding a gold sword (map `trim`)";
    readonly tags: readonly ["dungeon", "stone", "tomb"];
    readonly palette: {
        readonly stone: "mist";
        readonly stone2: "slate";
        readonly trim: "sand";
    };
    readonly parts: readonly [{
        readonly box: readonly [1.04, 0.12, 2.3];
        readonly at: readonly [0, 0.06, 0];
        readonly c: "stone2";
        readonly name: "plinth";
    }, {
        readonly box: readonly [0.88, 0.6, 2.14];
        readonly at: readonly [0, 0.42, 0];
        readonly c: "stone";
        readonly name: "body";
    }, {
        readonly mirror: Part[];
    }, {
        readonly box: readonly [0.56, 0.34, 0.03];
        readonly at: readonly [0, 0.42, 1.07];
        readonly c: "stone2";
    }, {
        readonly name: "lid";
        readonly pivot: true;
        readonly at: readonly [0, 0.72, 0];
        readonly group: readonly [{
            readonly box: readonly [0.98, 0.12, 2.24];
            readonly at: readonly [0, 0.06, 0];
            readonly c: "stone2";
        }, {
            readonly box: readonly [0.5, 0.07, 0.3];
            readonly at: readonly [0, 0.155, -0.86];
            readonly c: "stone";
        }, {
            readonly ball: readonly [0.26, 0.22, 0.3];
            readonly at: readonly [0, 0.29, -0.8];
            readonly seg: 8;
            readonly c: "stone";
            readonly name: "head";
        }, {
            readonly slab: readonly [readonly [-0.25, -0.66], readonly [0.25, -0.66], readonly [0.19, 0.8], readonly [-0.19, 0.8]];
            readonly depth: 0.16;
            readonly at: readonly [0, 0.2, 0];
            readonly rot: readonly [90, 0, 0];
            readonly c: "stone";
            readonly name: "effigy";
        }, {
            readonly box: readonly [0.3, 0.12, 0.1];
            readonly at: readonly [0, 0.34, 0.74];
            readonly c: "stone";
        }, {
            readonly box: readonly [0.08, 0.03, 0.82];
            readonly at: readonly [0, 0.295, 0.2];
            readonly c: "trim";
            readonly name: "sword";
        }, {
            readonly box: readonly [0.28, 0.04, 0.07];
            readonly at: readonly [0, 0.3, -0.23];
            readonly c: "trim";
        }, {
            readonly box: readonly [0.22, 0.08, 0.14];
            readonly at: readonly [0, 0.32, -0.34];
            readonly c: "stone";
        }];
    }];
} | {
    readonly id: "tombstone";
    readonly about: "Headstone on a low base with a tuft of moss (map `moss`), seeded lean: `shape` 0 a rounded top with an inscription, 1 a ringed cross, 2 a capped slab with a sunk panel; `h` is the height of the stone above its 0.12 m base";
    readonly tags: readonly ["dungeon", "stone", "grave"];
    readonly palette: {
        readonly stone: "mist";
        readonly stone2: "slate";
        readonly carve: "night";
        readonly moss: "green";
    };
    readonly params: {
        readonly shape: readonly [0, 0, 2];
        readonly h: readonly [0.9, 0.6, 1.3];
    };
    readonly parts: (p: Readonly<Record<string, number>>, rng: import("../..").Rng) => ({
        box: [number, number, number];
        at: [number, number, number];
        c: string;
        name: string;
        rot?: undefined;
        group?: undefined;
        lump?: undefined;
        seed?: undefined;
    } | {
        at: [number, number, number];
        rot: [number, number, number];
        group: Part[];
        box?: undefined;
        c?: undefined;
        name?: undefined;
        lump?: undefined;
        seed?: undefined;
    } | {
        lump: [number, number, number];
        at: [number, number, number];
        rot: [number, number, number];
        seed: number;
        c: string;
        name: string;
        box?: undefined;
        group?: undefined;
    })[];
} | {
    readonly id: "skull-pile";
    readonly about: "Stacked pile of skulls facing out round a dark heap, in three bone shades so stacked skulls read apart, seeded; `n` skulls in up to three tiers";
    readonly tags: readonly ["dungeon", "bone"];
    readonly palette: {
        readonly bone: "white";
        readonly bone2: "sand";
        readonly bone3: "mist";
        readonly socket: "ink";
        readonly heap: "night";
    };
    readonly params: {
        readonly n: readonly [7, 4, 9];
    };
    readonly parts: (p: Readonly<Record<string, number>>, rng: import("../..").Rng) => Part[];
} | {
    readonly id: "wall-chains";
    readonly about: "Iron chains hung from ring bolts on a wall plate at 2 m, its back on a wall at z = 0, a shackle on each; `n` chains about `len` metres long (seeded)";
    readonly tags: readonly ["dungeon", "iron", "wall"];
    readonly palette: {
        readonly plate: "slate";
        readonly iron: "night";
        readonly link: "slate";
        readonly link2: "mist";
    };
    readonly params: {
        readonly n: readonly [2, 1, 3];
        readonly len: readonly [1, 0.4, 1.5];
    };
    readonly floats: true;
    readonly collider: "none";
    readonly anchors: {
        readonly wall: readonly [0, 2, 0];
    };
    readonly parts: (p: Readonly<Record<string, number>>, rng: import("../..").Rng) => Part[];
} | {
    readonly id: "portcullis";
    readonly about: "Iron portcullis for a doorway: slate bars ending in steel spikes, dark cross bands over them, all on the pivot `grate` to raise it; `w` x `h` metres";
    readonly tags: readonly ["dungeon", "iron", "door"];
    readonly palette: {
        readonly bar: "slate";
        readonly band: "night";
        readonly tip: "mist";
    };
    readonly params: {
        readonly w: readonly [1.4, 0.8, 3];
        readonly h: readonly [2.2, 1.6, 3.2];
    };
    readonly collider: "box";
    readonly parts: (p: Readonly<Record<string, number>>) => {
        name: string;
        pivot: true;
        group: Part[];
    }[];
} | {
    readonly id: "lever";
    readonly about: "Floor lever: a steel handle with a red knob (map `knob`) on the pivot `handle`, hinged between iron cheeks on a stone block; `angle` throws it (+ toward the front)";
    readonly tags: readonly ["dungeon", "iron", "mechanism"];
    readonly palette: {
        readonly stone: "mist";
        readonly iron: "night";
        readonly slot: "ink";
        readonly axle: "slate";
        readonly handle: "mist";
        readonly knob: "red";
    };
    readonly params: {
        readonly angle: readonly [-30, -40, 40];
    };
    readonly anchors: {
        readonly pivot: readonly [0, 0.38, 0];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => ({
        box: [number, number, number];
        at: [number, number, number];
        c: string;
        name: string;
        mirror?: undefined;
        cyl?: undefined;
        rot?: undefined;
        seg?: undefined;
        pivot?: undefined;
        group?: undefined;
    } | {
        box: [number, number, number];
        at: [number, number, number];
        c: string;
        name?: undefined;
        mirror?: undefined;
        cyl?: undefined;
        rot?: undefined;
        seg?: undefined;
        pivot?: undefined;
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
        cyl?: undefined;
        rot?: undefined;
        seg?: undefined;
        pivot?: undefined;
        group?: undefined;
    } | {
        cyl: [number, number, number];
        at: [number, number, number];
        rot: [number, number, number];
        seg: number;
        c: string;
        name: string;
        box?: undefined;
        mirror?: undefined;
        pivot?: undefined;
        group?: undefined;
    } | {
        name: string;
        pivot: true;
        at: [number, number, number];
        rot: [number, number, number];
        group: ({
            box: [number, number, number];
            at: [number, number, number];
            c: string;
            ball?: undefined;
            seg?: undefined;
            name?: undefined;
        } | {
            ball: [number, number, number];
            at: [number, number, number];
            seg: number;
            c: string;
            name: string;
            box?: undefined;
        })[];
        box?: undefined;
        c?: undefined;
        mirror?: undefined;
        cyl?: undefined;
        seg?: undefined;
    })[];
} | {
    readonly id: "pressure-plate";
    readonly about: "Pressure plate: a pale stone tile raised a few centimetres in a dark groove and a slate frame, a red mark on it (map `mark`); the tile is the pivot `plate` to press; `size` metres square";
    readonly tags: readonly ["dungeon", "stone", "trap", "mechanism"];
    readonly palette: {
        readonly frame: "slate";
        readonly groove: "ink";
        readonly plate: "mist";
        readonly mark: "red";
    };
    readonly params: {
        readonly size: readonly [0.9, 0.5, 1.4];
    };
    readonly collider: "none";
    readonly parts: (p: Readonly<Record<string, number>>) => ({
        box: [number, number, number];
        at: [number, number, number];
        c: string;
        name: string;
        pivot?: undefined;
        group?: undefined;
    } | {
        box: [number, number, number];
        at: [number, number, number];
        c: string;
        name?: undefined;
        pivot?: undefined;
        group?: undefined;
    } | {
        name: string;
        pivot: true;
        group: ({
            box: [number, number, number];
            at: [number, number, number];
            c: string;
            rot?: undefined;
            name?: undefined;
        } | {
            box: [number, number, number];
            at: [number, number, number];
            rot: [number, number, number];
            c: string;
            name: string;
        })[];
        box?: undefined;
        at?: undefined;
        c?: undefined;
    })[];
} | {
    readonly id: "obelisk";
    readonly about: "Stone obelisk on stepped plinths: a tapering shaft, a dark pyramidion and a dark band of small glowing runes (map `rune`, which also lights it); `h` is its height";
    readonly tags: readonly ["dungeon", "stone", "monument", "magic", "light"];
    readonly palette: {
        readonly stone: "mist";
        readonly stone2: "slate";
        readonly band: "night";
        readonly rune: "cyan";
    };
    readonly params: {
        readonly h: readonly [3.2, 2.2, 5];
    };
    readonly light: {
        readonly at: readonly [0, 2.2, 0.5];
        readonly c: "rune";
        readonly intensity: 1.5;
        readonly radius: 4;
        readonly flicker: "pulse";
    };
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
} | {
    readonly id: "rune-stone";
    readonly about: "Standing stone of seeded outline on a few pale footing stones: a dark carved strip down its face holding small glowing runes (map `rune`, which also lights it); `h` is its height";
    readonly tags: readonly ["dungeon", "stone", "magic", "light", "nature"];
    readonly palette: {
        readonly stone: "slate";
        readonly foot: "mist";
        readonly carve: "night";
        readonly rune: "cyan";
    };
    readonly params: {
        readonly h: readonly [1.8, 1.2, 2.6];
    };
    readonly light: {
        readonly at: readonly [0, 1, 0.5];
        readonly c: "rune";
        readonly intensity: 1.4;
        readonly radius: 3.5;
        readonly flicker: "pulse";
    };
    readonly parts: (p: Readonly<Record<string, number>>, rng: import("../..").Rng) => Part[];
} | {
    readonly id: "pillory";
    readonly about: "Wooden pillory on a stone footing: a capped post, a split yoke at neck height with a head hole and two hand holes, the upper board on the pivot `yoke` hinged at the left, an iron hasp and a gold lock (map `lock`)";
    readonly tags: readonly ["dungeon", "wood", "town"];
    readonly palette: {
        readonly wood: "orange";
        readonly wood2: "red";
        readonly stone: "mist";
        readonly iron: "night";
        readonly hole: "ink";
        readonly lock: "sand";
    };
    readonly parts: () => ({
        box: [number, number, number];
        at: [number, number, number];
        c: string;
        name: string;
        cyl?: undefined;
        top?: undefined;
        seg?: undefined;
        rot?: undefined;
        group?: undefined;
        pivot?: undefined;
    } | {
        cyl: [number, number, number];
        at: [number, number, number];
        top: number;
        seg: number;
        rot: [number, number, number];
        c: string;
        box?: undefined;
        name?: undefined;
        group?: undefined;
        pivot?: undefined;
    } | {
        box: [number, number, number];
        at: [number, number, number];
        c: string;
        name?: undefined;
        cyl?: undefined;
        top?: undefined;
        seg?: undefined;
        rot?: undefined;
        group?: undefined;
        pivot?: undefined;
    } | {
        group: Part[];
        at: [number, number, number];
        box?: undefined;
        c?: undefined;
        name?: undefined;
        cyl?: undefined;
        top?: undefined;
        seg?: undefined;
        rot?: undefined;
        pivot?: undefined;
    } | {
        name: string;
        pivot: true;
        at: [number, number, number];
        group: Part[];
        box?: undefined;
        c?: undefined;
        cyl?: undefined;
        top?: undefined;
        seg?: undefined;
        rot?: undefined;
    })[];
} | {
    readonly id: "pit-grate";
    readonly about: "Pit in the floor like a well head: a low curb of stones in two greys round a black hole, under an iron ring and grate of crossed bars (the pivot `grate`); `r` is the hole's radius";
    readonly tags: readonly ["dungeon", "stone", "iron", "trap"];
    readonly palette: {
        readonly stone: "mist";
        readonly stone2: "slate";
        readonly hole: "ink";
        readonly iron: "night";
    };
    readonly params: {
        readonly r: readonly [0.6, 0.4, 1];
    };
    readonly collider: "cyl";
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
})[];
