import Image from 'next/legacy/image';

export default function ProjectItem({ data }) {
  const title = data.properties.이름.title[0].plain_text;
  const github = data.properties.깃허브.url;
  const demo = data.properties.Demo.url;
  const start = data.properties.날짜.date.start;
  const end = data.properties.날짜.date.end;
  const description = data.properties.텍스트.rich_text[0].plain_text;
  const img = data.cover.file?.url || data.cover.external.url;
  const tags = data.properties.사용기술.multi_select;

  const calculatedPeriod = (start, end) => {
    const startDateStringArray = start.split('-');
    const endDateStringArray = end.split('-');

    let startDate = new Date(
      startDateStringArray[0],
      startDateStringArray[1],
      startDateStringArray[2]
    );
    let endDate = new Date(
      endDateStringArray[0],
      endDateStringArray[1],
      endDateStringArray[2]
    );

    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);
    return result;
  };

  return (
    <div className='project-card'>
      <Image
        className='rounded-t-xl'
        src={img}
        alt='cover img'
        width='100%'
        height='60%'
        layout='responsive'
        objectFit='cover'
        quality={100}
      />
      <div className='card-content'>
        <h1 className='text-xl mt-2 font-bold'>{title}</h1>
        <h3 className='mt-2 text-md'>{description}</h3>
        <a href={github}>깃허브</a>
        <a href={demo}>Demo</a>
        <p className='my-1 dark:text-white'>
          {start} ~ {end} ({calculatedPeriod(start, end)}일)
        </p>
        <div className='flex items-start mt-2'>
          {tags.map((tag) => (
            <h1
              className='card-tag'
              key={tag.id}
            >
              {tag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
