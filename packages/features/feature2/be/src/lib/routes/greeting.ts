import { ReturnTypeCreateTrpc } from '@nx-trpc-nextjs-playground/utils/trpc-helper';

export const greetingRouter = ({
  router,
  publicProcedure,
}: ReturnTypeCreateTrpc) => {
  return router({
    getGreeting: publicProcedure.query(async () => {
      return { message: 'Hello Greeting!' };
    }),
  });
};
