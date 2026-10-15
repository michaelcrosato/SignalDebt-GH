/**
 * Time of day: a sun that rises in the east, crosses the sky and sets in the west, warm at
 * dawn and dusk, a dim blue moon at night, with the ambient light, the sky colour and the fog
 * colour following. `skyAt(hour)` is pure (keyframes interpolated, unit-tested); `applySky`
 * puts it on an engine (the sun, its direction and shadows, the ambient light, the
 * background). Levels unload back to the engine's defaults.
 *
 *   const s = skyAt(18.5);                 // 0..24
 *   applySky(engine, s);                   // or read s.night to light the lanterns
 */
import { Color, type Node } from 'three/webgpu';
import type { Engine } from '../Engine';
export interface SkyState {
    /** Unit vector toward the sun (or the moon, at night). */
    readonly sunDir: [number, number, number];
    readonly sunColor: number;
    readonly sunIntensity: number;
    readonly ambientColor: number;
    readonly ambientIntensity: number;
    /** Background (sky) and fog colour. */
    readonly sky: number;
    /** 0 by day, 1 deep at night: lanterns, stars, windows. */
    readonly night: number;
}
/** The sky at `hour` (wraps around 24). */
export declare function skyAt(hour: number): SkyState;
/** Put a sky on the engine: sun direction, colour and strength, ambient light, background. */
export declare function applySky(engine: Pick<Engine, 'sun' | 'ambient' | 'scene' | 'setSunDirection'>, s: SkyState): void;
/**
 * Fog for `scene.fogNode` with live settings (uniforms: changing them never recompiles):
 * ground mist that thickens below `top` (m) and a haze that grows with distance from the
 * camera, both up to `amount` (0..1), in `color` (match the sky).
 *
 *   const mist = groundFog({ color: s.sky, top: 1.5 });
 *   (scene as { fogNode: unknown }).fogNode = mist.node;
 *   mist.amount.value = 0.8; mist.color.value.setHex(s.sky);
 */
export declare function groundFog(o?: {
    color?: number;
    top?: number;
    amount?: number;
    near?: number;
    far?: number;
}): {
    node: Node;
    color: import("three/webgpu").UniformNode<"color", Color>;
    amount: import("three/webgpu").UniformNode<"float", number>;
    top: import("three/webgpu").UniformNode<"float", number>;
};
