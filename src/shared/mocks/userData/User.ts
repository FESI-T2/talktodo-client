export interface MockUser {
  id: string;
  nickname: string;
  email: string;
  profileImageUrl: string;
  pushNotificationEnabled: boolean;
  createdAt: string;
  updatedAt: string;
}

export const mockUsers: MockUser[] = [
  {
    id: 'user-1',
    nickname: '테스트유저',
    email: 'test@kakao.com',
    profileImageUrl: 'file-123',
    pushNotificationEnabled: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: 'user-2',
    nickname: '김개발자',
    email: 'developer@kakao.com',
    profileImageUrl: '',
    pushNotificationEnabled: false,
    createdAt: '2024-01-02T00:00:00Z',
    updatedAt: '2024-01-02T00:00:00Z',
  },
];

export const getCurrentMockUser = () => mockUsers[0];

// 프로필 이미지 모킹 데이터
export const mockProfileImages = new Map([
  ['file-123', new Blob(['mock image data'], { type: 'image/jpeg' })],
  ['file-456', new Blob(['another mock image'], { type: 'image/png' })],
]);
