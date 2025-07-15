'use client';

import { useState } from 'react';

interface GoalSelectorProps {
  selectedIdx: number | null;
  setSelectedIdx: (idx: number) => void;
  onComplete: () => void;
}

export default function GoalSelectPanel({ onComplete }: GoalSelectorProps) {
  const goals = [
    '자바스크립트로 웹 서비스 만들기',
    '디자인 시스템 강의 듣기',
    '자바스크립트로 웹 서비스 만들기',
    '디자인 시스템 강의 듣기',
  ];

  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  return (
    <div className='w-full h-full flex flex-col items-center justify-center px-4 sm:px-[47px]'>
      <div className='w-full max-w-[658px] h-[551px] bg-gray-100 rounded-[20px] flex flex-col items-center p-8'>
        {/* 타이틀 */}
        <div className='w-full rounded-lg px-6 py-4 mb-[45px]'>
          <h2 className='text-xl font-semibold text-gray-800 text-start'>어떤 목표에 할 일을 추가하시겠어요?</h2>
        </div>

        {/* 목표 리스트 */}
        <div className='w-full rounded-lg p-4 text-gray-700 space-y-2'>
          {goals.map((item, idx) => (
            <div
              key={idx}
              role='button'
              tabIndex={0}
              onClick={() => setSelectedIdx(idx)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedIdx(idx);
                }
              }}
              className={`h-[44px] flex items-center px-3 cursor-pointer rounded-md
                text-[18px] font-medium leading-[20px] tracking-normal font-pretendard
                ${selectedIdx === idx ? 'bg-white' : 'bg-gray-100'}`}
            >
              · {item}
            </div>
          ))}
        </div>

        {/* 버튼 그룹 */}
        <div className='mt-auto w-full flex gap-4 justify-between'>
          <button className='flex-[0.42] bg-gray-200 hover:bg-gray-300 rounded-xl py-3 text-sm font-medium text-gray-800'>
            새로운 목표를 만들래요
          </button>
          <button
            className='flex-[0.58] bg-purple-600 hover:bg-purple-700 text-white rounded-xl py-3 text-sm font-medium'
            onClick={onComplete}
          >
            선택완료
          </button>
        </div>
      </div>
    </div>
  );
}
