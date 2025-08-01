import React from 'react';

import DateSelector from '@/shared/components/DateSelector/DateSelector';
import RepeatButtonGroup from '@/shared/components/Form/RepeatCycleSelector/RepeatButtonGroup/RepeatButtonGroup';
import SelectPriority from '@/shared/components/Select/SelectPriority';
import Switch from '@/shared/components/Switch/Switch';

import { TabItemProps } from '../ResultTabItem.type';

const DeskTopResultTabItem = ({ date, setDate, selectedDays, handleSelectDays }: TabItemProps) => {
  return (
    <div className='table gap-8 py-5 border-b border-gray-200 px-2 w-full max-w-[822px]'>
      <h2 className='font-body1-semibold text-gray-900'>디자인시스템 베리어블 1강 듣기</h2>
      <DateSelector mode='range' date={date} setDate={setDate} />
      <SelectPriority />
      <Switch type='basic' size='S' defaultChecked={false} className='flex items-center' />
      <div /> {/* 그리드 행을 맞추기 위한 임시 요소 */}
      <div className='col-span-3 flex flex-col gap-2 max-w-[446px]  '>
        <p>반복 요일</p>
        <RepeatButtonGroup selectedDays={selectedDays} handleClick={handleSelectDays} />
      </div>
    </div>
  );
};

export default DeskTopResultTabItem;
