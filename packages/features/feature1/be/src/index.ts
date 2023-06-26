import { type inferRouterInputs, type inferRouterOutputs } from '@trpc/server';

/**
 * The `appRouter` export is used to configure the Next.js tRPC API endpoint, and the `AppRouter` type is used by the Next.js app to create the type-safe tRPC client.
 * @example
 */
export {
  attachRouter as feature1AttachRouter,
  type AppRouter as Feature1AppRouter,
  type Repo as Feature1Repo,
} from './lib/root';

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
