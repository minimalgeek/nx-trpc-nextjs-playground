import { ReturnTypeCreateTrpc } from '@nx-trpc-nextjs-playground/utils/trpc-helper';
import { somethingRouter } from './routes/something';

export interface Repo {
  findById: (id: string) => { name: string };
}

export const attachRouter = (props: ReturnTypeCreateTrpc, repo: Repo) => {
  const { router } = props;
  const appRouter = router({
    something: somethingRouter(props, repo),
  });
  return appRouter;
};

export type AppRouter = ReturnType<typeof attachRouter>;
