import LoginForm from '@/auth/components/LoginForm/LoginForm';
import LoginLogo from '@/auth/components/LoginLogo/LoginLogo';
import ToolTip from '@/auth/components/ToolTip/ToolTip';

const LoginPage = () => {
  return (
    <div className='min-h-screen gradient-bg w-full '>
      <LoginLogo />
      <LoginForm />
      <ToolTip />
    </div>
  );
};

export default LoginPage;
