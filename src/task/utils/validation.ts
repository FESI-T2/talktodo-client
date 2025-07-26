import { z } from 'zod';

export const taskValidation = z.object({
  task: z.string().min(1, '할 일을 입력해주세요.'),
});

export const memoValidation = z.object({
  memo: z.string().min(1, '메모를 입력해주세요.'),
});

export type TaskFormData = z.infer<typeof taskValidation>;
export type MemoFormData = z.infer<typeof memoValidation>;
