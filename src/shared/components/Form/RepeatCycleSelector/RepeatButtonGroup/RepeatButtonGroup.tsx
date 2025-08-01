import React from 'react';

import { REPEAT_DAYS, RepeatDay } from '@/shared/types';

import { cn } from '@/shared/utils/cn';

import RepeatButton from '../RepeatButton/RepeatButton';

interface RepeatButtonGroupProps {
  selectedDays: RepeatDay[];
  handleClick: (day: RepeatDay) => void;
  className?: string;
}

const RepeatButtonGroup = ({ selectedDays, handleClick, className }: RepeatButtonGroupProps) => {
  return (
    <div className={cn('grid grid-cols-7 gap-2 mb:grid-cols-8', className)}>
      {REPEAT_DAYS.map((day, idx) => {
        const isSelected = selectedDays.includes(day);
        const isLast = idx === REPEAT_DAYS.length - 1;
        return (
          <RepeatButton
            key={day}
            type='button'
            onClick={() => handleClick(day)}
            isActive={isSelected}
            className={isLast ? 'col-span-7 mb:col-span-1 ' : ''}
          >
            {day}
          </RepeatButton>
        );
      })}
    </div>
  );
};

export default RepeatButtonGroup;
