/**
 * 개별 할 일(task)의 데이터 타입
 */
export interface Task {
  taskId: string;
  userId: string;
  content: string;
  comment: string | null;
  priority: 'HIGHEST' | 'HIGH' | 'MEDIUM' | 'LOW' | 'LOWEST';
  isRepeat: boolean;
  isDone: boolean;
  taskDate: string;
  goal: string | null; //
  createdAt: string;
  modifiedAt: string;
}

/**
 * @type {Task[]} 샘플 할 일(Task) 데이터
 */
export const tasks: Task[] = [
  {
    taskId: 'task-1',
    userId: 'user-1',
    content: '운동하기',
    comment: '30분 이상 걷기',
    priority: 'HIGH',
    isRepeat: false,
    isDone: false,
    taskDate: '2025-07-15T08:00:00Z',
    goal: '건강 관리',
    createdAt: '2025-07-14T23:00:00Z',
    modifiedAt: '2025-07-14T23:00:00Z',
  },
  {
    taskId: 'task-2',
    userId: 'user-1',
    content: '책 읽기',
    comment: null,
    priority: 'MEDIUM',
    isRepeat: true,
    isDone: true,
    taskDate: '2025-07-14T18:00:00Z',
    goal: '자기계발',
    createdAt: '2025-07-13T10:00:00Z',
    modifiedAt: '2025-07-14T19:00:00Z',
  },
];
