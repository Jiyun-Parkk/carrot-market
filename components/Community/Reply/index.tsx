import { BsChatDots } from 'react-icons/bs';
import { AiOutlineCheckCircle } from 'react-icons/ai';

interface ReplyProps {
  wonder: number;
  reply: number;
}

export const Reply = ({ wonder, reply }: ReplyProps) => {
  return (
    <div className='my-3 flex w-full space-x-5 border-t border-b-[2px] py-2.5 text-gray-700'>
      <span className='flex items-center space-x-2 text-sm'>
        <AiOutlineCheckCircle />
        <span>궁금해요 {wonder}</span>
      </span>
      <span className='flex items-center space-x-2 text-sm'>
        <BsChatDots />
        <span>답변 {reply}</span>
      </span>
    </div>
  );
};
