import React from 'react';

import MemoForm from '@/task/components/MemoForm/MemoForm';
import TaskForm from '@/task/components/TaskForm/TaskForm';

import { modalSubject } from '../components/modal/ModalSubject';

const useModal = () => {
  const openTaskForm = () => {
    modalSubject.open(<TaskForm />, {
      onClose: () => console.log('기본 모달이 닫혔습니다.'),
      disableBackdropClick: true,
      closeButton: false,
    });
  };

  const openMemoForm = () => {
    modalSubject.open(<MemoForm />, {
      onClose: () => console.log('메모 모달이 닫혔습니다.'),
      disableBackdropClick: true,
      closeButton: false,
    });
  };

  const closeModal = () => {
    modalSubject.close();
  };

  return {
    openTaskForm,
    openMemoForm,
    closeModal,
  };
};

export default useModal;
