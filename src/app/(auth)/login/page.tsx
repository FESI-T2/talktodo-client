import { Suspense } from 'react';

import LoginForm from '@/auth/components/LoginForm/LoginForm';
import LoginLogo from '@/auth/components/LoginLogo/LoginLogo';
import ToolTip from '@/auth/components/ToolTip/ToolTip';
import Loading from '@/shared/components/Loading/Loading';

const LoginPage = () => {
  return (
    <div className='min-h-screen gradient-bg w-full '>
      <LoginLogo />
      <Suspense fallback={<Loading />}>
        <LoginForm />
        <ToolTip />
      </Suspense>
    </div>
  );
};

export default LoginPage;
