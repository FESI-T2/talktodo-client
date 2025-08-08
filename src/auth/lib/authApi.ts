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

export default authApi;
