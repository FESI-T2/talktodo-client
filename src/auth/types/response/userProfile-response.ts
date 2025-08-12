export interface UserProfileResponse {
  isSuccess: boolean;
  code: string;
  result: {
    socialName: string;
    nickname: string;
    email: string;
    profileImageUrl: string;
  };
}

export type UserProfileResult = {
  data: {
    result: {
      socialName: string;
      nickname: string;
      email: string;
      profileImageUrl: string;
    };
  };
};
