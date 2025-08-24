'use client';
import { useDayPicker } from 'react-day-picker';

import Icon from '../../Icon/Icon';

const Navigation = () => {
  const { goToMonth, nextMonth, previousMonth } = useDayPicker();
  return (
    <div className='flex items-center justify-between px-2 rdp-nav '>
      <button onClick={() => goToMonth(previousMonth!)} className='cursor-pointer w-fit'>
        <Icon name='chevron-left' className='w-6 h-6' />
      </button>
      <button onClick={() => goToMonth(nextMonth!)} className='cursor-pointer w-fit'>
        <Icon name='chevron-right' className='w-6 h-6' />
      </button>
    </div>
  );
};

export default Navigation;
