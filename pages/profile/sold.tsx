import { Layout, Item } from 'components';
import { NextPage } from 'next';

const Sold: NextPage = () => {
  return (
    <Layout title='판매내역' canGoBack>
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

export default Sold;
