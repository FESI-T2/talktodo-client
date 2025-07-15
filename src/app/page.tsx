'use client';

import AiPromptPage from '@/components/ai/AiPromptPage'; // 기존 AiPromptModal이었으면 이름도 변경 추천

export default function Home() {
  return (
    <div className='h-full'>
      <AiPromptPage />
    </div>
  );
}
