import LoginLogo from '@/auth/components/LoginLogo/LoginLogo';
import LoginForm from '@/components/auth/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <div className='min-h-screen gradient-bg '>
      <LoginLogo />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
