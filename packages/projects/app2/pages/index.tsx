import { Feature1View } from '@nx-trpc-nextjs-playground/features/frontend/feature1';
import { Feature2View } from '@nx-trpc-nextjs-playground/features/frontend/feature2';

export function Index() {
  return (
    <div>
      <Feature1View />
      <Feature2View />
    </div>
  );
}

export default Index;
