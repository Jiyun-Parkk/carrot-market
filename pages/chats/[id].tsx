import { Layout, MyMessage, OpponentMessage } from 'components';
import { MessageInput } from 'components/Chat/MessageInput';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

const ChatDetail: NextPage = () => {
  const { query } = useRouter();

  return (
    <Layout title={query.id as string} canGoBack>
      <div className='space-y-4 py-10 px-4'>
        <OpponentMessage message='Hi how much are you selling them for?' />
        <MyMessage message='I want ￦20,000' />
        <MessageInput />
      </div>
    </Layout>
  );
};

export default ChatDetail;
