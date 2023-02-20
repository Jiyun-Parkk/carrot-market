import React from 'react';

interface FloatButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const FloatButton = ({ children, onClick }: FloatButtonProps) => {
  return (
    <button
      onClick={onClick}
      className='fixed bottom-10 right-10 cursor-pointer rounded-full bg-orange-400 p-4 text-[24px] text-white shadow-xl transition-colors hover:bg-orange-500'
    >
      {children}
    </button>
  );
};
