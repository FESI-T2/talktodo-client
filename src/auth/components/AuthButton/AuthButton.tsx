import SocialIcon from '@/icons/SocialIcon/SocialIcon';
import { cn } from '@/shared/utils/cn';

import { LoginOption } from '../../types';

const ButtonStyle: Record<LoginOption, string> = {
  kakao: 'kakao',
  naver: 'naver',
  google: 'google',
} as const;

const ButtonContent: Record<LoginOption, string> = {
  kakao: '카카오 로그인',
  naver: '네이버 로그인',
  google: '구글 로그인',
} as const;

interface AuthButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: LoginOption;
}

const AuthButton = ({ variant, ...props }: AuthButtonProps) => {
  return (
    <button
      {...props}
      className={cn('rounded-xl py-3.5 px-4 flex w-[90%] h-12 items-center text-base max-w-[400px]', ButtonStyle[variant])}
      data-variant={variant}
    >
      {<SocialIcon variant={variant} classNaame='w-6 h-6' />}
      <span className='text-center w-full cursor-pointer'>{ButtonContent[variant]}</span>
    </button>
  );
};

export default AuthButton;
