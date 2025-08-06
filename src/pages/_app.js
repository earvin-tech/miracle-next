import '@/styles/globals.css'; // Use alias if configured, or relative path
import Head from 'next/head';
import ScrollToTop from '@/components/ScrollToTop';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Miracle Café</title>
        <meta name="description" content="Your cozy café in Kew East." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/site_images/favicon_miracle.png" type="image/png" />
      </Head>
      <ScrollToTop />
      <Component {...pageProps} />
    </>
  );
}

export default App;
