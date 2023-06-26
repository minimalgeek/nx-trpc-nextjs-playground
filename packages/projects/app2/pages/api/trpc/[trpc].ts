import { createNextApiHandler } from '@trpc/server/adapters/next';
import { trpc } from '../../../server/trpc';
import {
  Feature1Repo,
  feature1AttachRouter,
} from '@nx-trpc-nextjs-playground/features/feature1/be';
import { feature2AttachRouter } from '@nx-trpc-nextjs-playground/features/feature2/be';

const repoImpl: Feature1Repo = {
  findById: (id) => ({ name: `csoki ${id}` }),
};

export default createNextApiHandler({
  router: trpc.merge(
    feature1AttachRouter(trpc, repoImpl),
    feature2AttachRouter(trpc)
  ),
  createContext: () => ({}),
});
