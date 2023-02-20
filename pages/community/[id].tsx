import { Badge, FullButton, Layout, Question, Reply } from 'components';
import type { NextPage } from 'next';

const CommunityPostDetail: NextPage = () => {
  return (
    <Layout title='Steve Jebs' canGoBack>
      <div className='py-3 px-4'>
        <Badge />
        <div className='mb-3 flex cursor-pointer items-center space-x-3  border-b px-4 pb-3'>
          <div className='h-10 w-10 rounded-full bg-slate-300' />
          <div>
            <p className='text-sm font-medium text-gray-700'>Steve Jebs</p>
            <p className='text-xs font-medium text-gray-500'>
              View profile &rarr;
            </p>
          </div>
        </div>
        <div>
          <Question
            question='What is the best
      mandu restaurant?'
          />
          <Reply wonder={1} reply={1} />
        </div>
        <div className='my-5 space-y-5 px-4'>
          <div className='flex items-start space-x-3'>
            <div className='aspect-[1/1] h-8 w-8 rounded-full bg-slate-200' />
            <div>
              <span className='block text-sm font-medium text-gray-700'>
                Steve Jebs
              </span>
              <span className='block text-xs text-gray-500 '>2시간 전</span>
              <p className='mt-2 text-gray-700'>
                The best mandu restaurant is the one next to my house.
              </p>
            </div>
          </div>
        </div>
        <div className='px-4'>
          <textarea
            className='mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 '
            rows={4}
            placeholder='Answer this question!'
          />
          <FullButton text='Reply' />
        </div>
      </div>
    </Layout>
  );
};

export default CommunityPostDetail;
