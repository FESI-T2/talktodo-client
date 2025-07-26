'use client';
import { useState } from 'react';
import { DayPicker, getDefaultClassNames, DateRange } from 'react-day-picker';
import 'react-day-picker/style.css';
import { ko } from 'react-day-picker/locale';

import Button from '@/shared/components/Button/Button';

import Caption from './Caption/Caption';
import Navigation from './Navigation/Navigation';

interface DatePickerProps {
  setDate: React.Dispatch<React.SetStateAction<DateRange>>;
}

const DatePicker = ({ setDate }: DatePickerProps) => {
  const defaultClassNames = getDefaultClassNames();

  const [datePickerDate, setPickerDate] = useState<DateRange>({
    from: new Date(),
    to: new Date(),
  });

  const handleSetDate = () => setDate(datePickerDate);
  const handleReset = () => {
    setPickerDate({ from: new Date(), to: new Date() });
    setDate({ from: undefined, to: undefined });
  };

  return (
    <div className='py-6 px-[27.5px]  w-80 bg-white rounded-3xl h-fit'>
      <DayPicker
        style={
          {
            '--rdp-accent-color': 'var(--color-purple-500)',
            '--rdp-today-color': 'var(--color-purple-500)',
            '--rdp-day-height': '36px',
            '--rdp-day_width': '36px',
            '--rdp-day_button-height': '36px',
            '--rdp-day_button-width': '36px',
          } as React.CSSProperties
        }
        classNames={{
          selected: `font-body3-medium-tight`,
          root: `${defaultClassNames.root}  font-body3-medium-tight `,
          week: 'w-[265px] ',
        }}
        locale={ko}
        showOutsideDays
        components={{
          CaptionLabel: Caption,
          Nav: Navigation,
        }}
        selected={datePickerDate}
        onSelect={setPickerDate}
        mode='range'
        required
      />
      <div className='flex gap-3 w-full items-center mt-5'>
        <button className='font-body3-semibold w-[93px] flex-shrink-0 cursor-pointer' type='button' onClick={handleReset}>
          초기화
        </button>
        <Button variant='primary' className='font-body3-bold' type='button' onClick={handleSetDate}>
          {'적용하기'}
        </Button>
      </div>
    </div>
  );
};

export default DatePicker;
