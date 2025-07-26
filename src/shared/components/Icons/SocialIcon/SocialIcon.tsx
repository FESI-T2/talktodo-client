import clsx from 'clsx';

import { LoginOption } from '@/auth/types';

interface SocialIconProps {
  variant: LoginOption;
}

const SocialIcon = ({ variant }: SocialIconProps) => {
  const ButtonIcon: Record<LoginOption, React.ReactNode> = {
    google: <img src='/icon/google.svg' alt='Google Icon' />,
    kakao: <img src='/icon/kakao.svg' alt='Kakao Icon' />,
    naver: <img src='/icon/naver.svg' alt='Naver Icon' />,
  } as const;

  const ButtonStyle: Record<LoginOption, string> = {
    kakao: 'kakao',
    naver: 'naver',
    google: 'google',
  } as const;
  return (
    <div className={clsx(ButtonStyle[variant], 'w-10 h-10 flex items-center justify-center rounded-[8px] flex-none')}>
      {ButtonIcon[variant]}
    </div>
  );
};

export default SocialIcon;
