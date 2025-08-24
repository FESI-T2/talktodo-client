import Image from 'next/image';
import { Suspense } from 'react';

import LoginForm from '@/auth/components/LoginForm/LoginForm';
import ToolTip from '@/auth/components/ToolTip/ToolTip';
import Icon from '@/shared/components/Icon/Icon';
import Loading from '@/shared/components/Loading/Loading';

const LoginPage = () => {
  return (
    <div className='min-h-screen gradient-bg w-full '>
      <div className='w-fit m-auto mb:pt-[258px] pt-[176px] '>
        <Icon name='title' className='mb-15 w-[200px] h-[50px]' />
        <Image src='/img/Character.png' alt='InCompleted Character' width={140} height={120} className='m-auto' />
      </div>
      <Suspense fallback={<Loading />}>
        <LoginForm />
        <ToolTip />
      </Suspense>
    </div>
  );
};

export default LoginPage;
