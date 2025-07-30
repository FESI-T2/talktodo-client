'use client';

import { useState } from 'react';

import { REPEAT_DAYS, RepeatDay } from '@/shared/types/index';

import Switch from '../../Switch/Switch';

import SubText from '../SubText/SubText';
import RepeatButton from './RepeatButton/RepeatButton';

interface RepeatCycleSelectorProps {
  selectedDays: RepeatDay[];
  handleSelectedDays: (days: RepeatDay) => void;
}

const RepeatCycleSelector = ({ selectedDays, handleSelectedDays }: RepeatCycleSelectorProps) => {
  const [isRepeatEnabled, setIsRepeatEnabled] = useState(false);

  const toggleDay = (day: RepeatDay) => {
    if (isRepeatEnabled) handleSelectedDays(day);
  };

  return (
    <div className='mb-10'>
      <div className='flex w-full justify-between items-center mb-6 '>
        <SubText text='반복 설정' />
        <Switch type='basic' size='S' checked={isRepeatEnabled} onChange={() => setIsRepeatEnabled(!isRepeatEnabled)} />
      </div>
      <div className='grid grid-cols-7 gap-2 mb:grid-cols-8'>
        {REPEAT_DAYS.map((day, idx) => {
          const isSelected = selectedDays.includes(day);
          const isLast = idx === REPEAT_DAYS.length - 1;
          return (
            <RepeatButton
              key={day}
              type='button'
              onClick={() => toggleDay(day)}
              isActive={isSelected}
              className={isLast ? 'col-span-7 mb:col-span-1 ' : ''}
            >
              {day}
            </RepeatButton>
          );
        })}
      </div>
    </div>
  );
};

export default RepeatCycleSelector;
