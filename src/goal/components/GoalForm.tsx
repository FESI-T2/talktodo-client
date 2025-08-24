'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import Button from '@/shared/components/Button/Button';

import Icon from '@/shared/components/Icon/Icon';
import useModal from '@/shared/hooks/useModal';

import useCreateGoal from '../hooks/quries/goal/useCreateGoal';
import useUpdateGoal from '../hooks/quries/goal/useUpdateGoal';

const goalSchema = z.object({
  goalName: z.string().trim().min(1, '목표명을 입력해주세요.'),
});
type GoalFormSchema = z.infer<typeof goalSchema>;

interface GoalFormProps {
  mode: 'add' | 'edit';
  initialValue?: string;
  goalId?: string;
  onSubmit: (value: string) => void;
}

export default function GoalForm({ mode, initialValue = '', goalId, onSubmit }: GoalFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid, dirtyFields },
  } = useForm<GoalFormSchema>({
    resolver: zodResolver(goalSchema),
    mode: 'onChange',
    defaultValues: { goalName: initialValue },
  });

  useEffect(() => {
    if (mode === 'edit') {
      reset({ goalName: initialValue }, { keepDefaultValues: true, keepDirty: false });
    }
  }, [mode, initialValue, reset]);

  const createGoal = useCreateGoal();
  const updateGoal = useUpdateGoal();
  const { closeModal } = useModal();

  const goalName = watch('goalName') ?? '';
  const trimmed = goalName.trim();
  const initialTrimmed = useMemo(() => initialValue.trim(), [initialValue]);

  // 로딩 상태는 mutation 기준으로 판단 (RHF isSubmitting만으로는 부족할 수 있음)
  const isPending = createGoal.isPending || updateGoal.isPending;

  // 버튼 활성 조건
  const canSubmit =
    !isPending && isValid && (mode === 'add' ? trimmed.length > 0 : Boolean(dirtyFields.goalName) && trimmed !== initialTrimmed);

  const onValid = async (data: GoalFormSchema) => {
    const safeName = data.goalName.trim();
    try {
      if (mode === 'add') {
        const res = await createGoal.mutateAsync(safeName);
        onSubmit(res.result.goalName);
      } else if (mode === 'edit' && goalId) {
        const res = await updateGoal.mutateAsync({ goalId, goalName: safeName });
        onSubmit(res.result.goalName);
      }
    } catch (err) {
      console.error('목표 저장 실패', err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onValid)}
      className='inline-flex px-4 pt-4 pb-7 flex-col items-start gap-2.5 rounded-3xl bg-white max-w-[320px] w-full'
    >
      <div className='flex flex-col items-center gap-2 w-full'>
        <div className='w-full flex justify-end '>
          <button type='button' className='cursor-pointer' onClick={closeModal} aria-label='닫기'>
            <Icon name='close' className='w-6 h-6' />
          </button>
        </div>

        <div className='flex flex-col items-center gap-6 w-full px-5'>
          <div className='flex flex-col items-center gap-4 self-stretch'>
            <h2 className='font-title3-bold text-gray-900'>{mode === 'add' ? '목표 만들기' : '목표 수정하기'}</h2>

            <input
              type='text'
              placeholder='새로운 목표를 입력해주세요'
              {...register('goalName')}
              className='flex p-3 items-center self-stretch rounded-xl border border-gray-300
                         focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-white'
              aria-invalid={!!errors.goalName}
            />
            {errors.goalName && <p className='text-sm text-red-500 mt-1'>{errors.goalName.message}</p>}
          </div>

          <Button type='submit' variant='primary' disabled={!canSubmit}>
            {isPending ? '처리중…' : mode === 'add' ? '추가하기' : '수정하기'}
          </Button>
        </div>
      </div>
    </form>
  );
}
