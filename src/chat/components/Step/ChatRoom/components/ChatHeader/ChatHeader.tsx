'use client';

import { useStepContext } from '@/chat/provider/StepProvider';
import Flag from '@/shared/components/Icons/Flag/Flag';
import WhiteChevron from '@/shared/components/Icons/WhiteChevron/WhiteChevron';

import { ChatHeaderProps } from '../../types';

const ChatHeader = ({ goal }: ChatHeaderProps) => {
  const { goToPrevStep } = useStepContext();

  return (
    <div className='flex items-center gap-3  w-full pt-[40px]'>
      <button aria-label='뒤로가기' onClick={goToPrevStep} className='cursor-pointer'>
        <WhiteChevron />
      </button>

      <div className='flex items-center justify-between gap-2 px-5 py-3 rounded-[20px] bg-[#F8F4FE]/20 w-full'>
        <div className='flex items-center gap-1'>
          <Flag type='Mobile' color='#FFFFFF' />
          <p className='text-white font-body2-semibold'>{goal}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
