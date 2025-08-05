import { useSuspenseQuery } from '@tanstack/react-query';

import goalApi from '@/shared/lib/service/goalApi';

import queryKeys from './queryKey';

const useGetAllGoal = () => {
  return useSuspenseQuery({
    queryKey: queryKeys.goal.all.queryKey,
    queryFn: goalApi.getAllGoal,
  });
};

export default useGetAllGoal;
