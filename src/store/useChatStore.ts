import { v4 as uuid } from 'uuid';
import { create } from 'zustand';

// 메시지 타입
export type Message = {
  id: string;
  role: 'user' | 'ai';
  content: string;
};

// 상태 타입
type ChatState = {
  messages: Message[];
  sendMessage: (text: string) => void;
};

// Zustand 스토어 정의
export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  sendMessage: (text: string) => {
    const userMessage: Message = {
      id: uuid(),
      role: 'user',
      content: text,
    };

    const aiMessage: Message = {
      id: uuid(),
      role: 'ai',
      content: `AI 응답: "${text}" 에 대한 답변입니다.`,
    };

    // 유저 메시지 → AI 응답 자동 추가
    set((state) => ({
      messages: [...state.messages, userMessage, aiMessage],
    }));
  },
}));
