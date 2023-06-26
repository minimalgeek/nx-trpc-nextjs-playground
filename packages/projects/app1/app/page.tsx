'use client';

import {
  Feature1View,
  feature1Api,
} from '@nx-trpc-nextjs-playground/features/feature1/fe';
import {
  Feature2View,
  feature2Api,
} from '@nx-trpc-nextjs-playground/features/feature2/fe';
import styles from './page.module.css';

function Index() {
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
