import { createQueryKeyStore } from '@lukemorales/query-key-factory';

const queryKeys = createQueryKeyStore({
  goal: {
    all: null,
    withTaskCount: null,
    detail: (goalId: string) => [goalId],
  },
});

export default queryKeys;
