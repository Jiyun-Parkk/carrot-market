import { UseFormRegisterReturn } from 'react-hook-form';
import { INPUT } from 'enums';
import { EnterInfo } from 'types';

interface CustomInputProps {
  name: EnterInfo;
  register: UseFormRegisterReturn;
}

export const CustomInput = ({ name, register }: CustomInputProps) => {
  return (
    <>
      <label htmlFor='input' className='text-sm font-medium text-gray-700'>
        {name === INPUT.EMAIL ? 'Email address' : 'Phone number'}
      </label>
      {name === INPUT.EMAIL ? (
        <input
          {...register}
          id='input'
          type={INPUT.EMAIL}
          required
          className='focus w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500'
        />
      ) : (
        <div className='flex rounded-md shadow-sm'>
          <span className='flex select-none items-center justify-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500'>
            +82
          </span>
          <input
            {...register}
            id='input'
            type='number'
            required
            className='focus w-full appearance-none rounded-md rounded-l-none border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500'
          />
        </div>
      )}
    </>
  );
};
