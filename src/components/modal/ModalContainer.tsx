'use client';
// components/modal/ModalContainer.tsx
import React, { useEffect, useState } from 'react';

import Modal from './Modal';
import { modalSubject, ModalState } from './ModalSubject';

const ModalContainer: React.FC = () => {
  const [modalCurrentState, setModalCurrentState] = useState<ModalState>({
    isOpen: false,
    content: null,
    options: {},
  });

  // 컴포넌트 마운트 시 ModalSubject를 구독하고, 언마운트 시 구독 해지
  useEffect(() => {
    // modalSubject를 구독하고, 상태 변경 시 setModalCurrentState 호출
    const unsubscribe = modalSubject.subscribe((state: ModalState) => {
      setModalCurrentState(state);
    });

    // cleanup 함수: 컴포넌트 언마운트 시 구독 해지
    return () => unsubscribe();
  }, []);

  // 모달 닫기 핸들러
  const handleClose = () => {
    modalSubject.close();
  };

  return (
    <Modal
      isOpen={modalCurrentState.isOpen}
      onClose={handleClose}
      disableBackdropClick={modalCurrentState.options?.disableBackdropClick}
      className={modalCurrentState.options?.className}
    >
      {modalCurrentState.content} {/* ModalSubject에서 받은 콘텐츠 렌더링 */}
    </Modal>
  );
};

export default ModalContainer;
