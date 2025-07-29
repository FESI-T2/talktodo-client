<<<<<<<< HEAD:src/shared/components/Icons/FoldLeft/FoldLeft.tsx
const SvgIconFoldLeft = () => {
========
import React from 'react';

const FoldLeft = () => {
>>>>>>>> 3eea873 (feat: 새 아이콘 구성 요소 추가 및 기존 구성 요소 업데이트):src/shared/components/Icons/Fold/FoldLeft.tsx
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0_662_6036)'>
        <path
          d='M20.5731 12H2.42578M2.42578 12L5.42578 9M2.42578 12L5.42578 15'
          stroke='#BBB8C3'
          strokeWidth='2.33333'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path d='M20.572 5.85645H10.7148' stroke='#BBB8C3' strokeWidth='2.33333' strokeLinecap='round' strokeLinejoin='round' />
        <path d='M20.572 18H10.7148' stroke='#BBB8C3' strokeWidth='2.33333' strokeLinecap='round' strokeLinejoin='round' />
      </g>
      <defs>
        <clipPath id='clip0_662_6036'>
          <rect width='24' height='24' fill='white' transform='matrix(0 1 1 0 0 0)' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FoldLeft;
