export default function ProjectItem({ data }) {
  return (
    <div className='p-6 bg-slat400 rounded-md'>
      <h1>{data.properties.이름.title[0].plain_text}</h1>
    </div>
  );
}
