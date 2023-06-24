import {
  feature1AppRouter,
  feature1Merge,
} from '@nx-trpc-nextjs-playground/features/backend/feature1';
import { feature2AppRouter } from '@nx-trpc-nextjs-playground/features/backend/feature2';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: feature1Merge(feature1AppRouter, feature2AppRouter),
    createContext: () => ({}),
  });

export { handler as GET, handler as POST };
