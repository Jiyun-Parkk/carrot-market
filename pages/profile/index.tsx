import { Layout } from 'components';
import type { NextPage } from 'next';
import Link from 'next/link';
import { BiHeart } from 'react-icons/bi';
import { BsCart, BsHandbag, BsStar, BsStarFill } from 'react-icons/bs';

const Profile: NextPage = () => {
  const starCount = 3;
  return (
    <Layout title='나의캐럿' hasTabBar>
      <div className='py-10 px-4'>
        <div className='flex items-center space-x-3'>
          <div className='h-16 w-16 rounded-full bg-slate-500' />
          <div className='flex flex-col'>
            <span className='font-medium text-gray-500'>Steve Jebs</span>
            <Link href='/profile/edit' className='text-sm text-gray-700'>
              Edit profile &rarr;
            </Link>
          </div>
        </div>
        <div className='mt-10 flex justify-around'>
          {myPageMenu.map((menu) => (
            <Link
              key={menu.link}
              href={menu.link}
              className='flex flex-col items-center'
            >
              <div
                className='flex h-14 w-14 items-center
          justify-center
          rounded-full
          bg-orange-500
          text-xl text-white'
              >
                {menu.icon}
              </div>
              <span className='mt-2 text-sm font-medium text-gray-700'>
                {menu.title}
              </span>
            </Link>
          ))}
        </div>
        <div>
          <div className='mt-12'>
            <div className='flex items-center space-x-4'>
              <div className='h-12 w-12 rounded-full bg-slate-500' />
              <div />
              <h4 className='text-sm font-bold text-gray-800'>니꼬</h4>
              <div className='flex items-center space-x-1'>
                {Array.from({ length: 5 }, (_, i) => i).map((star) => (
                  <span key={star}>
                    {star + 1 <= starCount ? (
                      <BsStarFill className='text-yellow-500' />
                    ) : (
                      <BsStar />
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className='mt-4 text-sm text-gray-600'>
            <p>
              Normally, both your asses would be dead as fucking fried chicken,
              but you happen to pull this shit while I&apos;m in a transitional
              period so I don&apos;t wanna kill you, I wanna help you. But I
              can&apos;t give you this case, it don&apos;t belong to me.
              Besides, I&apos;ve already been through too much shit this morning
              over this case to hand it over to your dumb ass.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;

const myPageMenu = [
  { title: '판매내역', icon: <BsCart />, link: '/profile/sold' },
  { title: '구매내역', icon: <BsHandbag />, link: '/profile/bought' },
  { title: '관심목록', icon: <BiHeart />, link: '/profile/loved' },
];
