import type { Part } from '../types';
export declare const barrel: {
    readonly id: "barrel";
    readonly about: "Wooden barrel with three iron hoops";
    readonly tags: readonly ["container", "wood"];
    readonly palette: {
        readonly wood: "orange";
        readonly band: "slate";
        readonly lid: "red";
    };
    readonly parts: readonly [{
        readonly lathe: readonly [readonly [0, 0], readonly [0.27, 0], readonly [0.32, 0.2], readonly [0.34, 0.4], readonly [0.32, 0.6], readonly [0.27, 0.8], readonly [0, 0.8]];
        readonly seg: 10;
        readonly c: "wood";
    }, {
        readonly torus: readonly [0.65, 0.06, 0.65];
        readonly at: readonly [0, 0.1, 0];
        readonly seg: 10;
        readonly c: "band";
    }, {
        readonly torus: readonly [0.65, 0.06, 0.65];
        readonly at: readonly [0, 0.7, 0];
        readonly seg: 10;
        readonly c: "band";
    }, {
        readonly torus: readonly [0.73, 0.06, 0.73];
        readonly at: readonly [0, 0.4, 0];
        readonly seg: 10;
        readonly c: "band";
    }, {
        readonly cyl: readonly [0.48, 0.03, 0.48];
        readonly at: readonly [0, 0.8, 0];
        readonly seg: 10;
        readonly c: "lid";
    }];
};
export declare const crate: {
    readonly id: "crate";
    readonly about: "Wooden crate with a frame and diagonal braces";
    readonly tags: readonly ["container", "wood"];
    readonly palette: {
        readonly wood: "orange";
        readonly band: "red";
    };
    readonly parts: readonly [{
        readonly box: readonly [0.68, 0.68, 0.68];
        readonly at: readonly [0, 0.36, 0];
        readonly c: "wood";
    }, import("..").GroupPart, {
        readonly mirror: readonly [{
            readonly box: readonly [0.8, 0.08, 0.04];
            readonly at: readonly [0, 0.36, 0.35];
            readonly rot: readonly [0, 0, 45];
            readonly c: "band";
        }];
        readonly axis: "z";
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.04, 0.08, 0.8];
            readonly at: readonly [0.35, 0.36, 0];
            readonly rot: readonly [45, 0, 0];
            readonly c: "band";
        }];
    }];
};
export declare const clayPot: {
    readonly id: "clay-pot";
    readonly about: "Round-bellied clay pot: terracotta with a red painted band, a pale rolled rim round a dark mouth; `h` is its height (seeded girth)";
    readonly tags: readonly ["container", "clay", "town", "dungeon"];
    readonly palette: {
        readonly clay: "orange";
        readonly paint: "red";
        readonly rim: "sand";
        readonly mouth: "ink";
    };
    readonly params: {
        readonly h: readonly [0.43, 0.25, 0.7];
    };
    readonly parts: (p: Readonly<Record<string, number>>, rng: import("../..").Rng) => {
        scale: [number, number, number];
        group: ({
            lathe: readonly [number, number][];
            seg: number;
            c: string;
            name: string;
            torus?: undefined;
            at?: undefined;
            cyl?: undefined;
        } | {
            torus: [number, number, number];
            at: [number, number, number];
            seg: number;
            c: string;
            lathe?: undefined;
            name?: undefined;
            cyl?: undefined;
        } | {
            cyl: [number, number, number];
            at: [number, number, number];
            seg: number;
            c: string;
            lathe?: undefined;
            name?: undefined;
            torus?: undefined;
        } | {
            torus: [number, number, number];
            at: [number, number, number];
            seg: number;
            c: string;
            name: string;
            lathe?: undefined;
            cyl?: undefined;
        })[];
    }[];
};
export declare const amphora: {
    readonly id: "amphora";
    readonly about: "Tall two-handled amphora on a small foot: pale clay with a red painted band and rim, a narrow neck and a dark mouth";
    readonly tags: readonly ["container", "clay", "town"];
    readonly palette: {
        readonly clay: "sand";
        readonly paint: "red";
        readonly handle: "orange";
        readonly mouth: "ink";
    };
    readonly parts: readonly [{
        readonly lathe: readonly [number, number][];
        readonly seg: 10;
        readonly c: "clay";
        readonly name: "body";
    }, {
        readonly torus: readonly [0.42, 0.06, 0.42];
        readonly at: readonly [0, 0.42, 0];
        readonly seg: 10;
        readonly c: "paint";
    }, {
        readonly mirror: readonly [{
            readonly tube: readonly [readonly [0.16, 0.53, 0], readonly [0.215, 0.61, 0], readonly [0.19, 0.7, 0], readonly [0.065, 0.71, 0]];
            readonly r: 0.032;
            readonly c: "handle";
            readonly name: "handle";
        }];
    }, {
        readonly cyl: readonly [0.11, 0.01, 0.11];
        readonly at: readonly [0, 0.765, 0];
        readonly seg: 8;
        readonly c: "mouth";
    }, {
        readonly torus: readonly [0.19, 0.045, 0.19];
        readonly at: readonly [0, 0.765, 0];
        readonly seg: 8;
        readonly c: "paint";
        readonly name: "rim";
    }];
};
export declare const urn: {
    readonly id: "urn";
    readonly about: "Lidded urn: a glazed body on a gold foot with a gold band, a blue domed lid on the pivot `lid` with a gold knob";
    readonly tags: readonly ["container", "clay", "dungeon", "tomb"];
    readonly palette: {
        readonly glaze: "teal";
        readonly trim: "sand";
        readonly lid: "blue";
    };
    readonly parts: readonly [{
        readonly cyl: readonly [0.27, 0.06, 0.27];
        readonly at: readonly [0, 0.03, 0];
        readonly top: 0.75;
        readonly seg: 10;
        readonly c: "trim";
        readonly name: "foot";
    }, {
        readonly lathe: readonly [number, number][];
        readonly at: readonly [0, 0.06, 0];
        readonly seg: 10;
        readonly c: "glaze";
        readonly name: "body";
    }, {
        readonly torus: readonly [0.41, 0.04, 0.41];
        readonly at: readonly [0, 0.44, 0];
        readonly seg: 10;
        readonly c: "trim";
    }, {
        readonly name: "lid";
        readonly pivot: true;
        readonly at: readonly [0, 0.56, 0];
        readonly group: readonly [{
            readonly cyl: readonly [0.31, 0.035, 0.31];
            readonly at: readonly [0, 0.0175, 0];
            readonly seg: 10;
            readonly c: "trim";
        }, {
            readonly ball: readonly [0.27, 0.11, 0.27];
            readonly at: readonly [0, 0.09, 0];
            readonly half: true;
            readonly seg: 10;
            readonly c: "lid";
        }, {
            readonly ball: readonly [0.09, 0.09, 0.09];
            readonly at: readonly [0, 0.16, 0];
            readonly seg: 6;
            readonly c: "trim";
            readonly name: "knob";
        }];
    }];
};
export declare const basket: {
    readonly id: "basket";
    readonly about: "Wicker basket: a flared hollow body with a woven band of a second shade, a rolled rim and a hoop handle (`handle` 0 drops it); `w` is its width";
    readonly tags: readonly ["container", "wicker", "town", "market"];
    readonly palette: {
        readonly wicker: "sand";
        readonly weave: "orange";
        readonly rim: "red";
        readonly inside: "plum";
    };
    readonly params: {
        readonly w: readonly [0.5, 0.3, 0.8];
        readonly handle: readonly [1, 0, 1];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => {
        scale: number;
        group: Part[];
    }[];
};
export declare const bucket: {
    readonly id: "bucket";
    readonly about: "Wooden bucket: tapered staves in two iron hoops, an iron bail handle standing up from two ears";
    readonly tags: readonly ["container", "wood", "town", "water"];
    readonly palette: {
        readonly wood: "orange";
        readonly hoop: "slate";
        readonly bail: "night";
        readonly inside: "plum";
    };
    readonly parts: readonly [{
        readonly lathe: readonly [number, number][];
        readonly seg: 10;
        readonly c: "wood";
        readonly name: "body";
    }, {
        readonly cyl: readonly [0.22, 0.01, 0.22];
        readonly at: readonly [0, 0.035, 0];
        readonly seg: 10;
        readonly c: "inside";
    }, Part, Part, {
        readonly mirror: readonly [{
            readonly box: readonly [0.04, 0.09, 0.07];
            readonly at: readonly [0.168, 0.29, 0];
            readonly c: "hoop";
        }];
    }, {
        readonly tube: readonly [readonly [-0.19, 0.3, 0], readonly [-0.18, 0.42, 0], readonly [-0.11, 0.5, 0], readonly [0, 0.52, 0], readonly [0.11, 0.5, 0], readonly [0.18, 0.42, 0], readonly [0.19, 0.3, 0]];
        readonly r: 0.03;
        readonly c: "bail";
        readonly name: "bail";
    }];
};
export declare const keg: {
    readonly id: "keg";
    readonly about: "Small barrel lying on a stand of two notched cradles, its head to the front with a brass tap";
    readonly tags: readonly ["container", "wood", "town", "tavern"];
    readonly palette: {
        readonly wood: "orange";
        readonly hoop: "slate";
        readonly head: "red";
        readonly stand: "plum";
        readonly tap: "sand";
    };
    readonly parts: readonly [{
        readonly use: "barrel";
        readonly at: readonly [0, 0.38, -0.24];
        readonly rot: readonly [90, 0, 0];
        readonly scale: 0.6;
        readonly palette: {
            readonly wood: "wood";
            readonly band: "hoop";
            readonly lid: "head";
        };
        readonly name: "keg";
    }, {
        readonly mirror: readonly [{
            readonly slab: readonly [number, number][];
            readonly depth: 0.07;
            readonly at: readonly [0, 0, 0.13];
            readonly c: "stand";
        }];
        readonly axis: "z";
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.07, 0.07, 0.33];
            readonly at: readonly [0.17, 0.035, 0];
            readonly c: "stand";
        }];
    }, {
        readonly name: "tap";
        readonly at: readonly [0, number, 0.25];
        readonly group: readonly [{
            readonly cyl: readonly [0.07, 0.12, 0.07];
            readonly at: readonly [0, 0, 0.05];
            readonly rot: readonly [90, 0, 0];
            readonly seg: 6;
            readonly c: "tap";
        }, {
            readonly cyl: readonly [0.065, 0.08, 0.065];
            readonly at: readonly [0, -0.05, 0.09];
            readonly seg: 6;
            readonly c: "tap";
        }];
    }];
};
export declare const strongbox: {
    readonly id: "strongbox";
    readonly about: "Small iron-banded strongbox: a dark wood body, a lighter lid on the pivot `lid` hinged at the back, iron straps and corners, a gold lock plate";
    readonly tags: readonly ["container", "iron", "wood", "loot", "dungeon"];
    readonly palette: {
        readonly wood: "red";
        readonly lid: "orange";
        readonly iron: "night";
        readonly lock: "sand";
    };
    readonly parts: readonly [{
        readonly box: readonly [0.5, 0.24, 0.34];
        readonly at: readonly [0, 0.12, 0];
        readonly c: "wood";
        readonly name: "body";
    }, {
        readonly box: readonly [0.52, 0.035, 0.36];
        readonly at: readonly [0, 0.0175, 0];
        readonly c: "iron";
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.07, 0.25, 0.37];
            readonly at: readonly [0.15, 0.125, 0];
            readonly c: "iron";
        }];
    }, {
        readonly box: readonly [0.13, 0.12, 0.03];
        readonly at: readonly [0, 0.19, 0.18];
        readonly c: "lock";
        readonly name: "lock";
    }, {
        readonly name: "lid";
        readonly pivot: true;
        readonly at: readonly [0, 0.24, -0.17];
        readonly group: readonly [{
            readonly box: readonly [0.52, 0.09, 0.36];
            readonly at: readonly [0, 0.045, 0.17];
            readonly c: "lid";
        }, {
            readonly mirror: readonly [{
                readonly box: readonly [0.07, 0.1, 0.38];
                readonly at: readonly [0.15, 0.053, 0.17];
                readonly c: "iron";
            }];
        }, {
            readonly mirror: readonly [{
                readonly box: readonly [0.04, 0.1, 0.38];
                readonly at: readonly [0.25, 0.053, 0.17];
                readonly c: "iron";
            }];
        }, {
            readonly box: readonly [0.08, 0.07, 0.02];
            readonly at: readonly [0, 0.01, 0.36];
            readonly c: "lock";
        }];
    }];
};
export declare const crateStack: {
    readonly id: "crate-stack";
    readonly about: "Stack of `count` crates (seeded): two on the floor, one across their tops, a smaller one in front; alternate crates darker";
    readonly tags: readonly ["container", "wood", "town", "dungeon"];
    readonly palette: {
        readonly wood: "orange";
        readonly wood2: "red";
        readonly band: "red";
        readonly band2: "plum";
    };
    readonly params: {
        readonly count: readonly [3, 2, 4];
    };
    readonly parts: (p: Readonly<Record<string, number>>, rng: import("../..").Rng) => Part[];
};
export declare const CONTAINERS: ({
    readonly id: "barrel";
    readonly about: "Wooden barrel with three iron hoops";
    readonly tags: readonly ["container", "wood"];
    readonly palette: {
        readonly wood: "orange";
        readonly band: "slate";
        readonly lid: "red";
    };
    readonly parts: readonly [{
        readonly lathe: readonly [readonly [0, 0], readonly [0.27, 0], readonly [0.32, 0.2], readonly [0.34, 0.4], readonly [0.32, 0.6], readonly [0.27, 0.8], readonly [0, 0.8]];
        readonly seg: 10;
        readonly c: "wood";
    }, {
        readonly torus: readonly [0.65, 0.06, 0.65];
        readonly at: readonly [0, 0.1, 0];
        readonly seg: 10;
        readonly c: "band";
    }, {
        readonly torus: readonly [0.65, 0.06, 0.65];
        readonly at: readonly [0, 0.7, 0];
        readonly seg: 10;
        readonly c: "band";
    }, {
        readonly torus: readonly [0.73, 0.06, 0.73];
        readonly at: readonly [0, 0.4, 0];
        readonly seg: 10;
        readonly c: "band";
    }, {
        readonly cyl: readonly [0.48, 0.03, 0.48];
        readonly at: readonly [0, 0.8, 0];
        readonly seg: 10;
        readonly c: "lid";
    }];
} | {
    readonly id: "crate";
    readonly about: "Wooden crate with a frame and diagonal braces";
    readonly tags: readonly ["container", "wood"];
    readonly palette: {
        readonly wood: "orange";
        readonly band: "red";
    };
    readonly parts: readonly [{
        readonly box: readonly [0.68, 0.68, 0.68];
        readonly at: readonly [0, 0.36, 0];
        readonly c: "wood";
    }, import("..").GroupPart, {
        readonly mirror: readonly [{
            readonly box: readonly [0.8, 0.08, 0.04];
            readonly at: readonly [0, 0.36, 0.35];
            readonly rot: readonly [0, 0, 45];
            readonly c: "band";
        }];
        readonly axis: "z";
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.04, 0.08, 0.8];
            readonly at: readonly [0.35, 0.36, 0];
            readonly rot: readonly [45, 0, 0];
            readonly c: "band";
        }];
    }];
} | {
    readonly id: "clay-pot";
    readonly about: "Round-bellied clay pot: terracotta with a red painted band, a pale rolled rim round a dark mouth; `h` is its height (seeded girth)";
    readonly tags: readonly ["container", "clay", "town", "dungeon"];
    readonly palette: {
        readonly clay: "orange";
        readonly paint: "red";
        readonly rim: "sand";
        readonly mouth: "ink";
    };
    readonly params: {
        readonly h: readonly [0.43, 0.25, 0.7];
    };
    readonly parts: (p: Readonly<Record<string, number>>, rng: import("../..").Rng) => {
        scale: [number, number, number];
        group: ({
            lathe: readonly [number, number][];
            seg: number;
            c: string;
            name: string;
            torus?: undefined;
            at?: undefined;
            cyl?: undefined;
        } | {
            torus: [number, number, number];
            at: [number, number, number];
            seg: number;
            c: string;
            lathe?: undefined;
            name?: undefined;
            cyl?: undefined;
        } | {
            cyl: [number, number, number];
            at: [number, number, number];
            seg: number;
            c: string;
            lathe?: undefined;
            name?: undefined;
            torus?: undefined;
        } | {
            torus: [number, number, number];
            at: [number, number, number];
            seg: number;
            c: string;
            name: string;
            lathe?: undefined;
            cyl?: undefined;
        })[];
    }[];
} | {
    readonly id: "amphora";
    readonly about: "Tall two-handled amphora on a small foot: pale clay with a red painted band and rim, a narrow neck and a dark mouth";
    readonly tags: readonly ["container", "clay", "town"];
    readonly palette: {
        readonly clay: "sand";
        readonly paint: "red";
        readonly handle: "orange";
        readonly mouth: "ink";
    };
    readonly parts: readonly [{
        readonly lathe: readonly [number, number][];
        readonly seg: 10;
        readonly c: "clay";
        readonly name: "body";
    }, {
        readonly torus: readonly [0.42, 0.06, 0.42];
        readonly at: readonly [0, 0.42, 0];
        readonly seg: 10;
        readonly c: "paint";
    }, {
        readonly mirror: readonly [{
            readonly tube: readonly [readonly [0.16, 0.53, 0], readonly [0.215, 0.61, 0], readonly [0.19, 0.7, 0], readonly [0.065, 0.71, 0]];
            readonly r: 0.032;
            readonly c: "handle";
            readonly name: "handle";
        }];
    }, {
        readonly cyl: readonly [0.11, 0.01, 0.11];
        readonly at: readonly [0, 0.765, 0];
        readonly seg: 8;
        readonly c: "mouth";
    }, {
        readonly torus: readonly [0.19, 0.045, 0.19];
        readonly at: readonly [0, 0.765, 0];
        readonly seg: 8;
        readonly c: "paint";
        readonly name: "rim";
    }];
} | {
    readonly id: "urn";
    readonly about: "Lidded urn: a glazed body on a gold foot with a gold band, a blue domed lid on the pivot `lid` with a gold knob";
    readonly tags: readonly ["container", "clay", "dungeon", "tomb"];
    readonly palette: {
        readonly glaze: "teal";
        readonly trim: "sand";
        readonly lid: "blue";
    };
    readonly parts: readonly [{
        readonly cyl: readonly [0.27, 0.06, 0.27];
        readonly at: readonly [0, 0.03, 0];
        readonly top: 0.75;
        readonly seg: 10;
        readonly c: "trim";
        readonly name: "foot";
    }, {
        readonly lathe: readonly [number, number][];
        readonly at: readonly [0, 0.06, 0];
        readonly seg: 10;
        readonly c: "glaze";
        readonly name: "body";
    }, {
        readonly torus: readonly [0.41, 0.04, 0.41];
        readonly at: readonly [0, 0.44, 0];
        readonly seg: 10;
        readonly c: "trim";
    }, {
        readonly name: "lid";
        readonly pivot: true;
        readonly at: readonly [0, 0.56, 0];
        readonly group: readonly [{
            readonly cyl: readonly [0.31, 0.035, 0.31];
            readonly at: readonly [0, 0.0175, 0];
            readonly seg: 10;
            readonly c: "trim";
        }, {
            readonly ball: readonly [0.27, 0.11, 0.27];
            readonly at: readonly [0, 0.09, 0];
            readonly half: true;
            readonly seg: 10;
            readonly c: "lid";
        }, {
            readonly ball: readonly [0.09, 0.09, 0.09];
            readonly at: readonly [0, 0.16, 0];
            readonly seg: 6;
            readonly c: "trim";
            readonly name: "knob";
        }];
    }];
} | {
    readonly id: "basket";
    readonly about: "Wicker basket: a flared hollow body with a woven band of a second shade, a rolled rim and a hoop handle (`handle` 0 drops it); `w` is its width";
    readonly tags: readonly ["container", "wicker", "town", "market"];
    readonly palette: {
        readonly wicker: "sand";
        readonly weave: "orange";
        readonly rim: "red";
        readonly inside: "plum";
    };
    readonly params: {
        readonly w: readonly [0.5, 0.3, 0.8];
        readonly handle: readonly [1, 0, 1];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => {
        scale: number;
        group: Part[];
    }[];
} | {
    readonly id: "bucket";
    readonly about: "Wooden bucket: tapered staves in two iron hoops, an iron bail handle standing up from two ears";
    readonly tags: readonly ["container", "wood", "town", "water"];
    readonly palette: {
        readonly wood: "orange";
        readonly hoop: "slate";
        readonly bail: "night";
        readonly inside: "plum";
    };
    readonly parts: readonly [{
        readonly lathe: readonly [number, number][];
        readonly seg: 10;
        readonly c: "wood";
        readonly name: "body";
    }, {
        readonly cyl: readonly [0.22, 0.01, 0.22];
        readonly at: readonly [0, 0.035, 0];
        readonly seg: 10;
        readonly c: "inside";
    }, Part, Part, {
        readonly mirror: readonly [{
            readonly box: readonly [0.04, 0.09, 0.07];
            readonly at: readonly [0.168, 0.29, 0];
            readonly c: "hoop";
        }];
    }, {
        readonly tube: readonly [readonly [-0.19, 0.3, 0], readonly [-0.18, 0.42, 0], readonly [-0.11, 0.5, 0], readonly [0, 0.52, 0], readonly [0.11, 0.5, 0], readonly [0.18, 0.42, 0], readonly [0.19, 0.3, 0]];
        readonly r: 0.03;
        readonly c: "bail";
        readonly name: "bail";
    }];
} | {
    readonly id: "keg";
    readonly about: "Small barrel lying on a stand of two notched cradles, its head to the front with a brass tap";
    readonly tags: readonly ["container", "wood", "town", "tavern"];
    readonly palette: {
        readonly wood: "orange";
        readonly hoop: "slate";
        readonly head: "red";
        readonly stand: "plum";
        readonly tap: "sand";
    };
    readonly parts: readonly [{
        readonly use: "barrel";
        readonly at: readonly [0, 0.38, -0.24];
        readonly rot: readonly [90, 0, 0];
        readonly scale: 0.6;
        readonly palette: {
            readonly wood: "wood";
            readonly band: "hoop";
            readonly lid: "head";
        };
        readonly name: "keg";
    }, {
        readonly mirror: readonly [{
            readonly slab: readonly [number, number][];
            readonly depth: 0.07;
            readonly at: readonly [0, 0, 0.13];
            readonly c: "stand";
        }];
        readonly axis: "z";
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.07, 0.07, 0.33];
            readonly at: readonly [0.17, 0.035, 0];
            readonly c: "stand";
        }];
    }, {
        readonly name: "tap";
        readonly at: readonly [0, number, 0.25];
        readonly group: readonly [{
            readonly cyl: readonly [0.07, 0.12, 0.07];
            readonly at: readonly [0, 0, 0.05];
            readonly rot: readonly [90, 0, 0];
            readonly seg: 6;
            readonly c: "tap";
        }, {
            readonly cyl: readonly [0.065, 0.08, 0.065];
            readonly at: readonly [0, -0.05, 0.09];
            readonly seg: 6;
            readonly c: "tap";
        }];
    }];
} | {
    readonly id: "strongbox";
    readonly about: "Small iron-banded strongbox: a dark wood body, a lighter lid on the pivot `lid` hinged at the back, iron straps and corners, a gold lock plate";
    readonly tags: readonly ["container", "iron", "wood", "loot", "dungeon"];
    readonly palette: {
        readonly wood: "red";
        readonly lid: "orange";
        readonly iron: "night";
        readonly lock: "sand";
    };
    readonly parts: readonly [{
        readonly box: readonly [0.5, 0.24, 0.34];
        readonly at: readonly [0, 0.12, 0];
        readonly c: "wood";
        readonly name: "body";
    }, {
        readonly box: readonly [0.52, 0.035, 0.36];
        readonly at: readonly [0, 0.0175, 0];
        readonly c: "iron";
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.07, 0.25, 0.37];
            readonly at: readonly [0.15, 0.125, 0];
            readonly c: "iron";
        }];
    }, {
        readonly box: readonly [0.13, 0.12, 0.03];
        readonly at: readonly [0, 0.19, 0.18];
        readonly c: "lock";
        readonly name: "lock";
    }, {
        readonly name: "lid";
        readonly pivot: true;
        readonly at: readonly [0, 0.24, -0.17];
        readonly group: readonly [{
            readonly box: readonly [0.52, 0.09, 0.36];
            readonly at: readonly [0, 0.045, 0.17];
            readonly c: "lid";
        }, {
            readonly mirror: readonly [{
                readonly box: readonly [0.07, 0.1, 0.38];
                readonly at: readonly [0.15, 0.053, 0.17];
                readonly c: "iron";
            }];
        }, {
            readonly mirror: readonly [{
                readonly box: readonly [0.04, 0.1, 0.38];
                readonly at: readonly [0.25, 0.053, 0.17];
                readonly c: "iron";
            }];
        }, {
            readonly box: readonly [0.08, 0.07, 0.02];
            readonly at: readonly [0, 0.01, 0.36];
            readonly c: "lock";
        }];
    }];
} | {
    readonly id: "crate-stack";
    readonly about: "Stack of `count` crates (seeded): two on the floor, one across their tops, a smaller one in front; alternate crates darker";
    readonly tags: readonly ["container", "wood", "town", "dungeon"];
    readonly palette: {
        readonly wood: "orange";
        readonly wood2: "red";
        readonly band: "red";
        readonly band2: "plum";
    };
    readonly params: {
        readonly count: readonly [3, 2, 4];
    };
    readonly parts: (p: Readonly<Record<string, number>>, rng: import("../..").Rng) => Part[];
})[];
