import { Layout } from 'components';
import { UploadItem } from 'components/Items';
import type { NextPage } from 'next';

const Create: NextPage = () => {
  return (
    <Layout title='Create Live' canGoBack>
      <div className=' space-y-5 py-10 px-4'>
        <UploadItem buttonText='Go Live' />
      </div>
    </Layout>
  );
};

export default Create;
