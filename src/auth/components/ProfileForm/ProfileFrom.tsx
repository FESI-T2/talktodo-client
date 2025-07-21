import React from 'react';

import Button from '@/auth/components/Button/Button';
import { LoginOption } from '@/auth/types';

import ImageUpload from './ImageUpload/ImageUpload';
import Input from './Input/Input';
import SocialIcon from './SocialIcon/SocialIcon';

interface ProfileFromProps {
  children?: React.ReactNode;
}

const ProfileFrom = ({ children }: ProfileFromProps) => {
  return (
    <form className='max-w-[640px] w-[90%] h-[613px] rounded-[28px] bg-[var(--color-white)] pt-[56px] pr-[32px] pb-[40px] pl-[32px]'>
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

const imageUpload = () => {
  return <ImageUpload />;
};

interface InputProps {
  content: string;
}
const UserInfo = ({ content }: InputProps) => {
  return (
    <div className='mb-6'>
      <h2 className='font-body3-semibold mb-3'>{content}</h2>
      <Input />
    </div>
  );
};

interface SocialInfoProps {
  content: string;
  variant: LoginOption;
}

const SocialInfo = ({ content, variant }: SocialInfoProps) => {
  return (
    <div className='mb-10 '>
      <h2 className='font-body3-semibold mb-3'>{content}</h2>
      <div className='flex gap-2 items-center'>
        <SocialIcon variant={variant} />
        <Input />
      </div>
    </div>
  );
};

const ProfileButton = () => {
  return <Button variant='primary'>생성하기</Button>;
};

export default ProfileFrom;
ProfileFrom.displayName = 'ProfileFrom';
ProfileFrom.Title = Title;
ProfileFrom.ImageUpload = imageUpload;
ProfileFrom.Info = UserInfo;
ProfileFrom.SocialInfo = SocialInfo;
ProfileFrom.Button = ProfileButton;
