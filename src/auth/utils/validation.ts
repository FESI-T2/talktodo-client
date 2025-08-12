import { z } from 'zod';

export const validation = z.object({
  email: z.email('이메일 형식이 아닙니다.'),
  nickname: z.string().max(10, '닉네임을 최대 10자 이내로 입력해주세요'),
  profileImageUrl: z.string().optional(),
});

export const userProfileSchema = z.object({
  email: z.email('이메일 형식이 아닙니다.').optional(),
  nickname: z.string().max(10, '닉네임을 최대 10자 이내로 입력해주세요'),
  profileImageUrl: z.string().optional(),
  pushNotificationEnabled: z.boolean().default(true),
});

export type RegisterFormData = z.infer<typeof validation>;
export type UserProfileFormData = z.infer<typeof userProfileSchema>;
