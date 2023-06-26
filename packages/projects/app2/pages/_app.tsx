import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
// import { feature1Api } from '@nx-trpc-nextjs-playground/features/frontend/feature1';
// import { feature2Api } from '@nx-trpc-nextjs-playground/features/frontend/feature2';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to app2!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;

// export default feature2Api.withTRPC(feature1Api.withTRPC(CustomApp));
