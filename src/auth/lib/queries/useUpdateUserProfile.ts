import { useMutation, useQueryClient } from '@tanstack/react-query';

import { updateUserProfile } from '../authApi';
import { mypageKeys } from '../queryKeys/mypageKeys';

export const useUpdateUserProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateUserProfile,
    onSuccess: (data) => {
      // 캐시 무효화 및 재조회
      queryClient.invalidateQueries({
        queryKey: mypageKeys.profile.queryKey,
      });

      // 캐시 직접 업데이트 (옵션)
      queryClient.setQueryData(mypageKeys.profile.queryKey, data);
    },
    onError: (error) => {
      console.error('프로필 업데이트 실패:', error);
    },
  });
};
