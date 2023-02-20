import { FloatButton, Layout, Reply, Badge, Question } from 'components';
import { BiPencil } from 'react-icons/bi';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Community: NextPage = () => {
  return (
    <Layout title='동네생활' hasTabBar>
      <div className='space-y-8 py-3 px-4'>
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <Link href={`/community/${i}`} key={i}>
            <div className='mb-6 flex flex-col items-start'>
              <Badge />
              <Question
                question='What is the best
      mandu restaurant?'
              />
              <div className='mt-5 flex w-full items-center justify-between text-xs font-medium text-gray-500'>
                <span>니꼬</span>
                <span>18시간 전</span>
              </div>
            </div>
            <Reply wonder={1} reply={1} />
          </Link>
        ))}
        <FloatButton path='/community/write'>
          <BiPencil />
        </FloatButton>
      </div>
    </Layout>
  );
};

export default Community;
