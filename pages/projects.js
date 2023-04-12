import ProjectItem from '../projects/project-item';
import Head from 'next/head';
import Layout from '../components/layout';
import { TOKEN, DATABASE_ID } from '../config';

export default function Projects({ projects }) {
  console.log(projects);
  return (
    <Layout>
      <Head>
        <title>oneuleun</title>
        <meta name='description' content='게으르지만 기록은 하고싶어!' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1>프로젝트 개수: {projects.results.length}</h1>
      
      {projects.results.map((proj) => (
        <ProjectItem key={proj.id} data={proj} />
      ))}
    </Layout>
  );
}

// 빌드시 호출
export async function getStaticProps(context) {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
      authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [{ property: '이름', derection: 'ascending' }],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );
  const project = await res.json();

  const projects = project.results.map(
    (proj) => proj.properties.이름.title[0].plain_text
  );

  console.log(`프로젝트 이름: ${projects}`);

  return {
    props: { projects },
  };
}
