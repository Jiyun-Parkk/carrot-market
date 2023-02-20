import { Layout } from 'components';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

const Chats: NextPage = () => {
  const router = useRouter();
  const onClickChat = (id: number) => {
    router.push(`/chats/${id}`);
  };
  return (
    <Layout title='채팅' hasTabBar>
      <div className='divide-y-[1px] py-10'>
        <div
          className='flex cursor-pointer items-center space-x-3 px-4 py-3'
          onClick={() => onClickChat(1)}
        >
          <div className='h-12 w-12 rounded-full bg-slate-300' />
          <div>
            <p className='text-gry-700 text-sm'>Steve Jebs</p>
            <p className='text-sm text-gray-500'>
              See you tomorrow in the corner at 2pm!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Chats;
