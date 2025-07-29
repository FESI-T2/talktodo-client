import { DateRange } from 'react-day-picker';
export const formatDateRange = (startDateStr: Date, endDateStr: Date) => {
  const start = new Date(startDateStr);
  const end = new Date(endDateStr);

  if (start.getFullYear() === end.getFullYear() && start.getMonth() === end.getMonth() && start.getDate() === end.getDate())
    return `${format(start)}`;
  return `${format(start)} - ${format(end)}`;
};

export const format = (date: Date) =>
  `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0') + '(월)'}`;

export const formatDateByType = (date: DateRange | Date) => {
  if (date instanceof Date) {
    return format(date);
  }
  return format(date.from!);
};
