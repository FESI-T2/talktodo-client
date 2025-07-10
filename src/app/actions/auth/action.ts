'use server';
import authApi from '@/lib/auth/authApi';
import { KakaoLoginResponse } from '@/types/auth/response/index';
import { setAccessToken } from '@/utils/token';

export const login = async () => {
  const {
    data: { access_token },
  } = await authApi.kakaoLogin.call<KakaoLoginResponse>();
  setAccessToken(access_token);
};
