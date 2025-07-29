'use client';
import { useDayPicker } from 'react-day-picker';

import Chevron from '@/icons/Chevron/Chevron';

const Navigation = () => {
  const { goToMonth, nextMonth, previousMonth } = useDayPicker();
  return (
    <div className='flex items-center justify-between px-2 rdp-nav '>
      <button onClick={() => goToMonth(previousMonth!)} className='cursor-pointer w-fit'>
        <Chevron direction='left' />
      </button>
      <button onClick={() => goToMonth(nextMonth!)} className='cursor-pointer w-fit'>
        <Chevron direction='right' />
      </button>
    </div>
  );
};

export default Navigation;
