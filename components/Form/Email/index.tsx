export const Email = () => {
  return (
    <>
      <label htmlFor='input' className='text-sm font-medium text-gray-700'>
        Email address
      </label>
      <input
        id='input'
        type='email'
        required
        className='focus w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500'
      />
    </>
  );
};
