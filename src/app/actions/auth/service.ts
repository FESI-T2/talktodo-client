'use server';

import authApi from '@/lib/auth/authApi';
import { KakaoLoginResponse } from '@/shared/types/auth/response';

export const login = async () => {
  const {
    data: { access_token },
  } = await authApi.kakaoLogin.call<KakaoLoginResponse>();

  return access_token;
};
