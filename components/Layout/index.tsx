import React from 'react';
import { cls } from 'libs/utils';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BiHome, BiUser, BiVideo } from 'react-icons/bi';
import { BsChat, BsNewspaper } from 'react-icons/bs';
import { MdArrowBackIos } from 'react-icons/md';
interface LayoutProps {
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
  children: React.ReactNode;
}

export const Layout = ({
  title,
  canGoBack,
  hasTabBar,
  children,
}: LayoutProps) => {
  const router = useRouter();
  const onClick = () => {
    router.back();
  };
  return (
    <div>
      <div
        className={cls(
          !canGoBack ? 'justify-center' : '',
          'fixed top-0 flex w-full max-w-xl items-center border-b bg-white  py-3 text-lg font-medium text-gray-800',
        )}
      >
        {canGoBack ? (
          <button onClick={onClick}>
            <MdArrowBackIos />
          </button>
        ) : null}
        {title ? <span className='flex-1 text-center'>{title}</span> : null}
      </div>
      <div className={cls('pt-12', hasTabBar ? 'pb-24' : '')}>{children}</div>
      {hasTabBar ? (
        <nav className='sticky bottom-0 flex w-full max-w-full items-center justify-between border-t bg-white p-5 text-gray-800'>
          {TabList.map((tab) => (
            <Link
              key={tab.link}
              href={tab.link}
              className='flex flex-col items-center space-y-2'
            >
              <span className='text-2xl'>{tab.icon}</span>
              <span>{tab.title}</span>
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  );
};

const TabList = [
  { title: '홈', icon: <BiHome />, link: '/' },
  { title: '동네생활', icon: <BsNewspaper />, link: '/community' },
  { title: '채팅', icon: <BsChat />, link: '/chats' },
  { title: '라이브', icon: <BiVideo />, link: '/live' },
  { title: '나의 캐럿', icon: <BiUser />, link: '/profile' },
];
