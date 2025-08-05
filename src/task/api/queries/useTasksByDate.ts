import { useQuery } from '@tanstack/react-query';

import { tasksKeys } from '../queryKeys/tasksKeys';
import { fetchTasksByDate } from '../tasks';

export function useTasksByDate(date: string) {
  return useQuery({
    queryKey: tasksKeys.byDate(date).queryKey,
    queryFn: () => fetchTasksByDate(date),
    enabled: !!date,
    staleTime: 1000 * 60 * 3,
  });
}
