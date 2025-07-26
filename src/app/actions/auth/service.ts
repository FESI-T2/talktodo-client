'use server';

import authApi from '@/auth/lib/authApi';
import { KakaoLoginResponse } from '@/auth/types/response';

export const login = async () => {
  const {
    data: { access_token },
  } = await authApi.kakaoLogin.call<KakaoLoginResponse>();

  return access_token;
};
