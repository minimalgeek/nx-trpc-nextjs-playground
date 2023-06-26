import { Feature1View } from '@nx-trpc-nextjs-playground/features/feature1/fe';
import { Feature2View } from '@nx-trpc-nextjs-playground/features/feature2/fe';

export function Index() {
  return (
    <div>
      <Feature1View />
      <Feature2View />
    </div>
  );
}

export default Index;
