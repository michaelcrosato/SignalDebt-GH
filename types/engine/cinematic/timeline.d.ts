/**
 * Cutscenes as data: camera keys the camera glides through on a smooth curve (or cuts to),
 * cues that fire once when the playhead passes them (an actor starts walking, a door opens, a
 * sound), subtitles, and letterbox bars that slide in and out. The timeline only keeps time
 * and answers "where is the camera now, what line is showing": the game puts the camera
 * there and draws the bars, so it works with any camera and any HUD.
 *
 *   const scene = new Timeline({
 *     shots: [
 *       { at: 0, position: [0, 2, 9], target: [0, 1, 0] },
 *       { at: 4, position: [6, 3, 4], target: [0, 1, 0] },   // a glide from the first key
 *       { at: 4, position: [1, 1.6, 2], target: [0, 1.5, 0], cut: true },  // a cut
 *     ],
 *     cues: [{ at: 1, name: 'wave', run: () => actor.play('Wave') }],
 *     lines: [{ at: 0.5, until: 3, who: 'GUIDE', text: 'Welcome.' }],
 *   });
 *   scene.play();
 *   scene.update(dt);                       // per frame: fires the cues it passes
 *   const shot = scene.camera();            // { position, target, fov }
 *   scene.skip();                           // to the end: cues that matter still fire
 *
 * Pure (no three.js): unit-tested.
 */
export type V3 = readonly [number, number, number];
export interface CameraKey {
    /** Time (s) the camera is exactly here. */
    at: number;
    position: V3;
    /** The point it looks at. */
    target: V3;
    /** Vertical field of view (degrees); default the previous key's, or 50. */
    fov?: number;
    /** Jump here instead of gliding from the key before (a cut to a new shot). */
    cut?: boolean;
}
export interface Cue {
    at: number;
    name?: string;
    run: () => void;
    /**
     * Cosmetic (a sound, a puff of dust): not run when the scene is skipped past it. Cues that
     * change the world (a door left open, an item given) are run on skip so the world ends up
     * the same either way.
     */
    cosmetic?: boolean;
}
export interface Line {
    at: number;
    until: number;
    text: string;
    /** Who is speaking (shown before the text). */
    who?: string;
}
export interface CameraShot {
    position: [number, number, number];
    target: [number, number, number];
    fov: number;
}
export interface TimelineOptions {
    shots?: readonly CameraKey[];
    cues?: readonly Cue[];
    lines?: readonly Line[];
    /** Length (s); default the last key, cue or line. */
    duration?: number;
    /** Seconds the letterbox bars take to slide in and out (default 0.6; 0: no bars). */
    bars?: number;
    /** Called once when the playhead reaches the end (or the scene is skipped). */
    onEnd?: () => void;
}
export declare class Timeline {
    readonly duration: number;
    /** The playhead (s). */
    time: number;
    playing: boolean;
    /** Playback rate (1: real time, 0.5: slow motion). */
    speed: number;
    /** True once the end has been reached (by playing or skipping). */
    ended: boolean;
    /** Cue names in the order they fired (tests and tools). */
    readonly fired: string[];
    private readonly keys;
    private readonly cues;
    private readonly lines;
    private readonly barTime;
    private readonly onEnd?;
    /** How many cues (in time order) have fired. */
    private next;
    /** Bumped by every seek and skip: a cue that moves the playhead stops the cues after it. */
    private jumps;
    /** Inside skip(): cues run to the end whatever they do to the playhead. */
    private skipping;
    constructor(o: TimelineOptions);
    play(): void;
    pause(): void;
    /** Advance by `dt` seconds of game time (times `speed`) while playing, firing the cues passed. */
    update(dt: number): void;
    /**
     * Move the playhead to `t` without firing the cues in between (scrubbing). Cues before `t`
     * count as done and cues after it will fire again (going back re-arms them). Ignored while
     * skipping (a cue that loops back cannot undo a skip).
     */
    seek(t: number): void;
    /**
     * Jump to the end: the cues not yet fired run (except the cosmetic ones), then `onEnd`. Cues
     * after `duration` never fire, played or skipped.
     */
    skip(): void;
    private fireUpTo;
    private finish;
    /**
     * Where the camera is at `t` (default now): on each key at its time, gliding between keys
     * on a smooth curve (Catmull-Rom tangents, so the speed has no jolt at a key; the first and
     * last key of each shot ease in and out). A `cut` key starts a new shot. Null without keys.
     */
    camera(t?: number): CameraShot | null;
    /** The subtitle showing at `t` (default now), or null. */
    line(t?: number): Line | null;
    /** How far the letterbox bars are in (0..1) at `t` (default now): sliding in at the start, out at the end. */
    bars(t?: number): number;
}
