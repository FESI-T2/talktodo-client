import { useMutation } from '@tanstack/react-query';

import goalApi from '@/goal/lib/goalApi';
import { ApiResponseGoal } from '@/goal/types/response';

const useCreateGoal = () =>
  useMutation<ApiResponseGoal, Error, string>({
    mutationFn: (goalName: string) => goalApi.createGoal(goalName).then((res) => res.data),
  });

export default useCreateGoal;
