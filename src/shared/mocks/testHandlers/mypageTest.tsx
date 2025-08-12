// src/shared/mocks/testHandlers/mypageTest.ts
import { http, HttpResponse } from 'msw';

import { getCurrentMockUser, mockUsers, mockProfileImages } from '../userData/User';

const mypageTestHandlers = [
  // 사용자 프로필 조회
  http.get('*/user/profile', () => {
    const user = getCurrentMockUser();

    return HttpResponse.json({
      status: 200,
      message: '사용자 프로필을 성공적으로 조회했습니다.',
      data: {
        result: user,
      },
    });
  }),

  // 사용자 프로필 수정
  http.put('*/user/profile', async ({ request }) => {
    const requestBody = (await request.json()) as {
      nickname: string;
      pushNotificationEnabled: boolean;
      profileImageUrl: string;
    };

    const user = getCurrentMockUser();

    // 모킹 데이터 업데이트
    const updatedUser = {
      ...user,
      ...requestBody,
      updatedAt: new Date().toISOString(),
    };

    // mockUsers 배열 업데이트 (실제로는 상태 관리가 필요)
    const userIndex = mockUsers.findIndex((u) => u.id === user.id);
    if (userIndex !== -1) {
      mockUsers[userIndex] = updatedUser;
    }

    return HttpResponse.json({
      status: 200,
      message: '사용자 프로필이 성공적으로 수정되었습니다.',
      data: {
        result: updatedUser,
      },
    });
  }),

  // 사용자 프로필 삭제 (회원탈퇴)
  http.delete('*/user/profile', () => {
    return HttpResponse.json({
      status: 200,
      message: '회원탈퇴가 성공적으로 처리되었습니다.',
      data: {
        result: null,
      },
    });
  }),

  // 파일 업로드
  http.post('*/file/upload', async ({ request }) => {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return HttpResponse.json(
        {
          status: 400,
          message: '파일이 전송되지 않았습니다.',
          data: null,
        },
        { status: 400 }
      );
    }

    // 모킹 파일 ID 생성
    const fileId = `file-${Date.now()}`;

    // 업로드된 파일을 모킹 저장소에 저장
    const blob = new Blob([await file.arrayBuffer()], { type: file.type });
    mockProfileImages.set(fileId, blob);

    return HttpResponse.json({
      status: 200,
      message: '파일이 성공적으로 업로드되었습니다.',
      data: {
        result: {
          fileId: fileId,
          fileName: file.name,
          fileSize: file.size,
          contentType: file.type,
          uploadedAt: new Date().toISOString(),
        },
      },
    });
  }),

  // 파일 조회 (이미지 뷰)
  http.get('*/file/view/:fileId', ({ params }) => {
    const { fileId } = params;

    const mockImage = mockProfileImages.get(fileId as string);

    if (!mockImage) {
      return HttpResponse.json(
        {
          status: 404,
          message: '파일을 찾을 수 없습니다.',
          data: null,
        },
        { status: 404 }
      );
    }
  }),

  // 파일 다운로드
  http.get('*/file/download/:fileId', ({ params }) => {
    const { fileId } = params;

    const mockImage = mockProfileImages.get(fileId as string);

    if (!mockImage) {
      return HttpResponse.json(
        {
          status: 404,
          message: '파일을 찾을 수 없습니다.',
          data: null,
        },
        { status: 404 }
      );
    }
  }),

  // 에러 테스트용 핸들러들
  http.get('*/user/profile/error', () => {
    return HttpResponse.json(
      {
        status: 500,
        message: '서버 오류가 발생했습니다.',
        data: null,
      },
      { status: 500 }
    );
  }),

  http.put('*/user/profile/error', () => {
    return HttpResponse.json(
      {
        status: 400,
        message: '잘못된 요청입니다.',
        data: null,
      },
      { status: 400 }
    );
  }),

  // 파일 업로드 에러
  http.post('*/file/upload/error', () => {
    return HttpResponse.json(
      {
        status: 413,
        message: '파일 크기가 너무 큽니다.',
        data: null,
      },
      { status: 413 }
    );
  }),
];

export default mypageTestHandlers;
