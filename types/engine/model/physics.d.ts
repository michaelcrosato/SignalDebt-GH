import { type Physics, RAPIER } from '../physics/Physics';
import type { ModelBuild } from './build';
import type { Vec3 } from './types';
/**
 * Static Rapier colliders for a placed model (its `colliders` data), at `at` turned `yaw`
 * radians about Y: a box, an upright cylinder or a convex hull, with `addStaticBox`'s friction.
 */
export declare function addModelColliders(physics: Physics, build: Pick<ModelBuild, 'colliders'>, at?: Vec3, yaw?: number): RAPIER.Collider[];
