'use client';
import { useRouter } from 'next/navigation';

import AuthButton from '@/auth/components/Button/AuthButton';

const LoginForm = () => {
  const router = useRouter();

  const handleClick = (provider: 'kakao' | 'naver' | 'google') => {
    router.push(`/${provider}-login`);
  };

  return (
    <>
      <div className='flex flex-col gap-3 justify-center items-center w-full pt-[clamp(122px,15vh,185px)] pb-6'>
        <AuthButton variant='kakao' content='카카오 로그인' onClick={() => handleClick('kakao')} />
        <AuthButton variant='naver' content='네이버 로그인' onClick={() => handleClick('naver')} />
        <AuthButton variant='google' content='구글 로그인' onClick={() => handleClick('google')} />
      </div>
    </>
  );
};

export default LoginForm;
