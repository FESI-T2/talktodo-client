import { Dispatch, SetStateAction } from 'react';
import { DateRange } from 'react-day-picker';

import { RepeatDay } from '@/shared/types/index';

export interface TabItemProps {
  date: DateRange;
  setDate: Dispatch<SetStateAction<DateRange>>;
  selectedDays: RepeatDay[];
  handleSelectDays: (day: RepeatDay) => void;
}
