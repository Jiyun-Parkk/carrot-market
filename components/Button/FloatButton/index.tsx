import { useRouter } from 'next/router';
import React from 'react';

interface FloatButtonProps {
  children: React.ReactNode;
  path: string;
}

export const FloatButton = ({ children, path }: FloatButtonProps) => {
  const router = useRouter();
  const onClickFloatButton = (path: string) => {
    router.push(path);
  };
  return (
    <button
      onClick={() => onClickFloatButton(path)}
      className='fixed bottom-10 right-10 cursor-pointer rounded-full bg-orange-400 p-4 text-[24px] text-white shadow-xl transition-colors hover:bg-orange-500'
    >
      {children}
    </button>
  );
};
