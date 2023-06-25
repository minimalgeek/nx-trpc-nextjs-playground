import {
  feature1AttachRouter,
  Feature1Repo,
} from '@nx-trpc-nextjs-playground/features/backend/feature1';
import { feature2AttachRouter } from '@nx-trpc-nextjs-playground/features/backend/feature2';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { trpc } from '../../../../server/trpc';

const repoImpl: Feature1Repo = {
  findById: (id) => ({ name: `csoki ${id}` }),
};

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: trpc.merge(
      feature1AttachRouter(trpc, repoImpl),
      feature2AttachRouter(trpc)
    ),
    createContext: () => ({}),
  });

export { handler as GET, handler as POST };
