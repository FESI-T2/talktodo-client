'use client';

import { useState } from 'react';

import { DateSelectorProps } from '@/shared/types/props';
import { formatDateRange, format } from '@/shared/utils/formatDateRange';

import DatePicker from '../DatePicker/DatePicker';
import Calendar from '../Icons/Calendar/Calendar';

const DateSelector = ({ date, setDate }: DateSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='base-divider px-3 py-[9px] w-full h-[44px] relative'>
      <div className='flex items-center justify-between'>
        <div className='@container container-type-inline w-fit h-fit'>
          <span className='hidden @xs:block'>{formatDateRange(date.from!, date.to!)}</span>
          <span className='@xs:hidden'>{format(date.from!)}</span>
        </div>
        <button onClick={handleToggle} type='button'>
          <Calendar />
        </button>
      </div>

      <div className='absolute top-full mt-[19px]'>{isOpen && <DatePicker setDate={setDate} />}</div>
    </div>
  );
};

export default DateSelector;
