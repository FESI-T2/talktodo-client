import { useQuery } from '@tanstack/react-query';

import taskApi from '../lib/taskApi';
import { AllTaskResponse } from '../types/response';

const useGetTasksByGoal = (goalId: string) =>
  useQuery<AllTaskResponse>({
    queryKey: ['tasks-by-goal', goalId],
    queryFn: async () => {
      const response = await taskApi.getTasksByGoal(goalId);
      return response.data;
    },
    enabled: !!goalId,
  });

export default useGetTasksByGoal;
