'use client';

import { useState } from 'react';

import { AiPromptMessage } from '@/types/aiPromptMessage'; // 타입 정의 임포트

import InputBar from './InputBar';
import MessageList from './MessageList';

interface AiPromptModalProps {
  onClose: () => void;
}

export default function AiPromptModal({ onClose }: AiPromptModalProps) {
  const [messages, setMessages] = useState<AiPromptMessage[]>([{ id: '1', sender: 'ai', content: '무슨 일을 도와드릴까요?' }]);

  return (
    <div className='fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50'>
      <div className='bg-white rounded-lg w-[90vw] max-w-4xl h-[90vh] flex flex-col'>
        <div className='flex-1 border-b border-gray-200 overflow-y-auto'>
          <MessageList messages={messages} />
        </div>
        <div className=' border-gray-300 px-4 pt-2'>
          <InputBar
            onSend={(text) => {
              const now = Date.now();
              setMessages((prev) => [
                ...prev,
                { id: now.toString(), sender: 'user', content: text },
                {
                  id: (now + 1).toString(),
                  sender: 'ai',
                  content: '(AI 응답 예시)',
                },
                {
                  id: (now + 2).toString(),
                  sender: 'ai',
                  todos: [
                    { id: 'todo-1', title: '스터디 준비하기', date: '2025-07-12' },
                    { id: 'todo-2', title: '헬스장 가기', date: '2025-07-13' },
                    { id: 'todo-3', title: '프로젝트 회의', date: '2025-07-14' },
                    { id: 'todo-4', title: '디자인 피드백 반영', date: '2025-07-15' },
                    { id: 'todo-5', title: '서류 제출 마감', date: '2025-07-16' },
                    { id: 'todo-6', title: '운동화 사기', date: '2025-07-17' },
                    { id: 'todo-7', title: '친구 생일 선물 준비', date: '2025-07-18' },
                    { id: 'todo-8', title: '개발 블로그 작성', date: '2025-07-19' },
                    { id: 'todo-9', title: '요리 연습', date: '2025-07-20' },
                    { id: 'todo-10', title: '책 읽기', date: '2025-07-21' },
                  ],
                },
              ]);
            }}
          />
        </div>

        <button className='text-sm text-gray-400 p-2' onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  );
}
