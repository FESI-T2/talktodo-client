import { useQuery } from '@tanstack/react-query';

import { tasksKeys } from '../queryKeys/tasksKeys';
import { fetchTask } from '../tasks';

export default function useTaskById(taskId: string) {
  return useQuery({
    queryKey: tasksKeys.byId(taskId).queryKey,
    queryFn: () => fetchTask(taskId),
    enabled: !!taskId,
    staleTime: 1000 * 60 * 5, // 어느정도의 시간이 적당한가?
  });
}
