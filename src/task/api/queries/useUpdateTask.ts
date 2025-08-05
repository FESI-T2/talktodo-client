import { useMutation, useQueryClient } from '@tanstack/react-query';

import { TaskRequest } from '@/task/types/request';

import { tasksKeys } from '../queryKeys/tasksKeys';
import { updateTask } from '../tasks';

export function useUpdateTask(taskId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: TaskRequest) => updateTask(taskId, data),
    onSuccess: (_res, variable) => {
      const taskDate = variable.taskDate;

      queryClient.invalidateQueries({
        queryKey: tasksKeys.byId(taskId).queryKey,
      });
      // 날짜별 query 초기화
      if (taskDate) {
        queryClient.invalidateQueries({
          queryKey: tasksKeys.byDate(taskDate).queryKey,
        });
      }
    },
  });
}
