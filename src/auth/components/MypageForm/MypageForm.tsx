'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useGetUserProfile, useUpdateUserProfile, useDeleteUserProfile } from '@/auth/lib/queries';
import { UserProfileResult } from '@/auth/types/response/userProfile-response';
import { validation, RegisterFormData } from '@/auth/utils/validation';
import { useAlert } from '@/shared/hooks/useAlert';
import { useToast } from '@/shared/hooks/useToast';
import { useFileUpload } from '@/shared/lib/queries';
import { useFileView } from '@/shared/lib/queries/useFileView';
import { FileUploadResponse } from '@/shared/types/file';

import AuthForm from '../AuthForm/AuthForm';

const MypageForm = () => {
  const router = useRouter();
  const { openAlert, closeAlert } = useAlert();
  const { openToast } = useToast();
  const [originalData, setOriginalData] = useState<RegisterFormData | null>(null);
  const [hasShownAlert, setHasShownAlert] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [shouldResetImage, setShouldResetImage] = useState(false);

  // React Query Hooks 사용
  const {
    data: userProfileData,
    // isLoading: isLoadingUserProfile,
    refetch: refetchUserProfile,
  } = useGetUserProfile() as {
    data: UserProfileResult | undefined;
    isLoading: boolean;
    refetch: () => void;
  };

  const updateProfileMutation = useUpdateUserProfile();
  const deleteUserProfileMutation = useDeleteUserProfile();
  const fileUploadMutation = useFileUpload();

  // 프로필 이미지 URL에서 fileId 추출
  const profileImageFileId = userProfileData?.data?.data?.result?.profileImageUrl;

  // 기존 프로필 이미지가 있으면 blob URL로 변환
  const { data: profileImageBlobUrl } = useFileView(profileImageFileId || '', !!profileImageFileId);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(validation),
    defaultValues: {
      nickname: '',
      email: '',
      profileImageUrl: '',
    },
  });

  const imageRef = useRef<HTMLInputElement>(null);

  // [x] watch를 사용하여 닉네임 변화 실시간 감지
  const watchedNickname = watch('nickname');

  // 파일 선택 핸들러
  const handleFileSelect = useCallback((file: File) => {
    console.log('파일 선택됨:', file);
    console.log('파일 이름:', file.name);
    console.log('파일 크기:', file.size);
    console.log('파일 타입:', file.type);
    setSelectedFile(file);
  }, []);

  // [x] 사용자 정보 수정 핸들러
  const handleModifyUserInfo = useCallback(async () => {
    // 프로필 업데이트 데이터 생성
    const createProfileUpdateData = async (formData: RegisterFormData) => {
      const updateData = {
        nickname: formData.nickname,
        pushNotificationEnabled: true,
        profileImageUrl: formData.profileImageUrl || '', // 기존 값 유지
      };

      // 파일 업로드 처리
      if (selectedFile) {
        console.log('파일 업로드 시작:', selectedFile);
        try {
          const uploadResponse = await fileUploadMutation.mutateAsync(selectedFile);
          console.log('업로드 응답 전체:', uploadResponse);

          // API 응답 구조에 맞춰 수정
          const responseData = uploadResponse.data as FileUploadResponse;
          console.log('응답 데이터:', responseData);

          // fileId를 프로필 이미지 URL로 사용하거나, 서버에서 제공하는 이미지 URL 형식에 맞춰 조정
          if (responseData?.result?.fileId) {
            updateData.profileImageUrl = responseData.result.fileId;
            console.log('프로필 이미지 URL 설정:', updateData.profileImageUrl);
          }
        } catch (uploadError) {
          console.error('파일 업로드 실패:', uploadError);
          throw new Error('파일 업로드에 실패했습니다.');
        }
      } else {
        console.log('선택된 파일이 없습니다.');
      }

      return updateData;
    };

    // 이미지 파일 초기화
    const clearImageFile = () => {
      if (imageRef.current) {
        imageRef.current.value = '';
      }
      setSelectedFile(null);
      setShouldResetImage(true);
      // 리셋 플래그를 즉시 다시 false로 설정
      setTimeout(() => setShouldResetImage(false), 0);
    };

    // 성공 토스트 메시지 표시
    const showSuccessToast = () => {
      openToast('사용자 정보가 성공적으로 업데이트되었습니다! 🎉');
    };

    // 에러 토스트 메시지 표시
    const showErrorToast = (message: string = '사용자 정보 업데이트에 실패했습니다.') => {
      openToast(message);
    };

    try {
      const currentFormData = getValues();
      const profileUpdateData = await createProfileUpdateData(currentFormData);

      console.log('Profile update data:', profileUpdateData);

      // API 호출
      await updateProfileMutation.mutateAsync(profileUpdateData);

      // 업데이트 성공 시 사용자 프로필 데이터 다시 가져오기
      await refetchUserProfile();

      clearImageFile();
      showSuccessToast();
    } catch (error) {
      console.error('Failed to update user info:', error);
      showErrorToast(error instanceof Error ? error.message : '사용자 정보 업데이트에 실패했습니다.');
    }
  }, [getValues, openToast, fileUploadMutation, updateProfileMutation, selectedFile, refetchUserProfile]);

  // [x] 폼에 초기값 설정 및 원본 데이터 저장
  useEffect(() => {
    if (userProfileData?.data?.data?.result) {
      const { nickname, email, profileImageUrl } = userProfileData.data.data.result;

      setValue('nickname', nickname);
      setValue('email', email);
      setValue('profileImageUrl', profileImageUrl);

      // 원본 데이터 저장 (변경사항 감지를 위해)
      setOriginalData({
        nickname,
        email,
        profileImageUrl,
      });
    }
  }, [userProfileData, setValue]);

  // [x] 닉네임과 파일 변화 감지 및 Alert 표시
  useEffect(() => {
    if (originalData && !hasShownAlert) {
      const hasNicknameChanged = watchedNickname !== originalData.nickname;
      const hasFileChanged = selectedFile !== null;

      if (hasNicknameChanged || hasFileChanged) {
        openAlert({
          message: '변경사항이 감지되었습니다. 저장하시겠습니까?',
          handleClick: () => {
            handleModifyUserInfo();
            setHasShownAlert(false);
            closeAlert();
          },
        });
        setHasShownAlert(true);
      }
    }

    // 원본 값으로 되돌아오면 Alert 상태 리셋 및 Alert 닫기
    if (originalData && hasShownAlert) {
      // NOTE: 프로필 url 받아오는 s3 열리면 수정 필요
      const isBackToOriginal = watchedNickname === originalData.nickname && selectedFile === null;

      if (isBackToOriginal) {
        setHasShownAlert(false);
        closeAlert(); // 폼 값이 초기값과 동일하면 Alert 닫기
      }
    }
  }, [watchedNickname, selectedFile, originalData, hasShownAlert, openAlert, handleModifyUserInfo, closeAlert]);

  // [x] 회원 탈퇴 핸들러
  const handleDeleteUserProfile = useCallback(async () => {
    try {
      console.log('회원 탈퇴');
      const response = await deleteUserProfileMutation.mutateAsync();
      // API 응답에 따라 성공 여부 확인
      if (response.status === 200) {
        router.replace('/');
      }
    } catch (error) {
      console.error('Failed to delete user profile:', error);
    }
  }, [deleteUserProfileMutation, router]);

  // [x] 폼 제출 핸들러
  const onSubmit = () => {
    handleModifyUserInfo();
  };

  return (
    <div className='w-full h-full flex items-center justify-center'>
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <AuthForm.Title title={'마이페이지'} />
        <AuthForm.ProfileUpload
          imageRef={imageRef}
          currentImageUrl={profileImageBlobUrl}
          onFileSelect={handleFileSelect}
          resetToOriginal={shouldResetImage}
        />
        <AuthForm.UserInfo {...register('nickname')} />
        {errors.nickname && <p className='text-red-500 text-sm mt-1'>{errors.nickname.message}</p>}
        <AuthForm.SocialInfo variant={'kakao'} disabled={true} {...register('email')} />

        <button type='button' className='btn btn-primary' onClick={handleDeleteUserProfile}>
          회원탈퇴
        </button>
      </AuthForm>
    </div>
  );
};

export default MypageForm;
