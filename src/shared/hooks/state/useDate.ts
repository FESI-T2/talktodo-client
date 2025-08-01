import { useState } from 'react';

import { Mode, DateType } from '@/shared/types/date';

const useDate = <T extends Mode>(mode: T) => {
  const [date, setDate] = useState<DateType<T>>(() =>
    mode === 'single' ? (new Date() as DateType<T>) : ({ from: new Date(), to: new Date() } as DateType<T>)
  );
  return {
    date,
    setDate,
  };
};

export default useDate;
