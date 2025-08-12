import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteUserProfile } from '../authApi';
import { mypageKeys } from '../queryKeys/mypageKeys';

export const useDeleteUserProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteUserProfile,
    onSuccess: () => {
      // 모든 사용자 관련 캐시 삭제
      queryClient.removeQueries({
        queryKey: mypageKeys.all.queryKey,
      });

      // 전체 캐시 초기화
      queryClient.clear();
    },
    onError: (error) => {
      console.error('계정 삭제 실패:', error);
    },
  });
};
