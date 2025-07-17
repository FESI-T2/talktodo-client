import LoginForm from '@/auth/components/LoginForm/LoginForm';
import LoginLogo from '@/auth/components/LoginLogo/LoginLogo';

const LoginPage = () => {
  return (
    <div className='min-h-screen gradient-bg w-full '>
      <LoginLogo />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
