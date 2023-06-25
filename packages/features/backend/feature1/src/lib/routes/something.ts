import { ReturnTypeCreateTrpc } from '@nx-trpc-nextjs-playground/utils/trpc-helper';
import { Repo } from '../root';

export const somethingRouter = (
  { router, publicProcedure }: ReturnTypeCreateTrpc,
  repo: Repo
) => {
  return router({
    getSomething: publicProcedure.query(async () => {
      return { message: `Hello ${repo.findById('1234').name}!` };
    }),
  });
};
