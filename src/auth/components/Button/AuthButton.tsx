import clsx from 'clsx';

import { GoogleIcon, KakaoIcon, NaverIcon } from './Icon/index';

type CertificationButton = 'kakao' | 'google' | 'naver';

const ButtonIcon: Record<CertificationButton, React.ReactNode> = {
  google: <GoogleIcon />,
  kakao: <KakaoIcon />,
  naver: <NaverIcon />,
} as const;

const ButtonStyle: Record<CertificationButton, string> = {
  kakao: 'kakao-login',
  naver: 'naver-login',
  google: 'google-login',
} as const;

interface AuthButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: CertificationButton;
  content: string;
}

const AuthButton = ({ variant, content, ...props }: AuthButtonProps) => {
  return (
    <button
      {...props}
      className={clsx('rounded-xl py-3.5 px-4 flex w-[90%] h-12 items-center text-base max-w-[400px]', ButtonStyle[variant])}
    >
      {ButtonIcon[variant]}
      <span className='text-center w-full cursor-pointer'>{content}</span>
    </button>
  );
};

export default AuthButton;
