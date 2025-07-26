export const formatDateRange = (startDateStr: Date, endDateStr: Date) => {
  const start = new Date(startDateStr);
  const end = new Date(endDateStr);

  if (start.getFullYear() === end.getFullYear() && start.getMonth() === end.getMonth() && start.getDate() === end.getDate())
    return `${format(start)}`;
  return `${format(start)} - ${format(end)}`;
};

export const format = (date: Date) =>
  `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0') + '(월)'}`;
