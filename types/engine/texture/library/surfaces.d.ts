export declare const planks: {
    readonly id: "planks";
    readonly about: "Floor boards with gaps and staggered butt joints";
    readonly tags: readonly ["wood", "floor", "surface"];
    readonly size: readonly [16, 16];
    readonly tile: true;
    readonly palette: {
        readonly gap: "plum";
        readonly wood: "red";
        readonly wood2: "orange";
    };
    readonly layers: readonly [{
        readonly pattern: "planks";
        readonly colors: readonly ["gap", "wood", "wood2"];
        readonly w: 4;
        readonly length: 16;
        readonly grain: 0.3;
        readonly seed: 3;
    }];
};
export declare const bricks: {
    readonly id: "bricks";
    readonly about: "Stone bricks in courses over dark mortar, a lit top edge on each";
    readonly tags: readonly ["stone", "wall", "surface"];
    readonly size: readonly [16, 16];
    readonly tile: true;
    readonly palette: {
        readonly mortar: "night";
        readonly stone: "slate";
        readonly stone2: "mist";
    };
    readonly layers: readonly [{
        readonly pattern: "bricks";
        readonly colors: readonly ["mortar", "stone", "stone2"];
        readonly w: 8;
        readonly h: 4;
        readonly seed: 2;
    }];
};
export declare const cobbles: {
    readonly id: "cobbles";
    readonly about: "Rounded cobblestones, some darker, lit on top and apart on wide dark joints";
    readonly tags: readonly ["stone", "floor", "road", "surface"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly joint: "ink";
        readonly shadow: "night";
        readonly stone: "slate";
        readonly light: "mist";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["jlssssdjlssssljssddsjjlddjsddddj", "jlssssdjlssssdjsddddsjjjjjsdddjj", "lsssssdjlssssdjsddddjjjjjjjsjjjj", "jlsssddjlssssdjsddddjjlllljjjjjj", "jjlddjjjldssdjjjsjdjjlssssljllll", "ljjjjjssjjldjjsjjjsjjlssssdjlsss", "sljsssddsjjjjsdssjjjlssssdjjlsss", "sdjsdddddsjssddddssjlssssdjjlsss", "sdjsdddddjjsddddddjjlssssdjlssss", "ddjsdddddjjsdddddjjjjldddjjldsss", "jjjsddddjjjjsdddjjjjjjjjjjljjldd", "jljjsjjjjjjjjsjjjjllljjlllsljjjj", "lslljjjjjllljjjjllssdjjlssssljjl", "ssssljjllssslljlssssdjjlssssdjls", "ssssdjlssssssdjlsssssljlssssdjls", "ssssdjlssssssdjlssssdjjlssssdjls", "sssdjjjlssssdjjjldssdjjlsdddjjls", "ssdjjljjlssdjjlljjlddjjldjjjjjjl", "ldjjlsljjldjjlssljjjjjjjjjlllljj", "jjllsssljjjjlssssljjssssjlsssslj", "jlssssssljjlsssssdjsdddjjlsssssl", "jjlsssssdjjlsssssdjsdddjjlsssssd", "jjjlsssdjjjjlssddjjsdddjjjlsssdj", "lljjlddjjlljjldjjjsdddddsjlsddjl", "ssljjjjllssljjjjjjjsddjjjjldjjls", "sssljjlssssdjllllljjsjjjjjjjjlss", "sssdjjlssssdjlssssljjjjjljjjjjls", "sssdjjlssssdjlssssdjllllsljjjjjl", "ldddjldssssdjlssssdjlssssdjsssjj", "jjjjjjjldddjjlssdddjlssssdjsddsj", "jjlllljjjjjjjjldjjjjlsssdjjsddds", "jlssssljjlllljjjjssjjlssdjsddddj"];
        readonly legend: {
            readonly j: "joint";
            readonly d: "shadow";
            readonly s: "stone";
            readonly l: "light";
        };
    }];
};
export declare const floorTiles: {
    readonly id: "floor-tiles";
    readonly about: "Square flagstones with thin joints";
    readonly tags: readonly ["stone", "floor", "surface"];
    readonly size: readonly [16, 16];
    readonly tile: true;
    readonly palette: {
        readonly joint: "slate";
        readonly tile: "mist";
        readonly tile2: "white";
    };
    readonly layers: readonly [{
        readonly pattern: "tiles";
        readonly colors: readonly ["joint", "tile", "tile2"];
        readonly w: 8;
        readonly h: 8;
        readonly seed: 5;
    }];
};
export declare const dirt: {
    readonly id: "dirt";
    readonly about: "Packed earth in three tones with a few pebbles";
    readonly tags: readonly ["ground", "floor", "surface"];
    readonly size: readonly [16, 16];
    readonly tile: true;
    readonly palette: {
        readonly dark: "plum";
        readonly earth: "red";
        readonly pebble: "sand";
    };
    readonly layers: readonly [{
        readonly pattern: "noise";
        readonly colors: readonly ["dark", "earth"];
        readonly scale: 2;
        readonly octaves: 2;
        readonly seed: 6;
    }, {
        readonly pattern: "scatter";
        readonly colors: "pebble";
        readonly count: 3;
        readonly size: 1;
        readonly seed: 6;
    }];
};
export declare const grass: {
    readonly id: "grass";
    readonly about: "Short grass: tufts of light blades over their shade, evenly spread so no shape repeats";
    readonly tags: readonly ["grass", "ground", "floor", "surface", "nature"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly dark: "teal";
        readonly mid: "green";
        readonly light: "lime";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["mmmddddmmmmdddmmmmmmmmmmmmllmlmm", "mmmmmmmmmmmmmmmmmmmmmmmmmmllmlmm", "mmmmmmmmmmmmmmmmmdmmmmmmmmddddmm", "mmmmlmmmmmmmmmmdmdmmmmmmmmmmmmmm", "mlmllmmmmmdmmmmdmdmmmmmmmmmmmmmm", "mlmllmmmdmdmmmmmmmmmmmmdmmmmmmmm", "mddddmmmdmdmmmmmmmmmmdmdmmmmmmmm", "mmmmmmmmmmmmmmmmmmmmmdmdmmmmmmml", "mmmmmmmmmmmmmmmmlmmmmmmmmmmmmlml", "mmmmmmmmmmmmmmmllmlmmmmmmmmmmlml", "mmmmmmmmlmmmmmmllmlmmmmmmmdmmddd", "mmmmmmmmlmlmmmmddddmmmmmdmdmmmmm", "mmmmdmmmlmlmmmmmmmmmmmmmdmdmmmmm", "mmdmdmmmdddmmmmmmmmmmmmmmmmmmmmm", "mmdmdmmmmmmmmmmmmmmmmmmmmmmmmmmm", "mmmmmmmmmmmmmmmlmmmmlmmmmmmmmlml", "mmmmmmmmmmmmmlmlmmmmllmlmmmmllml", "mmmmmmmmmmmmmlmlmmmmllmlmmmmllml", "mmmmmmmmmdmmmdddmmmmddddmmmmdddd", "mmmmmmmdmdmmmmmmmmmmmmmmmmmmmmmm", "mmmmmmmdmdmmmmmmmmmmmmmmmmmmmmmm", "mmmdmmmmmmmmmmmmmmmmmmmmmmmmmmmm", "mdmdmmmmmmmmmmmlmmmmmmmmlmlmmmmm", "mdmdmmmmmmmmmmmlmllmmmmmlmlmmmmm", "mmmmmmmmmmmmmmmlmllmmmmmdddmmmmm", "mmmmmmmmmdmmmmmddddmmmmmmmmmmmmm", "mmmmmmmdmdmmmmmmmmmmmmmmmmmmmlml", "mmmmmmmdmdmmmmmmmmmmmmmlmmmmmlml", "mmmmmmmmmmmmmmmmmmmmlmllmmmmmddd", "mmmlmmlmmmmmmmmmmmmmlmllmmmmmmmm", "mmmllmlmmmmlmlmmmmmmddddmmmmmmmm", "mmmllmlmmmmlmlmmmmmmmmmmmmmmmmmm"];
        readonly legend: {
            readonly d: "dark";
            readonly m: "mid";
            readonly l: "light";
        };
    }];
};
export declare const stone: {
    readonly id: "stone";
    readonly about: "A rough stone wall: uneven blocks with ragged edges in rough courses, deep dark joints";
    readonly tags: readonly ["stone", "wall", "surface"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly joint: "ink";
        readonly shadow: "night";
        readonly stone: "slate";
        readonly light: "mist";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["lllljjjjjjllljjjjssjjjjjssjjjjjj", "ssssljjjllsssljjsddsssssddsjjlll", "sssssljlssssssljdddddddddddjlsss", "ssssssjssssssssjdddddddddddjssss", "ssssssjssssssssjdddddddddddjssss", "sssssdjdssssssdjdddddddddddjdsss", "ssssdjjjdssssdjjjdddddddddjjjdss", "ddddjjjjjddddjjjjjjjjjjjjjjjjjdd", "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj", "jjllljjjjjljjjlljjjjjjjjjlllljjj", "llsssljlllsljlsslljllllllssssljl", "ssssssjsssssjsssssjsssssssssssjs", "ssssssjsssssjsssssjsssssssssssjs", "sssssdjdsssdjdsssdjdsssssssssdjd", "dddddjjjdddjjjdddjjjdddddddddjjj", "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj", "llllljjjjssssjjjjjjssssjjjjjllll", "ssssslljsddddsjjsssddddssjjlssss", "sssssssjddddddjsdddddddddsjsssss", "sssssssjddddddjdddddddddddjsssss", "sssssssjddddddjdddddddddddjsssss", "sssssssjddddddjjdddddddddjjsssss", "ssssssdjjddddjjjjdddddddjjjdssss", "ddddddjjjjjjjjjjjjjjjjjjjjjjdddd", "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj", "jjlllljjjsssssjjjjjjjjljjjjjjllj", "jlssssljsdddddsjjlllllsljjlllssl", "jssssssjdddddddjlsssssssljssssss", "jssssssjdddddddjdsssssssdjssssss", "jdssssdjjdddddjjjdsssssdjjdssssd", "jjddddjjjjjjjjjjjjdddddjjjjddddj", "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj"];
        readonly legend: {
            readonly j: "joint";
            readonly d: "shadow";
            readonly s: "stone";
            readonly l: "light";
        };
    }];
};
export declare const flagstones: {
    readonly id: "flagstones";
    readonly about: "Large flat paving slabs of uneven shape, a few darker and a few cracked, over dark joints";
    readonly tags: readonly ["stone", "floor", "surface"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly joint: "night";
        readonly slab: "mist";
        readonly slab2: "slate";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["lljlllllllljjllllllllljlllllllll", "ljjlllllllljjllllllllljjllllllll", "ljllllllllljjllllllllljjllllllll", "jjlllllllllljlllllllllljllllllll", "jllllllllllljlllllllllljjlllllll", "jllllllllllljllllllllllljllllllj", "jllllllllllljllllllllllljjlllllj", "lllllllllllljllllllllllljjjjjjjj", "llllllllllljjjllllllllljjllllljj", "jlllllllljjjljjjlllllljjlllllllj", "jjlllllljjllllljjjllljjlllllllll", "ljjllljjjlllllllljjjjjllllllllll", "lljjjjjlllllllllllljjlllllllllll", "llljjjllllllllllllljjlllllllllll", "lljjjjllllllllllllljjlllllllllll", "ljjjjjllllllllllllljjlllllllllll", "jjsssjjlllllllllllljjlllllllllll", "jsssssjjllllllllllljjllllllllllj", "sssssssjlllllllllljjjllllllllljj", "ssssssssjlllllljjjjlljjlllllljjs", "ssssssssjjllljjjlllllljjlllljjss", "sssssssssjjjjjllllllllljjlljjsss", "ssssssssssjjlllllllllllljjjjjsss", "ssssssssssjlllllllllllllljjjssss", "ssssssssssjlllllllllllllljjjjsss", "sssssssssjjllllllllllllljjljjjss", "sssssssssjjllllllllllllljlllljjs", "jssssssssjllllllllllllljjllllljj", "jjssssssjjllllllllllllljllllllll", "ljjjjjjjjjjllllllllllljlllllllll", "lljjjjlllljjlllllljjjjjlllllllll", "lljjllllllljjjjjjjjjjjjlllllllll"];
        readonly legend: {
            readonly j: "joint";
            readonly l: "slab";
            readonly s: "slab2";
        };
    }, {
        readonly pattern: "cracks";
        readonly colors: "joint";
        readonly count: 2;
        readonly length: 7;
        readonly seed: 7;
    }];
};
export declare const shingles: {
    readonly id: "shingles";
    readonly about: "Roof shingles with round ends in staggered courses, each course over the top of the one below";
    readonly tags: readonly ["clay", "roof", "surface"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly gap: "plum";
        readonly body: "red";
        readonly light: "orange";
        readonly shine: "sand";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["lllggllllllggbbbbbbggbbbbbbgglll", "llglggllllgsggbbbbglggbbbbglggll", "gglbbgggggsllggggglbbggggglbbggg", "lbbbbbbgsllllllglbbbbbbglbbbbbbg", "lbbbbbbgsllllllglbbbbbbglbbbbbbg", "lbbbbbbgsllllllglbbbbbbglbbbbbbg", "lbbbbbbgsllllllglbbbbbbglbbbbbbg", "lbbbbbbgsllllllglbbbbbbglbbbbbbg", "gbbbbbbggllllllggbbbbbbggbbbbbbg", "ggbbbbglggllllglggbbbbglggbbbbgl", "bggggglbbggggglbbggggglbbggggglb", "bbbglbbbbbbglbbbbbbglbbbbbbglbbb", "bbbglbbbbbbglbbbbbbglbbbbbbglbbb", "bbbglbbbbbbglbbbbbbglbbbbbbglbbb", "bbbglbbbbbbglbbbbbbglbbbbbbglbbb", "bbbglbbbbbbglbbbbbbglbbbbbbglbbb", "bbbggbbbbbbggbbbbbbggbbbbbbggbbb", "bbglggbbbbglggbbbbglggbbbbglggbb", "gglbbggggglbbggggglbbggggglbbggg", "lbbbbbbglbbbbbbglbbbbbbglbbbbbbg", "lbbbbbbglbbbbbbglbbbbbbglbbbbbbg", "lbbbbbbglbbbbbbglbbbbbbglbbbbbbg", "lbbbbbbglbbbbbbglbbbbbbglbbbbbbg", "lbbbbbbglbbbbbbglbbbbbbglbbbbbbg", "gbbbbbbggbbbbbbggbbbbbbggbbbbbbg", "ggbbbbgsggbbbbglggbbbbglggbbbbgs", "lgggggsllggggglbbggggglbbgggggsl", "lllgsllllllglbbbbbbglbbbbbbgslll", "lllgsllllllglbbbbbbglbbbbbbgslll", "lllgsllllllglbbbbbbglbbbbbbgslll", "lllgsllllllglbbbbbbglbbbbbbgslll", "lllgsllllllglbbbbbbglbbbbbbgslll"];
        readonly legend: {
            readonly g: "gap";
            readonly b: "body";
            readonly l: "light";
            readonly s: "shine";
        };
    }];
};
export declare const thatch: {
    readonly id: "thatch";
    readonly about: "Straw thatch in layered courses, ragged ends hanging over the shadow of the course below";
    readonly tags: readonly ["straw", "roof", "surface"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly deep: "plum";
        readonly shadow: "red";
        readonly straw: "orange";
        readonly light: "sand";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["ppposoosppppsspppppopssppppsssss", "dddpsoppddddppdddddpdppddddpsppp", "ooodppddooooddooooododdoooodpddd", "ooooddoosoooooosoooooooooooodooo", "oooooooosoooooosooooosoooooooooo", "ossooooossooooossoooosoooooooooo", "ossooooossooooossoooosoodooooooo", "ossddooossooooossoooosooddoooooo", "ossddooossooooossoooosooddoooooo", "ospppopppsoooopssoooosooddoooooo", "ppdddpdddpppppdppppppppppppppppp", "ddossdooodddddoddddddddddddddddd", "soossoooooosoooooooooosossoooooo", "soosssooooosoosoodsodossssooosso", "ssosssooooosoossodssddssssoossss", "ssssssooooosoossodssddssssoossss", "sssppppoooosoppppppppppsssppssss", "pppddddpooospddddddddddpppddppss", "dddoooodppppdoooooooooodddooddpp", "soooooooddddooooooooooooooooosdd", "sooooooossoooooooooooosoooooosso", "soososoossoooooooooooossooooosso", "soossssossooosoossoooossooooosso", "soossssossooosoossoooossooooosso", "soossssossooosoossoopppppoooossd", "soossssppsooosopspppdddddppppppd", "pppppppddppppppdpdddoooooddddddp", "dddddddosddddddodooooooooooososd", "oooosooosooooooooooooosooooososs", "oooosooosooosodooooososooooososs", "oooosoossooossdddooososoooosssss", "oooosoossooossdddooosssoooosssss"];
        readonly legend: {
            readonly p: "deep";
            readonly d: "shadow";
            readonly o: "straw";
            readonly s: "light";
        };
    }];
};
export declare const sand: {
    readonly id: "sand";
    readonly about: "Pale sand with broken wind ripples and a few pebbles";
    readonly tags: readonly ["sand", "ground", "floor", "surface"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly ripple: "orange";
        readonly sand: "sand";
        readonly pebble: "red";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["sssssssssssosssssooossssssssssss", "sssssssoooosssssssssooosssssssss", "ssssooossssssssssssssssoooosssss", "oooossssssssssssppsssssssssooooo", "ssssssssssssssssssssssssssssssss", "ssssssssssssssssssssssssssssssss", "sssssssssoooosssssssssssssssssss", "ssssssooosssssssssssssssssssssss", "ssoooossssssssssssssssssssssssss", "oosssssssssssssssssssssssooooooo", "ssssssssssssssssssssssssssssssss", "ssssssssssssssssssssssssssssssss", "ssssssssssssssssssssssssssssssss", "ssssssoooooooooossssssssssssssss", "sssooossssssssssoosssssssssssspp", "ooosssssssssssssssssssssssssssso", "ssssssssssssssssssssssssssooooos", "ssssssssssssssssssssssssssssssss", "ssssooooosssssssssssssssssssssss", "sssosssssoosssssssssssssssssssss", "soossssssssosssssossssssssssssss", "osssssssssssooooosssssssssssssso", "ssssssssssssssssssssssssssssssss", "ssssssssssssssssssssssssssssssss", "ssssssssssssssssssssssssssssssss", "ssssssssssssssssssssssssssssssss", "ssssssssssssssssooooooooosssssss", "ssssssssssssoooossssssssssssssss", "sssssssssooossssssssssssssssssss", "ssssssooosssssssssssssssssssssss", "sppsssssssssssssssssssssssssssss", "ssssssssssssssssssssppssssssssss"];
        readonly legend: {
            readonly o: "ripple";
            readonly s: "sand";
            readonly p: "pebble";
        };
    }];
};
export declare const snow: {
    readonly id: "snow";
    readonly about: "Fresh snow: white with soft blue-grey hollows and a few icy glints";
    readonly tags: readonly ["snow", "ground", "floor", "surface"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly hollow: "mist";
        readonly snow: "white";
        readonly glint: "cyan";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww", "wwwwwwwwwwwwwwwmmmmmmmmwwwwwwwww", "wwwwwwwwwwwwwwwwmmmmmmwwwwwwwwww", "wwwwwwwwwwwwwwwwwwmmmwwwwwwwwwww", "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww", "mwwwwwwwwwwwwwwwwwwwwwwwwwwwwwmm", "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwm", "wwwwwwwwwwwwwwwwwwwwwwwwwwwwccww", "wwwwwwwwmmmmmmwwwwwwwwwwwwwwwwww", "wwwwwwwwwmmmmwwwwwwwwwwwwwwwwwww", "wwwwwwwwwwwmwwwwwwwwwwwwwwwwwwww", "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww", "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww", "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww", "wwwwwwwwwwwwwwwwwwwmmmmmmmwwwwww", "wwwwwwwwwwwwwwwwwwwwmmmmmwwwwwww", "wwwwwwwwwwwwwwwwwwwwwwmmwwwwwwww", "mmmwwwwwwwwwwwwwwwwwwwwwwwwwwwwm", "mmwwwwwwwwwwwwwwwwwwwwwwwwwwwwww", "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww", "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww", "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww", "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww", "wwwwwmmmmmmmmwmmmmmmmwwwccwwwwww", "wwwwwwmmmmmmwwwmmmmmwwwwwwwwwwww", "wwwwwwwwmmmwwwwwwmmwwwwwmmmmmmmw", "wwwwwwwwwwwwwwwwwwwwwwwwwmmmmmww", "wwwwwwwwwwwwwwwwwwwwwwwwwwwmmwww", "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww", "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww", "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww", "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww"];
        readonly legend: {
            readonly m: "hollow";
            readonly w: "snow";
            readonly c: "glint";
        };
    }];
};
export declare const ice: {
    readonly id: "ice";
    readonly about: "Sheet ice: pale plates, a few deeper blue, split by white cracks, with white glints";
    readonly tags: readonly ["ice", "ground", "floor", "surface"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly deep: "sky";
        readonly ice: "cyan";
        readonly crack: "white";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["kcccccccccckcccccccckkcccccccccc", "kcccccccccckcccccccckccccccccccc", "kccccccccckkcccccccckccccccccccc", "kccccccccckccccccccckccccccccccc", "kkkccccccckccccccccckccccccccccc", "ssskkkccckkcccccccckkcccccccccck", "sssssskkkkkcccccccckkcccccccckks", "sssssssskkkcccccccckkccccccckkss", "sssssssssskcccccccckkcccccckksss", "sssssssssskkcccccckkkcccccksssss", "ssssssssssskkkkkkkcckkkkkkssssss", "sssssssssssskcccccccccccksssssss", "skksssssssskcccccccccccckkssssss", "kkssssssssskccccccccccccckssssss", "ksssssssssskccccccccccccckkssssk", "sssssssssskcccccccccccccccksssss", "sssssssssskcccccccccccccccksssss", "ssssssssskkcccccccccccccccckssss", "ssssssssskccccccccccccccccckssss", "ssssssssskccccccccccccccccccksss", "sssssskkkkccccccccccccccccccksss", "ssskkkcccckcccccccccckkcccccckss", "kkkcccccccckcccccccckkcccccccksk", "ccccccccccckkcccccckkcccccccckkk", "cccccccccccckkcccccccccccckkkkkc", "ccccccccccccckkkkkcccccckkkccckc", "cccccccccccckkcccckkkkkkcccccckc", "cccccccccccckkcccccckkcccccccckc", "cccccccccccckccccccckkcccccccckk", "kkcccccccccckccccccckkccccccccck", "kccccccccccckccccccckckkccccccck", "ccccccccccckcccccccckkkcccccccck"];
        readonly legend: {
            readonly s: "deep";
            readonly c: "ice";
            readonly k: "crack";
        };
    }];
};
export declare const metalPlates: {
    readonly id: "metal-plates";
    readonly about: "Riveted metal plates: bevelled panels over dark seams, a rivet in each corner";
    readonly tags: readonly ["metal", "floor", "wall", "surface"];
    readonly size: readonly [16, 16];
    readonly tile: true;
    readonly palette: {
        readonly seam: "ink";
        readonly shadow: "night";
        readonly plate: "slate";
        readonly light: "mist";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["jjjjjjjjjjjjjjjj", "jlllllllllllllll", "jlsssssssssssssd", "jlsllssssssllssd", "jlsldssssssldssd", "jlsssssssssssssd", "jlsssssssssssssd", "jlsssssssssssssd", "jlsssssssssssssd", "jlsssssssssssssd", "jlsssssssssssssd", "jlsllssssssllssd", "jlsldssssssldssd", "jlsssssssssssssd", "jlsssssssssssssd", "jldddddddddddddd"];
        readonly legend: {
            readonly j: "seam";
            readonly d: "shadow";
            readonly s: "plate";
            readonly l: "light";
        };
    }];
};
export declare const rust: {
    readonly id: "rust";
    readonly about: "Rusted iron: flaking rust in dark and bright patches, bare grey metal showing through";
    readonly tags: readonly ["metal", "rust", "wall", "floor", "surface"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly metal: "slate";
        readonly pit: "plum";
        readonly rust: "red";
        readonly bright: "orange";
    };
    readonly layers: readonly [{
        readonly pattern: "noise";
        readonly colors: readonly ["metal", "metal", "pit", "rust", "rust", "bright"];
        readonly scale: 6;
        readonly octaves: 2;
        readonly seed: 5;
    }];
};
export declare const moss: {
    readonly id: "moss";
    readonly about: "Moss: soft cushions packed together, lit on top, dark between";
    readonly tags: readonly ["moss", "nature", "ground", "wall", "surface"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly dark: "teal";
        readonly moss: "green";
        readonly light: "lime";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["lllmmmmmmmmmdddddddmmmmmmmmmmmmd", "lmmmmmmdddddddllllldmmmmmddddddd", "mmmmmmmdllllmllllmmmdmmddddddddd", "mmmmmmdlllmmmmlmmmmmmddddddddddd", "dddmddllmmmmmmmmmmmmmllllldddddd", "mdddddmmmmmmmmmmmmmmllllmmmllllm", "mddddddmmmmmmddmmmmdllmmmmmllmmm", "mdddddddmmmmdddlllldmmmmmmmmmmmm", "mdlllmdddddddllllmmmdmmmmmmmmmmm", "dllmmmddlllmdllmmmmmmddmmdddmmmm", "dmmmmmdllmmmdmmmmmmmmddllddddddd", "ddmmmmddmmmmdmmmmmmmdllllmmddddd", "dddddddddmmdddmmmmmmdllmmmmmdddd", "dddddddddddddddddddddmmmmmmmdddd", "ldddddddddddddlldddddmmmmmmddlll", "mmddddlldddddllmmddddddmmmddlllm", "mmddllmmmdddlmmmmdddlllmddddlmmm", "mmddmmmmmddddmmmmddllmmmmdddmmmm", "dddddmmmdddddddddddmmmmmmddddmmm", "dddddddddddddddddddmmmmmmddddddd", "dddddddddddddlddddddmmmmdddddddd", "lllddddddddlllmmdddddddddlddddll", "lmmmddddddllmmmmdddddddlllmmdlll", "mmmmllllmddmmmmmdddddddlmmmmdllm", "mmmmllmmmmddmmmddlllmmdmmmmmdmmm", "mmmmmmmmmmdddddddlmmmmddmmmddmmm", "mmmdmmmmmddddddddmmmmmddddddddmm", "ddddddmddddddddddddddddddddddddd", "ddddddddllllddlllddddddddddllldd", "dddddddlllmmmllmmmddddldddlllmmd", "ddlllddlmmmmmmmmmmddlllmmdlmmmmm", "lllllmdmmmmmmdmmmddllmmmmmmmmmmm"];
        readonly legend: {
            readonly d: "dark";
            readonly m: "moss";
            readonly l: "light";
        };
    }];
};
export declare const cloth: {
    readonly id: "cloth";
    readonly about: "Woven cloth: threads over and under in a plain weave, each lit on one side";
    readonly tags: readonly ["cloth", "wall", "surface"];
    readonly size: readonly [16, 16];
    readonly tile: true;
    readonly palette: {
        readonly shade: "navy";
        readonly thread: "blue";
        readonly light: "sky";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["llldlmmdllldlmmd", "mmmdlmmdmmmdlmmd", "mmmdlmmdmmmdlmmd", "dddddddddddddddd", "lmmdllldlmmdllld", "lmmdmmmdlmmdmmmd", "lmmdmmmdlmmdmmmd", "dddddddddddddddd", "llldlmmdllldlmmd", "mmmdlmmdmmmdlmmd", "mmmdlmmdmmmdlmmd", "dddddddddddddddd", "lmmdllldlmmdllld", "lmmdmmmdlmmdmmmd", "lmmdmmmdlmmdmmmd", "dddddddddddddddd"];
        readonly legend: {
            readonly d: "shade";
            readonly m: "thread";
            readonly l: "light";
        };
    }];
};
export declare const carpet: {
    readonly id: "carpet";
    readonly about: "A red carpet: a diamond medallion in a patterned border; tiled, the borders make a lattice";
    readonly tags: readonly ["cloth", "carpet", "floor", "surface"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly line: "plum";
        readonly field: "red";
        readonly band: "orange";
        readonly gold: "sand";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["pppppppppppppppppppppppppppppppp", "ppooooopooooopoooopooooopooooopp", "popooopppooopppoopppooopppooopop", "pooooopppooopppoopppooopppooooop", "poooppppppppppppppppppppppppooop", "poooprrrrrrrrrrrrrrrrrrrrrrpooop", "poppprrsrrrrrrrpprrrrrrrsrrpppop", "ppppprsssrrrrrpppprrrrrsssrppppp", "poppprrsrrrrrppoopprrrrrsrrpppop", "poooprrrrrrrppoooopprrrrrrrpooop", "poooprrrrrrppooppoopprrrrrrpooop", "poooprrrrrppooppppoopprrrrrpooop", "poppprrrrppooppooppoopprrrrpppop", "ppppprrrppooppooooppoopprrrppppp", "poppprrppooppoossooppoopprrpppop", "poooprppooppoossssooppoopprpooop"];
        readonly legend: {
            readonly p: "line";
            readonly r: "field";
            readonly o: "band";
            readonly s: "gold";
        };
        readonly mirror: "y";
    }];
};
export declare const bark: {
    readonly id: "bark";
    readonly about: "Tree bark: vertical ridges split by dark wandering furrows, lit along one edge";
    readonly tags: readonly ["wood", "bark", "nature", "wall", "surface"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly furrow: "plum";
        readonly bark: "red";
        readonly light: "orange";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["bflbbbbbfflbbbbbfflbbbbbfflbbbff", "bflbbbbbfflbbbbbfflbbbbbfflbbbbb", "flbbbbbbfflbbbbbfflbbbbbbfflbbbb", "flbbbbbbfflbbbbbbfflbbbbbfflbbbb", "flbbbbbbfflbbbbbbfflbbbbbfflbbbb", "flbbbbbbfflbbbbbbfflbbbbbfflbbbb", "flbbbbbbbfflbbbbbfflbbbbbbfflbbb", "flbbbbbbbfflbbbbbbfflbbbbbfflbbb", "flbbbbbbbfflbbbbbbfflbbbbbfflbbb", "flbbbbbbbfflbbbbbbfflbbbbbfflbbb", "flbbbbbbbbfflbbbbbfflbbbbbfflbbb", "flbbbbbbbbfflbbbbbfflbbbbbfflbbb", "flbbbbbbbbfflbbbbbfflbbbbfflbbbb", "bflbbbbbbbfflbbbbbfflbbbbfflbbbb", "bflbbbbbbbfflbbbbbfflbbbbfflbbbb", "bflbbbbbbbfflbbbbbfflbbbbfflbbbb", "bflbbbffbbfflbbbbbfflbbbfflbbbbb", "bbflbbbbbbfflbbbbbfflbbbfflbbbbb", "bbflbbbbbbfflbbbbbfflbbbfflbbbbb", "bbflbbbbbbfflbbbbbfflbbbfflbbbbb", "bbflbbbbbbfflbbbbfflbbbfflbbbbbb", "bbflbbbbbfflbbbbbfflbbbfflbbbbbb", "bbflbbbbbfflbbbbbfflbbbfflbbbbbb", "bbflbbbbbfflbbbbbfflbbbfflbbbbbb", "bbflbbbbbfflbbbbbfflbbbfflbbbbbb", "bbflbbbbfflbbbbbfflbbbbfflbbbbbb", "bbflbbbbfflbbbbbfflbbbbfflbbbbbb", "bbflbbbbfflbbbbbfflbbbbfflbbbbbb", "bbflbbbbfflbbbbbfflbbbbfflbbbbbb", "bbflbbbbfflbbbbbfflbbbbfflbbbbbb", "bflbbbbbfflbbbbbfflbbbbfflbbbbbb", "bflbbbbbfflbbbbbfflbbbbbfflbbbbb"];
        readonly legend: {
            readonly f: "furrow";
            readonly b: "bark";
            readonly l: "light";
        };
    }];
};
export declare const leaves: {
    readonly id: "leaves";
    readonly about: "Foliage: pointed leaves at many angles over dark shade, each lit along one side";
    readonly tags: readonly ["leaves", "nature", "foliage", "wall", "surface"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly shade: "teal";
        readonly leaf: "green";
        readonly light: "lime";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["ddlmmdddddddddddllllllmmmdlmmmdd", "ddddddddddddddllllmlmmmmddmddddd", "ddllllmllllddlllmmmdmdddddddlddd", "dlllmmdmmlllllmmmmdddddddlllmddd", "llmmmmdmmmmllmmmmdddllddlllmdddd", "lmmmmdddmmmmldddddlllmdlllmmlldd", "ddddddddddmmmddddlllmmlllmmdmlll", "dddddddlddddmllddllmmmllmmddmmll", "lllldddmllldmmllllmmmdlmmdddmmml", "lmlllddmmllddmmllmmmdddddddddmmm", "dmmllldmmmlldmmmllddlllldddddddd", "dmmmllddmmmlddmmmlddmllllddddddd", "ddmmmllddmmmddddmmdddmmllldddddd", "ddddmmlddddddddddddddmmmmllddddd", "dddddddlldddddllllmdddmmmmmdllld", "lddddlllmdddllllmmddddddddddmlll", "ldddlllmmdddllmmmmdmllldddddmmml", "llddllmmmddlmmmmmddmmllldddddmmm", "mdddlmmmdddmmmmddddmmmllddddddmm", "ddddmddddddlddddddddmmmldddddddd", "dddddddddlmmlllddddddmmmdddddddd", "lddddddllmdmmlllddddddmlllddddll", "lldddlllmmdmmmllddlldddmlllddmll", "lllddllmmmddmmmlldmllddmmlllddmm", "mmldllmmmddddmmmlmmllldmmmllddmm", "mmmllmmmddddddddmdmmllddmmmldddm", "ddddmmddddddddddddmmlldddddddddd", "ddddllmddddllllllddmmldddddddddd", "dddllmmddllllmmmllddmmddddddlllm", "ddlllmmdlllmmmmmmllddddddddlllmm", "ddllmmmlllmmmddmmmlddllllmdllmmd", "ddllmmdlmmmmddddmmmdlllmmdllmmmd"];
        readonly legend: {
            readonly d: "shade";
            readonly m: "leaf";
            readonly l: "light";
        };
    }];
};
export declare const parquet: {
    readonly id: "parquet";
    readonly about: "Herringbone parquet: long wooden blocks in a zigzag, the two directions in two tones, over thin dark joints";
    readonly tags: readonly ["surface", "wood", "floor"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly joint: "plum";
        readonly wood: "red";
        readonly light: "orange";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["jjjjjjjjjjjjjjjjjmmmjmmmjmmmjjjj", "jllllllllllllllljmmmjmmmjmmmjmmm", "jllllllllllllllljmmmjmmmjmmmjmmm", "jllllllllllllllljmmmjmmmjmmmjmmm", "jjjjjjjjjjjjjjjjjjjjjmmmjmmmjmmm", "jmmmjllllllllllllllljmmmjmmmjmmm", "jmmmjllllllllllllllljmmmjmmmjmmm", "jmmmjllllllllllllllljmmmjmmmjmmm", "jmmmjjjjjjjjjjjjjjjjjjjjjmmmjmmm", "jmmmjmmmjllllllllllllllljmmmjmmm", "jmmmjmmmjllllllllllllllljmmmjmmm", "jmmmjmmmjllllllllllllllljmmmjmmm", "jmmmjmmmjjjjjjjjjjjjjjjjjjjjjmmm", "jmmmjmmmjmmmjllllllllllllllljmmm", "jmmmjmmmjmmmjllllllllllllllljmmm", "jmmmjmmmjmmmjllllllllllllllljmmm", "jmmmjmmmjmmmjjjjjjjjjjjjjjjjjjjj", "jmmmjmmmjmmmjmmmjlllllllllllllll", "jmmmjmmmjmmmjmmmjlllllllllllllll", "jmmmjmmmjmmmjmmmjlllllllllllllll", "jjjjjmmmjmmmjmmmjjjjjjjjjjjjjjjj", "lllljmmmjmmmjmmmjmmmjlllllllllll", "lllljmmmjmmmjmmmjmmmjlllllllllll", "lllljmmmjmmmjmmmjmmmjlllllllllll", "jjjjjjjjjmmmjmmmjmmmjjjjjjjjjjjj", "lllllllljmmmjmmmjmmmjmmmjlllllll", "lllllllljmmmjmmmjmmmjmmmjlllllll", "lllllllljmmmjmmmjmmmjmmmjlllllll", "jjjjjjjjjjjjjmmmjmmmjmmmjjjjjjjj", "lllllllllllljmmmjmmmjmmmjmmmjlll", "lllllllllllljmmmjmmmjmmmjmmmjlll", "lllllllllllljmmmjmmmjmmmjmmmjlll"];
        readonly legend: {
            readonly j: "joint";
            readonly m: "wood";
            readonly l: "light";
        };
    }];
};
export declare const roughBoards: {
    readonly id: "rough-boards";
    readonly about: "Rough-sawn wide boards: dark gaps, heavy grain and a few knots, for barns, sheds and shacks";
    readonly tags: readonly ["surface", "wood", "wall", "floor"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly gap: "ink";
        readonly grain: "plum";
        readonly wood: "red";
    };
    readonly layers: readonly [{
        readonly pattern: "planks";
        readonly colors: readonly ["gap", "grain", "wood", "wood"];
        readonly w: 5;
        readonly length: 32;
        readonly grain: 0.9;
        readonly seed: 11;
    }, {
        readonly pattern: "scatter";
        readonly colors: "gap";
        readonly count: 4;
        readonly size: 1;
        readonly seed: 12;
    }];
};
export declare const logEnds: {
    readonly id: "log-ends";
    readonly about: "Stacked log ends: round cut faces with a growth ring, rimmed in bark, dark gaps between";
    readonly tags: readonly ["surface", "wood", "wall"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly gap: "ink";
        readonly bark: "plum";
        readonly ring: "orange";
        readonly face: "sand";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["kpsssppkkkkpppkkkpppppkkkpppppkk", "psooosppkkpssspppsooospkpsoosppk", "sosssospkpsooooppoosooppsoosoopp", "sososospkpososossososospsosososp", "sososospkpososospososospsosososp", "psoooospkpsosooppsooooppsoosospk", "ppsssspkkppsosppppsssppkpssosppk", "kpppppkkkkkppppkkkpppkkkkpppppkk", "ppkkkpppppkkkpppppkkkpppppkkkkkp", "sspppsooospkpsooospkpsoosspkkkps", "oooppoosoopkpoosoopppoosoopkkpso", "osossososospsososospsososospkpos", "osossososospsososospsososospkpos", "oooppsoooopkpoooospppoosoopkkpso", "ssppppsssppkppsssppkpssosppkkkps", "ppkkkkppppkkkpppppppppppppkkkkkp", "kpppppkkkpppppkkkpsssppkkpppppkk", "psooospkpsoosspkpsooospppsoosspk", "poossopppoosooppsosssospsoosoopk", "pososospsososospsososospsosososp", "pososospsososospsososospsosososp", "psoooopkpoosospkpsoooosppoosoopk", "kpsssppkppsosppkppsssspkpssosppk", "kkpppkppppppppkkkpppppkkkpppppkk", "ppkkkpsssppkkkkkkkkkkkkkkkkkkppp", "sspkpsooosppkkpppppkkkpppppkpsoo", "ooppsosssospkpsoooppkpsooopppoos", "sospsososospkpossoopkpossospsoso", "sospsosssospkpososoppsooosopsoso", "oopkpsoooospkpoosospkpossosppoos", "sppkppsssspkkppoospkkppoospkpsso", "ppppppppppkkkkppppkkkkppppkkkppp"];
        readonly legend: {
            readonly k: "gap";
            readonly p: "bark";
            readonly o: "ring";
            readonly s: "face";
        };
    }];
};
export declare const wicker: {
    readonly id: "wicker";
    readonly about: "Wicker basket weave: pairs of reeds over and under in alternating blocks";
    readonly tags: readonly ["surface", "wood", "wicker", "cloth"];
    readonly size: readonly [16, 16];
    readonly tile: true;
    readonly palette: {
        readonly shade: "red";
        readonly reed: "orange";
        readonly light: "sand";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["llldlmlmllldlmlm", "mmmdlmlmmmmdlmlm", "llldlmlmllldlmlm", "mmmdddddmmmddddd", "lmlmllldlmlmllld", "lmlmmmmdlmlmmmmd", "lmlmllldlmlmllld", "ddddmmmdddddmmmd", "llldlmlmllldlmlm", "mmmdlmlmmmmdlmlm", "llldlmlmllldlmlm", "mmmdddddmmmddddd", "lmlmllldlmlmllld", "lmlmmmmdlmlmmmmd", "lmlmllldlmlmllld", "ddddmmmdddddmmmd"];
        readonly legend: {
            readonly d: "shade";
            readonly m: "reed";
            readonly l: "light";
        };
    }];
};
export declare const marble: {
    readonly id: "marble";
    readonly about: "White marble with soft grey clouding and long wandering veins";
    readonly tags: readonly ["surface", "stone", "marble", "floor", "wall"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly vein: "slate";
        readonly cloud: "mist";
        readonly marble: "white";
    };
    readonly layers: readonly [{
        readonly pattern: "noise";
        readonly colors: readonly ["cloud", "cloud", "marble", "marble", "marble"];
        readonly scale: 6;
        readonly octaves: 2;
        readonly seed: 18;
    }, {
        readonly pixels: readonly ["..............................vv", "...........................vvvv.", ".........................vvv....", ".........................v......", "...vvv...................v......", ".....vvv..............vvvv......", ".......vvvv..........vv.........", "..........vv....................", "...........v....................", "...........v....................", "...........vv...................", "............v...................", "............v...................", "...........vvv..................", "..........vv.v............cc....", ".........vv..v.............c....", "........vv...vvvv..........c....", "........v.......vvv........ccc..", "........v.........vv.........ccc", "ccc....vv..........v...........c", "..cc...v...........v............", "...c..vv...........vv...........", "......v.............v...........", "......v.............v...........", "....................vv..........", ".....................vv.........", "......................vv........", ".......................v........", "................................", "................................", "v...............................", "v..............................v"];
        readonly legend: {
            readonly v: "vein";
            readonly c: "cloud";
        };
    }];
};
export declare const sandstone: {
    readonly id: "sandstone";
    readonly about: "Big sandstone blocks in metre-high courses, pale faces banded with darker strata, red mortar";
    readonly tags: readonly ["surface", "stone", "sandstone", "wall"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly mortar: "red";
        readonly strata: "orange";
        readonly stone: "sand";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr", "sssssssssssrssssssssssssssssrsss", "oooooooosssrssssssssssssssssrooo", "oosssssssssrssssssssssssssssrsso", "sssssssssssrssooooooooooooosrsss", "sssssssssssrssssooosssssssssrsss", "sssssssssssrssssssssssssssssrsss", "oooooooooooroooooooooooooooorooo", "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr", "sssssssssssrsssssssssssssssrssss", "oooooooosssrsooooooooooosssrsooo", "oosssssssssrsssooosssssssssrssso", "sssssssssssrsssssssssssssssrssss", "sssssssssssrsssssssssssssssrssss", "sssssssssssrsssssssssssssssrssss", "oooooooooooroooooooooooooooroooo", "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr", "sssssssssrssssssssssssssssrsssss", "oooooosssrssssssssssssssssrooooo", "sssssssssrssssssssssssssssrssooo", "sssssssssrssooooooooooooosrsssss", "sssssssssrssssooosssssssssrsssss", "sssssssssrssssssssssssssssrsssss", "oooooooooroooooooooooooooorooooo", "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr", "sssssssssrssssssssssssssrsssssss", "oooooosssrooooooooooosssrsoooooo", "sssssssssrssooosssssssssrsssooos", "sssssssssrssssssssssssssrsssssss", "sssssssssrssssssssssssssrsssssss", "sssssssssrssssssssssssssrsssssss", "oooooooooroooooooooooooorooooooo"];
        readonly legend: {
            readonly r: "mortar";
            readonly o: "strata";
            readonly s: "stone";
        };
    }];
};
export declare const basalt: {
    readonly id: "basalt";
    readonly about: "Basalt column tops: dark hexagons packed together, each lit on its upper edges";
    readonly tags: readonly ["surface", "stone", "basalt", "floor", "ground"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly joint: "ink";
        readonly shadow: "night";
        readonly stone: "slate";
        readonly light: "mist";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["jjjllljjjjjsssjjjllsslljjjssssjj", "jllsssljjssdddsjjssssssljsddddss", "jssssssljddddddsjsssssssjddddddd", "jsssssssjdddddddjsssssssjddddddd", "jsssssssjdddddddjsssssssjddddddd", "jsssssssjdddddddjssssssdjddddddd", "jdsssssdjdddddddjddsssdjjddddddd", "jjddsddjjjdddddjjjjdddjjjjdddddj", "ljjjdjjsssjjdjjssssjjjsssjjjjjjl", "slljjssdddssjssddddsjsdddssjjlls", "sssljdddddddjdddddddjddddddsjsss", "ssssjdddddddjdddddddjdddddddjsss", "ssssjdddddddjdddddddjdddddddjsss", "ssssjdddddddjdddddddjdddddddjsss", "ssddjdddddddjdddddddjddddddjjdds", "ddjjjjdddddjjjjdddjjjjddddjjljjd", "jjssssjjdjjsssjjjjssssjjjjllsljj", "ssddddsjjssdddssjsddddsjjlsssslj", "dddddddsjdddddddjddddddjlssssssj", "ddddddddjdddddddjddddddjsssssssj", "ddddddddjdddddddjddddddjdssssssj", "dddddddjjdddddddjddddddjjssssssj", "dddddddjjdddddddjddddddjjddsssdj", "jjddddjjjjjdddjjjjjddjjlljjdddjj", "ssjjjjlllljjjjlllljjjllsslljjjss", "ddssjlssssljjlssssljlssssssljsdd", "ddddjssssssljssssssjssssssssjddd", "ddddjsssssssjssssssjssssssssjddd", "ddddjsssssssjssssssjssssssssjddd", "ddddjsssssssjssssssjdssssssdjddd", "ddddjdsssssdjdsssddjjddsssdjjddd", "dddjjjdddddjjjdddjjlljjdddjjjjjd"];
        readonly legend: {
            readonly j: "joint";
            readonly d: "shadow";
            readonly s: "stone";
            readonly l: "light";
        };
    }];
};
export declare const slateTiles: {
    readonly id: "slate-tiles";
    readonly about: "Dark slate floor tiles, square and double-length, streaked with cleft lines, over black joints";
    readonly tags: readonly ["surface", "stone", "slate", "floor"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly joint: "ink";
        readonly slate: "night";
        readonly cleft: "slate";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk", "ksssssssssssssssksssssssssssssss", "kssssssssssssssskssssssssssnnsss", "ksssssssssnnnssskssnnnssssssssss", "knnnnsssssssssssksssssnnnnssssss", "ksssnnnnssssssssksssssssssssssss", "kssssssnnssssssskssssssssnnsssss", "ksssssssssssssssksssssssssssssss", "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk", "knnnnnnnksssssssknnnnnnnknnnnnnn", "knnnnnnnksssssssknssssnnknnnnnnn", "knnnnnnnkssnnnssknnnnnnnknssnnnn", "ksssnnnnksssssssknnnnnnnknnnnnnn", "knssssnnksssssssknnnnnnnknnsssnn", "knnnnnnnksnnssssksssnnnnknnnnnnn", "knnnnnnnksssssssknnnnnnnknnnnnnn", "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk", "knnnnnnnnnnnnnnnknnnnnnnnnnnnnnn", "knnnnssssnnnnnnnknnnnnssssnnnnnn", "knnnnnnnnssnnnnnknnnnnnnnssnnnnn", "knnnnnnnnnnssnnnknnnnnnnnnnssnnn", "knnnnnnnnnnnnnnnknnnnnnnnnnnnnnn", "knnsssnnnnnnnnnnknnsssnnnnnnnnnn", "knnnnnnnnnnnnnnnknnnnnnnnnnnnnnn", "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk", "knnnnnnnksssssssknnnnnnnnnnnnnnn", "knssssnnksssssssknnnnnnnnnnnnnnn", "knnnnnnnkssnnnssknnnssssnnnnnnnn", "knnnnnnnksssssssknnnnnnssnnnnnnn", "knnnnnnnksssssssknnnnnnnnnsssnnn", "ksssnnnnksnnssssknssssnnnnnnnnnn", "knnnnnnnksssssssknnnnnnnnnnnnnnn"];
        readonly legend: {
            readonly k: "joint";
            readonly n: "slate";
            readonly s: "cleft";
        };
    }];
};
export declare const ashlar: {
    readonly id: "ashlar";
    readonly about: "Rough ashlar: pale squared blocks of mixed sizes in broken courses, chisel-marked, shaded below";
    readonly tags: readonly ["surface", "stone", "wall"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly joint: "night";
        readonly shadow: "slate";
        readonly stone: "mist";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj", "mmmmmmmmsjmmmmmmmmsjssssssssssjj", "ssssmmmmsjmmssmmmmsjjjssssssssjj", "mmmmmmmmsjmmmmmmmmsjssssssssssjj", "sssssssssjsssssssssjjjjjjjjjjjjj", "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj", "jsssssssssjjmmmmmmmsjmmmmsjmmmms", "jsssssssssjjmmmmmmmsjmmmmsjmmmms", "jjjjjjjjjjjjssssssssjsssssjsssss", "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj", "sssssjjmmmmmmsjmssmmsjmmmmmmsjss", "sssssjjmmmssmsjmmmmmsjmmmssmsjss", "jjsssjjmmmmmmsjmmmmmsjmmmmmmsjss", "sssssjjmmmmmmsjmmmmmsjmmmmmmsjss", "jjjjjjjsssssssjssssssjsssssssjjj", "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj", "msjmmmmmmsjsssssssjjsssssssjjmmm", "msjmmmmmmsjsssssssjjsssssssjjmmm", "ssjsssssssjjjjjjjjjjjjjjjjjjjsss", "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj", "jmssmsjsssssssssssssjjmmmmmmmmms", "jmmmmsjssjjsssssssssjjsssmmmmmms", "jmmmmsjsssssssssssssjjmmmmmmmmms", "jsssssjjjjjjjjjjjjjjjjssssssssss", "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj", "mmmsjmmmmmmsjsssssssssjjmmmmsjmm", "smmsjmmmssmsjsssssssssjjmmmmsjms", "mmmsjmmmmmmsjsssssssssjjmmmmsjmm", "mmmsjmmmmmmsjjjsssssssjjssmmsjmm", "mmmsjmmmmmmsjsssssssssjjssmmsjmm", "mmmsjmmmmmmsjsssssssssjjmmmmsjmm", "ssssjsssssssjjjjjjjjjjjjsssssjss"];
        readonly legend: {
            readonly j: "joint";
            readonly s: "shadow";
            readonly m: "stone";
        };
    }];
};
export declare const dryStone: {
    readonly id: "dry-stone";
    readonly about: "A dry-stone wall: flat stones stacked without mortar, dark chinks between them";
    readonly tags: readonly ["surface", "stone", "wall"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly joint: "ink";
        readonly shadow: "night";
        readonly stone: "slate";
        readonly light: "mist";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["jjjlllljjjjlllllljjjjjjjjjjllljj", "jjlsssslljlsssssdjlllllljllsssll", "ljsssssssjjdsssdjjsssssdjdssssss", "jjdddddddjjjdddjjldddddjjjdddddd", "ljjjjjjjjjsssssjjjjjsssssjjlllll", "djlllllljsdddddsjjssdddddjjsssss", "jjdsssssjdddddddsjdddddddjjddsdd", "jjjdddddjdddddddjjjjddddjjjjjdjj", "sssssjjjjljjjjjlllllljjllllllljs", "dddddjjllsllljlssssssljdssssssjd", "ddddjjlsssdddjdsssssddjjdssssdjj", "jjjjjjddddjjjjjdddddjjjjjddddjjj", "sssssjjjlllllljjlllllljjssssjjss", "dddddsjlssssssjlsssssdjsddddsjdd", "ddddddjdssssddjdsssssjjddddddsjd", "jjdjjjjjddddjjjjdddddjsdddddjjjj", "jjllllljsssssssjjssssjjjjjssssss", "jlsssssjdddddddjsddddssjssdddddd", "lsssssdjddddddjjdddddddjjddddddj", "jdddddjjjjddddjjdddddddjjjddddjj", "ljjjjssssssjjjjjjjddjjlllljjllll", "slljsddddddjlllllljlllssssjjssss", "ssdjjdddddjlssssssjdssssssljssss", "ddjjjjjjjjjdddddddjjddddddjjdddd", "lllljjllllljjjjjjjsjjjjjjllljjjl", "ssssjjssssslljssssdsjjlllsssljls", "ssssjjssssssjjddddddsjsssssssjds", "ddddjjddddddjjdddddddjdddddddjjd", "jjjjlllllljjlllljjjjjlljjjjjllll", "lljlssssssljsssslljllsslljjlssss", "ssjdssssssdjdddsddjssssssjjsssss", "ddjjddddddjjjjjdjjjddddddjjddddd"];
        readonly legend: {
            readonly j: "joint";
            readonly d: "shadow";
            readonly s: "stone";
            readonly l: "light";
        };
    }];
};
export declare const pebbles: {
    readonly id: "pebbles";
    readonly about: "River pebbles: smooth rounded stones, dark and pale, each with a wet shine, over dark gaps";
    readonly tags: readonly ["surface", "stone", "pebbles", "ground", "floor"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly gap: "ink";
        readonly stone: "slate";
        readonly pale: "mist";
        readonly shine: "white";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["kkkkkkkkkkkkkmwmmmkkkkkkkkkkkkkk", "kkkkkkkkkkkkkmwmmmskkkmsskkkmsss", "ksssskkkmmsskmmmmmskkmmssskkmmss", "kmmssskkmmsskmmmmskkksssssksssss", "kssssskssssskkssskkkkssssskkssss", "kssssskksssskkkkkkkkkkksskkkssss", "kkksskkkkkskkkkkkkkkmmmkkkkkkkkk", "mmkkkkmwmmkkkkkssskkwwmmskkkkkkk", "wwmmskmwmmsskkkmssskmmmmskkksssk", "mmmmskmmmmmskksmssskmmmmskkmmssk", "mmmmskmmmmskkkssssskmssskkkssssk", "mssskkkssskkkkksssskkkkkkkkssssk", "kkkkkkkkkkkkkkkksskkkkkkkkkksssk", "kkkskkkkkkkkkkmmkkkkkkkkkkmmkkkk", "kksssskkkskkmwwmmskkkkskkmwwmmsk", "kkmmsskkmsskkwmmmskkkmsskmwmmmsk", "kkssssksmmsskmmmmskksmssskmmmmsk", "kksssskssssskmssskkkssssskmssskk", "kksssskssssskkkkkkkkssssskkkkkkk", "kkkkkkkkkkkkkkkkkkkkksskkkkkkkkk", "kwmmskmwwmmkkwwmmskkkkksskkksssk", "kwmmskmmmmmskwwmmskkkmmsskkkmmsk", "kmmmskmmmmmkmmmmmskkksmsssksssss", "ksmsskkmmmskkmmmsskkkssssskkssss", "kkkkkkkksskkkkkkkkkkksssskkkssss", "kkkkkkkkkkkkkkkkkkkkkksskkkkkkkk", "kkkkkkkmmmkkkmmmmkkkkkkkkkkkkssk", "kkssskwwmmskmwwmmskkkssskkkkmmss", "ksmmskmmmmmkmmmmmskksmssskkkmmss", "ksmssskmmmskmmmmmskksmssskkkssss", "ksssssksssskkmssskkkssssskkkssss", "kkssskkkkkkkkkkkkkkkksssskkkkssk"];
        readonly legend: {
            readonly k: "gap";
            readonly s: "stone";
            readonly m: "pale";
            readonly w: "shine";
        };
    }];
};
export declare const gravel: {
    readonly id: "gravel";
    readonly about: "Loose gravel: small grey stones packed over dark grit";
    readonly tags: readonly ["surface", "stone", "gravel", "ground", "path"];
    readonly size: readonly [16, 16];
    readonly tile: true;
    readonly palette: {
        readonly grit: "night";
        readonly stone: "slate";
        readonly light: "mist";
    };
    readonly layers: readonly [{
        readonly pattern: "cobbles";
        readonly colors: readonly ["grit", "stone", "stone", "light"];
        readonly cells: 5;
        readonly gap: 0.8;
        readonly seed: 51;
    }];
};
export declare const geode: {
    readonly id: "geode";
    readonly about: "A crystal floor: blue crystal facets, each split into a lit and a shaded face, over dark seams";
    readonly tags: readonly ["surface", "stone", "crystal", "floor", "ground"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly seam: "navy";
        readonly facet: "blue";
        readonly lit: "sky";
        readonly glint: "cyan";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["bbbbbbbnbbbbbbbnnnnnnnnnnnnkkknb", "bbbbbbknbbbbbkkkknbbbbbbbbnkkkkn", "bbbkkkknbbbbkkkkknbbbbbbbnnkkkkn", "nkkkkkknbbkkkkkknbbbbbbbbnkkkkkk", "nkkkkkknkkkkkkkknbbbbbbccnkkkkkb", "bnkkkkknkkkkkkkknbbbbccccnkbbbbb", "bnnkkkknnkkkknnnnbbccccccnbbbbbb", "bbnnnnbbnnnnncbbbnccccccnnbbbbbb", "bnbbbbbbbnccccbbbnnnnnnnnnbbbbbb", "nnbbbbbbbnccccbbbbnbbbbbbbnnnnnn", "nnkbbbbbbnccccbbbbnbbbbbbbnbbbkk", "knkkbbbbbnccccbbbbncbbbbbnbbbbkk", "knkkkbbbbncccbbbbbncccbbbnbbbbkk", "knkkkbbbbncccbbbbbncccccbnbbbkkk", "knkkkkbbbncccbbbbnnncccccnbbbkkk", "nnnkkkkbbncccbbbnbbbnnccnnbbbkkk", "nkknnkkkbnnccbnnbbbbbnnnnbbbbnnn", "nkkkknnknnbnnnnkkbbbbbbnnnnnnbbn", "nkkkkbbnbbbbbbnkkkbbbbbbnbbbbbbn", "nbbbbbbnbbbbbbnkkkkbbbbbnbbbbbbk", "nbbbbbbnbbbbbbbnkkkkbbbbnbbbbbbk", "nbbbbbnbbbbbbbknkkkkkbbnnnnbbbbk", "nbbbbbnbbbbbbkkknkkkkknncccnnbkk", "nbbbnnbnbbbkkkkknnknnnnncccccnnn", "nnnnbbbbnbkkkknnnnnkkkkncccccccn", "bnbbbbbkknknnnkkkknkkkkkncbbbbbb", "bnbbbbbkkknkkkkkkknbkkkknbbbbbbb", "nbbbbbbkkknbbkkkkknbbkkkknbbbbbb", "nbbbbbbkkknbbbbbkkbbbbbkknbbbbbb", "nnnbbbkkkknbbbbbbbbbbbbbbnnbbbbn", "bbbnnbkkknnnnbbbbnnbbbbbbbnbbbnn", "bbbbbnnnnbbbbnnnbnnbbbbbbbnnnnnb"];
        readonly legend: {
            readonly n: "seam";
            readonly b: "facet";
            readonly k: "lit";
            readonly c: "glint";
        };
    }];
};
export declare const ruinedMosaic: {
    readonly id: "ruined-mosaic";
    readonly about: "A ruined mosaic: a lattice of teal tesserae on a sand field, patches lost to bare earth";
    readonly tags: readonly ["surface", "stone", "mosaic", "floor", "ruin"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly earth: "plum";
        readonly grout: "orange";
        readonly motif: "teal";
        readonly field: "sand";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["gggggppggpppppgggggppppggggggggg", "gtttgpssgsppppssgtttgsssgsssgsss", "gttpgsssgsssppssgtttgsssgsssgsss", "gtttppssgsssgpssgtttgsssgsssgsss", "gggggpgggggggggggggggggggggggggg", "gsssgpptgsssgtttgsssgtttgsssgttt", "gsssgpptgsssgtttgsssgtttgsssgttt", "gsssgpptgsssgtttgsssgtttgsssgttt", "ppgggppggggggggggggggggggggggggp", "ppppgsssgtttgsssgsssgsssgtttgssp", "ppppgsssgtttgsssgsppppppgtttgssp", "ppppgsssgtttgsssgsppppppgtttgssp", "pppggggggggggggggggpppppgggggggp", "ppssgtttgsssgtttgsssppppgsssgtpp", "psssgtttgsssgtttgsssgpppgsssgttp", "gsssgtttgsssgtttgsssgtttgsssgttt", "ggpggggggggggggggggggggggggggggg", "gtptgsssgsssgsssgtttgsssgsssgsss", "gtttgsssgsssgsssgtttgsssgsssgsss", "gtttgsssgsppgsssgtttgpssgsssgsss", "ggggggggppppgggggggggpggggppppgg", "gsssgpppppppptttgsssgpttgppppppp", "gsssgtppppppgtttgsssgtttgppppptt", "gsssgtttgsssgtttgsssgtttgsssgttt", "gggggggggggggggggggggggggggggggg", "gssspppsgtttgssspsssgsssgtttgsss", "gsspppppgtttgsssgsssgsssgtttgsss", "gsspppppgtttgsssgsssgsssgtttgsss", "gggppppgggggggggpggggggggggggggg", "gsppptttgsssgtttpsssgtttgsssgttt", "ppppgtttgsssgtttgsssgtttgsssgttp", "gpssgtttgsssgtttgsssgtttgsssgttt"];
        readonly legend: {
            readonly p: "earth";
            readonly g: "grout";
            readonly t: "motif";
            readonly s: "field";
        };
    }];
};
export declare const diagonalTiles: {
    readonly id: "diagonal-tiles";
    readonly about: "Floor tiles set on the diagonal: diamonds in two alternating tones over dark joints";
    readonly tags: readonly ["surface", "stone", "floor"];
    readonly size: readonly [16, 16];
    readonly tile: true;
    readonly palette: {
        readonly joint: "night";
        readonly dark: "slate";
        readonly light: "mist";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["jjsssssssssssssj", "mjjsssssssssssjj", "mmjjsssssssssjjm", "mmmjjsssssssjjmm", "mmmmjjsssssjjmmm", "mmmmmjjsssjjmmmm", "mmmmmmjjsjjmmmmm", "mmmmmmmjjjmmmmmm", "mmmmmmmjjjmmmmmm", "mmmmmmjjsjjmmmmm", "mmmmmjjsssjjmmmm", "mmmmjjsssssjjmmm", "mmmjjsssssssjjmm", "mmjjsssssssssjjm", "mjjsssssssssssjj", "jjsssssssssssssj"];
        readonly legend: {
            readonly j: "joint";
            readonly s: "dark";
            readonly m: "light";
        };
    }];
};
export declare const checkerMarble: {
    readonly id: "checker-marble";
    readonly about: "A marble checkerboard of slate and pale grey squares, the dark ones veined darker, each square cut from its own slab";
    readonly tags: readonly ["surface", "stone", "marble", "floor"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly dark: "slate";
        readonly vein: "night";
        readonly light: "mist";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["nnnnwwwwvvnnwwwwnnnnwwwwnnnnwwww", "nnnnwwwwnvvnwwwwnnnnwwwwnnnnwwww", "nvvvwwwwnnvvwwwwnnnnwwwwnnnnwwww", "vvnnwwwwnnnnwwwwnnnnwwwwnnnnwwww", "wwwwnnvvwwwwnnnnwwwwvvnnwwwwnnnn", "wwwwnvvnwwwwnnnnwwwwnvvnwwwwnnnn", "wwwwvvnnwwwwnnnnwwwwnnvvwwwwnnnn", "wwwwnnnnwwwwnnnnwwwwnnnnwwwwnnnn", "nnnnwwwwnnvnwwwwnnnnwwwwnnnnwwww", "nnnnwwwwnnvvwwwwnnnnwwwwnnnnwwww", "nvvvwwwwnnnnwwwwnnnnwwwwnnnnwwww", "vvnnwwwwnnnnwwwwnnnnwwwwnnnnwwww", "wwwwnnnnwwwwnnvnwwwwnnnnwwwwnnnn", "wwwwnnnnwwwwnnvvwwwwnnnnwwwwnnnn", "wwwwnnnnwwwwnnnnwwwwnnnnwwwwvvnn", "wwwwnnnnwwwwnnnnwwwwnnnnwwwwnvnn", "nnnnwwwwnnnnwwwwnnnnwwwwnnnnwwww", "nnnnwwwwnnnnwwwwnnnnwwwwnnnnwwww", "nnnnwwwwnnnnwwwwnnnnwwwwnnnnwwww", "nnnnwwwwnnnnwwwwnnnnwwwwnnnnwwww", "wwwwnnnnwwwwnnnnwwwwnnvnwwwwnnnn", "wwwwnnnnwwwwnnnnwwwwnnvvwwwwvvvn", "wwwwnnnnwwwwnnnnwwwwnnnnwwwwnnvv", "wwwwnnnnwwwwnnnnwwwwnnnnwwwwnnnv", "nnnnwwwwvvnnwwwwnnvnwwwwnnnnwwww", "nnnnwwwwnvvnwwwwnnvvwwwwvvvnwwww", "nnnnwwwwnnvvwwwwnnnnwwwwnnvvwwww", "nnnnwwwwnnnnwwwwnnnnwwwwnnnvwwww", "wwwwnnnnwwwwnnnnwwwwnnnnwwwwnvnn", "wwwwnnnnwwwwnnnnwwwwnnnnwwwwnvnn", "wwwwnnnnwwwwnvvvwwwwnnnnwwwwnvvn", "wwwwnnnnwwwwvvnnwwwwnnnnwwwwnnvn"];
        readonly legend: {
            readonly n: "dark";
            readonly v: "vein";
            readonly w: "light";
        };
    }];
};
export declare const hexTiles: {
    readonly id: "hex-tiles";
    readonly about: "Pale hexagonal floor tiles over grey joints, each lit along its upper edges";
    readonly tags: readonly ["surface", "stone", "floor"];
    readonly size: readonly [16, 16];
    readonly tile: true;
    readonly palette: {
        readonly joint: "slate";
        readonly tile: "mist";
        readonly light: "white";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["mjjjljjjmjjjljjj", "jjllmlljjjllmllj", "jlmmmmmljlmmmmml", "jmmmmmmmjmmmmmmm", "jmmmmmmmjmmmmmmm", "jmmmmmmmjmmmmmmm", "jmmmmmmmjmmmmmmm", "jjmmmmmjjjmmmmmj", "ljjjmjjjljjjmjjj", "mlljjjllmlljjjll", "mmmljlmmmmmljlmm", "mmmmjmmmmmmmjmmm", "mmmmjmmmmmmmjmmm", "mmmmjmmmmmmmjmmm", "mmmmjmmmmmmmjmmm", "mmmjjjmmmmmjjjmm"];
        readonly legend: {
            readonly j: "joint";
            readonly m: "tile";
            readonly l: "light";
        };
    }];
};
export declare const mosaic: {
    readonly id: "mosaic";
    readonly about: "A mosaic field: small square tesserae in mixed blues, no border, for baths and temples";
    readonly tags: readonly ["surface", "stone", "mosaic", "floor"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly grout: "night";
        readonly deep: "blue";
        readonly tile: "sky";
        readonly light: "cyan";
    };
    readonly layers: readonly [{
        readonly pattern: "tiles";
        readonly colors: readonly ["grout", "deep", "tile", "tile", "light"];
        readonly w: 4;
        readonly h: 4;
        readonly bevel: 0;
        readonly seed: 71;
    }];
};
export declare const terracotta: {
    readonly id: "terracotta";
    readonly about: "Small square terracotta floor tiles, each lit along its top, over dark joints";
    readonly tags: readonly ["surface", "clay", "floor"];
    readonly size: readonly [16, 16];
    readonly tile: true;
    readonly palette: {
        readonly joint: "plum";
        readonly clay: "red";
        readonly tile: "orange";
    };
    readonly layers: readonly [{
        readonly pattern: "tiles";
        readonly colors: readonly ["joint", "clay", "tile", "tile"];
        readonly w: 4;
        readonly h: 4;
        readonly seed: 81;
    }];
};
export declare const grate: {
    readonly id: "grate";
    readonly about: "A grated metal floor: a grid of bars over dark square holes";
    readonly tags: readonly ["surface", "metal", "floor"];
    readonly size: readonly [16, 16];
    readonly tile: true;
    readonly palette: {
        readonly hole: "ink";
        readonly depth: "night";
        readonly bar: "slate";
        readonly lit: "mist";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["mmmmmmmmmmmmmmmm", "snnnsnnnsnnnsnnn", "skkkskkkskkkskkk", "skkkskkkskkkskkk", "mmmmmmmmmmmmmmmm", "snnnsnnnsnnnsnnn", "skkkskkkskkkskkk", "skkkskkkskkkskkk", "mmmmmmmmmmmmmmmm", "snnnsnnnsnnnsnnn", "skkkskkkskkkskkk", "skkkskkkskkkskkk", "mmmmmmmmmmmmmmmm", "snnnsnnnsnnnsnnn", "skkkskkkskkkskkk", "skkkskkkskkkskkk"];
        readonly legend: {
            readonly k: "hole";
            readonly n: "depth";
            readonly s: "bar";
            readonly m: "lit";
        };
    }];
};
export declare const deck: {
    readonly id: "deck";
    readonly about: "A wooden deck: long boards with dark caulked seams, grain streaks and nails by each butt joint, for ships, docks and piers";
    readonly tags: readonly ["surface", "wood", "floor"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly seam: "night";
        readonly grain: "red";
        readonly wood: "orange";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn", "ooooonoooorrrrrroooooooooooooooo", "ooonrnrnrroooooooooooooooooooooo", "ooooonoooooooooooooooooooooooooo", "nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn", "rrrrroooonrrrrroooooooooonoooooo", "oooooornrnrnooooooooooonononoooo", "rrroooooonooooooooooooooonooooor", "nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn", "rrrrrooooooooooooooooooooooooono", "nooorrrrrooooooooooooooooooonono", "ooooooooooooooooorrrooorrroooono", "nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn", "onooooooorrrrrrrrrrroooooooooooo", "ononooooooooooooooooooooooorrrrn", "onoooooooooooooooooooooooooooooo", "nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn", "oornrrrooooorrrrrrrooooooooooooo", "onononoooooooooooooooooooooooooo", "ooonoooooooooooorrrooooooooooooo", "nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn", "rrrrroooorrrrrrnoooooooooooooooo", "ooorrrrrooooonononoooooooooooooo", "ooooooooooooooonorrroooooooooooo", "nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn", "oooooooooorrrrrrnooooooooooooooo", "oooooooooooooonononooooooorrrroo", "rrrooooooooooooonooorrroooooooor", "nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn", "ooooooonrrrrrrrrrrrooooooooooooo", "ooooonononoooooooooooooooorrrroo", "roooooonooooooooooooooooooooorrr"];
        readonly legend: {
            readonly n: "seam";
            readonly r: "grain";
            readonly o: "wood";
        };
    }];
};
export declare const slateRoof: {
    readonly id: "slate-roof";
    readonly about: "A slate roof: grey slates of mixed widths in staggered courses, a lit lower edge and a shadow under each course";
    readonly tags: readonly ["surface", "stone", "slate", "roof"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly shadow: "ink";
        readonly gap: "night";
        readonly slate: "slate";
        readonly edge: "mist";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk", "snsssssnssssnssssnsssssnssssnsss", "snsssssnssssnssssnsssssnssssnsss", "mnmmmmmnmmmmnmmmmnmmmmmnmmmmnmmm", "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk", "snnnnnnnnsssssssnsssssnssssnssss", "snnnnnnnnsssssssnsssssnssssnssss", "mnssssssnmmmmmmmnmmmmmnmmmmnmmmm", "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk", "sssnssssssnssssnssssssssnssssnss", "sssnssssssnssssnssssssssnssssnss", "mmmnmmmmmmnmmmmnmmmmmmmmnmmmmnmm", "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk", "ssssnssssnsssssssnnnnnnnnssssnss", "ssssnssssnsssssssnnnnnnnnssssnss", "mmmmnmmmmnmmmmmmmnssssssnmmmmnmm", "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk", "snnnnnnnnssssssnsssssnnnnnnnnsss", "snnnnnnnnssssssnsssssnnnnnnnnsss", "mnssssssnmmmmmmnmmmmmnssssssnmmm", "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk", "nnnnnnnnnnnnnnnssssnnnnnnnnnnnnn", "nnnnnnnnnnnnnnnssssnnnnnnnnnnnnn", "snssssssnsssssnmmmmnssssssnsssss", "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk", "nnnnnssssnsssssssnnnnnnnnssssnnn", "nnnnnssssnsssssssnnnnnnnnssssnnn", "ssssnmmmmnmmmmmmmnssssssnmmmmnss", "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk", "snsssssnsssssnsssssnsssssssnssss", "snsssssnsssssnsssssnsssssssnssss", "mnmmmmmnmmmmmnmmmmmnmmmmmmmnmmmm"];
        readonly legend: {
            readonly k: "shadow";
            readonly n: "gap";
            readonly s: "slate";
            readonly m: "edge";
        };
    }];
};
export declare const clayTiles: {
    readonly id: "clay-tiles";
    readonly about: "Clay barrel tiles: rounded caps over channels in columns, a lit lip and a shadow at each course";
    readonly tags: readonly ["surface", "clay", "roof"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly shadow: "plum";
        readonly clay: "red";
        readonly light: "orange";
        readonly shine: "sand";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["osorpppposorpppposorpppprorppppp", "osorprrrosorprrrosorprrrrorpprrr", "osorprrrosorprrrosorprrrrorpprrr", "osorprrrosorprrrosorprrrrorpprrr", "osorprrrosorprrrosorprrrrorpprrr", "osorprrrosorprrrosorprrrrorpprrr", "ssssrrrrssssrrrrssssrrrroooorrrr", "pppppppppppppppppppppppppppppppp", "rorppppposorpppprorppppposorpppp", "rorpprrrosorprrrrorpprrrosorprrr", "rorpprrrosorprrrrorpprrrosorprrr", "rorpprrrosorprrrrorpprrrosorprrr", "rorpprrrosorprrrrorpprrrosorprrr", "rorpprrrosorprrrrorpprrrosorprrr", "oooorrrrssssrrrroooorrrrssssrrrr", "pppppppppppppppppppppppppppppppp", "osorpppposorpppposorpppposorpppp", "osorprrrosorprrrosorprrrosorprrr", "osorprrrosorprrrosorprrrosorprrr", "osorprrrosorprrrosorprrrosorprrr", "osorprrrosorprrrosorprrrosorprrr", "osorprrrosorprrrosorprrrosorprrr", "ssssrrrrssssrrrrssssrrrrssssrrrr", "pppppppppppppppppppppppppppppppp", "osorpppposorpppposorpppprorppppp", "osorprrrosorprrrosorprrrrorpprrr", "osorprrrosorprrrosorprrrrorpprrr", "osorprrrosorprrrosorprrrrorpprrr", "osorprrrosorprrrosorprrrrorpprrr", "osorprrrosorprrrosorprrrrorpprrr", "ssssrrrrssssrrrrssssrrrroooorrrr", "pppppppppppppppppppppppppppppppp"];
        readonly legend: {
            readonly p: "shadow";
            readonly r: "clay";
            readonly o: "light";
            readonly s: "shine";
        };
    }];
};
export declare const woodShakes: {
    readonly id: "wood-shakes";
    readonly about: "Wooden shakes: long split shingles of uneven width in courses of uneven height, their lit butts ragged, stepping up and down";
    readonly tags: readonly ["surface", "wood", "roof", "wall"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly shadow: "plum";
        readonly wood: "red";
        readonly light: "orange";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["oorrrrrprrrrrprpppppppppppppppoo", "pprrrrrprrrrrprrrrrprrrrrrrrpppp", "rprrrrrprrrrrprrrrrprrrrrrrrprrr", "rprrrrrprrrrrprrrrrprrrrrrrrprrr", "rprrrrrprrrrrprrrrrprrrrrrrrprrr", "rprrrrrprrrrrprrrrrprrrrrrrrprrr", "rpooooopooooopooooopooooooooprrr", "rpppppppppppppppppppppppppppprrr", "oprrrrprrrrprrrrprrrrrprrrrrpooo", "pprrrrprrrrprrrrprrrrrprrrrrpppp", "rprrrrprrrrprrrrprrrrrprrrrrrprr", "rprrrrprrrrprrrrprrrrrprrrrrrprr", "rprrrrprrrrprrrrprrrrrprrrrrrprr", "rprrrrprrrrprprrprrrrrprrrrrrprr", "rprrrrprrrrprprrpooooopooooooprr", "oprrrrprrrrprprrppppppppppppppoo", "ppoooopoooopoooorprrrrrprrrrrppp", "rppppppppppppppprprrrrrprrrrrprr", "rrrrprrrrrprrrrrrprrrrrprrrrrprr", "rrrrprrrrrprrrrrrprrrrrprrrrrprr", "rrrrprrrrrprrrrrrprrrrrprrrrrprr", "rrprrrrrprrrrrrprrrprrrrrprrrprr", "rrprrrrrprrrrrrprrrprrrrrprrrprr", "rrprrrrrprrrrrrprrrprrrrrprrrprr", "rrprrrrrprrrrrrprrrprrrrrprrrprr", "rrprrrrrprrrrrrprrrprrrrrprrrprr", "rrprrrrrprrrrrrprrrprrrrrprrrprr", "rrprrrrrprrrrrrprrrprrrrrprrrprr", "rrprrrrrprrrrrrprrrprrrrrprrrprr", "rrprrrrrprrrrrrprrrprrrrrprrrprr", "rrpooooopooooooprrrprrrrrprrrprr", "rrppppppppppppppooopooooopoooprr"];
        readonly legend: {
            readonly p: "shadow";
            readonly r: "wood";
            readonly o: "light";
        };
    }];
};
export declare const mud: {
    readonly id: "mud";
    readonly about: "Wet mud: dark churned earth with puddles reflecting the sky";
    readonly tags: readonly ["surface", "earth", "mud", "ground"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly glint: "mist";
        readonly puddle: "slate";
        readonly mud: "plum";
        readonly earth: "red";
    };
    readonly layers: readonly [{
        readonly pattern: "noise";
        readonly colors: readonly ["glint", "puddle", "puddle", "mud", "mud", "mud", "earth", "earth"];
        readonly scale: 5;
        readonly octaves: 3;
        readonly seed: 101;
    }];
};
export declare const crackedEarth: {
    readonly id: "cracked-earth";
    readonly about: "Dry cracked earth: sun-baked clay plates curling up at lit edges, split by a network of dark cracks";
    readonly tags: readonly ["surface", "earth", "ground", "desert"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly crack: "plum";
        readonly clay: "orange";
        readonly light: "sand";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["soooooopsooooooopsooooooppsoooop", "soooooppsooooooopsoooooosppsooop", "soooppppppsooooopppsooooppsppppp", "ppppsppssspppsopsssppsopssossssp", "ssssoppsoosspppsooossppsooooooop", "soooospsoooosspsooooospsooooooop", "sooooospsooooopsoooooopsooooooop", "soooooopsooooopsoooooopsooooooop", "soooooospsoooopsoooooppsooooooop", "soooooooppppppppsooooppsoooooopp", "psoooooopssssssppsoooppsooooppsp", "ppsooppppsooooospppppsppsoppssos", "sppppssspsoooooospsssossppssoooo", "ospssooopsoooooopsoooooospsooooo", "oopsoooospsooooopsooooooopsooooo", "oopsooooopsooooppsooooooopsooooo", "oopsoooooppsooopsoooooooopppsooo", "oppppsooopppppppsoooooooppspppso", "pssspppspsssssspsooooooopsossppp", "sooossppsoooooospsoopppppsooossp", "sooooospsooooooopppppssspsooooop", "soooooopsooooooopssssoooppsoooop", "soooooopsooooooopsoooooospsoooop", "soooooppsooooooopsoooooooppsooop", "psooooppsooooooopsooooooospppsop", "ppppppppsooooooopsoooooooppspppp", "sssssssppsoooopppsoooooopssosssp", "soooooosppppppppppppppppsoooooop", "soooooooppsssssspssssspsooooooop", "sooooooopsoooooopsoooospsoooooop", "sooooooopsoooooopsooooopsoooooop", "soooooopsooooooopsooooospsooooop"];
        readonly legend: {
            readonly p: "crack";
            readonly o: "clay";
            readonly s: "light";
        };
    }, {
        readonly pattern: "cracks";
        readonly colors: "crack";
        readonly count: 5;
        readonly length: 5;
        readonly seed: 112;
    }];
};
export declare const cinders: {
    readonly id: "cinders";
    readonly about: "Ash and cinders: grey ash drifts with black cinders and a few small embers still glowing";
    readonly tags: readonly ["surface", "ash", "ground", "fire"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly cinder: "night";
        readonly ash: "slate";
        readonly light: "mist";
        readonly ember: "red";
        readonly hot: "orange";
    };
    readonly layers: readonly [{
        readonly pattern: "noise";
        readonly colors: readonly ["cinder", "ash", "ash", "ash", "ash", "light", "light"];
        readonly scale: 6;
        readonly octaves: 2;
        readonly seed: 124;
    }, {
        readonly pattern: "scatter";
        readonly colors: "cinder";
        readonly count: 12;
        readonly size: 2;
        readonly seed: 122;
    }, {
        readonly pattern: "scatter";
        readonly colors: readonly ["ember", "hot"];
        readonly count: 5;
        readonly size: 1;
        readonly seed: 123;
    }];
};
export declare const lavaCrust: {
    readonly id: "lava-crust";
    readonly about: "Cooled lava crust: black plates split by dark cracks that glow red, then orange, only where they meet";
    readonly tags: readonly ["surface", "lava", "ground", "fire"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly crust: "ink";
        readonly crack: "plum";
        readonly glow: "red";
        readonly hot: "orange";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["kkkkkkrkkkkkkkkkrkkkkkkoorkrrork", "kkkkkkpkkkkkkkkkooppppproorkkrpk", "kkkkkkpkkkkkkkkkokkkkkkkkrkkkkpk", "kkkkkkpkkkkkkkkkrkkkkkkkkpkkkkkp", "kkkkkkrpkkkkkkkkrkkkkkkkkpkkkkkp", "rkkkkkorkkkkkkkokkkkkkkkkrkkkkkk", "oorppprokkkkkrooorkkkkkkrkkkkkkk", "okkkkkkkrkrprrrrorrkkkkkoopkkkkk", "kkkkkkkkkorkkkkppkkppkkrkkpppkkr", "kkkkkkkkkrkkkkkppkkkkookkkkkkpoo", "kkkkkkkkkpkkkkkppkkkkkrkkkkkkkkr", "kkkkkkkkrkkkkkkkpkkkkkrkkkkkkkkr", "kkkkkkkkokkkkkkkpkkkkkpkkkkkkkkp", "kkkkkkkrorpkkkkkpkkkkkpkkkkkkkkp", "kkkkkkrrkkpppkkkpkkkkkokkkkkkkkr", "kkkprookkkkkprrrrpkkrrorkkkkkkko", "orpkkrrkkkkkkkroooorpkkkroorppro", "rkkkkkpkkkkkkkkkookkkkkkkokkkkkk", "pkkkkkkpkkkkkkkkrkkkkkkkkpkkkkkk", "pkkkkkkpkkkkkkkkrkkkkkkkkpkkkkkk", "rkkkkkkkpkkkkkkkpkkkkkkkkpkkkkkk", "rkkkkkkkrrkkkkkpkkkkkkkkpkkkkkkk", "orkkkkkkkorrkkkrkkkkkkkkrkkkkkkk", "orppkkkkrkkkpprokkkkkkkkokkkkkkk", "kkkpprrokkkkkkkooppkkkroorpkkkkr", "kkkkkkokkkkkkkkrorprrookkkkppkrp", "kkkkkkrkkkkkkkkpkkkkkkrkkkkkkrok", "kkkkkkrkkkkkkkkpkkkkkkpkkkkkkkok", "kkkkkkpkkkkkkkkrkkkkkkkpkkkkkkrk", "kkkkkkpkkkkkkkkokkkkkkkpkkkkkkrk", "pppprorkkkppppookkkkkkkpkkkkkkoo", "kkkkkrorpppkkkkrkkkkkkkrrkkkkook"];
        readonly legend: {
            readonly k: "crust";
            readonly p: "crack";
            readonly r: "glow";
            readonly o: "hot";
        };
    }];
};
export declare const swamp: {
    readonly id: "swamp";
    readonly about: "Swamp water: murky green water under drifts of scum and specks of duckweed";
    readonly tags: readonly ["surface", "water", "swamp", "ground"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly deep: "night";
        readonly water: "teal";
        readonly scum: "green";
        readonly weed: "lime";
    };
    readonly layers: readonly [{
        readonly pattern: "noise";
        readonly colors: readonly ["deep", "water", "water", "water", "scum", "scum", "scum"];
        readonly scale: 8;
        readonly octaves: 2;
        readonly seed: 270;
    }, {
        readonly pattern: "scatter";
        readonly colors: "weed";
        readonly count: 10;
        readonly size: 1;
        readonly seed: 132;
    }];
};
export declare const shallowWater: {
    readonly id: "shallow-water";
    readonly about: "Shallow water: a net of bright ripple caustics over blue, deeper patches between, glints where ripples meet";
    readonly tags: readonly ["surface", "water", "ground"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly deep: "blue";
        readonly water: "sky";
        readonly ripple: "cyan";
        readonly glint: "white";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["kkkkkccckwkkkkkckkkkkkkkckkkkkkc", "kkkkkkkcwckkkkkkckkkkkkkkwcccccc", "kkkkkkkkckkkkkkkckkkkkkkckkkkkkc", "ckkkkbkkckkkkkkkkckkkkkkckkkkkkk", "ckkbbbbbwkkkkkkkkckkkkkkckkkkkkk", "kckbbbbbwckkkkkkkcckkkkckkkbbbkk", "kcbbbbbcbbcckkkkkkckkkkwckkbbbbk", "bcccccwbbbkkcckkkkwwcwwkkccbbbbb", "bcbbbbccbkkkkkccccckkcckkkkccbbb", "cbbbbbbcbkkkkkkkwkkkkkckkkkbbccb", "cbbbbbbcbkkkkkkkckkkkkckkkkbbbcw", "bbbbbbbbckkkkkkkckkkkkkckkkbbbbc", "bbbbbbbbckkkkkkkkkkkkkkckkkbbbbc", "bbbbbbbbbckkkkkckkkkkkkckkkkbccw", "ccbbbbbbbwcccccwcckkkkkkckccccbc", "bbccbbbbcbbbbkkckcckkkkkwckkkbbc", "bbbbccbcbbbbbkkckkkkcckckkkkkbbc", "bbbbbbwbbbbbkkkkkkkkkkcckkkkbbbc", "bbbbbbcbkkkkkkkkkkkkkkkckkkbbbbc", "bbbbbbbkkkkkkkckkkkkkkkckkbbbbbb", "bbbbbbbkkkkkkkckkkkkkkkckbbbbbcb", "bbbbbbbckkkkkkckkkkkkkkckbbbbbcb", "bbbbbbbwccccccwkkkkkkkkckbbbbbcb", "bbbbbcwkkkkkkkkwcccccccwkbccccwb", "wcccbkckkkkkkkkckkkkkkkkwbbbbbbc", "cbbbkkkckkkkkkckkkkkkkkkkkbbbbbb", "ckkkkkkckkkkkkckkkkkkkkckkbbbbbk", "kkkkkkkkkkkkkkckkkkkkkkckkbbbbkk", "kkkkkkkkckkkkkckkkkkkkkckkbbbkkk", "kkkkkkkkckkkkkckkkkkkccwkkkkkkkk", "kwkkkkkkkckkkcckkkccckkckkkkkkkk", "ckcckkkkkcwccccwcckkkkkkckkkkkkk"];
        readonly legend: {
            readonly b: "deep";
            readonly k: "water";
            readonly c: "ripple";
            readonly w: "glint";
        };
    }];
};
export declare const wetSand: {
    readonly id: "wet-sand";
    readonly about: "Wet beach sand: dark damp sand with dry patches, sky-pale pools and a few shells";
    readonly tags: readonly ["surface", "sand", "beach", "ground"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly wet: "orange";
        readonly pool: "mist";
        readonly dry: "sand";
        readonly shell: "white";
    };
    readonly layers: readonly [{
        readonly pattern: "noise";
        readonly colors: readonly ["pool", "wet", "wet", "wet", "wet", "dry", "dry", "dry"];
        readonly scale: 8;
        readonly octaves: 2;
        readonly seed: 112;
    }, {
        readonly pattern: "scatter";
        readonly colors: "shell";
        readonly count: 4;
        readonly size: 1;
        readonly seed: 142;
    }];
};
export declare const leafLitter: {
    readonly id: "leaf-litter";
    readonly about: "Leaf litter: fallen autumn leaves in red, orange and gold, heaped over dark soil";
    readonly tags: readonly ["surface", "leaves", "ground", "nature"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly soil: "plum";
        readonly shade: "red";
        readonly leaf: "orange";
        readonly light: "sand";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["rprpppppppoooororrprrrprpppppppp", "rroppoororrrrooorprrrprrssoppppp", "oroooorossssoopprrrrprrssosppppp", "ooroorossoooopppppprrrssosspppps", "rroroorrssssopppppppppsosspppprr", "prroorrprrsroppppppppssssppppppp", "rrpprrprrsoorrpppppppsosppppssrr", "spprprrrroorprrppppppoorppppssos", "ooprrprrrpprrpoorpppooroppppsosr", "roorrrprrpooroororoooroorprpssro", "oroorrrrpooroorooorooooprprpooro", "ooroppppoorooroopooroopprprsooro", "pooossssorooooopppooropprprsooro", "pppssooooooppppppppoooppprpsooro", "ppppssssppppppppppssospppppsosop", "roopppppoorppppppssossppppppsppp", "oroopprrrroppppppsossppppppppppr", "ooroopppprrppppppssspppppppppprr", "rooroprrrrpppppppppppprrpppppppr", "ooooorrropppppppppprrrrrrppppppo", "rroorpppppprpppppprrpppprrpppprr", "oooprrrrpossoposspprrrrrprpppooo", "rrpprooppsosspsossppppprrrppoorr", "oprporooossossssossppppppppppooo", "prrpoooorossospssosppppppprrrrrr", "rrppoooroopsssppssrppppooooooorp", "orppporoooppppppporopprrrroororo", "roossoooooopppppporopppoooooooro", "opsossroosssspppporoppppppssssro", "rprsossossoooopoooropppppoooosso", "rprssosppssssooororrppppppssssoo", "rprpssspppppooororrprrrppppppppp"];
        readonly legend: {
            readonly p: "soil";
            readonly r: "shade";
            readonly o: "leaf";
            readonly s: "light";
        };
    }];
};
export declare const meadow: {
    readonly id: "meadow";
    readonly about: "A flower meadow: tall grass with light blades and white and yellow flowers dotted through it";
    readonly tags: readonly ["surface", "grass", "ground", "nature"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly shade: "teal";
        readonly grass: "green";
        readonly blade: "lime";
        readonly petal: "white";
        readonly bloom: "sand";
    };
    readonly layers: readonly [{
        readonly pattern: "noise";
        readonly colors: readonly ["shade", "grass", "grass", "grass"];
        readonly scale: 4;
        readonly octaves: 2;
        readonly seed: 151;
    }, {
        readonly pattern: "scatter";
        readonly colors: "blade";
        readonly count: 50;
        readonly size: 1;
        readonly shape: "blade";
        readonly seed: 152;
    }, {
        readonly pattern: "scatter";
        readonly colors: "petal";
        readonly count: 5;
        readonly size: 1;
        readonly shape: "star";
        readonly seed: 153;
    }, {
        readonly pattern: "scatter";
        readonly colors: "bloom";
        readonly count: 4;
        readonly size: 1;
        readonly shape: "star";
        readonly seed: 154;
    }];
};
export declare const snowDrifts: {
    readonly id: "snow-drifts";
    readonly about: "Wind-blown snow: long wavy drift crests, each with a blue-grey shadow on its lee side";
    readonly tags: readonly ["surface", "snow", "ground"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly shadow: "mist";
        readonly snow: "white";
        readonly glint: "cyan";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["wwwwwwwwwwwwwwwwwwwwwwwmmmmwwwww", "wwwwwwwwwwwwwwwmmmmmmmmmmmmmwwww", "wwwwwwwwwwwwwmmwmmmmmmmmmmmmmmww", "mmmmmmwwwwwmmwwwwwwwwwmwwwwmmmmm", "mmmmmmmmmmmwwwwwwwwwwwwwwwwwmmmm", "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwmm", "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww", "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwc", "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww", "wwwwwmmmmmmwwwwwwwwwwwwwwwwwwwww", "wwwmmmmmmmmmmwwwwwwwwwwwwwwwwwww", "mmmmmmwwwwwwwmmmmmwwwwwwwwwwwwwm", "mmmmmwcwwwwwwwwwwwmmwwwwwwwmmmmm", "mmmwwwwwwwwwwwwwcwwwmmwwwwmmmmmm", "wwwwwwwwwwwwwwwwwwwwwwmmmmmmmmmw", "mmwwwwwwwwwwwwwwwwwwwwmmmmwwwwwm", "mmmmwwwwwwwwwwwwwwwwwwwwwwwwwmmm", "wmmmmmmwwwwwwwwwwwwwwwwwwwmmmmmw", "wwmmmmmmmmmmwwwwwwwwmmmmmmwwmwww", "wwwwmmmmmmmmmmwwwwwmwwwwwwwwwwww", "wwwwwwwmmmmmmmmmmmmwwwwwwwwwwwww", "wwwwwwwwwwwwwwmmmwwwwwwwwwwwwwww", "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww", "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww", "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww", "wwwwwwwwwwwwwwwwwwwwwwwwwwmmwwww", "wwwwwwwmmmmmwwwwwwwwwwwwwmmmmmww", "wwwwwwmwwwmmmmwwwwwwwwwmmmwwmmmw", "wwwwwmwwwwwwmmmmmmwwwmmmmmwwwwmm", "mwwmmwwwwwwwwwmmmmmmmmmmmwwwwwwm", "wmmwwwwwwwwwwwwwmmmmmmmwwwwwwwww", "wwwwwwwwwwwwwwwwwwmmmwwwwwwwwwww"];
        readonly legend: {
            readonly m: "shadow";
            readonly w: "snow";
            readonly c: "glint";
        };
    }];
};
export declare const frozenMud: {
    readonly id: "frozen-mud";
    readonly about: "Frozen mud: dark rutted earth rimed with frost, ice in the hollows";
    readonly tags: readonly ["surface", "earth", "mud", "snow", "ground"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly rut: "night";
        readonly mud: "plum";
        readonly rime: "slate";
        readonly frost: "mist";
        readonly ice: "white";
    };
    readonly layers: readonly [{
        readonly pattern: "noise";
        readonly colors: readonly ["rut", "mud", "mud", "mud", "mud", "rime", "rime", "frost", "frost", "ice"];
        readonly scale: 8;
        readonly octaves: 2;
        readonly seed: 81;
    }, {
        readonly pattern: "cracks";
        readonly colors: "rut";
        readonly count: 4;
        readonly length: 8;
        readonly seed: 162;
    }];
};
export declare const leather: {
    readonly id: "leather";
    readonly about: "Leather: mottled hide with creases, panels joined by stitched seams";
    readonly tags: readonly ["surface", "leather", "cloth"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly crease: "plum";
        readonly hide: "red";
        readonly sheen: "orange";
        readonly thread: "sand";
    };
    readonly layers: readonly [{
        readonly pattern: "noise";
        readonly colors: readonly ["hide", "hide", "hide", "hide", "hide", "hide", "sheen", "sheen"];
        readonly scale: 6;
        readonly octaves: 2;
        readonly seed: 171;
    }, {
        readonly pattern: "cracks";
        readonly colors: "crease";
        readonly count: 6;
        readonly length: 4;
        readonly seed: 172;
    }, {
        readonly pixels: readonly [".............t.s.t..............", ".............t.s.t..............", "...............s................", "...............s................", ".............t.s.t..............", ".............t.s.t..............", "...............s................", "...............s................", ".............t.s.t..............", ".............t.s.t..............", "...............s................", "...............s................", ".............t.s.t..............", "tt..tt..tt..t..s....tt..tt..tt..", "...............s................", "ssssssssssssssssssssssssssssssss", "...............s................", "tt..tt..tt..t..s....tt..tt..tt..", "...............s................", "...............s................", ".............t.s.t..............", ".............t.s.t..............", "...............s................", "...............s................", ".............t.s.t..............", ".............t.s.t..............", "...............s................", "...............s................", ".............t.s.t..............", ".............t.s.t..............", "...............s................", "...............s................"];
        readonly legend: {
            readonly s: "crease";
            readonly t: "thread";
        };
    }];
};
export declare const burlap: {
    readonly id: "burlap";
    readonly about: "Burlap: a coarse loose weave of thick fibres, dark holes between the threads";
    readonly tags: readonly ["surface", "burlap", "cloth"];
    readonly size: readonly [16, 16];
    readonly tile: true;
    readonly palette: {
        readonly hole: "plum";
        readonly shade: "red";
        readonly fibre: "orange";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["oooroorroooroorr", "oooroorroooroorr", "rrrroorrrrrroorr", "rrrprrrprrrprrrp", "oorroooroorrooor", "oorroooroorrooor", "oorrrrrroorrrrrr", "rrrprrrprrrprrrp", "oooroorroooroorr", "oooroorroooroorr", "rrrroorrrrrroorr", "rrrprrrprrrprrrp", "oorroooroorrooor", "oorroooroorrooor", "oorrrrrroorrrrrr", "rrrprrrprrrprrrp"];
        readonly legend: {
            readonly p: "hole";
            readonly r: "shade";
            readonly o: "fibre";
        };
    }];
};
export declare const chainmail: {
    readonly id: "chainmail";
    readonly about: "Chainmail: interlocking iron rings in staggered rows, lit on their upper sides";
    readonly tags: readonly ["surface", "metal", "chainmail", "cloth"];
    readonly size: readonly [16, 16];
    readonly tile: true;
    readonly palette: {
        readonly gap: "ink";
        readonly shadow: "night";
        readonly ring: "slate";
        readonly light: "mist";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["kdlldkkkkdlldkkk", "dkkkkddddkkkkddd", "lkkkkllllkkkklll", "kmddlkkkkmddlkkk", "kdlldkkkkdlldkkk", "dkkkkddddkkkkddd", "lkkkkllllkkkklll", "kmddlkkkkmddlkkk", "kdlldkkkkdlldkkk", "dkkkkddddkkkkddd", "lkkkkllllkkkklll", "kmddlkkkkmddlkkk", "kdlldkkkkdlldkkk", "dkkkkddddkkkkddd", "lkkkkllllkkkklll", "kmddlkkkkmddlkkk"];
        readonly legend: {
            readonly k: "gap";
            readonly d: "shadow";
            readonly m: "ring";
            readonly l: "light";
        };
    }];
};
export declare const fur: {
    readonly id: "fur";
    readonly about: "Brown fur: short overlapping tufts of hair, lighter at the tips, over a dark undercoat";
    readonly tags: readonly ["surface", "fur", "cloth", "nature"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly under: "plum";
        readonly hair: "red";
        readonly tip: "orange";
        readonly light: "sand";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["pppppppprrrrprppprrospprrppprsrr", "pppppppproroprrprpsosrprrppposop", "ppppprpprrrrpprprpspprporppoopop", "prppprppprpoppooorpprrrooppppppp", "prppprrpporoppoorrppoprorppppppp", "prrppprppoorpprrrrppossrpppppppp", "rpopppoprrorpposrrpprspspppppppp", "rpopppooooooprosooprrpssprppprpp", "oorppppporrpprpooppopprrrrprprpp", "porppppoopoprrpppppopprrroorprrp", "prrpprppooopsppppppprpoorsorrprp", "poppprpoopppsppppppprpporspropop", "porprrprpprppppppprprrppoppropoo", "pprprprrpprrppppprrrprrpoooopppp", "prrpsprppprrrppprrooporprroppppp", "popsspopppporppproooroorropppppp", "poprpooppppoorrpooopopprpopppppp", "ppporrpppprrorrppooroproprpppppp", "ppoosrprpprrpsrrpporrpoorrprpppp", "pprrsrrrppooossrpprrrsopspprprpr", "pprrrprrrppooooopporpoopsprrprpr", "rprroooprprrporoopospppprpopprrr", "opprrooooropprrpprsspppprrooppop", "oppsoprrooopprprpopppprpoopoprop", "rrrssopopspppoprpopppprproopprrp", "rorppppoppppoorrrrpppprrsropprrr", "oorprrpppppppprporppppporsrprpoo", "orpprrppprppprsporrpppporssrrpoo", "popsooppprpppssppropppprooposspr", "oopsopppoopppoopprorppprpopopsro", "opppppppoprpppoppssrpppoopppproo", "oppppppprrrpprppprsrrpppoppprrrr"];
        readonly legend: {
            readonly p: "under";
            readonly r: "hair";
            readonly o: "tip";
            readonly s: "light";
        };
    }];
};
export declare const scales: {
    readonly id: "scales";
    readonly about: "Scales: overlapping rounded green scales in staggered rows, dark rims, lit on top";
    readonly tags: readonly ["surface", "scales", "cloth", "nature"];
    readonly size: readonly [16, 16];
    readonly tile: true;
    readonly palette: {
        readonly rim: "teal";
        readonly scale: "green";
        readonly light: "lime";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["dlllmmmddlllmmmd", "dlllmmmddlllmmmd", "ddmmmmddddmmmmdd", "mddddddlmddddddl", "mmmddlllmmmddlll", "mmmddlllmmmddlll", "mmddddmmmmddddmm", "dddlmddddddlmddd", "dddlmddddddlmddd", "mmddddllmmddddll", "mmmddlllmmmddlll", "mmmddlllmmmddlll", "mmmddlllmmmddlll", "mmmddlllmmmddlll", "mmddddmmmmddddmm", "dddlmddddddlmddd"];
        readonly legend: {
            readonly d: "rim";
            readonly m: "scale";
            readonly l: "light";
        };
    }];
};
export declare const runeFloor: {
    readonly id: "rune-floor";
    readonly about: "A rune floor: dark stone slabs in staggered courses, half of them carved with a faint teal rune, each set its own way";
    readonly tags: readonly ["surface", "stone", "magic", "floor"];
    readonly size: readonly [64, 64];
    readonly tile: true;
    readonly palette: {
        readonly joint: "ink";
        readonly slab: "night";
        readonly rune: "teal";
    };
    readonly layers: readonly [{
        readonly pattern: "bricks";
        readonly colors: readonly ["joint", "slab"];
        readonly w: 16;
        readonly h: 16;
        readonly offset: 0.5;
        readonly bevel: 0;
        readonly seed: 181;
    }, {
        readonly pixels: readonly ["................................................................", "................................................................", "................................................................", "................................................................", ".......t........................................................", ".......tt.......................................................", ".......t.t............................t.....t...................", ".......t...............................t.t.t....................", ".....t.t................................t.t.....................", "......tt...............................t.t.t....................", ".......t..............................t.....t...................", "................................................................", "................................................................", "................................................................", "................................................................", "................................................................", "................................................................", "................................................................", "................................................................", "................................................................", "...............t................................................", "..............t.t...............................................", ".............t...t..............................................", "..............t.t............................ttttttt............", "...............t..............................t...t.............", "..............t.t..............................ttt..............", ".............t...t............................t...t.............", ".............................................ttttttt............", "................................................................", "................................................................", "................................................................", "................................................................", "................................................................", "................................................................", "................................................................", "................................................................", "..........................................t.....................", "...........t..............................t.....................", "...........t..............................tt....................", "...........t..............................t.t...................", "...........t..............................tt....................", "..........ttt.............................t.....................", ".........t.t.t............................t.....................", ".........t.t.t..................................................", "................................................................", "................................................................", "................................................................", "................................................................", "................................................................", "................................................................", "................................................................", ".............................................................t..", "............................t...t...........................t...", "tt...........................t.t...........................ttttt", "t.............................t.................................", ".............................t.t...............................t", "..............................t.................................", ".............................t.t................................", "............................t...t...............................", "................................................................", "................................................................", "................................................................", "................................................................", "................................................................"];
        readonly legend: {
            readonly t: "rune";
        };
    }];
};
export declare const starfield: {
    readonly id: "starfield";
    readonly about: "The void: black space with faint navy and plum nebulae and scattered stars";
    readonly tags: readonly ["surface", "void", "magic", "sky"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly void: "ink";
        readonly nebula: "navy";
        readonly glow: "plum";
        readonly star: "white";
        readonly bright: "cyan";
    };
    readonly layers: readonly [{
        readonly pattern: "noise";
        readonly colors: readonly ["void", "void", "void", "void", "nebula", "nebula", "glow"];
        readonly scale: 4;
        readonly octaves: 3;
        readonly seed: 191;
    }, {
        readonly pattern: "scatter";
        readonly colors: "star";
        readonly count: 14;
        readonly size: 1;
        readonly seed: 192;
    }, {
        readonly pattern: "scatter";
        readonly colors: "bright";
        readonly count: 2;
        readonly size: 1;
        readonly shape: "star";
        readonly seed: 193;
    }];
};
export declare const riftEnergy: {
    readonly id: "rift-energy";
    readonly about: "Rift energy: bands of plum and red light flowing on the diagonal over navy, white at their crests";
    readonly tags: readonly ["surface", "rift", "magic", "energy"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly void: "navy";
        readonly rift: "plum";
        readonly flare: "red";
        readonly crest: "white";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["nnnnnnnnnpppppprrnnnnppppnnnnppw", "nnnnppppppppprrrwnnnpprppppppprn", "nnnpppprrrrrrrrwnnnprrrrrpppprwn", "nnppprrwnnnnnwwnnnpprwnnwrrrrnnn", "nppprrnnnnnnnnnnnnprwnnnnnnnnnnn", "ppprrnnnnnnnnnnnnppwnnnnnnnnnnnn", "ppprwnnnpppnnnnnpprnnnnnnnnnnnpp", "pprwnnnppppppnnpprwnnnnnnppppppp", "rrrnnnpprrrrpppprrnnnnpppppprrrr", "wwwnnnprwwwrrrrrwnnnnpppprrwwwww", "nnnnnpprnnnnwwwnnnnnnppprwnnnnnn", "nnnnnprnnnnnnnnnnnnnppprwnnnnnnn", "nnnnprwnnnnnnnnnnnpppprrnnnnnnnn", "nnnpprnnnnnnnnnpppppprrnnnnppppp", "pppprwnnnnppppppprrrrrwnnnpprrpp", "ppprwnnnnpppprrrwwrrrwnnnpprrrrr", "rrwwnnnnppprrwnnnnnnnnnnnprwnnnw", "nnnnnnnppprrwnnnnnnnnnnnprwnnnnn", "nnnnnnpppprwnnnnnnnnnnnpprnnnnnn", "nnnpppppprwnnnppppnnnnnprwnnnnnn", "ppppppprrrnnnppppppppppprnnnnnnp", "prrrrrrrrwnnnprrrrppppprnnnnnppp", "rwnnnwwwwnnnprrwwwrrrrrnnnnnpppr", "nnnnnnnnnnnnprnnnnnnwnnnnnnppprw", "nnnnnnnnnnnprwnnnnnnnnnnnnppprrn", "nnppnnnnnnpprnnnnnnnnnnnpppprrnn", "npppppnnnpprnnnnnnnnppppppprrwnn", "pprrrppppprwnnnnpppppprrrrrrwnnn", "prwwrrrrrrwnnnnpppprrwwwwwrwnnnp", "rwnnnwwwwwnnnnpppprwnnnnnnnnnnnp", "rnnnnnnnnnnnnnppprwnnnnnnnnnnnpp", "nnnnnnnnnnnnpppprwnnnnnnnnnnnnpr"];
        readonly legend: {
            readonly n: "void";
            readonly p: "rift";
            readonly r: "flare";
            readonly w: "crest";
        };
    }];
};
export declare const SURFACES: ({
    readonly id: "planks";
    readonly about: "Floor boards with gaps and staggered butt joints";
    readonly tags: readonly ["wood", "floor", "surface"];
    readonly size: readonly [16, 16];
    readonly tile: true;
    readonly palette: {
        readonly gap: "plum";
        readonly wood: "red";
        readonly wood2: "orange";
    };
    readonly layers: readonly [{
        readonly pattern: "planks";
        readonly colors: readonly ["gap", "wood", "wood2"];
        readonly w: 4;
        readonly length: 16;
        readonly grain: 0.3;
        readonly seed: 3;
    }];
} | {
    readonly id: "bricks";
    readonly about: "Stone bricks in courses over dark mortar, a lit top edge on each";
    readonly tags: readonly ["stone", "wall", "surface"];
    readonly size: readonly [16, 16];
    readonly tile: true;
    readonly palette: {
        readonly mortar: "night";
        readonly stone: "slate";
        readonly stone2: "mist";
    };
    readonly layers: readonly [{
        readonly pattern: "bricks";
        readonly colors: readonly ["mortar", "stone", "stone2"];
        readonly w: 8;
        readonly h: 4;
        readonly seed: 2;
    }];
} | {
    readonly id: "cobbles";
    readonly about: "Rounded cobblestones, some darker, lit on top and apart on wide dark joints";
    readonly tags: readonly ["stone", "floor", "road", "surface"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly joint: "ink";
        readonly shadow: "night";
        readonly stone: "slate";
        readonly light: "mist";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["jlssssdjlssssljssddsjjlddjsddddj", "jlssssdjlssssdjsddddsjjjjjsdddjj", "lsssssdjlssssdjsddddjjjjjjjsjjjj", "jlsssddjlssssdjsddddjjlllljjjjjj", "jjlddjjjldssdjjjsjdjjlssssljllll", "ljjjjjssjjldjjsjjjsjjlssssdjlsss", "sljsssddsjjjjsdssjjjlssssdjjlsss", "sdjsdddddsjssddddssjlssssdjjlsss", "sdjsdddddjjsddddddjjlssssdjlssss", "ddjsdddddjjsdddddjjjjldddjjldsss", "jjjsddddjjjjsdddjjjjjjjjjjljjldd", "jljjsjjjjjjjjsjjjjllljjlllsljjjj", "lslljjjjjllljjjjllssdjjlssssljjl", "ssssljjllssslljlssssdjjlssssdjls", "ssssdjlssssssdjlsssssljlssssdjls", "ssssdjlssssssdjlssssdjjlssssdjls", "sssdjjjlssssdjjjldssdjjlsdddjjls", "ssdjjljjlssdjjlljjlddjjldjjjjjjl", "ldjjlsljjldjjlssljjjjjjjjjlllljj", "jjllsssljjjjlssssljjssssjlsssslj", "jlssssssljjlsssssdjsdddjjlsssssl", "jjlsssssdjjlsssssdjsdddjjlsssssd", "jjjlsssdjjjjlssddjjsdddjjjlsssdj", "lljjlddjjlljjldjjjsdddddsjlsddjl", "ssljjjjllssljjjjjjjsddjjjjldjjls", "sssljjlssssdjllllljjsjjjjjjjjlss", "sssdjjlssssdjlssssljjjjjljjjjjls", "sssdjjlssssdjlssssdjllllsljjjjjl", "ldddjldssssdjlssssdjlssssdjsssjj", "jjjjjjjldddjjlssdddjlssssdjsddsj", "jjlllljjjjjjjjldjjjjlsssdjjsddds", "jlssssljjlllljjjjssjjlssdjsddddj"];
        readonly legend: {
            readonly j: "joint";
            readonly d: "shadow";
            readonly s: "stone";
            readonly l: "light";
        };
    }];
} | {
    readonly id: "floor-tiles";
    readonly about: "Square flagstones with thin joints";
    readonly tags: readonly ["stone", "floor", "surface"];
    readonly size: readonly [16, 16];
    readonly tile: true;
    readonly palette: {
        readonly joint: "slate";
        readonly tile: "mist";
        readonly tile2: "white";
    };
    readonly layers: readonly [{
        readonly pattern: "tiles";
        readonly colors: readonly ["joint", "tile", "tile2"];
        readonly w: 8;
        readonly h: 8;
        readonly seed: 5;
    }];
} | {
    readonly id: "dirt";
    readonly about: "Packed earth in three tones with a few pebbles";
    readonly tags: readonly ["ground", "floor", "surface"];
    readonly size: readonly [16, 16];
    readonly tile: true;
    readonly palette: {
        readonly dark: "plum";
        readonly earth: "red";
        readonly pebble: "sand";
    };
    readonly layers: readonly [{
        readonly pattern: "noise";
        readonly colors: readonly ["dark", "earth"];
        readonly scale: 2;
        readonly octaves: 2;
        readonly seed: 6;
    }, {
        readonly pattern: "scatter";
        readonly colors: "pebble";
        readonly count: 3;
        readonly size: 1;
        readonly seed: 6;
    }];
} | {
    readonly id: "grass";
    readonly about: "Short grass: tufts of light blades over their shade, evenly spread so no shape repeats";
    readonly tags: readonly ["grass", "ground", "floor", "surface", "nature"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly dark: "teal";
        readonly mid: "green";
        readonly light: "lime";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["mmmddddmmmmdddmmmmmmmmmmmmllmlmm", "mmmmmmmmmmmmmmmmmmmmmmmmmmllmlmm", "mmmmmmmmmmmmmmmmmdmmmmmmmmddddmm", "mmmmlmmmmmmmmmmdmdmmmmmmmmmmmmmm", "mlmllmmmmmdmmmmdmdmmmmmmmmmmmmmm", "mlmllmmmdmdmmmmmmmmmmmmdmmmmmmmm", "mddddmmmdmdmmmmmmmmmmdmdmmmmmmmm", "mmmmmmmmmmmmmmmmmmmmmdmdmmmmmmml", "mmmmmmmmmmmmmmmmlmmmmmmmmmmmmlml", "mmmmmmmmmmmmmmmllmlmmmmmmmmmmlml", "mmmmmmmmlmmmmmmllmlmmmmmmmdmmddd", "mmmmmmmmlmlmmmmddddmmmmmdmdmmmmm", "mmmmdmmmlmlmmmmmmmmmmmmmdmdmmmmm", "mmdmdmmmdddmmmmmmmmmmmmmmmmmmmmm", "mmdmdmmmmmmmmmmmmmmmmmmmmmmmmmmm", "mmmmmmmmmmmmmmmlmmmmlmmmmmmmmlml", "mmmmmmmmmmmmmlmlmmmmllmlmmmmllml", "mmmmmmmmmmmmmlmlmmmmllmlmmmmllml", "mmmmmmmmmdmmmdddmmmmddddmmmmdddd", "mmmmmmmdmdmmmmmmmmmmmmmmmmmmmmmm", "mmmmmmmdmdmmmmmmmmmmmmmmmmmmmmmm", "mmmdmmmmmmmmmmmmmmmmmmmmmmmmmmmm", "mdmdmmmmmmmmmmmlmmmmmmmmlmlmmmmm", "mdmdmmmmmmmmmmmlmllmmmmmlmlmmmmm", "mmmmmmmmmmmmmmmlmllmmmmmdddmmmmm", "mmmmmmmmmdmmmmmddddmmmmmmmmmmmmm", "mmmmmmmdmdmmmmmmmmmmmmmmmmmmmlml", "mmmmmmmdmdmmmmmmmmmmmmmlmmmmmlml", "mmmmmmmmmmmmmmmmmmmmlmllmmmmmddd", "mmmlmmlmmmmmmmmmmmmmlmllmmmmmmmm", "mmmllmlmmmmlmlmmmmmmddddmmmmmmmm", "mmmllmlmmmmlmlmmmmmmmmmmmmmmmmmm"];
        readonly legend: {
            readonly d: "dark";
            readonly m: "mid";
            readonly l: "light";
        };
    }];
} | {
    readonly id: "stone";
    readonly about: "A rough stone wall: uneven blocks with ragged edges in rough courses, deep dark joints";
    readonly tags: readonly ["stone", "wall", "surface"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly joint: "ink";
        readonly shadow: "night";
        readonly stone: "slate";
        readonly light: "mist";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["lllljjjjjjllljjjjssjjjjjssjjjjjj", "ssssljjjllsssljjsddsssssddsjjlll", "sssssljlssssssljdddddddddddjlsss", "ssssssjssssssssjdddddddddddjssss", "ssssssjssssssssjdddddddddddjssss", "sssssdjdssssssdjdddddddddddjdsss", "ssssdjjjdssssdjjjdddddddddjjjdss", "ddddjjjjjddddjjjjjjjjjjjjjjjjjdd", "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj", "jjllljjjjjljjjlljjjjjjjjjlllljjj", "llsssljlllsljlsslljllllllssssljl", "ssssssjsssssjsssssjsssssssssssjs", "ssssssjsssssjsssssjsssssssssssjs", "sssssdjdsssdjdsssdjdsssssssssdjd", "dddddjjjdddjjjdddjjjdddddddddjjj", "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj", "llllljjjjssssjjjjjjssssjjjjjllll", "ssssslljsddddsjjsssddddssjjlssss", "sssssssjddddddjsdddddddddsjsssss", "sssssssjddddddjdddddddddddjsssss", "sssssssjddddddjdddddddddddjsssss", "sssssssjddddddjjdddddddddjjsssss", "ssssssdjjddddjjjjdddddddjjjdssss", "ddddddjjjjjjjjjjjjjjjjjjjjjjdddd", "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj", "jjlllljjjsssssjjjjjjjjljjjjjjllj", "jlssssljsdddddsjjlllllsljjlllssl", "jssssssjdddddddjlsssssssljssssss", "jssssssjdddddddjdsssssssdjssssss", "jdssssdjjdddddjjjdsssssdjjdssssd", "jjddddjjjjjjjjjjjjdddddjjjjddddj", "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj"];
        readonly legend: {
            readonly j: "joint";
            readonly d: "shadow";
            readonly s: "stone";
            readonly l: "light";
        };
    }];
} | {
    readonly id: "flagstones";
    readonly about: "Large flat paving slabs of uneven shape, a few darker and a few cracked, over dark joints";
    readonly tags: readonly ["stone", "floor", "surface"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly joint: "night";
        readonly slab: "mist";
        readonly slab2: "slate";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["lljlllllllljjllllllllljlllllllll", "ljjlllllllljjllllllllljjllllllll", "ljllllllllljjllllllllljjllllllll", "jjlllllllllljlllllllllljllllllll", "jllllllllllljlllllllllljjlllllll", "jllllllllllljllllllllllljllllllj", "jllllllllllljllllllllllljjlllllj", "lllllllllllljllllllllllljjjjjjjj", "llllllllllljjjllllllllljjllllljj", "jlllllllljjjljjjlllllljjlllllllj", "jjlllllljjllllljjjllljjlllllllll", "ljjllljjjlllllllljjjjjllllllllll", "lljjjjjlllllllllllljjlllllllllll", "llljjjllllllllllllljjlllllllllll", "lljjjjllllllllllllljjlllllllllll", "ljjjjjllllllllllllljjlllllllllll", "jjsssjjlllllllllllljjlllllllllll", "jsssssjjllllllllllljjllllllllllj", "sssssssjlllllllllljjjllllllllljj", "ssssssssjlllllljjjjlljjlllllljjs", "ssssssssjjllljjjlllllljjlllljjss", "sssssssssjjjjjllllllllljjlljjsss", "ssssssssssjjlllllllllllljjjjjsss", "ssssssssssjlllllllllllllljjjssss", "ssssssssssjlllllllllllllljjjjsss", "sssssssssjjllllllllllllljjljjjss", "sssssssssjjllllllllllllljlllljjs", "jssssssssjllllllllllllljjllllljj", "jjssssssjjllllllllllllljllllllll", "ljjjjjjjjjjllllllllllljlllllllll", "lljjjjlllljjlllllljjjjjlllllllll", "lljjllllllljjjjjjjjjjjjlllllllll"];
        readonly legend: {
            readonly j: "joint";
            readonly l: "slab";
            readonly s: "slab2";
        };
    }, {
        readonly pattern: "cracks";
        readonly colors: "joint";
        readonly count: 2;
        readonly length: 7;
        readonly seed: 7;
    }];
} | {
    readonly id: "shingles";
    readonly about: "Roof shingles with round ends in staggered courses, each course over the top of the one below";
    readonly tags: readonly ["clay", "roof", "surface"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly gap: "plum";
        readonly body: "red";
        readonly light: "orange";
        readonly shine: "sand";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["lllggllllllggbbbbbbggbbbbbbgglll", "llglggllllgsggbbbbglggbbbbglggll", "gglbbgggggsllggggglbbggggglbbggg", "lbbbbbbgsllllllglbbbbbbglbbbbbbg", "lbbbbbbgsllllllglbbbbbbglbbbbbbg", "lbbbbbbgsllllllglbbbbbbglbbbbbbg", "lbbbbbbgsllllllglbbbbbbglbbbbbbg", "lbbbbbbgsllllllglbbbbbbglbbbbbbg", "gbbbbbbggllllllggbbbbbbggbbbbbbg", "ggbbbbglggllllglggbbbbglggbbbbgl", "bggggglbbggggglbbggggglbbggggglb", "bbbglbbbbbbglbbbbbbglbbbbbbglbbb", "bbbglbbbbbbglbbbbbbglbbbbbbglbbb", "bbbglbbbbbbglbbbbbbglbbbbbbglbbb", "bbbglbbbbbbglbbbbbbglbbbbbbglbbb", "bbbglbbbbbbglbbbbbbglbbbbbbglbbb", "bbbggbbbbbbggbbbbbbggbbbbbbggbbb", "bbglggbbbbglggbbbbglggbbbbglggbb", "gglbbggggglbbggggglbbggggglbbggg", "lbbbbbbglbbbbbbglbbbbbbglbbbbbbg", "lbbbbbbglbbbbbbglbbbbbbglbbbbbbg", "lbbbbbbglbbbbbbglbbbbbbglbbbbbbg", "lbbbbbbglbbbbbbglbbbbbbglbbbbbbg", "lbbbbbbglbbbbbbglbbbbbbglbbbbbbg", "gbbbbbbggbbbbbbggbbbbbbggbbbbbbg", "ggbbbbgsggbbbbglggbbbbglggbbbbgs", "lgggggsllggggglbbggggglbbgggggsl", "lllgsllllllglbbbbbbglbbbbbbgslll", "lllgsllllllglbbbbbbglbbbbbbgslll", "lllgsllllllglbbbbbbglbbbbbbgslll", "lllgsllllllglbbbbbbglbbbbbbgslll", "lllgsllllllglbbbbbbglbbbbbbgslll"];
        readonly legend: {
            readonly g: "gap";
            readonly b: "body";
            readonly l: "light";
            readonly s: "shine";
        };
    }];
} | {
    readonly id: "thatch";
    readonly about: "Straw thatch in layered courses, ragged ends hanging over the shadow of the course below";
    readonly tags: readonly ["straw", "roof", "surface"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly deep: "plum";
        readonly shadow: "red";
        readonly straw: "orange";
        readonly light: "sand";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["ppposoosppppsspppppopssppppsssss", "dddpsoppddddppdddddpdppddddpsppp", "ooodppddooooddooooododdoooodpddd", "ooooddoosoooooosoooooooooooodooo", "oooooooosoooooosooooosoooooooooo", "ossooooossooooossoooosoooooooooo", "ossooooossooooossoooosoodooooooo", "ossddooossooooossoooosooddoooooo", "ossddooossooooossoooosooddoooooo", "ospppopppsoooopssoooosooddoooooo", "ppdddpdddpppppdppppppppppppppppp", "ddossdooodddddoddddddddddddddddd", "soossoooooosoooooooooosossoooooo", "soosssooooosoosoodsodossssooosso", "ssosssooooosoossodssddssssoossss", "ssssssooooosoossodssddssssoossss", "sssppppoooosoppppppppppsssppssss", "pppddddpooospddddddddddpppddppss", "dddoooodppppdoooooooooodddooddpp", "soooooooddddooooooooooooooooosdd", "sooooooossoooooooooooosoooooosso", "soososoossoooooooooooossooooosso", "soossssossooosoossoooossooooosso", "soossssossooosoossoooossooooosso", "soossssossooosoossoopppppoooossd", "soossssppsooosopspppdddddppppppd", "pppppppddppppppdpdddoooooddddddp", "dddddddosddddddodooooooooooososd", "oooosooosooooooooooooosooooososs", "oooosooosooosodooooososooooososs", "oooosoossooossdddooososoooosssss", "oooosoossooossdddooosssoooosssss"];
        readonly legend: {
            readonly p: "deep";
            readonly d: "shadow";
            readonly o: "straw";
            readonly s: "light";
        };
    }];
} | {
    readonly id: "sand";
    readonly about: "Pale sand with broken wind ripples and a few pebbles";
    readonly tags: readonly ["sand", "ground", "floor", "surface"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly ripple: "orange";
        readonly sand: "sand";
        readonly pebble: "red";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["sssssssssssosssssooossssssssssss", "sssssssoooosssssssssooosssssssss", "ssssooossssssssssssssssoooosssss", "oooossssssssssssppsssssssssooooo", "ssssssssssssssssssssssssssssssss", "ssssssssssssssssssssssssssssssss", "sssssssssoooosssssssssssssssssss", "ssssssooosssssssssssssssssssssss", "ssoooossssssssssssssssssssssssss", "oosssssssssssssssssssssssooooooo", "ssssssssssssssssssssssssssssssss", "ssssssssssssssssssssssssssssssss", "ssssssssssssssssssssssssssssssss", "ssssssoooooooooossssssssssssssss", "sssooossssssssssoosssssssssssspp", "ooosssssssssssssssssssssssssssso", "ssssssssssssssssssssssssssooooos", "ssssssssssssssssssssssssssssssss", "ssssooooosssssssssssssssssssssss", "sssosssssoosssssssssssssssssssss", "soossssssssosssssossssssssssssss", "osssssssssssooooosssssssssssssso", "ssssssssssssssssssssssssssssssss", "ssssssssssssssssssssssssssssssss", "ssssssssssssssssssssssssssssssss", "ssssssssssssssssssssssssssssssss", "ssssssssssssssssooooooooosssssss", "ssssssssssssoooossssssssssssssss", "sssssssssooossssssssssssssssssss", "ssssssooosssssssssssssssssssssss", "sppsssssssssssssssssssssssssssss", "ssssssssssssssssssssppssssssssss"];
        readonly legend: {
            readonly o: "ripple";
            readonly s: "sand";
            readonly p: "pebble";
        };
    }];
} | {
    readonly id: "snow";
    readonly about: "Fresh snow: white with soft blue-grey hollows and a few icy glints";
    readonly tags: readonly ["snow", "ground", "floor", "surface"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly hollow: "mist";
        readonly snow: "white";
        readonly glint: "cyan";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww", "wwwwwwwwwwwwwwwmmmmmmmmwwwwwwwww", "wwwwwwwwwwwwwwwwmmmmmmwwwwwwwwww", "wwwwwwwwwwwwwwwwwwmmmwwwwwwwwwww", "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww", "mwwwwwwwwwwwwwwwwwwwwwwwwwwwwwmm", "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwm", "wwwwwwwwwwwwwwwwwwwwwwwwwwwwccww", "wwwwwwwwmmmmmmwwwwwwwwwwwwwwwwww", "wwwwwwwwwmmmmwwwwwwwwwwwwwwwwwww", "wwwwwwwwwwwmwwwwwwwwwwwwwwwwwwww", "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww", "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww", "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww", "wwwwwwwwwwwwwwwwwwwmmmmmmmwwwwww", "wwwwwwwwwwwwwwwwwwwwmmmmmwwwwwww", "wwwwwwwwwwwwwwwwwwwwwwmmwwwwwwww", "mmmwwwwwwwwwwwwwwwwwwwwwwwwwwwwm", "mmwwwwwwwwwwwwwwwwwwwwwwwwwwwwww", "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww", "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww", "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww", "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww", "wwwwwmmmmmmmmwmmmmmmmwwwccwwwwww", "wwwwwwmmmmmmwwwmmmmmwwwwwwwwwwww", "wwwwwwwwmmmwwwwwwmmwwwwwmmmmmmmw", "wwwwwwwwwwwwwwwwwwwwwwwwwmmmmmww", "wwwwwwwwwwwwwwwwwwwwwwwwwwwmmwww", "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww", "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww", "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww", "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww"];
        readonly legend: {
            readonly m: "hollow";
            readonly w: "snow";
            readonly c: "glint";
        };
    }];
} | {
    readonly id: "ice";
    readonly about: "Sheet ice: pale plates, a few deeper blue, split by white cracks, with white glints";
    readonly tags: readonly ["ice", "ground", "floor", "surface"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly deep: "sky";
        readonly ice: "cyan";
        readonly crack: "white";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["kcccccccccckcccccccckkcccccccccc", "kcccccccccckcccccccckccccccccccc", "kccccccccckkcccccccckccccccccccc", "kccccccccckccccccccckccccccccccc", "kkkccccccckccccccccckccccccccccc", "ssskkkccckkcccccccckkcccccccccck", "sssssskkkkkcccccccckkcccccccckks", "sssssssskkkcccccccckkccccccckkss", "sssssssssskcccccccckkcccccckksss", "sssssssssskkcccccckkkcccccksssss", "ssssssssssskkkkkkkcckkkkkkssssss", "sssssssssssskcccccccccccksssssss", "skksssssssskcccccccccccckkssssss", "kkssssssssskccccccccccccckssssss", "ksssssssssskccccccccccccckkssssk", "sssssssssskcccccccccccccccksssss", "sssssssssskcccccccccccccccksssss", "ssssssssskkcccccccccccccccckssss", "ssssssssskccccccccccccccccckssss", "ssssssssskccccccccccccccccccksss", "sssssskkkkccccccccccccccccccksss", "ssskkkcccckcccccccccckkcccccckss", "kkkcccccccckcccccccckkcccccccksk", "ccccccccccckkcccccckkcccccccckkk", "cccccccccccckkcccccccccccckkkkkc", "ccccccccccccckkkkkcccccckkkccckc", "cccccccccccckkcccckkkkkkcccccckc", "cccccccccccckkcccccckkcccccccckc", "cccccccccccckccccccckkcccccccckk", "kkcccccccccckccccccckkccccccccck", "kccccccccccckccccccckckkccccccck", "ccccccccccckcccccccckkkcccccccck"];
        readonly legend: {
            readonly s: "deep";
            readonly c: "ice";
            readonly k: "crack";
        };
    }];
} | {
    readonly id: "metal-plates";
    readonly about: "Riveted metal plates: bevelled panels over dark seams, a rivet in each corner";
    readonly tags: readonly ["metal", "floor", "wall", "surface"];
    readonly size: readonly [16, 16];
    readonly tile: true;
    readonly palette: {
        readonly seam: "ink";
        readonly shadow: "night";
        readonly plate: "slate";
        readonly light: "mist";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["jjjjjjjjjjjjjjjj", "jlllllllllllllll", "jlsssssssssssssd", "jlsllssssssllssd", "jlsldssssssldssd", "jlsssssssssssssd", "jlsssssssssssssd", "jlsssssssssssssd", "jlsssssssssssssd", "jlsssssssssssssd", "jlsssssssssssssd", "jlsllssssssllssd", "jlsldssssssldssd", "jlsssssssssssssd", "jlsssssssssssssd", "jldddddddddddddd"];
        readonly legend: {
            readonly j: "seam";
            readonly d: "shadow";
            readonly s: "plate";
            readonly l: "light";
        };
    }];
} | {
    readonly id: "rust";
    readonly about: "Rusted iron: flaking rust in dark and bright patches, bare grey metal showing through";
    readonly tags: readonly ["metal", "rust", "wall", "floor", "surface"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly metal: "slate";
        readonly pit: "plum";
        readonly rust: "red";
        readonly bright: "orange";
    };
    readonly layers: readonly [{
        readonly pattern: "noise";
        readonly colors: readonly ["metal", "metal", "pit", "rust", "rust", "bright"];
        readonly scale: 6;
        readonly octaves: 2;
        readonly seed: 5;
    }];
} | {
    readonly id: "moss";
    readonly about: "Moss: soft cushions packed together, lit on top, dark between";
    readonly tags: readonly ["moss", "nature", "ground", "wall", "surface"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly dark: "teal";
        readonly moss: "green";
        readonly light: "lime";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["lllmmmmmmmmmdddddddmmmmmmmmmmmmd", "lmmmmmmdddddddllllldmmmmmddddddd", "mmmmmmmdllllmllllmmmdmmddddddddd", "mmmmmmdlllmmmmlmmmmmmddddddddddd", "dddmddllmmmmmmmmmmmmmllllldddddd", "mdddddmmmmmmmmmmmmmmllllmmmllllm", "mddddddmmmmmmddmmmmdllmmmmmllmmm", "mdddddddmmmmdddlllldmmmmmmmmmmmm", "mdlllmdddddddllllmmmdmmmmmmmmmmm", "dllmmmddlllmdllmmmmmmddmmdddmmmm", "dmmmmmdllmmmdmmmmmmmmddllddddddd", "ddmmmmddmmmmdmmmmmmmdllllmmddddd", "dddddddddmmdddmmmmmmdllmmmmmdddd", "dddddddddddddddddddddmmmmmmmdddd", "ldddddddddddddlldddddmmmmmmddlll", "mmddddlldddddllmmddddddmmmddlllm", "mmddllmmmdddlmmmmdddlllmddddlmmm", "mmddmmmmmddddmmmmddllmmmmdddmmmm", "dddddmmmdddddddddddmmmmmmddddmmm", "dddddddddddddddddddmmmmmmddddddd", "dddddddddddddlddddddmmmmdddddddd", "lllddddddddlllmmdddddddddlddddll", "lmmmddddddllmmmmdddddddlllmmdlll", "mmmmllllmddmmmmmdddddddlmmmmdllm", "mmmmllmmmmddmmmddlllmmdmmmmmdmmm", "mmmmmmmmmmdddddddlmmmmddmmmddmmm", "mmmdmmmmmddddddddmmmmmddddddddmm", "ddddddmddddddddddddddddddddddddd", "ddddddddllllddlllddddddddddllldd", "dddddddlllmmmllmmmddddldddlllmmd", "ddlllddlmmmmmmmmmmddlllmmdlmmmmm", "lllllmdmmmmmmdmmmddllmmmmmmmmmmm"];
        readonly legend: {
            readonly d: "dark";
            readonly m: "moss";
            readonly l: "light";
        };
    }];
} | {
    readonly id: "cloth";
    readonly about: "Woven cloth: threads over and under in a plain weave, each lit on one side";
    readonly tags: readonly ["cloth", "wall", "surface"];
    readonly size: readonly [16, 16];
    readonly tile: true;
    readonly palette: {
        readonly shade: "navy";
        readonly thread: "blue";
        readonly light: "sky";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["llldlmmdllldlmmd", "mmmdlmmdmmmdlmmd", "mmmdlmmdmmmdlmmd", "dddddddddddddddd", "lmmdllldlmmdllld", "lmmdmmmdlmmdmmmd", "lmmdmmmdlmmdmmmd", "dddddddddddddddd", "llldlmmdllldlmmd", "mmmdlmmdmmmdlmmd", "mmmdlmmdmmmdlmmd", "dddddddddddddddd", "lmmdllldlmmdllld", "lmmdmmmdlmmdmmmd", "lmmdmmmdlmmdmmmd", "dddddddddddddddd"];
        readonly legend: {
            readonly d: "shade";
            readonly m: "thread";
            readonly l: "light";
        };
    }];
} | {
    readonly id: "carpet";
    readonly about: "A red carpet: a diamond medallion in a patterned border; tiled, the borders make a lattice";
    readonly tags: readonly ["cloth", "carpet", "floor", "surface"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly line: "plum";
        readonly field: "red";
        readonly band: "orange";
        readonly gold: "sand";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["pppppppppppppppppppppppppppppppp", "ppooooopooooopoooopooooopooooopp", "popooopppooopppoopppooopppooopop", "pooooopppooopppoopppooopppooooop", "poooppppppppppppppppppppppppooop", "poooprrrrrrrrrrrrrrrrrrrrrrpooop", "poppprrsrrrrrrrpprrrrrrrsrrpppop", "ppppprsssrrrrrpppprrrrrsssrppppp", "poppprrsrrrrrppoopprrrrrsrrpppop", "poooprrrrrrrppoooopprrrrrrrpooop", "poooprrrrrrppooppoopprrrrrrpooop", "poooprrrrrppooppppoopprrrrrpooop", "poppprrrrppooppooppoopprrrrpppop", "ppppprrrppooppooooppoopprrrppppp", "poppprrppooppoossooppoopprrpppop", "poooprppooppoossssooppoopprpooop"];
        readonly legend: {
            readonly p: "line";
            readonly r: "field";
            readonly o: "band";
            readonly s: "gold";
        };
        readonly mirror: "y";
    }];
} | {
    readonly id: "bark";
    readonly about: "Tree bark: vertical ridges split by dark wandering furrows, lit along one edge";
    readonly tags: readonly ["wood", "bark", "nature", "wall", "surface"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly furrow: "plum";
        readonly bark: "red";
        readonly light: "orange";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["bflbbbbbfflbbbbbfflbbbbbfflbbbff", "bflbbbbbfflbbbbbfflbbbbbfflbbbbb", "flbbbbbbfflbbbbbfflbbbbbbfflbbbb", "flbbbbbbfflbbbbbbfflbbbbbfflbbbb", "flbbbbbbfflbbbbbbfflbbbbbfflbbbb", "flbbbbbbfflbbbbbbfflbbbbbfflbbbb", "flbbbbbbbfflbbbbbfflbbbbbbfflbbb", "flbbbbbbbfflbbbbbbfflbbbbbfflbbb", "flbbbbbbbfflbbbbbbfflbbbbbfflbbb", "flbbbbbbbfflbbbbbbfflbbbbbfflbbb", "flbbbbbbbbfflbbbbbfflbbbbbfflbbb", "flbbbbbbbbfflbbbbbfflbbbbbfflbbb", "flbbbbbbbbfflbbbbbfflbbbbfflbbbb", "bflbbbbbbbfflbbbbbfflbbbbfflbbbb", "bflbbbbbbbfflbbbbbfflbbbbfflbbbb", "bflbbbbbbbfflbbbbbfflbbbbfflbbbb", "bflbbbffbbfflbbbbbfflbbbfflbbbbb", "bbflbbbbbbfflbbbbbfflbbbfflbbbbb", "bbflbbbbbbfflbbbbbfflbbbfflbbbbb", "bbflbbbbbbfflbbbbbfflbbbfflbbbbb", "bbflbbbbbbfflbbbbfflbbbfflbbbbbb", "bbflbbbbbfflbbbbbfflbbbfflbbbbbb", "bbflbbbbbfflbbbbbfflbbbfflbbbbbb", "bbflbbbbbfflbbbbbfflbbbfflbbbbbb", "bbflbbbbbfflbbbbbfflbbbfflbbbbbb", "bbflbbbbfflbbbbbfflbbbbfflbbbbbb", "bbflbbbbfflbbbbbfflbbbbfflbbbbbb", "bbflbbbbfflbbbbbfflbbbbfflbbbbbb", "bbflbbbbfflbbbbbfflbbbbfflbbbbbb", "bbflbbbbfflbbbbbfflbbbbfflbbbbbb", "bflbbbbbfflbbbbbfflbbbbfflbbbbbb", "bflbbbbbfflbbbbbfflbbbbbfflbbbbb"];
        readonly legend: {
            readonly f: "furrow";
            readonly b: "bark";
            readonly l: "light";
        };
    }];
} | {
    readonly id: "leaves";
    readonly about: "Foliage: pointed leaves at many angles over dark shade, each lit along one side";
    readonly tags: readonly ["leaves", "nature", "foliage", "wall", "surface"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly shade: "teal";
        readonly leaf: "green";
        readonly light: "lime";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["ddlmmdddddddddddllllllmmmdlmmmdd", "ddddddddddddddllllmlmmmmddmddddd", "ddllllmllllddlllmmmdmdddddddlddd", "dlllmmdmmlllllmmmmdddddddlllmddd", "llmmmmdmmmmllmmmmdddllddlllmdddd", "lmmmmdddmmmmldddddlllmdlllmmlldd", "ddddddddddmmmddddlllmmlllmmdmlll", "dddddddlddddmllddllmmmllmmddmmll", "lllldddmllldmmllllmmmdlmmdddmmml", "lmlllddmmllddmmllmmmdddddddddmmm", "dmmllldmmmlldmmmllddlllldddddddd", "dmmmllddmmmlddmmmlddmllllddddddd", "ddmmmllddmmmddddmmdddmmllldddddd", "ddddmmlddddddddddddddmmmmllddddd", "dddddddlldddddllllmdddmmmmmdllld", "lddddlllmdddllllmmddddddddddmlll", "ldddlllmmdddllmmmmdmllldddddmmml", "llddllmmmddlmmmmmddmmllldddddmmm", "mdddlmmmdddmmmmddddmmmllddddddmm", "ddddmddddddlddddddddmmmldddddddd", "dddddddddlmmlllddddddmmmdddddddd", "lddddddllmdmmlllddddddmlllddddll", "lldddlllmmdmmmllddlldddmlllddmll", "lllddllmmmddmmmlldmllddmmlllddmm", "mmldllmmmddddmmmlmmllldmmmllddmm", "mmmllmmmddddddddmdmmllddmmmldddm", "ddddmmddddddddddddmmlldddddddddd", "ddddllmddddllllllddmmldddddddddd", "dddllmmddllllmmmllddmmddddddlllm", "ddlllmmdlllmmmmmmllddddddddlllmm", "ddllmmmlllmmmddmmmlddllllmdllmmd", "ddllmmdlmmmmddddmmmdlllmmdllmmmd"];
        readonly legend: {
            readonly d: "shade";
            readonly m: "leaf";
            readonly l: "light";
        };
    }];
} | {
    readonly id: "parquet";
    readonly about: "Herringbone parquet: long wooden blocks in a zigzag, the two directions in two tones, over thin dark joints";
    readonly tags: readonly ["surface", "wood", "floor"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly joint: "plum";
        readonly wood: "red";
        readonly light: "orange";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["jjjjjjjjjjjjjjjjjmmmjmmmjmmmjjjj", "jllllllllllllllljmmmjmmmjmmmjmmm", "jllllllllllllllljmmmjmmmjmmmjmmm", "jllllllllllllllljmmmjmmmjmmmjmmm", "jjjjjjjjjjjjjjjjjjjjjmmmjmmmjmmm", "jmmmjllllllllllllllljmmmjmmmjmmm", "jmmmjllllllllllllllljmmmjmmmjmmm", "jmmmjllllllllllllllljmmmjmmmjmmm", "jmmmjjjjjjjjjjjjjjjjjjjjjmmmjmmm", "jmmmjmmmjllllllllllllllljmmmjmmm", "jmmmjmmmjllllllllllllllljmmmjmmm", "jmmmjmmmjllllllllllllllljmmmjmmm", "jmmmjmmmjjjjjjjjjjjjjjjjjjjjjmmm", "jmmmjmmmjmmmjllllllllllllllljmmm", "jmmmjmmmjmmmjllllllllllllllljmmm", "jmmmjmmmjmmmjllllllllllllllljmmm", "jmmmjmmmjmmmjjjjjjjjjjjjjjjjjjjj", "jmmmjmmmjmmmjmmmjlllllllllllllll", "jmmmjmmmjmmmjmmmjlllllllllllllll", "jmmmjmmmjmmmjmmmjlllllllllllllll", "jjjjjmmmjmmmjmmmjjjjjjjjjjjjjjjj", "lllljmmmjmmmjmmmjmmmjlllllllllll", "lllljmmmjmmmjmmmjmmmjlllllllllll", "lllljmmmjmmmjmmmjmmmjlllllllllll", "jjjjjjjjjmmmjmmmjmmmjjjjjjjjjjjj", "lllllllljmmmjmmmjmmmjmmmjlllllll", "lllllllljmmmjmmmjmmmjmmmjlllllll", "lllllllljmmmjmmmjmmmjmmmjlllllll", "jjjjjjjjjjjjjmmmjmmmjmmmjjjjjjjj", "lllllllllllljmmmjmmmjmmmjmmmjlll", "lllllllllllljmmmjmmmjmmmjmmmjlll", "lllllllllllljmmmjmmmjmmmjmmmjlll"];
        readonly legend: {
            readonly j: "joint";
            readonly m: "wood";
            readonly l: "light";
        };
    }];
} | {
    readonly id: "rough-boards";
    readonly about: "Rough-sawn wide boards: dark gaps, heavy grain and a few knots, for barns, sheds and shacks";
    readonly tags: readonly ["surface", "wood", "wall", "floor"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly gap: "ink";
        readonly grain: "plum";
        readonly wood: "red";
    };
    readonly layers: readonly [{
        readonly pattern: "planks";
        readonly colors: readonly ["gap", "grain", "wood", "wood"];
        readonly w: 5;
        readonly length: 32;
        readonly grain: 0.9;
        readonly seed: 11;
    }, {
        readonly pattern: "scatter";
        readonly colors: "gap";
        readonly count: 4;
        readonly size: 1;
        readonly seed: 12;
    }];
} | {
    readonly id: "log-ends";
    readonly about: "Stacked log ends: round cut faces with a growth ring, rimmed in bark, dark gaps between";
    readonly tags: readonly ["surface", "wood", "wall"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly gap: "ink";
        readonly bark: "plum";
        readonly ring: "orange";
        readonly face: "sand";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["kpsssppkkkkpppkkkpppppkkkpppppkk", "psooosppkkpssspppsooospkpsoosppk", "sosssospkpsooooppoosooppsoosoopp", "sososospkpososossososospsosososp", "sososospkpososospososospsosososp", "psoooospkpsosooppsooooppsoosospk", "ppsssspkkppsosppppsssppkpssosppk", "kpppppkkkkkppppkkkpppkkkkpppppkk", "ppkkkpppppkkkpppppkkkpppppkkkkkp", "sspppsooospkpsooospkpsoosspkkkps", "oooppoosoopkpoosoopppoosoopkkpso", "osossososospsososospsososospkpos", "osossososospsososospsososospkpos", "oooppsoooopkpoooospppoosoopkkpso", "ssppppsssppkppsssppkpssosppkkkps", "ppkkkkppppkkkpppppppppppppkkkkkp", "kpppppkkkpppppkkkpsssppkkpppppkk", "psooospkpsoosspkpsooospppsoosspk", "poossopppoosooppsosssospsoosoopk", "pososospsososospsososospsosososp", "pososospsososospsososospsosososp", "psoooopkpoosospkpsoooosppoosoopk", "kpsssppkppsosppkppsssspkpssosppk", "kkpppkppppppppkkkpppppkkkpppppkk", "ppkkkpsssppkkkkkkkkkkkkkkkkkkppp", "sspkpsooosppkkpppppkkkpppppkpsoo", "ooppsosssospkpsoooppkpsooopppoos", "sospsososospkpossoopkpossospsoso", "sospsosssospkpososoppsooosopsoso", "oopkpsoooospkpoosospkpossosppoos", "sppkppsssspkkppoospkkppoospkpsso", "ppppppppppkkkkppppkkkkppppkkkppp"];
        readonly legend: {
            readonly k: "gap";
            readonly p: "bark";
            readonly o: "ring";
            readonly s: "face";
        };
    }];
} | {
    readonly id: "wicker";
    readonly about: "Wicker basket weave: pairs of reeds over and under in alternating blocks";
    readonly tags: readonly ["surface", "wood", "wicker", "cloth"];
    readonly size: readonly [16, 16];
    readonly tile: true;
    readonly palette: {
        readonly shade: "red";
        readonly reed: "orange";
        readonly light: "sand";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["llldlmlmllldlmlm", "mmmdlmlmmmmdlmlm", "llldlmlmllldlmlm", "mmmdddddmmmddddd", "lmlmllldlmlmllld", "lmlmmmmdlmlmmmmd", "lmlmllldlmlmllld", "ddddmmmdddddmmmd", "llldlmlmllldlmlm", "mmmdlmlmmmmdlmlm", "llldlmlmllldlmlm", "mmmdddddmmmddddd", "lmlmllldlmlmllld", "lmlmmmmdlmlmmmmd", "lmlmllldlmlmllld", "ddddmmmdddddmmmd"];
        readonly legend: {
            readonly d: "shade";
            readonly m: "reed";
            readonly l: "light";
        };
    }];
} | {
    readonly id: "marble";
    readonly about: "White marble with soft grey clouding and long wandering veins";
    readonly tags: readonly ["surface", "stone", "marble", "floor", "wall"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly vein: "slate";
        readonly cloud: "mist";
        readonly marble: "white";
    };
    readonly layers: readonly [{
        readonly pattern: "noise";
        readonly colors: readonly ["cloud", "cloud", "marble", "marble", "marble"];
        readonly scale: 6;
        readonly octaves: 2;
        readonly seed: 18;
    }, {
        readonly pixels: readonly ["..............................vv", "...........................vvvv.", ".........................vvv....", ".........................v......", "...vvv...................v......", ".....vvv..............vvvv......", ".......vvvv..........vv.........", "..........vv....................", "...........v....................", "...........v....................", "...........vv...................", "............v...................", "............v...................", "...........vvv..................", "..........vv.v............cc....", ".........vv..v.............c....", "........vv...vvvv..........c....", "........v.......vvv........ccc..", "........v.........vv.........ccc", "ccc....vv..........v...........c", "..cc...v...........v............", "...c..vv...........vv...........", "......v.............v...........", "......v.............v...........", "....................vv..........", ".....................vv.........", "......................vv........", ".......................v........", "................................", "................................", "v...............................", "v..............................v"];
        readonly legend: {
            readonly v: "vein";
            readonly c: "cloud";
        };
    }];
} | {
    readonly id: "sandstone";
    readonly about: "Big sandstone blocks in metre-high courses, pale faces banded with darker strata, red mortar";
    readonly tags: readonly ["surface", "stone", "sandstone", "wall"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly mortar: "red";
        readonly strata: "orange";
        readonly stone: "sand";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr", "sssssssssssrssssssssssssssssrsss", "oooooooosssrssssssssssssssssrooo", "oosssssssssrssssssssssssssssrsso", "sssssssssssrssooooooooooooosrsss", "sssssssssssrssssooosssssssssrsss", "sssssssssssrssssssssssssssssrsss", "oooooooooooroooooooooooooooorooo", "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr", "sssssssssssrsssssssssssssssrssss", "oooooooosssrsooooooooooosssrsooo", "oosssssssssrsssooosssssssssrssso", "sssssssssssrsssssssssssssssrssss", "sssssssssssrsssssssssssssssrssss", "sssssssssssrsssssssssssssssrssss", "oooooooooooroooooooooooooooroooo", "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr", "sssssssssrssssssssssssssssrsssss", "oooooosssrssssssssssssssssrooooo", "sssssssssrssssssssssssssssrssooo", "sssssssssrssooooooooooooosrsssss", "sssssssssrssssooosssssssssrsssss", "sssssssssrssssssssssssssssrsssss", "oooooooooroooooooooooooooorooooo", "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr", "sssssssssrssssssssssssssrsssssss", "oooooosssrooooooooooosssrsoooooo", "sssssssssrssooosssssssssrsssooos", "sssssssssrssssssssssssssrsssssss", "sssssssssrssssssssssssssrsssssss", "sssssssssrssssssssssssssrsssssss", "oooooooooroooooooooooooorooooooo"];
        readonly legend: {
            readonly r: "mortar";
            readonly o: "strata";
            readonly s: "stone";
        };
    }];
} | {
    readonly id: "basalt";
    readonly about: "Basalt column tops: dark hexagons packed together, each lit on its upper edges";
    readonly tags: readonly ["surface", "stone", "basalt", "floor", "ground"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly joint: "ink";
        readonly shadow: "night";
        readonly stone: "slate";
        readonly light: "mist";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["jjjllljjjjjsssjjjllsslljjjssssjj", "jllsssljjssdddsjjssssssljsddddss", "jssssssljddddddsjsssssssjddddddd", "jsssssssjdddddddjsssssssjddddddd", "jsssssssjdddddddjsssssssjddddddd", "jsssssssjdddddddjssssssdjddddddd", "jdsssssdjdddddddjddsssdjjddddddd", "jjddsddjjjdddddjjjjdddjjjjdddddj", "ljjjdjjsssjjdjjssssjjjsssjjjjjjl", "slljjssdddssjssddddsjsdddssjjlls", "sssljdddddddjdddddddjddddddsjsss", "ssssjdddddddjdddddddjdddddddjsss", "ssssjdddddddjdddddddjdddddddjsss", "ssssjdddddddjdddddddjdddddddjsss", "ssddjdddddddjdddddddjddddddjjdds", "ddjjjjdddddjjjjdddjjjjddddjjljjd", "jjssssjjdjjsssjjjjssssjjjjllsljj", "ssddddsjjssdddssjsddddsjjlsssslj", "dddddddsjdddddddjddddddjlssssssj", "ddddddddjdddddddjddddddjsssssssj", "ddddddddjdddddddjddddddjdssssssj", "dddddddjjdddddddjddddddjjssssssj", "dddddddjjdddddddjddddddjjddsssdj", "jjddddjjjjjdddjjjjjddjjlljjdddjj", "ssjjjjlllljjjjlllljjjllsslljjjss", "ddssjlssssljjlssssljlssssssljsdd", "ddddjssssssljssssssjssssssssjddd", "ddddjsssssssjssssssjssssssssjddd", "ddddjsssssssjssssssjssssssssjddd", "ddddjsssssssjssssssjdssssssdjddd", "ddddjdsssssdjdsssddjjddsssdjjddd", "dddjjjdddddjjjdddjjlljjdddjjjjjd"];
        readonly legend: {
            readonly j: "joint";
            readonly d: "shadow";
            readonly s: "stone";
            readonly l: "light";
        };
    }];
} | {
    readonly id: "slate-tiles";
    readonly about: "Dark slate floor tiles, square and double-length, streaked with cleft lines, over black joints";
    readonly tags: readonly ["surface", "stone", "slate", "floor"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly joint: "ink";
        readonly slate: "night";
        readonly cleft: "slate";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk", "ksssssssssssssssksssssssssssssss", "kssssssssssssssskssssssssssnnsss", "ksssssssssnnnssskssnnnssssssssss", "knnnnsssssssssssksssssnnnnssssss", "ksssnnnnssssssssksssssssssssssss", "kssssssnnssssssskssssssssnnsssss", "ksssssssssssssssksssssssssssssss", "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk", "knnnnnnnksssssssknnnnnnnknnnnnnn", "knnnnnnnksssssssknssssnnknnnnnnn", "knnnnnnnkssnnnssknnnnnnnknssnnnn", "ksssnnnnksssssssknnnnnnnknnnnnnn", "knssssnnksssssssknnnnnnnknnsssnn", "knnnnnnnksnnssssksssnnnnknnnnnnn", "knnnnnnnksssssssknnnnnnnknnnnnnn", "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk", "knnnnnnnnnnnnnnnknnnnnnnnnnnnnnn", "knnnnssssnnnnnnnknnnnnssssnnnnnn", "knnnnnnnnssnnnnnknnnnnnnnssnnnnn", "knnnnnnnnnnssnnnknnnnnnnnnnssnnn", "knnnnnnnnnnnnnnnknnnnnnnnnnnnnnn", "knnsssnnnnnnnnnnknnsssnnnnnnnnnn", "knnnnnnnnnnnnnnnknnnnnnnnnnnnnnn", "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk", "knnnnnnnksssssssknnnnnnnnnnnnnnn", "knssssnnksssssssknnnnnnnnnnnnnnn", "knnnnnnnkssnnnssknnnssssnnnnnnnn", "knnnnnnnksssssssknnnnnnssnnnnnnn", "knnnnnnnksssssssknnnnnnnnnsssnnn", "ksssnnnnksnnssssknssssnnnnnnnnnn", "knnnnnnnksssssssknnnnnnnnnnnnnnn"];
        readonly legend: {
            readonly k: "joint";
            readonly n: "slate";
            readonly s: "cleft";
        };
    }];
} | {
    readonly id: "ashlar";
    readonly about: "Rough ashlar: pale squared blocks of mixed sizes in broken courses, chisel-marked, shaded below";
    readonly tags: readonly ["surface", "stone", "wall"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly joint: "night";
        readonly shadow: "slate";
        readonly stone: "mist";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj", "mmmmmmmmsjmmmmmmmmsjssssssssssjj", "ssssmmmmsjmmssmmmmsjjjssssssssjj", "mmmmmmmmsjmmmmmmmmsjssssssssssjj", "sssssssssjsssssssssjjjjjjjjjjjjj", "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj", "jsssssssssjjmmmmmmmsjmmmmsjmmmms", "jsssssssssjjmmmmmmmsjmmmmsjmmmms", "jjjjjjjjjjjjssssssssjsssssjsssss", "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj", "sssssjjmmmmmmsjmssmmsjmmmmmmsjss", "sssssjjmmmssmsjmmmmmsjmmmssmsjss", "jjsssjjmmmmmmsjmmmmmsjmmmmmmsjss", "sssssjjmmmmmmsjmmmmmsjmmmmmmsjss", "jjjjjjjsssssssjssssssjsssssssjjj", "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj", "msjmmmmmmsjsssssssjjsssssssjjmmm", "msjmmmmmmsjsssssssjjsssssssjjmmm", "ssjsssssssjjjjjjjjjjjjjjjjjjjsss", "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj", "jmssmsjsssssssssssssjjmmmmmmmmms", "jmmmmsjssjjsssssssssjjsssmmmmmms", "jmmmmsjsssssssssssssjjmmmmmmmmms", "jsssssjjjjjjjjjjjjjjjjssssssssss", "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj", "mmmsjmmmmmmsjsssssssssjjmmmmsjmm", "smmsjmmmssmsjsssssssssjjmmmmsjms", "mmmsjmmmmmmsjsssssssssjjmmmmsjmm", "mmmsjmmmmmmsjjjsssssssjjssmmsjmm", "mmmsjmmmmmmsjsssssssssjjssmmsjmm", "mmmsjmmmmmmsjsssssssssjjmmmmsjmm", "ssssjsssssssjjjjjjjjjjjjsssssjss"];
        readonly legend: {
            readonly j: "joint";
            readonly s: "shadow";
            readonly m: "stone";
        };
    }];
} | {
    readonly id: "dry-stone";
    readonly about: "A dry-stone wall: flat stones stacked without mortar, dark chinks between them";
    readonly tags: readonly ["surface", "stone", "wall"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly joint: "ink";
        readonly shadow: "night";
        readonly stone: "slate";
        readonly light: "mist";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["jjjlllljjjjlllllljjjjjjjjjjllljj", "jjlsssslljlsssssdjlllllljllsssll", "ljsssssssjjdsssdjjsssssdjdssssss", "jjdddddddjjjdddjjldddddjjjdddddd", "ljjjjjjjjjsssssjjjjjsssssjjlllll", "djlllllljsdddddsjjssdddddjjsssss", "jjdsssssjdddddddsjdddddddjjddsdd", "jjjdddddjdddddddjjjjddddjjjjjdjj", "sssssjjjjljjjjjlllllljjllllllljs", "dddddjjllsllljlssssssljdssssssjd", "ddddjjlsssdddjdsssssddjjdssssdjj", "jjjjjjddddjjjjjdddddjjjjjddddjjj", "sssssjjjlllllljjlllllljjssssjjss", "dddddsjlssssssjlsssssdjsddddsjdd", "ddddddjdssssddjdsssssjjddddddsjd", "jjdjjjjjddddjjjjdddddjsdddddjjjj", "jjllllljsssssssjjssssjjjjjssssss", "jlsssssjdddddddjsddddssjssdddddd", "lsssssdjddddddjjdddddddjjddddddj", "jdddddjjjjddddjjdddddddjjjddddjj", "ljjjjssssssjjjjjjjddjjlllljjllll", "slljsddddddjlllllljlllssssjjssss", "ssdjjdddddjlssssssjdssssssljssss", "ddjjjjjjjjjdddddddjjddddddjjdddd", "lllljjllllljjjjjjjsjjjjjjllljjjl", "ssssjjssssslljssssdsjjlllsssljls", "ssssjjssssssjjddddddsjsssssssjds", "ddddjjddddddjjdddddddjdddddddjjd", "jjjjlllllljjlllljjjjjlljjjjjllll", "lljlssssssljsssslljllsslljjlssss", "ssjdssssssdjdddsddjssssssjjsssss", "ddjjddddddjjjjjdjjjddddddjjddddd"];
        readonly legend: {
            readonly j: "joint";
            readonly d: "shadow";
            readonly s: "stone";
            readonly l: "light";
        };
    }];
} | {
    readonly id: "pebbles";
    readonly about: "River pebbles: smooth rounded stones, dark and pale, each with a wet shine, over dark gaps";
    readonly tags: readonly ["surface", "stone", "pebbles", "ground", "floor"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly gap: "ink";
        readonly stone: "slate";
        readonly pale: "mist";
        readonly shine: "white";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["kkkkkkkkkkkkkmwmmmkkkkkkkkkkkkkk", "kkkkkkkkkkkkkmwmmmskkkmsskkkmsss", "ksssskkkmmsskmmmmmskkmmssskkmmss", "kmmssskkmmsskmmmmskkksssssksssss", "kssssskssssskkssskkkkssssskkssss", "kssssskksssskkkkkkkkkkksskkkssss", "kkksskkkkkskkkkkkkkkmmmkkkkkkkkk", "mmkkkkmwmmkkkkkssskkwwmmskkkkkkk", "wwmmskmwmmsskkkmssskmmmmskkksssk", "mmmmskmmmmmskksmssskmmmmskkmmssk", "mmmmskmmmmskkkssssskmssskkkssssk", "mssskkkssskkkkksssskkkkkkkkssssk", "kkkkkkkkkkkkkkkksskkkkkkkkkksssk", "kkkskkkkkkkkkkmmkkkkkkkkkkmmkkkk", "kksssskkkskkmwwmmskkkkskkmwwmmsk", "kkmmsskkmsskkwmmmskkkmsskmwmmmsk", "kkssssksmmsskmmmmskksmssskmmmmsk", "kksssskssssskmssskkkssssskmssskk", "kksssskssssskkkkkkkkssssskkkkkkk", "kkkkkkkkkkkkkkkkkkkkksskkkkkkkkk", "kwmmskmwwmmkkwwmmskkkkksskkksssk", "kwmmskmmmmmskwwmmskkkmmsskkkmmsk", "kmmmskmmmmmkmmmmmskkksmsssksssss", "ksmsskkmmmskkmmmsskkkssssskkssss", "kkkkkkkksskkkkkkkkkkksssskkkssss", "kkkkkkkkkkkkkkkkkkkkkksskkkkkkkk", "kkkkkkkmmmkkkmmmmkkkkkkkkkkkkssk", "kkssskwwmmskmwwmmskkkssskkkkmmss", "ksmmskmmmmmkmmmmmskksmssskkkmmss", "ksmssskmmmskmmmmmskksmssskkkssss", "ksssssksssskkmssskkkssssskkkssss", "kkssskkkkkkkkkkkkkkkksssskkkkssk"];
        readonly legend: {
            readonly k: "gap";
            readonly s: "stone";
            readonly m: "pale";
            readonly w: "shine";
        };
    }];
} | {
    readonly id: "gravel";
    readonly about: "Loose gravel: small grey stones packed over dark grit";
    readonly tags: readonly ["surface", "stone", "gravel", "ground", "path"];
    readonly size: readonly [16, 16];
    readonly tile: true;
    readonly palette: {
        readonly grit: "night";
        readonly stone: "slate";
        readonly light: "mist";
    };
    readonly layers: readonly [{
        readonly pattern: "cobbles";
        readonly colors: readonly ["grit", "stone", "stone", "light"];
        readonly cells: 5;
        readonly gap: 0.8;
        readonly seed: 51;
    }];
} | {
    readonly id: "geode";
    readonly about: "A crystal floor: blue crystal facets, each split into a lit and a shaded face, over dark seams";
    readonly tags: readonly ["surface", "stone", "crystal", "floor", "ground"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly seam: "navy";
        readonly facet: "blue";
        readonly lit: "sky";
        readonly glint: "cyan";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["bbbbbbbnbbbbbbbnnnnnnnnnnnnkkknb", "bbbbbbknbbbbbkkkknbbbbbbbbnkkkkn", "bbbkkkknbbbbkkkkknbbbbbbbnnkkkkn", "nkkkkkknbbkkkkkknbbbbbbbbnkkkkkk", "nkkkkkknkkkkkkkknbbbbbbccnkkkkkb", "bnkkkkknkkkkkkkknbbbbccccnkbbbbb", "bnnkkkknnkkkknnnnbbccccccnbbbbbb", "bbnnnnbbnnnnncbbbnccccccnnbbbbbb", "bnbbbbbbbnccccbbbnnnnnnnnnbbbbbb", "nnbbbbbbbnccccbbbbnbbbbbbbnnnnnn", "nnkbbbbbbnccccbbbbnbbbbbbbnbbbkk", "knkkbbbbbnccccbbbbncbbbbbnbbbbkk", "knkkkbbbbncccbbbbbncccbbbnbbbbkk", "knkkkbbbbncccbbbbbncccccbnbbbkkk", "knkkkkbbbncccbbbbnnncccccnbbbkkk", "nnnkkkkbbncccbbbnbbbnnccnnbbbkkk", "nkknnkkkbnnccbnnbbbbbnnnnbbbbnnn", "nkkkknnknnbnnnnkkbbbbbbnnnnnnbbn", "nkkkkbbnbbbbbbnkkkbbbbbbnbbbbbbn", "nbbbbbbnbbbbbbnkkkkbbbbbnbbbbbbk", "nbbbbbbnbbbbbbbnkkkkbbbbnbbbbbbk", "nbbbbbnbbbbbbbknkkkkkbbnnnnbbbbk", "nbbbbbnbbbbbbkkknkkkkknncccnnbkk", "nbbbnnbnbbbkkkkknnknnnnncccccnnn", "nnnnbbbbnbkkkknnnnnkkkkncccccccn", "bnbbbbbkknknnnkkkknkkkkkncbbbbbb", "bnbbbbbkkknkkkkkkknbkkkknbbbbbbb", "nbbbbbbkkknbbkkkkknbbkkkknbbbbbb", "nbbbbbbkkknbbbbbkkbbbbbkknbbbbbb", "nnnbbbkkkknbbbbbbbbbbbbbbnnbbbbn", "bbbnnbkkknnnnbbbbnnbbbbbbbnbbbnn", "bbbbbnnnnbbbbnnnbnnbbbbbbbnnnnnb"];
        readonly legend: {
            readonly n: "seam";
            readonly b: "facet";
            readonly k: "lit";
            readonly c: "glint";
        };
    }];
} | {
    readonly id: "ruined-mosaic";
    readonly about: "A ruined mosaic: a lattice of teal tesserae on a sand field, patches lost to bare earth";
    readonly tags: readonly ["surface", "stone", "mosaic", "floor", "ruin"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly earth: "plum";
        readonly grout: "orange";
        readonly motif: "teal";
        readonly field: "sand";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["gggggppggpppppgggggppppggggggggg", "gtttgpssgsppppssgtttgsssgsssgsss", "gttpgsssgsssppssgtttgsssgsssgsss", "gtttppssgsssgpssgtttgsssgsssgsss", "gggggpgggggggggggggggggggggggggg", "gsssgpptgsssgtttgsssgtttgsssgttt", "gsssgpptgsssgtttgsssgtttgsssgttt", "gsssgpptgsssgtttgsssgtttgsssgttt", "ppgggppggggggggggggggggggggggggp", "ppppgsssgtttgsssgsssgsssgtttgssp", "ppppgsssgtttgsssgsppppppgtttgssp", "ppppgsssgtttgsssgsppppppgtttgssp", "pppggggggggggggggggpppppgggggggp", "ppssgtttgsssgtttgsssppppgsssgtpp", "psssgtttgsssgtttgsssgpppgsssgttp", "gsssgtttgsssgtttgsssgtttgsssgttt", "ggpggggggggggggggggggggggggggggg", "gtptgsssgsssgsssgtttgsssgsssgsss", "gtttgsssgsssgsssgtttgsssgsssgsss", "gtttgsssgsppgsssgtttgpssgsssgsss", "ggggggggppppgggggggggpggggppppgg", "gsssgpppppppptttgsssgpttgppppppp", "gsssgtppppppgtttgsssgtttgppppptt", "gsssgtttgsssgtttgsssgtttgsssgttt", "gggggggggggggggggggggggggggggggg", "gssspppsgtttgssspsssgsssgtttgsss", "gsspppppgtttgsssgsssgsssgtttgsss", "gsspppppgtttgsssgsssgsssgtttgsss", "gggppppgggggggggpggggggggggggggg", "gsppptttgsssgtttpsssgtttgsssgttt", "ppppgtttgsssgtttgsssgtttgsssgttp", "gpssgtttgsssgtttgsssgtttgsssgttt"];
        readonly legend: {
            readonly p: "earth";
            readonly g: "grout";
            readonly t: "motif";
            readonly s: "field";
        };
    }];
} | {
    readonly id: "diagonal-tiles";
    readonly about: "Floor tiles set on the diagonal: diamonds in two alternating tones over dark joints";
    readonly tags: readonly ["surface", "stone", "floor"];
    readonly size: readonly [16, 16];
    readonly tile: true;
    readonly palette: {
        readonly joint: "night";
        readonly dark: "slate";
        readonly light: "mist";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["jjsssssssssssssj", "mjjsssssssssssjj", "mmjjsssssssssjjm", "mmmjjsssssssjjmm", "mmmmjjsssssjjmmm", "mmmmmjjsssjjmmmm", "mmmmmmjjsjjmmmmm", "mmmmmmmjjjmmmmmm", "mmmmmmmjjjmmmmmm", "mmmmmmjjsjjmmmmm", "mmmmmjjsssjjmmmm", "mmmmjjsssssjjmmm", "mmmjjsssssssjjmm", "mmjjsssssssssjjm", "mjjsssssssssssjj", "jjsssssssssssssj"];
        readonly legend: {
            readonly j: "joint";
            readonly s: "dark";
            readonly m: "light";
        };
    }];
} | {
    readonly id: "checker-marble";
    readonly about: "A marble checkerboard of slate and pale grey squares, the dark ones veined darker, each square cut from its own slab";
    readonly tags: readonly ["surface", "stone", "marble", "floor"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly dark: "slate";
        readonly vein: "night";
        readonly light: "mist";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["nnnnwwwwvvnnwwwwnnnnwwwwnnnnwwww", "nnnnwwwwnvvnwwwwnnnnwwwwnnnnwwww", "nvvvwwwwnnvvwwwwnnnnwwwwnnnnwwww", "vvnnwwwwnnnnwwwwnnnnwwwwnnnnwwww", "wwwwnnvvwwwwnnnnwwwwvvnnwwwwnnnn", "wwwwnvvnwwwwnnnnwwwwnvvnwwwwnnnn", "wwwwvvnnwwwwnnnnwwwwnnvvwwwwnnnn", "wwwwnnnnwwwwnnnnwwwwnnnnwwwwnnnn", "nnnnwwwwnnvnwwwwnnnnwwwwnnnnwwww", "nnnnwwwwnnvvwwwwnnnnwwwwnnnnwwww", "nvvvwwwwnnnnwwwwnnnnwwwwnnnnwwww", "vvnnwwwwnnnnwwwwnnnnwwwwnnnnwwww", "wwwwnnnnwwwwnnvnwwwwnnnnwwwwnnnn", "wwwwnnnnwwwwnnvvwwwwnnnnwwwwnnnn", "wwwwnnnnwwwwnnnnwwwwnnnnwwwwvvnn", "wwwwnnnnwwwwnnnnwwwwnnnnwwwwnvnn", "nnnnwwwwnnnnwwwwnnnnwwwwnnnnwwww", "nnnnwwwwnnnnwwwwnnnnwwwwnnnnwwww", "nnnnwwwwnnnnwwwwnnnnwwwwnnnnwwww", "nnnnwwwwnnnnwwwwnnnnwwwwnnnnwwww", "wwwwnnnnwwwwnnnnwwwwnnvnwwwwnnnn", "wwwwnnnnwwwwnnnnwwwwnnvvwwwwvvvn", "wwwwnnnnwwwwnnnnwwwwnnnnwwwwnnvv", "wwwwnnnnwwwwnnnnwwwwnnnnwwwwnnnv", "nnnnwwwwvvnnwwwwnnvnwwwwnnnnwwww", "nnnnwwwwnvvnwwwwnnvvwwwwvvvnwwww", "nnnnwwwwnnvvwwwwnnnnwwwwnnvvwwww", "nnnnwwwwnnnnwwwwnnnnwwwwnnnvwwww", "wwwwnnnnwwwwnnnnwwwwnnnnwwwwnvnn", "wwwwnnnnwwwwnnnnwwwwnnnnwwwwnvnn", "wwwwnnnnwwwwnvvvwwwwnnnnwwwwnvvn", "wwwwnnnnwwwwvvnnwwwwnnnnwwwwnnvn"];
        readonly legend: {
            readonly n: "dark";
            readonly v: "vein";
            readonly w: "light";
        };
    }];
} | {
    readonly id: "hex-tiles";
    readonly about: "Pale hexagonal floor tiles over grey joints, each lit along its upper edges";
    readonly tags: readonly ["surface", "stone", "floor"];
    readonly size: readonly [16, 16];
    readonly tile: true;
    readonly palette: {
        readonly joint: "slate";
        readonly tile: "mist";
        readonly light: "white";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["mjjjljjjmjjjljjj", "jjllmlljjjllmllj", "jlmmmmmljlmmmmml", "jmmmmmmmjmmmmmmm", "jmmmmmmmjmmmmmmm", "jmmmmmmmjmmmmmmm", "jmmmmmmmjmmmmmmm", "jjmmmmmjjjmmmmmj", "ljjjmjjjljjjmjjj", "mlljjjllmlljjjll", "mmmljlmmmmmljlmm", "mmmmjmmmmmmmjmmm", "mmmmjmmmmmmmjmmm", "mmmmjmmmmmmmjmmm", "mmmmjmmmmmmmjmmm", "mmmjjjmmmmmjjjmm"];
        readonly legend: {
            readonly j: "joint";
            readonly m: "tile";
            readonly l: "light";
        };
    }];
} | {
    readonly id: "mosaic";
    readonly about: "A mosaic field: small square tesserae in mixed blues, no border, for baths and temples";
    readonly tags: readonly ["surface", "stone", "mosaic", "floor"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly grout: "night";
        readonly deep: "blue";
        readonly tile: "sky";
        readonly light: "cyan";
    };
    readonly layers: readonly [{
        readonly pattern: "tiles";
        readonly colors: readonly ["grout", "deep", "tile", "tile", "light"];
        readonly w: 4;
        readonly h: 4;
        readonly bevel: 0;
        readonly seed: 71;
    }];
} | {
    readonly id: "terracotta";
    readonly about: "Small square terracotta floor tiles, each lit along its top, over dark joints";
    readonly tags: readonly ["surface", "clay", "floor"];
    readonly size: readonly [16, 16];
    readonly tile: true;
    readonly palette: {
        readonly joint: "plum";
        readonly clay: "red";
        readonly tile: "orange";
    };
    readonly layers: readonly [{
        readonly pattern: "tiles";
        readonly colors: readonly ["joint", "clay", "tile", "tile"];
        readonly w: 4;
        readonly h: 4;
        readonly seed: 81;
    }];
} | {
    readonly id: "grate";
    readonly about: "A grated metal floor: a grid of bars over dark square holes";
    readonly tags: readonly ["surface", "metal", "floor"];
    readonly size: readonly [16, 16];
    readonly tile: true;
    readonly palette: {
        readonly hole: "ink";
        readonly depth: "night";
        readonly bar: "slate";
        readonly lit: "mist";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["mmmmmmmmmmmmmmmm", "snnnsnnnsnnnsnnn", "skkkskkkskkkskkk", "skkkskkkskkkskkk", "mmmmmmmmmmmmmmmm", "snnnsnnnsnnnsnnn", "skkkskkkskkkskkk", "skkkskkkskkkskkk", "mmmmmmmmmmmmmmmm", "snnnsnnnsnnnsnnn", "skkkskkkskkkskkk", "skkkskkkskkkskkk", "mmmmmmmmmmmmmmmm", "snnnsnnnsnnnsnnn", "skkkskkkskkkskkk", "skkkskkkskkkskkk"];
        readonly legend: {
            readonly k: "hole";
            readonly n: "depth";
            readonly s: "bar";
            readonly m: "lit";
        };
    }];
} | {
    readonly id: "deck";
    readonly about: "A wooden deck: long boards with dark caulked seams, grain streaks and nails by each butt joint, for ships, docks and piers";
    readonly tags: readonly ["surface", "wood", "floor"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly seam: "night";
        readonly grain: "red";
        readonly wood: "orange";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn", "ooooonoooorrrrrroooooooooooooooo", "ooonrnrnrroooooooooooooooooooooo", "ooooonoooooooooooooooooooooooooo", "nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn", "rrrrroooonrrrrroooooooooonoooooo", "oooooornrnrnooooooooooonononoooo", "rrroooooonooooooooooooooonooooor", "nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn", "rrrrrooooooooooooooooooooooooono", "nooorrrrrooooooooooooooooooonono", "ooooooooooooooooorrrooorrroooono", "nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn", "onooooooorrrrrrrrrrroooooooooooo", "ononooooooooooooooooooooooorrrrn", "onoooooooooooooooooooooooooooooo", "nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn", "oornrrrooooorrrrrrrooooooooooooo", "onononoooooooooooooooooooooooooo", "ooonoooooooooooorrrooooooooooooo", "nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn", "rrrrroooorrrrrrnoooooooooooooooo", "ooorrrrrooooonononoooooooooooooo", "ooooooooooooooonorrroooooooooooo", "nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn", "oooooooooorrrrrrnooooooooooooooo", "oooooooooooooonononooooooorrrroo", "rrrooooooooooooonooorrroooooooor", "nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn", "ooooooonrrrrrrrrrrrooooooooooooo", "ooooonononoooooooooooooooorrrroo", "roooooonooooooooooooooooooooorrr"];
        readonly legend: {
            readonly n: "seam";
            readonly r: "grain";
            readonly o: "wood";
        };
    }];
} | {
    readonly id: "slate-roof";
    readonly about: "A slate roof: grey slates of mixed widths in staggered courses, a lit lower edge and a shadow under each course";
    readonly tags: readonly ["surface", "stone", "slate", "roof"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly shadow: "ink";
        readonly gap: "night";
        readonly slate: "slate";
        readonly edge: "mist";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk", "snsssssnssssnssssnsssssnssssnsss", "snsssssnssssnssssnsssssnssssnsss", "mnmmmmmnmmmmnmmmmnmmmmmnmmmmnmmm", "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk", "snnnnnnnnsssssssnsssssnssssnssss", "snnnnnnnnsssssssnsssssnssssnssss", "mnssssssnmmmmmmmnmmmmmnmmmmnmmmm", "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk", "sssnssssssnssssnssssssssnssssnss", "sssnssssssnssssnssssssssnssssnss", "mmmnmmmmmmnmmmmnmmmmmmmmnmmmmnmm", "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk", "ssssnssssnsssssssnnnnnnnnssssnss", "ssssnssssnsssssssnnnnnnnnssssnss", "mmmmnmmmmnmmmmmmmnssssssnmmmmnmm", "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk", "snnnnnnnnssssssnsssssnnnnnnnnsss", "snnnnnnnnssssssnsssssnnnnnnnnsss", "mnssssssnmmmmmmnmmmmmnssssssnmmm", "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk", "nnnnnnnnnnnnnnnssssnnnnnnnnnnnnn", "nnnnnnnnnnnnnnnssssnnnnnnnnnnnnn", "snssssssnsssssnmmmmnssssssnsssss", "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk", "nnnnnssssnsssssssnnnnnnnnssssnnn", "nnnnnssssnsssssssnnnnnnnnssssnnn", "ssssnmmmmnmmmmmmmnssssssnmmmmnss", "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk", "snsssssnsssssnsssssnsssssssnssss", "snsssssnsssssnsssssnsssssssnssss", "mnmmmmmnmmmmmnmmmmmnmmmmmmmnmmmm"];
        readonly legend: {
            readonly k: "shadow";
            readonly n: "gap";
            readonly s: "slate";
            readonly m: "edge";
        };
    }];
} | {
    readonly id: "clay-tiles";
    readonly about: "Clay barrel tiles: rounded caps over channels in columns, a lit lip and a shadow at each course";
    readonly tags: readonly ["surface", "clay", "roof"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly shadow: "plum";
        readonly clay: "red";
        readonly light: "orange";
        readonly shine: "sand";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["osorpppposorpppposorpppprorppppp", "osorprrrosorprrrosorprrrrorpprrr", "osorprrrosorprrrosorprrrrorpprrr", "osorprrrosorprrrosorprrrrorpprrr", "osorprrrosorprrrosorprrrrorpprrr", "osorprrrosorprrrosorprrrrorpprrr", "ssssrrrrssssrrrrssssrrrroooorrrr", "pppppppppppppppppppppppppppppppp", "rorppppposorpppprorppppposorpppp", "rorpprrrosorprrrrorpprrrosorprrr", "rorpprrrosorprrrrorpprrrosorprrr", "rorpprrrosorprrrrorpprrrosorprrr", "rorpprrrosorprrrrorpprrrosorprrr", "rorpprrrosorprrrrorpprrrosorprrr", "oooorrrrssssrrrroooorrrrssssrrrr", "pppppppppppppppppppppppppppppppp", "osorpppposorpppposorpppposorpppp", "osorprrrosorprrrosorprrrosorprrr", "osorprrrosorprrrosorprrrosorprrr", "osorprrrosorprrrosorprrrosorprrr", "osorprrrosorprrrosorprrrosorprrr", "osorprrrosorprrrosorprrrosorprrr", "ssssrrrrssssrrrrssssrrrrssssrrrr", "pppppppppppppppppppppppppppppppp", "osorpppposorpppposorpppprorppppp", "osorprrrosorprrrosorprrrrorpprrr", "osorprrrosorprrrosorprrrrorpprrr", "osorprrrosorprrrosorprrrrorpprrr", "osorprrrosorprrrosorprrrrorpprrr", "osorprrrosorprrrosorprrrrorpprrr", "ssssrrrrssssrrrrssssrrrroooorrrr", "pppppppppppppppppppppppppppppppp"];
        readonly legend: {
            readonly p: "shadow";
            readonly r: "clay";
            readonly o: "light";
            readonly s: "shine";
        };
    }];
} | {
    readonly id: "wood-shakes";
    readonly about: "Wooden shakes: long split shingles of uneven width in courses of uneven height, their lit butts ragged, stepping up and down";
    readonly tags: readonly ["surface", "wood", "roof", "wall"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly shadow: "plum";
        readonly wood: "red";
        readonly light: "orange";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["oorrrrrprrrrrprpppppppppppppppoo", "pprrrrrprrrrrprrrrrprrrrrrrrpppp", "rprrrrrprrrrrprrrrrprrrrrrrrprrr", "rprrrrrprrrrrprrrrrprrrrrrrrprrr", "rprrrrrprrrrrprrrrrprrrrrrrrprrr", "rprrrrrprrrrrprrrrrprrrrrrrrprrr", "rpooooopooooopooooopooooooooprrr", "rpppppppppppppppppppppppppppprrr", "oprrrrprrrrprrrrprrrrrprrrrrpooo", "pprrrrprrrrprrrrprrrrrprrrrrpppp", "rprrrrprrrrprrrrprrrrrprrrrrrprr", "rprrrrprrrrprrrrprrrrrprrrrrrprr", "rprrrrprrrrprrrrprrrrrprrrrrrprr", "rprrrrprrrrprprrprrrrrprrrrrrprr", "rprrrrprrrrprprrpooooopooooooprr", "oprrrrprrrrprprrppppppppppppppoo", "ppoooopoooopoooorprrrrrprrrrrppp", "rppppppppppppppprprrrrrprrrrrprr", "rrrrprrrrrprrrrrrprrrrrprrrrrprr", "rrrrprrrrrprrrrrrprrrrrprrrrrprr", "rrrrprrrrrprrrrrrprrrrrprrrrrprr", "rrprrrrrprrrrrrprrrprrrrrprrrprr", "rrprrrrrprrrrrrprrrprrrrrprrrprr", "rrprrrrrprrrrrrprrrprrrrrprrrprr", "rrprrrrrprrrrrrprrrprrrrrprrrprr", "rrprrrrrprrrrrrprrrprrrrrprrrprr", "rrprrrrrprrrrrrprrrprrrrrprrrprr", "rrprrrrrprrrrrrprrrprrrrrprrrprr", "rrprrrrrprrrrrrprrrprrrrrprrrprr", "rrprrrrrprrrrrrprrrprrrrrprrrprr", "rrpooooopooooooprrrprrrrrprrrprr", "rrppppppppppppppooopooooopoooprr"];
        readonly legend: {
            readonly p: "shadow";
            readonly r: "wood";
            readonly o: "light";
        };
    }];
} | {
    readonly id: "mud";
    readonly about: "Wet mud: dark churned earth with puddles reflecting the sky";
    readonly tags: readonly ["surface", "earth", "mud", "ground"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly glint: "mist";
        readonly puddle: "slate";
        readonly mud: "plum";
        readonly earth: "red";
    };
    readonly layers: readonly [{
        readonly pattern: "noise";
        readonly colors: readonly ["glint", "puddle", "puddle", "mud", "mud", "mud", "earth", "earth"];
        readonly scale: 5;
        readonly octaves: 3;
        readonly seed: 101;
    }];
} | {
    readonly id: "cracked-earth";
    readonly about: "Dry cracked earth: sun-baked clay plates curling up at lit edges, split by a network of dark cracks";
    readonly tags: readonly ["surface", "earth", "ground", "desert"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly crack: "plum";
        readonly clay: "orange";
        readonly light: "sand";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["soooooopsooooooopsooooooppsoooop", "soooooppsooooooopsoooooosppsooop", "soooppppppsooooopppsooooppsppppp", "ppppsppssspppsopsssppsopssossssp", "ssssoppsoosspppsooossppsooooooop", "soooospsoooosspsooooospsooooooop", "sooooospsooooopsoooooopsooooooop", "soooooopsooooopsoooooopsooooooop", "soooooospsoooopsoooooppsooooooop", "soooooooppppppppsooooppsoooooopp", "psoooooopssssssppsoooppsooooppsp", "ppsooppppsooooospppppsppsoppssos", "sppppssspsoooooospsssossppssoooo", "ospssooopsoooooopsoooooospsooooo", "oopsoooospsooooopsooooooopsooooo", "oopsooooopsooooppsooooooopsooooo", "oopsoooooppsooopsoooooooopppsooo", "oppppsooopppppppsoooooooppspppso", "pssspppspsssssspsooooooopsossppp", "sooossppsoooooospsoopppppsooossp", "sooooospsooooooopppppssspsooooop", "soooooopsooooooopssssoooppsoooop", "soooooopsooooooopsoooooospsoooop", "soooooppsooooooopsoooooooppsooop", "psooooppsooooooopsooooooospppsop", "ppppppppsooooooopsoooooooppspppp", "sssssssppsoooopppsoooooopssosssp", "soooooosppppppppppppppppsoooooop", "soooooooppsssssspssssspsooooooop", "sooooooopsoooooopsoooospsoooooop", "sooooooopsoooooopsooooopsoooooop", "soooooopsooooooopsooooospsooooop"];
        readonly legend: {
            readonly p: "crack";
            readonly o: "clay";
            readonly s: "light";
        };
    }, {
        readonly pattern: "cracks";
        readonly colors: "crack";
        readonly count: 5;
        readonly length: 5;
        readonly seed: 112;
    }];
} | {
    readonly id: "cinders";
    readonly about: "Ash and cinders: grey ash drifts with black cinders and a few small embers still glowing";
    readonly tags: readonly ["surface", "ash", "ground", "fire"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly cinder: "night";
        readonly ash: "slate";
        readonly light: "mist";
        readonly ember: "red";
        readonly hot: "orange";
    };
    readonly layers: readonly [{
        readonly pattern: "noise";
        readonly colors: readonly ["cinder", "ash", "ash", "ash", "ash", "light", "light"];
        readonly scale: 6;
        readonly octaves: 2;
        readonly seed: 124;
    }, {
        readonly pattern: "scatter";
        readonly colors: "cinder";
        readonly count: 12;
        readonly size: 2;
        readonly seed: 122;
    }, {
        readonly pattern: "scatter";
        readonly colors: readonly ["ember", "hot"];
        readonly count: 5;
        readonly size: 1;
        readonly seed: 123;
    }];
} | {
    readonly id: "lava-crust";
    readonly about: "Cooled lava crust: black plates split by dark cracks that glow red, then orange, only where they meet";
    readonly tags: readonly ["surface", "lava", "ground", "fire"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly crust: "ink";
        readonly crack: "plum";
        readonly glow: "red";
        readonly hot: "orange";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["kkkkkkrkkkkkkkkkrkkkkkkoorkrrork", "kkkkkkpkkkkkkkkkooppppproorkkrpk", "kkkkkkpkkkkkkkkkokkkkkkkkrkkkkpk", "kkkkkkpkkkkkkkkkrkkkkkkkkpkkkkkp", "kkkkkkrpkkkkkkkkrkkkkkkkkpkkkkkp", "rkkkkkorkkkkkkkokkkkkkkkkrkkkkkk", "oorppprokkkkkrooorkkkkkkrkkkkkkk", "okkkkkkkrkrprrrrorrkkkkkoopkkkkk", "kkkkkkkkkorkkkkppkkppkkrkkpppkkr", "kkkkkkkkkrkkkkkppkkkkookkkkkkpoo", "kkkkkkkkkpkkkkkppkkkkkrkkkkkkkkr", "kkkkkkkkrkkkkkkkpkkkkkrkkkkkkkkr", "kkkkkkkkokkkkkkkpkkkkkpkkkkkkkkp", "kkkkkkkrorpkkkkkpkkkkkpkkkkkkkkp", "kkkkkkrrkkpppkkkpkkkkkokkkkkkkkr", "kkkprookkkkkprrrrpkkrrorkkkkkkko", "orpkkrrkkkkkkkroooorpkkkroorppro", "rkkkkkpkkkkkkkkkookkkkkkkokkkkkk", "pkkkkkkpkkkkkkkkrkkkkkkkkpkkkkkk", "pkkkkkkpkkkkkkkkrkkkkkkkkpkkkkkk", "rkkkkkkkpkkkkkkkpkkkkkkkkpkkkkkk", "rkkkkkkkrrkkkkkpkkkkkkkkpkkkkkkk", "orkkkkkkkorrkkkrkkkkkkkkrkkkkkkk", "orppkkkkrkkkpprokkkkkkkkokkkkkkk", "kkkpprrokkkkkkkooppkkkroorpkkkkr", "kkkkkkokkkkkkkkrorprrookkkkppkrp", "kkkkkkrkkkkkkkkpkkkkkkrkkkkkkrok", "kkkkkkrkkkkkkkkpkkkkkkpkkkkkkkok", "kkkkkkpkkkkkkkkrkkkkkkkpkkkkkkrk", "kkkkkkpkkkkkkkkokkkkkkkpkkkkkkrk", "pppprorkkkppppookkkkkkkpkkkkkkoo", "kkkkkrorpppkkkkrkkkkkkkrrkkkkook"];
        readonly legend: {
            readonly k: "crust";
            readonly p: "crack";
            readonly r: "glow";
            readonly o: "hot";
        };
    }];
} | {
    readonly id: "swamp";
    readonly about: "Swamp water: murky green water under drifts of scum and specks of duckweed";
    readonly tags: readonly ["surface", "water", "swamp", "ground"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly deep: "night";
        readonly water: "teal";
        readonly scum: "green";
        readonly weed: "lime";
    };
    readonly layers: readonly [{
        readonly pattern: "noise";
        readonly colors: readonly ["deep", "water", "water", "water", "scum", "scum", "scum"];
        readonly scale: 8;
        readonly octaves: 2;
        readonly seed: 270;
    }, {
        readonly pattern: "scatter";
        readonly colors: "weed";
        readonly count: 10;
        readonly size: 1;
        readonly seed: 132;
    }];
} | {
    readonly id: "shallow-water";
    readonly about: "Shallow water: a net of bright ripple caustics over blue, deeper patches between, glints where ripples meet";
    readonly tags: readonly ["surface", "water", "ground"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly deep: "blue";
        readonly water: "sky";
        readonly ripple: "cyan";
        readonly glint: "white";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["kkkkkccckwkkkkkckkkkkkkkckkkkkkc", "kkkkkkkcwckkkkkkckkkkkkkkwcccccc", "kkkkkkkkckkkkkkkckkkkkkkckkkkkkc", "ckkkkbkkckkkkkkkkckkkkkkckkkkkkk", "ckkbbbbbwkkkkkkkkckkkkkkckkkkkkk", "kckbbbbbwckkkkkkkcckkkkckkkbbbkk", "kcbbbbbcbbcckkkkkkckkkkwckkbbbbk", "bcccccwbbbkkcckkkkwwcwwkkccbbbbb", "bcbbbbccbkkkkkccccckkcckkkkccbbb", "cbbbbbbcbkkkkkkkwkkkkkckkkkbbccb", "cbbbbbbcbkkkkkkkckkkkkckkkkbbbcw", "bbbbbbbbckkkkkkkckkkkkkckkkbbbbc", "bbbbbbbbckkkkkkkkkkkkkkckkkbbbbc", "bbbbbbbbbckkkkkckkkkkkkckkkkbccw", "ccbbbbbbbwcccccwcckkkkkkckccccbc", "bbccbbbbcbbbbkkckcckkkkkwckkkbbc", "bbbbccbcbbbbbkkckkkkcckckkkkkbbc", "bbbbbbwbbbbbkkkkkkkkkkcckkkkbbbc", "bbbbbbcbkkkkkkkkkkkkkkkckkkbbbbc", "bbbbbbbkkkkkkkckkkkkkkkckkbbbbbb", "bbbbbbbkkkkkkkckkkkkkkkckbbbbbcb", "bbbbbbbckkkkkkckkkkkkkkckbbbbbcb", "bbbbbbbwccccccwkkkkkkkkckbbbbbcb", "bbbbbcwkkkkkkkkwcccccccwkbccccwb", "wcccbkckkkkkkkkckkkkkkkkwbbbbbbc", "cbbbkkkckkkkkkckkkkkkkkkkkbbbbbb", "ckkkkkkckkkkkkckkkkkkkkckkbbbbbk", "kkkkkkkkkkkkkkckkkkkkkkckkbbbbkk", "kkkkkkkkckkkkkckkkkkkkkckkbbbkkk", "kkkkkkkkckkkkkckkkkkkccwkkkkkkkk", "kwkkkkkkkckkkcckkkccckkckkkkkkkk", "ckcckkkkkcwccccwcckkkkkkckkkkkkk"];
        readonly legend: {
            readonly b: "deep";
            readonly k: "water";
            readonly c: "ripple";
            readonly w: "glint";
        };
    }];
} | {
    readonly id: "wet-sand";
    readonly about: "Wet beach sand: dark damp sand with dry patches, sky-pale pools and a few shells";
    readonly tags: readonly ["surface", "sand", "beach", "ground"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly wet: "orange";
        readonly pool: "mist";
        readonly dry: "sand";
        readonly shell: "white";
    };
    readonly layers: readonly [{
        readonly pattern: "noise";
        readonly colors: readonly ["pool", "wet", "wet", "wet", "wet", "dry", "dry", "dry"];
        readonly scale: 8;
        readonly octaves: 2;
        readonly seed: 112;
    }, {
        readonly pattern: "scatter";
        readonly colors: "shell";
        readonly count: 4;
        readonly size: 1;
        readonly seed: 142;
    }];
} | {
    readonly id: "leaf-litter";
    readonly about: "Leaf litter: fallen autumn leaves in red, orange and gold, heaped over dark soil";
    readonly tags: readonly ["surface", "leaves", "ground", "nature"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly soil: "plum";
        readonly shade: "red";
        readonly leaf: "orange";
        readonly light: "sand";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["rprpppppppoooororrprrrprpppppppp", "rroppoororrrrooorprrrprrssoppppp", "oroooorossssoopprrrrprrssosppppp", "ooroorossoooopppppprrrssosspppps", "rroroorrssssopppppppppsosspppprr", "prroorrprrsroppppppppssssppppppp", "rrpprrprrsoorrpppppppsosppppssrr", "spprprrrroorprrppppppoorppppssos", "ooprrprrrpprrpoorpppooroppppsosr", "roorrrprrpooroororoooroorprpssro", "oroorrrrpooroorooorooooprprpooro", "ooroppppoorooroopooroopprprsooro", "pooossssorooooopppooropprprsooro", "pppssooooooppppppppoooppprpsooro", "ppppssssppppppppppssospppppsosop", "roopppppoorppppppssossppppppsppp", "oroopprrrroppppppsossppppppppppr", "ooroopppprrppppppssspppppppppprr", "rooroprrrrpppppppppppprrpppppppr", "ooooorrropppppppppprrrrrrppppppo", "rroorpppppprpppppprrpppprrpppprr", "oooprrrrpossoposspprrrrrprpppooo", "rrpprooppsosspsossppppprrrppoorr", "oprporooossossssossppppppppppooo", "prrpoooorossospssosppppppprrrrrr", "rrppoooroopsssppssrppppooooooorp", "orppporoooppppppporopprrrroororo", "roossoooooopppppporopppoooooooro", "opsossroosssspppporoppppppssssro", "rprsossossoooopoooropppppoooosso", "rprssosppssssooororrppppppssssoo", "rprpssspppppooororrprrrppppppppp"];
        readonly legend: {
            readonly p: "soil";
            readonly r: "shade";
            readonly o: "leaf";
            readonly s: "light";
        };
    }];
} | {
    readonly id: "meadow";
    readonly about: "A flower meadow: tall grass with light blades and white and yellow flowers dotted through it";
    readonly tags: readonly ["surface", "grass", "ground", "nature"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly shade: "teal";
        readonly grass: "green";
        readonly blade: "lime";
        readonly petal: "white";
        readonly bloom: "sand";
    };
    readonly layers: readonly [{
        readonly pattern: "noise";
        readonly colors: readonly ["shade", "grass", "grass", "grass"];
        readonly scale: 4;
        readonly octaves: 2;
        readonly seed: 151;
    }, {
        readonly pattern: "scatter";
        readonly colors: "blade";
        readonly count: 50;
        readonly size: 1;
        readonly shape: "blade";
        readonly seed: 152;
    }, {
        readonly pattern: "scatter";
        readonly colors: "petal";
        readonly count: 5;
        readonly size: 1;
        readonly shape: "star";
        readonly seed: 153;
    }, {
        readonly pattern: "scatter";
        readonly colors: "bloom";
        readonly count: 4;
        readonly size: 1;
        readonly shape: "star";
        readonly seed: 154;
    }];
} | {
    readonly id: "snow-drifts";
    readonly about: "Wind-blown snow: long wavy drift crests, each with a blue-grey shadow on its lee side";
    readonly tags: readonly ["surface", "snow", "ground"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly shadow: "mist";
        readonly snow: "white";
        readonly glint: "cyan";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["wwwwwwwwwwwwwwwwwwwwwwwmmmmwwwww", "wwwwwwwwwwwwwwwmmmmmmmmmmmmmwwww", "wwwwwwwwwwwwwmmwmmmmmmmmmmmmmmww", "mmmmmmwwwwwmmwwwwwwwwwmwwwwmmmmm", "mmmmmmmmmmmwwwwwwwwwwwwwwwwwmmmm", "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwmm", "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww", "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwc", "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww", "wwwwwmmmmmmwwwwwwwwwwwwwwwwwwwww", "wwwmmmmmmmmmmwwwwwwwwwwwwwwwwwww", "mmmmmmwwwwwwwmmmmmwwwwwwwwwwwwwm", "mmmmmwcwwwwwwwwwwwmmwwwwwwwmmmmm", "mmmwwwwwwwwwwwwwcwwwmmwwwwmmmmmm", "wwwwwwwwwwwwwwwwwwwwwwmmmmmmmmmw", "mmwwwwwwwwwwwwwwwwwwwwmmmmwwwwwm", "mmmmwwwwwwwwwwwwwwwwwwwwwwwwwmmm", "wmmmmmmwwwwwwwwwwwwwwwwwwwmmmmmw", "wwmmmmmmmmmmwwwwwwwwmmmmmmwwmwww", "wwwwmmmmmmmmmmwwwwwmwwwwwwwwwwww", "wwwwwwwmmmmmmmmmmmmwwwwwwwwwwwww", "wwwwwwwwwwwwwwmmmwwwwwwwwwwwwwww", "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww", "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww", "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww", "wwwwwwwwwwwwwwwwwwwwwwwwwwmmwwww", "wwwwwwwmmmmmwwwwwwwwwwwwwmmmmmww", "wwwwwwmwwwmmmmwwwwwwwwwmmmwwmmmw", "wwwwwmwwwwwwmmmmmmwwwmmmmmwwwwmm", "mwwmmwwwwwwwwwmmmmmmmmmmmwwwwwwm", "wmmwwwwwwwwwwwwwmmmmmmmwwwwwwwww", "wwwwwwwwwwwwwwwwwwmmmwwwwwwwwwww"];
        readonly legend: {
            readonly m: "shadow";
            readonly w: "snow";
            readonly c: "glint";
        };
    }];
} | {
    readonly id: "frozen-mud";
    readonly about: "Frozen mud: dark rutted earth rimed with frost, ice in the hollows";
    readonly tags: readonly ["surface", "earth", "mud", "snow", "ground"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly rut: "night";
        readonly mud: "plum";
        readonly rime: "slate";
        readonly frost: "mist";
        readonly ice: "white";
    };
    readonly layers: readonly [{
        readonly pattern: "noise";
        readonly colors: readonly ["rut", "mud", "mud", "mud", "mud", "rime", "rime", "frost", "frost", "ice"];
        readonly scale: 8;
        readonly octaves: 2;
        readonly seed: 81;
    }, {
        readonly pattern: "cracks";
        readonly colors: "rut";
        readonly count: 4;
        readonly length: 8;
        readonly seed: 162;
    }];
} | {
    readonly id: "leather";
    readonly about: "Leather: mottled hide with creases, panels joined by stitched seams";
    readonly tags: readonly ["surface", "leather", "cloth"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly crease: "plum";
        readonly hide: "red";
        readonly sheen: "orange";
        readonly thread: "sand";
    };
    readonly layers: readonly [{
        readonly pattern: "noise";
        readonly colors: readonly ["hide", "hide", "hide", "hide", "hide", "hide", "sheen", "sheen"];
        readonly scale: 6;
        readonly octaves: 2;
        readonly seed: 171;
    }, {
        readonly pattern: "cracks";
        readonly colors: "crease";
        readonly count: 6;
        readonly length: 4;
        readonly seed: 172;
    }, {
        readonly pixels: readonly [".............t.s.t..............", ".............t.s.t..............", "...............s................", "...............s................", ".............t.s.t..............", ".............t.s.t..............", "...............s................", "...............s................", ".............t.s.t..............", ".............t.s.t..............", "...............s................", "...............s................", ".............t.s.t..............", "tt..tt..tt..t..s....tt..tt..tt..", "...............s................", "ssssssssssssssssssssssssssssssss", "...............s................", "tt..tt..tt..t..s....tt..tt..tt..", "...............s................", "...............s................", ".............t.s.t..............", ".............t.s.t..............", "...............s................", "...............s................", ".............t.s.t..............", ".............t.s.t..............", "...............s................", "...............s................", ".............t.s.t..............", ".............t.s.t..............", "...............s................", "...............s................"];
        readonly legend: {
            readonly s: "crease";
            readonly t: "thread";
        };
    }];
} | {
    readonly id: "burlap";
    readonly about: "Burlap: a coarse loose weave of thick fibres, dark holes between the threads";
    readonly tags: readonly ["surface", "burlap", "cloth"];
    readonly size: readonly [16, 16];
    readonly tile: true;
    readonly palette: {
        readonly hole: "plum";
        readonly shade: "red";
        readonly fibre: "orange";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["oooroorroooroorr", "oooroorroooroorr", "rrrroorrrrrroorr", "rrrprrrprrrprrrp", "oorroooroorrooor", "oorroooroorrooor", "oorrrrrroorrrrrr", "rrrprrrprrrprrrp", "oooroorroooroorr", "oooroorroooroorr", "rrrroorrrrrroorr", "rrrprrrprrrprrrp", "oorroooroorrooor", "oorroooroorrooor", "oorrrrrroorrrrrr", "rrrprrrprrrprrrp"];
        readonly legend: {
            readonly p: "hole";
            readonly r: "shade";
            readonly o: "fibre";
        };
    }];
} | {
    readonly id: "chainmail";
    readonly about: "Chainmail: interlocking iron rings in staggered rows, lit on their upper sides";
    readonly tags: readonly ["surface", "metal", "chainmail", "cloth"];
    readonly size: readonly [16, 16];
    readonly tile: true;
    readonly palette: {
        readonly gap: "ink";
        readonly shadow: "night";
        readonly ring: "slate";
        readonly light: "mist";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["kdlldkkkkdlldkkk", "dkkkkddddkkkkddd", "lkkkkllllkkkklll", "kmddlkkkkmddlkkk", "kdlldkkkkdlldkkk", "dkkkkddddkkkkddd", "lkkkkllllkkkklll", "kmddlkkkkmddlkkk", "kdlldkkkkdlldkkk", "dkkkkddddkkkkddd", "lkkkkllllkkkklll", "kmddlkkkkmddlkkk", "kdlldkkkkdlldkkk", "dkkkkddddkkkkddd", "lkkkkllllkkkklll", "kmddlkkkkmddlkkk"];
        readonly legend: {
            readonly k: "gap";
            readonly d: "shadow";
            readonly m: "ring";
            readonly l: "light";
        };
    }];
} | {
    readonly id: "fur";
    readonly about: "Brown fur: short overlapping tufts of hair, lighter at the tips, over a dark undercoat";
    readonly tags: readonly ["surface", "fur", "cloth", "nature"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly under: "plum";
        readonly hair: "red";
        readonly tip: "orange";
        readonly light: "sand";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["pppppppprrrrprppprrospprrppprsrr", "pppppppproroprrprpsosrprrppposop", "ppppprpprrrrpprprpspprporppoopop", "prppprppprpoppooorpprrrooppppppp", "prppprrpporoppoorrppoprorppppppp", "prrppprppoorpprrrrppossrpppppppp", "rpopppoprrorpposrrpprspspppppppp", "rpopppooooooprosooprrpssprppprpp", "oorppppporrpprpooppopprrrrprprpp", "porppppoopoprrpppppopprrroorprrp", "prrpprppooopsppppppprpoorsorrprp", "poppprpoopppsppppppprpporspropop", "porprrprpprppppppprprrppoppropoo", "pprprprrpprrppppprrrprrpoooopppp", "prrpsprppprrrppprrooporprroppppp", "popsspopppporppproooroorropppppp", "poprpooppppoorrpooopopprpopppppp", "ppporrpppprrorrppooroproprpppppp", "ppoosrprpprrpsrrpporrpoorrprpppp", "pprrsrrrppooossrpprrrsopspprprpr", "pprrrprrrppooooopporpoopsprrprpr", "rprroooprprrporoopospppprpopprrr", "opprrooooropprrpprsspppprrooppop", "oppsoprrooopprprpopppprpoopoprop", "rrrssopopspppoprpopppprproopprrp", "rorppppoppppoorrrrpppprrsropprrr", "oorprrpppppppprporppppporsrprpoo", "orpprrppprppprsporrpppporssrrpoo", "popsooppprpppssppropppprooposspr", "oopsopppoopppoopprorppprpopopsro", "opppppppoprpppoppssrpppoopppproo", "oppppppprrrpprppprsrrpppoppprrrr"];
        readonly legend: {
            readonly p: "under";
            readonly r: "hair";
            readonly o: "tip";
            readonly s: "light";
        };
    }];
} | {
    readonly id: "scales";
    readonly about: "Scales: overlapping rounded green scales in staggered rows, dark rims, lit on top";
    readonly tags: readonly ["surface", "scales", "cloth", "nature"];
    readonly size: readonly [16, 16];
    readonly tile: true;
    readonly palette: {
        readonly rim: "teal";
        readonly scale: "green";
        readonly light: "lime";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["dlllmmmddlllmmmd", "dlllmmmddlllmmmd", "ddmmmmddddmmmmdd", "mddddddlmddddddl", "mmmddlllmmmddlll", "mmmddlllmmmddlll", "mmddddmmmmddddmm", "dddlmddddddlmddd", "dddlmddddddlmddd", "mmddddllmmddddll", "mmmddlllmmmddlll", "mmmddlllmmmddlll", "mmmddlllmmmddlll", "mmmddlllmmmddlll", "mmddddmmmmddddmm", "dddlmddddddlmddd"];
        readonly legend: {
            readonly d: "rim";
            readonly m: "scale";
            readonly l: "light";
        };
    }];
} | {
    readonly id: "rune-floor";
    readonly about: "A rune floor: dark stone slabs in staggered courses, half of them carved with a faint teal rune, each set its own way";
    readonly tags: readonly ["surface", "stone", "magic", "floor"];
    readonly size: readonly [64, 64];
    readonly tile: true;
    readonly palette: {
        readonly joint: "ink";
        readonly slab: "night";
        readonly rune: "teal";
    };
    readonly layers: readonly [{
        readonly pattern: "bricks";
        readonly colors: readonly ["joint", "slab"];
        readonly w: 16;
        readonly h: 16;
        readonly offset: 0.5;
        readonly bevel: 0;
        readonly seed: 181;
    }, {
        readonly pixels: readonly ["................................................................", "................................................................", "................................................................", "................................................................", ".......t........................................................", ".......tt.......................................................", ".......t.t............................t.....t...................", ".......t...............................t.t.t....................", ".....t.t................................t.t.....................", "......tt...............................t.t.t....................", ".......t..............................t.....t...................", "................................................................", "................................................................", "................................................................", "................................................................", "................................................................", "................................................................", "................................................................", "................................................................", "................................................................", "...............t................................................", "..............t.t...............................................", ".............t...t..............................................", "..............t.t............................ttttttt............", "...............t..............................t...t.............", "..............t.t..............................ttt..............", ".............t...t............................t...t.............", ".............................................ttttttt............", "................................................................", "................................................................", "................................................................", "................................................................", "................................................................", "................................................................", "................................................................", "................................................................", "..........................................t.....................", "...........t..............................t.....................", "...........t..............................tt....................", "...........t..............................t.t...................", "...........t..............................tt....................", "..........ttt.............................t.....................", ".........t.t.t............................t.....................", ".........t.t.t..................................................", "................................................................", "................................................................", "................................................................", "................................................................", "................................................................", "................................................................", "................................................................", ".............................................................t..", "............................t...t...........................t...", "tt...........................t.t...........................ttttt", "t.............................t.................................", ".............................t.t...............................t", "..............................t.................................", ".............................t.t................................", "............................t...t...............................", "................................................................", "................................................................", "................................................................", "................................................................", "................................................................"];
        readonly legend: {
            readonly t: "rune";
        };
    }];
} | {
    readonly id: "starfield";
    readonly about: "The void: black space with faint navy and plum nebulae and scattered stars";
    readonly tags: readonly ["surface", "void", "magic", "sky"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly void: "ink";
        readonly nebula: "navy";
        readonly glow: "plum";
        readonly star: "white";
        readonly bright: "cyan";
    };
    readonly layers: readonly [{
        readonly pattern: "noise";
        readonly colors: readonly ["void", "void", "void", "void", "nebula", "nebula", "glow"];
        readonly scale: 4;
        readonly octaves: 3;
        readonly seed: 191;
    }, {
        readonly pattern: "scatter";
        readonly colors: "star";
        readonly count: 14;
        readonly size: 1;
        readonly seed: 192;
    }, {
        readonly pattern: "scatter";
        readonly colors: "bright";
        readonly count: 2;
        readonly size: 1;
        readonly shape: "star";
        readonly seed: 193;
    }];
} | {
    readonly id: "rift-energy";
    readonly about: "Rift energy: bands of plum and red light flowing on the diagonal over navy, white at their crests";
    readonly tags: readonly ["surface", "rift", "magic", "energy"];
    readonly size: readonly [32, 32];
    readonly tile: true;
    readonly palette: {
        readonly void: "navy";
        readonly rift: "plum";
        readonly flare: "red";
        readonly crest: "white";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["nnnnnnnnnpppppprrnnnnppppnnnnppw", "nnnnppppppppprrrwnnnpprppppppprn", "nnnpppprrrrrrrrwnnnprrrrrpppprwn", "nnppprrwnnnnnwwnnnpprwnnwrrrrnnn", "nppprrnnnnnnnnnnnnprwnnnnnnnnnnn", "ppprrnnnnnnnnnnnnppwnnnnnnnnnnnn", "ppprwnnnpppnnnnnpprnnnnnnnnnnnpp", "pprwnnnppppppnnpprwnnnnnnppppppp", "rrrnnnpprrrrpppprrnnnnpppppprrrr", "wwwnnnprwwwrrrrrwnnnnpppprrwwwww", "nnnnnpprnnnnwwwnnnnnnppprwnnnnnn", "nnnnnprnnnnnnnnnnnnnppprwnnnnnnn", "nnnnprwnnnnnnnnnnnpppprrnnnnnnnn", "nnnpprnnnnnnnnnpppppprrnnnnppppp", "pppprwnnnnppppppprrrrrwnnnpprrpp", "ppprwnnnnpppprrrwwrrrwnnnpprrrrr", "rrwwnnnnppprrwnnnnnnnnnnnprwnnnw", "nnnnnnnppprrwnnnnnnnnnnnprwnnnnn", "nnnnnnpppprwnnnnnnnnnnnpprnnnnnn", "nnnpppppprwnnnppppnnnnnprwnnnnnn", "ppppppprrrnnnppppppppppprnnnnnnp", "prrrrrrrrwnnnprrrrppppprnnnnnppp", "rwnnnwwwwnnnprrwwwrrrrrnnnnnpppr", "nnnnnnnnnnnnprnnnnnnwnnnnnnppprw", "nnnnnnnnnnnprwnnnnnnnnnnnnppprrn", "nnppnnnnnnpprnnnnnnnnnnnpppprrnn", "npppppnnnpprnnnnnnnnppppppprrwnn", "pprrrppppprwnnnnpppppprrrrrrwnnn", "prwwrrrrrrwnnnnpppprrwwwwwrwnnnp", "rwnnnwwwwwnnnnpppprwnnnnnnnnnnnp", "rnnnnnnnnnnnnnppprwnnnnnnnnnnnpp", "nnnnnnnnnnnnpppprwnnnnnnnnnnnnpr"];
        readonly legend: {
            readonly n: "void";
            readonly p: "rift";
            readonly r: "flare";
            readonly w: "crest";
        };
    }];
})[];
