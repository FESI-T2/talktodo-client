import React, { useRef } from 'react';

import AuthForm from '../AuthForm/AuthForm';

const ProfileForm = () => {
  const imageRef = useRef<HTMLInputElement>(null);

  return (
    <AuthForm>
      <AuthForm.Title title={'프로필 수정'} />
      <AuthForm.ProfileUpload imageRef={imageRef} />
      <AuthForm.UserInfo />
      <AuthForm.SocialInfo variant={'kakao'} />
      <AuthForm.Button />
    </AuthForm>
  );
};

export default ProfileForm;
