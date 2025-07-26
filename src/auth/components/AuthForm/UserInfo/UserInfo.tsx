import { PLACEHOLDER_TEXT } from '@/auth/constants/text';
import Input from '@/shared/components/Input/Input';

const UserInfo = ({ ...props }: React.HTMLAttributes<HTMLInputElement>) => {
  return (
    <div className='mb-6'>
      <h2 className='font-body3-semibold mb-3'>닉네임</h2>
      <Input {...props} placeholder={PLACEHOLDER_TEXT} />
    </div>
  );
};

export default UserInfo;
