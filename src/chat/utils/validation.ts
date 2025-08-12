import { z } from 'zod';

export const validation = z.object({
  message: z.string().min(1, '메시지를 입력해주세요'),
});

export type ChatFormData = z.infer<typeof validation>;
