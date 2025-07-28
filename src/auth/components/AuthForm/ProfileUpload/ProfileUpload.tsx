'use client';
import Image from 'next/image';
import React, { useState } from 'react';

import ImageIcon from '@/shared/components/Icons/ImageIcon/ImageIcon';
import { cn } from '@/shared/utils/cn';
export interface ProfileUploadProps {
  className?: string;
  imageRef: React.RefObject<HTMLInputElement | null>;
}

const ProfileUpload = ({ imageRef, className }: ProfileUploadProps) => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleClick = () => {
    imageRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={cn('flex items-center justify-center flex-col relative mb-[44px]', className)}>
      <Image
        src={preview || '/img/default.png'}
        alt='미리보기'
        width={140}
        height={140}
        className='rounded-full object-cover !h-[140px] font-body3-semibold '
      />
      <button
        onClick={handleClick}
        className='bottom-0 h-6 py-4 px-2 border bg-white rounded-full flex gap-1 items-center border-[var(--color-gray-300)] cursor-pointer absolute'
        type='button'
      >
        <ImageIcon />
        <div className=' flex-1 '>편집하기</div>
      </button>
      <input ref={imageRef} type='file' accept='image/*' onChange={handleChange} className='hidden' />
    </div>
  );
};

export default ProfileUpload;
