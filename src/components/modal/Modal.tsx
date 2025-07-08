// components/modal/Modal.tsx
import { clsx } from 'clsx';
import { X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

// Modal 컴포넌트의 props 인터페이스 정의
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  disableBackdropClick?: boolean;
  className?: string;
  closeButton?: boolean;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, disableBackdropClick = false, className, closeButton = true }) => {
  // 컴포넌트가 마운트되었는지 여부를 추적하여 createPortal 렌더링 조건 설정
  const [mounted, setMounted] = useState(false);

  // 컴포넌트 마운트 시 mounted 상태를 true로 설정
  useEffect(() => {
    setMounted(true);
    // 언마운트 시 cleanup 함수
    return () => setMounted(false);
  }, []);

  // 모달 열림/닫힘 상태에 따라 body 스크롤을 제어하고, Esc 키 이벤트를 처리
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden'; // 모달 열릴 때 body 스크롤 방지
      document.addEventListener('keydown', handleKeyDown); // Esc 키 이벤트 리스너 추가
    } else {
      document.body.style.overflow = 'unset'; // 모달 닫힐 때 body 스크롤 복원
    }

    // cleanup 함수: 컴포넌트 언마운트 또는 isOpen 변경 시 이벤트 리스너 제거
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]); // isOpen 또는 onClose가 변경될 때마다 이펙트 재실행

  // 컴포넌트가 마운트되지 않았거나 모달이 닫힌 상태면 아무것도 렌더링하지 않음
  if (!mounted || !isOpen) {
    return null;
  }

  // 배경 클릭 핸들러: disableBackdropClick이 false이고 배경을 직접 클릭했을 때만 onClose 호출
  const handleBackdropClick = (event: React.MouseEvent) => {
    if (!disableBackdropClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  // react-createPortal을 사용하여 모달을 document.body에 렌더링
  return createPortal(
    <div
      className={clsx(
        'fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50',
        'transition-opacity duration-300',
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
      onClick={handleBackdropClick}
      aria-hidden='true'
      // aria-modal='true'
      // role='dialog'
    >
      <div
        className={clsx(
          'relative bg-white rounded-lg shadow-xl p-6 transform transition-transform duration-300',
          isOpen ? 'scale-100' : 'scale-95',
          className
        )}
        onClick={(e) => e.stopPropagation()}
        aria-hidden='true'
      >
        {closeButton && (
          <button className='absolute top-4 right-4 text-gray-500 hover:text-gray-700' onClick={onClose} aria-label='Close modal'>
            <X size={24} /> {/* X 아이콘 */}
          </button>
        )}
        {children}
      </div>
    </div>,
    document.body // 모달을 렌더링할 DOM 노드 (document.body의 직계 자식으로 추가)
  );
};

export default Modal;
