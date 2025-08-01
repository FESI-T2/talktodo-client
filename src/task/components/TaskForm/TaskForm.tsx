'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';

import { useForm } from 'react-hook-form';

import Form from '@/shared/components/Form/Form';

import useDate from '@/shared/hooks/state/useDate';
import usePriority from '@/shared/hooks/state/usePriority';
import useSelectedDays from '@/shared/hooks/state/useSelectedDays';
import { TaskFormData, taskValidation } from '@/task/utils/validation';

const TaskForm = () => {
  const { selectedDays, handleSelectDays } = useSelectedDays();
  const { priority, setPriority } = usePriority();
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
        setPriority={setPriority}
        {...register('task')}
        selectedDays={selectedDays}
        handleSelectedDays={handleSelectDays}
      />
      <Form.FormActions
        createAction={() => alert('작업 생성')}
        deleteAction={() => alert('작업 삭제')}
        editAction={() => alert('작업 수정')}
      />
    </Form>
  );
};

export default TaskForm;
