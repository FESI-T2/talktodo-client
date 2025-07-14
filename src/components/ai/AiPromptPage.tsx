'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { AiPromptMessage } from '@/types/aiPromptMessage';

import InputBar from './InputBar';
import MessageList from './MessageList';
import BackIcon from '../ui/icons/BackIcon';

export default function AiPromptPage() {
  const router = useRouter();
  const [messages, setMessages] = useState<AiPromptMessage[]>([{ id: '1', sender: 'ai', content: '무슨 일을 도와드릴까요?' }]);

  return (
    <div className='h-screen mx-auto h-full flex flex-col rounded-lg bg-white'>
      {/* 상단 백 버튼 */}
      <div className='p-4 border-b border-gray-200'>
        <button onClick={() => router.back()} className='flex items-center gap-1 text-sm text-gray-600 hover:text-black transition'>
          <BackIcon className='w-5 h-5' />
        </button>
      </div>

      {/* 메시지 영역 */}
      <div className='flex-1 border-b border-gray-200 overflow-y-auto'>
        <MessageList messages={messages} />
      </div>

      {/* 입력창 영역 */}
      <div className='border-t border-gray-200 px-4 pt-2'>
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
    </div>
  );
}
