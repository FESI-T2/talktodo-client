import { createQueryKeys } from '@lukemorales/query-key-factory';

export const tasksKeys = createQueryKeys('task', {
  all: null,
  byId: (taskId: string) => [taskId],
  byDate: (date: string) => ['date', date],
});
