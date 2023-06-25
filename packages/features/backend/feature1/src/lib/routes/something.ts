import { ReturnTypeCreateTrpc } from '@nx-trpc-nextjs-playground/utils/trpc-helper';

export const somethingRouter = ({
  router,
  publicProcedure,
}: ReturnTypeCreateTrpc) => {
  return router({
    getSomething: publicProcedure.query(async () => {
      return { message: 'Hello Something!' };
    }),
  });
};
