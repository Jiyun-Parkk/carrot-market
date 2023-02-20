import React from 'react';

export const MessageInput = () => {
  return (
    <div className='fixed inset-x-0 bottom-0  bg-white py-2'>
      <div className='relative mx-auto flex w-full  max-w-md items-center'>
        <input
          type='text'
          className='w-full rounded-full border-gray-300 pr-12 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500'
        />
        <div className='absolute inset-y-0 right-0 flex py-1.5 pr-1.5'>
          <button className='flex items-center rounded-full bg-orange-500 px-3 text-sm text-white focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 hover:bg-orange-600'>
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
