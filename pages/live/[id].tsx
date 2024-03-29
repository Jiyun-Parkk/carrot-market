import { Layout, MyMessage, OpponentMessage, MessageInput } from 'components';
import type { NextPage } from 'next';

const Stream: NextPage = () => {
  return (
    <Layout title='Galaxy S50' canGoBack>
      <div className='space-y-4 py-10  px-4'>
        <div className='aspect-video w-full rounded-md bg-slate-300 shadow-sm' />
        <div className='mt-5'>
          <h1 className='text-3xl font-bold text-gray-900'>Galaxy S50</h1>
          <span className='mt-3 block text-2xl text-gray-900'>$140</span>
          <p className=' my-6 text-gray-700'>
            My money&apos;s in that office, right? If she start giving me some
            bullshit about it ain&apos;t there, and we got to go someplace else
            and get it, I&apos;m gonna shoot you in the head then and there.
            Then I&apos;m gonna shoot that bitch in the kneecaps, find out where
            my goddamn money is. She gonna tell me too. Hey, look at me when
            I&apos;m talking to you, motherfucker. You listen: we go in there,
            and that ni**a Winston or anybody else is in there, you the first
            motherfucker to get shot. You understand?
          </p>
        </div>
        <div>
          <h2 className='text-2xl font-bold text-gray-900'>Live Chat</h2>
          <div className='h-[50vh] space-y-4 overflow-y-scroll py-10 px-4  pb-16 scrollbar-none'>
            <OpponentMessage message='Hi how much are you selling them for?' />
            <MyMessage message='I want ￦20,000' />
          </div>
          <MessageInput />
        </div>
      </div>
    </Layout>
  );
};

export default Stream;
