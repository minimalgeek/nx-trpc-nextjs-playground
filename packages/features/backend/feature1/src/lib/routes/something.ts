import { router, publicProcedure } from '../trpc';

export const somethingRouter = router({
  getSomething: publicProcedure.query(async () => {
    return { message: 'Hello Something!' };
  }),
});
