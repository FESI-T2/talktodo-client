import { createQueryKeys } from '@lukemorales/query-key-factory';

export const mypageKeys = createQueryKeys('mypage', {
  all: null,
  profile: null,
  profileById: (userId: string) => [userId],
});
