import Input from '@/shared/components/Input/Input';

const UserInfo = ({ ...props }: React.HTMLAttributes<HTMLInputElement>) => {
  return (
    <div className='mb-6'>
      <h2 className='font-body3-semibold mb-3'>닉네임</h2>
      <Input {...props} placeholder='닉네임을 최대 10자 이내로 입력해주세요' />
    </div>
  );
};

export default UserInfo;
