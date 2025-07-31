'use client';
import { useState } from 'react';
import { DayPicker, getDefaultClassNames, DateRange } from 'react-day-picker';
import 'react-day-picker/style.css';
import { ko } from 'react-day-picker/locale';

import Button from '@/shared/components/Button/Button';
import { DatePicker as DatePickerType, DateType, Mode } from '@/shared/types/date';

import Caption from './Caption/Caption';
import Navigation from './Navigation/Navigation';

const defaultClassNames = getDefaultClassNames();
const commonProps = {
  style: {
    '--rdp-accent-color': '#8f3fff',
    '--rdp-background-color': '#F7FAFC',
    '--rdp-text-color': '#2D3748',
    '--rdp-selected-text-color': '#FFFFFF',
    '--rdp-selected-background-color': '#8f3fff',
    '--rdp-day-radius': '9999px',
    '--rdp-day-height': '38px',
    '--rdp-day-width': '38px',
    '--rdp-day_button-height': '38px',
    '--rdp-day_button-width': '38px',
  } as React.CSSProperties,
  classNames: {
    root: `${defaultClassNames.root}  font-body3-medium-tight `,
    day_selected: 'bg-purple-500 text-white rounded-full border border-purple-500',
    caption: 'w-full max-w-[200px] m-auto',
    table: 'w-full table-fixed',
  },
  locale: ko,
  showOutsideDays: true,
  components: {
    CaptionLabel: Caption,
    Nav: Navigation,
  } as const,
};

interface DatePickerProps<T extends Mode> extends DatePickerType<T> {
  closeSelector: () => void;
}

const DatePicker = <T extends Mode>({ mode, setDate, closeSelector }: DatePickerProps<T>) => {
  const [datePickerDate, setPickerDate] = useState<DateType<T>>(() => {
    return mode === 'single' ? (new Date() as DateType<T>) : ({ from: new Date(), to: new Date() } as DateType<T>);
  });

  const handleSetDate = () => {
    setDate(datePickerDate);
    closeSelector();
  };

  const handleReset = () => {
    if (mode === 'single') {
      const now = new Date() as DateType<typeof mode>;
      setPickerDate(now);
      setDate(now);
    }
    if (mode === 'range') {
      const resetRange = { from: new Date(), to: new Date() } as DateType<typeof mode>;
      setPickerDate(resetRange);
      setDate(resetRange);
    }
    closeSelector();
  };

  return (
    <div className='py-6 px-[27.5px]  w-80 bg-white rounded-3xl h-fit  shadow-[0_0_40px_0_rgba(52,35,101,0.15)]'>
      {mode === 'single' ? (
        <DayPicker
          mode='single'
          {...commonProps}
          selected={datePickerDate as Date}
          onSelect={setPickerDate as React.Dispatch<React.SetStateAction<Date | undefined>>}
          classNames={{
            ...commonProps.classNames,
            today: 'text-purple-500',
            selected: `bg-purple-500 border-purple-500 text-white rounded-full `,
          }}
          required
        />
      ) : (
        <DayPicker
          mode='range'
          {...commonProps}
          selected={datePickerDate as DateRange}
          onSelect={setPickerDate as React.Dispatch<React.SetStateAction<DateRange | undefined>>}
          classNames={{ ...commonProps.classNames, selected: `font-body3-medium-tight text-white ` }}
          required
        />
      )}
      <div className='flex gap-3 w-full items-center mt-5'>
        <button className='font-body3-semibold w-[93px] flex-shrink-0 cursor-pointer' type='button' onClick={handleReset}>
          초기화
        </button>
        <Button variant='primary' className='font-body3-bold ' type='button' onClick={handleSetDate}>
          {'적용하기'}
        </Button>
      </div>
    </div>
  );
};

export default DatePicker;
