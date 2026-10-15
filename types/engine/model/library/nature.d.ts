import type { Rng } from '../../random';
import type { Part } from '../types';
export declare const rock: {
    readonly id: "rock";
    readonly about: "Field stone: a rough lump, wider than tall; map `stone` to vary stones side by side";
    readonly tags: readonly ["nature", "stone"];
    readonly palette: {
        readonly stone: "slate";
    };
    readonly params: {
        readonly size: readonly [0.35, 0.1, 1.2];
    };
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => {
        lump: [number, number, number];
        at: [number, number, number];
        rot: [number, number, number];
        seed: number;
        c: string;
    }[];
};
export declare const stoneRing: {
    readonly id: "stone-ring";
    readonly about: "Ring of field stones in two greys (a fire pit, a well head, a garden border); `size` is the largest a stone gets";
    readonly tags: readonly ["nature", "stone"];
    readonly palette: {
        readonly stone: "slate";
        readonly stone2: "mist";
    };
    readonly params: {
        readonly r: readonly [0.6, 0.3, 2];
        readonly n: readonly [10, 5, 12];
        readonly size: readonly [0.38, 0.15, 0.8];
    };
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => Part[];
};
export declare const pine: {
    readonly id: "pine";
    readonly about: "Conifer: a plum trunk under four stacked cones, teal and green in turn; `h` is its height";
    readonly tags: readonly ["nature", "tree"];
    readonly palette: {
        readonly bark: "plum";
        readonly leaf: "teal";
        readonly leaf2: "green";
    };
    readonly params: {
        readonly h: readonly [4, 3, 5];
    };
    readonly collider: "cyl";
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => Part[];
};
export declare const snowyPine: {
    readonly id: "snowy-pine";
    readonly about: "Snow-laden conifer: `pine`'s plum trunk and teal and green tiers with white snow on each tier's shoulders and its tip; `h` is its height";
    readonly tags: readonly ["nature", "tree", "snow"];
    readonly palette: {
        readonly bark: "plum";
        readonly leaf: "teal";
        readonly leaf2: "green";
        readonly snow: "white";
    };
    readonly params: {
        readonly h: readonly [4, 3, 5];
    };
    readonly collider: "cyl";
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => Part[];
};
/** The point `r` out from the centre at `deg` degrees round Y (from +X towards +Z), on the floor plane. */
export declare const polar: (deg: number, r: number) => [number, number];
export declare const oak: {
    readonly id: "oak";
    readonly about: "Round broadleaf tree: a red trunk on roots under a crown of 3-5 lumps, green round the sides and lime on top; `h` is its height";
    readonly tags: readonly ["nature", "tree"];
    readonly palette: {
        readonly bark: "red";
        readonly leaf: "green";
        readonly leaf2: "lime";
    };
    readonly params: {
        readonly h: readonly [4, 3, 5];
    };
    readonly collider: "cyl";
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => Part[];
};
export declare const bush: {
    readonly id: "bush";
    readonly about: "Low leafy bush: a lime lump standing up out of 1-3 lower green ones round its foot; `w` is its width";
    readonly tags: readonly ["nature", "plant"];
    readonly palette: {
        readonly leaf: "green";
        readonly leaf2: "lime";
    };
    readonly params: {
        readonly w: readonly [1.2, 0.6, 2];
    };
    readonly collider: "cyl";
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => Part[];
};
export declare const stump: {
    readonly id: "stump";
    readonly about: "Cut tree stump: red bark on plum roots, a sand cut top with an orange heart; `d` is its width";
    readonly tags: readonly ["nature", "wood"];
    readonly palette: {
        readonly bark: "red";
        readonly root: "plum";
        readonly cut: "sand";
        readonly heart: "orange";
    };
    readonly params: {
        readonly d: readonly [0.6, 0.4, 1];
    };
    readonly collider: "cyl";
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => Part[];
};
export declare const log: {
    readonly id: "log";
    readonly about: "Fallen log on its side: red bark, sand end grain with an orange heart, a branch stub and a tuft of moss; `length` along x";
    readonly tags: readonly ["nature", "wood"];
    readonly palette: {
        readonly bark: "red";
        readonly cut: "sand";
        readonly heart: "orange";
        readonly moss: "green";
    };
    readonly params: {
        readonly length: readonly [1.6, 0.8, 3];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => ({
        cyl: [number, number, number];
        at: [number, number, number];
        rot: [number, number, number];
        seg: number;
        c: string;
        name: string;
        mirror?: undefined;
        top?: undefined;
        lump?: undefined;
        seed?: undefined;
    } | {
        mirror: {
            cyl: [number, number, number];
            at: [number, number, number];
            rot: [number, number, number];
            seg: number;
            c: string;
        }[];
        cyl?: undefined;
        at?: undefined;
        rot?: undefined;
        seg?: undefined;
        c?: undefined;
        name?: undefined;
        top?: undefined;
        lump?: undefined;
        seed?: undefined;
    } | {
        cyl: [number, number, number];
        at: [number, number, number];
        rot: [number, number, number];
        top: number;
        seg: number;
        c: string;
        name: string;
        mirror?: undefined;
        lump?: undefined;
        seed?: undefined;
    } | {
        lump: [number, number, number];
        at: [number, number, number];
        seed: number;
        c: string;
        name: string;
        cyl?: undefined;
        rot?: undefined;
        seg?: undefined;
        mirror?: undefined;
        top?: undefined;
    })[];
};
export declare const mushrooms: {
    readonly id: "mushrooms";
    readonly about: "Cluster of 3-5 toadstools: white stalks, caps red and orange in turn with sand spots (map `cap`, `cap2`); `size` scales them";
    readonly tags: readonly ["nature", "plant"];
    readonly palette: {
        readonly stalk: "white";
        readonly cap: "red";
        readonly cap2: "orange";
        readonly spot: "sand";
    };
    readonly params: {
        readonly size: readonly [1.2, 0.7, 2.5];
    };
    readonly collider: "none";
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => {
        readonly at: readonly [number, 0, number];
        readonly rot: [number, number, number];
        readonly group: readonly [{
            readonly cyl: readonly [number, number, number];
            readonly at: readonly [0, number, 0];
            readonly top: 0.8;
            readonly seg: 5;
            readonly c: "stalk";
        }, {
            readonly name?: string | undefined;
            readonly ball: readonly [number, number, number];
            readonly half: true;
            readonly at: readonly [0, number, 0];
            readonly seg: 8;
            readonly c: "cap" | "cap2";
        }, ...Part[]];
    }[];
};
export declare const flowers: {
    readonly id: "flowers";
    readonly about: "Patch of wild flowers: chunky blossoms in red, sand and sky on short stems over leafy tufts in green and teal; `r` is its radius";
    readonly tags: readonly ["nature", "plant", "flower"];
    readonly palette: {
        readonly stem: "green";
        readonly leaf: "teal";
        readonly a: "red";
        readonly b: "sand";
        readonly c: "sky";
    };
    readonly params: {
        readonly r: readonly [0.4, 0.2, 0.8];
    };
    readonly collider: "none";
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => ({
        readonly lump: readonly [number, 0.14, number];
        readonly at: readonly [number, 0.07, number];
        readonly rot: readonly [0, number, 0];
        readonly seed: number;
        readonly c: "leaf" | "stem";
    } | {
        readonly at: readonly [number, 0, number];
        readonly rot: readonly [number, number, number];
        readonly group: readonly [{
            readonly box: readonly [0.07, number, 0.07];
            readonly at: readonly [0, number, 0];
            readonly c: "stem";
        }, {
            readonly ball: readonly [number, number, number];
            readonly at: readonly [0, number, 0];
            readonly seg: 6;
            readonly c: string;
        }];
    })[];
};
export declare const birch: {
    readonly id: "birch";
    readonly about: "Birch: a slender white trunk barred with ink marks under a light, open crown of small lumps in lime and green; `h` is its height";
    readonly tags: readonly ["nature", "tree"];
    readonly palette: {
        readonly bark: "white";
        readonly mark: "ink";
        readonly leaf: "lime";
        readonly leaf2: "green";
    };
    readonly params: {
        readonly h: readonly [4.5, 3, 6];
    };
    readonly collider: "cyl";
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => Part[];
};
export declare const deadTree: {
    readonly id: "dead-tree";
    readonly about: "Dead tree: a crooked slate trunk on night roots, forking into 3-5 bare, twisted branches in mist and slate with dark twigs (seeded); `h` is its height";
    readonly tags: readonly ["nature", "tree", "dead"];
    readonly palette: {
        readonly bark: "slate";
        readonly branch: "mist";
        readonly twig: "night";
        readonly root: "night";
    };
    readonly params: {
        readonly h: readonly [3.5, 2.5, 5];
    };
    readonly collider: "cyl";
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => Part[];
};
export declare const willow: {
    readonly id: "willow";
    readonly about: "Weeping willow: a green dome under a lime crown, draped in strands of lime, teal and green that fall over its shoulders to knee height round a plum trunk; `h` is its height";
    readonly tags: readonly ["nature", "tree", "water"];
    readonly palette: {
        readonly bark: "plum";
        readonly leaf: "green";
        readonly leaf2: "lime";
        readonly leaf3: "teal";
    };
    readonly params: {
        readonly h: readonly [4, 3, 5];
    };
    readonly collider: "cyl";
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => Part[];
};
export declare const cactus: {
    readonly id: "cactus";
    readonly about: "Saguaro cactus: a green column striped with lime ribs, 2-3 arms elbowing up (seeded), teal and lime by turns round it, red buds on its crown; `h` is its height";
    readonly tags: readonly ["nature", "plant", "desert"];
    readonly palette: {
        readonly body: "green";
        readonly arm: "teal";
        readonly arm2: "lime";
        readonly rib: "lime";
        readonly bud: "red";
    };
    readonly params: {
        readonly h: readonly [2.4, 1.2, 3.5];
    };
    readonly collider: "cyl";
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => Part[];
};
export declare const reeds: {
    readonly id: "reeds";
    readonly about: "Clump of reeds: green and lime blades fanning round 3-5 green stalks that carry red cattail heads (seeded); `h` is the tallest stalk";
    readonly tags: readonly ["nature", "plant", "water"];
    readonly palette: {
        readonly blade: "green";
        readonly blade2: "lime";
        readonly stalk: "green";
        readonly head: "red";
    };
    readonly params: {
        readonly h: readonly [1.4, 0.8, 2];
    };
    readonly collider: "none";
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => Part[];
};
export declare const ferns: {
    readonly id: "ferns";
    readonly about: "Fern clump: 6-8 toothed fronds in green, lime and teal in turn, fanning up and out of a plum crown on steep stalks (seeded); `size` is a frond's length";
    readonly tags: readonly ["nature", "plant", "forest"];
    readonly palette: {
        readonly leaf: "green";
        readonly leaf2: "lime";
        readonly leaf3: "teal";
        readonly crown: "plum";
    };
    readonly params: {
        readonly size: readonly [0.8, 0.5, 1.2];
    };
    readonly collider: "none";
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => Part[];
};
export declare const tallGrass: {
    readonly id: "tall-grass";
    readonly about: "Tuft of tall grass: 4-6 broad blades out of one root, tall lime ones upright and green ones leaning out, some bent over (seeded); `h` is the tallest blade";
    readonly tags: readonly ["nature", "plant", "grass"];
    readonly palette: {
        readonly blade: "lime";
        readonly blade2: "green";
    };
    readonly params: {
        readonly h: readonly [0.9, 0.4, 1.2];
    };
    readonly collider: "none";
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => Part[];
};
export declare const boulders: {
    readonly id: "boulders";
    readonly about: "Pile of 3-5 boulders (seeded): a big slate one with smaller mist and night ones heaped round its front and sometimes one up on its shoulder; `size` is the biggest";
    readonly tags: readonly ["nature", "stone"];
    readonly palette: {
        readonly stone: "slate";
        readonly stone2: "mist";
        readonly stone3: "night";
    };
    readonly params: {
        readonly size: readonly [1.2, 0.6, 2];
    };
    readonly collider: "hull";
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => Part[];
};
export declare const lilyPads: {
    readonly id: "lily-pads";
    readonly about: "Lily pads lying flat on water at y = 0: 3-5 slit discs in green and lime (seeded), the middle one holding a white flower with a sand heart; `r` is the patch radius";
    readonly tags: readonly ["nature", "plant", "water"];
    readonly palette: {
        readonly pad: "green";
        readonly pad2: "lime";
        readonly petal: "white";
        readonly heart: "sand";
    };
    readonly params: {
        readonly r: readonly [0.8, 0.5, 1.2];
    };
    readonly collider: "none";
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => Part[];
};
export declare const fallenTree: {
    readonly id: "fallen-tree";
    readonly about: "Fallen tree: a red trunk with peeled orange bark, a broken limb and a stub, sloping down from its upturned root plate (plum earth with torn clods, seeded red roots, some broken off, mist stones, green turf along its top) to a sand end; `length` along x";
    readonly tags: readonly ["nature", "wood", "forest"];
    readonly palette: {
        readonly bark: "red";
        readonly bark2: "orange";
        readonly earth: "plum";
        readonly turf: "green";
        readonly stone: "mist";
        readonly cut: "sand";
    };
    readonly params: {
        readonly length: readonly [3.2, 2, 4.5];
    };
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => Part[];
};
export declare const NATURE: ({
    readonly id: "rock";
    readonly about: "Field stone: a rough lump, wider than tall; map `stone` to vary stones side by side";
    readonly tags: readonly ["nature", "stone"];
    readonly palette: {
        readonly stone: "slate";
    };
    readonly params: {
        readonly size: readonly [0.35, 0.1, 1.2];
    };
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => {
        lump: [number, number, number];
        at: [number, number, number];
        rot: [number, number, number];
        seed: number;
        c: string;
    }[];
} | {
    readonly id: "stone-ring";
    readonly about: "Ring of field stones in two greys (a fire pit, a well head, a garden border); `size` is the largest a stone gets";
    readonly tags: readonly ["nature", "stone"];
    readonly palette: {
        readonly stone: "slate";
        readonly stone2: "mist";
    };
    readonly params: {
        readonly r: readonly [0.6, 0.3, 2];
        readonly n: readonly [10, 5, 12];
        readonly size: readonly [0.38, 0.15, 0.8];
    };
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => Part[];
} | {
    readonly id: "pine";
    readonly about: "Conifer: a plum trunk under four stacked cones, teal and green in turn; `h` is its height";
    readonly tags: readonly ["nature", "tree"];
    readonly palette: {
        readonly bark: "plum";
        readonly leaf: "teal";
        readonly leaf2: "green";
    };
    readonly params: {
        readonly h: readonly [4, 3, 5];
    };
    readonly collider: "cyl";
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => Part[];
} | {
    readonly id: "snowy-pine";
    readonly about: "Snow-laden conifer: `pine`'s plum trunk and teal and green tiers with white snow on each tier's shoulders and its tip; `h` is its height";
    readonly tags: readonly ["nature", "tree", "snow"];
    readonly palette: {
        readonly bark: "plum";
        readonly leaf: "teal";
        readonly leaf2: "green";
        readonly snow: "white";
    };
    readonly params: {
        readonly h: readonly [4, 3, 5];
    };
    readonly collider: "cyl";
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => Part[];
} | {
    readonly id: "oak";
    readonly about: "Round broadleaf tree: a red trunk on roots under a crown of 3-5 lumps, green round the sides and lime on top; `h` is its height";
    readonly tags: readonly ["nature", "tree"];
    readonly palette: {
        readonly bark: "red";
        readonly leaf: "green";
        readonly leaf2: "lime";
    };
    readonly params: {
        readonly h: readonly [4, 3, 5];
    };
    readonly collider: "cyl";
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => Part[];
} | {
    readonly id: "bush";
    readonly about: "Low leafy bush: a lime lump standing up out of 1-3 lower green ones round its foot; `w` is its width";
    readonly tags: readonly ["nature", "plant"];
    readonly palette: {
        readonly leaf: "green";
        readonly leaf2: "lime";
    };
    readonly params: {
        readonly w: readonly [1.2, 0.6, 2];
    };
    readonly collider: "cyl";
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => Part[];
} | {
    readonly id: "stump";
    readonly about: "Cut tree stump: red bark on plum roots, a sand cut top with an orange heart; `d` is its width";
    readonly tags: readonly ["nature", "wood"];
    readonly palette: {
        readonly bark: "red";
        readonly root: "plum";
        readonly cut: "sand";
        readonly heart: "orange";
    };
    readonly params: {
        readonly d: readonly [0.6, 0.4, 1];
    };
    readonly collider: "cyl";
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => Part[];
} | {
    readonly id: "log";
    readonly about: "Fallen log on its side: red bark, sand end grain with an orange heart, a branch stub and a tuft of moss; `length` along x";
    readonly tags: readonly ["nature", "wood"];
    readonly palette: {
        readonly bark: "red";
        readonly cut: "sand";
        readonly heart: "orange";
        readonly moss: "green";
    };
    readonly params: {
        readonly length: readonly [1.6, 0.8, 3];
    };
    readonly parts: (p: Readonly<Record<string, number>>) => ({
        cyl: [number, number, number];
        at: [number, number, number];
        rot: [number, number, number];
        seg: number;
        c: string;
        name: string;
        mirror?: undefined;
        top?: undefined;
        lump?: undefined;
        seed?: undefined;
    } | {
        mirror: {
            cyl: [number, number, number];
            at: [number, number, number];
            rot: [number, number, number];
            seg: number;
            c: string;
        }[];
        cyl?: undefined;
        at?: undefined;
        rot?: undefined;
        seg?: undefined;
        c?: undefined;
        name?: undefined;
        top?: undefined;
        lump?: undefined;
        seed?: undefined;
    } | {
        cyl: [number, number, number];
        at: [number, number, number];
        rot: [number, number, number];
        top: number;
        seg: number;
        c: string;
        name: string;
        mirror?: undefined;
        lump?: undefined;
        seed?: undefined;
    } | {
        lump: [number, number, number];
        at: [number, number, number];
        seed: number;
        c: string;
        name: string;
        cyl?: undefined;
        rot?: undefined;
        seg?: undefined;
        mirror?: undefined;
        top?: undefined;
    })[];
} | {
    readonly id: "mushrooms";
    readonly about: "Cluster of 3-5 toadstools: white stalks, caps red and orange in turn with sand spots (map `cap`, `cap2`); `size` scales them";
    readonly tags: readonly ["nature", "plant"];
    readonly palette: {
        readonly stalk: "white";
        readonly cap: "red";
        readonly cap2: "orange";
        readonly spot: "sand";
    };
    readonly params: {
        readonly size: readonly [1.2, 0.7, 2.5];
    };
    readonly collider: "none";
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => {
        readonly at: readonly [number, 0, number];
        readonly rot: [number, number, number];
        readonly group: readonly [{
            readonly cyl: readonly [number, number, number];
            readonly at: readonly [0, number, 0];
            readonly top: 0.8;
            readonly seg: 5;
            readonly c: "stalk";
        }, {
            readonly name?: string | undefined;
            readonly ball: readonly [number, number, number];
            readonly half: true;
            readonly at: readonly [0, number, 0];
            readonly seg: 8;
            readonly c: "cap" | "cap2";
        }, ...Part[]];
    }[];
} | {
    readonly id: "flowers";
    readonly about: "Patch of wild flowers: chunky blossoms in red, sand and sky on short stems over leafy tufts in green and teal; `r` is its radius";
    readonly tags: readonly ["nature", "plant", "flower"];
    readonly palette: {
        readonly stem: "green";
        readonly leaf: "teal";
        readonly a: "red";
        readonly b: "sand";
        readonly c: "sky";
    };
    readonly params: {
        readonly r: readonly [0.4, 0.2, 0.8];
    };
    readonly collider: "none";
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => ({
        readonly lump: readonly [number, 0.14, number];
        readonly at: readonly [number, 0.07, number];
        readonly rot: readonly [0, number, 0];
        readonly seed: number;
        readonly c: "leaf" | "stem";
    } | {
        readonly at: readonly [number, 0, number];
        readonly rot: readonly [number, number, number];
        readonly group: readonly [{
            readonly box: readonly [0.07, number, 0.07];
            readonly at: readonly [0, number, 0];
            readonly c: "stem";
        }, {
            readonly ball: readonly [number, number, number];
            readonly at: readonly [0, number, 0];
            readonly seg: 6;
            readonly c: string;
        }];
    })[];
} | {
    readonly id: "birch";
    readonly about: "Birch: a slender white trunk barred with ink marks under a light, open crown of small lumps in lime and green; `h` is its height";
    readonly tags: readonly ["nature", "tree"];
    readonly palette: {
        readonly bark: "white";
        readonly mark: "ink";
        readonly leaf: "lime";
        readonly leaf2: "green";
    };
    readonly params: {
        readonly h: readonly [4.5, 3, 6];
    };
    readonly collider: "cyl";
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => Part[];
} | {
    readonly id: "dead-tree";
    readonly about: "Dead tree: a crooked slate trunk on night roots, forking into 3-5 bare, twisted branches in mist and slate with dark twigs (seeded); `h` is its height";
    readonly tags: readonly ["nature", "tree", "dead"];
    readonly palette: {
        readonly bark: "slate";
        readonly branch: "mist";
        readonly twig: "night";
        readonly root: "night";
    };
    readonly params: {
        readonly h: readonly [3.5, 2.5, 5];
    };
    readonly collider: "cyl";
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => Part[];
} | {
    readonly id: "willow";
    readonly about: "Weeping willow: a green dome under a lime crown, draped in strands of lime, teal and green that fall over its shoulders to knee height round a plum trunk; `h` is its height";
    readonly tags: readonly ["nature", "tree", "water"];
    readonly palette: {
        readonly bark: "plum";
        readonly leaf: "green";
        readonly leaf2: "lime";
        readonly leaf3: "teal";
    };
    readonly params: {
        readonly h: readonly [4, 3, 5];
    };
    readonly collider: "cyl";
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => Part[];
} | {
    readonly id: "cactus";
    readonly about: "Saguaro cactus: a green column striped with lime ribs, 2-3 arms elbowing up (seeded), teal and lime by turns round it, red buds on its crown; `h` is its height";
    readonly tags: readonly ["nature", "plant", "desert"];
    readonly palette: {
        readonly body: "green";
        readonly arm: "teal";
        readonly arm2: "lime";
        readonly rib: "lime";
        readonly bud: "red";
    };
    readonly params: {
        readonly h: readonly [2.4, 1.2, 3.5];
    };
    readonly collider: "cyl";
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => Part[];
} | {
    readonly id: "reeds";
    readonly about: "Clump of reeds: green and lime blades fanning round 3-5 green stalks that carry red cattail heads (seeded); `h` is the tallest stalk";
    readonly tags: readonly ["nature", "plant", "water"];
    readonly palette: {
        readonly blade: "green";
        readonly blade2: "lime";
        readonly stalk: "green";
        readonly head: "red";
    };
    readonly params: {
        readonly h: readonly [1.4, 0.8, 2];
    };
    readonly collider: "none";
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => Part[];
} | {
    readonly id: "ferns";
    readonly about: "Fern clump: 6-8 toothed fronds in green, lime and teal in turn, fanning up and out of a plum crown on steep stalks (seeded); `size` is a frond's length";
    readonly tags: readonly ["nature", "plant", "forest"];
    readonly palette: {
        readonly leaf: "green";
        readonly leaf2: "lime";
        readonly leaf3: "teal";
        readonly crown: "plum";
    };
    readonly params: {
        readonly size: readonly [0.8, 0.5, 1.2];
    };
    readonly collider: "none";
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => Part[];
} | {
    readonly id: "tall-grass";
    readonly about: "Tuft of tall grass: 4-6 broad blades out of one root, tall lime ones upright and green ones leaning out, some bent over (seeded); `h` is the tallest blade";
    readonly tags: readonly ["nature", "plant", "grass"];
    readonly palette: {
        readonly blade: "lime";
        readonly blade2: "green";
    };
    readonly params: {
        readonly h: readonly [0.9, 0.4, 1.2];
    };
    readonly collider: "none";
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => Part[];
} | {
    readonly id: "boulders";
    readonly about: "Pile of 3-5 boulders (seeded): a big slate one with smaller mist and night ones heaped round its front and sometimes one up on its shoulder; `size` is the biggest";
    readonly tags: readonly ["nature", "stone"];
    readonly palette: {
        readonly stone: "slate";
        readonly stone2: "mist";
        readonly stone3: "night";
    };
    readonly params: {
        readonly size: readonly [1.2, 0.6, 2];
    };
    readonly collider: "hull";
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => Part[];
} | {
    readonly id: "lily-pads";
    readonly about: "Lily pads lying flat on water at y = 0: 3-5 slit discs in green and lime (seeded), the middle one holding a white flower with a sand heart; `r` is the patch radius";
    readonly tags: readonly ["nature", "plant", "water"];
    readonly palette: {
        readonly pad: "green";
        readonly pad2: "lime";
        readonly petal: "white";
        readonly heart: "sand";
    };
    readonly params: {
        readonly r: readonly [0.8, 0.5, 1.2];
    };
    readonly collider: "none";
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => Part[];
} | {
    readonly id: "fallen-tree";
    readonly about: "Fallen tree: a red trunk with peeled orange bark, a broken limb and a stub, sloping down from its upturned root plate (plum earth with torn clods, seeded red roots, some broken off, mist stones, green turf along its top) to a sand end; `length` along x";
    readonly tags: readonly ["nature", "wood", "forest"];
    readonly palette: {
        readonly bark: "red";
        readonly bark2: "orange";
        readonly earth: "plum";
        readonly turf: "green";
        readonly stone: "mist";
        readonly cut: "sand";
    };
    readonly params: {
        readonly length: readonly [3.2, 2, 4.5];
    };
    readonly parts: (p: Readonly<Record<string, number>>, rng: Rng) => Part[];
})[];
