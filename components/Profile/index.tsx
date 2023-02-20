export const UserProfile = ({ userName }: { userName: string }) => {
  return (
    <div className='mb-3 flex cursor-pointer items-center space-x-3  border-b px-4 pb-3'>
      <div className='h-10 w-10 rounded-full bg-slate-300' />
      <div>
        <p className='text-sm font-medium text-gray-700'>{userName}</p>
        <p className='text-xs font-medium text-gray-500'>View profile &rarr;</p>
      </div>
    </div>
  );
};
