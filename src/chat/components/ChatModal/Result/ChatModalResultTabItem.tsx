'use client';

import { useState } from 'react';
import { DateRange } from 'react-day-picker';

import DateSelector from '@/shared/components/DateSelector/DateSelector';
import SelectPriority from '@/shared/components/Select/SelectPriority';
import Switch from '@/shared/components/Switch/Switch';

const INIT_DATE_RANGE: DateRange = {
  from: new Date(2023, 9, 1),
  to: new Date(2023, 9, 31),
};

const ChatModalResultTabItem = () => {
  const [date, setDate] = useState<DateRange>(INIT_DATE_RANGE);

  return (
    <div className='flex items-center gap-8'>
      <div className='w-[300px] font-body1-semibold text-gray-900'>디자인시스템 베리어블 1강 듣기</div>
      <div className='w-[200px]'>
        <DateSelector date={date} setDate={setDate} />
      </div>
      <div className='w-[120px]'>
        <SelectPriority />
      </div>
      <div className='w-[80px] flex items-center'>
        <Switch type='basic' size='S' defaultChecked={false} />
      </div>
    </div>
  );
};

export default ChatModalResultTabItem;
