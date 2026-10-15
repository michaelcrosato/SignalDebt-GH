import type { Part, Vec3 } from '../types';
export declare const greatsword: {
    readonly id: "greatsword";
    readonly about: "Two-handed sword, gold guard, purple grip";
    readonly tags: readonly ["weapon", "sword"];
    readonly palette: {
        readonly steel: "mist";
        readonly gold: "sand";
        readonly grip: "plum";
    };
    readonly parts: readonly [{
        readonly at: readonly [0, 0.06, 0];
        readonly group: readonly [{
            readonly slab: readonly [readonly [-0.06, 0], readonly [0.06, 0], readonly [0.06, 1], readonly [0, 1.14], readonly [-0.06, 1]];
            readonly depth: 0.035;
            readonly at: readonly [0, 0.3, 0];
            readonly c: "steel";
        }, {
            readonly box: readonly [0.34, 0.06, 0.08];
            readonly at: readonly [0, 0.28, 0];
            readonly c: "gold";
        }, {
            readonly mirror: readonly [{
                readonly ball: readonly [0.07, 0.07, 0.07];
                readonly at: readonly [0.18, 0.28, 0];
                readonly c: "gold";
            }];
        }, {
            readonly cyl: readonly [0.06, 0.22, 0.06];
            readonly at: readonly [0, 0.14, 0];
            readonly seg: 6;
            readonly c: "grip";
        }, {
            readonly ball: readonly [0.08, 0.08, 0.08];
            readonly at: readonly [0, 0.01, 0];
            readonly c: "gold";
        }];
    }];
};
export declare const sword: {
    readonly id: "sword";
    readonly about: "One-handed sword: white blade with a grey fuller, gold guard and pommel, a grip to tint";
    readonly tags: readonly ["weapon", "sword", "one-hand"];
    readonly palette: {
        readonly grip: "plum";
        readonly gold: "sand";
        readonly blade: "white";
        readonly fuller: "mist";
    };
    readonly anchors: {
        readonly grip: {
            at: Vec3;
            rot: Vec3;
        };
    };
    readonly parts: readonly [Part, Part, Part, Part, Part];
};
export declare const axe: {
    readonly id: "axe";
    readonly about: "One-handed axe: a haft with a bearded head on its leading side (+X) and a spike behind";
    readonly tags: readonly ["weapon", "axe", "one-hand"];
    readonly palette: {
        readonly grip: "plum";
        readonly iron: "slate";
        readonly head: "mist";
        readonly bit: "white";
    };
    readonly anchors: {
        readonly grip: {
            at: Vec3;
            rot: Vec3;
        };
    };
    readonly parts: readonly [Part, Part, Part, Part, Part, Part];
};
export declare const mace: {
    readonly id: "mace";
    readonly about: "Flanged mace: an iron head with four flanges and a tip on a haft";
    readonly tags: readonly ["weapon", "mace", "one-hand"];
    readonly palette: {
        readonly grip: "plum";
        readonly gold: "sand";
        readonly iron: "slate";
        readonly flange: "mist";
    };
    readonly anchors: {
        readonly grip: {
            at: Vec3;
            rot: Vec3;
        };
    };
    readonly parts: readonly [Part, Part, Part, Part, Part, Part];
};
export declare const sceptre: {
    readonly id: "sceptre";
    readonly about: "Gold sceptre: a crown holding a cyan gem, a point above";
    readonly tags: readonly ["weapon", "sceptre", "one-hand", "magic"];
    readonly palette: {
        readonly grip: "sand";
        readonly gold: "sand";
        readonly gem: "cyan";
    };
    readonly anchors: {
        readonly grip: {
            at: Vec3;
            rot: Vec3;
        };
    };
    readonly parts: readonly [Part, Part, Part, Part, Part];
};
export declare const dagger: {
    readonly id: "dagger";
    readonly about: "Dagger: a short white blade, gold guard and pommel";
    readonly tags: readonly ["weapon", "dagger", "one-hand"];
    readonly palette: {
        readonly grip: "plum";
        readonly gold: "sand";
        readonly blade: "white";
    };
    readonly anchors: {
        readonly grip: {
            at: Vec3;
            rot: Vec3;
        };
    };
    readonly parts: readonly [Part, Part, Part, Part];
};
export declare const wand: {
    readonly id: "wand";
    readonly about: "Wand: a teal shaft, a gold band and butt, a cyan gem at the tip";
    readonly tags: readonly ["weapon", "wand", "one-hand", "magic"];
    readonly palette: {
        readonly grip: "teal";
        readonly gold: "sand";
        readonly gem: "cyan";
    };
    readonly anchors: {
        readonly grip: {
            at: Vec3;
            rot: Vec3;
        };
    };
    readonly parts: readonly [Part, Part, Part, Part];
};
export declare const staff: {
    readonly id: "staff";
    readonly about: "Staff: a long shaft held a third of the way up, a gold claw holding a cyan crystal";
    readonly tags: readonly ["weapon", "staff", "two-hand", "magic"];
    readonly palette: {
        readonly grip: "plum";
        readonly iron: "slate";
        readonly gold: "sand";
        readonly gem: "cyan";
    };
    readonly anchors: {
        readonly grip: {
            at: Vec3;
            rot: Vec3;
        };
    };
    readonly parts: readonly [Part, Part, Part, Part, Part];
};
/** The bow's half height and how far its tips curl back toward the archer (−Z here), in metres. */
export declare const BOW_SHAPE: {
    readonly half: 0.6;
    readonly curl: 0.17;
};
export declare const bow: {
    readonly id: "bow";
    readonly about: "Recurve bow without its string (a game draws the string between the `tip.*` anchors): sand limbs, orange tips";
    readonly tags: readonly ["weapon", "bow", "two-hand"];
    readonly palette: {
        readonly grip: "plum";
        readonly limb: "sand";
        readonly tip: "orange";
    };
    readonly anchors: {
        readonly grip: {
            readonly at: readonly [0, 0.62, 0];
            readonly rot: readonly [0, 0, 0];
        };
        readonly 'tip.top': readonly [0, number, number];
        readonly 'tip.bottom': readonly [0, number, number];
    };
    readonly parts: () => Part[];
};
export declare const spear: {
    readonly id: "spear";
    readonly about: "Spear: a long shaft, a white leaf-shaped head with a steel midrib on an iron socket, an iron butt cap";
    readonly tags: readonly ["weapon", "spear", "polearm", "two-hand"];
    readonly palette: {
        readonly grip: "plum";
        readonly iron: "slate";
        readonly gold: "sand";
        readonly blade: "white";
        readonly steel: "mist";
    };
    readonly params: {
        readonly l: readonly [2, 1.6, 2.4];
    };
    readonly anchors: {
        readonly grip: {
            at: Vec3;
            rot: Vec3;
        };
    };
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
};
export declare const warhammer: {
    readonly id: "warhammer";
    readonly about: "Two-handed war hammer: an iron head with a steel striking face (+X), a back spike and a top spike, on a long haft";
    readonly tags: readonly ["weapon", "hammer", "mace", "two-hand"];
    readonly palette: {
        readonly grip: "plum";
        readonly iron: "slate";
        readonly steel: "mist";
        readonly gold: "sand";
    };
    readonly anchors: {
        readonly grip: {
            at: Vec3;
            rot: Vec3;
        };
    };
    readonly parts: readonly [Part, Part, Part, Part, Part, {
        readonly cone: readonly [0.12, 0.22, 0.12];
        readonly seg: 4;
        readonly at: readonly [-0.22, 1.15, 0];
        readonly rot: readonly [0, 0, 90];
        readonly c: "steel";
    }, {
        readonly cone: readonly [0.09, 0.16, 0.09];
        readonly seg: 4;
        readonly at: readonly [0, 1.305, 0];
        readonly c: "steel";
    }];
};
export declare const greataxe: {
    readonly id: "greataxe";
    readonly about: "Two-handed greataxe: a double-bitted grey head with white edges on an iron socket, a long haft";
    readonly tags: readonly ["weapon", "axe", "two-hand"];
    readonly palette: {
        readonly grip: "plum";
        readonly iron: "slate";
        readonly head: "mist";
        readonly bit: "white";
        readonly gold: "sand";
    };
    readonly anchors: {
        readonly grip: {
            at: Vec3;
            rot: Vec3;
        };
    };
    readonly parts: readonly [Part, Part, Part, Part, {
        readonly mirror: readonly [Part, Part];
    }];
};
export declare const halberd: {
    readonly id: "halberd";
    readonly about: "Halberd: a long pole, iron langets, a grey axe blade with a white edge (+X), a back hook and a white top spike";
    readonly tags: readonly ["weapon", "halberd", "polearm", "two-hand"];
    readonly palette: {
        readonly grip: "plum";
        readonly iron: "slate";
        readonly head: "mist";
        readonly edge: "white";
    };
    readonly params: {
        readonly l: readonly [2.1, 1.8, 2.4];
    };
    readonly anchors: {
        readonly grip: {
            at: Vec3;
            rot: Vec3;
        };
    };
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
};
export declare const flail: {
    readonly id: "flail";
    readonly about: "Flail: a short handle, an iron chain of links held straight out as in a swing, a steel ball with white spikes";
    readonly tags: readonly ["weapon", "flail", "mace", "one-hand"];
    readonly palette: {
        readonly grip: "plum";
        readonly gold: "sand";
        readonly iron: "slate";
        readonly ball: "mist";
        readonly spike: "white";
    };
    readonly params: {
        readonly links: readonly [3, 2, 4];
    };
    readonly anchors: {
        readonly grip: {
            at: Vec3;
            rot: Vec3;
        };
    };
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
};
export declare const scythe: {
    readonly id: "scythe";
    readonly about: "War scythe: a long snath with a side handle, a grey crescent blade sweeping out to +X with a white edge underneath";
    readonly tags: readonly ["weapon", "scythe", "polearm", "two-hand"];
    readonly palette: {
        readonly grip: "plum";
        readonly iron: "slate";
        readonly blade: "mist";
        readonly edge: "white";
    };
    readonly anchors: {
        readonly grip: {
            at: Vec3;
            rot: Vec3;
        };
    };
    readonly parts: readonly [Part, Part, {
        readonly box: readonly [0.06, 0.06, 0.2];
        readonly at: readonly [0, 1.05, 0.12];
        readonly c: "grip";
    }, Part, Part, Part];
};
export declare const crossbow: {
    readonly id: "crossbow";
    readonly about: "Crossbow, strung and cocked: a stock with its butt on the floor, a steel prod across the front, an iron stirrup, the string drawn back to the nut";
    readonly tags: readonly ["weapon", "crossbow", "two-hand"];
    readonly palette: {
        readonly grip: "plum";
        readonly iron: "slate";
        readonly prod: "mist";
        readonly gold: "sand";
        readonly string: "white";
    };
    readonly anchors: {
        readonly grip: {
            at: Vec3;
            rot: Vec3;
        };
    };
    readonly parts: readonly [{
        readonly box: readonly [0.08, 0.3, 0.12];
        readonly at: readonly [0, 0.15, -0.02];
        readonly c: "grip";
    }, Part, {
        readonly box: readonly [0.03, 0.08, 0.07];
        readonly at: readonly [0, 0.36, -0.07];
        readonly c: "gold";
    }, {
        readonly box: readonly [0.08, 0.06, 0.04];
        readonly at: readonly [0, 0.5, 0.05];
        readonly c: "gold";
    }, Part, {
        readonly mirror: readonly [{
            readonly box: readonly [0.34, 0.065, 0.055];
            readonly at: readonly [0.19, 0.696, 0];
            readonly rot: readonly [0, 0, -8];
            readonly c: "prod";
        }];
    }, {
        readonly torus: readonly [0.14, 0.03, 0.12];
        readonly seg: 6;
        readonly at: readonly [0, 0.84, 0];
        readonly rot: readonly [90, 0, 0];
        readonly c: "iron";
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.4, 0.025, 0.062];
            readonly at: readonly [0.18, 0.586, 0.03];
            readonly rot: readonly [0, 0, 25.5];
            readonly c: "string";
        }];
    }];
};
export declare const roundShield: {
    readonly id: "round-shield";
    readonly about: "Round shield: a red board with two painted quarters, a steel rim and boss; a handle on the back";
    readonly tags: readonly ["weapon", "shield", "offhand"];
    readonly palette: {
        readonly board: "red";
        readonly grip: "sand";
        readonly steel: "mist";
    };
    readonly anchors: {
        readonly grip: {
            readonly at: readonly [0, number, -0.0825];
            readonly rot: readonly [0, 0, 0];
        };
    };
    readonly parts: () => Part[];
};
export declare const kiteShield: {
    readonly id: "kite-shield";
    readonly about: "Kite shield: a tall teardrop, its field split in two colours down the middle, a steel rim; a handle on the back";
    readonly tags: readonly ["weapon", "shield", "offhand"];
    readonly palette: {
        readonly rim: "mist";
        readonly grip: "white";
        readonly field: "blue";
    };
    readonly anchors: {
        readonly grip: {
            readonly at: readonly [0, 0.62, -0.0875];
            readonly rot: readonly [0, 0, 0];
        };
    };
    readonly parts: () => Part[];
};
export declare const quiver: {
    readonly id: "quiver";
    readonly about: "Quiver of arrows: a leather tube with dark bands and a rim, the fletchings of a few arrows (seeded) standing out of its mouth";
    readonly tags: readonly ["weapon", "quiver", "gear"];
    readonly palette: {
        readonly grip: "red";
        readonly trim: "plum";
        readonly fletch: "white";
        readonly fletch2: "sand";
    };
    readonly params: {
        readonly arrows: readonly [6, 3, 8];
    };
    readonly anchors: {
        readonly mount: {
            readonly at: readonly [0, 0.3, -0.07];
            readonly rot: readonly [0, 0, 0];
        };
    };
    readonly parts: (p: Readonly<Record<string, number>>, rng: import("../..").Rng) => Part[];
};
export declare const WEAPONS: ({
    readonly id: "greatsword";
    readonly about: "Two-handed sword, gold guard, purple grip";
    readonly tags: readonly ["weapon", "sword"];
    readonly palette: {
        readonly steel: "mist";
        readonly gold: "sand";
        readonly grip: "plum";
    };
    readonly parts: readonly [{
        readonly at: readonly [0, 0.06, 0];
        readonly group: readonly [{
            readonly slab: readonly [readonly [-0.06, 0], readonly [0.06, 0], readonly [0.06, 1], readonly [0, 1.14], readonly [-0.06, 1]];
            readonly depth: 0.035;
            readonly at: readonly [0, 0.3, 0];
            readonly c: "steel";
        }, {
            readonly box: readonly [0.34, 0.06, 0.08];
            readonly at: readonly [0, 0.28, 0];
            readonly c: "gold";
        }, {
            readonly mirror: readonly [{
                readonly ball: readonly [0.07, 0.07, 0.07];
                readonly at: readonly [0.18, 0.28, 0];
                readonly c: "gold";
            }];
        }, {
            readonly cyl: readonly [0.06, 0.22, 0.06];
            readonly at: readonly [0, 0.14, 0];
            readonly seg: 6;
            readonly c: "grip";
        }, {
            readonly ball: readonly [0.08, 0.08, 0.08];
            readonly at: readonly [0, 0.01, 0];
            readonly c: "gold";
        }];
    }];
} | {
    readonly id: "sword";
    readonly about: "One-handed sword: white blade with a grey fuller, gold guard and pommel, a grip to tint";
    readonly tags: readonly ["weapon", "sword", "one-hand"];
    readonly palette: {
        readonly grip: "plum";
        readonly gold: "sand";
        readonly blade: "white";
        readonly fuller: "mist";
    };
    readonly anchors: {
        readonly grip: {
            at: Vec3;
            rot: Vec3;
        };
    };
    readonly parts: readonly [Part, Part, Part, Part, Part];
} | {
    readonly id: "axe";
    readonly about: "One-handed axe: a haft with a bearded head on its leading side (+X) and a spike behind";
    readonly tags: readonly ["weapon", "axe", "one-hand"];
    readonly palette: {
        readonly grip: "plum";
        readonly iron: "slate";
        readonly head: "mist";
        readonly bit: "white";
    };
    readonly anchors: {
        readonly grip: {
            at: Vec3;
            rot: Vec3;
        };
    };
    readonly parts: readonly [Part, Part, Part, Part, Part, Part];
} | {
    readonly id: "mace";
    readonly about: "Flanged mace: an iron head with four flanges and a tip on a haft";
    readonly tags: readonly ["weapon", "mace", "one-hand"];
    readonly palette: {
        readonly grip: "plum";
        readonly gold: "sand";
        readonly iron: "slate";
        readonly flange: "mist";
    };
    readonly anchors: {
        readonly grip: {
            at: Vec3;
            rot: Vec3;
        };
    };
    readonly parts: readonly [Part, Part, Part, Part, Part, Part];
} | {
    readonly id: "sceptre";
    readonly about: "Gold sceptre: a crown holding a cyan gem, a point above";
    readonly tags: readonly ["weapon", "sceptre", "one-hand", "magic"];
    readonly palette: {
        readonly grip: "sand";
        readonly gold: "sand";
        readonly gem: "cyan";
    };
    readonly anchors: {
        readonly grip: {
            at: Vec3;
            rot: Vec3;
        };
    };
    readonly parts: readonly [Part, Part, Part, Part, Part];
} | {
    readonly id: "dagger";
    readonly about: "Dagger: a short white blade, gold guard and pommel";
    readonly tags: readonly ["weapon", "dagger", "one-hand"];
    readonly palette: {
        readonly grip: "plum";
        readonly gold: "sand";
        readonly blade: "white";
    };
    readonly anchors: {
        readonly grip: {
            at: Vec3;
            rot: Vec3;
        };
    };
    readonly parts: readonly [Part, Part, Part, Part];
} | {
    readonly id: "wand";
    readonly about: "Wand: a teal shaft, a gold band and butt, a cyan gem at the tip";
    readonly tags: readonly ["weapon", "wand", "one-hand", "magic"];
    readonly palette: {
        readonly grip: "teal";
        readonly gold: "sand";
        readonly gem: "cyan";
    };
    readonly anchors: {
        readonly grip: {
            at: Vec3;
            rot: Vec3;
        };
    };
    readonly parts: readonly [Part, Part, Part, Part];
} | {
    readonly id: "staff";
    readonly about: "Staff: a long shaft held a third of the way up, a gold claw holding a cyan crystal";
    readonly tags: readonly ["weapon", "staff", "two-hand", "magic"];
    readonly palette: {
        readonly grip: "plum";
        readonly iron: "slate";
        readonly gold: "sand";
        readonly gem: "cyan";
    };
    readonly anchors: {
        readonly grip: {
            at: Vec3;
            rot: Vec3;
        };
    };
    readonly parts: readonly [Part, Part, Part, Part, Part];
} | {
    readonly id: "bow";
    readonly about: "Recurve bow without its string (a game draws the string between the `tip.*` anchors): sand limbs, orange tips";
    readonly tags: readonly ["weapon", "bow", "two-hand"];
    readonly palette: {
        readonly grip: "plum";
        readonly limb: "sand";
        readonly tip: "orange";
    };
    readonly anchors: {
        readonly grip: {
            readonly at: readonly [0, 0.62, 0];
            readonly rot: readonly [0, 0, 0];
        };
        readonly 'tip.top': readonly [0, number, number];
        readonly 'tip.bottom': readonly [0, number, number];
    };
    readonly parts: () => Part[];
} | {
    readonly id: "spear";
    readonly about: "Spear: a long shaft, a white leaf-shaped head with a steel midrib on an iron socket, an iron butt cap";
    readonly tags: readonly ["weapon", "spear", "polearm", "two-hand"];
    readonly palette: {
        readonly grip: "plum";
        readonly iron: "slate";
        readonly gold: "sand";
        readonly blade: "white";
        readonly steel: "mist";
    };
    readonly params: {
        readonly l: readonly [2, 1.6, 2.4];
    };
    readonly anchors: {
        readonly grip: {
            at: Vec3;
            rot: Vec3;
        };
    };
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
} | {
    readonly id: "warhammer";
    readonly about: "Two-handed war hammer: an iron head with a steel striking face (+X), a back spike and a top spike, on a long haft";
    readonly tags: readonly ["weapon", "hammer", "mace", "two-hand"];
    readonly palette: {
        readonly grip: "plum";
        readonly iron: "slate";
        readonly steel: "mist";
        readonly gold: "sand";
    };
    readonly anchors: {
        readonly grip: {
            at: Vec3;
            rot: Vec3;
        };
    };
    readonly parts: readonly [Part, Part, Part, Part, Part, {
        readonly cone: readonly [0.12, 0.22, 0.12];
        readonly seg: 4;
        readonly at: readonly [-0.22, 1.15, 0];
        readonly rot: readonly [0, 0, 90];
        readonly c: "steel";
    }, {
        readonly cone: readonly [0.09, 0.16, 0.09];
        readonly seg: 4;
        readonly at: readonly [0, 1.305, 0];
        readonly c: "steel";
    }];
} | {
    readonly id: "greataxe";
    readonly about: "Two-handed greataxe: a double-bitted grey head with white edges on an iron socket, a long haft";
    readonly tags: readonly ["weapon", "axe", "two-hand"];
    readonly palette: {
        readonly grip: "plum";
        readonly iron: "slate";
        readonly head: "mist";
        readonly bit: "white";
        readonly gold: "sand";
    };
    readonly anchors: {
        readonly grip: {
            at: Vec3;
            rot: Vec3;
        };
    };
    readonly parts: readonly [Part, Part, Part, Part, {
        readonly mirror: readonly [Part, Part];
    }];
} | {
    readonly id: "halberd";
    readonly about: "Halberd: a long pole, iron langets, a grey axe blade with a white edge (+X), a back hook and a white top spike";
    readonly tags: readonly ["weapon", "halberd", "polearm", "two-hand"];
    readonly palette: {
        readonly grip: "plum";
        readonly iron: "slate";
        readonly head: "mist";
        readonly edge: "white";
    };
    readonly params: {
        readonly l: readonly [2.1, 1.8, 2.4];
    };
    readonly anchors: {
        readonly grip: {
            at: Vec3;
            rot: Vec3;
        };
    };
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
} | {
    readonly id: "flail";
    readonly about: "Flail: a short handle, an iron chain of links held straight out as in a swing, a steel ball with white spikes";
    readonly tags: readonly ["weapon", "flail", "mace", "one-hand"];
    readonly palette: {
        readonly grip: "plum";
        readonly gold: "sand";
        readonly iron: "slate";
        readonly ball: "mist";
        readonly spike: "white";
    };
    readonly params: {
        readonly links: readonly [3, 2, 4];
    };
    readonly anchors: {
        readonly grip: {
            at: Vec3;
            rot: Vec3;
        };
    };
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
} | {
    readonly id: "scythe";
    readonly about: "War scythe: a long snath with a side handle, a grey crescent blade sweeping out to +X with a white edge underneath";
    readonly tags: readonly ["weapon", "scythe", "polearm", "two-hand"];
    readonly palette: {
        readonly grip: "plum";
        readonly iron: "slate";
        readonly blade: "mist";
        readonly edge: "white";
    };
    readonly anchors: {
        readonly grip: {
            at: Vec3;
            rot: Vec3;
        };
    };
    readonly parts: readonly [Part, Part, {
        readonly box: readonly [0.06, 0.06, 0.2];
        readonly at: readonly [0, 1.05, 0.12];
        readonly c: "grip";
    }, Part, Part, Part];
} | {
    readonly id: "crossbow";
    readonly about: "Crossbow, strung and cocked: a stock with its butt on the floor, a steel prod across the front, an iron stirrup, the string drawn back to the nut";
    readonly tags: readonly ["weapon", "crossbow", "two-hand"];
    readonly palette: {
        readonly grip: "plum";
        readonly iron: "slate";
        readonly prod: "mist";
        readonly gold: "sand";
        readonly string: "white";
    };
    readonly anchors: {
        readonly grip: {
            at: Vec3;
            rot: Vec3;
        };
    };
    readonly parts: readonly [{
        readonly box: readonly [0.08, 0.3, 0.12];
        readonly at: readonly [0, 0.15, -0.02];
        readonly c: "grip";
    }, Part, {
        readonly box: readonly [0.03, 0.08, 0.07];
        readonly at: readonly [0, 0.36, -0.07];
        readonly c: "gold";
    }, {
        readonly box: readonly [0.08, 0.06, 0.04];
        readonly at: readonly [0, 0.5, 0.05];
        readonly c: "gold";
    }, Part, {
        readonly mirror: readonly [{
            readonly box: readonly [0.34, 0.065, 0.055];
            readonly at: readonly [0.19, 0.696, 0];
            readonly rot: readonly [0, 0, -8];
            readonly c: "prod";
        }];
    }, {
        readonly torus: readonly [0.14, 0.03, 0.12];
        readonly seg: 6;
        readonly at: readonly [0, 0.84, 0];
        readonly rot: readonly [90, 0, 0];
        readonly c: "iron";
    }, {
        readonly mirror: readonly [{
            readonly box: readonly [0.4, 0.025, 0.062];
            readonly at: readonly [0.18, 0.586, 0.03];
            readonly rot: readonly [0, 0, 25.5];
            readonly c: "string";
        }];
    }];
} | {
    readonly id: "round-shield";
    readonly about: "Round shield: a red board with two painted quarters, a steel rim and boss; a handle on the back";
    readonly tags: readonly ["weapon", "shield", "offhand"];
    readonly palette: {
        readonly board: "red";
        readonly grip: "sand";
        readonly steel: "mist";
    };
    readonly anchors: {
        readonly grip: {
            readonly at: readonly [0, number, -0.0825];
            readonly rot: readonly [0, 0, 0];
        };
    };
    readonly parts: () => Part[];
} | {
    readonly id: "kite-shield";
    readonly about: "Kite shield: a tall teardrop, its field split in two colours down the middle, a steel rim; a handle on the back";
    readonly tags: readonly ["weapon", "shield", "offhand"];
    readonly palette: {
        readonly rim: "mist";
        readonly grip: "white";
        readonly field: "blue";
    };
    readonly anchors: {
        readonly grip: {
            readonly at: readonly [0, 0.62, -0.0875];
            readonly rot: readonly [0, 0, 0];
        };
    };
    readonly parts: () => Part[];
} | {
    readonly id: "quiver";
    readonly about: "Quiver of arrows: a leather tube with dark bands and a rim, the fletchings of a few arrows (seeded) standing out of its mouth";
    readonly tags: readonly ["weapon", "quiver", "gear"];
    readonly palette: {
        readonly grip: "red";
        readonly trim: "plum";
        readonly fletch: "white";
        readonly fletch2: "sand";
    };
    readonly params: {
        readonly arrows: readonly [6, 3, 8];
    };
    readonly anchors: {
        readonly mount: {
            readonly at: readonly [0, 0.3, -0.07];
            readonly rot: readonly [0, 0, 0];
        };
    };
    readonly parts: (p: Readonly<Record<string, number>>, rng: import("../..").Rng) => Part[];
})[];
