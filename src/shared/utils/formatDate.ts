import { DateRange } from 'react-day-picker';

export const format = (date: Date) =>
  `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0') + '(월)'}`;

export const formatDateByType = (date: DateRange | Date) => {
  if (date instanceof Date) {
    return format(date);
  }
  return format(date.from!);
};
