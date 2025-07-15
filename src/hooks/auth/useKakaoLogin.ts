'use client';

import { useEffect } from 'react';

import { login } from '@/app/actions/auth/service';
import { setAccessToken } from '@/app/actions/auth/token';

import { useToast } from '../useToast';

const useKakaoLogin = () => {
  const Toast = useToast();

  useEffect(() => {
    const fetchLogin = async () => {
      try {
        const access_token = await login();
        if (access_token) setAccessToken(access_token);
      } catch {
        Toast.error('카카오 로그인에 실패했습니다');
      }
    };

    fetchLogin();
  }, [Toast]);

  return null;
};

export default useKakaoLogin;
