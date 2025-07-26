'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

import { validation, FormData } from '@/auth/utils/validation';

import AuthForm from '../AuthForm/AuthForm';

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
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <AuthForm.Title title={'회원 가입'} />
        <AuthForm.ProfileUpload imageRef={imageRef} />
        <AuthForm.UserInfo {...register('nickname')} />
        <AuthForm.SocialInfo variant={'kakao'} {...register('email')} />
        <AuthForm.Button />
      </AuthForm>
    </div>
  );
};

export default RegisterForm;
