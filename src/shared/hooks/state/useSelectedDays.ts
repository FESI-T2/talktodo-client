import { useState } from 'react';

import { RepeatDay } from '@/shared/types';

const useSelectedDays = () => {
  const [selectedDays, setSelectedDays] = useState<RepeatDay[]>([]);

  const handleSelectDays = (day: RepeatDay) => {
    setSelectedDays((prev) => (prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]));
  };

  const resetSelectedDays = () => {
    setSelectedDays([]);
  };

  return {
    handleSelectDays,
    selectedDays,
    resetSelectedDays,
  };
};

export default useSelectedDays;
