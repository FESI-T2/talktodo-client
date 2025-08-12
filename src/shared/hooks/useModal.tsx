'use client';
import React from 'react';

import GoalForm from '@/goal/components/GoalForm';
import CreatetTaskForm from '@/task/components/Form/CreatetTaskForm/CreatetTaskForm';
import FormResolver from '@/task/components/Form/FormResolver/FormResolver';

import { modalSubject } from '../components/Modal/ModalSubject';

const useModal = () => {
  const openFormResolver = () => {
    modalSubject.open(<FormResolver />, {
      onClose: () => console.log('기본 모달이 닫혔습니다.'),
      disableBackdropClick: true,
      closeButton: false,
    });
  };

  const openCreatetTaskForm = () => {
    modalSubject.open(<CreatetTaskForm />, {
      onClose: () => console.log('메모 모달이 닫혔습니다.'),
      disableBackdropClick: true,
      closeButton: false,
    });
  };

  const openAddGoalForm = () => {
    modalSubject.open(
      <GoalForm
        mode='add'
        onSubmit={(value) => {
          console.log('추가된 목표:', value);
          modalSubject.close();
        }}
      />,
      { onClose: () => console.log('목표 추가 모달 닫힘'), disableBackdropClick: true, closeButton: true }
    );
  };

  const openEditGoalForm = (initialValue: string) => {
    modalSubject.open(
      <GoalForm
        mode='edit'
        initialValue={initialValue}
        onSubmit={(value) => {
          console.log('수정된 목표:', value);
          modalSubject.close();
        }}
      />,
      {
        onClose: () => console.log('목표 수정 모달 닫힘'),
        disableBackdropClick: true,
        closeButton: true,
      }
    );
  };

  const closeModal = () => {
    modalSubject.close();
  };

  return {
    openCreatetTaskForm,
    openFormResolver,
    openAddGoalForm,
    openEditGoalForm,
    closeModal,
  };
};

export default useModal;
