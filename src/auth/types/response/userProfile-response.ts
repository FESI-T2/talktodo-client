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
    data: {
      result: {
        socialName: string;
        nickname: string;
        email: string;
        profileImageUrl: string;
      };
    };
  };
};
