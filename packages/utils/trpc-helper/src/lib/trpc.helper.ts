import { initTRPC } from '@trpc/server';

// type definitions for trpc

export const createTrpc = () => {
  const trpc = initTRPC.create({});
  const router = trpc.router;
  const merge = trpc.mergeRouters;

  const publicProcedure = trpc.procedure;

  const adminProcedure = trpc.procedure.use(
    trpc.middleware(async (opts) => {
      // check if user is admin
      return opts.next({
        ctx: {
          user: true,
        },
      });
    })
  );

  return {
    trpc,
    router,
    merge,
    publicProcedure,
    adminProcedure,
  };
};

export type ReturnTypeCreateTrpc = ReturnType<typeof createTrpc>;