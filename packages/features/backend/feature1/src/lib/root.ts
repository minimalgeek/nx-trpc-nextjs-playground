import { ReturnTypeCreateTrpc } from '@nx-trpc-nextjs-playground/utils/trpc-helper';
import { somethingRouter } from './routes/something';

export const attachRouter = (props: ReturnTypeCreateTrpc) => {
  const { router } = props;
  const appRouter = router({
    something: somethingRouter(props),
  });
  return appRouter;
};

export type AppRouter = ReturnType<typeof attachRouter>;