import { FullButton } from 'components';

export const UploadItem = ({ buttonText }: { buttonText: string }) => {
  return (
    <>
      <div>
        <label
          className='mb-1 block text-sm font-medium text-gray-700'
          htmlFor='name'
        >
          Name
        </label>
        <div className='relative flex items-center  rounded-md shadow-sm'>
          <input
            id='name'
            type='email'
            className='w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500'
            required
          />
        </div>
      </div>
      <div className='my-5'>
        <label
          htmlFor='price'
          className='mb-1 block text-sm font-medium text-gray-700'
        >
          Price
        </label>
        <div className='relative flex items-center rounded-md shadow-sm '>
          <div className='pointer-events-none absolute left-0 flex items-center justify-center pl-3'>
            <span className='text0sm text-gray-500'>$</span>
          </div>
          <input
            className='focus w-full appearance-none rounded-md border border-gray-300 px-3 py-2 pl-7 placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500'
            id='price'
            type='text'
            placeholder='0.00'
          />
          <div className='pointer-events-none absolute right-0 flex items-center pr-3'>
            <span className='text-gray-500'>USD</span>
          </div>
        </div>
      </div>
      <div>
        <label
          htmlFor='description'
          className='mb-1 block text-sm font-medium text-gray-700'
        >
          Description
        </label>
        <div>
          <textarea
            rows={4}
            id='decription'
            className='mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500'
          />
        </div>
      </div>
      <FullButton text={buttonText} />
    </>
  );
};
