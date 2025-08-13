import { GoalWithCount } from '@/goal/types';

export const goals: GoalWithCount[] = [
  {
    goalId: 'goal_001',
    goalName: '자바스크립트로 웹 서비스 만들기',
    completedTaskCount: 2,
    incompleteTaskCount: 3,
    createdAt: '2025-07-20T03:00:00.000Z',
    modifiedAt: '2025-07-21T04:00:00.000Z',
  },
  {
    goalId: 'goal_002',
    goalName: '매일 블로그 글 작성하기',
    completedTaskCount: 1,
    incompleteTaskCount: 2,
    createdAt: '2025-07-10T08:15:00.000Z',
    modifiedAt: '2025-07-20T09:00:00.000Z',
  },
  {
    goalId: 'goal_003',
    goalName: '기초 영어 회화 마스터하기',
    completedTaskCount: 2,
    incompleteTaskCount: 2,
    createdAt: '2025-06-30T10:00:00.000Z',
    modifiedAt: '2025-07-22T12:00:00.000Z',
  },
];
