'use client';

import { useState } from 'react';

import { RepeatDay } from '@/shared/types/index';

import Switch from '../../Switch/Switch';

import SubText from '../SubText/SubText';
import RepeatButtonGroup from './RepeatButtonGroup/RepeatButtonGroup';

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

      <RepeatButtonGroup selectedDays={selectedDays} handleClick={toggleDay} />
    </div>
  );
};

export default RepeatCycleSelector;
