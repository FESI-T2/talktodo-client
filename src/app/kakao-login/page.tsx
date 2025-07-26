'use client';

import useKakaoLogin from '@/shared/hooks/auth/useKakaoLogin';

const KakaoLoginPage = () => {
  useKakaoLogin();
  return <div>카카오 로그인 중...</div>;
};

export default KakaoLoginPage;
