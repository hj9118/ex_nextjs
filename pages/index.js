import Head from 'next/head';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>oneuleun</title>
        <meta name='description' content='게으르지만 기록은 하고싶어!' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1 className='text-3xl font-bold underline'>오늘은 어떤 하루</h1>
    </Layout>
  );
}
