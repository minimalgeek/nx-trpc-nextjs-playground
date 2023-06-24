import { somethingRouter } from './routes/something';
import { router } from './trpc';

const appRouter = router({
  something: somethingRouter,
});

type AppRouter = typeof appRouter;

export { appRouter, AppRouter };
