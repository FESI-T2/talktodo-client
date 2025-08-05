import { useMutation, useQueryClient } from '@tanstack/react-query';

import { components } from '@/shared/api/generated';

import { tasksKeys } from '../queryKeys/tasksKeys';
import { toggleTaskDone } from '../tasks';

type TaskResponse = components['schemas']['TaskResponse'];

export function useToggleTaskDone(taskId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => toggleTaskDone(taskId),

    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: tasksKeys.byId(taskId).queryKey });

      const previous = queryClient.getQueryData<{ result?: TaskResponse }>(tasksKeys.byId(taskId).queryKey);

      if (previous?.result) {
        queryClient.setQueryData(tasksKeys.byId(taskId).queryKey, {
          ...previous,
          result: {
            ...previous.result,
            isDone: !previous.result.isDone,
          },
        });
      }

      return { previous };
    },

    onError: (_error, _vars, context) => {
      if (context?.previous) {
        queryClient.setQueryData(tasksKeys.byId(taskId).queryKey, context.previous);
      }
    },

    onSettled: (_res, _err, _vars, context) => {
      queryClient.invalidateQueries({ queryKey: tasksKeys.byId(taskId).queryKey });

      const taskDate = context?.previous?.result?.taskDate;
      if (taskDate) {
        queryClient.invalidateQueries({
          queryKey: tasksKeys.byDate(taskDate).queryKey,
        });
      }
    },
  });
}
