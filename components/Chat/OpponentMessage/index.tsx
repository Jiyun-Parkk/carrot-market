import React from 'react';

export const OpponentMessage = ({ message }: { message: string }) => {
  return (
    <div className='flex items-start space-x-2'>
      <div className='h-8 w-8 rounded-full bg-slate-400' />
      <div className='w-1/2 rounded-md border border-gray-300 p-2 text-sm text-gray-700'>
        <p>{message}</p>
      </div>
    </div>
  );
};
