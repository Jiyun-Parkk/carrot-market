import { FullButton, Layout } from 'components';
import { Email, Phone } from 'components/Form';
import { NextPage } from 'next';
import React from 'react';

const EditProfile: NextPage = () => {
  return (
    <Layout title='Edit Profile' canGoBack>
      <div className='space-y-4 py-10 px-4'>
        <div className='flex items-center space-x-3'>
          <div className='h-14 w-14 rounded-full bg-slate-500' />
          <label
            htmlFor='picture'
            className='border-gray-0300 focus:fing-orange-500 cursor-pointer rounded-md border py-2 px-3 text-sm font-medium text-gray-700 shadow-sm focus:ring-2 focus:ring-offset-2'
          >
            Change
            <input
              type='file'
              id='picture'
              className='hidden'
              accept='image/*'
            />
          </label>
        </div>
        <div className='space-y-1'>
          <Email />
        </div>
        <div className='space-y-1'>
          <Phone />
        </div>

        <FullButton text='Update EditProfile' />
      </div>
    </Layout>
  );
};

export default EditProfile;
