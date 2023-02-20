import { Item, Layout } from 'components';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Layout title='Home' hasTabBar>
      <div className='flex flex-col  divide-y-[1px] py-10'>
        <Item
          productName='iphone 14'
          color='black'
          price={95}
          likedCount={1}
          chatCount={1}
        />
        <button className='fixed bottom-24 right-5 cursor-pointer  rounded-full bg-orange-400 p-4 text-white shadow-xl transition-colors hover:bg-orange-500'>
          <svg
            className='h-6 w-6'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M12 6v6m0 0v6m0-6h6m-6 0H6'
            />
          </svg>
        </button>
      </div>
    </Layout>
  );
};

export default Home;
