'use server';

import { redirect } from 'next/navigation';

import authApi from '@/auth/lib/authApi';

import { setAccessToken, setRefreshToken, removeToken } from './token';

export const login = async (formData: FormData) => {
  if (process.env.NODE_ENV === 'production') {
    window.location.href = process.env.NEXT_PUBLIC_API_BASE_URL + '/oauth2/authorization/kakao';

    try {
      const response = await authApi.reissue();
      const {
        data: { result },
      } = response;
      await setAccessToken(result);
      const callbackUrl = formData.get('callbackUrl') || '/dashboard';

      redirect(callbackUrl.toString());
    } catch {
      await removeToken();
    }
  }

  if (process.env.NODE_ENV === 'development') {
    const {
      data: {
        result: { accessToken, refreshToken },
      },
    } = await authApi.getTempAccessToken();

    await setAccessToken(accessToken);
    await setRefreshToken(refreshToken);

    const callbackUrl = formData.get('callbackUrl') || '/dashboard';

    redirect(callbackUrl.toString());
  }
};
