'use client';

import { useState } from 'react';

export interface Goal {
  title: string;
  count: number;
}

export function useGoalSelect(defaultGoals: Goal[]) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const goals = defaultGoals.map((goal, idx) => ({
    ...goal,
    active: selectedIndex === idx,
  }));

  const onSelect = (idx: number) => {
    setSelectedIndex(idx);
  };

  return { goals, selectedIndex, onSelect };
}
