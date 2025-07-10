import { login } from '../actions/auth/action';

const KakaoLoginPage = async () => {
  await login();

  return <div>여긴 카카오 로그인 페이지</div>;
};

export default KakaoLoginPage;
