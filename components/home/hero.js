import Link from 'next/link';
import Animation from './animation';

export default function Hero() {
  return (
    <>
      <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
        <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
          안녕하세요
          <br className='lg:inline-block' />
          프론트엔드 개발 중입니다
        </h1>
        <p className='mb-8 leading-relaxed'>
          우는 프랑시스 이런 무덤 동경과 까닭입니다. 라이너 하나에 멀리 헤일
          그리고 나는 별 까닭입니다. 강아지, 아침이 내린 별 그리워 릴케
          계십니다. 마리아 흙으로 청춘이 봅니다. 별 책상을 이국 거외다.
        </p>
        <div className='flex justify-center'>
          <Link href='/projects'>
            <button className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
              프로젝트 보러가기
            </button>
          </Link>
        </div>
      </div>
      <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
        <Animation />
      </div>
    </>
  );
}
