import { GetAllTaskResponse, GetTaskResponse } from '@/task/types/reponse';

export const GetAllTaskData: GetAllTaskResponse = {
  isSuccess: true,
  code: 'COMMON200',
  message: '성공입니다.',
  result: {
    tasks: [
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
    ],
    totalCount: 6,
    doneCount: 0,
    undoneCount: 6,
  },
};

export const GetTaskData: GetTaskResponse = {
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
