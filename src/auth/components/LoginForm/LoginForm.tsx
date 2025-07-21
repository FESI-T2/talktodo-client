'use client';

import AuthButton from '@/auth/components/Button/AuthButton/AuthButton';
import { setCurrentLogin } from '@/auth/utils/currentLogin';

import { LoginOption } from '../../types';

const LoginForm = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const variant = e.currentTarget.getAttribute('data-variant') as LoginOption;
    setCurrentLogin(variant);
  };

  const variants = ['kakao', 'naver', 'google'] as const;

  return (
    <div className='flex flex-col gap-3 justify-center items-center w-full pt-[clamp(122px,15vh,185px)] pb-6'>
      {variants.map((variant) => (
        <AuthButton key={variant} variant={variant} type='submit' onClick={handleClick} />
      ))}
    </div>
  );
};

export default LoginForm;
