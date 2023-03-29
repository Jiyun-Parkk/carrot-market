import { useState } from 'react';
import { CustomInput, FullButton } from 'components';
import { cls } from 'libs/utils';
import { AiOutlineTwitter, AiFillGithub } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { INPUT } from 'enums';
import { EnterInfo } from 'types';
interface EnterForm {
  [INPUT.EMAIL]?: string;
  [INPUT.PHONE]?: string;
}
export default function Enter() {
  const { register, watch, reset, handleSubmit } = useForm<EnterForm>();
  const [method, setMethod] = useState<EnterInfo>(INPUT.EMAIL);

  const onChangeTab = (tabTitle: EnterInfo) => {
    reset();
    setMethod(tabTitle);
  };

  const handleEnter = (value: EnterForm) => {
    console.log(value);
  };
  return (
    <div className='mt-16 px-4'>
      <h3 className='text-center text-3xl font-bold'>Welcome to Carrot</h3>
      <div className='mt-16'>
        <div className='flex flex-col items-center'>
          <div className='mt-8 grid w-full grid-cols-2 gap-16 border-b'>
            {[INPUT.EMAIL, INPUT.PHONE].map((title) => (
              <button
                key={title}
                className={cls(
                  'border-b-2  pb-4 font-medium',
                  method === title
                    ? 'border-b-orange-500 text-orange-400'
                    : 'border-transparent text-gray-500',
                )}
                onClick={() => onChangeTab(title)}
              >
                {title}
              </button>
            ))}
          </div>
        </div>
        <form
          className='mt-8 flex flex-col'
          onSubmit={handleSubmit(handleEnter)}
        >
          {method === INPUT.EMAIL ? (
            <CustomInput name={INPUT.EMAIL} register={register(INPUT.EMAIL)} />
          ) : (
            <CustomInput name={INPUT.PHONE} register={register(INPUT.PHONE)} />
          )}
          <FullButton
            text={
              method === INPUT.EMAIL
                ? 'Get login link'
                : 'Get one-time password'
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
