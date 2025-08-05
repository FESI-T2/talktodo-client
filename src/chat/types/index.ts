export interface Message {
  message: string;
  role: 'user' | 'assistant';
  temp: boolean;
}

export interface Goal {
  goalId: string;
  goalName: string;
  createdAt: string;
  modifiedAt: string;
}
