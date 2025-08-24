'use client';

import { useState } from 'react';

import { Mode, DateSelectorProps } from '@/shared/types/date';
import { cn } from '@/shared/utils/cn';
import { formatDateByType } from '@/shared/utils/formatDate';

import DatePicker from '../DatePicker/DatePicker';
import Icon from '../Icon/Icon';

const DateSelector = <T extends Mode>({ date, setDate, mode, className }: DateSelectorProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeSelector = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={cn('base-divider px-3 py-[9px] w-full h-[44px] relative overflow-visible', className)}>
      <div className='absolute top-full mt-[19px] left-0 z-[50] '>
        {isOpen && <DatePicker setDate={setDate} mode={mode} closeSelector={closeSelector} date={date} />}
      </div>
      <div className='flex items-center justify-between'>
        <span>{formatDateByType(date)}</span>
        <button onClick={closeSelector} type='button' className='cursor-pointer'>
          <Icon name='calendar' className='w-6 h-6 ' />
        </button>
      </div>
    </div>
  );
};

export default DateSelector;
