import Chevron from '@/shared/components/Icons/Chevron/Chevron';

import SvgIconFlag from 'public/icon/Flag';

interface ChatHeaderProps {
  isNew: boolean;
  headerTitle?: string;
  TaskCount?: number;
}

const ChatHeader = ({ isNew, headerTitle, TaskCount = 0 }: ChatHeaderProps) => {
  return (
    <div className='flex w-[960px] items-center gap-3'>
      <button aria-label='뒤로가기'>
        <Chevron direction='left' />
      </button>

      <div className='flex items-center justify-between gap-2 px-5 py-3 rounded-[20px] bg-gray-800 w-[920px]'>
        <div className='flex items-center gap-1'>
          <SvgIconFlag type='Mobile' color='#FFFFFF' />
          <p className='text-white font-body2-semibold '>{isNew ? '새로운 목표' : headerTitle}</p>
        </div>
        {!isNew && <p className='font-body3-medium-tight text-purple-150'>{TaskCount}개의 할 일</p>}
      </div>
    </div>
  );
};

export default ChatHeader;
