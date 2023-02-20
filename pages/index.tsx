import { FloatButton, Item, Layout } from 'components';
import { AiOutlinePlus } from 'react-icons/ai';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
const Home: NextPage = () => {
  const router = useRouter();
  const onClickFloatButton = () => {
    router.push('/items/upload');
  };

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
      </div>
      <FloatButton onClick={onClickFloatButton}>
        <AiOutlinePlus />
      </FloatButton>
    </Layout>
  );
};

export default Home;
