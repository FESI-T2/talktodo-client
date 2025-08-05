export interface ChatHeaderProps {
  goal: string;
}

export type ChatMessageRole = 'user' | 'assistant';

export interface ChatMessageProps {
  message: string;
  role: ChatMessageRole;
}
