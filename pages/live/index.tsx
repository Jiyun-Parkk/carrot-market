import { FloatButton, Layout } from 'components';
import { NextPage } from 'next';
import { BsCameraVideo } from 'react-icons/bs';
import React from 'react';
import { useRouter } from 'next/router';

const Streams: NextPage = () => {
  const router = useRouter();
  const onClickStream = (i: number) => {
    router.push(`/live/${i}`);
  };

  return (
    <Layout title='라이브' hasTabBar>
      <div className='divide-y-2 py-10'>
        {[1, 2, 3, 4, 5].map((_, i) => (
          <div
            onClick={() => onClickStream(i)}
            key={i}
            className='cursor-pointer px-4 pt-4'
          >
            <div className='aspect-video w-full rounded-md bg-slate-300 shadow-sm' />
            <h3 className='mt-2 text-lg text-gray-700'>
              Let&apos;s try potatos
            </h3>
          </div>
        ))}
        <FloatButton path='/live/create'>
          <BsCameraVideo />
        </FloatButton>
      </div>
    </Layout>
  );
};

export default Streams;
