import { Task } from '@/task/types';
import { AllTaskResponse, TaskResponse, DeleteTaskResponse } from '@/task/types/reponse';
export const MockTask: Task[] = [
  {
    taskId: 'a9b910fb-1760-47b0-8f62-fd014e80bf60',
    taskNo: 1,
    content: '매일 아침 산책하기',
    priority: '중요',
    taskDate: '2025-07-20',
    startTime: '06:30:00',
    endTime: '07:00:00',
    goal: '하루 30분 운동',
    isDone: false,
    createdAt: '2025-07-20T03:36:23.42592',
    modifiedAt: '2025-07-20T03:36:23.42592',
  },
  {
    taskId: 'cb2a7e13-a77b-46d4-a88f-2e549040488a',
    taskNo: 2,
    content: '매일 아침 산책하기',
    priority: '중요',
    taskDate: '2025-07-20',
    startTime: '06:30:00',
    endTime: '07:00:00',
    goal: '하루 30분 운동',
    isDone: false,
    createdAt: '2025-07-20T03:38:10.486713',
    modifiedAt: '2025-07-20T03:38:10.486713',
  },
  {
    taskId: 'add5f43b-a9da-4df6-9b2b-fd5a053a80d5',
    taskNo: 3,
    content: '매일 아침 산책하기',
    priority: '보통',
    taskDate: '2025-07-20',
    startTime: '06:30:00',
    endTime: '07:00:00',
    goal: '하루 30분 운동',
    isDone: false,
    createdAt: '2025-07-20T04:28:14.586355',
    modifiedAt: '2025-07-20T04:28:14.586355',
  },
  {
    taskId: '54dbd85d-28c4-4ebe-8e40-7da499d104de',
    taskNo: 4,
    content: '매일 아침 산책하기',
    priority: '보통',
    taskDate: '2025-07-20',
    startTime: '06:30:00',
    endTime: '07:00:00',
    goal: '하루 30분 운동',
    isDone: true,
    createdAt: '2025-07-20T04:28:15.822385',
    modifiedAt: '2025-07-20T04:28:15.822385',
  },
];

export const AllTaskData: AllTaskResponse = {
  isSuccess: true,
  code: 'COMMON200',
  message: '성공입니다.',
  result: {
    tasks: MockTask,
    totalCount: 6,
    doneCount: 0,
    undoneCount: 6,
  },
};

export const TaskData: TaskResponse = {
  isSuccess: true,
  code: 'COMMON200',
  message: '성공입니다.',
  result: {
    taskId: 'a9b910fb-1760-47b0-8f62-fd014e80bf60',
    taskNo: 1,
    content: '매일 아침 산책하기',
    priority: '중요',
    taskDate: '2025-07-20',
    startTime: '06:30:00',
    endTime: '07:00:00',
    goal: '하루 30분 운동',
    isDone: false,
    createdAt: '2025-07-20T03:36:23.42592',
    modifiedAt: '2025-07-20T03:36:23.42592',
  },
};

export const DeleteTaskData: DeleteTaskResponse = {
  isSuccess: true,
  code: 'COMMON200',
  message: '성공입니다.',
  result: '삭제에 성공 했습니다',
};
