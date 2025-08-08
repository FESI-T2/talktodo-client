import { useQuery } from '@tanstack/react-query';

import goalApi from '@/goal/lib/goalApi';

import { ApiResponseGoalDetail } from '@/goal/types/response';

import queryKeys from '../queryKey';

const useGetGoalDetail = (goalId: string) =>
  useQuery<ApiResponseGoalDetail>({
    queryKey: queryKeys.goal.detail(goalId).queryKey,
    queryFn: async () => {
      const response = await goalApi.getGoalDetail(goalId);
      return response.data;
    },
    enabled: !!goalId,
  });

export default useGetGoalDetail;
