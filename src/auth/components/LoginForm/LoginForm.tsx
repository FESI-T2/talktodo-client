'use client';

import { login } from '@/app/actions/auth/service';

import { setCurrentLogin } from '@/auth/utils/currentLogin';
import { useToast } from '@/shared/hooks/useToast';

import { LoginOption } from '../../types';
import AuthButton from '../AuthButton/AuthButton';
const LoginForm = () => {
  const { openToast } = useToast();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const variant = e.currentTarget.getAttribute('data-variant') as LoginOption;
    if (e.currentTarget.type === 'button') {
      openToast('개발 중인 로그인 기능입니다.');
    } else {
      setCurrentLogin(variant);
    }
  };

  return (
    <form className='flex flex-col gap-3 justify-center items-center w-full pt-[clamp(122px,15vh,185px)] pb-6' action={login}>
      <AuthButton key={'kakao'} variant={'kakao'} type='submit' onClick={handleClick} />
      <AuthButton key={'naver'} variant={'naver'} type='button' onClick={handleClick} />
      <AuthButton key={'google'} variant={'google'} type='button' onClick={handleClick} />
    </form>
  );
};

export default LoginForm;
