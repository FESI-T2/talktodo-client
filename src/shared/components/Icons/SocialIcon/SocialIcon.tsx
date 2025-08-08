import { LoginOption } from '@/auth/types';
import { cn } from '@/shared/utils/cn';

interface SocialIconProps {
  variant: LoginOption;
  classNaame?: string;
}

const SocialIcon = ({ variant, classNaame }: SocialIconProps) => {
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
    <div className={cn(ButtonStyle[variant], 'w-10 h-10 flex items-center justify-center rounded-[8px] flex-none', classNaame)}>
      {ButtonIcon[variant]}
    </div>
  );
};

export default SocialIcon;
