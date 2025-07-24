import React from 'react';
import { DayPicker, getDefaultClassNames } from 'react-day-picker';
import 'react-day-picker/style.css';
import { ko } from 'react-day-picker/locale';

import Button from '@/auth/components/Button/Button';

import Caption from './Caption/Caption';
import Navigation from './Navigation/Navigation';
const DatePicker = (props: React.ComponentProps<typeof DayPicker>) => {
  const defaultClassNames = getDefaultClassNames();

  return (
    <div className='py-6 px-[27.5px] h-fit max-w-80 bg-white rounded-3xl'>
      <DayPicker
        {...props}
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
          root: `${defaultClassNames.root}  font-body3-medium-tight`,
          week: 'w-[265px]',
        }}
        locale={ko}
        showOutsideDays
        fixedWeeks
        components={{
          CaptionLabel: Caption,
          Nav: Navigation,
        }}
      />
      <div className='flex gap-3 w-full items-center mt-5'>
        <button className='font-body3-semibold w-[93px] flex-shrink-0 cursor-pointer'>초기화</button>
        <Button variant='primary' className='font-body3-bold'>
          {'적용하기'}
        </Button>
      </div>
    </div>
  );
};

export default DatePicker;
