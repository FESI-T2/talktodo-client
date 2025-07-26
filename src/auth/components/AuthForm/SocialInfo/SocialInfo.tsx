import { LoginOption } from '@/auth/types';
import SocialIcon from '@/shared/components/Icons/SocialIcon/SocialIcon';
import Input from '@/shared/components/Input/Input';

interface SocialInfoProps extends React.HTMLAttributes<HTMLInputElement> {
  variant: LoginOption;
}

const SocialInfo = ({ variant, ...props }: SocialInfoProps) => {
  return (
    <div className='mb-10 '>
      <h2 className='font-body3-semibold mb-3'>{'이메일'}</h2>
      <div className='flex gap-2 items-center'>
        <SocialIcon variant={variant} />
        {/*임의의 데이터입니다.*/}
        <Input {...props} disabled={true} value={'wookgod01@naver.com'} />
      </div>
    </div>
  );
};

export default SocialInfo;
