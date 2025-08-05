'use client';

import authApi from '@/auth/lib/authApi';
import { TempAccessTokenResponse } from '@/auth/types/response/login-response';
import { setCurrentLogin } from '@/auth/utils/currentLogin';

import { LoginOption } from '../../types';
import AuthButton from '../AuthButton/AuthButton';

const LoginForm = () => {
  const isDevelopment = process.env.NEXT_PUBLIC_ENV === 'development';

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const variant = e.currentTarget.getAttribute('data-variant') as LoginOption;
    setCurrentLogin(variant);

    if (variant === 'accessToken' && isDevelopment) {
      try {
        const response = await authApi.getTempAccessToken.call();
        const { data } = response as { data: TempAccessTokenResponse };
        if (data.code === 'COMMON200') {
          localStorage.setItem('accessToken', data.result.accessToken);
        }
      } catch (error) {
        console.error('액세스 토큰 요청 실패:', error);
      }
    }
  };

  const variants = isDevelopment ? (['accessToken'] as const) : (['kakao', 'naver', 'google'] as const);

  return (
    <div className='flex flex-col gap-3 justify-center items-center w-full pt-[clamp(122px,15vh,185px)] pb-6'>
      {variants.map((variant) => (
        <AuthButton key={variant} variant={variant} type='submit' onClick={handleClick} />
      ))}
    </div>
  );
};

export default LoginForm;
