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
    slectPriority: (value: Priority) => void;
  } & RepeatCycleSelectorProps;

const TaskField = ({ date, setDate, priority, slectPriority, handleSelectedDays, selectedDays, ...props }: TaskFieldProps) => {
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
          <SelectPriority selectPriority={slectPriority} priority={priority} />
        </Section>
      </div>
      <RepeatCycleSelector handleSelectedDays={handleSelectedDays} selectedDays={selectedDays} />
    </>
  );
};

export default TaskField;
