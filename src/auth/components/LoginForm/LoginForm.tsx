'use client';
import { useRouter } from 'next/navigation';

import AuthButton from '@/auth/components/Button/AuthButton';

const LoginForm = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push('/kakao-login');
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3 justify-center items-center w-full pt-[clamp(122px,15vh,185px)] pb-6'>
      <AuthButton variant='kakao' content='카카오 로그인' type='submit' />
      <AuthButton variant='naver' content='네이버 로그인' type='submit' />
      <AuthButton variant='google' content='구글 로그인' type='submit' />
    </form>
  );
};

export default LoginForm;
