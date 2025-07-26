import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';

import { useForm } from 'react-hook-form';

import Form from '@/shared/components/Form/Form';

import { MemoFormData, memoValidation } from '@/task/utils/validation';

const MemoForm = () => {
  const {
    register,
    handleSubmit,
    //   formState: { errors },
  } = useForm<MemoFormData>({
    resolver: zodResolver(memoValidation),
  });

  const onSubmit = (data: MemoFormData) => {
    console.log('data : ', {
      memo: data,
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Header title='모달 제목' goal='목표 설명' />
      <Form.MemoField day='2023-10-01' priority='중요' repeatInterval='매주' {...register('memo')} />
      <Form.FormActions
        createAction={() => alert('생성')}
        deleteAction={() => alert('삭제')}
        editAction={() => alert('수정')}
      ></Form.FormActions>
    </Form>
  );
};

export default MemoForm;
