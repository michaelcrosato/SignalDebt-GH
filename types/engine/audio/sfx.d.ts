/**
 * Built-in retro sound effects, as data. Tweak numbers here (or register your own with
 * `ctx.audio.register(name, def)`) and every `ctx.audio.play(name)` picks them up.
 * See docs/ENGINE.md (Audio) for the SoundDef fields.
 */
export declare const SFX: {
    /** Short rising square chirp. */
    jump: {
        wave: "square";
        duty: number;
        freq: number;
        freqEnd: number;
        attack: number;
        sustain: number;
        decay: number;
        volume: number;
    };
    /** Higher, thinner chirp with a fifth on top. */
    doubleJump: {
        wave: "square";
        duty: number;
        freq: number;
        freqEnd: number;
        arp: number[];
        arpRate: number;
        attack: number;
        sustain: number;
        decay: number;
        volume: number;
    };
    /** Soft thud: a falling triangle under a short noise puff. */
    land: {
        wave: "triangle";
        freq: number;
        freqEnd: number;
        attack: number;
        decay: number;
        volume: number;
        layers: {
            wave: "noise";
            freq: number;
            freqEnd: number;
            attack: number;
            decay: number;
            volume: number;
        }[];
    };
    /** The classic two-note pickup (B5 → E6). */
    coin: {
        wave: "square";
        duty: number;
        freq: number;
        arp: number[];
        arpRate: number;
        attack: number;
        sustain: number;
        decay: number;
        volume: number;
    };
    /** A tiny tick per footstep. */
    step: {
        wave: "noise";
        freq: number;
        freqEnd: number;
        attack: number;
        decay: number;
        volume: number;
    };
    /** Shoe squeal: hissy noise plus a wobbling high square. */
    skid: {
        wave: "noise";
        freq: number;
        freqEnd: number;
        attack: number;
        sustain: number;
        decay: number;
        volume: number;
        layers: {
            wave: "square";
            duty: number;
            freq: number;
            freqEnd: number;
            vibrato: {
                depth: number;
                rate: number;
            };
            attack: number;
            sustain: number;
            decay: number;
            volume: number;
        }[];
    };
    /** Whack: noise burst over a dropping square. */
    punch: {
        wave: "noise";
        freq: number;
        freqEnd: number;
        attack: number;
        decay: number;
        volume: number;
        layers: {
            wave: "square";
            duty: number;
            freq: number;
            freqEnd: number;
            attack: number;
            decay: number;
            volume: number;
        }[];
    };
    /** Big low boom for the ground-pound impact. */
    groundPound: {
        wave: "triangle";
        freq: number;
        freqEnd: number;
        attack: number;
        sustain: number;
        decay: number;
        volume: number;
        crush: number;
        layers: {
            wave: "noise";
            freq: number;
            freqEnd: number;
            attack: number;
            decay: number;
            volume: number;
        }[];
    };
    /** Spin-up whoosh before the pound falls. */
    whoosh: {
        wave: "noise";
        freq: number;
        freqEnd: number;
        attack: number;
        decay: number;
        volume: number;
    };
    /** Descending, wobbly "ouch". */
    hurt: {
        wave: "square";
        duty: number;
        freq: number;
        freqEnd: number;
        vibrato: {
            depth: number;
            rate: number;
        };
        attack: number;
        sustain: number;
        decay: number;
        volume: number;
    };
    /** Victory fanfare arpeggio. */
    fanfare: {
        wave: "square";
        duty: number;
        freq: number;
        arp: number[];
        arpRate: number;
        attack: number;
        sustain: number;
        decay: number;
        volume: number;
    };
};
export type SfxName = keyof typeof SFX;
