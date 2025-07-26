import { Dispatch, SetStateAction } from 'react';
import { DateRange } from 'react-day-picker';

// 여러곳에서 사용도는 props 타입 모음

export interface DateSelectorProps {
  date: DateRange;
  setDate: Dispatch<SetStateAction<DateRange>>;
}
