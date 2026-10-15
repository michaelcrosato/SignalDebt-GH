export declare const gemIcon: {
    readonly id: "gem-icon";
    readonly about: "A cut gem with a glint, outlined: an icon for the HUD or loot";
    readonly tags: readonly ["icon", "loot", "sprite"];
    readonly size: readonly [10, 9];
    readonly palette: {
        readonly glint: "white";
        readonly light: "cyan";
        readonly mid: "sky";
        readonly dark: "blue";
        readonly edge: "navy";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [".llg", "llmm", "lmmm", "dddm", ".ddm", "..dm", "...d"];
        readonly legend: {
            readonly g: "glint";
            readonly l: "light";
            readonly m: "mid";
            readonly d: "dark";
        };
        readonly at: readonly [1, 1];
        readonly mirror: "x";
    }, {
        readonly outline: "edge";
    }];
};
export declare const coinSpin: {
    readonly id: "coin-spin";
    readonly about: "A gold coin turning: face, three-quarter, edge, three-quarter (4 frames of 8 x 8)";
    readonly tags: readonly ["coin", "loot", "sprite", "animated"];
    readonly size: readonly [32, 8];
    readonly frames: 4;
    readonly palette: {
        readonly face: "sand";
        readonly rim: "orange";
        readonly shine: "white";
        readonly edge: "plum";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["................................", "..ssss.....ss......oo......ss...", ".swssso...swso.....oo.....osws..", ".swssso...swso.....oo.....osws..", ".ssssso...ssso.....oo.....osss..", ".ssssso...ssso.....oo.....osss..", "..oooo.....oo......oo......oo...", "................................"];
        readonly legend: {
            readonly s: "face";
            readonly o: "rim";
            readonly w: "shine";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const potionRed: {
    readonly id: "potion-red";
    readonly about: "A round flask of red potion with a cork and a glint: a health potion icon";
    readonly tags: readonly ["icon", "item", "potion", "loot"];
    readonly size: readonly [12, 13];
    readonly palette: {
        readonly cork: "sand";
        readonly liquid: "red";
        readonly shade: "plum";
        readonly glint: "white";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["............", "....cccc....", ".....cc.....", "....wrrr....", "..rrwrrrrr..", ".rrwrrrrrrd.", ".rrwrrrrrdd.", ".rrrrrrrrdd.", ".rrrrrrrddd.", ".rrrrrrrddd.", "..rrrrrddd..", "....dddd....", "............"];
        readonly legend: {
            readonly c: "cork";
            readonly r: "liquid";
            readonly d: "shade";
            readonly w: "glint";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const potionBlue: {
    readonly id: "potion-blue";
    readonly about: "A round flask of blue potion with a cork and a glint: a mana potion icon";
    readonly tags: readonly ["icon", "item", "potion", "loot"];
    readonly size: readonly [12, 13];
    readonly palette: {
        readonly cork: "sand";
        readonly liquid: "sky";
        readonly shade: "blue";
        readonly glint: "white";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["............", "....cccc....", ".....cc.....", "....wrrr....", "..rrwrrrrr..", ".rrwrrrrrrd.", ".rrwrrrrrdd.", ".rrrrrrrrdd.", ".rrrrrrrddd.", ".rrrrrrrddd.", "..rrrrrddd..", "....dddd....", "............"];
        readonly legend: {
            readonly c: "cork";
            readonly r: "liquid";
            readonly d: "shade";
            readonly w: "glint";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const key: {
    readonly id: "key";
    readonly about: "A gold key lying flat: a round bow with a hole, the shaft and two teeth";
    readonly tags: readonly ["icon", "item", "key", "loot"];
    readonly size: readonly [16, 10];
    readonly palette: {
        readonly light: "sand";
        readonly dark: "orange";
        readonly glint: "white";
        readonly edge: "plum";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["................", "..wlll..........", ".llllld.........", ".ll..ld.........", ".ll..ldllllllll.", ".ld..dddddddddd.", ".lddddd...dd.dd.", "..dddd....dd.dd.", ".............dd.", "................"];
        readonly legend: {
            readonly l: "light";
            readonly d: "dark";
            readonly w: "glint";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const scroll: {
    readonly id: "scroll";
    readonly about: "A parchment scroll between two rolls, three lines of writing";
    readonly tags: readonly ["icon", "item", "scroll", "loot"];
    readonly size: readonly [14, 14];
    readonly palette: {
        readonly paper: "sand";
        readonly shade: "orange";
        readonly glint: "white";
        readonly edge: "plum";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["..............", ".wlllllllllll.", ".dddddddddddd.", "..llllllllll..", "..lddddddlll..", "..llllllllll..", "..lddddddddl..", "..llllllllll..", "..ldddddllll..", "..llllllllll..", ".dddddddddddd.", ".wlllllllllll.", ".dddddddddddd.", ".............."];
        readonly legend: {
            readonly l: "paper";
            readonly d: "shade";
            readonly w: "glint";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const ring: {
    readonly id: "ring";
    readonly about: "A gold ring set with a red stone, the hole showing through";
    readonly tags: readonly ["icon", "item", "jewel", "loot"];
    readonly size: readonly [12, 11];
    readonly palette: {
        readonly light: "sand";
        readonly dark: "orange";
        readonly stone: "red";
        readonly glint: "white";
        readonly edge: "plum";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["............", "....gwgg....", "...lggggd...", "..ll....dd..", ".ll......dd.", ".ll......dd.", ".ll......dd.", ".ld......dd.", "..dd....dd..", "...dddddd...", "............"];
        readonly legend: {
            readonly l: "light";
            readonly d: "dark";
            readonly g: "stone";
            readonly w: "glint";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const amulet: {
    readonly id: "amulet";
    readonly about: "A gold pendant set with a green stone, on a chain";
    readonly tags: readonly ["icon", "item", "jewel", "loot"];
    readonly size: readonly [12, 13];
    readonly palette: {
        readonly light: "sand";
        readonly dark: "orange";
        readonly stone: "green";
        readonly glint: "lime";
        readonly edge: "plum";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["............", ".l........l.", ".l........l.", "..l......l..", "..l......l..", "...l....l...", "...l....l...", "....llll....", "...lwwggd...", "...lwgggd...", "...lggggd...", "....dddd....", "............"];
        readonly legend: {
            readonly l: "light";
            readonly d: "dark";
            readonly g: "stone";
            readonly w: "glint";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const shieldIcon: {
    readonly id: "shield-icon";
    readonly about: "A heater shield: a blue field in a gold rim, lit on its left half";
    readonly tags: readonly ["icon", "item", "armor", "loot"];
    readonly size: readonly [12, 13];
    readonly palette: {
        readonly rim: "sand";
        readonly field: "blue";
        readonly shade: "navy";
        readonly glint: "white";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["............", ".rrrrrrrrrr.", ".rwfffFFFFr.", ".rwfffFFFFr.", ".rffffFFFFr.", ".rffffFFFFr.", ".rffffFFFFr.", ".rffffFFFFr.", ".rrfffFFFrr.", "..rrffFFrr..", "...rrfFrr...", "....rrrr....", "............"];
        readonly legend: {
            readonly r: "rim";
            readonly f: "field";
            readonly F: "shade";
            readonly w: "glint";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const helmetIcon: {
    readonly id: "helmet-icon";
    readonly about: "A steel helm with an eye slit and a red crest";
    readonly tags: readonly ["icon", "item", "armor", "loot"];
    readonly size: readonly [12, 12];
    readonly palette: {
        readonly light: "mist";
        readonly dark: "slate";
        readonly crest: "red";
        readonly glint: "white";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["............", ".....pp.....", ".....pp.....", "...mmmmss...", "..mwmmmsss..", ".mwmmmmssss.", ".mmmmmmssss.", ".m........s.", ".mmmmmmssss.", ".mmmmmsssss.", ".mmmmmmssss.", "............"];
        readonly legend: {
            readonly m: "light";
            readonly s: "dark";
            readonly p: "crest";
            readonly w: "glint";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const bootsIcon: {
    readonly id: "boots-icon";
    readonly about: "A leather boot with a folded cuff and a dark sole, toe to the right";
    readonly tags: readonly ["icon", "item", "armor", "loot"];
    readonly size: readonly [12, 11];
    readonly palette: {
        readonly cuff: "sand";
        readonly leather: "orange";
        readonly shade: "red";
        readonly sole: "plum";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["............", ".ccccccc....", "..lllld.....", "..lllld.....", "..lllld.....", "..lllld.....", "..llllldd...", "..llllclldd.", "..lllllllld.", "..ppp..pppp.", "............"];
        readonly legend: {
            readonly c: "cuff";
            readonly l: "leather";
            readonly d: "shade";
            readonly p: "sole";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const armorIcon: {
    readonly id: "armor-icon";
    readonly about: "A steel breastplate with shoulder guards and a gold belt";
    readonly tags: readonly ["icon", "item", "armor", "loot"];
    readonly size: readonly [14, 12];
    readonly palette: {
        readonly light: "mist";
        readonly dark: "slate";
        readonly belt: "sand";
        readonly glint: "white";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["..............", ".mmmm....ssss.", ".mwmmm..sssss.", ".mmmmmmssssss.", "..mmmmmsssss..", "...mmmmssss...", "...mmmmssss...", "...mmmmssss...", "...bbbbbbbb...", "...mmmmssss...", "..mmmmmsssss..", ".............."];
        readonly legend: {
            readonly m: "light";
            readonly s: "dark";
            readonly b: "belt";
            readonly w: "glint";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const swordIcon: {
    readonly id: "sword-icon";
    readonly about: "A straight sword, point up: a two-tone blade, a gold guard and pommel";
    readonly tags: readonly ["icon", "item", "weapon", "loot"];
    readonly size: readonly [10, 16];
    readonly palette: {
        readonly light: "mist";
        readonly dark: "slate";
        readonly gold: "sand";
        readonly glint: "white";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["..........", "....l.....", "....ls....", "....ws....", "....ws....", "....ls....", "....ls....", "....ls....", "....ls....", "....ls....", ".gggggggg.", "....ss....", "....ss....", "....gg....", "....gg....", ".........."];
        readonly legend: {
            readonly l: "light";
            readonly s: "dark";
            readonly g: "gold";
            readonly w: "glint";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const bowIcon: {
    readonly id: "bow-icon";
    readonly about: "A wooden bow, upright, with a wrapped grip and its string";
    readonly tags: readonly ["icon", "item", "weapon", "loot"];
    readonly size: readonly [10, 16];
    readonly palette: {
        readonly light: "orange";
        readonly dark: "red";
        readonly grip: "sand";
        readonly string: "mist";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["..........", "......ll..", ".....lls..", "....gl.s..", "...ld..s..", "...ld..s..", "..gg...s..", "..gg...s..", "..gg...s..", "..gg...s..", "...ld..s..", "...ld..s..", "....dd.s..", ".....dds..", "......dd..", ".........."];
        readonly legend: {
            readonly l: "light";
            readonly d: "dark";
            readonly g: "grip";
            readonly s: "string";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const goldIcon: {
    readonly id: "gold-icon";
    readonly about: "Two stacks of gold coins, a tall one and a short one beside it";
    readonly tags: readonly ["icon", "item", "coin", "loot"];
    readonly size: readonly [15, 14];
    readonly palette: {
        readonly light: "sand";
        readonly dark: "orange";
        readonly glint: "white";
        readonly edge: "plum";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["...............", "..llll.........", ".lwllll........", ".llllll........", ".dddddd........", ".llllll..llll..", ".dddddd.lwllll.", ".llllll.llllll.", ".dddddd.dddddd.", ".llllll.llllll.", ".dddddd.dddddd.", ".llllll.llllll.", "..dddd...dddd..", "..............."];
        readonly legend: {
            readonly l: "light";
            readonly d: "dark";
            readonly w: "glint";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const heart: {
    readonly id: "heart";
    readonly about: "A red heart with a glint: health";
    readonly tags: readonly ["icon", "ui", "health"];
    readonly size: readonly [8, 8];
    readonly palette: {
        readonly body: "red";
        readonly shade: "plum";
        readonly glint: "white";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["........", ".rr..rr.", ".rwrrrr.", ".rrrrrd.", ".rrrrdd.", "..rrdd..", "...dd...", "........"];
        readonly legend: {
            readonly r: "body";
            readonly d: "shade";
            readonly w: "glint";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const star: {
    readonly id: "star";
    readonly about: "A gold five-pointed star with a glint: a rating or a favourite";
    readonly tags: readonly ["icon", "ui", "rating"];
    readonly size: readonly [8, 8];
    readonly palette: {
        readonly body: "sand";
        readonly shade: "orange";
        readonly glint: "white";
        readonly edge: "plum";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["........", "...ws...", "...ss...", ".ssssss.", "..ssso..", "..ssoo..", ".ss..oo.", "........"];
        readonly legend: {
            readonly s: "body";
            readonly o: "shade";
            readonly w: "glint";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const skull: {
    readonly id: "skull";
    readonly about: "A white skull with dark eyes: death, danger or a kill count";
    readonly tags: readonly ["icon", "ui", "death"];
    readonly size: readonly [8, 8];
    readonly palette: {
        readonly bone: "white";
        readonly shade: "mist";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["........", "..bbbb..", ".bbbbbs.", ".b.bb.s.", ".b.bs.s.", ".bbbsss.", "..b..s..", "........"];
        readonly legend: {
            readonly b: "bone";
            readonly s: "shade";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const spark: {
    readonly id: "spark";
    readonly about: "A spark: a white point that flares into a cross and breaks into fading bits (4 frames of 8 x 8)";
    readonly tags: readonly ["icon", "effect", "sprite", "animated"];
    readonly size: readonly [32, 8];
    readonly frames: 4;
    readonly palette: {
        readonly core: "white";
        readonly flare: "sand";
        readonly tip: "orange";
        readonly ember: "red";
        readonly edge: "plum";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [string, string, string, string, string, string, string, string];
        readonly legend: {
            readonly c: "core";
            readonly f: "flare";
            readonly t: "tip";
            readonly e: "ember";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const smokePuff: {
    readonly id: "smoke-puff";
    readonly about: "A puff of smoke that swells, then thins into wisps (4 frames of 8 x 8)";
    readonly tags: readonly ["icon", "effect", "sprite", "animated"];
    readonly size: readonly [32, 8];
    readonly frames: 4;
    readonly palette: {
        readonly light: "white";
        readonly mid: "mist";
        readonly dark: "slate";
        readonly edge: "night";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [string, string, string, string, string, string, string, string];
        readonly legend: {
            readonly l: "light";
            readonly m: "mid";
            readonly d: "dark";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const axeIcon: {
    readonly id: "axe-icon";
    readonly about: "A bearded axe, haft up: a steel head with a bright cutting edge on the left, a wooden haft";
    readonly tags: readonly ["icon", "item", "weapon", "axe", "loot"];
    readonly size: readonly [12, 16];
    readonly palette: {
        readonly light: "mist";
        readonly dark: "slate";
        readonly glint: "white";
        readonly wood: "orange";
        readonly grain: "red";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["............", ".wl....hd...", ".wll...hd...", ".wllllllls..", ".wlllllllss.", ".wllsssssss.", ".wss...hd...", ".ws....hd...", ".......hd...", ".......hd...", ".......hd...", ".......hd...", ".......hd...", ".......hd...", ".......dd...", "............"];
        readonly legend: {
            readonly l: "light";
            readonly s: "dark";
            readonly w: "glint";
            readonly h: "wood";
            readonly d: "grain";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const maceIcon: {
    readonly id: "mace-icon";
    readonly about: "A spiked mace, head up: a round steel head with three spikes on a wooden haft";
    readonly tags: readonly ["icon", "item", "weapon", "mace", "loot"];
    readonly size: readonly [12, 16];
    readonly palette: {
        readonly light: "mist";
        readonly dark: "slate";
        readonly glint: "white";
        readonly wood: "orange";
        readonly grain: "red";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["............", ".....ls.....", "...lllsss...", "..lwllssss..", ".llllllssss.", "..lllsssss..", "...lsssss...", ".....hd.....", ".....hd.....", ".....hd.....", ".....hd.....", ".....hd.....", ".....hd.....", ".....hd.....", ".....ss.....", "............"];
        readonly legend: {
            readonly l: "light";
            readonly s: "dark";
            readonly w: "glint";
            readonly h: "wood";
            readonly d: "grain";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const staffIcon: {
    readonly id: "staff-icon";
    readonly about: "A mage's staff: a wooden pole whose forked head cradles a glowing blue orb";
    readonly tags: readonly ["icon", "item", "weapon", "staff", "magic", "loot"];
    readonly size: readonly [10, 16];
    readonly palette: {
        readonly glow: "cyan";
        readonly orb: "sky";
        readonly orb2: "blue";
        readonly glint: "white";
        readonly wood: "orange";
        readonly grain: "red";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["..........", "..h.cc.d..", "..hcwccd..", "..hcssbd..", "..hbbbbd..", "...hhdd...", "....hd....", "....hd....", "....hd....", "....hd....", "....hd....", "....hd....", "....hd....", "....hd....", "....dd....", ".........."];
        readonly legend: {
            readonly c: "glow";
            readonly s: "orb";
            readonly b: "orb2";
            readonly w: "glint";
            readonly h: "wood";
            readonly d: "grain";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const wandIcon: {
    readonly id: "wand-icon";
    readonly about: "A magic wand: a slim dark rod with a gold band, tipped with a gold star";
    readonly tags: readonly ["icon", "item", "weapon", "wand", "magic", "loot"];
    readonly size: readonly [10, 15];
    readonly palette: {
        readonly star: "sand";
        readonly shade: "orange";
        readonly glint: "white";
        readonly rod: "red";
        readonly rod2: "plum";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["..........", "....ws....", "....ss....", "..ssssss..", "...ssso...", "...ssoo...", "..sshdoo..", "....hd....", "....hd....", "....hd....", "....ss....", "....hd....", "....hd....", "....dd....", ".........."];
        readonly legend: {
            readonly s: "star";
            readonly o: "shade";
            readonly w: "glint";
            readonly h: "rod";
            readonly d: "rod2";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const daggerIcon: {
    readonly id: "dagger-icon";
    readonly about: "A dagger, point up: a short ridged blade, a gold crossguard and pommel, a red grip";
    readonly tags: readonly ["icon", "item", "weapon", "dagger", "loot"];
    readonly size: readonly [9, 13];
    readonly palette: {
        readonly light: "mist";
        readonly dark: "slate";
        readonly glint: "white";
        readonly gold: "sand";
        readonly grip: "red";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [".........", "....l....", "...lls...", "...lws...", "...lws...", "...lls...", "...lls...", ".ggggggg.", "....r....", "....r....", "....r....", "...ggg...", "........."];
        readonly legend: {
            readonly l: "light";
            readonly s: "dark";
            readonly w: "glint";
            readonly g: "gold";
            readonly r: "grip";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const spearIcon: {
    readonly id: "spear-icon";
    readonly about: "A spear, point up: a leaf-shaped steel head bound with red cord to a long wooden shaft";
    readonly tags: readonly ["icon", "item", "weapon", "spear", "loot"];
    readonly size: readonly [10, 16];
    readonly palette: {
        readonly light: "mist";
        readonly dark: "slate";
        readonly glint: "white";
        readonly cord: "red";
        readonly wood: "orange";
        readonly grain: "plum";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["..........", "....ls....", "...lwss...", "...lwss...", "...llss...", "...llss...", "....ls....", "...rrrr...", "....hd....", "....hd....", "....hd....", "....hd....", "....hd....", "....hd....", "....hd....", ".........."];
        readonly legend: {
            readonly l: "light";
            readonly s: "dark";
            readonly w: "glint";
            readonly r: "cord";
            readonly h: "wood";
            readonly d: "grain";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const roundShieldIcon: {
    readonly id: "round-shield-icon";
    readonly about: "A round wooden shield: planks in a steel rim, a steel boss in the middle";
    readonly tags: readonly ["icon", "item", "armor", "shield", "loot"];
    readonly size: readonly [14, 14];
    readonly palette: {
        readonly light: "mist";
        readonly dark: "slate";
        readonly glint: "white";
        readonly wood: "orange";
        readonly grain: "red";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["..............", ".....rrrr.....", "...rroooorr...", "..rodoooodoR..", "..rodoooodoR..", ".roodommodooR.", ".roodmwmsdooR.", ".roodmmssdooR.", ".roodossodooR.", "..rodoooodoR..", "..rodoooodoR..", "...RRooooRR...", ".....RRRR.....", ".............."];
        readonly legend: {
            readonly r: "light";
            readonly R: "dark";
            readonly m: "light";
            readonly s: "dark";
            readonly w: "glint";
            readonly o: "wood";
            readonly d: "grain";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const glovesIcon: {
    readonly id: "gloves-icon";
    readonly about: "A leather glove, fingers up and thumb out, with a sand-coloured cuff";
    readonly tags: readonly ["icon", "item", "armor", "gloves", "loot"];
    readonly size: readonly [12, 12];
    readonly palette: {
        readonly cuff: "sand";
        readonly leather: "orange";
        readonly shade: "red";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["............", ".....l.l....", "...l.l.l.d..", "...l.l.l.d..", ".l.lllllld..", ".llllllldd..", "..lllllldd..", "...llllldd..", "...lllldd...", "...cccccc...", "...cccccc...", "............"];
        readonly legend: {
            readonly c: "cuff";
            readonly l: "leather";
            readonly d: "shade";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const beltIcon: {
    readonly id: "belt-icon";
    readonly about: "A leather belt buckled into a loop, seen from the front: a square gold buckle with its prong, the strap end hanging free";
    readonly tags: readonly ["icon", "item", "armor", "belt", "loot"];
    readonly size: readonly [13, 12];
    readonly palette: {
        readonly gold: "sand";
        readonly leather: "orange";
        readonly shade: "red";
        readonly prong: "mist";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [".............", ".............", "...ddddddd...", ".ddd.....ddd.", ".dl.......ld.", ".lll.....lll.", "..lllggggll..", "...llgppgl...", ".....gggg.ll.", "..........ll.", ".............", "............."];
        readonly legend: {
            readonly g: "gold";
            readonly l: "leather";
            readonly d: "shade";
            readonly p: "prong";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const cloakIcon: {
    readonly id: "cloak-icon";
    readonly about: "A green hooded cloak with a gold clasp, the face in shadow under the hood";
    readonly tags: readonly ["icon", "item", "armor", "cloak", "loot"];
    readonly size: readonly [12, 14];
    readonly palette: {
        readonly light: "green";
        readonly dark: "teal";
        readonly clasp: "sand";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["............", "....lllD....", "...llllDD...", "...ll..DD...", "...ll..DD...", "...llccDD...", "..llllDDDD..", "..llllDDDD..", "..lDllDDlD..", ".llDllDDlDD.", ".llDllDDlDD.", ".llDllDDlDD.", ".lllllDDDDD.", "............"];
        readonly legend: {
            readonly l: "light";
            readonly D: "dark";
            readonly c: "clasp";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const quiverIcon: {
    readonly id: "quiver-icon";
    readonly about: "A leather quiver slung on the diagonal, two gold bands round it, three fletched arrows fanning out of its mouth";
    readonly tags: readonly ["icon", "item", "ammo", "quiver", "loot"];
    readonly size: readonly [13, 13];
    readonly palette: {
        readonly fletch: "white";
        readonly fletch2: "sky";
        readonly shaft: "sand";
        readonly leather: "red";
        readonly shade: "plum";
        readonly band: "sand";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [".............", "....ww...ff..", "....ww...ff..", ".....hh.hh...", "......hhh..ww", "......ghhhhww", ".....gggl....", "....lllgd....", "...llllld....", "..gggldd.....", ".lllggd......", ".llldd.......", "............."];
        readonly legend: {
            readonly w: "fletch";
            readonly f: "fletch2";
            readonly h: "shaft";
            readonly l: "leather";
            readonly d: "shade";
            readonly g: "band";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const arrowsIcon: {
    readonly id: "arrows-icon";
    readonly about: "Three arrows, points up and staggered, with red fletching: ammunition";
    readonly tags: readonly ["icon", "item", "ammo", "arrow", "loot"];
    readonly size: readonly [13, 15];
    readonly palette: {
        readonly head: "mist";
        readonly shaft: "orange";
        readonly fletch: "red";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [".............", "......m......", ".....mmm.....", "..m..mmm..m..", ".mmm..h..mmm.", ".mmm..h..mmm.", "..h...h...h..", "..h...h...h..", "..h...h...h..", "..h...h...h..", "..h..fhf..h..", "..h..fhf..h..", ".fhf.....fhf.", ".fhf.....fhf.", "............."];
        readonly legend: {
            readonly m: "head";
            readonly h: "shaft";
            readonly f: "fletch";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const bombIcon: {
    readonly id: "bomb-icon";
    readonly about: "A round black bomb with a steel cap and a lit fuse";
    readonly tags: readonly ["icon", "item", "bomb", "consumable", "loot"];
    readonly size: readonly [12, 14];
    readonly palette: {
        readonly glint: "mist";
        readonly body: "slate";
        readonly shade: "night";
        readonly fuse: "orange";
        readonly spark: "sand";
        readonly flare: "white";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["............", "........ws..", "......ffss..", ".....ff.....", "....gg......", "...bbbb.....", "..bbbbbb....", ".bggbbbbd...", ".bgbbbbbd...", ".bbbbbbdd...", ".bbbbbbdd...", "..bbbbdd....", "...dddd.....", "............"];
        readonly legend: {
            readonly g: "glint";
            readonly b: "body";
            readonly d: "shade";
            readonly f: "fuse";
            readonly s: "spark";
            readonly w: "flare";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const torchIcon: {
    readonly id: "torch-icon";
    readonly about: "A burning torch: a flame with a white heart over a wrapped head and a wooden handle";
    readonly tags: readonly ["icon", "item", "torch", "light", "loot"];
    readonly size: readonly [8, 16];
    readonly palette: {
        readonly core: "white";
        readonly flame: "sand";
        readonly flame2: "orange";
        readonly wrap: "slate";
        readonly wood: "orange";
        readonly grain: "red";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["........", "....o...", "...oo...", "..oyoo..", "..oyyo..", ".oywyyo.", ".oyyyyo.", ".ooyyoo.", "..cccc..", "..cccc..", "...hd...", "...hd...", "...hd...", "...hd...", "...dd...", "........"];
        readonly legend: {
            readonly w: "core";
            readonly y: "flame";
            readonly o: "flame2";
            readonly c: "wrap";
            readonly h: "wood";
            readonly d: "grain";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const mapIcon: {
    readonly id: "map-icon";
    readonly about: "A folded treasure map: three parchment panels, a dashed red trail to a red X";
    readonly tags: readonly ["icon", "item", "map", "quest", "loot"];
    readonly size: readonly [14, 12];
    readonly palette: {
        readonly paper: "sand";
        readonly fold: "orange";
        readonly mark: "red";
        readonly edge: "plum";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["..............", ".pppp....pppp.", ".ppppPPPPpppp.", ".ppppPPPPmppm.", ".ppppPPPPpmmp.", ".ppppPPPPpmmp.", ".ppppPPPPmppm.", ".ppppPPmmpppp.", ".pmmpPPPPpppp.", ".ppppPPPPpppp.", ".....PPPP.....", ".............."];
        readonly legend: {
            readonly p: "paper";
            readonly P: "fold";
            readonly m: "mark";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const bookIcon: {
    readonly id: "book-icon";
    readonly about: "A closed blue tome with gold bands and a gold boss, its white pages showing";
    readonly tags: readonly ["icon", "item", "book", "magic", "loot"];
    readonly size: readonly [12, 13];
    readonly palette: {
        readonly cover: "blue";
        readonly shade: "navy";
        readonly gold: "sand";
        readonly pages: "white";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["............", ".Scccccccc..", ".ScccccccCp.", ".ScggggggCp.", ".ScccccccCp.", ".ScccggccCp.", ".ScccggccCp.", ".ScccccccCp.", ".ScggggggCp.", ".ScccccccCp.", ".SCCCCCCCCp.", "..ppppppppp.", "............"];
        readonly legend: {
            readonly S: "shade";
            readonly c: "cover";
            readonly C: "shade";
            readonly g: "gold";
            readonly p: "pages";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const coinPouchIcon: {
    readonly id: "coin-pouch-icon";
    readonly about: "A leather coin pouch tied at the neck, a gold coin stamped on its front";
    readonly tags: readonly ["icon", "item", "coin", "pouch", "loot"];
    readonly size: readonly [12, 14];
    readonly palette: {
        readonly leather: "orange";
        readonly shade: "red";
        readonly tie: "sand";
        readonly edge: "plum";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["............", "...ll..ld...", "....llld....", "....tttt....", "....llld....", "...llllld...", "..lllllldd..", ".llllllllld.", ".llllttllld.", ".llllttllld.", ".lllllllldd.", "..lllllddd..", "...dddddd...", "............"];
        readonly legend: {
            readonly l: "leather";
            readonly d: "shade";
            readonly t: "tie";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const meatIcon: {
    readonly id: "meat-icon";
    readonly about: "A roast drumstick: browned meat with a crisp highlight, the white bone sticking out";
    readonly tags: readonly ["icon", "item", "food", "consumable", "loot"];
    readonly size: readonly [12, 12];
    readonly palette: {
        readonly crisp: "sand";
        readonly meat: "orange";
        readonly shade: "red";
        readonly bone: "white";
        readonly bone2: "mist";
        readonly edge: "plum";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["............", "...oooo.....", "..ossoooo...", ".ossoooooo..", ".osooooorr..", ".ooooooorr..", "..oooorrrr..", "...rrrrrbb..", ".......bbm..", ".......bbbb.", "........bmm.", "............"];
        readonly legend: {
            readonly s: "crisp";
            readonly o: "meat";
            readonly r: "shade";
            readonly b: "bone";
            readonly m: "bone2";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const herbIcon: {
    readonly id: "herb-icon";
    readonly about: "A sprig of green herb: paired leaves up a thin stem, lit on the left";
    readonly tags: readonly ["icon", "item", "herb", "consumable", "loot"];
    readonly size: readonly [10, 13];
    readonly palette: {
        readonly light: "lime";
        readonly dark: "green";
        readonly stem: "teal";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["..........", "....ll....", "....ld....", ".ll.s.dd..", ".lllsddd..", "..llsdd...", "....s.....", ".ll.s.dd..", ".lllsddd..", "..llsdd...", "....s.....", "....s.....", ".........."];
        readonly legend: {
            readonly l: "light";
            readonly d: "dark";
            readonly s: "stem";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const runeStoneIcon: {
    readonly id: "rune-stone-icon";
    readonly about: "A flat dark pebble carved with a glowing cyan rune (a trident)";
    readonly tags: readonly ["icon", "item", "rune", "magic", "loot"];
    readonly size: readonly [12, 11];
    readonly palette: {
        readonly glint: "mist";
        readonly stone: "slate";
        readonly shade: "night";
        readonly rune: "cyan";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["............", "...hhmmms...", "..hmmmmmss..", ".hmmcmcmcss.", ".mmmcmcmcss.", ".mmmcccccss.", ".mmmmmcmsss.", ".mmmmmcssss.", "..msssssss..", "...ssssss...", "............"];
        readonly legend: {
            readonly h: "glint";
            readonly m: "stone";
            readonly s: "shade";
            readonly c: "rune";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const fireballIcon: {
    readonly id: "fireball-icon";
    readonly about: "A fireball flying up and right: a white-hot heart in sand and orange, a red flame trail";
    readonly tags: readonly ["icon", "skill", "fire", "fireball"];
    readonly size: readonly [12, 12];
    readonly palette: {
        readonly core: "white";
        readonly inner: "sand";
        readonly flame: "orange";
        readonly outer: "red";
        readonly edge: "plum";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["............", "......oooo..", ".....oyyyyo.", "...rroywwyo.", "..roooywwyo.", ".rooooyyyyo.", ".roooooooo..", ".rrooorr....", ".rr.rrr.....", ".rr..r......", ".r..........", "............"];
        readonly legend: {
            readonly w: "core";
            readonly y: "inner";
            readonly o: "flame";
            readonly r: "outer";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const frostNovaIcon: {
    readonly id: "frost-nova-icon";
    readonly about: "A burst of frost: an eight-pointed ice star round a white core";
    readonly tags: readonly ["icon", "skill", "cold", "frost", "nova"];
    readonly size: readonly [13, 13];
    readonly palette: {
        readonly core: "white";
        readonly ice: "cyan";
        readonly shade: "sky";
        readonly edge: "navy";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [".............", "......c......", "......c......", "...cc.c.ss...", "...cccwsss...", "....cwwws....", ".cccwwwwwsss.", "....cwwws....", "...cccwsss...", "...cc.s.ss...", "......s......", "......s......", "............."];
        readonly legend: {
            readonly w: "core";
            readonly c: "ice";
            readonly s: "shade";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const lightningBoltIcon: {
    readonly id: "lightning-bolt-icon";
    readonly about: "A zigzag lightning bolt striking down, white along its lit edge, sand and orange";
    readonly tags: readonly ["icon", "skill", "lightning", "bolt"];
    readonly size: readonly [11, 14];
    readonly palette: {
        readonly core: "white";
        readonly bolt: "sand";
        readonly shade: "orange";
        readonly edge: "plum";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["...........", ".....wyyy..", ".....wyyo..", "....wyyo...", "....wyyo...", "...wyyo....", "...wyyyyyo.", "...ooooyyo.", "......yyo..", "......yo...", ".....yyo...", ".....yo....", ".....o.....", "..........."];
        readonly legend: {
            readonly w: "core";
            readonly y: "bolt";
            readonly o: "shade";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const poisonCloudIcon: {
    readonly id: "poison-cloud-icon";
    readonly about: "A billowing green cloud of poison with a white skull in it";
    readonly tags: readonly ["icon", "skill", "poison", "cloud"];
    readonly size: readonly [13, 11];
    readonly palette: {
        readonly light: "lime";
        readonly mid: "green";
        readonly dark: "teal";
        readonly bone: "white";
        readonly eye: "ink";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [".............", "...ll...lll..", "..llll.lllll.", ".llllbbbllgg.", ".lllbbbbblgg.", ".lllbkbkbggg.", ".llgbbbbbggt.", ".lgggbgbggtt.", "..gggggtttt..", "...ggg.ttt...", "............."];
        readonly legend: {
            readonly l: "light";
            readonly g: "mid";
            readonly t: "dark";
            readonly b: "bone";
            readonly k: "eye";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const healIcon: {
    readonly id: "heal-icon";
    readonly about: "A bold green cross with a white glint, two sparkles beside it: healing";
    readonly tags: readonly ["icon", "skill", "heal", "holy"];
    readonly size: readonly [12, 12];
    readonly palette: {
        readonly glint: "white";
        readonly light: "lime";
        readonly mid: "green";
        readonly edge: "teal";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["............", "....lllg.ww.", "....lwlg.ww.", "....lllg....", ".llllllllll.", ".lllllllllg.", ".lllllllllg.", ".ggglllgggg.", "....lllg....", ".ww.lllg....", ".ww.gggg....", "............"];
        readonly legend: {
            readonly w: "glint";
            readonly l: "light";
            readonly g: "mid";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const shieldBubbleIcon: {
    readonly id: "shield-bubble-icon";
    readonly about: "A protective bubble: a cyan ring with a white glint round a small gold shield";
    readonly tags: readonly ["icon", "skill", "shield", "buff"];
    readonly size: readonly [14, 14];
    readonly palette: {
        readonly glint: "white";
        readonly light: "cyan";
        readonly mid: "sky";
        readonly dark: "blue";
        readonly gold: "sand";
        readonly gold2: "orange";
        readonly edge: "navy";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["..............", ".....cccc.....", "...cwwccsss...", "..ccc....sss..", "..cc......ss..", ".cc.ggggoo.sb.", ".cc.ggggoo.bb.", ".cc.ggggoo.bb.", ".cs..ggoo..bb.", "..ss..go..bb..", "..sss....bbb..", "...sssbbbbb...", ".....bbbb.....", ".............."];
        readonly legend: {
            readonly w: "glint";
            readonly c: "light";
            readonly s: "mid";
            readonly b: "dark";
            readonly g: "gold";
            readonly o: "gold2";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const dashIcon: {
    readonly id: "dash-icon";
    readonly about: "A dash: a white arrowhead pointing right, trailing grey speed lines";
    readonly tags: readonly ["icon", "skill", "movement", "dash"];
    readonly size: readonly [13, 11];
    readonly palette: {
        readonly light: "white";
        readonly mid: "mist";
        readonly dark: "slate";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [".............", ".......w.....", ".......ww....", "sssss..www...", ".......wwww..", ".mmmmmmwwwww.", ".......mmmm..", "sssss..mmm...", ".......mm....", ".......m.....", "............."];
        readonly legend: {
            readonly w: "light";
            readonly m: "mid";
            readonly s: "dark";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const whirlwindIcon: {
    readonly id: "whirlwind-icon";
    readonly about: "A whirlwind: a funnel of white and grey bands narrowing to a point";
    readonly tags: readonly ["icon", "skill", "physical", "whirlwind"];
    readonly size: readonly [12, 12];
    readonly palette: {
        readonly light: "white";
        readonly mid: "mist";
        readonly dark: "slate";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["............", ".wwwwwwwwmm.", ".wwwwwwwwmm.", "...mmmmmmss.", "...mmmmmmss.", "..wwwwmm....", "..wwwwmm....", ".....mmss...", ".....mmss...", "....wm......", "....wm......", "............"];
        readonly legend: {
            readonly w: "light";
            readonly m: "mid";
            readonly s: "dark";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const leapIcon: {
    readonly id: "leap-icon";
    readonly about: "A leap: a figure flying forward off the end of a dashed arc, coming down onto a burst";
    readonly tags: readonly ["icon", "skill", "movement", "leap"];
    readonly size: readonly [13, 12];
    readonly palette: {
        readonly glint: "white";
        readonly light: "sand";
        readonly dark: "orange";
        readonly edge: "plum";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [".............", "..........ww.", "..........ww.", "...ll...llll.", ".l.....llll..", ".l.......ll..", "........llll.", ".......ll..ll", ".......l....l", ".............", ".....o.ooo.o.", "....ooooooooo"];
        readonly legend: {
            readonly w: "glint";
            readonly l: "light";
            readonly o: "dark";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const arrowVolleyIcon: {
    readonly id: "arrow-volley-icon";
    readonly about: "A volley: three arrows falling point down, staggered, with white fletching";
    readonly tags: readonly ["icon", "skill", "bow", "arrow", "volley"];
    readonly size: readonly [13, 11];
    readonly palette: {
        readonly fletch: "white";
        readonly shaft: "orange";
        readonly head: "mist";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [".............", ".fhf.........", ".fhf.....fhf.", "..h..fhf.fhf.", "..h..fhf..h..", "..h...h...h..", ".mmm..h...h..", "..m...h..mmm.", ".....mmm..m..", "......m......", "............."];
        readonly legend: {
            readonly f: "fletch";
            readonly h: "shaft";
            readonly m: "head";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const summonIcon: {
    readonly id: "summon-icon";
    readonly about: "A summoning: a white skull rising out of a glowing cyan circle";
    readonly tags: readonly ["icon", "skill", "summon", "minion"];
    readonly size: readonly [12, 12];
    readonly palette: {
        readonly bone: "white";
        readonly shade: "mist";
        readonly glow: "cyan";
        readonly glow2: "sky";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["............", "....bbbb....", "...bbbbbs...", "...b.bb.s...", "...b.bs.s...", "...bbbsss...", "....b..s....", "............", "...cccccc...", ".cc......gg.", "...gggggg...", "............"];
        readonly legend: {
            readonly b: "bone";
            readonly s: "shade";
            readonly c: "glow";
            readonly g: "glow2";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const curseIcon: {
    readonly id: "curse-icon";
    readonly about: "A curse: a staring white eye with a plum iris in bloodshot red lids, dripping";
    readonly tags: readonly ["icon", "skill", "curse", "hex"];
    readonly size: readonly [12, 12];
    readonly palette: {
        readonly lid: "red";
        readonly eye: "white";
        readonly iris: "plum";
        readonly pupil: "ink";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["............", "............", "...pppppp...", ".pprryyrrpp.", ".prryiiyrrp.", ".prryiiyrrp.", ".pprryyrrpp.", "...pppppp...", "...pp..pp...", "...p....p...", "........p...", "............"];
        readonly legend: {
            readonly p: "lid";
            readonly r: "eye";
            readonly y: "iris";
            readonly i: "pupil";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const auraIcon: {
    readonly id: "aura-icon";
    readonly about: "An aura: a gold ring radiating round a white-hot core";
    readonly tags: readonly ["icon", "skill", "aura", "buff"];
    readonly size: readonly [13, 13];
    readonly palette: {
        readonly core: "white";
        readonly light: "sand";
        readonly dark: "orange";
        readonly edge: "plum";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [".............", "....lllll....", "..ll.....lo..", "..l...l...o..", ".l...lll...o.", ".l..lwwwl..o.", ".l.llwwwoo.o.", ".l..lwwwo..o.", ".l...loo...o.", "..l...o...o..", "..lo.....oo..", "....ooooo....", "............."];
        readonly legend: {
            readonly w: "core";
            readonly l: "light";
            readonly o: "dark";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const trapIcon: {
    readonly id: "trap-icon";
    readonly about: "A bear trap, open: a ring of steel jaws with their teeth turned in round a gold pan, a spring either side";
    readonly tags: readonly ["icon", "skill", "trap"];
    readonly size: readonly [13, 11];
    readonly palette: {
        readonly light: "mist";
        readonly dark: "slate";
        readonly pan: "sand";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [".............", "..lllllllll..", ".lll.l.l.lll.", ".l.........l.", "ll...ppp...ll", "ss...ppp...ss", ".s.........s.", ".sss.s.s.sss.", "..sssssssss..", ".............", "............."];
        readonly legend: {
            readonly l: "light";
            readonly s: "dark";
            readonly p: "pan";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const totemIcon: {
    readonly id: "totem-icon";
    readonly about: "A carved wooden totem: a winged top, two stacked faces with dark eyes";
    readonly tags: readonly ["icon", "skill", "totem"];
    readonly size: readonly [12, 15];
    readonly palette: {
        readonly wing: "sky";
        readonly wing2: "blue";
        readonly light: "orange";
        readonly dark: "red";
        readonly eye: "ink";
        readonly beak: "sand";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["............", "....hhdd....", ".ww.hhdd.WW.", ".wwwhhddWWW.", "..wwkhdkWW..", "....hbbd....", "....hhdd....", "....hhdd....", "....kddk....", "....hhdd....", "...hbbbdd...", "....hhdd....", "....hhdd....", "...hhhddd...", "............"];
        readonly legend: {
            readonly w: "wing";
            readonly W: "wing2";
            readonly h: "light";
            readonly d: "dark";
            readonly k: "eye";
            readonly b: "beak";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const arrowUp: {
    readonly id: "arrow-up";
    readonly about: "A white arrow pointing up: scroll, raise, move up";
    readonly tags: readonly ["icon", "ui", "arrow", "up"];
    readonly size: readonly [8, 8];
    readonly palette: {
        readonly light: "white";
        readonly shade: "mist";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["........", "...ws...", "..wwss..", ".wwwsss.", "..wwss..", "..wwss..", "..wwss..", "........"];
        readonly legend: {
            readonly w: "light";
            readonly s: "shade";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const arrowDown: {
    readonly id: "arrow-down";
    readonly about: "A white arrow pointing down: scroll, lower, move down";
    readonly tags: readonly ["icon", "ui", "arrow", "down"];
    readonly size: readonly [8, 8];
    readonly palette: {
        readonly light: "white";
        readonly shade: "mist";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["........", "..wwss..", "..wwss..", "..wwss..", ".wwwsss.", "..wwss..", "...ws...", "........"];
        readonly legend: {
            readonly w: "light";
            readonly s: "shade";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const arrowLeft: {
    readonly id: "arrow-left";
    readonly about: "A white arrow pointing left: back, previous, move left";
    readonly tags: readonly ["icon", "ui", "arrow", "left"];
    readonly size: readonly [8, 8];
    readonly palette: {
        readonly light: "white";
        readonly shade: "mist";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["........", "...w....", "..wwwww.", ".wwwwww.", ".ssssss.", "..sssss.", "...s....", "........"];
        readonly legend: {
            readonly w: "light";
            readonly s: "shade";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const arrowRight: {
    readonly id: "arrow-right";
    readonly about: "A white arrow pointing right: next, forward, move right";
    readonly tags: readonly ["icon", "ui", "arrow", "right"];
    readonly size: readonly [8, 8];
    readonly palette: {
        readonly light: "white";
        readonly shade: "mist";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["........", "....w...", ".wwwww..", ".wwwwww.", ".ssssss.", ".sssss..", "....s...", "........"];
        readonly legend: {
            readonly w: "light";
            readonly s: "shade";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const check: {
    readonly id: "check";
    readonly about: "A lime check mark: yes, done, confirm";
    readonly tags: readonly ["icon", "ui", "check", "confirm"];
    readonly size: readonly [8, 8];
    readonly palette: {
        readonly body: "lime";
        readonly shade: "green";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["........", ".....ll.", ".....ll.", ".ll.ll..", ".ll.ll..", "..ggg...", "..ggg...", "........"];
        readonly legend: {
            readonly l: "body";
            readonly g: "shade";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const cross: {
    readonly id: "cross";
    readonly about: "A red X: no, close, cancel";
    readonly tags: readonly ["icon", "ui", "cross", "cancel"];
    readonly size: readonly [8, 8];
    readonly palette: {
        readonly body: "red";
        readonly shade: "plum";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["........", ".rr..rr.", ".rr..rr.", "..rrrr..", "..pppp..", ".pp..pp.", ".pp..pp.", "........"];
        readonly legend: {
            readonly r: "body";
            readonly p: "shade";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const plus: {
    readonly id: "plus";
    readonly about: "A lime plus: add, more, a higher stat";
    readonly tags: readonly ["icon", "ui", "plus", "add"];
    readonly size: readonly [8, 8];
    readonly palette: {
        readonly body: "lime";
        readonly shade: "green";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["........", "...lg...", "...lg...", ".lllllg.", ".ggglgg.", "...lg...", "...gg...", "........"];
        readonly legend: {
            readonly l: "body";
            readonly g: "shade";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const minus: {
    readonly id: "minus";
    readonly about: "A red minus: remove, less, a lower stat";
    readonly tags: readonly ["icon", "ui", "minus", "remove"];
    readonly size: readonly [8, 8];
    readonly palette: {
        readonly body: "red";
        readonly shade: "plum";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["........", "........", "........", ".rrrrrr.", ".pppppp.", "........", "........", "........"];
        readonly legend: {
            readonly r: "body";
            readonly p: "shade";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const lock: {
    readonly id: "lock";
    readonly about: "A gold padlock with a steel shackle and a keyhole: locked";
    readonly tags: readonly ["icon", "ui", "lock", "locked"];
    readonly size: readonly [8, 8];
    readonly palette: {
        readonly steel: "mist";
        readonly steel2: "slate";
        readonly body: "sand";
        readonly shade: "orange";
        readonly hole: "plum";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["........", "..mmmt..", "..m..t..", ".bbbbbo.", ".bbkkbo.", ".bbbkbo.", ".oooooo.", "........"];
        readonly legend: {
            readonly m: "steel";
            readonly t: "steel2";
            readonly b: "body";
            readonly o: "shade";
            readonly k: "hole";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const gear: {
    readonly id: "gear";
    readonly about: "A steel cog with eight teeth round a hole: settings, options";
    readonly tags: readonly ["icon", "ui", "gear", "settings"];
    readonly size: readonly [12, 12];
    readonly palette: {
        readonly light: "mist";
        readonly dark: "slate";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["............", ".....ll.....", "..ll.ll.ll..", "..llllllld..", "...llllld...", ".llll..dddd.", ".llll..dddd.", "...lldddd...", "..lldddddd..", "..ld.dd.dd..", ".....dd.....", "............"];
        readonly legend: {
            readonly l: "light";
            readonly d: "dark";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const magnifier: {
    readonly id: "magnifier";
    readonly about: "A magnifying glass: a steel ring round blue glass with a glint, a red handle: search, inspect";
    readonly tags: readonly ["icon", "ui", "magnifier", "search"];
    readonly size: readonly [10, 10];
    readonly palette: {
        readonly glint: "white";
        readonly glass: "cyan";
        readonly glass2: "sky";
        readonly light: "mist";
        readonly dark: "slate";
        readonly handle: "red";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["..........", "..mmmm....", ".mwwccm...", ".mwcccM...", ".mccsdM...", ".mcssdM...", "..MMMMh...", "......hh..", ".......hh.", ".........."];
        readonly legend: {
            readonly w: "glint";
            readonly c: "glass";
            readonly s: "glass2";
            readonly d: "dark";
            readonly m: "light";
            readonly M: "dark";
            readonly h: "handle";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const questMarker: {
    readonly id: "quest-marker";
    readonly about: "A gold exclamation mark: a quest to give, a warning, something new";
    readonly tags: readonly ["icon", "ui", "quest", "alert"];
    readonly size: readonly [6, 10];
    readonly palette: {
        readonly glint: "white";
        readonly light: "sand";
        readonly shade: "orange";
        readonly edge: "plum";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["......", ".wsso.", ".ssso.", ".ssso.", "..so..", "..so..", "......", "..so..", "..oo..", "......"];
        readonly legend: {
            readonly w: "glint";
            readonly s: "light";
            readonly o: "shade";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const bat: {
    readonly id: "bat";
    readonly about: "A bat flapping: wings up, then wings down, their leading edges lit, glowing yellow eyes (2 frames of 12 x 8)";
    readonly tags: readonly ["sprite", "critter", "bat", "animated"];
    readonly size: readonly [24, 8];
    readonly frames: 2;
    readonly palette: {
        readonly rim: "slate";
        readonly wing: "plum";
        readonly body: "night";
        readonly eye: "sand";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["......", ".rr...", ".rww.r", "..wwbb", "..wweb", "...wbb", ".....b", "......"];
        readonly legend: {
            readonly r: "rim";
            readonly w: "wing";
            readonly b: "body";
            readonly e: "eye";
        };
        readonly mirror: "x";
    }, {
        readonly pixels: readonly ["......", "......", ".....r", "....bb", ".rrreb", ".wwwbb", ".ww..b", "......"];
        readonly legend: {
            readonly r: "rim";
            readonly w: "wing";
            readonly b: "body";
            readonly e: "eye";
        };
        readonly at: readonly [12, 0];
        readonly mirror: "x";
    }, {
        readonly outline: "edge";
    }];
};
export declare const rat: {
    readonly id: "rat";
    readonly about: "A grey rat scurrying right: stretched out low, then bunched up with its feet under it; pink ears, feet and tail (2 frames of 12 x 8)";
    readonly tags: readonly ["sprite", "critter", "rat", "animated"];
    readonly size: readonly [24, 8];
    readonly frames: 2;
    readonly palette: {
        readonly fur: "mist";
        readonly shade: "slate";
        readonly pink: "red";
        readonly eye: "ink";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [string, string, string, string, string, string, string, string];
        readonly legend: {
            readonly m: "fur";
            readonly s: "shade";
            readonly r: "pink";
            readonly k: "eye";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const spider: {
    readonly id: "spider";
    readonly about: "A dark spider seen from above with a red mark and a sheen on its back, its legs stepping (2 frames of 12 x 8)";
    readonly tags: readonly ["sprite", "critter", "spider", "animated"];
    readonly size: readonly [24, 8];
    readonly frames: 2;
    readonly palette: {
        readonly leg: "slate";
        readonly body: "plum";
        readonly sheen: "mist";
        readonly mark: "red";
        readonly eye: "sand";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["......", "l.....", "llll.e", "....ss", "llllbm", "l...bb", "....bs", "......"];
        readonly legend: {
            readonly l: "leg";
            readonly b: "body";
            readonly s: "sheen";
            readonly m: "mark";
            readonly e: "eye";
        };
        readonly mirror: "x";
    }, {
        readonly pixels: readonly ["......", "......", "llll.e", "l...ss", "llllbm", "....bb", "l...bs", "......"];
        readonly legend: {
            readonly l: "leg";
            readonly b: "body";
            readonly s: "sheen";
            readonly m: "mark";
            readonly e: "eye";
        };
        readonly at: readonly [12, 0];
        readonly mirror: "x";
    }, {
        readonly outline: "edge";
    }];
};
export declare const slime: {
    readonly id: "slime";
    readonly about: "A green slime bobbing: tall, then squashed flat (2 frames of 10 x 8)";
    readonly tags: readonly ["sprite", "critter", "slime", "animated"];
    readonly size: readonly [20, 8];
    readonly frames: 2;
    readonly palette: {
        readonly glint: "white";
        readonly light: "lime";
        readonly mid: "green";
        readonly dark: "teal";
        readonly eye: "ink";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [string, string, string, string, string, string, string, string];
        readonly legend: {
            readonly w: "glint";
            readonly l: "light";
            readonly g: "mid";
            readonly t: "dark";
            readonly k: "eye";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const butterfly: {
    readonly id: "butterfly";
    readonly about: "A blue butterfly with white spots: wings open, then folded up (2 frames of 10 x 8)";
    readonly tags: readonly ["sprite", "critter", "butterfly", "animated"];
    readonly size: readonly [20, 8];
    readonly frames: 2;
    readonly palette: {
        readonly wing: "sky";
        readonly wing2: "blue";
        readonly spot: "white";
        readonly body: "night";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [".....", ".ss..", ".sssb", ".swsb", "..oob", ".ooo.", ".....", "....."];
        readonly legend: {
            readonly s: "wing";
            readonly o: "wing2";
            readonly w: "spot";
            readonly b: "body";
        };
        readonly mirror: "x";
    }, {
        readonly pixels: readonly [".....", ".....", "...sb", "...sb", "...ob", "...o.", ".....", "....."];
        readonly legend: {
            readonly s: "wing";
            readonly o: "wing2";
            readonly b: "body";
        };
        readonly at: readonly [10, 0];
        readonly mirror: "x";
    }, {
        readonly outline: "edge";
    }];
};
export declare const firefly: {
    readonly id: "firefly";
    readonly about: "A firefly glowing: a dim lime point, then a bright white heart in a lime halo (2 frames of 8 x 8)";
    readonly tags: readonly ["sprite", "critter", "firefly", "light", "animated"];
    readonly size: readonly [16, 8];
    readonly frames: 2;
    readonly palette: {
        readonly core: "white";
        readonly glow: "lime";
        readonly halo: "green";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [string, string, string, string, string, string, string, string];
        readonly legend: {
            readonly w: "core";
            readonly l: "glow";
        };
    }, {
        readonly outline: "halo";
    }];
};
export declare const fireBurst: {
    readonly id: "fire-burst";
    readonly about: "A burst of fire: a white-hot flash, flames thrown out, a ring of flame, scattered embers (4 frames of 12 x 12)";
    readonly tags: readonly ["sprite", "effect", "fire", "explosion", "animated"];
    readonly size: readonly [48, 12];
    readonly frames: 4;
    readonly palette: {
        readonly core: "white";
        readonly inner: "sand";
        readonly flame: "orange";
        readonly outer: "red";
        readonly edge: "plum";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [string, string, string, string, string, string, string, string, string, string, string, string];
        readonly legend: {
            readonly w: "core";
            readonly y: "inner";
            readonly o: "flame";
            readonly r: "outer";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const iceShards: {
    readonly id: "ice-shards";
    readonly about: "Ice shattering: a crystal with a white heart, shards flying out, shards scattered (3 frames of 12 x 12)";
    readonly tags: readonly ["sprite", "effect", "cold", "ice", "animated"];
    readonly size: readonly [36, 12];
    readonly frames: 3;
    readonly palette: {
        readonly core: "white";
        readonly ice: "cyan";
        readonly shade: "sky";
        readonly edge: "navy";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [string, string, string, string, string, string, string, string, string, string, string, string];
        readonly legend: {
            readonly w: "core";
            readonly c: "ice";
            readonly s: "shade";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const lightningSpark: {
    readonly id: "lightning-spark";
    readonly about: "An electric crackle: a short sand zigzag, then a forked one with a white-hot kink (2 frames of 10 x 10)";
    readonly tags: readonly ["sprite", "effect", "lightning", "spark", "animated"];
    readonly size: readonly [20, 10];
    readonly frames: 2;
    readonly palette: {
        readonly core: "white";
        readonly bolt: "sand";
        readonly edge: "plum";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [string, string, string, string, string, string, string, string, string, string];
        readonly legend: {
            readonly w: "core";
            readonly y: "bolt";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const poisonBubbles: {
    readonly id: "poison-bubbles";
    readonly about: "Poison bubbling: small bubbles rise, swell and pop into droplets (3 frames of 8 x 8)";
    readonly tags: readonly ["sprite", "effect", "poison", "bubbles", "animated"];
    readonly size: readonly [24, 8];
    readonly frames: 3;
    readonly palette: {
        readonly glint: "white";
        readonly light: "lime";
        readonly mid: "green";
        readonly edge: "teal";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [string, string, string, string, string, string, string, string];
        readonly legend: {
            readonly w: "glint";
            readonly l: "light";
            readonly g: "mid";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const healSparkles: {
    readonly id: "heal-sparkles";
    readonly about: "Healing sparkles: a green cross of light with a white heart rising, shrinking and fading (3 frames of 8 x 10)";
    readonly tags: readonly ["sprite", "effect", "heal", "sparkle", "animated"];
    readonly size: readonly [24, 10];
    readonly frames: 3;
    readonly palette: {
        readonly core: "white";
        readonly light: "lime";
        readonly faded: "green";
        readonly edge: "teal";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [string, string, string, string, string, string, string, string, string, string];
        readonly legend: {
            readonly w: "core";
            readonly l: "light";
            readonly f: "faded";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const bloodSplat: {
    readonly id: "blood-splat";
    readonly about: "Blood hitting the ground: a drop, a splash, a splat with droplets (3 frames of 10 x 8)";
    readonly tags: readonly ["sprite", "effect", "blood", "hit", "animated"];
    readonly size: readonly [30, 8];
    readonly frames: 3;
    readonly palette: {
        readonly light: "red";
        readonly dark: "plum";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [string, string, string, string, string, string, string, string];
        readonly legend: {
            readonly r: "light";
            readonly d: "dark";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const dustPuff: {
    readonly id: "dust-puff";
    readonly about: "A puff of dust kicked up from the ground, spreading and settling (3 frames of 10 x 8)";
    readonly tags: readonly ["sprite", "effect", "dust", "animated"];
    readonly size: readonly [30, 8];
    readonly frames: 3;
    readonly palette: {
        readonly light: "sand";
        readonly mid: "mist";
        readonly dark: "slate";
        readonly edge: "night";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [string, string, string, string, string, string, string, string];
        readonly legend: {
            readonly l: "light";
            readonly m: "mid";
            readonly d: "dark";
        };
    }, {
        readonly outline: "edge";
    }];
};
export declare const SPRITES: ({
    readonly id: "gem-icon";
    readonly about: "A cut gem with a glint, outlined: an icon for the HUD or loot";
    readonly tags: readonly ["icon", "loot", "sprite"];
    readonly size: readonly [10, 9];
    readonly palette: {
        readonly glint: "white";
        readonly light: "cyan";
        readonly mid: "sky";
        readonly dark: "blue";
        readonly edge: "navy";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [".llg", "llmm", "lmmm", "dddm", ".ddm", "..dm", "...d"];
        readonly legend: {
            readonly g: "glint";
            readonly l: "light";
            readonly m: "mid";
            readonly d: "dark";
        };
        readonly at: readonly [1, 1];
        readonly mirror: "x";
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "coin-spin";
    readonly about: "A gold coin turning: face, three-quarter, edge, three-quarter (4 frames of 8 x 8)";
    readonly tags: readonly ["coin", "loot", "sprite", "animated"];
    readonly size: readonly [32, 8];
    readonly frames: 4;
    readonly palette: {
        readonly face: "sand";
        readonly rim: "orange";
        readonly shine: "white";
        readonly edge: "plum";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["................................", "..ssss.....ss......oo......ss...", ".swssso...swso.....oo.....osws..", ".swssso...swso.....oo.....osws..", ".ssssso...ssso.....oo.....osss..", ".ssssso...ssso.....oo.....osss..", "..oooo.....oo......oo......oo...", "................................"];
        readonly legend: {
            readonly s: "face";
            readonly o: "rim";
            readonly w: "shine";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "potion-red";
    readonly about: "A round flask of red potion with a cork and a glint: a health potion icon";
    readonly tags: readonly ["icon", "item", "potion", "loot"];
    readonly size: readonly [12, 13];
    readonly palette: {
        readonly cork: "sand";
        readonly liquid: "red";
        readonly shade: "plum";
        readonly glint: "white";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["............", "....cccc....", ".....cc.....", "....wrrr....", "..rrwrrrrr..", ".rrwrrrrrrd.", ".rrwrrrrrdd.", ".rrrrrrrrdd.", ".rrrrrrrddd.", ".rrrrrrrddd.", "..rrrrrddd..", "....dddd....", "............"];
        readonly legend: {
            readonly c: "cork";
            readonly r: "liquid";
            readonly d: "shade";
            readonly w: "glint";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "potion-blue";
    readonly about: "A round flask of blue potion with a cork and a glint: a mana potion icon";
    readonly tags: readonly ["icon", "item", "potion", "loot"];
    readonly size: readonly [12, 13];
    readonly palette: {
        readonly cork: "sand";
        readonly liquid: "sky";
        readonly shade: "blue";
        readonly glint: "white";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["............", "....cccc....", ".....cc.....", "....wrrr....", "..rrwrrrrr..", ".rrwrrrrrrd.", ".rrwrrrrrdd.", ".rrrrrrrrdd.", ".rrrrrrrddd.", ".rrrrrrrddd.", "..rrrrrddd..", "....dddd....", "............"];
        readonly legend: {
            readonly c: "cork";
            readonly r: "liquid";
            readonly d: "shade";
            readonly w: "glint";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "key";
    readonly about: "A gold key lying flat: a round bow with a hole, the shaft and two teeth";
    readonly tags: readonly ["icon", "item", "key", "loot"];
    readonly size: readonly [16, 10];
    readonly palette: {
        readonly light: "sand";
        readonly dark: "orange";
        readonly glint: "white";
        readonly edge: "plum";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["................", "..wlll..........", ".llllld.........", ".ll..ld.........", ".ll..ldllllllll.", ".ld..dddddddddd.", ".lddddd...dd.dd.", "..dddd....dd.dd.", ".............dd.", "................"];
        readonly legend: {
            readonly l: "light";
            readonly d: "dark";
            readonly w: "glint";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "scroll";
    readonly about: "A parchment scroll between two rolls, three lines of writing";
    readonly tags: readonly ["icon", "item", "scroll", "loot"];
    readonly size: readonly [14, 14];
    readonly palette: {
        readonly paper: "sand";
        readonly shade: "orange";
        readonly glint: "white";
        readonly edge: "plum";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["..............", ".wlllllllllll.", ".dddddddddddd.", "..llllllllll..", "..lddddddlll..", "..llllllllll..", "..lddddddddl..", "..llllllllll..", "..ldddddllll..", "..llllllllll..", ".dddddddddddd.", ".wlllllllllll.", ".dddddddddddd.", ".............."];
        readonly legend: {
            readonly l: "paper";
            readonly d: "shade";
            readonly w: "glint";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "ring";
    readonly about: "A gold ring set with a red stone, the hole showing through";
    readonly tags: readonly ["icon", "item", "jewel", "loot"];
    readonly size: readonly [12, 11];
    readonly palette: {
        readonly light: "sand";
        readonly dark: "orange";
        readonly stone: "red";
        readonly glint: "white";
        readonly edge: "plum";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["............", "....gwgg....", "...lggggd...", "..ll....dd..", ".ll......dd.", ".ll......dd.", ".ll......dd.", ".ld......dd.", "..dd....dd..", "...dddddd...", "............"];
        readonly legend: {
            readonly l: "light";
            readonly d: "dark";
            readonly g: "stone";
            readonly w: "glint";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "amulet";
    readonly about: "A gold pendant set with a green stone, on a chain";
    readonly tags: readonly ["icon", "item", "jewel", "loot"];
    readonly size: readonly [12, 13];
    readonly palette: {
        readonly light: "sand";
        readonly dark: "orange";
        readonly stone: "green";
        readonly glint: "lime";
        readonly edge: "plum";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["............", ".l........l.", ".l........l.", "..l......l..", "..l......l..", "...l....l...", "...l....l...", "....llll....", "...lwwggd...", "...lwgggd...", "...lggggd...", "....dddd....", "............"];
        readonly legend: {
            readonly l: "light";
            readonly d: "dark";
            readonly g: "stone";
            readonly w: "glint";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "shield-icon";
    readonly about: "A heater shield: a blue field in a gold rim, lit on its left half";
    readonly tags: readonly ["icon", "item", "armor", "loot"];
    readonly size: readonly [12, 13];
    readonly palette: {
        readonly rim: "sand";
        readonly field: "blue";
        readonly shade: "navy";
        readonly glint: "white";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["............", ".rrrrrrrrrr.", ".rwfffFFFFr.", ".rwfffFFFFr.", ".rffffFFFFr.", ".rffffFFFFr.", ".rffffFFFFr.", ".rffffFFFFr.", ".rrfffFFFrr.", "..rrffFFrr..", "...rrfFrr...", "....rrrr....", "............"];
        readonly legend: {
            readonly r: "rim";
            readonly f: "field";
            readonly F: "shade";
            readonly w: "glint";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "helmet-icon";
    readonly about: "A steel helm with an eye slit and a red crest";
    readonly tags: readonly ["icon", "item", "armor", "loot"];
    readonly size: readonly [12, 12];
    readonly palette: {
        readonly light: "mist";
        readonly dark: "slate";
        readonly crest: "red";
        readonly glint: "white";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["............", ".....pp.....", ".....pp.....", "...mmmmss...", "..mwmmmsss..", ".mwmmmmssss.", ".mmmmmmssss.", ".m........s.", ".mmmmmmssss.", ".mmmmmsssss.", ".mmmmmmssss.", "............"];
        readonly legend: {
            readonly m: "light";
            readonly s: "dark";
            readonly p: "crest";
            readonly w: "glint";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "boots-icon";
    readonly about: "A leather boot with a folded cuff and a dark sole, toe to the right";
    readonly tags: readonly ["icon", "item", "armor", "loot"];
    readonly size: readonly [12, 11];
    readonly palette: {
        readonly cuff: "sand";
        readonly leather: "orange";
        readonly shade: "red";
        readonly sole: "plum";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["............", ".ccccccc....", "..lllld.....", "..lllld.....", "..lllld.....", "..lllld.....", "..llllldd...", "..llllclldd.", "..lllllllld.", "..ppp..pppp.", "............"];
        readonly legend: {
            readonly c: "cuff";
            readonly l: "leather";
            readonly d: "shade";
            readonly p: "sole";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "armor-icon";
    readonly about: "A steel breastplate with shoulder guards and a gold belt";
    readonly tags: readonly ["icon", "item", "armor", "loot"];
    readonly size: readonly [14, 12];
    readonly palette: {
        readonly light: "mist";
        readonly dark: "slate";
        readonly belt: "sand";
        readonly glint: "white";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["..............", ".mmmm....ssss.", ".mwmmm..sssss.", ".mmmmmmssssss.", "..mmmmmsssss..", "...mmmmssss...", "...mmmmssss...", "...mmmmssss...", "...bbbbbbbb...", "...mmmmssss...", "..mmmmmsssss..", ".............."];
        readonly legend: {
            readonly m: "light";
            readonly s: "dark";
            readonly b: "belt";
            readonly w: "glint";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "sword-icon";
    readonly about: "A straight sword, point up: a two-tone blade, a gold guard and pommel";
    readonly tags: readonly ["icon", "item", "weapon", "loot"];
    readonly size: readonly [10, 16];
    readonly palette: {
        readonly light: "mist";
        readonly dark: "slate";
        readonly gold: "sand";
        readonly glint: "white";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["..........", "....l.....", "....ls....", "....ws....", "....ws....", "....ls....", "....ls....", "....ls....", "....ls....", "....ls....", ".gggggggg.", "....ss....", "....ss....", "....gg....", "....gg....", ".........."];
        readonly legend: {
            readonly l: "light";
            readonly s: "dark";
            readonly g: "gold";
            readonly w: "glint";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "bow-icon";
    readonly about: "A wooden bow, upright, with a wrapped grip and its string";
    readonly tags: readonly ["icon", "item", "weapon", "loot"];
    readonly size: readonly [10, 16];
    readonly palette: {
        readonly light: "orange";
        readonly dark: "red";
        readonly grip: "sand";
        readonly string: "mist";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["..........", "......ll..", ".....lls..", "....gl.s..", "...ld..s..", "...ld..s..", "..gg...s..", "..gg...s..", "..gg...s..", "..gg...s..", "...ld..s..", "...ld..s..", "....dd.s..", ".....dds..", "......dd..", ".........."];
        readonly legend: {
            readonly l: "light";
            readonly d: "dark";
            readonly g: "grip";
            readonly s: "string";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "gold-icon";
    readonly about: "Two stacks of gold coins, a tall one and a short one beside it";
    readonly tags: readonly ["icon", "item", "coin", "loot"];
    readonly size: readonly [15, 14];
    readonly palette: {
        readonly light: "sand";
        readonly dark: "orange";
        readonly glint: "white";
        readonly edge: "plum";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["...............", "..llll.........", ".lwllll........", ".llllll........", ".dddddd........", ".llllll..llll..", ".dddddd.lwllll.", ".llllll.llllll.", ".dddddd.dddddd.", ".llllll.llllll.", ".dddddd.dddddd.", ".llllll.llllll.", "..dddd...dddd..", "..............."];
        readonly legend: {
            readonly l: "light";
            readonly d: "dark";
            readonly w: "glint";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "heart";
    readonly about: "A red heart with a glint: health";
    readonly tags: readonly ["icon", "ui", "health"];
    readonly size: readonly [8, 8];
    readonly palette: {
        readonly body: "red";
        readonly shade: "plum";
        readonly glint: "white";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["........", ".rr..rr.", ".rwrrrr.", ".rrrrrd.", ".rrrrdd.", "..rrdd..", "...dd...", "........"];
        readonly legend: {
            readonly r: "body";
            readonly d: "shade";
            readonly w: "glint";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "star";
    readonly about: "A gold five-pointed star with a glint: a rating or a favourite";
    readonly tags: readonly ["icon", "ui", "rating"];
    readonly size: readonly [8, 8];
    readonly palette: {
        readonly body: "sand";
        readonly shade: "orange";
        readonly glint: "white";
        readonly edge: "plum";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["........", "...ws...", "...ss...", ".ssssss.", "..ssso..", "..ssoo..", ".ss..oo.", "........"];
        readonly legend: {
            readonly s: "body";
            readonly o: "shade";
            readonly w: "glint";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "skull";
    readonly about: "A white skull with dark eyes: death, danger or a kill count";
    readonly tags: readonly ["icon", "ui", "death"];
    readonly size: readonly [8, 8];
    readonly palette: {
        readonly bone: "white";
        readonly shade: "mist";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["........", "..bbbb..", ".bbbbbs.", ".b.bb.s.", ".b.bs.s.", ".bbbsss.", "..b..s..", "........"];
        readonly legend: {
            readonly b: "bone";
            readonly s: "shade";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "spark";
    readonly about: "A spark: a white point that flares into a cross and breaks into fading bits (4 frames of 8 x 8)";
    readonly tags: readonly ["icon", "effect", "sprite", "animated"];
    readonly size: readonly [32, 8];
    readonly frames: 4;
    readonly palette: {
        readonly core: "white";
        readonly flare: "sand";
        readonly tip: "orange";
        readonly ember: "red";
        readonly edge: "plum";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [string, string, string, string, string, string, string, string];
        readonly legend: {
            readonly c: "core";
            readonly f: "flare";
            readonly t: "tip";
            readonly e: "ember";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "smoke-puff";
    readonly about: "A puff of smoke that swells, then thins into wisps (4 frames of 8 x 8)";
    readonly tags: readonly ["icon", "effect", "sprite", "animated"];
    readonly size: readonly [32, 8];
    readonly frames: 4;
    readonly palette: {
        readonly light: "white";
        readonly mid: "mist";
        readonly dark: "slate";
        readonly edge: "night";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [string, string, string, string, string, string, string, string];
        readonly legend: {
            readonly l: "light";
            readonly m: "mid";
            readonly d: "dark";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "axe-icon";
    readonly about: "A bearded axe, haft up: a steel head with a bright cutting edge on the left, a wooden haft";
    readonly tags: readonly ["icon", "item", "weapon", "axe", "loot"];
    readonly size: readonly [12, 16];
    readonly palette: {
        readonly light: "mist";
        readonly dark: "slate";
        readonly glint: "white";
        readonly wood: "orange";
        readonly grain: "red";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["............", ".wl....hd...", ".wll...hd...", ".wllllllls..", ".wlllllllss.", ".wllsssssss.", ".wss...hd...", ".ws....hd...", ".......hd...", ".......hd...", ".......hd...", ".......hd...", ".......hd...", ".......hd...", ".......dd...", "............"];
        readonly legend: {
            readonly l: "light";
            readonly s: "dark";
            readonly w: "glint";
            readonly h: "wood";
            readonly d: "grain";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "mace-icon";
    readonly about: "A spiked mace, head up: a round steel head with three spikes on a wooden haft";
    readonly tags: readonly ["icon", "item", "weapon", "mace", "loot"];
    readonly size: readonly [12, 16];
    readonly palette: {
        readonly light: "mist";
        readonly dark: "slate";
        readonly glint: "white";
        readonly wood: "orange";
        readonly grain: "red";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["............", ".....ls.....", "...lllsss...", "..lwllssss..", ".llllllssss.", "..lllsssss..", "...lsssss...", ".....hd.....", ".....hd.....", ".....hd.....", ".....hd.....", ".....hd.....", ".....hd.....", ".....hd.....", ".....ss.....", "............"];
        readonly legend: {
            readonly l: "light";
            readonly s: "dark";
            readonly w: "glint";
            readonly h: "wood";
            readonly d: "grain";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "staff-icon";
    readonly about: "A mage's staff: a wooden pole whose forked head cradles a glowing blue orb";
    readonly tags: readonly ["icon", "item", "weapon", "staff", "magic", "loot"];
    readonly size: readonly [10, 16];
    readonly palette: {
        readonly glow: "cyan";
        readonly orb: "sky";
        readonly orb2: "blue";
        readonly glint: "white";
        readonly wood: "orange";
        readonly grain: "red";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["..........", "..h.cc.d..", "..hcwccd..", "..hcssbd..", "..hbbbbd..", "...hhdd...", "....hd....", "....hd....", "....hd....", "....hd....", "....hd....", "....hd....", "....hd....", "....hd....", "....dd....", ".........."];
        readonly legend: {
            readonly c: "glow";
            readonly s: "orb";
            readonly b: "orb2";
            readonly w: "glint";
            readonly h: "wood";
            readonly d: "grain";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "wand-icon";
    readonly about: "A magic wand: a slim dark rod with a gold band, tipped with a gold star";
    readonly tags: readonly ["icon", "item", "weapon", "wand", "magic", "loot"];
    readonly size: readonly [10, 15];
    readonly palette: {
        readonly star: "sand";
        readonly shade: "orange";
        readonly glint: "white";
        readonly rod: "red";
        readonly rod2: "plum";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["..........", "....ws....", "....ss....", "..ssssss..", "...ssso...", "...ssoo...", "..sshdoo..", "....hd....", "....hd....", "....hd....", "....ss....", "....hd....", "....hd....", "....dd....", ".........."];
        readonly legend: {
            readonly s: "star";
            readonly o: "shade";
            readonly w: "glint";
            readonly h: "rod";
            readonly d: "rod2";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "dagger-icon";
    readonly about: "A dagger, point up: a short ridged blade, a gold crossguard and pommel, a red grip";
    readonly tags: readonly ["icon", "item", "weapon", "dagger", "loot"];
    readonly size: readonly [9, 13];
    readonly palette: {
        readonly light: "mist";
        readonly dark: "slate";
        readonly glint: "white";
        readonly gold: "sand";
        readonly grip: "red";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [".........", "....l....", "...lls...", "...lws...", "...lws...", "...lls...", "...lls...", ".ggggggg.", "....r....", "....r....", "....r....", "...ggg...", "........."];
        readonly legend: {
            readonly l: "light";
            readonly s: "dark";
            readonly w: "glint";
            readonly g: "gold";
            readonly r: "grip";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "spear-icon";
    readonly about: "A spear, point up: a leaf-shaped steel head bound with red cord to a long wooden shaft";
    readonly tags: readonly ["icon", "item", "weapon", "spear", "loot"];
    readonly size: readonly [10, 16];
    readonly palette: {
        readonly light: "mist";
        readonly dark: "slate";
        readonly glint: "white";
        readonly cord: "red";
        readonly wood: "orange";
        readonly grain: "plum";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["..........", "....ls....", "...lwss...", "...lwss...", "...llss...", "...llss...", "....ls....", "...rrrr...", "....hd....", "....hd....", "....hd....", "....hd....", "....hd....", "....hd....", "....hd....", ".........."];
        readonly legend: {
            readonly l: "light";
            readonly s: "dark";
            readonly w: "glint";
            readonly r: "cord";
            readonly h: "wood";
            readonly d: "grain";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "round-shield-icon";
    readonly about: "A round wooden shield: planks in a steel rim, a steel boss in the middle";
    readonly tags: readonly ["icon", "item", "armor", "shield", "loot"];
    readonly size: readonly [14, 14];
    readonly palette: {
        readonly light: "mist";
        readonly dark: "slate";
        readonly glint: "white";
        readonly wood: "orange";
        readonly grain: "red";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["..............", ".....rrrr.....", "...rroooorr...", "..rodoooodoR..", "..rodoooodoR..", ".roodommodooR.", ".roodmwmsdooR.", ".roodmmssdooR.", ".roodossodooR.", "..rodoooodoR..", "..rodoooodoR..", "...RRooooRR...", ".....RRRR.....", ".............."];
        readonly legend: {
            readonly r: "light";
            readonly R: "dark";
            readonly m: "light";
            readonly s: "dark";
            readonly w: "glint";
            readonly o: "wood";
            readonly d: "grain";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "gloves-icon";
    readonly about: "A leather glove, fingers up and thumb out, with a sand-coloured cuff";
    readonly tags: readonly ["icon", "item", "armor", "gloves", "loot"];
    readonly size: readonly [12, 12];
    readonly palette: {
        readonly cuff: "sand";
        readonly leather: "orange";
        readonly shade: "red";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["............", ".....l.l....", "...l.l.l.d..", "...l.l.l.d..", ".l.lllllld..", ".llllllldd..", "..lllllldd..", "...llllldd..", "...lllldd...", "...cccccc...", "...cccccc...", "............"];
        readonly legend: {
            readonly c: "cuff";
            readonly l: "leather";
            readonly d: "shade";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "belt-icon";
    readonly about: "A leather belt buckled into a loop, seen from the front: a square gold buckle with its prong, the strap end hanging free";
    readonly tags: readonly ["icon", "item", "armor", "belt", "loot"];
    readonly size: readonly [13, 12];
    readonly palette: {
        readonly gold: "sand";
        readonly leather: "orange";
        readonly shade: "red";
        readonly prong: "mist";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [".............", ".............", "...ddddddd...", ".ddd.....ddd.", ".dl.......ld.", ".lll.....lll.", "..lllggggll..", "...llgppgl...", ".....gggg.ll.", "..........ll.", ".............", "............."];
        readonly legend: {
            readonly g: "gold";
            readonly l: "leather";
            readonly d: "shade";
            readonly p: "prong";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "cloak-icon";
    readonly about: "A green hooded cloak with a gold clasp, the face in shadow under the hood";
    readonly tags: readonly ["icon", "item", "armor", "cloak", "loot"];
    readonly size: readonly [12, 14];
    readonly palette: {
        readonly light: "green";
        readonly dark: "teal";
        readonly clasp: "sand";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["............", "....lllD....", "...llllDD...", "...ll..DD...", "...ll..DD...", "...llccDD...", "..llllDDDD..", "..llllDDDD..", "..lDllDDlD..", ".llDllDDlDD.", ".llDllDDlDD.", ".llDllDDlDD.", ".lllllDDDDD.", "............"];
        readonly legend: {
            readonly l: "light";
            readonly D: "dark";
            readonly c: "clasp";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "quiver-icon";
    readonly about: "A leather quiver slung on the diagonal, two gold bands round it, three fletched arrows fanning out of its mouth";
    readonly tags: readonly ["icon", "item", "ammo", "quiver", "loot"];
    readonly size: readonly [13, 13];
    readonly palette: {
        readonly fletch: "white";
        readonly fletch2: "sky";
        readonly shaft: "sand";
        readonly leather: "red";
        readonly shade: "plum";
        readonly band: "sand";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [".............", "....ww...ff..", "....ww...ff..", ".....hh.hh...", "......hhh..ww", "......ghhhhww", ".....gggl....", "....lllgd....", "...llllld....", "..gggldd.....", ".lllggd......", ".llldd.......", "............."];
        readonly legend: {
            readonly w: "fletch";
            readonly f: "fletch2";
            readonly h: "shaft";
            readonly l: "leather";
            readonly d: "shade";
            readonly g: "band";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "arrows-icon";
    readonly about: "Three arrows, points up and staggered, with red fletching: ammunition";
    readonly tags: readonly ["icon", "item", "ammo", "arrow", "loot"];
    readonly size: readonly [13, 15];
    readonly palette: {
        readonly head: "mist";
        readonly shaft: "orange";
        readonly fletch: "red";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [".............", "......m......", ".....mmm.....", "..m..mmm..m..", ".mmm..h..mmm.", ".mmm..h..mmm.", "..h...h...h..", "..h...h...h..", "..h...h...h..", "..h...h...h..", "..h..fhf..h..", "..h..fhf..h..", ".fhf.....fhf.", ".fhf.....fhf.", "............."];
        readonly legend: {
            readonly m: "head";
            readonly h: "shaft";
            readonly f: "fletch";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "bomb-icon";
    readonly about: "A round black bomb with a steel cap and a lit fuse";
    readonly tags: readonly ["icon", "item", "bomb", "consumable", "loot"];
    readonly size: readonly [12, 14];
    readonly palette: {
        readonly glint: "mist";
        readonly body: "slate";
        readonly shade: "night";
        readonly fuse: "orange";
        readonly spark: "sand";
        readonly flare: "white";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["............", "........ws..", "......ffss..", ".....ff.....", "....gg......", "...bbbb.....", "..bbbbbb....", ".bggbbbbd...", ".bgbbbbbd...", ".bbbbbbdd...", ".bbbbbbdd...", "..bbbbdd....", "...dddd.....", "............"];
        readonly legend: {
            readonly g: "glint";
            readonly b: "body";
            readonly d: "shade";
            readonly f: "fuse";
            readonly s: "spark";
            readonly w: "flare";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "torch-icon";
    readonly about: "A burning torch: a flame with a white heart over a wrapped head and a wooden handle";
    readonly tags: readonly ["icon", "item", "torch", "light", "loot"];
    readonly size: readonly [8, 16];
    readonly palette: {
        readonly core: "white";
        readonly flame: "sand";
        readonly flame2: "orange";
        readonly wrap: "slate";
        readonly wood: "orange";
        readonly grain: "red";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["........", "....o...", "...oo...", "..oyoo..", "..oyyo..", ".oywyyo.", ".oyyyyo.", ".ooyyoo.", "..cccc..", "..cccc..", "...hd...", "...hd...", "...hd...", "...hd...", "...dd...", "........"];
        readonly legend: {
            readonly w: "core";
            readonly y: "flame";
            readonly o: "flame2";
            readonly c: "wrap";
            readonly h: "wood";
            readonly d: "grain";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "map-icon";
    readonly about: "A folded treasure map: three parchment panels, a dashed red trail to a red X";
    readonly tags: readonly ["icon", "item", "map", "quest", "loot"];
    readonly size: readonly [14, 12];
    readonly palette: {
        readonly paper: "sand";
        readonly fold: "orange";
        readonly mark: "red";
        readonly edge: "plum";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["..............", ".pppp....pppp.", ".ppppPPPPpppp.", ".ppppPPPPmppm.", ".ppppPPPPpmmp.", ".ppppPPPPpmmp.", ".ppppPPPPmppm.", ".ppppPPmmpppp.", ".pmmpPPPPpppp.", ".ppppPPPPpppp.", ".....PPPP.....", ".............."];
        readonly legend: {
            readonly p: "paper";
            readonly P: "fold";
            readonly m: "mark";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "book-icon";
    readonly about: "A closed blue tome with gold bands and a gold boss, its white pages showing";
    readonly tags: readonly ["icon", "item", "book", "magic", "loot"];
    readonly size: readonly [12, 13];
    readonly palette: {
        readonly cover: "blue";
        readonly shade: "navy";
        readonly gold: "sand";
        readonly pages: "white";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["............", ".Scccccccc..", ".ScccccccCp.", ".ScggggggCp.", ".ScccccccCp.", ".ScccggccCp.", ".ScccggccCp.", ".ScccccccCp.", ".ScggggggCp.", ".ScccccccCp.", ".SCCCCCCCCp.", "..ppppppppp.", "............"];
        readonly legend: {
            readonly S: "shade";
            readonly c: "cover";
            readonly C: "shade";
            readonly g: "gold";
            readonly p: "pages";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "coin-pouch-icon";
    readonly about: "A leather coin pouch tied at the neck, a gold coin stamped on its front";
    readonly tags: readonly ["icon", "item", "coin", "pouch", "loot"];
    readonly size: readonly [12, 14];
    readonly palette: {
        readonly leather: "orange";
        readonly shade: "red";
        readonly tie: "sand";
        readonly edge: "plum";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["............", "...ll..ld...", "....llld....", "....tttt....", "....llld....", "...llllld...", "..lllllldd..", ".llllllllld.", ".llllttllld.", ".llllttllld.", ".lllllllldd.", "..lllllddd..", "...dddddd...", "............"];
        readonly legend: {
            readonly l: "leather";
            readonly d: "shade";
            readonly t: "tie";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "meat-icon";
    readonly about: "A roast drumstick: browned meat with a crisp highlight, the white bone sticking out";
    readonly tags: readonly ["icon", "item", "food", "consumable", "loot"];
    readonly size: readonly [12, 12];
    readonly palette: {
        readonly crisp: "sand";
        readonly meat: "orange";
        readonly shade: "red";
        readonly bone: "white";
        readonly bone2: "mist";
        readonly edge: "plum";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["............", "...oooo.....", "..ossoooo...", ".ossoooooo..", ".osooooorr..", ".ooooooorr..", "..oooorrrr..", "...rrrrrbb..", ".......bbm..", ".......bbbb.", "........bmm.", "............"];
        readonly legend: {
            readonly s: "crisp";
            readonly o: "meat";
            readonly r: "shade";
            readonly b: "bone";
            readonly m: "bone2";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "herb-icon";
    readonly about: "A sprig of green herb: paired leaves up a thin stem, lit on the left";
    readonly tags: readonly ["icon", "item", "herb", "consumable", "loot"];
    readonly size: readonly [10, 13];
    readonly palette: {
        readonly light: "lime";
        readonly dark: "green";
        readonly stem: "teal";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["..........", "....ll....", "....ld....", ".ll.s.dd..", ".lllsddd..", "..llsdd...", "....s.....", ".ll.s.dd..", ".lllsddd..", "..llsdd...", "....s.....", "....s.....", ".........."];
        readonly legend: {
            readonly l: "light";
            readonly d: "dark";
            readonly s: "stem";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "rune-stone-icon";
    readonly about: "A flat dark pebble carved with a glowing cyan rune (a trident)";
    readonly tags: readonly ["icon", "item", "rune", "magic", "loot"];
    readonly size: readonly [12, 11];
    readonly palette: {
        readonly glint: "mist";
        readonly stone: "slate";
        readonly shade: "night";
        readonly rune: "cyan";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["............", "...hhmmms...", "..hmmmmmss..", ".hmmcmcmcss.", ".mmmcmcmcss.", ".mmmcccccss.", ".mmmmmcmsss.", ".mmmmmcssss.", "..msssssss..", "...ssssss...", "............"];
        readonly legend: {
            readonly h: "glint";
            readonly m: "stone";
            readonly s: "shade";
            readonly c: "rune";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "fireball-icon";
    readonly about: "A fireball flying up and right: a white-hot heart in sand and orange, a red flame trail";
    readonly tags: readonly ["icon", "skill", "fire", "fireball"];
    readonly size: readonly [12, 12];
    readonly palette: {
        readonly core: "white";
        readonly inner: "sand";
        readonly flame: "orange";
        readonly outer: "red";
        readonly edge: "plum";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["............", "......oooo..", ".....oyyyyo.", "...rroywwyo.", "..roooywwyo.", ".rooooyyyyo.", ".roooooooo..", ".rrooorr....", ".rr.rrr.....", ".rr..r......", ".r..........", "............"];
        readonly legend: {
            readonly w: "core";
            readonly y: "inner";
            readonly o: "flame";
            readonly r: "outer";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "frost-nova-icon";
    readonly about: "A burst of frost: an eight-pointed ice star round a white core";
    readonly tags: readonly ["icon", "skill", "cold", "frost", "nova"];
    readonly size: readonly [13, 13];
    readonly palette: {
        readonly core: "white";
        readonly ice: "cyan";
        readonly shade: "sky";
        readonly edge: "navy";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [".............", "......c......", "......c......", "...cc.c.ss...", "...cccwsss...", "....cwwws....", ".cccwwwwwsss.", "....cwwws....", "...cccwsss...", "...cc.s.ss...", "......s......", "......s......", "............."];
        readonly legend: {
            readonly w: "core";
            readonly c: "ice";
            readonly s: "shade";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "lightning-bolt-icon";
    readonly about: "A zigzag lightning bolt striking down, white along its lit edge, sand and orange";
    readonly tags: readonly ["icon", "skill", "lightning", "bolt"];
    readonly size: readonly [11, 14];
    readonly palette: {
        readonly core: "white";
        readonly bolt: "sand";
        readonly shade: "orange";
        readonly edge: "plum";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["...........", ".....wyyy..", ".....wyyo..", "....wyyo...", "....wyyo...", "...wyyo....", "...wyyyyyo.", "...ooooyyo.", "......yyo..", "......yo...", ".....yyo...", ".....yo....", ".....o.....", "..........."];
        readonly legend: {
            readonly w: "core";
            readonly y: "bolt";
            readonly o: "shade";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "poison-cloud-icon";
    readonly about: "A billowing green cloud of poison with a white skull in it";
    readonly tags: readonly ["icon", "skill", "poison", "cloud"];
    readonly size: readonly [13, 11];
    readonly palette: {
        readonly light: "lime";
        readonly mid: "green";
        readonly dark: "teal";
        readonly bone: "white";
        readonly eye: "ink";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [".............", "...ll...lll..", "..llll.lllll.", ".llllbbbllgg.", ".lllbbbbblgg.", ".lllbkbkbggg.", ".llgbbbbbggt.", ".lgggbgbggtt.", "..gggggtttt..", "...ggg.ttt...", "............."];
        readonly legend: {
            readonly l: "light";
            readonly g: "mid";
            readonly t: "dark";
            readonly b: "bone";
            readonly k: "eye";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "heal-icon";
    readonly about: "A bold green cross with a white glint, two sparkles beside it: healing";
    readonly tags: readonly ["icon", "skill", "heal", "holy"];
    readonly size: readonly [12, 12];
    readonly palette: {
        readonly glint: "white";
        readonly light: "lime";
        readonly mid: "green";
        readonly edge: "teal";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["............", "....lllg.ww.", "....lwlg.ww.", "....lllg....", ".llllllllll.", ".lllllllllg.", ".lllllllllg.", ".ggglllgggg.", "....lllg....", ".ww.lllg....", ".ww.gggg....", "............"];
        readonly legend: {
            readonly w: "glint";
            readonly l: "light";
            readonly g: "mid";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "shield-bubble-icon";
    readonly about: "A protective bubble: a cyan ring with a white glint round a small gold shield";
    readonly tags: readonly ["icon", "skill", "shield", "buff"];
    readonly size: readonly [14, 14];
    readonly palette: {
        readonly glint: "white";
        readonly light: "cyan";
        readonly mid: "sky";
        readonly dark: "blue";
        readonly gold: "sand";
        readonly gold2: "orange";
        readonly edge: "navy";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["..............", ".....cccc.....", "...cwwccsss...", "..ccc....sss..", "..cc......ss..", ".cc.ggggoo.sb.", ".cc.ggggoo.bb.", ".cc.ggggoo.bb.", ".cs..ggoo..bb.", "..ss..go..bb..", "..sss....bbb..", "...sssbbbbb...", ".....bbbb.....", ".............."];
        readonly legend: {
            readonly w: "glint";
            readonly c: "light";
            readonly s: "mid";
            readonly b: "dark";
            readonly g: "gold";
            readonly o: "gold2";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "dash-icon";
    readonly about: "A dash: a white arrowhead pointing right, trailing grey speed lines";
    readonly tags: readonly ["icon", "skill", "movement", "dash"];
    readonly size: readonly [13, 11];
    readonly palette: {
        readonly light: "white";
        readonly mid: "mist";
        readonly dark: "slate";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [".............", ".......w.....", ".......ww....", "sssss..www...", ".......wwww..", ".mmmmmmwwwww.", ".......mmmm..", "sssss..mmm...", ".......mm....", ".......m.....", "............."];
        readonly legend: {
            readonly w: "light";
            readonly m: "mid";
            readonly s: "dark";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "whirlwind-icon";
    readonly about: "A whirlwind: a funnel of white and grey bands narrowing to a point";
    readonly tags: readonly ["icon", "skill", "physical", "whirlwind"];
    readonly size: readonly [12, 12];
    readonly palette: {
        readonly light: "white";
        readonly mid: "mist";
        readonly dark: "slate";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["............", ".wwwwwwwwmm.", ".wwwwwwwwmm.", "...mmmmmmss.", "...mmmmmmss.", "..wwwwmm....", "..wwwwmm....", ".....mmss...", ".....mmss...", "....wm......", "....wm......", "............"];
        readonly legend: {
            readonly w: "light";
            readonly m: "mid";
            readonly s: "dark";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "leap-icon";
    readonly about: "A leap: a figure flying forward off the end of a dashed arc, coming down onto a burst";
    readonly tags: readonly ["icon", "skill", "movement", "leap"];
    readonly size: readonly [13, 12];
    readonly palette: {
        readonly glint: "white";
        readonly light: "sand";
        readonly dark: "orange";
        readonly edge: "plum";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [".............", "..........ww.", "..........ww.", "...ll...llll.", ".l.....llll..", ".l.......ll..", "........llll.", ".......ll..ll", ".......l....l", ".............", ".....o.ooo.o.", "....ooooooooo"];
        readonly legend: {
            readonly w: "glint";
            readonly l: "light";
            readonly o: "dark";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "arrow-volley-icon";
    readonly about: "A volley: three arrows falling point down, staggered, with white fletching";
    readonly tags: readonly ["icon", "skill", "bow", "arrow", "volley"];
    readonly size: readonly [13, 11];
    readonly palette: {
        readonly fletch: "white";
        readonly shaft: "orange";
        readonly head: "mist";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [".............", ".fhf.........", ".fhf.....fhf.", "..h..fhf.fhf.", "..h..fhf..h..", "..h...h...h..", ".mmm..h...h..", "..m...h..mmm.", ".....mmm..m..", "......m......", "............."];
        readonly legend: {
            readonly f: "fletch";
            readonly h: "shaft";
            readonly m: "head";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "summon-icon";
    readonly about: "A summoning: a white skull rising out of a glowing cyan circle";
    readonly tags: readonly ["icon", "skill", "summon", "minion"];
    readonly size: readonly [12, 12];
    readonly palette: {
        readonly bone: "white";
        readonly shade: "mist";
        readonly glow: "cyan";
        readonly glow2: "sky";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["............", "....bbbb....", "...bbbbbs...", "...b.bb.s...", "...b.bs.s...", "...bbbsss...", "....b..s....", "............", "...cccccc...", ".cc......gg.", "...gggggg...", "............"];
        readonly legend: {
            readonly b: "bone";
            readonly s: "shade";
            readonly c: "glow";
            readonly g: "glow2";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "curse-icon";
    readonly about: "A curse: a staring white eye with a plum iris in bloodshot red lids, dripping";
    readonly tags: readonly ["icon", "skill", "curse", "hex"];
    readonly size: readonly [12, 12];
    readonly palette: {
        readonly lid: "red";
        readonly eye: "white";
        readonly iris: "plum";
        readonly pupil: "ink";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["............", "............", "...pppppp...", ".pprryyrrpp.", ".prryiiyrrp.", ".prryiiyrrp.", ".pprryyrrpp.", "...pppppp...", "...pp..pp...", "...p....p...", "........p...", "............"];
        readonly legend: {
            readonly p: "lid";
            readonly r: "eye";
            readonly y: "iris";
            readonly i: "pupil";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "aura-icon";
    readonly about: "An aura: a gold ring radiating round a white-hot core";
    readonly tags: readonly ["icon", "skill", "aura", "buff"];
    readonly size: readonly [13, 13];
    readonly palette: {
        readonly core: "white";
        readonly light: "sand";
        readonly dark: "orange";
        readonly edge: "plum";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [".............", "....lllll....", "..ll.....lo..", "..l...l...o..", ".l...lll...o.", ".l..lwwwl..o.", ".l.llwwwoo.o.", ".l..lwwwo..o.", ".l...loo...o.", "..l...o...o..", "..lo.....oo..", "....ooooo....", "............."];
        readonly legend: {
            readonly w: "core";
            readonly l: "light";
            readonly o: "dark";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "trap-icon";
    readonly about: "A bear trap, open: a ring of steel jaws with their teeth turned in round a gold pan, a spring either side";
    readonly tags: readonly ["icon", "skill", "trap"];
    readonly size: readonly [13, 11];
    readonly palette: {
        readonly light: "mist";
        readonly dark: "slate";
        readonly pan: "sand";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [".............", "..lllllllll..", ".lll.l.l.lll.", ".l.........l.", "ll...ppp...ll", "ss...ppp...ss", ".s.........s.", ".sss.s.s.sss.", "..sssssssss..", ".............", "............."];
        readonly legend: {
            readonly l: "light";
            readonly s: "dark";
            readonly p: "pan";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "totem-icon";
    readonly about: "A carved wooden totem: a winged top, two stacked faces with dark eyes";
    readonly tags: readonly ["icon", "skill", "totem"];
    readonly size: readonly [12, 15];
    readonly palette: {
        readonly wing: "sky";
        readonly wing2: "blue";
        readonly light: "orange";
        readonly dark: "red";
        readonly eye: "ink";
        readonly beak: "sand";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["............", "....hhdd....", ".ww.hhdd.WW.", ".wwwhhddWWW.", "..wwkhdkWW..", "....hbbd....", "....hhdd....", "....hhdd....", "....kddk....", "....hhdd....", "...hbbbdd...", "....hhdd....", "....hhdd....", "...hhhddd...", "............"];
        readonly legend: {
            readonly w: "wing";
            readonly W: "wing2";
            readonly h: "light";
            readonly d: "dark";
            readonly k: "eye";
            readonly b: "beak";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "arrow-up";
    readonly about: "A white arrow pointing up: scroll, raise, move up";
    readonly tags: readonly ["icon", "ui", "arrow", "up"];
    readonly size: readonly [8, 8];
    readonly palette: {
        readonly light: "white";
        readonly shade: "mist";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["........", "...ws...", "..wwss..", ".wwwsss.", "..wwss..", "..wwss..", "..wwss..", "........"];
        readonly legend: {
            readonly w: "light";
            readonly s: "shade";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "arrow-down";
    readonly about: "A white arrow pointing down: scroll, lower, move down";
    readonly tags: readonly ["icon", "ui", "arrow", "down"];
    readonly size: readonly [8, 8];
    readonly palette: {
        readonly light: "white";
        readonly shade: "mist";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["........", "..wwss..", "..wwss..", "..wwss..", ".wwwsss.", "..wwss..", "...ws...", "........"];
        readonly legend: {
            readonly w: "light";
            readonly s: "shade";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "arrow-left";
    readonly about: "A white arrow pointing left: back, previous, move left";
    readonly tags: readonly ["icon", "ui", "arrow", "left"];
    readonly size: readonly [8, 8];
    readonly palette: {
        readonly light: "white";
        readonly shade: "mist";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["........", "...w....", "..wwwww.", ".wwwwww.", ".ssssss.", "..sssss.", "...s....", "........"];
        readonly legend: {
            readonly w: "light";
            readonly s: "shade";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "arrow-right";
    readonly about: "A white arrow pointing right: next, forward, move right";
    readonly tags: readonly ["icon", "ui", "arrow", "right"];
    readonly size: readonly [8, 8];
    readonly palette: {
        readonly light: "white";
        readonly shade: "mist";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["........", "....w...", ".wwwww..", ".wwwwww.", ".ssssss.", ".sssss..", "....s...", "........"];
        readonly legend: {
            readonly w: "light";
            readonly s: "shade";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "check";
    readonly about: "A lime check mark: yes, done, confirm";
    readonly tags: readonly ["icon", "ui", "check", "confirm"];
    readonly size: readonly [8, 8];
    readonly palette: {
        readonly body: "lime";
        readonly shade: "green";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["........", ".....ll.", ".....ll.", ".ll.ll..", ".ll.ll..", "..ggg...", "..ggg...", "........"];
        readonly legend: {
            readonly l: "body";
            readonly g: "shade";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "cross";
    readonly about: "A red X: no, close, cancel";
    readonly tags: readonly ["icon", "ui", "cross", "cancel"];
    readonly size: readonly [8, 8];
    readonly palette: {
        readonly body: "red";
        readonly shade: "plum";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["........", ".rr..rr.", ".rr..rr.", "..rrrr..", "..pppp..", ".pp..pp.", ".pp..pp.", "........"];
        readonly legend: {
            readonly r: "body";
            readonly p: "shade";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "plus";
    readonly about: "A lime plus: add, more, a higher stat";
    readonly tags: readonly ["icon", "ui", "plus", "add"];
    readonly size: readonly [8, 8];
    readonly palette: {
        readonly body: "lime";
        readonly shade: "green";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["........", "...lg...", "...lg...", ".lllllg.", ".ggglgg.", "...lg...", "...gg...", "........"];
        readonly legend: {
            readonly l: "body";
            readonly g: "shade";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "minus";
    readonly about: "A red minus: remove, less, a lower stat";
    readonly tags: readonly ["icon", "ui", "minus", "remove"];
    readonly size: readonly [8, 8];
    readonly palette: {
        readonly body: "red";
        readonly shade: "plum";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["........", "........", "........", ".rrrrrr.", ".pppppp.", "........", "........", "........"];
        readonly legend: {
            readonly r: "body";
            readonly p: "shade";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "lock";
    readonly about: "A gold padlock with a steel shackle and a keyhole: locked";
    readonly tags: readonly ["icon", "ui", "lock", "locked"];
    readonly size: readonly [8, 8];
    readonly palette: {
        readonly steel: "mist";
        readonly steel2: "slate";
        readonly body: "sand";
        readonly shade: "orange";
        readonly hole: "plum";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["........", "..mmmt..", "..m..t..", ".bbbbbo.", ".bbkkbo.", ".bbbkbo.", ".oooooo.", "........"];
        readonly legend: {
            readonly m: "steel";
            readonly t: "steel2";
            readonly b: "body";
            readonly o: "shade";
            readonly k: "hole";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "gear";
    readonly about: "A steel cog with eight teeth round a hole: settings, options";
    readonly tags: readonly ["icon", "ui", "gear", "settings"];
    readonly size: readonly [12, 12];
    readonly palette: {
        readonly light: "mist";
        readonly dark: "slate";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["............", ".....ll.....", "..ll.ll.ll..", "..llllllld..", "...llllld...", ".llll..dddd.", ".llll..dddd.", "...lldddd...", "..lldddddd..", "..ld.dd.dd..", ".....dd.....", "............"];
        readonly legend: {
            readonly l: "light";
            readonly d: "dark";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "magnifier";
    readonly about: "A magnifying glass: a steel ring round blue glass with a glint, a red handle: search, inspect";
    readonly tags: readonly ["icon", "ui", "magnifier", "search"];
    readonly size: readonly [10, 10];
    readonly palette: {
        readonly glint: "white";
        readonly glass: "cyan";
        readonly glass2: "sky";
        readonly light: "mist";
        readonly dark: "slate";
        readonly handle: "red";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["..........", "..mmmm....", ".mwwccm...", ".mwcccM...", ".mccsdM...", ".mcssdM...", "..MMMMh...", "......hh..", ".......hh.", ".........."];
        readonly legend: {
            readonly w: "glint";
            readonly c: "glass";
            readonly s: "glass2";
            readonly d: "dark";
            readonly m: "light";
            readonly M: "dark";
            readonly h: "handle";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "quest-marker";
    readonly about: "A gold exclamation mark: a quest to give, a warning, something new";
    readonly tags: readonly ["icon", "ui", "quest", "alert"];
    readonly size: readonly [6, 10];
    readonly palette: {
        readonly glint: "white";
        readonly light: "sand";
        readonly shade: "orange";
        readonly edge: "plum";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["......", ".wsso.", ".ssso.", ".ssso.", "..so..", "..so..", "......", "..so..", "..oo..", "......"];
        readonly legend: {
            readonly w: "glint";
            readonly s: "light";
            readonly o: "shade";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "bat";
    readonly about: "A bat flapping: wings up, then wings down, their leading edges lit, glowing yellow eyes (2 frames of 12 x 8)";
    readonly tags: readonly ["sprite", "critter", "bat", "animated"];
    readonly size: readonly [24, 8];
    readonly frames: 2;
    readonly palette: {
        readonly rim: "slate";
        readonly wing: "plum";
        readonly body: "night";
        readonly eye: "sand";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["......", ".rr...", ".rww.r", "..wwbb", "..wweb", "...wbb", ".....b", "......"];
        readonly legend: {
            readonly r: "rim";
            readonly w: "wing";
            readonly b: "body";
            readonly e: "eye";
        };
        readonly mirror: "x";
    }, {
        readonly pixels: readonly ["......", "......", ".....r", "....bb", ".rrreb", ".wwwbb", ".ww..b", "......"];
        readonly legend: {
            readonly r: "rim";
            readonly w: "wing";
            readonly b: "body";
            readonly e: "eye";
        };
        readonly at: readonly [12, 0];
        readonly mirror: "x";
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "rat";
    readonly about: "A grey rat scurrying right: stretched out low, then bunched up with its feet under it; pink ears, feet and tail (2 frames of 12 x 8)";
    readonly tags: readonly ["sprite", "critter", "rat", "animated"];
    readonly size: readonly [24, 8];
    readonly frames: 2;
    readonly palette: {
        readonly fur: "mist";
        readonly shade: "slate";
        readonly pink: "red";
        readonly eye: "ink";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [string, string, string, string, string, string, string, string];
        readonly legend: {
            readonly m: "fur";
            readonly s: "shade";
            readonly r: "pink";
            readonly k: "eye";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "spider";
    readonly about: "A dark spider seen from above with a red mark and a sheen on its back, its legs stepping (2 frames of 12 x 8)";
    readonly tags: readonly ["sprite", "critter", "spider", "animated"];
    readonly size: readonly [24, 8];
    readonly frames: 2;
    readonly palette: {
        readonly leg: "slate";
        readonly body: "plum";
        readonly sheen: "mist";
        readonly mark: "red";
        readonly eye: "sand";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly ["......", "l.....", "llll.e", "....ss", "llllbm", "l...bb", "....bs", "......"];
        readonly legend: {
            readonly l: "leg";
            readonly b: "body";
            readonly s: "sheen";
            readonly m: "mark";
            readonly e: "eye";
        };
        readonly mirror: "x";
    }, {
        readonly pixels: readonly ["......", "......", "llll.e", "l...ss", "llllbm", "....bb", "l...bs", "......"];
        readonly legend: {
            readonly l: "leg";
            readonly b: "body";
            readonly s: "sheen";
            readonly m: "mark";
            readonly e: "eye";
        };
        readonly at: readonly [12, 0];
        readonly mirror: "x";
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "slime";
    readonly about: "A green slime bobbing: tall, then squashed flat (2 frames of 10 x 8)";
    readonly tags: readonly ["sprite", "critter", "slime", "animated"];
    readonly size: readonly [20, 8];
    readonly frames: 2;
    readonly palette: {
        readonly glint: "white";
        readonly light: "lime";
        readonly mid: "green";
        readonly dark: "teal";
        readonly eye: "ink";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [string, string, string, string, string, string, string, string];
        readonly legend: {
            readonly w: "glint";
            readonly l: "light";
            readonly g: "mid";
            readonly t: "dark";
            readonly k: "eye";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "butterfly";
    readonly about: "A blue butterfly with white spots: wings open, then folded up (2 frames of 10 x 8)";
    readonly tags: readonly ["sprite", "critter", "butterfly", "animated"];
    readonly size: readonly [20, 8];
    readonly frames: 2;
    readonly palette: {
        readonly wing: "sky";
        readonly wing2: "blue";
        readonly spot: "white";
        readonly body: "night";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [".....", ".ss..", ".sssb", ".swsb", "..oob", ".ooo.", ".....", "....."];
        readonly legend: {
            readonly s: "wing";
            readonly o: "wing2";
            readonly w: "spot";
            readonly b: "body";
        };
        readonly mirror: "x";
    }, {
        readonly pixels: readonly [".....", ".....", "...sb", "...sb", "...ob", "...o.", ".....", "....."];
        readonly legend: {
            readonly s: "wing";
            readonly o: "wing2";
            readonly b: "body";
        };
        readonly at: readonly [10, 0];
        readonly mirror: "x";
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "firefly";
    readonly about: "A firefly glowing: a dim lime point, then a bright white heart in a lime halo (2 frames of 8 x 8)";
    readonly tags: readonly ["sprite", "critter", "firefly", "light", "animated"];
    readonly size: readonly [16, 8];
    readonly frames: 2;
    readonly palette: {
        readonly core: "white";
        readonly glow: "lime";
        readonly halo: "green";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [string, string, string, string, string, string, string, string];
        readonly legend: {
            readonly w: "core";
            readonly l: "glow";
        };
    }, {
        readonly outline: "halo";
    }];
} | {
    readonly id: "fire-burst";
    readonly about: "A burst of fire: a white-hot flash, flames thrown out, a ring of flame, scattered embers (4 frames of 12 x 12)";
    readonly tags: readonly ["sprite", "effect", "fire", "explosion", "animated"];
    readonly size: readonly [48, 12];
    readonly frames: 4;
    readonly palette: {
        readonly core: "white";
        readonly inner: "sand";
        readonly flame: "orange";
        readonly outer: "red";
        readonly edge: "plum";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [string, string, string, string, string, string, string, string, string, string, string, string];
        readonly legend: {
            readonly w: "core";
            readonly y: "inner";
            readonly o: "flame";
            readonly r: "outer";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "ice-shards";
    readonly about: "Ice shattering: a crystal with a white heart, shards flying out, shards scattered (3 frames of 12 x 12)";
    readonly tags: readonly ["sprite", "effect", "cold", "ice", "animated"];
    readonly size: readonly [36, 12];
    readonly frames: 3;
    readonly palette: {
        readonly core: "white";
        readonly ice: "cyan";
        readonly shade: "sky";
        readonly edge: "navy";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [string, string, string, string, string, string, string, string, string, string, string, string];
        readonly legend: {
            readonly w: "core";
            readonly c: "ice";
            readonly s: "shade";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "lightning-spark";
    readonly about: "An electric crackle: a short sand zigzag, then a forked one with a white-hot kink (2 frames of 10 x 10)";
    readonly tags: readonly ["sprite", "effect", "lightning", "spark", "animated"];
    readonly size: readonly [20, 10];
    readonly frames: 2;
    readonly palette: {
        readonly core: "white";
        readonly bolt: "sand";
        readonly edge: "plum";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [string, string, string, string, string, string, string, string, string, string];
        readonly legend: {
            readonly w: "core";
            readonly y: "bolt";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "poison-bubbles";
    readonly about: "Poison bubbling: small bubbles rise, swell and pop into droplets (3 frames of 8 x 8)";
    readonly tags: readonly ["sprite", "effect", "poison", "bubbles", "animated"];
    readonly size: readonly [24, 8];
    readonly frames: 3;
    readonly palette: {
        readonly glint: "white";
        readonly light: "lime";
        readonly mid: "green";
        readonly edge: "teal";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [string, string, string, string, string, string, string, string];
        readonly legend: {
            readonly w: "glint";
            readonly l: "light";
            readonly g: "mid";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "heal-sparkles";
    readonly about: "Healing sparkles: a green cross of light with a white heart rising, shrinking and fading (3 frames of 8 x 10)";
    readonly tags: readonly ["sprite", "effect", "heal", "sparkle", "animated"];
    readonly size: readonly [24, 10];
    readonly frames: 3;
    readonly palette: {
        readonly core: "white";
        readonly light: "lime";
        readonly faded: "green";
        readonly edge: "teal";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [string, string, string, string, string, string, string, string, string, string];
        readonly legend: {
            readonly w: "core";
            readonly l: "light";
            readonly f: "faded";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "blood-splat";
    readonly about: "Blood hitting the ground: a drop, a splash, a splat with droplets (3 frames of 10 x 8)";
    readonly tags: readonly ["sprite", "effect", "blood", "hit", "animated"];
    readonly size: readonly [30, 8];
    readonly frames: 3;
    readonly palette: {
        readonly light: "red";
        readonly dark: "plum";
        readonly edge: "ink";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [string, string, string, string, string, string, string, string];
        readonly legend: {
            readonly r: "light";
            readonly d: "dark";
        };
    }, {
        readonly outline: "edge";
    }];
} | {
    readonly id: "dust-puff";
    readonly about: "A puff of dust kicked up from the ground, spreading and settling (3 frames of 10 x 8)";
    readonly tags: readonly ["sprite", "effect", "dust", "animated"];
    readonly size: readonly [30, 8];
    readonly frames: 3;
    readonly palette: {
        readonly light: "sand";
        readonly mid: "mist";
        readonly dark: "slate";
        readonly edge: "night";
    };
    readonly layers: readonly [{
        readonly pixels: readonly [string, string, string, string, string, string, string, string];
        readonly legend: {
            readonly l: "light";
            readonly m: "mid";
            readonly d: "dark";
        };
    }, {
        readonly outline: "edge";
    }];
})[];
