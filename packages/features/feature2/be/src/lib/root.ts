import { ReturnTypeCreateTrpc } from '@nx-trpc-nextjs-playground/utils/trpc-helper';
import { greetingRouter } from './routes/greeting';

export const attachRouter = (props: ReturnTypeCreateTrpc) => {
  const { router } = props;
  const appRouter = router({
    greeting: greetingRouter(props),
  });
  return appRouter;
};

export type AppRouter = ReturnType<typeof attachRouter>;
