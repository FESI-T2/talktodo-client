'use server';

import authApi from '@/auth/lib/authApi';

import { setAccessToken } from './token';

export const login = async () => {
  const {
    data: {
      result: { accessToken },
    },
  } = await authApi.getTempAccessToken();
  await setAccessToken(accessToken);
};
