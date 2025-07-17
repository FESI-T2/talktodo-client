import Logo from '@/shared/components/Icons/Logo/Logo';
import TitleLogo from '@/shared/components/Icons/TilteLogo/TitleLogo';

const LoginLogo = () => {
  return (
    <div className='w-fit m-auto sm:pt-[258px] pt-[176px] '>
      <TitleLogo className='mb-8' />
      <Logo />
    </div>
  );
};

export default LoginLogo;
