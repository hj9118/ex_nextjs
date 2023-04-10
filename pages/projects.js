import Head from "next/head";
import Layout from "../components/layout";

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>oneuleun</title>
        <meta name='description' content='게으르지만 기록은 하고싶어!' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>프로젝트</h1>
    </Layout>
  );
}
