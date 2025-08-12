import { createQueryKeys } from '@lukemorales/query-key-factory';

export const fileKeys = createQueryKeys('file', {
  all: null,
  lists: () => ['list'],
  list: (filters: string) => [filters],
  details: () => ['detail'],
  detail: (id: string) => [id],
});
