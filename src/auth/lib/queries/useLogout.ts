import { useMutation, useQueryClient } from '@tanstack/react-query';

import { logout } from '../authApi';
import { mypageKeys } from '../queryKeys/mypageKeys';

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      // 모든 사용자 관련 캐시 삭제
      queryClient.removeQueries({
        queryKey: mypageKeys.all.queryKey,
      });

      // 전체 캐시 초기화 (선택사항)
      queryClient.clear();
    },
    onError: (error) => {
      console.error('로그아웃 실패:', error);
    },
  });
};
