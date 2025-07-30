import { Task } from '@/task/types';
import { AllTaskResponse, TaskResponse, DeleteTaskResponse } from '@/task/types/reponse';
// 완료된 태스크들
export const DoneTasks: Task[] = [
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

// 미완료된 태스크들
export const UndoneTasks: Task[] = [
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
];

// 모든 태스크 (기존 호환성 유지용)
export const MockTask: Task[] = [...DoneTasks, ...UndoneTasks];

export const AllTaskData: AllTaskResponse = {
  isSuccess: true,
  code: 'COMMON200',
  message: '성공입니다.',
  result: {
    doneTasks: DoneTasks,
    undoneTasks: UndoneTasks,
    totalCount: MockTask.length,
    doneCount: DoneTasks.length,
    undoneCount: UndoneTasks.length,
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
