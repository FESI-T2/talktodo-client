'use client';

import { useEffect } from 'react';

import { login } from '@/app/actions/auth/service';
import { setAccessToken } from '@/app/actions/auth/token';
const KakaoLoginPage = () => {
  // 카카오 로그인 herf를 어디로 보낼지 모르겠어서 임의로 설정, 차후에 시안 나오면 수정 필요
  useEffect(() => {
    const fetchLogin = async () => {
      const access_token = await login();
      if (access_token) setAccessToken(access_token);
    };

    fetchLogin();
  }, []);

  return <div>카카오 로그인 중...</div>;
};

export default KakaoLoginPage;
