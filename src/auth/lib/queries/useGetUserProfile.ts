import { useQuery } from '@tanstack/react-query';

import { getUserProfile } from '../authApi';
import { mypageKeys } from '../queryKeys/mypageKeys';

export const useGetUserProfile = () => {
  return useQuery({
    queryKey: mypageKeys.profile.queryKey,
    queryFn: getUserProfile,
  });
};
