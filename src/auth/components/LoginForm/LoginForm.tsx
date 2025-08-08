'use client';

import { useSearchParams } from 'next/navigation';

import { login } from '@/app/actions/auth/service';

import { setCurrentLogin } from '@/auth/utils/currentLogin';
import { useToast } from '@/shared/hooks/useToast';

import { LoginOption } from '../../types';
import AuthButton from '../AuthButton/AuthButton';
const LoginForm = () => {
  const searchParams = useSearchParams();
  const { openToast } = useToast();

  const callbackUrl = searchParams.get('callbackUrl') || '/';

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const variant = e.currentTarget.getAttribute('data-variant') as LoginOption;
    if (variant === 'naver' || variant === 'google') {
      openToast('개발 중인 로그인 기능입니다.');
    }

    setCurrentLogin(variant);
  };

  return (
    <form className='flex flex-col gap-3 justify-center items-center w-full pt-[clamp(122px,15vh,185px)] pb-6' action={login}>
      <input type='hidden' name='callbackUrl' value={callbackUrl} />
      <AuthButton key={'kakao'} variant={'kakao'} type='submit' onClick={handleClick} />
      <AuthButton key={'naver'} variant={'naver'} type='button' onClick={handleClick} />
      <AuthButton key={'google'} variant={'google'} type='button' onClick={handleClick} />
    </form>
  );
};

export default LoginForm;
