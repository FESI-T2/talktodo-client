import { useMutation } from '@tanstack/react-query';

import goalApi from '@/goal/lib/goalApi';
import { ApiResponseGoal } from '@/goal/types/response';

interface UpdateGoalParams {
  goalId: string;
  goalName: string;
}

const useUpdateGoal = () =>
  useMutation<ApiResponseGoal, Error, UpdateGoalParams>({
    mutationFn: ({ goalId, goalName }) => goalApi.updateGoal(goalId, goalName).then((res) => res.data),
  });

export default useUpdateGoal;
