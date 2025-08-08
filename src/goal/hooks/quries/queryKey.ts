import { createQueryKeyStore } from '@lukemorales/query-key-factory';

const queryKeys = createQueryKeyStore({
  goal: {
    all: null,
    withTaskCount: null,
  },
});

export default queryKeys;
