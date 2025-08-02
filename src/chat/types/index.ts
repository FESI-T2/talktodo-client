export interface Message {
  message: string;
  role: 'user' | 'assistant';
  temp: boolean;
}

export interface Goal {
  title: string;
  count: number;
}
