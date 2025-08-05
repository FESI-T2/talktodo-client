import { Dispatch, SetStateAction } from 'react';
import { DateRange } from 'react-day-picker';

// 여러곳에서 사용되는 props 타입 모음

export type DateType<T extends Mode> = T extends 'single' ? Date : DateRange;
export type Mode = 'single' | 'range';

export interface DatePicker<T extends Mode> {
  mode: T;
  date: DateType<T>;
  setDate: Dispatch<SetStateAction<DateType<T>>>;
}

export interface DateSelectorProps<T extends Mode> extends DatePicker<T> {
  date: DateType<T>;
  className?: string;
}
