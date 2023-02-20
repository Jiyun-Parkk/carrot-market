import { FullButton, Layout } from 'components';
import { NextPage } from 'next';
import React from 'react';

const Write: NextPage = () => {
  return (
    <Layout title='질문하기' canGoBack>
      <form className='px-4 py-10'>
        <textarea
          className='mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 '
          rows={4}
          placeholder='Ask a question!'
        />
        <FullButton text='Submit' />
      </form>
    </Layout>
  );
};

export default Write;
