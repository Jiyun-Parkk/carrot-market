export const MyMessage = ({ message }: { message: string }) => {
  return (
    <div className='flex flex-row-reverse items-start space-x-2 space-x-reverse'>
      <div className='h-8 w-8 rounded-full bg-slate-400' />
      <div className='w-1/2 rounded-md border border-gray-300 p-2 text-sm text-gray-700'>
        <p>{message}</p>
      </div>
    </div>
  );
};
