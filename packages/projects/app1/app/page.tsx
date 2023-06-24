'use client';

import {
  Feature1View,
  feature1Api,
} from '@nx-trpc-nextjs-playground/features/frontend/feature1';
import {
  Feature2View,
  feature2Api,
} from '@nx-trpc-nextjs-playground/features/frontend/feature2';
import styles from './page.module.css';

function Index() {
  // const data = await api.greeting.getGreeting.query();
  // const data2 = await api.something.getSomething.query();
  return (
    <div className={styles['page']}>
      {/* <h1>{data.message}</h1>
      <h1>{data2.message}</h1> */}
      <Feature1View />
      <Feature2View />
    </div>
  );
}

export default feature2Api.withTRPC(feature1Api.withTRPC(Index));
