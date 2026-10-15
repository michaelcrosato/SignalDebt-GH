/**
 * Rain and snow: thousands of drops or flakes in one instanced draw, placed entirely by the
 * vertex shader. Each drop's start comes from a hash of its instance index; it falls through a
 * box of air around a centre (the camera's focus) whose x and z wrap in world space, so walking
 * through the weather doesn't drag the drops sideways (the box's height follows the centre). Rain falls fast and slants with the wind; snow
 * drifts and sways. `intensity` (0..1) shows that share of the drops: no buffers change, no
 * shader recompiles. Splashes are left to the game (`splashes(dt)` says how many this frame).
 *
 *   const rain = new Precipitation({ kind: 'rain', count: 3000, area: [24, 14, 24] });
 *   scene.add(rain);
 *   // per frame: rain.update(dt, camera.focus); rain.intensity = 0.7; rain.wind.set(3, 0)
 */
import { InstancedMesh, Vector2, Vector3 } from 'three/webgpu';
export type PrecipitationKind = 'rain' | 'snow';
export interface PrecipitationOptions {
    kind: PrecipitationKind;
    /** Most drops at once (the instance count). */
    count: number;
    /** Width, height and depth of the air the drops fall through, around the centre. */
    area?: readonly [number, number, number];
    /** Drop colour (hex). */
    color?: number;
    /** Fall speed (m/s). Rain 16, snow 1.4. */
    speed?: number;
}
export declare class Precipitation extends InstancedMesh {
    readonly kind: PrecipitationKind;
    readonly area: readonly [number, number, number];
    /** Wind (m/s along x and z): rain slants, snow drifts. */
    readonly wind: Vector2;
    private readonly uTime;
    private readonly uCenter;
    private readonly uWind;
    private readonly uIntensity;
    private readonly uSpeed;
    private t;
    constructor(o: PrecipitationOptions);
    /** Share of the drops falling (0..1). */
    get intensity(): number;
    set intensity(v: number);
    /** Fall speed (m/s). */
    get speed(): number;
    set speed(v: number);
    /** Per frame (game time): advance the fall and follow `center`. */
    update(dt: number, center: Vector3): void;
    /** How many drops hit the ground in `dt` seconds at this intensity (for splash particles, ripples). */
    splashes(dt: number): number;
    dispose(): this;
}
