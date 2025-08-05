import { useMutation, useQueryClient } from '@tanstack/react-query';

import { TaskRequest } from '@/task/types/request';

import { tasksKeys } from '../queryKeys/tasksKeys';
import { createTask } from '../tasks';

export function useCreateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: TaskRequest) => createTask(data),
    onSuccess: (_res, variables) => {
      const taskDate = variables.taskDate;
      if (taskDate) {
        queryClient.invalidateQueries({
          queryKey: tasksKeys.byDate(taskDate).queryKey,
        });
      }
    },
  });
}
