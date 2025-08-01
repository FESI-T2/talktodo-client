import React from 'react';

import DateSelector from '@/shared/components/DateSelector/DateSelector';
import RepeatButtonGroup from '@/shared/components/Form/RepeatCycleSelector/RepeatButtonGroup/RepeatButtonGroup';
import SelectPriority from '@/shared/components/Select/SelectPriority';
import Switch from '@/shared/components/Switch/Switch';

import { TabItemProps } from '../ResultTabItem.type';
import TableSection from './TableSection/TableSection';

const TabletResultTabItem = ({ date, setDate, selectedDays, handleSelectDays }: TabItemProps) => {
  return (
    <div className='px-6 py-5 w-full base-divider mb-3'>
      <div className='flex justify-between mb-2 '>
        <span className='font-body2-semibold text-purple-700 '>{'할일'}</span>
        <div className='flex items-center gap-2'>
          <span className=' text-gray-500 font-body3-medium-tight'>{'반복 설정'}</span>
          <Switch type='basic' size='S' defaultChecked={false} />
        </div>
      </div>
      <h2 className='font-body1-semibold text-gray-900 pb-2 border-b border-gray-200'>디자인시스템 베리어블 1강 듣기</h2>

      <div className='flex gap-6 items-center py-4 justify-between flex-wrap'>
        <TableSection title='날짜' className='flex-2'>
          <DateSelector mode='range' date={date} setDate={setDate} />
        </TableSection>

        <TableSection title='우선 순위' className='flex-1'>
          <SelectPriority />
        </TableSection>
      </div>

      <div className='flex justify-between items-center gap-5'>
        <span className=' text-gray-500 font-body3-medium-tight hidden tb:inline-block'>{'반복'}</span>
        <RepeatButtonGroup selectedDays={selectedDays} handleClick={handleSelectDays} className='flex-1' />
      </div>
    </div>
  );
};

export default TabletResultTabItem;
