import { router } from './trpc';
import { greetingRouter } from './routes/greeting';

const appRouter = router({
  greeting: greetingRouter,
});

type AppRouter = typeof appRouter;

export { appRouter, AppRouter };