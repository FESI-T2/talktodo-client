'use client';
import { DateSelectorProps } from '@/shared/types/props';

import DateSelector from '../../DateSelector/DateSelector';
import Input from '../../Input/Input';
import SubText from '../SubText/SubText';

// 차후에 추가
// interface TaskFieldProps extends DateSelectorProps {}

const TaskField = ({ date, setDate }: DateSelectorProps) => {
  return (
    <>
      <SubText text='할 일'>
        <Input />
      </SubText>
      <div className='flex gap-4 '>
        <SubText text='날짜' className='w-1/2 '>
          <DateSelector date={date} setDate={setDate} />
        </SubText>
        <SubText text='우선 순위'>
          <Input />
        </SubText>
      </div>
    </>
  );
};

export default TaskField;
