import type { Rng } from '../../random';
import type { Part } from '../types';
export declare const crystal: {
    readonly id: "crystal";
    readonly about: "Crystal cluster: a glowing core shard ringed by dark facets, lighting its corner; map `glow` to recolour";
    readonly tags: readonly ["dressing", "magic", "cave", "light"];
    readonly palette: {
        readonly glow: "cyan";
        readonly facet: "teal";
        readonly facet2: "navy";
        readonly base: "mist";
    };
    readonly light: {
        readonly at: readonly [0, 1, 0];
        readonly c: "glow";
        readonly intensity: 2.5;
        readonly radius: 4.5;
        readonly flicker: "pulse";
    };
    readonly parts: (_: Readonly<Record<string, number>>, rng: Rng) => Part[];
};
export declare const rubble: {
    readonly id: "rubble";
    readonly about: "Rubble: a few fallen blocks, small enough to walk among; two greys";
    readonly tags: readonly ["dressing", "stone", "small"];
    readonly palette: {
        readonly stone: "slate";
        readonly stone2: "mist";
    };
    readonly parts: (_: Readonly<Record<string, number>>, rng: Rng) => {
        box: [number, number, number];
        at: [number, number, number];
        rot: [number, number, number];
        c: string;
    }[];
};
export declare const glowcaps: {
    readonly id: "glowcaps";
    readonly about: "Glowing mushrooms: three pale stalks under bright caps dotted with glowing spots, a soft pulsing light";
    readonly tags: readonly ["dressing", "nature", "cave", "light"];
    readonly palette: {
        readonly stalk: "sand";
        readonly cap: "lime";
        readonly gill: "green";
        readonly spot: "white";
    };
    readonly light: {
        readonly at: readonly [0, 0.6, 0];
        readonly c: "cap";
        readonly intensity: 1.6;
        readonly radius: 3.5;
        readonly flicker: "pulse";
    };
    readonly parts: (_: Readonly<Record<string, number>>, rng: Rng) => ({
        readonly ball: readonly [0.08, 0.06, 0.08];
        readonly seg: 4;
        readonly at: readonly [number, number, number];
        readonly c: "spot";
        readonly glow: true;
    } | {
        cyl: [number, number, number];
        seg: number;
        at: [number, number, number];
        c: string;
        ball?: undefined;
        half?: undefined;
    } | {
        ball: [number, number, number];
        half: true;
        seg: number;
        at: [number, number, number];
        c: string;
        cyl?: undefined;
    })[];
};
export declare const standard: {
    readonly id: "standard";
    readonly about: "War banner on a standing pole: a stone foot, a crossbar and a long cloth with a hem; map `cloth`";
    readonly tags: readonly ["dressing", "cloth", "banner"];
    readonly palette: {
        readonly cloth: "red";
        readonly trim: "sand";
        readonly pole: "night";
        readonly foot: "slate";
    };
    readonly params: {
        readonly h: readonly [2.4, 1.6, 3.2];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => ({
        box: [number, number, number];
        at: [number, number, number];
        c: string;
        mirror?: undefined;
    } | {
        mirror: {
            ball: [number, number, number];
            at: [number, number, number];
            c: string;
        }[];
        box?: undefined;
        at?: undefined;
        c?: undefined;
    })[];
};
export declare const stalagmites: {
    readonly id: "stalagmites";
    readonly about: "Cluster of 3-5 stalagmites on a slate rock mound: the tallest mist under a white wet tip, the rest slate and mist by turns, each tip paler (seeded); `h` is the tallest";
    readonly tags: readonly ["dressing", "stone", "cave"];
    readonly palette: {
        readonly stone: "slate";
        readonly stone2: "mist";
        readonly tip: "mist";
        readonly tip2: "white";
        readonly base: "slate";
    };
    readonly params: {
        readonly h: readonly [1.4, 0.6, 2.5];
    };
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => Part[];
};
export declare const cobweb: {
    readonly id: "cobweb";
    readonly about: "Corner cobweb, hung where two walls (the back at z = 0, the left at x = 0) meet the ceiling at `h`: a white fan of five threads out of a dense hub, crossed by three sagging rings (seeded); it spreads `r` along each wall and r/2 down it (small webs: four threads, two rings)";
    readonly tags: readonly ["dressing", "dungeon", "cave", "wall"];
    readonly palette: {
        readonly web: "white";
    };
    readonly params: {
        readonly h: readonly [2.6, 1.6, 4];
        readonly r: readonly [1, 0.5, 1.5];
    };
    readonly floats: true;
    readonly collider: "none";
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => {
        at: [number, number, number];
        rot: [number, number, number];
        group: {
            rot: [number, number, number];
            group: {
                slab: string;
                depth: number;
                c: string;
                name: string;
            }[];
        }[];
    }[];
};
export declare const puddle: {
    readonly id: "puddle";
    readonly about: "Puddle on the floor: a flat seeded blob of `water` 5 mm deep with a little pool off its side and lighter `shine` glints; map `water` for blood, slime or oil; `w` is its width";
    readonly tags: readonly ["dressing", "water", "dungeon", "cave", "town"];
    readonly palette: {
        readonly water: "blue";
        readonly shine: "sky";
    };
    readonly params: {
        readonly w: readonly [1.2, 0.4, 2.5];
    };
    readonly collider: "none";
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => ({
        slab: [number, number][];
        depth: number;
        at: [number, number, number];
        rot: [number, number, number];
        c: string;
        name: string;
        box?: undefined;
    } | {
        slab: [number, number][];
        depth: number;
        at: [number, number, number];
        rot: [number, number, number];
        c: string;
        name?: undefined;
        box?: undefined;
    } | {
        box: [number, number, number];
        at: [number, number, number];
        rot: [number, number, number];
        c: string;
        name: string;
        slab?: undefined;
        depth?: undefined;
    })[];
};
export declare const mineRail: {
    readonly id: "mine-rail";
    readonly about: "Mine-cart track, 1 m along x so pieces tile end to end: two mist rails on red sleepers; `gauge` between the rails";
    readonly tags: readonly ["dressing", "iron", "cave", "mine"];
    readonly palette: {
        readonly rail: "mist";
        readonly sleeper: "red";
    };
    readonly params: {
        readonly gauge: readonly [0.6, 0.45, 0.9];
        readonly sleepers: readonly [2, 1, 4];
    };
    readonly collider: "none";
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
};
export declare const DRESSING: ({
    readonly id: "crystal";
    readonly about: "Crystal cluster: a glowing core shard ringed by dark facets, lighting its corner; map `glow` to recolour";
    readonly tags: readonly ["dressing", "magic", "cave", "light"];
    readonly palette: {
        readonly glow: "cyan";
        readonly facet: "teal";
        readonly facet2: "navy";
        readonly base: "mist";
    };
    readonly light: {
        readonly at: readonly [0, 1, 0];
        readonly c: "glow";
        readonly intensity: 2.5;
        readonly radius: 4.5;
        readonly flicker: "pulse";
    };
    readonly parts: (_: Readonly<Record<string, number>>, rng: Rng) => Part[];
} | {
    readonly id: "rubble";
    readonly about: "Rubble: a few fallen blocks, small enough to walk among; two greys";
    readonly tags: readonly ["dressing", "stone", "small"];
    readonly palette: {
        readonly stone: "slate";
        readonly stone2: "mist";
    };
    readonly parts: (_: Readonly<Record<string, number>>, rng: Rng) => {
        box: [number, number, number];
        at: [number, number, number];
        rot: [number, number, number];
        c: string;
    }[];
} | {
    readonly id: "glowcaps";
    readonly about: "Glowing mushrooms: three pale stalks under bright caps dotted with glowing spots, a soft pulsing light";
    readonly tags: readonly ["dressing", "nature", "cave", "light"];
    readonly palette: {
        readonly stalk: "sand";
        readonly cap: "lime";
        readonly gill: "green";
        readonly spot: "white";
    };
    readonly light: {
        readonly at: readonly [0, 0.6, 0];
        readonly c: "cap";
        readonly intensity: 1.6;
        readonly radius: 3.5;
        readonly flicker: "pulse";
    };
    readonly parts: (_: Readonly<Record<string, number>>, rng: Rng) => ({
        readonly ball: readonly [0.08, 0.06, 0.08];
        readonly seg: 4;
        readonly at: readonly [number, number, number];
        readonly c: "spot";
        readonly glow: true;
    } | {
        cyl: [number, number, number];
        seg: number;
        at: [number, number, number];
        c: string;
        ball?: undefined;
        half?: undefined;
    } | {
        ball: [number, number, number];
        half: true;
        seg: number;
        at: [number, number, number];
        c: string;
        cyl?: undefined;
    })[];
} | {
    readonly id: "standard";
    readonly about: "War banner on a standing pole: a stone foot, a crossbar and a long cloth with a hem; map `cloth`";
    readonly tags: readonly ["dressing", "cloth", "banner"];
    readonly palette: {
        readonly cloth: "red";
        readonly trim: "sand";
        readonly pole: "night";
        readonly foot: "slate";
    };
    readonly params: {
        readonly h: readonly [2.4, 1.6, 3.2];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => ({
        box: [number, number, number];
        at: [number, number, number];
        c: string;
        mirror?: undefined;
    } | {
        mirror: {
            ball: [number, number, number];
            at: [number, number, number];
            c: string;
        }[];
        box?: undefined;
        at?: undefined;
        c?: undefined;
    })[];
} | {
    readonly id: "stalagmites";
    readonly about: "Cluster of 3-5 stalagmites on a slate rock mound: the tallest mist under a white wet tip, the rest slate and mist by turns, each tip paler (seeded); `h` is the tallest";
    readonly tags: readonly ["dressing", "stone", "cave"];
    readonly palette: {
        readonly stone: "slate";
        readonly stone2: "mist";
        readonly tip: "mist";
        readonly tip2: "white";
        readonly base: "slate";
    };
    readonly params: {
        readonly h: readonly [1.4, 0.6, 2.5];
    };
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => Part[];
} | {
    readonly id: "cobweb";
    readonly about: "Corner cobweb, hung where two walls (the back at z = 0, the left at x = 0) meet the ceiling at `h`: a white fan of five threads out of a dense hub, crossed by three sagging rings (seeded); it spreads `r` along each wall and r/2 down it (small webs: four threads, two rings)";
    readonly tags: readonly ["dressing", "dungeon", "cave", "wall"];
    readonly palette: {
        readonly web: "white";
    };
    readonly params: {
        readonly h: readonly [2.6, 1.6, 4];
        readonly r: readonly [1, 0.5, 1.5];
    };
    readonly floats: true;
    readonly collider: "none";
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => {
        at: [number, number, number];
        rot: [number, number, number];
        group: {
            rot: [number, number, number];
            group: {
                slab: string;
                depth: number;
                c: string;
                name: string;
            }[];
        }[];
    }[];
} | {
    readonly id: "puddle";
    readonly about: "Puddle on the floor: a flat seeded blob of `water` 5 mm deep with a little pool off its side and lighter `shine` glints; map `water` for blood, slime or oil; `w` is its width";
    readonly tags: readonly ["dressing", "water", "dungeon", "cave", "town"];
    readonly palette: {
        readonly water: "blue";
        readonly shine: "sky";
    };
    readonly params: {
        readonly w: readonly [1.2, 0.4, 2.5];
    };
    readonly collider: "none";
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => ({
        slab: [number, number][];
        depth: number;
        at: [number, number, number];
        rot: [number, number, number];
        c: string;
        name: string;
        box?: undefined;
    } | {
        slab: [number, number][];
        depth: number;
        at: [number, number, number];
        rot: [number, number, number];
        c: string;
        name?: undefined;
        box?: undefined;
    } | {
        box: [number, number, number];
        at: [number, number, number];
        rot: [number, number, number];
        c: string;
        name: string;
        slab?: undefined;
        depth?: undefined;
    })[];
} | {
    readonly id: "mine-rail";
    readonly about: "Mine-cart track, 1 m along x so pieces tile end to end: two mist rails on red sleepers; `gauge` between the rails";
    readonly tags: readonly ["dressing", "iron", "cave", "mine"];
    readonly palette: {
        readonly rail: "mist";
        readonly sleeper: "red";
    };
    readonly params: {
        readonly gauge: readonly [0.6, 0.45, 0.9];
        readonly sleepers: readonly [2, 1, 4];
    };
    readonly collider: "none";
    readonly parts: (p: Readonly<Record<string, number>>) => Part[];
})[];
