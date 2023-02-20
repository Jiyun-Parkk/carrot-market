import React from 'react';

export const FullButton = ({ text }: { text: string }) => {
  return (
    <button className='focus:ring-offest-2 transition-bg mt-6 w-full rounded-md border border-transparent bg-orange-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500'>
      {text}
    </button>
  );
};
