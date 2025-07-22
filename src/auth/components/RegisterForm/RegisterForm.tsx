'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

import ProfileFrom from '@/auth/components/ProfileForm/ProfileFrom';
import { validation, FormData } from '@/auth/utils/validation';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    //   formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(validation),
  });

  const imageRef = useRef<HTMLInputElement>(null);

  const onSubmit = (data: FormData) => {
    const imageFile = imageRef.current?.files?.[0];
    console.log('data : ', {
      nickname: data.nickname,
      email: data.email,
      image: imageFile,
    });
  };

  return (
    <div className='w-full h-full flex items-center justify-center'>
      <ProfileFrom onSubmit={handleSubmit(onSubmit)}>
        <ProfileFrom.Title>{'회원 가입'}</ProfileFrom.Title>
        <ProfileFrom.ProfileUpload imageRef={imageRef} />
        <ProfileFrom.Info content={'이름'} {...register('nickname')} />
        <ProfileFrom.SocialInfo content={'이메일'} variant={'kakao'} {...register('email')} />
        <ProfileFrom.Button />
      </ProfileFrom>
    </div>
  );
};

export default RegisterForm;
