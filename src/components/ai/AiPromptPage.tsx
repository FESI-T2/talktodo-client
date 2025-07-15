'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { AiPromptMessage } from '@/types/aiPromptMessage';

import GoalSelector from './GoalSelector';
import InputBar from './InputBar';
import MessageList from './MessageList';
import BackIcon from '../ui/icons/BackIcon';

type Mode = 'new' | 'existing';

export default function AiPromptPage() {
  const router = useRouter();

  const [mode, setMode] = useState<Mode>('existing');
  const [selectedGoalIdx, setSelectedGoalIdx] = useState<number | null>(null);
  const [messages, setMessages] = useState<AiPromptMessage[]>([{ id: '1', sender: 'ai', content: '무슨 일을 도와드릴까요?' }]);

  const isInitial = messages.length === 1;

  return (
    <div className='h-screen w-screen bg-white flex items-center justify-center'>
      <div className='w-full max-w-6xl h-full flex flex-col bg-white'>
        {/* 백 버튼 */}
        <div className='p-4'>
          <button onClick={() => router.back()} className='flex items-center gap-1 text-sm text-gray-600 hover:text-black transition'>
            <BackIcon className='w-5 h-5' />
          </button>
        </div>

        {/* 메인 영역 */}
        <div className='flex-1 overflow-y-auto'>
          {mode === 'new' ? (
            isInitial ? (
              <div className='h-full flex flex-col items-center justify-center text-center px-4'>
                <div className='w-24 h-24 bg-gray-200 rounded-full mb-6' />
                <h2 className='text-xl font-semibold mb-2 text-gray-800'>일정을 말하면 체계적으로 정리해드릴게요!</h2>
                <p className='text-sm text-gray-500'>예: 7월 15일에 헬스장 가기 추가해줘</p>
              </div>
            ) : (
              <MessageList messages={messages} />
            )
          ) : isInitial ? (
            <GoalSelector selectedIdx={selectedGoalIdx} setSelectedIdx={setSelectedGoalIdx} onComplete={() => setMode('new')} />
          ) : (
            <MessageList messages={messages} />
          )}
        </div>

        {/* 입력창 */}
        <div className='px-4 pt-2 pb-4'>
          <InputBar
            onSend={(text) => {
              const now = Date.now();
              setMessages((prev) => [
                ...prev,
                { id: now.toString(), sender: 'user', content: text },
                { id: (now + 1).toString(), sender: 'ai', content: '(AI 응답 예시)' },
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
    </div>
  );
}
