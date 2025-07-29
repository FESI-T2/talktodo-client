'use client';

import { useEffect } from 'react';

import { login } from '@/app/actions/auth/service';
import { setAccessToken } from '@/app/actions/auth/token';
import { useAlert } from '@/shared/hooks/useAlert';

const useKakaoLogin = () => {
  const { openAlert } = useAlert();

  useEffect(() => {
    const fetchLogin = async () => {
      try {
        const access_token = await login();
        if (access_token) setAccessToken(access_token);
      } catch {
        openAlert({ message: '카카오 로그인에 실패했습니다.' });
      }
    };

    fetchLogin();
  }, []);

  return null;
};

export default useKakaoLogin;
