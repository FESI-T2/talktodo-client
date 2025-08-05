import { useState } from 'react';

import { Mode, DateType } from '@/shared/types/date';

const useDate = <T extends Mode>(mode: T, initDate?: DateType<T>) => {
  const getDefaultDate = (): DateType<T> => {
    if (mode === 'single') {
      return (initDate ?? new Date()) as DateType<T>;
    }
    return (initDate ?? { from: new Date(), to: new Date() }) as DateType<T>;
  };

  const [date, setDate] = useState<DateType<T>>(getDefaultDate);

  return { date, setDate };
};

export default useDate;
