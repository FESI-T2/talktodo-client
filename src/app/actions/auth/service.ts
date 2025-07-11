'use server';

import authApi from '@/lib/auth/authApi';
import { KakaoLoginResponse } from '@/types/auth/response/index';

export const login = async () => {
  const {
    data: { access_token },
  } = await authApi.kakaoLogin.call<KakaoLoginResponse>();

  return access_token;
};
