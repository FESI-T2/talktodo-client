'use client';

import { useStepContext } from '@/chat/provider/StepProvider';
import Icon from '@/shared/components/Icon/Icon';

import { ChatHeaderProps } from '../../types';

const ChatHeader = ({ goal }: ChatHeaderProps) => {
  const { goToPrevStep } = useStepContext();

  return (
    <div className='flex items-center gap-3  w-full pt-[40px]'>
      <button aria-label='뒤로가기' onClick={goToPrevStep} className='cursor-pointer'>
        <Icon name='chevron-left' className='w-6 h-6' />
      </button>

      <div className='flex items-center justify-between gap-2 px-5 py-3 rounded-[20px] bg-[#F8F4FE]/20 w-full'>
        <div className='flex items-center gap-1'>
          <Icon name='flag' className='w-6 h-6' />
          <p className='text-white font-body2-semibold'>{goal}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
