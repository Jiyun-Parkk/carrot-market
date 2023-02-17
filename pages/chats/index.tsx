import { NextPage } from 'next';
import React from 'react';

const Chats: NextPage = () => {
  return (
    <div className='divide-y-[1px] py-10'>
      <div className='flex cursor-pointer items-center space-x-3 px-4 py-3'>
        <div className='h-12 w-12 rounded-full bg-slate-300' />
        <div>
          <p className='text-gry-700 text-sm'>Steve Jebs</p>
          <p className='text-sm text-gray-500'>
            See you tomorrow in the corner at 2pm!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
