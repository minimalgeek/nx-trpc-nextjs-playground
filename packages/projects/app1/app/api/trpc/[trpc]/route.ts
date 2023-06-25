import { feature1AppRouter } from '@nx-trpc-nextjs-playground/features/backend/feature1';
import { feature2AppRouter } from '@nx-trpc-nextjs-playground/features/backend/feature2';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { trpc } from '../../../../server/trpc';

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: trpc.merge(feature1AppRouter(trpc), feature2AppRouter(trpc)),
    createContext: () => ({}),
  });

export { handler as GET, handler as POST };
