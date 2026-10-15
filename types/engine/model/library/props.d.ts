import type { Part, Vec3 } from '../types';
export declare const signpost: {
    readonly id: "signpost";
    readonly about: "Wooden signpost: a post with two or three arrow boards pointing different ways, on footing stones";
    readonly tags: readonly ["props", "sign", "wood"];
    readonly palette: {
        readonly post: "red";
        readonly board: "sand";
        readonly board2: "orange";
        readonly dark: "plum";
        readonly stone: "slate";
        readonly stone2: "mist";
    };
    readonly params: {
        readonly boards: readonly [3, 2, 3];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
};
export declare const sack: {
    readonly id: "sack";
    readonly about: "Filled cloth sack tied at the neck with a cord, a ruffled tuft above it; `h` is its height";
    readonly tags: readonly ["props", "loot", "cloth"];
    readonly palette: {
        readonly cloth: "sand";
        readonly neck: "orange";
        readonly cord: "red";
    };
    readonly params: {
        readonly h: readonly [0.74, 0.45, 1];
    };
    readonly parts: (p: Readonly<Record<string, number>>, rng: import("../..").Rng) => {
        scale: [number, number, number];
        rot: [number, number, number];
        group: ({
            lathe: readonly [number, number][];
            seg: number;
            c: string;
            name: string;
            cyl?: undefined;
            at?: undefined;
            top?: undefined;
            torus?: undefined;
            lump?: undefined;
            rot?: undefined;
            seed?: undefined;
        } | {
            cyl: [number, number, number];
            at: [number, number, number];
            top: number;
            seg: number;
            c: string;
            lathe?: undefined;
            name?: undefined;
            torus?: undefined;
            lump?: undefined;
            rot?: undefined;
            seed?: undefined;
        } | {
            torus: [number, number, number];
            at: [number, number, number];
            seg: number;
            c: string;
            lathe?: undefined;
            name?: undefined;
            cyl?: undefined;
            top?: undefined;
            lump?: undefined;
            rot?: undefined;
            seed?: undefined;
        } | {
            lump: [number, number, number];
            at: [number, number, number];
            rot: [number, number, number];
            seed: number;
            c: string;
            name: string;
            lathe?: undefined;
            seg?: undefined;
            cyl?: undefined;
            top?: undefined;
            torus?: undefined;
        })[];
    }[];
};
export declare const anvil: {
    readonly id: "anvil";
    readonly about: "Smith's iron anvil with a horn and a light face, on a wooden block";
    readonly tags: readonly ["props", "tool", "iron", "wood"];
    readonly palette: {
        readonly wood: "orange";
        readonly cut: "sand";
        readonly iron: "night";
        readonly face: "mist";
    };
    readonly parts: readonly [{
        readonly cyl: readonly [0.5, 0.4, 0.5];
        readonly at: readonly [0, 0.2, 0];
        readonly top: 0.88;
        readonly seg: 8;
        readonly c: "wood";
        readonly name: "block";
    }, {
        readonly cyl: readonly [0.4, 0.04, 0.4];
        readonly at: readonly [0, 0.42, 0];
        readonly seg: 8;
        readonly c: "cut";
    }, {
        readonly name: "anvil";
        readonly at: readonly [0, 0.44, 0];
        readonly rot: readonly [0, 15, 0];
        readonly group: readonly [{
            readonly slab: readonly [number, number][];
            readonly depth: 0.18;
            readonly c: "iron";
        }, {
            readonly box: readonly [0.4, 0.05, 0.26];
            readonly at: readonly [0, 0.025, 0];
            readonly c: "iron";
        }, {
            readonly box: readonly [0.48, 0.03, 0.16];
            readonly at: readonly [-0.03, 0.355, 0];
            readonly c: "face";
        }, {
            readonly cone: readonly [0.12, 0.26, 0.12];
            readonly at: readonly [0.35, 0.29, 0];
            readonly rot: readonly [0, 0, -90];
            readonly seg: 6;
            readonly c: "iron";
            readonly name: "horn";
        }];
    }];
};
export declare const pickaxe: {
    readonly id: "pickaxe";
    readonly about: "Pickaxe lying on the ground: a curved iron head and a wooden handle with a wrapped grip";
    readonly tags: readonly ["props", "tool", "iron", "wood"];
    readonly palette: {
        readonly wood: "orange";
        readonly steel: "mist";
        readonly iron: "slate";
        readonly wrap: "plum";
    };
    readonly anchors: {
        readonly grip: {
            readonly at: readonly [0.42, 0.06, 0];
            readonly rot: readonly [90, 0, 90];
        };
    };
    readonly parts: readonly [{
        readonly cyl: readonly [0.09, 1, 0.09];
        readonly at: readonly [0.06, 0.06, 0];
        readonly rot: readonly [0, 0, 90];
        readonly seg: 6;
        readonly c: "wood";
        readonly name: "handle";
    }, {
        readonly cyl: readonly [0.105, 0.22, 0.105];
        readonly at: readonly [0.44, 0.06, 0];
        readonly rot: readonly [0, 0, 90];
        readonly seg: 6;
        readonly c: "wrap";
    }, {
        readonly slab: readonly [number, number][];
        readonly depth: 0.1;
        readonly at: readonly [-0.42, 0.06, 0];
        readonly rot: readonly [-90, 0, -90];
        readonly c: "steel";
        readonly name: "head";
    }, {
        readonly box: readonly [0.15, 0.12, 0.14];
        readonly at: readonly [-0.42, 0.06, 0];
        readonly c: "iron";
    }];
};
export declare const goldPile: {
    readonly id: "gold-pile";
    readonly about: "Heap of gold coins (seeded) with a couple of gems, a few coins spilled and stacked beside it";
    readonly tags: readonly ["props", "loot", "gold"];
    readonly palette: {
        readonly gold: "sand";
        readonly shade: "orange";
        readonly gem: "cyan";
        readonly gem2: "red";
    };
    readonly params: {
        readonly coins: readonly [26, 10, 32];
        readonly r: readonly [0.42, 0.25, 0.7];
    };
    readonly parts: (p: Readonly<Record<string, number>>, rng: import("../..").Rng) => Part[];
};
export declare const cart: {
    readonly id: "cart";
    readonly about: "Two-wheeled hand cart: a plank bed with sides on big spoked wheels, long handles with a grip bar and a stand";
    readonly tags: readonly ["props", "transport", "wood"];
    readonly palette: {
        readonly bed: "red";
        readonly side: "orange";
        readonly rail: "sand";
        readonly frame: "plum";
        readonly tyre: "night";
        readonly spoke: "sand";
        readonly hub: "slate";
        readonly axle: "ink";
    };
    readonly anchors: {
        readonly handle: readonly [0, 0.635, 1.33];
    };
    readonly parts: readonly [Part, Part, {
        readonly cyl: readonly [0.08, 1.34, 0.08];
        readonly at: readonly [0, 0.55, -0.2];
        readonly rot: readonly [0, 0, 90];
        readonly seg: 6;
        readonly c: "axle";
        readonly name: "axle";
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.09, 0.09, 2.35];
            readonly at: readonly [0.31, 0.635, 0.225];
            readonly c: "side";
        }];
    }, {
        readonly cyl: readonly [0.07, 0.8, 0.07];
        readonly at: readonly [0, 0.635, 1.33];
        readonly rot: readonly [0, 0, 90];
        readonly seg: 6;
        readonly c: "rail";
        readonly name: "grip";
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.08, 0.59, 0.08];
            readonly at: readonly [0.31, 0.295, 0.82];
            readonly rot: readonly [-8, 0, 0];
            readonly c: "frame";
        }];
    }, {
        readonly box: readonly [0.54, 0.06, 0.06];
        readonly at: readonly [0, 0.2, 0.8];
        readonly c: "frame";
    }, {
        readonly name: "bed";
        readonly at: readonly [0, 0, -0.25];
        readonly group: readonly [{
            readonly box: readonly [0.94, 0.06, 1.36];
            readonly at: readonly [0, 0.71, 0];
            readonly c: "bed";
            readonly name: "floor";
        }, {
            readonly mirror: readonly [{
                readonly box: readonly [0.06, 0.32, 1.36];
                readonly at: readonly [0.44, 0.9, 0];
                readonly c: "side";
            }];
        }, {
            readonly mirror: readonly [{
                readonly box: readonly [0.82, 0.32, 0.06];
                readonly at: readonly [0, 0.9, 0.65];
                readonly c: "side";
            }];
            readonly axis: "z";
        }, {
            readonly mirror: readonly [{
                readonly box: readonly [0.09, 0.05, 1.42];
                readonly at: readonly [0.44, 1.085, 0];
                readonly c: "rail";
            }];
        }, {
            readonly mirror: readonly [{
                readonly box: readonly [0.97, 0.05, 0.09];
                readonly at: readonly [0, 1.085, 0.65];
                readonly c: "rail";
            }];
            readonly axis: "z";
        }, {
            readonly mirror: readonly [{
                readonly box: readonly [0.07, 0.04, 1.34];
                readonly at: readonly [0.44, 0.9, 0];
                readonly c: "bed";
            }];
        }, {
            readonly mirror: readonly [{
                readonly box: readonly [0.8, 0.04, 0.07];
                readonly at: readonly [0, 0.9, 0.65];
                readonly c: "bed";
            }];
            readonly axis: "z";
        }, {
            readonly mirror: readonly [{
                readonly mirror: readonly [{
                    readonly box: readonly [0.07, 0.4, 0.07];
                    readonly at: readonly [0.505, 0.88, 0.62];
                    readonly c: "frame";
                }];
                readonly axis: "z";
            }];
        }];
    }];
};
export declare const shovel: {
    readonly id: "shovel";
    readonly about: "Shovel standing on its blade: a steel blade with a rolled top edge, an iron socket, a wooden shaft and a T grip";
    readonly tags: readonly ["props", "tool", "iron", "wood"];
    readonly palette: {
        readonly wood: "orange";
        readonly steel: "mist";
        readonly iron: "slate";
        readonly grip: "red";
    };
    readonly anchors: {
        readonly grip: {
            readonly at: readonly [0, 0.98, 0];
            readonly rot: readonly [180, 0, 0];
        };
    };
    readonly parts: readonly [{
        readonly slab: readonly [number, number][];
        readonly depth: 0.03;
        readonly c: "steel";
        readonly name: "blade";
    }, {
        readonly box: readonly [0.26, 0.06, 0.06];
        readonly at: readonly [0, 0.29, 0];
        readonly c: "iron";
    }, {
        readonly cyl: readonly [0.08, 0.16, 0.08];
        readonly at: readonly [0, 0.38, 0];
        readonly top: 0.8;
        readonly seg: 6;
        readonly c: "iron";
        readonly name: "socket";
    }, {
        readonly cyl: readonly [0.065, 0.64, 0.065];
        readonly at: readonly [0, 0.77, 0];
        readonly seg: 6;
        readonly c: "wood";
        readonly name: "shaft";
    }, {
        readonly box: readonly [0.2, 0.07, 0.075];
        readonly at: readonly [0, 1.1, 0];
        readonly c: "grip";
        readonly name: "t-grip";
    }];
};
export declare const hammer: {
    readonly id: "hammer";
    readonly about: "Smith's hammer standing on its head: an iron head with a light striking face and a tapered peen, a wooden handle with a wrapped end";
    readonly tags: readonly ["props", "tool", "iron", "wood"];
    readonly palette: {
        readonly wood: "orange";
        readonly iron: "slate";
        readonly face: "white";
        readonly wrap: "plum";
    };
    readonly anchors: {
        readonly grip: {
            readonly at: readonly [0, 0.37, 0];
            readonly rot: readonly [180, 0, 0];
        };
    };
    readonly parts: readonly [{
        readonly box: readonly [0.13, 0.085, 0.085];
        readonly at: readonly [0.02, 0.0425, 0];
        readonly c: "iron";
        readonly name: "head";
    }, {
        readonly box: readonly [0.03, 0.095, 0.095];
        readonly at: readonly [0.095, 0.0475, 0];
        readonly c: "face";
    }, {
        readonly group: readonly [{
            readonly cyl: readonly [0.085, 0.07, 0.085];
            readonly top: 0.45;
            readonly seg: 4;
            readonly rot: readonly [0, 45, 0];
            readonly c: "iron";
        }];
        readonly at: readonly [-0.08, 0.0425, 0];
        readonly rot: readonly [0, 0, 90];
        readonly name: "peen";
    }, {
        readonly cyl: readonly [0.06, 0.34, 0.06];
        readonly at: readonly [0, 0.25, 0];
        readonly seg: 6;
        readonly c: "wood";
        readonly name: "handle";
    }, {
        readonly cyl: readonly [0.072, 0.1, 0.072];
        readonly at: readonly [0, 0.38, 0];
        readonly seg: 6;
        readonly c: "wrap";
    }];
};
export declare const wheelbarrow: {
    readonly id: "wheelbarrow";
    readonly about: "Wooden wheelbarrow: a hollow tub with a light rim on two shafts, one spoked wheel in front (+Z), two legs and wrapped handles behind";
    readonly tags: readonly ["props", "transport", "wood", "town"];
    readonly palette: {
        readonly tub: "red";
        readonly rim: "sand";
        readonly shaft: "orange";
        readonly tyre: "night";
        readonly spoke: "sand";
        readonly hub: "slate";
        readonly grip: "plum";
    };
    readonly anchors: {
        readonly handle: readonly [0, 0.52, -0.76];
    };
    readonly parts: readonly [{
        readonly name: "wheel";
        readonly at: readonly [0, 0.2, 0.6];
        readonly rot: readonly [0, 0, 90];
        readonly group: readonly [{
            readonly torus: readonly [0.4, 0.07, 0.4];
            readonly seg: 12;
            readonly c: "tyre";
        }, ...Part[], {
            readonly cyl: readonly [0.11, 0.12, 0.11];
            readonly seg: 8;
            readonly c: "hub";
        }];
    }, {
        readonly cyl: readonly [0.06, 0.22, 0.06];
        readonly at: readonly [0, 0.2, 0.6];
        readonly rot: readonly [0, 0, 90];
        readonly seg: 6;
        readonly c: "hub";
        readonly name: "axle";
    }, {
        readonly mirror: readonly [{
            readonly tube: readonly Vec3[];
            readonly r: 0.04;
            readonly seg: 6;
            readonly c: "shaft";
            readonly name: "shaft";
        }];
    }, {
        readonly mirror: readonly [{
            readonly tube: readonly [readonly [0.255, 0.454, -0.61], readonly [0.273, 0.533, -0.79]];
            readonly r: 0.05;
            readonly seg: 6;
            readonly c: "grip";
        }];
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.065, 0.3, 0.065];
            readonly at: readonly [0.22, 0.15, -0.2];
            readonly c: "shaft";
            readonly name: "leg";
        }];
    }, {
        readonly name: "tub";
        readonly at: readonly [0, 0.335, 0.08];
        readonly scale: readonly [1, 1, 1.4];
        readonly group: readonly [{
            readonly lathe: readonly [number, number][];
            readonly seg: 4;
            readonly rot: readonly [0, 45, 0];
            readonly c: "tub";
        }, {
            readonly lathe: readonly [readonly [0.405, 0.28], readonly [0.452, 0.28], readonly [0.452, 0.315], readonly [0.405, 0.315], readonly [0.405, 0.28]];
            readonly seg: 4;
            readonly rot: readonly [0, 45, 0];
            readonly c: "rim";
            readonly name: "rim";
        }];
    }];
};
export declare const ropeCoil: {
    readonly id: "rope-coil";
    readonly about: "Coil of rope on the floor: `loops` stacked turns in two shades, the loose end trailing out to the front with a whipped tip; `r` is its radius";
    readonly tags: readonly ["props", "rope", "town", "dungeon"];
    readonly palette: {
        readonly rope: "sand";
        readonly rope2: "orange";
        readonly whip: "red";
    };
    readonly params: {
        readonly loops: readonly [3, 2, 5];
        readonly r: readonly [0.25, 0.15, 0.4];
    };
    readonly parts: (p: Readonly<Record<string, number>>, rng: import("../..").Rng) => Part[];
};
export declare const ladder: {
    readonly id: "ladder";
    readonly about: "Wooden ladder, `rungs` rungs 0.3 m apart between two rails; `lean` tips its top back to a wall at z = 0 (0 stands it upright against it)";
    readonly tags: readonly ["props", "wood", "town"];
    readonly palette: {
        readonly rail: "orange";
        readonly rung: "sand";
    };
    readonly params: {
        readonly rungs: readonly [7, 3, 12];
        readonly lean: readonly [15, 0, 25];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => {
        at: [number, number, number];
        rot: [number, number, number];
        group: Part[];
    }[];
};
export declare const waymarker: {
    readonly id: "waymarker";
    readonly about: "Waymarker: a short standing stone, five-sided and tapering to a rough top, a little tipped (seeded), with a painted band round it (map `paint`); `h` is its height";
    readonly tags: readonly ["props", "sign", "stone", "nature"];
    readonly palette: {
        readonly stone: "mist";
        readonly paint: "red";
    };
    readonly params: {
        readonly h: readonly [0.9, 0.5, 1.4];
    };
    readonly parts: (p: Readonly<Record<string, number>>, rng: import("../..").Rng) => {
        at: [number, number, number];
        rot: [number, number, number];
        group: ({
            cyl: [number, number, number];
            at: [number, number, number];
            top: number;
            seg: number;
            c: string;
            name: string;
            lump?: undefined;
            seed?: undefined;
        } | {
            lump: [number, number, number];
            at: [number, number, number];
            seed: number;
            c: string;
            name: string;
            cyl?: undefined;
            top?: undefined;
            seg?: undefined;
        })[];
    }[];
};
export declare const noticeBoard: {
    readonly id: "notice-board";
    readonly about: "Notice board: a framed board on two posts, `notes` paper notes in two shades pinned to its front (seeded)";
    readonly tags: readonly ["props", "sign", "wood", "town"];
    readonly palette: {
        readonly post: "red";
        readonly board: "orange";
        readonly frame: "plum";
        readonly paper: "white";
        readonly paper2: "sand";
    };
    readonly params: {
        readonly notes: readonly [5, 0, 8];
    };
    readonly parts: (p: Readonly<Record<string, number>>, rng: import("../..").Rng) => Part[];
};
export declare const lootPouch: {
    readonly id: "loot-pouch";
    readonly about: "Small leather drawstring pouch tipped on its side, a little heap of gold spilled from its open mouth with `coins` coins on and round it (seeded)";
    readonly tags: readonly ["props", "loot", "gold"];
    readonly palette: {
        readonly leather: "red";
        readonly neck: "plum";
        readonly cord: "sand";
        readonly gold: "sand";
        readonly shade: "orange";
    };
    readonly params: {
        readonly coins: readonly [9, 4, 16];
    };
    readonly parts: (p: Readonly<Record<string, number>>, rng: import("../..").Rng) => {
        rot: [number, number, number];
        group: Part[];
    }[];
};
export declare const PROPS: ({
    readonly id: "signpost";
    readonly about: "Wooden signpost: a post with two or three arrow boards pointing different ways, on footing stones";
    readonly tags: readonly ["props", "sign", "wood"];
    readonly palette: {
        readonly post: "red";
        readonly board: "sand";
        readonly board2: "orange";
        readonly dark: "plum";
        readonly stone: "slate";
        readonly stone2: "mist";
    };
    readonly params: {
        readonly boards: readonly [3, 2, 3];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
} | {
    readonly id: "sack";
    readonly about: "Filled cloth sack tied at the neck with a cord, a ruffled tuft above it; `h` is its height";
    readonly tags: readonly ["props", "loot", "cloth"];
    readonly palette: {
        readonly cloth: "sand";
        readonly neck: "orange";
        readonly cord: "red";
    };
    readonly params: {
        readonly h: readonly [0.74, 0.45, 1];
    };
    readonly parts: (p: Readonly<Record<string, number>>, rng: import("../..").Rng) => {
        scale: [number, number, number];
        rot: [number, number, number];
        group: ({
            lathe: readonly [number, number][];
            seg: number;
            c: string;
            name: string;
            cyl?: undefined;
            at?: undefined;
            top?: undefined;
            torus?: undefined;
            lump?: undefined;
            rot?: undefined;
            seed?: undefined;
        } | {
            cyl: [number, number, number];
            at: [number, number, number];
            top: number;
            seg: number;
            c: string;
            lathe?: undefined;
            name?: undefined;
            torus?: undefined;
            lump?: undefined;
            rot?: undefined;
            seed?: undefined;
        } | {
            torus: [number, number, number];
            at: [number, number, number];
            seg: number;
            c: string;
            lathe?: undefined;
            name?: undefined;
            cyl?: undefined;
            top?: undefined;
            lump?: undefined;
            rot?: undefined;
            seed?: undefined;
        } | {
            lump: [number, number, number];
            at: [number, number, number];
            rot: [number, number, number];
            seed: number;
            c: string;
            name: string;
            lathe?: undefined;
            seg?: undefined;
            cyl?: undefined;
            top?: undefined;
            torus?: undefined;
        })[];
    }[];
} | {
    readonly id: "anvil";
    readonly about: "Smith's iron anvil with a horn and a light face, on a wooden block";
    readonly tags: readonly ["props", "tool", "iron", "wood"];
    readonly palette: {
        readonly wood: "orange";
        readonly cut: "sand";
        readonly iron: "night";
        readonly face: "mist";
    };
    readonly parts: readonly [{
        readonly cyl: readonly [0.5, 0.4, 0.5];
        readonly at: readonly [0, 0.2, 0];
        readonly top: 0.88;
        readonly seg: 8;
        readonly c: "wood";
        readonly name: "block";
    }, {
        readonly cyl: readonly [0.4, 0.04, 0.4];
        readonly at: readonly [0, 0.42, 0];
        readonly seg: 8;
        readonly c: "cut";
    }, {
        readonly name: "anvil";
        readonly at: readonly [0, 0.44, 0];
        readonly rot: readonly [0, 15, 0];
        readonly group: readonly [{
            readonly slab: readonly [number, number][];
            readonly depth: 0.18;
            readonly c: "iron";
        }, {
            readonly box: readonly [0.4, 0.05, 0.26];
            readonly at: readonly [0, 0.025, 0];
            readonly c: "iron";
        }, {
            readonly box: readonly [0.48, 0.03, 0.16];
            readonly at: readonly [-0.03, 0.355, 0];
            readonly c: "face";
        }, {
            readonly cone: readonly [0.12, 0.26, 0.12];
            readonly at: readonly [0.35, 0.29, 0];
            readonly rot: readonly [0, 0, -90];
            readonly seg: 6;
            readonly c: "iron";
            readonly name: "horn";
        }];
    }];
} | {
    readonly id: "pickaxe";
    readonly about: "Pickaxe lying on the ground: a curved iron head and a wooden handle with a wrapped grip";
    readonly tags: readonly ["props", "tool", "iron", "wood"];
    readonly palette: {
        readonly wood: "orange";
        readonly steel: "mist";
        readonly iron: "slate";
        readonly wrap: "plum";
    };
    readonly anchors: {
        readonly grip: {
            readonly at: readonly [0.42, 0.06, 0];
            readonly rot: readonly [90, 0, 90];
        };
    };
    readonly parts: readonly [{
        readonly cyl: readonly [0.09, 1, 0.09];
        readonly at: readonly [0.06, 0.06, 0];
        readonly rot: readonly [0, 0, 90];
        readonly seg: 6;
        readonly c: "wood";
        readonly name: "handle";
    }, {
        readonly cyl: readonly [0.105, 0.22, 0.105];
        readonly at: readonly [0.44, 0.06, 0];
        readonly rot: readonly [0, 0, 90];
        readonly seg: 6;
        readonly c: "wrap";
    }, {
        readonly slab: readonly [number, number][];
        readonly depth: 0.1;
        readonly at: readonly [-0.42, 0.06, 0];
        readonly rot: readonly [-90, 0, -90];
        readonly c: "steel";
        readonly name: "head";
    }, {
        readonly box: readonly [0.15, 0.12, 0.14];
        readonly at: readonly [-0.42, 0.06, 0];
        readonly c: "iron";
    }];
} | {
    readonly id: "gold-pile";
    readonly about: "Heap of gold coins (seeded) with a couple of gems, a few coins spilled and stacked beside it";
    readonly tags: readonly ["props", "loot", "gold"];
    readonly palette: {
        readonly gold: "sand";
        readonly shade: "orange";
        readonly gem: "cyan";
        readonly gem2: "red";
    };
    readonly params: {
        readonly coins: readonly [26, 10, 32];
        readonly r: readonly [0.42, 0.25, 0.7];
    };
    readonly parts: (p: Readonly<Record<string, number>>, rng: import("../..").Rng) => Part[];
} | {
    readonly id: "cart";
    readonly about: "Two-wheeled hand cart: a plank bed with sides on big spoked wheels, long handles with a grip bar and a stand";
    readonly tags: readonly ["props", "transport", "wood"];
    readonly palette: {
        readonly bed: "red";
        readonly side: "orange";
        readonly rail: "sand";
        readonly frame: "plum";
        readonly tyre: "night";
        readonly spoke: "sand";
        readonly hub: "slate";
        readonly axle: "ink";
    };
    readonly anchors: {
        readonly handle: readonly [0, 0.635, 1.33];
    };
    readonly parts: readonly [Part, Part, {
        readonly cyl: readonly [0.08, 1.34, 0.08];
        readonly at: readonly [0, 0.55, -0.2];
        readonly rot: readonly [0, 0, 90];
        readonly seg: 6;
        readonly c: "axle";
        readonly name: "axle";
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.09, 0.09, 2.35];
            readonly at: readonly [0.31, 0.635, 0.225];
            readonly c: "side";
        }];
    }, {
        readonly cyl: readonly [0.07, 0.8, 0.07];
        readonly at: readonly [0, 0.635, 1.33];
        readonly rot: readonly [0, 0, 90];
        readonly seg: 6;
        readonly c: "rail";
        readonly name: "grip";
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.08, 0.59, 0.08];
            readonly at: readonly [0.31, 0.295, 0.82];
            readonly rot: readonly [-8, 0, 0];
            readonly c: "frame";
        }];
    }, {
        readonly box: readonly [0.54, 0.06, 0.06];
        readonly at: readonly [0, 0.2, 0.8];
        readonly c: "frame";
    }, {
        readonly name: "bed";
        readonly at: readonly [0, 0, -0.25];
        readonly group: readonly [{
            readonly box: readonly [0.94, 0.06, 1.36];
            readonly at: readonly [0, 0.71, 0];
            readonly c: "bed";
            readonly name: "floor";
        }, {
            readonly mirror: readonly [{
                readonly box: readonly [0.06, 0.32, 1.36];
                readonly at: readonly [0.44, 0.9, 0];
                readonly c: "side";
            }];
        }, {
            readonly mirror: readonly [{
                readonly box: readonly [0.82, 0.32, 0.06];
                readonly at: readonly [0, 0.9, 0.65];
                readonly c: "side";
            }];
            readonly axis: "z";
        }, {
            readonly mirror: readonly [{
                readonly box: readonly [0.09, 0.05, 1.42];
                readonly at: readonly [0.44, 1.085, 0];
                readonly c: "rail";
            }];
        }, {
            readonly mirror: readonly [{
                readonly box: readonly [0.97, 0.05, 0.09];
                readonly at: readonly [0, 1.085, 0.65];
                readonly c: "rail";
            }];
            readonly axis: "z";
        }, {
            readonly mirror: readonly [{
                readonly box: readonly [0.07, 0.04, 1.34];
                readonly at: readonly [0.44, 0.9, 0];
                readonly c: "bed";
            }];
        }, {
            readonly mirror: readonly [{
                readonly box: readonly [0.8, 0.04, 0.07];
                readonly at: readonly [0, 0.9, 0.65];
                readonly c: "bed";
            }];
            readonly axis: "z";
        }, {
            readonly mirror: readonly [{
                readonly mirror: readonly [{
                    readonly box: readonly [0.07, 0.4, 0.07];
                    readonly at: readonly [0.505, 0.88, 0.62];
                    readonly c: "frame";
                }];
                readonly axis: "z";
            }];
        }];
    }];
} | {
    readonly id: "shovel";
    readonly about: "Shovel standing on its blade: a steel blade with a rolled top edge, an iron socket, a wooden shaft and a T grip";
    readonly tags: readonly ["props", "tool", "iron", "wood"];
    readonly palette: {
        readonly wood: "orange";
        readonly steel: "mist";
        readonly iron: "slate";
        readonly grip: "red";
    };
    readonly anchors: {
        readonly grip: {
            readonly at: readonly [0, 0.98, 0];
            readonly rot: readonly [180, 0, 0];
        };
    };
    readonly parts: readonly [{
        readonly slab: readonly [number, number][];
        readonly depth: 0.03;
        readonly c: "steel";
        readonly name: "blade";
    }, {
        readonly box: readonly [0.26, 0.06, 0.06];
        readonly at: readonly [0, 0.29, 0];
        readonly c: "iron";
    }, {
        readonly cyl: readonly [0.08, 0.16, 0.08];
        readonly at: readonly [0, 0.38, 0];
        readonly top: 0.8;
        readonly seg: 6;
        readonly c: "iron";
        readonly name: "socket";
    }, {
        readonly cyl: readonly [0.065, 0.64, 0.065];
        readonly at: readonly [0, 0.77, 0];
        readonly seg: 6;
        readonly c: "wood";
        readonly name: "shaft";
    }, {
        readonly box: readonly [0.2, 0.07, 0.075];
        readonly at: readonly [0, 1.1, 0];
        readonly c: "grip";
        readonly name: "t-grip";
    }];
} | {
    readonly id: "hammer";
    readonly about: "Smith's hammer standing on its head: an iron head with a light striking face and a tapered peen, a wooden handle with a wrapped end";
    readonly tags: readonly ["props", "tool", "iron", "wood"];
    readonly palette: {
        readonly wood: "orange";
        readonly iron: "slate";
        readonly face: "white";
        readonly wrap: "plum";
    };
    readonly anchors: {
        readonly grip: {
            readonly at: readonly [0, 0.37, 0];
            readonly rot: readonly [180, 0, 0];
        };
    };
    readonly parts: readonly [{
        readonly box: readonly [0.13, 0.085, 0.085];
        readonly at: readonly [0.02, 0.0425, 0];
        readonly c: "iron";
        readonly name: "head";
    }, {
        readonly box: readonly [0.03, 0.095, 0.095];
        readonly at: readonly [0.095, 0.0475, 0];
        readonly c: "face";
    }, {
        readonly group: readonly [{
            readonly cyl: readonly [0.085, 0.07, 0.085];
            readonly top: 0.45;
            readonly seg: 4;
            readonly rot: readonly [0, 45, 0];
            readonly c: "iron";
        }];
        readonly at: readonly [-0.08, 0.0425, 0];
        readonly rot: readonly [0, 0, 90];
        readonly name: "peen";
    }, {
        readonly cyl: readonly [0.06, 0.34, 0.06];
        readonly at: readonly [0, 0.25, 0];
        readonly seg: 6;
        readonly c: "wood";
        readonly name: "handle";
    }, {
        readonly cyl: readonly [0.072, 0.1, 0.072];
        readonly at: readonly [0, 0.38, 0];
        readonly seg: 6;
        readonly c: "wrap";
    }];
} | {
    readonly id: "wheelbarrow";
    readonly about: "Wooden wheelbarrow: a hollow tub with a light rim on two shafts, one spoked wheel in front (+Z), two legs and wrapped handles behind";
    readonly tags: readonly ["props", "transport", "wood", "town"];
    readonly palette: {
        readonly tub: "red";
        readonly rim: "sand";
        readonly shaft: "orange";
        readonly tyre: "night";
        readonly spoke: "sand";
        readonly hub: "slate";
        readonly grip: "plum";
    };
    readonly anchors: {
        readonly handle: readonly [0, 0.52, -0.76];
    };
    readonly parts: readonly [{
        readonly name: "wheel";
        readonly at: readonly [0, 0.2, 0.6];
        readonly rot: readonly [0, 0, 90];
        readonly group: readonly [{
            readonly torus: readonly [0.4, 0.07, 0.4];
            readonly seg: 12;
            readonly c: "tyre";
        }, ...Part[], {
            readonly cyl: readonly [0.11, 0.12, 0.11];
            readonly seg: 8;
            readonly c: "hub";
        }];
    }, {
        readonly cyl: readonly [0.06, 0.22, 0.06];
        readonly at: readonly [0, 0.2, 0.6];
        readonly rot: readonly [0, 0, 90];
        readonly seg: 6;
        readonly c: "hub";
        readonly name: "axle";
    }, {
        readonly mirror: readonly [{
            readonly tube: readonly Vec3[];
            readonly r: 0.04;
            readonly seg: 6;
            readonly c: "shaft";
            readonly name: "shaft";
        }];
    }, {
        readonly mirror: readonly [{
            readonly tube: readonly [readonly [0.255, 0.454, -0.61], readonly [0.273, 0.533, -0.79]];
            readonly r: 0.05;
            readonly seg: 6;
            readonly c: "grip";
        }];
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.065, 0.3, 0.065];
            readonly at: readonly [0.22, 0.15, -0.2];
            readonly c: "shaft";
            readonly name: "leg";
        }];
    }, {
        readonly name: "tub";
        readonly at: readonly [0, 0.335, 0.08];
        readonly scale: readonly [1, 1, 1.4];
        readonly group: readonly [{
            readonly lathe: readonly [number, number][];
            readonly seg: 4;
            readonly rot: readonly [0, 45, 0];
            readonly c: "tub";
        }, {
            readonly lathe: readonly [readonly [0.405, 0.28], readonly [0.452, 0.28], readonly [0.452, 0.315], readonly [0.405, 0.315], readonly [0.405, 0.28]];
            readonly seg: 4;
            readonly rot: readonly [0, 45, 0];
            readonly c: "rim";
            readonly name: "rim";
        }];
    }];
} | {
    readonly id: "rope-coil";
    readonly about: "Coil of rope on the floor: `loops` stacked turns in two shades, the loose end trailing out to the front with a whipped tip; `r` is its radius";
    readonly tags: readonly ["props", "rope", "town", "dungeon"];
    readonly palette: {
        readonly rope: "sand";
        readonly rope2: "orange";
        readonly whip: "red";
    };
    readonly params: {
        readonly loops: readonly [3, 2, 5];
        readonly r: readonly [0.25, 0.15, 0.4];
    };
    readonly parts: (p: Readonly<Record<string, number>>, rng: import("../..").Rng) => Part[];
} | {
    readonly id: "ladder";
    readonly about: "Wooden ladder, `rungs` rungs 0.3 m apart between two rails; `lean` tips its top back to a wall at z = 0 (0 stands it upright against it)";
    readonly tags: readonly ["props", "wood", "town"];
    readonly palette: {
        readonly rail: "orange";
        readonly rung: "sand";
    };
    readonly params: {
        readonly rungs: readonly [7, 3, 12];
        readonly lean: readonly [15, 0, 25];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => {
        at: [number, number, number];
        rot: [number, number, number];
        group: Part[];
    }[];
} | {
    readonly id: "waymarker";
    readonly about: "Waymarker: a short standing stone, five-sided and tapering to a rough top, a little tipped (seeded), with a painted band round it (map `paint`); `h` is its height";
    readonly tags: readonly ["props", "sign", "stone", "nature"];
    readonly palette: {
        readonly stone: "mist";
        readonly paint: "red";
    };
    readonly params: {
        readonly h: readonly [0.9, 0.5, 1.4];
    };
    readonly parts: (p: Readonly<Record<string, number>>, rng: import("../..").Rng) => {
        at: [number, number, number];
        rot: [number, number, number];
        group: ({
            cyl: [number, number, number];
            at: [number, number, number];
            top: number;
            seg: number;
            c: string;
            name: string;
            lump?: undefined;
            seed?: undefined;
        } | {
            lump: [number, number, number];
            at: [number, number, number];
            seed: number;
            c: string;
            name: string;
            cyl?: undefined;
            top?: undefined;
            seg?: undefined;
        })[];
    }[];
} | {
    readonly id: "notice-board";
    readonly about: "Notice board: a framed board on two posts, `notes` paper notes in two shades pinned to its front (seeded)";
    readonly tags: readonly ["props", "sign", "wood", "town"];
    readonly palette: {
        readonly post: "red";
        readonly board: "orange";
        readonly frame: "plum";
        readonly paper: "white";
        readonly paper2: "sand";
    };
    readonly params: {
        readonly notes: readonly [5, 0, 8];
    };
    readonly parts: (p: Readonly<Record<string, number>>, rng: import("../..").Rng) => Part[];
} | {
    readonly id: "loot-pouch";
    readonly about: "Small leather drawstring pouch tipped on its side, a little heap of gold spilled from its open mouth with `coins` coins on and round it (seeded)";
    readonly tags: readonly ["props", "loot", "gold"];
    readonly palette: {
        readonly leather: "red";
        readonly neck: "plum";
        readonly cord: "sand";
        readonly gold: "sand";
        readonly shade: "orange";
    };
    readonly params: {
        readonly coins: readonly [9, 4, 16];
    };
    readonly parts: (p: Readonly<Record<string, number>>, rng: import("../..").Rng) => {
        rot: [number, number, number];
        group: Part[];
    }[];
})[];
