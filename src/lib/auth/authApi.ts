import APIBuilder from '@/lib/api/apiBuilder';

const authApi = {
  kakaoLogin: APIBuilder.post('/user/kakao-login', {}).build(),
};

export default authApi;
