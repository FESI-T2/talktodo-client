export interface KakaoLoginResponse {
  access_token: string;
}

export interface TempAccessTokenResponse {
  code: string;
  isSuccess: boolean;
  message: string;
  result: {
    accessToken: string;
    refreshToken: string;
  };
}
