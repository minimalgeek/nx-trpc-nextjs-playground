import { Feature1AppRouter } from '@nx-trpc-nextjs-playground/features/backend/feature1';
import { Feature2AppRouter } from '@nx-trpc-nextjs-playground/features/backend/feature2';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

const getBaseUrl = () => {
  return (
    process.env.VERCEL_URL || process.env.BASE_URL || `http://localhost:4200`
  );
};

export const api = createTRPCProxyClient<Feature1AppRouter & Feature2AppRouter>(
  {
    links: [httpBatchLink({ url: `${getBaseUrl()}/api/trpc` })],
  } as any
);
