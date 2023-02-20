import { Item, Layout } from 'components';
import { NextPage } from 'next';

const Buy: NextPage = () => {
  return (
    <div className='flex flex-col space-y-5 py-10'>
      <Layout title='구매내역' canGoBack>
        <Item
          productName='iphone 14'
          color='black'
          price={95}
          likedCount={1}
          chatCount={1}
        />
      </Layout>
    </div>
  );
};

export default Buy;
