import { useMutation } from '@tanstack/react-query';

import goalApi from '@/goal/lib/goalApi';

import { ApiResponseGoalResponse } from '@/goal/types';

interface UpdateGoalParams {
  goalId: string;
  goalName: string;
}

const useUpdateGoal = () =>
  useMutation<ApiResponseGoalResponse, Error, UpdateGoalParams>({
    mutationFn: ({ goalId, goalName }) => goalApi.updateGoal(goalId, goalName).then((res) => res.data),
  });

export default useUpdateGoal;
