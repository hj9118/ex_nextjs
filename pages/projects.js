import ProjectItem from '../projects/project-item';
import Head from 'next/head';
import Layout from '../components/layout';
import { TOKEN, DATABASE_ID } from '../config';

export default function Projects({ projects }) {
  return (
    <Layout>
      <div className='flex flex-col items-center justify-center min-h-screen px-3 mb-10'>
        <Head>
          <title>oneuleun</title>
          <meta name='description' content='게으르지만 기록은 하고싶어!' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <h1 className='project-title'>
          총 프로젝트 :
          <span className='pl-4 text-blue-500'> {projects.results.length}</span>
        </h1>
        <div className='grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-2'>
          {projects.results.map((proj) => (
            <ProjectItem key={proj.id} data={proj} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

// 빌드시 호출
export async function getStaticProps() {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-02-22',
      'content-type': 'application/json',
      authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: '이름',
          direction: 'ascending',
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );
  const projects = await res.json();

  const projectName = projects.results.map(
    (proj) => proj.properties.이름.title[0].plain_text
  );

  return {
    props: { projects },
    revalidate: 1,
  };
}
