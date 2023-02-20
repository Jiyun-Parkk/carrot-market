import React from 'react';

export const Question = ({ question }: { question: string }) => {
  return (
    <div className='mt-2 text-gray-700'>
      <span className='font-medium text-orange-500'>Q.</span>
      {question}
    </div>
  );
};
