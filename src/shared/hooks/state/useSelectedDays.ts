import { useState } from 'react';

import { RepeatDay } from '@/shared/types';

const useSelectedDays = () => {
  const [selectedDays, setSelectedDays] = useState<RepeatDay[]>([]);

  const handleSelectDays = (day: RepeatDay) => {
    setSelectedDays((prev) => (prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]));
  };

  return {
    handleSelectDays,
    selectedDays,
  };
};

export default useSelectedDays;
