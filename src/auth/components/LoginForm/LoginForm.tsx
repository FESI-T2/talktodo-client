'use client';

import AuthButton from '../AuthButton/AuthButton';

type Provider = 'kakao' | 'naver' | 'google';

const LoginForm = () => {
  const handleClick = (provider: Provider) => {
    const callback = `${window.location.origin}/login`;
    window.location.assign(`/api/auth/${provider}?callbackUrl=${encodeURIComponent(callback)}`);
  };

  return (
    <div className='flex flex-col gap-3 justify-center items-center pt-[clamp(122px,15vh,185px)] pb-6'>
      <AuthButton variant='kakao' type='button' onClick={() => handleClick('kakao')} />
      <AuthButton variant='naver' type='button' onClick={() => alert('개발 중 입니다.')} />
      <AuthButton variant='google' type='button' onClick={() => alert('개발 중 입니다.')} />
    </div>
  );
};

export default LoginForm;
