'use client';

import React from 'react';

import MypageForm from '@/auth/components/MypageForm/MypageForm';
import QueryProvider from '@/shared/provider/QueryProvider';

const UserTestPage = () => {
  return (
    <QueryProvider>
      <div className='container mx-auto p-4'>
        <div className='mb-8'>
          <h1 className='text-2xl font-bold mb-4'>마이페이지 테스트</h1>
          <div className='bg-yellow-100 border border-yellow-400 rounded p-4 mb-4'>
            <h2 className='font-semibold mb-2'>테스트 시나리오:</h2>
            <ul className='list-disc list-inside space-y-1 text-sm'>
              <li>기존 프로필 정보 로딩 확인</li>
              <li>프로필 이미지 업로드 및 미리보기</li>
              <li>닉네임 변경 감지 및 저장</li>
              <li>변경사항 알림 기능</li>
              <li>회원탈퇴 기능</li>
              <li>에러 처리 확인</li>
            </ul>
          </div>
        </div>

        <div className='border rounded-lg p-6 bg-white shadow-sm'>
          <MypageForm />
        </div>

        <div className='mt-8 space-y-4'>
          <h2 className='text-xl font-semibold'>테스트 버튼들</h2>

          <div className='grid grid-cols-2 gap-4'>
            <button
              onClick={() => {
                // 에러 상황 테스트를 위한 버튼
                fetch('/api/user/profile/error')
                  .then((res) => res.json())
                  .then((data) => console.log('Error test result:', data))
                  .catch((err) => console.error('Error test:', err));
              }}
              className='p-3 bg-red-500 text-white rounded hover:bg-red-600'
            >
              프로필 조회 에러 테스트
            </button>

            <button
              onClick={() => {
                // 파일 업로드 에러 테스트
                const formData = new FormData();
                formData.append('file', new File(['test'], 'test.jpg', { type: 'image/jpeg' }));

                fetch('/api/file/upload/error', {
                  method: 'POST',
                  body: formData,
                })
                  .then((res) => res.json())
                  .then((data) => console.log('File upload error test result:', data))
                  .catch((err) => console.error('File upload error test:', err));
              }}
              className='p-3 bg-orange-500 text-white rounded hover:bg-orange-600'
            >
              파일 업로드 에러 테스트
            </button>

            <button
              onClick={() => {
                // 현재 모킹 데이터 확인
                fetch('/api/user/profile')
                  .then((res) => res.json())
                  .then((data) => {
                    console.log('Current mock user data:', data);
                    alert(`현재 사용자: ${data.data.result.nickname} (${data.data.result.email})`);
                  });
              }}
              className='p-3 bg-blue-500 text-white rounded hover:bg-blue-600'
            >
              현재 모킹 데이터 확인
            </button>

            <button
              onClick={() => {
                // 프로필 업데이트 테스트
                fetch('/api/user/profile', {
                  method: 'PUT',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    nickname: '테스트변경' + Date.now(),
                    pushNotificationEnabled: true,
                    profileImageUrl: 'file-123',
                  }),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    console.log('Profile update result:', data);
                    alert('프로필이 업데이트되었습니다!');
                  });
              }}
              className='p-3 bg-green-500 text-white rounded hover:bg-green-600'
            >
              프로필 업데이트 테스트
            </button>
          </div>
        </div>

        <div className='mt-6 p-4 bg-gray-100 rounded'>
          <h3 className='font-semibold mb-2'>개발자 콘솔 확인사항:</h3>
          <ul className='text-sm space-y-1'>
            <li>• 네트워크 탭에서 MSW 요청/응답 확인</li>
            <li>• 콘솔에서 로그 메시지 확인</li>
            <li>• React Query DevTools에서 캐시 상태 확인</li>
          </ul>
        </div>
      </div>
    </QueryProvider>
  );
};

export default UserTestPage;
