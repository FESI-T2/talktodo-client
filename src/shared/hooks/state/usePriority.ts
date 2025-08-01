import { useState } from 'react';

import { Priority } from '@/shared/types/prioity';

const usePriority = () => {
  const [priority, setPriority] = useState<Priority>('중요');

  return {
    priority,
    setPriority,
  };
};

export default usePriority;
