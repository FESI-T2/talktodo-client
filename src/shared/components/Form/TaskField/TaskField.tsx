'use client';
import { DateRange } from 'react-day-picker';

import { Priority } from '@/shared/types/prioity';

import DateSelector from '../../DateSelector/DateSelector';
import Input from '../../Input/Input';
import SelectPriority from '../../Select/SelectPriority';
import SubText from '../SubText/SubText';

type TaskFieldProps = React.HTMLAttributes<HTMLInputElement> & {
  priority: Priority;
  setPriority: React.Dispatch<React.SetStateAction<Priority>>;
  date: DateRange;
  setDate: React.Dispatch<React.SetStateAction<DateRange>>;
};

const TaskField = ({ date, setDate, priority, setPriority, ...props }: TaskFieldProps) => {
  return (
    <>
      <SubText text='할 일'>
        <Input {...props} />
      </SubText>
      <div className='flex gap-4 '>
        <SubText text='날짜' className='w-1/2 '>
          <DateSelector date={date} setDate={setDate} mode={'range'} />
        </SubText>
        <SubText text='우선 순위' className='w-1/2 '>
          <SelectPriority label='우선 순위' options={['중요', '보통', '낮음']} onSelect={setPriority} selectedValue={priority} />
        </SubText>
      </div>
    </>
  );
};

export default TaskField;
