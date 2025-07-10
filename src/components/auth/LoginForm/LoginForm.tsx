'use client';
import { useRouter } from 'next/navigation';

import Button from '@/components/button/Button';

const LoginForm = () => {
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //    window.location.href = 'http://localhost/';

    router.push('/kakao-login');
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      <Button variant='kakao' type='submit'>
        로그인
      </Button>
    </form>
  );
};

export default LoginForm;
