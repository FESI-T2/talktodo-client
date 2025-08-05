import { useState } from 'react';

import { Priority } from '@/shared/types/prioity';

const usePriority = (initPriority?: Priority) => {
  const [priority, setPriority] = useState<Priority>(initPriority || '중요');

  const selectPriority = (value: Priority) => {
    setPriority(value);
  };
  return {
    priority,
    selectPriority,
  };
};

export default usePriority;
