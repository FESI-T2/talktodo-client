import { Dispatch, SetStateAction } from 'react';
import { DateRange } from 'react-day-picker';

export interface DateSelectorProps {
  date: DateRange;
  setDate: Dispatch<SetStateAction<DateRange>>;
}

export interface RepeatCycleSelectorProps {
  selectedDays: RepeatDay[];
  handleSelectedDays: (days: RepeatDay) => void;
}

export const REPEAT_DAYS = ['월', '화', '수', '목', '금', '토', '일', '매일'] as const;
export type RepeatDay = (typeof REPEAT_DAYS)[number];
