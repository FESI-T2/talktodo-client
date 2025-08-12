import { TempAccessTokenResponse, ReissueResponse } from '@/auth/types/response';
import APIBuilder from '@/shared/lib/api/apiBuilder';

/*
 * 인증 관련 API를 정의합니다.
 * 각 API는 APIBuilder를 사용하여 생성됩니다.
 */

const authApi = {
  // 액세스 토큰 요청 API 추가
  getTempAccessToken: () =>
    APIBuilder.get('/temp/login')
      .baseUrl(process.env.NEXT_PUBLIC_API_BASE_URL || '')
      .build()
      .call<TempAccessTokenResponse>(),

  // 리이슈
  reissue: () => APIBuilder.post('/v1/auth/reissue', {}).withCredentials(true).build().call<ReissueResponse>(),
};

// 마이페이지
// 사용자 정보 조회 API
export const getUserProfile = () =>
  APIBuilder.get(process.env.NODE_ENV === 'development' ? '/api/user/profile' : '/user/profile')
    .withCredentials(true)
    .build()
    .call();

// 사용자 정보 업데이트 API
export const updateUserProfile = (data: { nickname: string; profileImageUrl: string; pushNotificationEnabled: boolean }) =>
  APIBuilder.put(process.env.NODE_ENV === 'development' ? '/api/user/profile' : '/user/profile', data)
    .withCredentials(true)
    .build()
    .call();

// 사용자 정보 삭제 API
export const deleteUserProfile = () =>
  APIBuilder.delete(process.env.NODE_ENV === 'development' ? '/api/user/profile' : '/user/profile')
    .withCredentials(true)
    .build()
    .call();

// 로그아웃 API
export const logout = () =>
  APIBuilder.post(process.env.NODE_ENV === 'development' ? '/api/user/logout' : '/user/logout', {})
    .withCredentials(true)
    .build()
    .call();

export default authApi;
