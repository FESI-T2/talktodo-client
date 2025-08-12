'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';

import { useForm } from 'react-hook-form';

import Button from '@/shared/components/Button/Button';
import Form from '@/shared/components/Form/Form';

import useDate from '@/shared/hooks/state/useDate';
import usePriority from '@/shared/hooks/state/usePriority';
import useSelectedDays from '@/shared/hooks/state/useSelectedDays';
import { TaskFormData, taskValidation } from '@/task/utils/validation';

const CreatetTaskForm = () => {
  const { selectedDays, handleSelectDays } = useSelectedDays();
  const { priority, selectPriority } = usePriority();
  const { date, setDate } = useDate('range');

  const {
    register,
    handleSubmit,
    //   formState: { errors },
  } = useForm<TaskFormData>({
    resolver: zodResolver(taskValidation),
  });

  const onSubmit = (data: TaskFormData) => {
    console.log('data : ', {
      task: data,
      date: date,
      priority: priority,
      selectedDays: selectedDays,
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Header title='작업 모달 제목' goal='작업 목표 설명' />
      <Form.TaskField
        date={date}
        setDate={setDate}
        priority={priority}
        slectPriority={selectPriority}
        {...register('task')}
        selectedDays={selectedDays}
        handleSelectedDays={handleSelectDays}
      />
      <Button type='submit' variant='primary'>
        작업 생성
      </Button>
    </Form>
  );
};

export default CreatetTaskForm;
