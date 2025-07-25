/**
 * 목표(Goal)의 데이터 타입
 */
export interface Goal {
  id: string;
  content: string;
  priority: '중요' | '보통' | '낮음';
  doneCount: number;
  totalCount: number;
  createdAt: string;
  modifiedAt: string;
}
/**
 * @type {Goal[]} 샘플 목표(Goal) 데이터
 */
export const goals: Goal[] = [
  {
    id: 'goal_001',
    content: '자바스크립트로 웹 서비스 만들기',
    priority: '중요',
    doneCount: 0,
    totalCount: 2,
    createdAt: '2025-07-20T03:00:00.000Z',
    modifiedAt: '2025-07-21T04:00:00.000Z',
  },
  {
    id: 'goal_002',
    content: '매일 블로그 글 작성하기',
    priority: '보통',
    doneCount: 5,
    totalCount: 30,
    createdAt: '2025-07-10T08:15:00.000Z',
    modifiedAt: '2025-07-20T09:00:00.000Z',
  },
  {
    id: 'goal_003',
    content: '기초 영어 회화 마스터하기',
    priority: '낮음',
    doneCount: 10,
    totalCount: 20,
    createdAt: '2025-06-30T10:00:00.000Z',
    modifiedAt: '2025-07-22T12:00:00.000Z',
  },
];
