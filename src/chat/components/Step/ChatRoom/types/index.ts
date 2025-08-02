export interface ChatHeaderProps {
  title: string;
  goToPrevStep: () => void;
}

export type ChatMessageRole = 'user' | 'assistant';

export interface ChatMessageProps {
  message: string;
  role: ChatMessageRole;
}
