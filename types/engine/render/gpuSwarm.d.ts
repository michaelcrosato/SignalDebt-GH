/**
 * A swarm simulated on the GPU: every particle's position and velocity live in GPU storage
 * buffers, and a TSL compute shader moves them all each frame (pulled toward an attractor,
 * swirled round it, stirred by a noise flow, bounced off a floor). The CPU never touches a
 * particle; drawing is one instanced sprite draw reading the same buffer.
 *
 *   const swarm = new GpuSwarm({ count: 32768, center: [0, 2, 0] });
 *   scene.add(swarm.mesh);
 *   swarm.update(engine.renderer.renderer, dt);   // per frame
 *   swarm.attractor.value.set(x, y, z);           // uniforms: change them live
 */
import { Sprite, type WebGPURenderer } from 'three/webgpu';
export interface GpuSwarmOptions {
    count: number;
    /** Middle of the ball it starts in. Default [0, 2, 0]. */
    center?: readonly [number, number, number];
    /** Radius of that ball (m). Default 6. */
    radius?: number;
    /** Particle size (m). Default 0.08. */
    size?: number;
    /** Colours: slow, fast. */
    colors?: readonly [number, number];
    /** Height of the floor they bounce off. Default 0. */
    floor?: number;
    /** Varies the starting layout and the flow. Default: a new one per swarm. */
    seed?: number;
}
export declare class GpuSwarm {
    readonly count: number;
    readonly mesh: Sprite;
    /** Storage buffers (vec3 per particle): `renderer.getArrayBufferAsync(swarm.positions.value)` reads them back. */
    readonly positions: any;
    readonly velocities: any;
    /** Where they are pulled to (and swirl round). */
    readonly attractor: any;
    /** Spring toward the attractor (m/s² per metre away). */
    readonly pull: any;
    /** Swirl round its vertical axis. */
    readonly swirl: any;
    /** Strength of the noise flow that stirs them. */
    readonly turbulence: any;
    /** Velocity lost per second (0..1). */
    readonly drag: any;
    /** Compute dispatches so far. */
    steps: number;
    private readonly time;
    private readonly dt;
    private readonly init;
    private readonly step;
    private needsInit;
    private renderer;
    private disposed;
    constructor(o: GpuSwarmOptions);
    /** One frame: (the first time, place them all), then one compute dispatch moving every particle. */
    update(renderer: WebGPURenderer, dt: number): void;
    /** Scatter them back into the ball they started in (next update). */
    reset(): void;
    /**
     * Positions read back from the GPU (x, y, z per particle, padded to 4). For tests and tools:
     * slow and async.
     */
    read(renderer: WebGPURenderer): Promise<Float32Array>;
    /** Remove it and free the material and both compute shaders (the storage buffers go with garbage collection). */
    dispose(): void;
    private freeCompute;
}
