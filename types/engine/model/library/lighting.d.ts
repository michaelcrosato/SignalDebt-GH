import type { Part } from '../types';
export declare const lampPost: {
    readonly id: "lamp-post";
    readonly about: "Iron street lamp with a hanging lantern";
    readonly tags: readonly ["lighting", "town"];
    readonly palette: {
        readonly iron: "night";
        readonly flame: "sand";
    };
    readonly light: {
        readonly at: readonly [0.42, 1.74, 0];
        readonly c: "flame";
        readonly intensity: 6;
        readonly radius: 6;
        readonly flicker: "candle";
    };
    readonly parts: readonly [{
        readonly cyl: readonly [0.3, 0.2, 0.3];
        readonly at: readonly [0, 0.1, 0];
        readonly top: 0.6;
        readonly c: "iron";
    }, {
        readonly cyl: readonly [0.09, 2, 0.09];
        readonly at: readonly [0, 1.1, 0];
        readonly seg: 6;
        readonly c: "iron";
    }, {
        readonly box: readonly [0.5, 0.06, 0.06];
        readonly at: readonly [0.22, 2.02, 0];
        readonly c: "iron";
    }, {
        readonly name: "lantern";
        readonly at: readonly [0.42, 1.74, 0];
        readonly group: readonly [{
            readonly box: readonly [0.22, 0.04, 0.22];
            readonly at: readonly [0, -0.13, 0];
            readonly c: "iron";
        }, {
            readonly box: readonly [0.16, 0.22, 0.16];
            readonly c: "flame";
            readonly glow: true;
        }, {
            readonly cyl: readonly [0.32, 0.1, 0.32];
            readonly at: readonly [0, 0.16, 0];
            readonly top: 0.25;
            readonly seg: 4;
            readonly rot: readonly [0, 45, 0];
            readonly c: "iron";
        }, {
            readonly cyl: readonly [0.06, 0.1, 0.06];
            readonly at: readonly [0, 0.25, 0];
            readonly seg: 4;
            readonly c: "iron";
        }];
    }];
};
export declare const flame: {
    readonly id: "flame";
    readonly about: "A fire's flame: 3-sided lit tongues, one face to the iso camera and leaned back into the light, a small glowing heart";
    readonly tags: readonly ["lighting", "fire"];
    readonly palette: {
        readonly outer: "orange";
        readonly mid: "orange";
        readonly core: "sand";
        readonly heart: "white";
    };
    readonly params: {
        readonly h: readonly [0.8, 0.3, 1.4];
        readonly tongues: readonly [4, 1, 4];
    };
    readonly light: {
        readonly at: readonly [0, 0.4, 0];
        readonly c: "mid";
        readonly intensity: 5;
        readonly radius: 5;
        readonly flicker: "torch";
    };
    readonly parts: (p: Readonly<Record<string, number>>) => ({
        readonly at: readonly [number, number, number];
        readonly rot: readonly [0, 125, 0];
        readonly group: readonly [{
            readonly rot: readonly [number, 0, number];
            readonly group: readonly [{
                readonly cone: readonly [number, number, number];
                readonly at: readonly [0, number, 0];
                readonly seg: 3;
                readonly c: string;
            }];
        }];
    } | {
        readonly ball: readonly [number, number, number];
        readonly at: readonly [number, number, number];
        readonly seg: 8;
        readonly c: "heart";
        readonly glow: true;
    })[];
};
export declare const wallTorch: {
    readonly id: "wall-torch";
    readonly about: "Torch in an iron wall sconce mounted at 1.3 m, its back on the wall at z = 0 and the stick tipped out";
    readonly tags: readonly ["lighting", "fire", "wall"];
    readonly palette: {
        readonly iron: "night";
        readonly plate: "slate";
        readonly wood: "red";
        readonly rag: "plum";
        readonly flame: "orange";
        readonly core: "sand";
        readonly heart: "white";
    };
    readonly floats: true;
    readonly collider: "none";
    readonly anchors: {
        readonly mount: readonly [0, 1.3, 0];
    };
    readonly light: {
        readonly at: readonly [0, 2.3, 0.45];
        readonly c: "flame";
        readonly intensity: 2;
        readonly radius: 5;
        readonly flicker: "torch";
    };
    readonly params: {
        readonly turn: readonly [0, -180, 180];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => ({
        box: [number, number, number];
        at: [number, number, number];
        c: string;
        cyl?: undefined;
        top?: undefined;
        seg?: undefined;
        rot?: undefined;
        group?: undefined;
    } | {
        cyl: [number, number, number];
        at: [number, number, number];
        top: number;
        seg: number;
        c: string;
        box?: undefined;
        rot?: undefined;
        group?: undefined;
    } | {
        at: [number, number, number];
        rot: [number, number, number];
        group: ({
            cyl: [number, number, number];
            at: [number, number, number];
            seg: number;
            c: string;
            top?: undefined;
            use?: undefined;
            rot?: undefined;
            scale?: undefined;
            palette?: undefined;
        } | {
            cyl: [number, number, number];
            at: [number, number, number];
            top: number;
            seg: number;
            c: string;
            use?: undefined;
            rot?: undefined;
            scale?: undefined;
            palette?: undefined;
        } | {
            use: string;
            at: [number, number, number];
            rot: [number, number, number];
            scale: number;
            palette: {
                readonly outer: "flame";
                readonly mid: "flame";
            };
            cyl?: undefined;
            seg?: undefined;
            c?: undefined;
            top?: undefined;
        })[];
        box?: undefined;
        c?: undefined;
        cyl?: undefined;
        top?: undefined;
        seg?: undefined;
    })[];
};
export declare const brazier: {
    readonly id: "brazier";
    readonly about: "Iron fire bowl on a pedestal, heaped with coals and burning";
    readonly tags: readonly ["lighting", "fire"];
    readonly palette: {
        readonly iron: "night";
        readonly trim: "slate";
        readonly rim: "mist";
        readonly coal: "red";
        readonly flame: "orange";
        readonly core: "sand";
        readonly heart: "white";
    };
    readonly light: {
        readonly at: readonly [0, 1.58, 0];
        readonly c: "flame";
        readonly intensity: 2.5;
        readonly radius: 6;
        readonly flicker: "brazier";
    };
    readonly parts: readonly [{
        readonly cyl: readonly [0.5, 0.08, 0.5];
        readonly at: readonly [0, 0.04, 0];
        readonly seg: 8;
        readonly c: "iron";
    }, {
        readonly cyl: readonly [0.16, 0.52, 0.16];
        readonly at: readonly [0, 0.34, 0];
        readonly top: 0.7;
        readonly seg: 6;
        readonly c: "trim";
    }, {
        readonly cyl: readonly [0.8, 0.26, 0.8];
        readonly at: readonly [0, 0.73, 0];
        readonly top: 1.7;
        readonly seg: 8;
        readonly c: "iron";
    }, {
        readonly torus: readonly [0.86, 0.07, 0.86];
        readonly at: readonly [0, 0.86, 0];
        readonly seg: 8;
        readonly c: "rim";
    }, {
        readonly ball: readonly [0.66, 0.16, 0.66];
        readonly at: readonly [0, 0.86, 0];
        readonly half: true;
        readonly c: "coal";
    }, {
        readonly use: "flame";
        readonly at: readonly [0, 0.93, 0];
        readonly params: {
            readonly h: 0.7;
        };
        readonly scale: 0.9;
        readonly palette: {
            readonly outer: "flame";
            readonly mid: "flame";
        };
    }];
};
export declare const candles: {
    readonly id: "candles";
    readonly about: "Three wax candles of different heights in a puddle of wax, each with a one-tongue flame (seeded)";
    readonly tags: readonly ["lighting", "fire"];
    readonly palette: {
        readonly wax: "white";
        readonly puddle: "mist";
        readonly flame: "sand";
    };
    readonly light: {
        readonly at: readonly [0, 0.95, 0];
        readonly c: "flame";
        readonly intensity: 1.2;
        readonly radius: 3.5;
        readonly flicker: "candle";
    };
    readonly parts: (_: Readonly<Record<string, number>>, rng: import("../..").Rng) => ({
        readonly cyl: readonly [number, number, number];
        readonly at: readonly [number, number, number];
        readonly seg: 6;
        readonly c: "wax";
    } | {
        readonly use: "flame";
        readonly at: readonly [number, number, number];
        readonly params: {
            readonly tongues: 1;
        };
        readonly scale: number;
        readonly palette: {
            readonly outer: "flame";
            readonly mid: "flame";
            readonly core: "flame";
            readonly heart: "flame";
        };
    } | {
        cyl: [number, number, number];
        at: [number, number, number];
        rot: [number, number, number];
        seg: number;
        c: string;
    })[];
};
export declare const hangingLantern: {
    readonly id: "hanging-lantern";
    readonly about: "Iron lantern with glowing glass, hung at 1.7 m on a chain from a ceiling plate; a side, not a post, faces the camera";
    readonly tags: readonly ["lighting"];
    readonly palette: {
        readonly iron: "night";
        readonly trim: "slate";
        readonly flame: "sand";
    };
    readonly floats: true;
    readonly collider: "none";
    readonly anchors: {
        readonly hook: readonly [0, 2.675, 0];
    };
    readonly light: {
        readonly at: readonly [0, 1.91, 0];
        readonly c: "flame";
        readonly intensity: 1.8;
        readonly radius: 5;
        readonly flicker: "candle";
    };
    readonly parts: readonly [{
        readonly box: readonly [0.32, 0.05, 0.32];
        readonly at: readonly [0, 1.725, 0];
        readonly rot: readonly [0, 45, 0];
        readonly c: "trim";
    }, {
        readonly rot: readonly [0, 45, 0];
        readonly group: readonly [{
            readonly mirror: readonly [{
                readonly mirror: readonly [{
                    readonly box: readonly [0.06, 0.32, 0.06];
                    readonly at: readonly [0.13, 1.91, 0.13];
                    readonly c: "iron";
                }];
                readonly axis: "z";
            }];
        }];
    }, {
        readonly box: readonly [0.2, 0.32, 0.2];
        readonly at: readonly [0, 1.91, 0];
        readonly rot: readonly [0, 45, 0];
        readonly c: "flame";
        readonly glow: true;
    }, {
        readonly box: readonly [0.32, 0.05, 0.32];
        readonly at: readonly [0, 2.095, 0];
        readonly rot: readonly [0, 45, 0];
        readonly c: "trim";
    }, {
        readonly cyl: readonly [0.4, 0.14, 0.4];
        readonly at: readonly [0, 2.19, 0];
        readonly top: 0.3;
        readonly seg: 4;
        readonly c: "iron";
    }, ...{
        readonly torus: readonly [0.1, 0.06, 0.14];
        readonly at: readonly [0, number, 0];
        readonly rot: readonly [90, 0 | 90, 0];
        readonly seg: 6;
        readonly c: "trim";
    }[], {
        readonly box: readonly [0.2, 0.05, 0.2];
        readonly at: readonly [0, 2.65, 0];
        readonly c: "iron";
    }];
};
export declare const campfire: {
    readonly id: "campfire";
    readonly about: "Campfire: two pairs of crossed logs on an ash bed in a ring of field stones, the library flame on top and its light";
    readonly tags: readonly ["lighting", "fire", "camp", "nature"];
    readonly palette: {
        readonly stone: "slate";
        readonly stone2: "mist";
        readonly ash: "night";
        readonly bark: "red";
        readonly cut: "sand";
        readonly flame: "orange";
        readonly core: "sand";
        readonly heart: "white";
    };
    readonly light: {
        readonly at: readonly [0, 0.6, 0];
        readonly c: "flame";
        readonly intensity: 2.5;
        readonly radius: 6;
        readonly flicker: "torch";
    };
    readonly collider: "cyl";
    readonly parts: (_: Readonly<Record<string, number>>, rng: import("../..").Rng) => Part[];
};
export declare const standingTorch: {
    readonly id: "standing-torch";
    readonly about: "Torch on a tall iron stand: three splayed legs, a pole, a cup holding the stick, its rag burning at about 1.8 m";
    readonly tags: readonly ["lighting", "fire", "dungeon", "town"];
    readonly palette: {
        readonly iron: "night";
        readonly trim: "slate";
        readonly wood: "red";
        readonly rag: "plum";
        readonly flame: "orange";
        readonly core: "sand";
        readonly heart: "white";
    };
    readonly light: {
        readonly at: readonly [0, 1.95, 0];
        readonly c: "flame";
        readonly intensity: 2;
        readonly radius: 5;
        readonly flicker: "torch";
    };
    readonly collider: "cyl";
    readonly parts: readonly [...Part[], {
        readonly cyl: readonly [0.14, 0.12, 0.14];
        readonly at: readonly [0, 0.42, 0];
        readonly seg: 6;
        readonly c: "trim";
    }, {
        readonly cyl: readonly [0.08, 1, 0.08];
        readonly at: readonly [0, 0.92, 0];
        readonly seg: 6;
        readonly c: "iron";
        readonly name: "pole";
    }, {
        readonly cyl: readonly [0.22, 0.16, 0.22];
        readonly at: readonly [0, 1.48, 0];
        readonly top: 1.5;
        readonly seg: 6;
        readonly c: "iron";
        readonly name: "cup";
    }, {
        readonly torus: readonly [0.24, 0.05, 0.24];
        readonly at: readonly [0, 1.56, 0];
        readonly seg: 6;
        readonly c: "trim";
    }, {
        readonly cyl: readonly [0.09, 0.22, 0.09];
        readonly at: readonly [0, 1.62, 0];
        readonly seg: 6;
        readonly c: "wood";
    }, {
        readonly cyl: readonly [0.15, 0.14, 0.15];
        readonly at: readonly [0, 1.76, 0];
        readonly top: 1.2;
        readonly seg: 6;
        readonly c: "rag";
    }, {
        readonly use: "flame";
        readonly at: readonly [0, 1.81, 0];
        readonly scale: 0.7;
        readonly palette: {
            readonly outer: "flame";
            readonly mid: "flame";
        };
    }];
};
export declare const chandelier: {
    readonly id: "chandelier";
    readonly about: "Iron ring chandelier hung on a chain: spokes to a centre stem, `n` wax candles on the ring (seeded heights), its ring at 2.4 m";
    readonly tags: readonly ["lighting", "fire", "ceiling"];
    readonly palette: {
        readonly iron: "night";
        readonly trim: "slate";
        readonly wax: "white";
        readonly flame: "sand";
    };
    readonly floats: true;
    readonly collider: "none";
    readonly params: {
        readonly n: readonly [6, 4, 8];
    };
    readonly anchors: {
        readonly hook: readonly [0, 3.335, 0];
    };
    readonly light: {
        readonly at: readonly [0, 2.75, 0];
        readonly c: "flame";
        readonly intensity: 2.5;
        readonly radius: 6;
        readonly flicker: "candle";
    };
    readonly parts: (p: Readonly<Record<string, number>>, rng: import("../..").Rng) => (Part | {
        readonly torus: readonly [0.1, 0.06, 0.14];
        readonly at: readonly [0, number, 0];
        readonly rot: readonly [90, 0 | 90, 0];
        readonly seg: 6;
        readonly c: "trim";
    } | {
        readonly cyl: readonly [0.15, 0.05, 0.15];
        readonly at: readonly [number, number, number];
        readonly seg: 6;
        readonly c: "iron";
    } | {
        readonly cyl: readonly [0.1, number, 0.1];
        readonly at: readonly [number, number, number];
        readonly seg: 6;
        readonly c: "wax";
    } | {
        readonly use: "flame";
        readonly at: readonly [number, number, number];
        readonly params: {
            readonly tongues: 1;
        };
        readonly scale: 0.5;
        readonly palette: {
            readonly outer: "flame";
            readonly mid: "flame";
            readonly core: "flame";
            readonly heart: "flame";
        };
    })[];
};
export declare const wallLantern: {
    readonly id: "wall-lantern";
    readonly about: "Street lantern on a wall bracket: a back plate on the wall at z = 0, a braced arm out 0.55 m, the lantern hung from it with glowing glass at 1.9 m";
    readonly tags: readonly ["lighting", "town", "wall"];
    readonly palette: {
        readonly iron: "night";
        readonly plate: "slate";
        readonly flame: "sand";
    };
    readonly floats: true;
    readonly collider: "none";
    readonly anchors: {
        readonly mount: readonly [0, 2.1, 0];
    };
    readonly light: {
        readonly at: readonly [0, 1.88, 0.48];
        readonly c: "flame";
        readonly intensity: 1.8;
        readonly radius: 5;
        readonly flicker: "candle";
    };
    readonly parts: readonly [{
        readonly box: readonly [0.2, 0.44, 0.05];
        readonly at: readonly [0, 2.1, 0.025];
        readonly c: "plate";
    }, {
        readonly box: readonly [0.07, 0.07, 0.56];
        readonly at: readonly [0, 2.28, 0.3];
        readonly c: "iron";
        readonly name: "arm";
    }, {
        readonly box: readonly [0.06, 0.06, 0.47];
        readonly at: readonly [0, 2.095, 0.225];
        readonly rot: readonly [-41.5, 0, 0];
        readonly c: "iron";
    }, {
        readonly box: readonly [0.06, 0.08, 0.06];
        readonly at: readonly [0, 2.205, 0.48];
        readonly c: "iron";
    }, {
        readonly name: "lantern";
        readonly at: readonly [0, 1.88, 0.48];
        readonly group: readonly [{
            readonly cyl: readonly [0.3, 0.12, 0.3];
            readonly at: readonly [0, 0.22, 0];
            readonly top: 0.3;
            readonly seg: 4;
            readonly c: "iron";
        }, {
            readonly box: readonly [0.26, 0.04, 0.26];
            readonly at: readonly [0, 0.14, 0];
            readonly rot: readonly [0, 45, 0];
            readonly c: "plate";
        }, {
            readonly rot: readonly [0, 45, 0];
            readonly group: readonly [{
                readonly mirror: readonly [{
                    readonly mirror: readonly [{
                        readonly box: readonly [0.06, 0.26, 0.06];
                        readonly at: readonly [0.095, 0, 0.095];
                        readonly c: "iron";
                    }];
                    readonly axis: "z";
                }];
            }];
        }, {
            readonly box: readonly [0.16, 0.24, 0.16];
            readonly rot: readonly [0, 45, 0];
            readonly c: "flame";
            readonly glow: true;
        }, {
            readonly box: readonly [0.26, 0.04, 0.26];
            readonly at: readonly [0, -0.14, 0];
            readonly rot: readonly [0, 45, 0];
            readonly c: "plate";
        }, {
            readonly cone: readonly [0.1, 0.1, 0.1];
            readonly at: readonly [0, -0.21, 0];
            readonly rot: readonly [180, 0, 0];
            readonly seg: 4;
            readonly c: "iron";
        }];
    }];
};
export declare const pathLantern: {
    readonly id: "path-lantern";
    readonly about: "Low path lantern, 1.1 m tall: glowing glass under a verdigris roof on a short wooden post and a stone footing";
    readonly tags: readonly ["lighting", "town", "garden"];
    readonly palette: {
        readonly stone: "slate";
        readonly wood: "red";
        readonly iron: "night";
        readonly roof: "teal";
        readonly flame: "sand";
    };
    readonly light: {
        readonly at: readonly [0, 0.72, 0];
        readonly c: "flame";
        readonly intensity: 1.2;
        readonly radius: 3.5;
        readonly flicker: "candle";
    };
    readonly parts: readonly [{
        readonly box: readonly [0.28, 0.1, 0.28];
        readonly at: readonly [0, 0.05, 0];
        readonly c: "stone";
    }, {
        readonly box: readonly [0.12, 0.47, 0.12];
        readonly at: readonly [0, 0.335, 0];
        readonly c: "wood";
        readonly name: "post";
    }, {
        readonly name: "lantern";
        readonly at: readonly [0, 0.72, 0];
        readonly scale: 1.15;
        readonly group: readonly [{
            readonly box: readonly [0.24, 0.04, 0.24];
            readonly at: readonly [0, -0.12, 0];
            readonly rot: readonly [0, 45, 0];
            readonly c: "iron";
        }, {
            readonly rot: readonly [0, 45, 0];
            readonly group: readonly [{
                readonly mirror: readonly [{
                    readonly mirror: readonly [{
                        readonly box: readonly [0.06, 0.22, 0.06];
                        readonly at: readonly [0.09, 0, 0.09];
                        readonly c: "iron";
                    }];
                    readonly axis: "z";
                }];
            }];
        }, {
            readonly box: readonly [0.14, 0.2, 0.14];
            readonly rot: readonly [0, 45, 0];
            readonly c: "flame";
            readonly glow: true;
        }, {
            readonly box: readonly [0.24, 0.04, 0.24];
            readonly at: readonly [0, 0.12, 0];
            readonly rot: readonly [0, 45, 0];
            readonly c: "iron";
        }, {
            readonly cyl: readonly [0.34, 0.12, 0.34];
            readonly at: readonly [0, 0.2, 0];
            readonly top: 0.25;
            readonly seg: 4;
            readonly c: "roof";
            readonly name: "roof";
        }, {
            readonly ball: readonly [0.08, 0.08, 0.08];
            readonly at: readonly [0, 0.29, 0];
            readonly seg: 6;
            readonly c: "iron";
        }];
    }];
};
export declare const LIGHTING: ({
    readonly id: "lamp-post";
    readonly about: "Iron street lamp with a hanging lantern";
    readonly tags: readonly ["lighting", "town"];
    readonly palette: {
        readonly iron: "night";
        readonly flame: "sand";
    };
    readonly light: {
        readonly at: readonly [0.42, 1.74, 0];
        readonly c: "flame";
        readonly intensity: 6;
        readonly radius: 6;
        readonly flicker: "candle";
    };
    readonly parts: readonly [{
        readonly cyl: readonly [0.3, 0.2, 0.3];
        readonly at: readonly [0, 0.1, 0];
        readonly top: 0.6;
        readonly c: "iron";
    }, {
        readonly cyl: readonly [0.09, 2, 0.09];
        readonly at: readonly [0, 1.1, 0];
        readonly seg: 6;
        readonly c: "iron";
    }, {
        readonly box: readonly [0.5, 0.06, 0.06];
        readonly at: readonly [0.22, 2.02, 0];
        readonly c: "iron";
    }, {
        readonly name: "lantern";
        readonly at: readonly [0.42, 1.74, 0];
        readonly group: readonly [{
            readonly box: readonly [0.22, 0.04, 0.22];
            readonly at: readonly [0, -0.13, 0];
            readonly c: "iron";
        }, {
            readonly box: readonly [0.16, 0.22, 0.16];
            readonly c: "flame";
            readonly glow: true;
        }, {
            readonly cyl: readonly [0.32, 0.1, 0.32];
            readonly at: readonly [0, 0.16, 0];
            readonly top: 0.25;
            readonly seg: 4;
            readonly rot: readonly [0, 45, 0];
            readonly c: "iron";
        }, {
            readonly cyl: readonly [0.06, 0.1, 0.06];
            readonly at: readonly [0, 0.25, 0];
            readonly seg: 4;
            readonly c: "iron";
        }];
    }];
} | {
    readonly id: "flame";
    readonly about: "A fire's flame: 3-sided lit tongues, one face to the iso camera and leaned back into the light, a small glowing heart";
    readonly tags: readonly ["lighting", "fire"];
    readonly palette: {
        readonly outer: "orange";
        readonly mid: "orange";
        readonly core: "sand";
        readonly heart: "white";
    };
    readonly params: {
        readonly h: readonly [0.8, 0.3, 1.4];
        readonly tongues: readonly [4, 1, 4];
    };
    readonly light: {
        readonly at: readonly [0, 0.4, 0];
        readonly c: "mid";
        readonly intensity: 5;
        readonly radius: 5;
        readonly flicker: "torch";
    };
    readonly parts: (p: Readonly<Record<string, number>>) => ({
        readonly at: readonly [number, number, number];
        readonly rot: readonly [0, 125, 0];
        readonly group: readonly [{
            readonly rot: readonly [number, 0, number];
            readonly group: readonly [{
                readonly cone: readonly [number, number, number];
                readonly at: readonly [0, number, 0];
                readonly seg: 3;
                readonly c: string;
            }];
        }];
    } | {
        readonly ball: readonly [number, number, number];
        readonly at: readonly [number, number, number];
        readonly seg: 8;
        readonly c: "heart";
        readonly glow: true;
    })[];
} | {
    readonly id: "wall-torch";
    readonly about: "Torch in an iron wall sconce mounted at 1.3 m, its back on the wall at z = 0 and the stick tipped out";
    readonly tags: readonly ["lighting", "fire", "wall"];
    readonly palette: {
        readonly iron: "night";
        readonly plate: "slate";
        readonly wood: "red";
        readonly rag: "plum";
        readonly flame: "orange";
        readonly core: "sand";
        readonly heart: "white";
    };
    readonly floats: true;
    readonly collider: "none";
    readonly anchors: {
        readonly mount: readonly [0, 1.3, 0];
    };
    readonly light: {
        readonly at: readonly [0, 2.3, 0.45];
        readonly c: "flame";
        readonly intensity: 2;
        readonly radius: 5;
        readonly flicker: "torch";
    };
    readonly params: {
        readonly turn: readonly [0, -180, 180];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => ({
        box: [number, number, number];
        at: [number, number, number];
        c: string;
        cyl?: undefined;
        top?: undefined;
        seg?: undefined;
        rot?: undefined;
        group?: undefined;
    } | {
        cyl: [number, number, number];
        at: [number, number, number];
        top: number;
        seg: number;
        c: string;
        box?: undefined;
        rot?: undefined;
        group?: undefined;
    } | {
        at: [number, number, number];
        rot: [number, number, number];
        group: ({
            cyl: [number, number, number];
            at: [number, number, number];
            seg: number;
            c: string;
            top?: undefined;
            use?: undefined;
            rot?: undefined;
            scale?: undefined;
            palette?: undefined;
        } | {
            cyl: [number, number, number];
            at: [number, number, number];
            top: number;
            seg: number;
            c: string;
            use?: undefined;
            rot?: undefined;
            scale?: undefined;
            palette?: undefined;
        } | {
            use: string;
            at: [number, number, number];
            rot: [number, number, number];
            scale: number;
            palette: {
                readonly outer: "flame";
                readonly mid: "flame";
            };
            cyl?: undefined;
            seg?: undefined;
            c?: undefined;
            top?: undefined;
        })[];
        box?: undefined;
        c?: undefined;
        cyl?: undefined;
        top?: undefined;
        seg?: undefined;
    })[];
} | {
    readonly id: "brazier";
    readonly about: "Iron fire bowl on a pedestal, heaped with coals and burning";
    readonly tags: readonly ["lighting", "fire"];
    readonly palette: {
        readonly iron: "night";
        readonly trim: "slate";
        readonly rim: "mist";
        readonly coal: "red";
        readonly flame: "orange";
        readonly core: "sand";
        readonly heart: "white";
    };
    readonly light: {
        readonly at: readonly [0, 1.58, 0];
        readonly c: "flame";
        readonly intensity: 2.5;
        readonly radius: 6;
        readonly flicker: "brazier";
    };
    readonly parts: readonly [{
        readonly cyl: readonly [0.5, 0.08, 0.5];
        readonly at: readonly [0, 0.04, 0];
        readonly seg: 8;
        readonly c: "iron";
    }, {
        readonly cyl: readonly [0.16, 0.52, 0.16];
        readonly at: readonly [0, 0.34, 0];
        readonly top: 0.7;
        readonly seg: 6;
        readonly c: "trim";
    }, {
        readonly cyl: readonly [0.8, 0.26, 0.8];
        readonly at: readonly [0, 0.73, 0];
        readonly top: 1.7;
        readonly seg: 8;
        readonly c: "iron";
    }, {
        readonly torus: readonly [0.86, 0.07, 0.86];
        readonly at: readonly [0, 0.86, 0];
        readonly seg: 8;
        readonly c: "rim";
    }, {
        readonly ball: readonly [0.66, 0.16, 0.66];
        readonly at: readonly [0, 0.86, 0];
        readonly half: true;
        readonly c: "coal";
    }, {
        readonly use: "flame";
        readonly at: readonly [0, 0.93, 0];
        readonly params: {
            readonly h: 0.7;
        };
        readonly scale: 0.9;
        readonly palette: {
            readonly outer: "flame";
            readonly mid: "flame";
        };
    }];
} | {
    readonly id: "candles";
    readonly about: "Three wax candles of different heights in a puddle of wax, each with a one-tongue flame (seeded)";
    readonly tags: readonly ["lighting", "fire"];
    readonly palette: {
        readonly wax: "white";
        readonly puddle: "mist";
        readonly flame: "sand";
    };
    readonly light: {
        readonly at: readonly [0, 0.95, 0];
        readonly c: "flame";
        readonly intensity: 1.2;
        readonly radius: 3.5;
        readonly flicker: "candle";
    };
    readonly parts: (_: Readonly<Record<string, number>>, rng: import("../..").Rng) => ({
        readonly cyl: readonly [number, number, number];
        readonly at: readonly [number, number, number];
        readonly seg: 6;
        readonly c: "wax";
    } | {
        readonly use: "flame";
        readonly at: readonly [number, number, number];
        readonly params: {
            readonly tongues: 1;
        };
        readonly scale: number;
        readonly palette: {
            readonly outer: "flame";
            readonly mid: "flame";
            readonly core: "flame";
            readonly heart: "flame";
        };
    } | {
        cyl: [number, number, number];
        at: [number, number, number];
        rot: [number, number, number];
        seg: number;
        c: string;
    })[];
} | {
    readonly id: "hanging-lantern";
    readonly about: "Iron lantern with glowing glass, hung at 1.7 m on a chain from a ceiling plate; a side, not a post, faces the camera";
    readonly tags: readonly ["lighting"];
    readonly palette: {
        readonly iron: "night";
        readonly trim: "slate";
        readonly flame: "sand";
    };
    readonly floats: true;
    readonly collider: "none";
    readonly anchors: {
        readonly hook: readonly [0, 2.675, 0];
    };
    readonly light: {
        readonly at: readonly [0, 1.91, 0];
        readonly c: "flame";
        readonly intensity: 1.8;
        readonly radius: 5;
        readonly flicker: "candle";
    };
    readonly parts: readonly [{
        readonly box: readonly [0.32, 0.05, 0.32];
        readonly at: readonly [0, 1.725, 0];
        readonly rot: readonly [0, 45, 0];
        readonly c: "trim";
    }, {
        readonly rot: readonly [0, 45, 0];
        readonly group: readonly [{
            readonly mirror: readonly [{
                readonly mirror: readonly [{
                    readonly box: readonly [0.06, 0.32, 0.06];
                    readonly at: readonly [0.13, 1.91, 0.13];
                    readonly c: "iron";
                }];
                readonly axis: "z";
            }];
        }];
    }, {
        readonly box: readonly [0.2, 0.32, 0.2];
        readonly at: readonly [0, 1.91, 0];
        readonly rot: readonly [0, 45, 0];
        readonly c: "flame";
        readonly glow: true;
    }, {
        readonly box: readonly [0.32, 0.05, 0.32];
        readonly at: readonly [0, 2.095, 0];
        readonly rot: readonly [0, 45, 0];
        readonly c: "trim";
    }, {
        readonly cyl: readonly [0.4, 0.14, 0.4];
        readonly at: readonly [0, 2.19, 0];
        readonly top: 0.3;
        readonly seg: 4;
        readonly c: "iron";
    }, ...{
        readonly torus: readonly [0.1, 0.06, 0.14];
        readonly at: readonly [0, number, 0];
        readonly rot: readonly [90, 0 | 90, 0];
        readonly seg: 6;
        readonly c: "trim";
    }[], {
        readonly box: readonly [0.2, 0.05, 0.2];
        readonly at: readonly [0, 2.65, 0];
        readonly c: "iron";
    }];
} | {
    readonly id: "campfire";
    readonly about: "Campfire: two pairs of crossed logs on an ash bed in a ring of field stones, the library flame on top and its light";
    readonly tags: readonly ["lighting", "fire", "camp", "nature"];
    readonly palette: {
        readonly stone: "slate";
        readonly stone2: "mist";
        readonly ash: "night";
        readonly bark: "red";
        readonly cut: "sand";
        readonly flame: "orange";
        readonly core: "sand";
        readonly heart: "white";
    };
    readonly light: {
        readonly at: readonly [0, 0.6, 0];
        readonly c: "flame";
        readonly intensity: 2.5;
        readonly radius: 6;
        readonly flicker: "torch";
    };
    readonly collider: "cyl";
    readonly parts: (_: Readonly<Record<string, number>>, rng: import("../..").Rng) => Part[];
} | {
    readonly id: "standing-torch";
    readonly about: "Torch on a tall iron stand: three splayed legs, a pole, a cup holding the stick, its rag burning at about 1.8 m";
    readonly tags: readonly ["lighting", "fire", "dungeon", "town"];
    readonly palette: {
        readonly iron: "night";
        readonly trim: "slate";
        readonly wood: "red";
        readonly rag: "plum";
        readonly flame: "orange";
        readonly core: "sand";
        readonly heart: "white";
    };
    readonly light: {
        readonly at: readonly [0, 1.95, 0];
        readonly c: "flame";
        readonly intensity: 2;
        readonly radius: 5;
        readonly flicker: "torch";
    };
    readonly collider: "cyl";
    readonly parts: readonly [...Part[], {
        readonly cyl: readonly [0.14, 0.12, 0.14];
        readonly at: readonly [0, 0.42, 0];
        readonly seg: 6;
        readonly c: "trim";
    }, {
        readonly cyl: readonly [0.08, 1, 0.08];
        readonly at: readonly [0, 0.92, 0];
        readonly seg: 6;
        readonly c: "iron";
        readonly name: "pole";
    }, {
        readonly cyl: readonly [0.22, 0.16, 0.22];
        readonly at: readonly [0, 1.48, 0];
        readonly top: 1.5;
        readonly seg: 6;
        readonly c: "iron";
        readonly name: "cup";
    }, {
        readonly torus: readonly [0.24, 0.05, 0.24];
        readonly at: readonly [0, 1.56, 0];
        readonly seg: 6;
        readonly c: "trim";
    }, {
        readonly cyl: readonly [0.09, 0.22, 0.09];
        readonly at: readonly [0, 1.62, 0];
        readonly seg: 6;
        readonly c: "wood";
    }, {
        readonly cyl: readonly [0.15, 0.14, 0.15];
        readonly at: readonly [0, 1.76, 0];
        readonly top: 1.2;
        readonly seg: 6;
        readonly c: "rag";
    }, {
        readonly use: "flame";
        readonly at: readonly [0, 1.81, 0];
        readonly scale: 0.7;
        readonly palette: {
            readonly outer: "flame";
            readonly mid: "flame";
        };
    }];
} | {
    readonly id: "chandelier";
    readonly about: "Iron ring chandelier hung on a chain: spokes to a centre stem, `n` wax candles on the ring (seeded heights), its ring at 2.4 m";
    readonly tags: readonly ["lighting", "fire", "ceiling"];
    readonly palette: {
        readonly iron: "night";
        readonly trim: "slate";
        readonly wax: "white";
        readonly flame: "sand";
    };
    readonly floats: true;
    readonly collider: "none";
    readonly params: {
        readonly n: readonly [6, 4, 8];
    };
    readonly anchors: {
        readonly hook: readonly [0, 3.335, 0];
    };
    readonly light: {
        readonly at: readonly [0, 2.75, 0];
        readonly c: "flame";
        readonly intensity: 2.5;
        readonly radius: 6;
        readonly flicker: "candle";
    };
    readonly parts: (p: Readonly<Record<string, number>>, rng: import("../..").Rng) => (Part | {
        readonly torus: readonly [0.1, 0.06, 0.14];
        readonly at: readonly [0, number, 0];
        readonly rot: readonly [90, 0 | 90, 0];
        readonly seg: 6;
        readonly c: "trim";
    } | {
        readonly cyl: readonly [0.15, 0.05, 0.15];
        readonly at: readonly [number, number, number];
        readonly seg: 6;
        readonly c: "iron";
    } | {
        readonly cyl: readonly [0.1, number, 0.1];
        readonly at: readonly [number, number, number];
        readonly seg: 6;
        readonly c: "wax";
    } | {
        readonly use: "flame";
        readonly at: readonly [number, number, number];
        readonly params: {
            readonly tongues: 1;
        };
        readonly scale: 0.5;
        readonly palette: {
            readonly outer: "flame";
            readonly mid: "flame";
            readonly core: "flame";
            readonly heart: "flame";
        };
    })[];
} | {
    readonly id: "wall-lantern";
    readonly about: "Street lantern on a wall bracket: a back plate on the wall at z = 0, a braced arm out 0.55 m, the lantern hung from it with glowing glass at 1.9 m";
    readonly tags: readonly ["lighting", "town", "wall"];
    readonly palette: {
        readonly iron: "night";
        readonly plate: "slate";
        readonly flame: "sand";
    };
    readonly floats: true;
    readonly collider: "none";
    readonly anchors: {
        readonly mount: readonly [0, 2.1, 0];
    };
    readonly light: {
        readonly at: readonly [0, 1.88, 0.48];
        readonly c: "flame";
        readonly intensity: 1.8;
        readonly radius: 5;
        readonly flicker: "candle";
    };
    readonly parts: readonly [{
        readonly box: readonly [0.2, 0.44, 0.05];
        readonly at: readonly [0, 2.1, 0.025];
        readonly c: "plate";
    }, {
        readonly box: readonly [0.07, 0.07, 0.56];
        readonly at: readonly [0, 2.28, 0.3];
        readonly c: "iron";
        readonly name: "arm";
    }, {
        readonly box: readonly [0.06, 0.06, 0.47];
        readonly at: readonly [0, 2.095, 0.225];
        readonly rot: readonly [-41.5, 0, 0];
        readonly c: "iron";
    }, {
        readonly box: readonly [0.06, 0.08, 0.06];
        readonly at: readonly [0, 2.205, 0.48];
        readonly c: "iron";
    }, {
        readonly name: "lantern";
        readonly at: readonly [0, 1.88, 0.48];
        readonly group: readonly [{
            readonly cyl: readonly [0.3, 0.12, 0.3];
            readonly at: readonly [0, 0.22, 0];
            readonly top: 0.3;
            readonly seg: 4;
            readonly c: "iron";
        }, {
            readonly box: readonly [0.26, 0.04, 0.26];
            readonly at: readonly [0, 0.14, 0];
            readonly rot: readonly [0, 45, 0];
            readonly c: "plate";
        }, {
            readonly rot: readonly [0, 45, 0];
            readonly group: readonly [{
                readonly mirror: readonly [{
                    readonly mirror: readonly [{
                        readonly box: readonly [0.06, 0.26, 0.06];
                        readonly at: readonly [0.095, 0, 0.095];
                        readonly c: "iron";
                    }];
                    readonly axis: "z";
                }];
            }];
        }, {
            readonly box: readonly [0.16, 0.24, 0.16];
            readonly rot: readonly [0, 45, 0];
            readonly c: "flame";
            readonly glow: true;
        }, {
            readonly box: readonly [0.26, 0.04, 0.26];
            readonly at: readonly [0, -0.14, 0];
            readonly rot: readonly [0, 45, 0];
            readonly c: "plate";
        }, {
            readonly cone: readonly [0.1, 0.1, 0.1];
            readonly at: readonly [0, -0.21, 0];
            readonly rot: readonly [180, 0, 0];
            readonly seg: 4;
            readonly c: "iron";
        }];
    }];
} | {
    readonly id: "path-lantern";
    readonly about: "Low path lantern, 1.1 m tall: glowing glass under a verdigris roof on a short wooden post and a stone footing";
    readonly tags: readonly ["lighting", "town", "garden"];
    readonly palette: {
        readonly stone: "slate";
        readonly wood: "red";
        readonly iron: "night";
        readonly roof: "teal";
        readonly flame: "sand";
    };
    readonly light: {
        readonly at: readonly [0, 0.72, 0];
        readonly c: "flame";
        readonly intensity: 1.2;
        readonly radius: 3.5;
        readonly flicker: "candle";
    };
    readonly parts: readonly [{
        readonly box: readonly [0.28, 0.1, 0.28];
        readonly at: readonly [0, 0.05, 0];
        readonly c: "stone";
    }, {
        readonly box: readonly [0.12, 0.47, 0.12];
        readonly at: readonly [0, 0.335, 0];
        readonly c: "wood";
        readonly name: "post";
    }, {
        readonly name: "lantern";
        readonly at: readonly [0, 0.72, 0];
        readonly scale: 1.15;
        readonly group: readonly [{
            readonly box: readonly [0.24, 0.04, 0.24];
            readonly at: readonly [0, -0.12, 0];
            readonly rot: readonly [0, 45, 0];
            readonly c: "iron";
        }, {
            readonly rot: readonly [0, 45, 0];
            readonly group: readonly [{
                readonly mirror: readonly [{
                    readonly mirror: readonly [{
                        readonly box: readonly [0.06, 0.22, 0.06];
                        readonly at: readonly [0.09, 0, 0.09];
                        readonly c: "iron";
                    }];
                    readonly axis: "z";
                }];
            }];
        }, {
            readonly box: readonly [0.14, 0.2, 0.14];
            readonly rot: readonly [0, 45, 0];
            readonly c: "flame";
            readonly glow: true;
        }, {
            readonly box: readonly [0.24, 0.04, 0.24];
            readonly at: readonly [0, 0.12, 0];
            readonly rot: readonly [0, 45, 0];
            readonly c: "iron";
        }, {
            readonly cyl: readonly [0.34, 0.12, 0.34];
            readonly at: readonly [0, 0.2, 0];
            readonly top: 0.25;
            readonly seg: 4;
            readonly c: "roof";
            readonly name: "roof";
        }, {
            readonly ball: readonly [0.08, 0.08, 0.08];
            readonly at: readonly [0, 0.29, 0];
            readonly seg: 6;
            readonly c: "iron";
        }];
    }];
})[];
