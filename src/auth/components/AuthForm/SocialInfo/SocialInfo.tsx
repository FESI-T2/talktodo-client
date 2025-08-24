import { LoginOption } from '@/auth/types';
import Icon from '@/shared/components/Icon/Icon';

import Input from '@/shared/components/Input/Input';

interface SocialInfoProps extends React.HTMLAttributes<HTMLInputElement> {
  variant: LoginOption;
  disabled?: boolean;
  value?: string;
}

const SocialInfo = ({ variant, disabled, value, ...props }: SocialInfoProps) => {
  return (
    <div className='mb-10 '>
      <h2 className='font-body3-semibold mb-3'>{'이메일'}</h2>
      <div className='flex gap-2 items-center'>
        <Icon name={variant} className='w-10 h-10' />
        {/*임의의 데이터입니다.*/}
        <Input {...props} disabled={disabled} value={value} />
      </div>
    </div>
  );
};

export default SocialInfo;
