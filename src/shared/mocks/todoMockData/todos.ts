/**
 * 개별 할 일(task)의 데이터 타입
 */
export type RepeatDay = '월' | '화' | '수' | '목' | '금' | '토' | '일';

export interface Task {
  taskId: string;
  taskNo: number;
  content: string;
  priority: '중요' | '보통' | '낮음';
  taskDate: string;
  isDone: boolean;
  startTime: string;
  endTime: string;
  goal: string;
  createdAt: string;
  modifiedAt: string;
  repeatEnabled: boolean;
  repeatTypes: RepeatDay[];
}

/**
 * @type {Task[]} 샘플 할 일(Task) 데이터
 */
export const tasks: Task[] = [
  {
    taskId: 'a9b910fb-1760-47b0-8f62-fd014e80bf60',
    taskNo: 1,
    content: '매일 아침 산책하기',
    priority: '중요',
    taskDate: '2025-08-11',
    startTime: '06:30:00',
    endTime: '07:00:00',
    goal: '하루 30분 운동',
    isDone: false,
    createdAt: '2025-07-20T03:36:23.42592',
    modifiedAt: '2025-07-20T03:36:23.42592',
    repeatEnabled: true,
    repeatTypes: ['월', '화', '수', '목', '금', '토', '일'],
  },
  {
    taskId: 'cb2a7e13-a77b-46d4-a88f-2e549040488a',
    taskNo: 2,
    content: '매일 아침 산책하기',
    priority: '중요',
    taskDate: '2025-08-11',
    startTime: '06:30:00',
    endTime: '07:00:00',
    goal: '하루 30분 운동',
    isDone: false,
    createdAt: '2025-07-20T03:38:10.486713',
    modifiedAt: '2025-07-20T03:38:10.486713',
    repeatEnabled: false,
    repeatTypes: [],
  },
  {
    taskId: 'add5f43b-a9da-4df6-9b2b-fd5a053a80d5',
    taskNo: 5,
    content: '매일 아침 산책하기',
    priority: '보통',
    taskDate: '2025-08-11',
    startTime: '06:30:00',
    endTime: '07:00:00',
    goal: '하루 30분 운동',
    isDone: false,
    createdAt: '2025-07-20T04:28:14.586355',
    modifiedAt: '2025-07-20T04:28:14.586355',
    repeatEnabled: true,
    repeatTypes: ['화', '목'],
  },
  {
    taskId: '54dbd85d-28c4-4ebe-8e40-7da499d104de',
    taskNo: 6,
    content: '매일 아침 산책하기',
    priority: '보통',
    taskDate: '2025-08-11',
    startTime: '06:30:00',
    endTime: '07:00:00',
    goal: '하루 30분 운동',
    isDone: false,
    createdAt: '2025-07-20T04:28:15.822385',
    modifiedAt: '2025-07-20T04:28:15.822385',
    repeatEnabled: false,
    repeatTypes: [],
  },
  {
    taskId: 'f1c92c97-d4ec-42e6-9589-22f25d735879',
    taskNo: 3,
    content: '매일 아침 산책하기',
    priority: '낮음',
    taskDate: '2025-08-11',
    startTime: '06:30:00',
    endTime: '07:00:00',
    goal: '하루 30분 운동',
    isDone: false,
    createdAt: '2025-07-20T04:27:04.184086',
    modifiedAt: '2025-07-20T04:27:04.184086',
    repeatEnabled: true,
    repeatTypes: ['토', '일'],
  },
  {
    taskId: '3e13dec5-a3cb-4d48-9a67-b94686a44629',
    taskNo: 4,
    content: '매일 아침 산책하기',
    priority: '낮음',
    taskDate: '2025-08-11',
    startTime: '06:30:00',
    endTime: '07:00:00',
    goal: '하루 30분 운동',
    isDone: false,
    createdAt: '2025-07-20T04:27:06.647844',
    modifiedAt: '2025-07-20T04:27:06.647844',
    repeatEnabled: false,
    repeatTypes: [],
  },
];
