import { useMutation, useQueryClient } from '@tanstack/react-query';

import { tasksKeys } from '../queryKeys/tasksKeys';
import { deleteTask } from '../tasks';

export function useDeleteTask(taskDate?: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (taskId: string) => deleteTask(taskId),
    onSuccess: (_res, taskId) => {
      queryClient.removeQueries({
        queryKey: tasksKeys.byId(taskId).queryKey,
      });

      if (taskDate) {
        queryClient.invalidateQueries({
          queryKey: tasksKeys.byDate(taskDate).queryKey,
        });
      }
    },
  });
}
