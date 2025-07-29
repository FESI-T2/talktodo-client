'use client';

import { useState } from 'react';

import Calendar from '@/icons/Calendar/Calendar';
import { Mode, DateSelectorProps } from '@/shared/types/date';
import { formatDateByType } from '@/shared/utils/formatDateRange';

import DatePicker from '../DatePicker/DatePicker';

const DateSelector = <T extends Mode>({ date, setDate, mode }: DateSelectorProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeSelector = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='base-divider px-3 py-[9px] w-full h-[44px] relative '>
      <div className='absolute top-full mt-[19px] left-0'>
        {isOpen && <DatePicker setDate={setDate} mode={mode} closeSelector={closeSelector} />}
      </div>
      <div className='flex items-center justify-between'>
        <span>{formatDateByType(date)}</span>
        <button onClick={closeSelector} type='button' className='cursor-pointer'>
          <Calendar />
        </button>
      </div>
    </div>
  );
};

export default DateSelector;
