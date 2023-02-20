import { useState } from 'react';
import { Email, Phone, FullButton } from 'components';
import { cls } from 'libs/utils';
import { AiOutlineTwitter, AiFillGithub } from 'react-icons/ai';

export default function Enter() {
  const [method, setMethod] = useState<'Email' | 'Phone'>('Email');
  const onEmailClick = () => setMethod('Email');
  const onPhoneClick = () => setMethod('Phone');

  return (
    <div className='mt-16 px-4'>
      <h3 className='text-center text-3xl font-bold'>Welcome to Carrot</h3>
      <div className='mt-16'>
        <div className='flex flex-col items-center'>
          <div className='mt-8 grid w-full grid-cols-2 gap-16 border-b'>
            {['Email', 'Phone'].map((title) => (
              <button
                key={title}
                className={cls(
                  'border-b-2  pb-4 font-medium',
                  method === title
                    ? 'border-b-orange-500 text-orange-400'
                    : 'border-transparent text-gray-500',
                )}
                onClick={title === 'Email' ? onEmailClick : onPhoneClick}
              >
                {title}
              </button>
            ))}
          </div>
        </div>
        <form className='mt-8 flex flex-col'>
          {method === 'Email' ? <Email /> : <Phone />}
          <FullButton
            text={
              method === 'Email' ? 'Get login link' : 'Get one-time password'
            }
          />
        </form>
        <div className='mt-10'>
          <div className='relative'>
            <div className='absolute w-full border-t border-gray-300' />
            <div className='relative -top-3 text-center text-sm'>
              <span className='bg-white px-2 text-sm text-gray-500'>
                OR Enter With
              </span>
            </div>
          </div>
          <div className='mt-6 grid grid-cols-2 gap-3'>
            {[<AiOutlineTwitter key={1} />, <AiFillGithub key={2} />].map(
              (icon, idx) => (
                <button
                  key={idx}
                  className='flex items-center justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-2xl font-medium text-gray-500 shadow-sm hover:bg-gray-50'
                >
                  {icon}
                </button>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
