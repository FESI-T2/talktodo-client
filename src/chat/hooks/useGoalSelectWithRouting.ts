'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export interface Goal {
  title: string;
  count: number;
  id: string;
}

interface UseGoalSelectWithRoutingResult {
  goals: (Goal & { active: boolean })[];
  onSelect: (idx: number) => void;
  onClickComplete: () => void;
  onClickNewGoal: () => void;
  selectedIndex: number;
}

export function useGoalSelectWithRouting(defaultGoals: Goal[]): UseGoalSelectWithRoutingResult {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();

  const goals = defaultGoals.map((goal, idx) => ({
    ...goal,
    active: idx === selectedIndex,
  }));

  const onSelect = (idx: number) => {
    setSelectedIndex(idx);
    console.log('Selected goal title:', defaultGoals[idx].title);
  };

  const onClickComplete = () => {
    const selectedGoal = defaultGoals[selectedIndex];
    if (selectedGoal) {
      console.log(selectedGoal);
      router.push(`/chat/existingGoal/${selectedGoal.id}`);
    }
  };

  const onClickNewGoal = () => {
    router.push('/chat/newGoal');
  };

  return {
    goals,
    onSelect,
    onClickComplete,
    onClickNewGoal,
    selectedIndex,
  };
}
