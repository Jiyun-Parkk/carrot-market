import { FloatButton, Layout } from 'components';
import { NextPage } from 'next';
import { BsCameraVideo } from 'react-icons/bs';
import React from 'react';

const Streams: NextPage = () => {
  return (
    <Layout title='라이브' hasTabBar>
      <div className='divide-y-2 py-10'>
        {[1, 2, 3, 4, 5].map((_, i) => (
          <div key={i} className='px-4 pt-4'>
            <div className='aspect-video w-full rounded-md bg-slate-300 shadow-sm' />
            <h3 className='mt-2 text-lg text-gray-700'>
              Let&apos;s try potatos
            </h3>
          </div>
        ))}
        <FloatButton onClick={() => {}}>
          <BsCameraVideo />
        </FloatButton>
      </div>
    </Layout>
  );
};

export default Streams;
