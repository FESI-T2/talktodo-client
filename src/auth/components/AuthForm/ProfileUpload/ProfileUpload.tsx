'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

import Icon from '@/shared/components/Icon/Icon';
import { cn } from '@/shared/utils/cn';

export interface ProfileUploadProps {
  className?: string;
  imageRef: React.RefObject<HTMLInputElement | null>;
  currentImageUrl?: string;
  onFileSelect?: (file: File) => void;
  resetToOriginal?: boolean; // 원본 이미지로 리셋하는 prop 추가
}

const ProfileUpload = ({ imageRef, className, currentImageUrl, onFileSelect, resetToOriginal }: ProfileUploadProps) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [hasNewFile, setHasNewFile] = useState(false);

  // 현재 이미지 URL이 변경될 때 preview 업데이트 (새 파일이 선택되지 않은 경우에만)
  useEffect(() => {
    if (!hasNewFile) {
      setPreview(currentImageUrl || null);
    }
  }, [currentImageUrl, hasNewFile]);

  // resetToOriginal prop이 변경될 때 원본으로 리셋
  useEffect(() => {
    if (resetToOriginal) {
      setHasNewFile(false);
      setPreview(currentImageUrl || null);
      if (imageRef.current) {
        imageRef.current.value = '';
      }
    }
  }, [resetToOriginal, currentImageUrl, imageRef]);

  const handleClick = () => {
    imageRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log('ProfileUpload - 파일 선택 이벤트:', e.target.files);
    console.log('ProfileUpload - 선택된 파일:', file);

    if (!file) {
      console.log('ProfileUpload - 파일이 선택되지 않음');
      // 파일이 선택되지 않으면 기존 이미지로 되돌아감
      setHasNewFile(false);
      setPreview(currentImageUrl || null);
      return;
    }

    // 새 파일이 선택되었음을 표시
    setHasNewFile(true);

    // 파일 선택 시 부모 컴포넌트에 알림
    console.log('ProfileUpload - 부모 컴포넌트에 파일 전달:', file);
    onFileSelect?.(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={cn('flex items-center justify-center flex-col relative mb-[44px]', className)}>
      <Image
        src={preview || '/img/Profile.png'}
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
        <Icon name='image' />
        <div className=' flex-1 '>편집하기</div>
      </button>
      <input ref={imageRef} type='file' name='file' accept='image/*' onChange={handleChange} className='hidden' />
    </div>
  );
};

export default ProfileUpload;
