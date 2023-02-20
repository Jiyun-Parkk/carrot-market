import { Layout, Item } from 'components';
import { NextPage } from 'next';

const Love: NextPage = () => {
  return (
    <Layout title='관심목록' canGoBack>
      <div className='flex flex-col space-y-5 py-10'>
        <Item
          productName='iphone 14'
          color='black'
          price={95}
          likedCount={1}
          chatCount={1}
        />
      </div>
    </Layout>
  );
};

export default Love;
