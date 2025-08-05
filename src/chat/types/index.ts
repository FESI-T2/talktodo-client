import { Dispatch, SetStateAction } from 'react';
import { DateRange } from 'react-day-picker';

import { RepeatDay } from '@/shared/types/index';
import { Priority } from '@/shared/types/prioity';
import { Task } from '@/task/types';

export interface Message {
  message: string;
  role: 'user' | 'assistant';
  temp: boolean;
}

export type TaskSchedule = Pick<Task, 'content' | 'taskDate'>;

export interface ChatRoomAction {
  handleSetTaskSchedules: (task: TaskSchedule) => void;
}

export type TaskTableItem = Pick<Task, 'content' | 'priority' | 'taskDate' | 'goal'> & {
  id: string;
  date: DateRange;
  repeatEnabled: boolean;
  repeatDays: RepeatDay[];
};

export type handleUpdateTaskTableItem = (newTaskTableItems: TaskTableItem, updatedFields: Partial<TaskTableItem>) => void;

export interface TabItemProps {
  taskContent: string;
  date: DateRange;
  setDate: Dispatch<SetStateAction<DateRange>>;
  selectedDays: RepeatDay[];
  handleSelectDays: (day: RepeatDay) => void;
  isRepeatEnabled: boolean;
  toggleDay: () => void;
  priority: Priority;
  selectPriority: (priority: Priority) => void;
}
