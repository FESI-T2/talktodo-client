'use client';

import Chevron from '@/shared/components/Icons/Chevron/Chevron';
import Flag from '@/shared/components/Icons/Flag/Flag';

interface ChatHeaderProps {
  isNew: boolean;
  headerTitle?: string;
  taskCount?: number;
  onClick?: () => void;
}

const ChatHeader = ({ isNew, headerTitle, taskCount = 0, onClick }: ChatHeaderProps) => {
  return (
    <div className='flex items-center gap-3 pc:w-[960px] tb:w-[712px] w-[343px]'>
      <button aria-label='뒤로가기' onClick={onClick} className='cursor-pointer'>
        <Chevron direction='left' />
      </button>

      <div className='flex items-center justify-between gap-2 px-5 py-3 rounded-[20px] bg-gray-800/10 w-[920px]'>
        <div className='flex items-center gap-1'>
          <Flag type='Mobile' color='#FFFFFF' />
          <p className='text-white font-body2-semibold'>{isNew ? '새로운 목표' : headerTitle}</p>
        </div>
        {!isNew && <p className='font-body3-medium-tight text-purple-150'>{taskCount}개의 할 일</p>}
      </div>
    </div>
  );
};

export default ChatHeader;
