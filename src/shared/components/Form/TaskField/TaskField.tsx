'use client';
import { DateSelectorProps, RepeatCycleSelectorProps } from '@/shared/types/index';
import { Priority } from '@/shared/types/prioity';

import DateSelector from '../../DateSelector/DateSelector';
import Input from '../../Input/Input';
import SelectPriority from '../../Select/SelectPriority';
import RepeatCycleSelector from '../RepeatCycleSelector/RepeatCycleSelector';
import Section from '../Section/Section';

type TaskFieldProps = DateSelectorProps &
  React.HTMLAttributes<HTMLInputElement> & {
    priority: Priority;
    setPriority: React.Dispatch<React.SetStateAction<Priority>>;
  } & RepeatCycleSelectorProps;

const TaskField = ({ date, setDate, priority, setPriority, handleSelectedDays, selectedDays, ...props }: TaskFieldProps) => {
  return (
    <>
      <Section sectionTitle='할 일'>
        <Input {...props} />
      </Section>
      <div className='block gap-4 mb:flex'>
        <Section sectionTitle='날짜' className='w-full mb:w-1/2 '>
          <DateSelector mode='range' date={date} setDate={setDate} />
        </Section>
        <Section sectionTitle='우선 순위' className='w-full mb:w-1/2 '>
          <SelectPriority label='우선 순위' options={['중요', '보통', '낮음']} onSelect={setPriority} selectedValue={priority} />
        </Section>
      </div>
      <RepeatCycleSelector handleSelectedDays={handleSelectedDays} selectedDays={selectedDays} />
    </>
  );
};

export default TaskField;
