export interface Message {
  message: string;
  role: 'user' | 'assistant';
}

export interface Goal {
  title: string;
  count: number;
}
