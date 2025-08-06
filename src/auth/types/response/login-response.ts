import { ApiResponse } from '@/shared/types/api';

export interface KakaoLoginResponse {
  access_token: string;
}

export type TempAccessTokenResponse = ApiResponse<{
  accessToken: string;
  refreshToken: string;
}>;
