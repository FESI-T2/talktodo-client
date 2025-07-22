import clsx from 'clsx';

import { GoogleIcon, KakaoIcon, NaverIcon } from '@/auth/components/Icon/index';
import { LoginOption } from '@/auth/types';

interface SocialIconProps {
  variant: LoginOption;
}

const SocialIcon = ({ variant }: SocialIconProps) => {
  const ButtonIcon: Record<LoginOption, React.ReactNode> = {
    google: <GoogleIcon />,
    kakao: <KakaoIcon />,
    naver: <NaverIcon />,
  } as const;

  const ButtonStyle: Record<LoginOption, string> = {
    kakao: 'kakao-login',
    naver: 'naver-login',
    google: 'google-login',
  } as const;
  return (
    <div className={clsx(ButtonStyle[variant], 'w-10 h-10 flex items-center justify-center rounded-[8px] flex-none')}>
      {ButtonIcon[variant]}
    </div>
  );
};

export default SocialIcon;
