// ModalExample.tsx
import React from 'react';

import { modalSubject } from './ModalSubject';

interface ModalExampleProps {
  title?: string;
  message?: string;
  disableBackdropClick?: boolean;
  className?: string;
  closeButton?: boolean;
}

const ModalExample: React.FC<ModalExampleProps> = ({
  title = '기본 모달 제목',
  message = '이것은 예시 모달 콘텐츠입니다.',
  disableBackdropClick = false,
  className,
  closeButton = true,
}) => {
  const openDefaultModal = () => {
    modalSubject.open(
      <div className='p-4'>
        <h2 className='text-xl font-bold mb-2'>{title}</h2>
        <p>{message}</p>
        <button className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600' onClick={() => modalSubject.close()}>
          모달 닫기
        </button>
      </div>,
      {
        onClose: () => console.log('기본 모달이 닫혔습니다.'),
        disableBackdropClick,
        className,
        closeButton,
      }
    );
  };

  const openCustomModal = () => {
    modalSubject.open(
      <div className='p-6 bg-purple-100 rounded-lg'>
        <h2 className='text-2xl font-extrabold text-purple-700 mb-4'>커스텀 모달</h2>
        <p className='text-purple-600'>이 모달은 커스텀 스타일과 동작을 가집니다.</p>
        <button
          className='mt-6 px-6 py-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-colors'
          onClick={() => modalSubject.close()}
        >
          확인
        </button>
      </div>,
      {
        onClose: () => console.log('커스텀 모달이 닫혔습니다.'),
        disableBackdropClick: true, // 이 모달은 배경 클릭으로 닫히지 않음
        className: 'max-w-lg', // 모달 너비 제한
        closeButton: false, // 이 모달은 닫기 버튼 없음
      }
    );
  };

  return (
    <div className='flex flex-col space-y-4'>
      <button
        className='px-6 py-3 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition-colors'
        onClick={openDefaultModal}
      >
        기본 모달 열기
      </button>
      <button
        className='px-6 py-3 bg-indigo-500 text-white rounded-md shadow-md hover:bg-indigo-600 transition-colors'
        onClick={openCustomModal}
      >
        커스텀 모달 열기
      </button>
    </div>
  );
};

export default ModalExample;
