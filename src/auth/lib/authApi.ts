import APIBuilder from '@/shared/lib/api/apiBuilder';

/*
 * 인증 관련 API를 정의합니다.
 * 각 API는 APIBuilder를 사용하여 생성됩니다.
 */

const authApi = {
  // 테스팅을 위해 API URL을 직접 지정
  kakaoLogin: APIBuilder.post('/user/kakao-login', {}).baseUrl('http://localhost:3001/api').build(),
};

export default authApi;
