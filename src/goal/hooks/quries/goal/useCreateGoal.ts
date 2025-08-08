import { useMutation } from '@tanstack/react-query';

import goalApi from '@/goal/lib/goalApi';

import { ApiResponseGoalResponse } from '@/goal/types';

const useCreateGoal = () =>
  useMutation<ApiResponseGoalResponse, Error, string>({
    mutationFn: (goalName: string) => goalApi.createGoal(goalName).then((res) => res.data),
  });

export default useCreateGoal;
