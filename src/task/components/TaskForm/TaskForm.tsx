'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { DateRange } from 'react-day-picker';

import { useForm } from 'react-hook-form';

import Form from '@/shared/components/Form/Form';

import { PriorityType } from '@/shared/types/prioity';
import { TaskFormData, taskValidation } from '@/task/utils/validation';

const TaskForm = () => {
  const [date, setDate] = useState<DateRange>({
    from: new Date(2023, 9, 1),
    to: new Date(2023, 9, 31),
  });

  const [priorityType, setPriorityType] = useState<PriorityType>('중요');

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
      priority: priorityType,
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Header title='작업 모달 제목' goal='작업 목표 설명' />
      <Form.TaskField date={date} setDate={setDate} priority={priorityType} setPriority={setPriorityType} {...register('task')} />
      <Form.FormActions
        createAction={() => alert('작업 생성')}
        deleteAction={() => alert('작업 삭제')}
        editAction={() => alert('작업 수정')}
      />
    </Form>
  );
};

export default TaskForm;
