import { type inferRouterInputs, type inferRouterOutputs } from '@trpc/server';

/**
 * The `appRouter` export is used to configure the Next.js tRPC API endpoint, and the `AppRouter` type is used by the Next.js app to create the type-safe tRPC client.
 * @example
 */
export {
  appRouter as feature1AppRouter,
  type AppRouter as Feature1AppRouter,
} from './lib/root';
export { merge as feature1Merge } from './lib/trpc';

/**
 * Inference helpers for input types
 * @example type HelloInput = RouterInputs['example']['hello']
 **/
export type Feature1RouterInputs = inferRouterInputs<Feature1AppRouter>;

/**
 * Inference helpers for output types
 * @example type HelloOutput = RouterOutputs['example']['hello']
 **/
export type Feature1RouterOutputs = inferRouterOutputs<Feature1AppRouter>;
