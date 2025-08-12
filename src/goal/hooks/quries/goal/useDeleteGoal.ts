import { useMutation } from '@tanstack/react-query';

import goalApi from '@/goal/lib/goalApi';
import { ApiResponseString } from '@/goal/types/response';

const useDeleteGoal = () =>
  useMutation<ApiResponseString, Error, string>({
    mutationFn: (goalId: string) => goalApi.deleteGoal(goalId).then((res) => res.data),
  });

export default useDeleteGoal;
