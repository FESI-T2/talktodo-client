// src/types/aiPromptMessage.ts

export type Sender = 'user' | 'ai';

export type TodoItem = {
  id: string;
  title: string;
  date: string;
};

export type AiPromptMessage = {
  id: string;
  sender: Sender;
  content?: string;
  todos?: TodoItem[];
};
