'use client';

import useKakaoLogin from '@/auth/hooks/useKakaoLogin';

const KakaoLoginPage = () => {
  useKakaoLogin();
  return <div>카카오 로그인 중...</div>;
};

export default KakaoLoginPage;
