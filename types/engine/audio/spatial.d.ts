/**
 * Sound in space: how loud and how far left or right a sound at a point is for a listener
 * (the camera, or the hero's ears). Pure maths, so it is unit-tested and the same in a
 * headless run; `AudioManager.loop()` voices take the result.
 *
 *   const hum = ctx.audio.loop('hum');
 *   const s = spatialize({ position: ears, right: cameraRight }, generator.position, { ref: 2, max: 25 });
 *   hum.set({ volume: s.gain * (blocked ? 0.4 : 1), pan: s.pan, muffle: blocked ? 0.8 : 0 });
 */
export type V3Like = readonly [number, number, number] | {
    readonly x: number;
    readonly y: number;
    readonly z: number;
};
export interface Listener {
    position: V3Like;
    /** The listener's right, in world space (unit): the camera's right for a third-person game. */
    right: V3Like;
}
export interface SpatialOptions {
    /** Within this distance (m) the sound is at full volume (default 1). */
    ref?: number;
    /** Silent from this distance on (default 30); it fades out over the last fifth. */
    max?: number;
    /** How fast it falls off past `ref` (default 1: inverse distance, the way sound really does). */
    rolloff?: number;
}
export interface Spatial {
    /** 0..1 volume. */
    gain: number;
    /** -1 (left) .. 1 (right). */
    pan: number;
    distance: number;
}
/** Volume at `distance` (m): 1 inside `ref`, then inverse distance, fading to 0 at `max`. */
export declare function attenuation(distance: number, o?: SpatialOptions): number;
/** Gain and pan of a sound at `at` for `listener`. */
export declare function spatialize(listener: Listener, at: V3Like, o?: SpatialOptions): Spatial;
