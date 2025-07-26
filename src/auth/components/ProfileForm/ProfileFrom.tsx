import { LoginOption } from '@/auth/types';
import Button from '@/shared/components/Button/Button';
import SocialIcon from '@/shared/components/Icons/SocialIcon/SocialIcon';
import ImageUpload, { ImageUploadProps } from '@/shared/components/ImageUpload/ImageUpload';
import Input from '@/shared/components/Input/Input';

interface ProfileFromProps extends React.HTMLAttributes<HTMLFormElement> {
  children?: React.ReactNode;
}

const ProfileFrom = ({ children, ...props }: ProfileFromProps) => {
  return (
    <form
      {...props}
      className='max-w-[640px] w-[90%] h-[613px] rounded-[28px] bg-[var(--color-white)] pt-[56px] pr-[32px] pb-[40px] pl-[32px]'
    >
      {children}
    </form>
  );
};

interface TitleProps {
  children?: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return <h1 className='font-title2-bold mb-4'>{children}</h1>;
};

const ProfileUpload = ({ imageRef, className }: ImageUploadProps) => {
  return <ImageUpload imageRef={imageRef} className={className} />;
};

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  content: string;
}

const UserInfo = ({ content, ...props }: InputProps) => {
  return (
    <div className='mb-6'>
      <h2 className='font-body3-semibold mb-3'>{content}</h2>
      <Input {...props} placeholder='닉네임을 최대 10자 이내로 입력해주세요' />
    </div>
  );
};

interface SocialInfoProps extends InputProps {
  variant: LoginOption;
}

const SocialInfo = ({ content, variant, ...props }: SocialInfoProps) => {
  return (
    <div className='mb-10 '>
      <h2 className='font-body3-semibold mb-3'>{content}</h2>
      <div className='flex gap-2 items-center'>
        <SocialIcon variant={variant} />
        {/*임의의 데이터입니다.*/}
        <Input {...props} disabled={true} value={'wookgod01@naver.com'} />
      </div>
    </div>
  );
};

const ProfileButton = () => {
  return (
    <Button variant='primary' type='submit'>
      생성하기
    </Button>
  );
};

export default ProfileFrom;
ProfileFrom.displayName = 'ProfileFrom';
ProfileFrom.Title = Title;
ProfileFrom.ProfileUpload = ProfileUpload;
ProfileFrom.Info = UserInfo;
ProfileFrom.SocialInfo = SocialInfo;
ProfileFrom.Button = ProfileButton;
