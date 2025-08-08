import { useQuery } from '@tanstack/react-query';

import goalApi from '@/goal/lib/goalApi';

import goalQueryKeys from '../queryKey';

const useGetGoalsWithTaskCount = () => {
  return useQuery({
    queryKey: goalQueryKeys.goal.withTaskCount.queryKey,
    queryFn: goalApi.getGoalsWithTaskCount,
  });
};

export default useGetGoalsWithTaskCount;
