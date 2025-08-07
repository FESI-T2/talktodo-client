import { http, HttpResponse } from 'msw';

import { components } from '@/shared/api/generated';

import { MOCK_API_BASE_URL } from '../constants';
import { goals } from '../todoMockData/Goals';

// 타입 줄이기
type GoalWithTaskCount = typeof goals extends Array<infer T> ? T : never;
type GoalResponse = components['schemas']['ApiResponseGoalResponse'];
type GoalDetailResponse = components['schemas']['ApiResponseGoalDetailResponse'];
type GoalListResponse = components['schemas']['ApiResponseListGoalResponse'];
type GoalWithCountResponse = components['schemas']['ApiResponseListGoalWithTaskCountResponse'];
type ApiResponseString = components['schemas']['ApiResponseString'];

// 메모리 DB
let goalList: GoalWithTaskCount[] = [...goals];

const goalTestHandlers = [
  // 전체 목표 조회
  http.get(`${MOCK_API_BASE_URL}/goal`, (): HttpResponse<GoalListResponse> => {
    const result = goalList.map(({ goalId, goalName }) => ({ goalId, goalName }));
    return HttpResponse.json(
      {
        isSuccess: true,
        code: '200',
        message: '목표 전체 조회 성공',
        result,
      },
      { status: 200 }
    );
  }),

  // 목표별 완료/미완료 Task 건수 조회
  http.get(`${MOCK_API_BASE_URL}/goal/with-task-count`, (): HttpResponse<GoalWithCountResponse> => {
    const result = goalList.map(({ goalId, goalName, completedTaskCount, incompleteTaskCount }) => ({
      goalId,
      goalName,
      completedTaskCount,
      incompleteTaskCount,
    }));

    return HttpResponse.json(
      {
        isSuccess: true,
        code: '200',
        message: '목표 Task 카운트 조회 성공',
        result,
      },
      { status: 200 }
    );
  }),

  // 목표 상세 조회
  http.get(`${MOCK_API_BASE_URL}/goal/:goalId`, ({ params }): HttpResponse<GoalDetailResponse> => {
    const { goalId } = params as { goalId: string };
    const goal = goalList.find((g) => g.goalId === goalId);

    if (!goal) {
      return HttpResponse.json(
        {
          isSuccess: false,
          code: '404',
          message: '목표를 찾을 수 없습니다',
          result: undefined,
        },
        { status: 404 }
      );
    }

    return HttpResponse.json(
      {
        isSuccess: true,
        code: '200',
        message: '목표 상세 조회 성공',
        result: {
          goalId: goal.goalId,
          goalName: goal.goalName,
          createdAt: goal.createdAt,
          modifiedAt: goal.modifiedAt,
        },
      },
      { status: 200 }
    );
  }),

  // 목표 생성
  http.post(`${MOCK_API_BASE_URL}/goal`, async ({ request }): Promise<HttpResponse<GoalResponse>> => {
    const { goalName } = (await request.json()) as components['schemas']['GoalRequest'];

    if (!goalName || goalName.trim() === '') {
      return HttpResponse.json(
        {
          isSuccess: false,
          code: '400',
          message: 'goalName은 필수입니다.',
          result: undefined,
        },
        { status: 400 }
      );
    }

    const now = new Date().toISOString();
    const newGoal: GoalWithTaskCount = {
      goalId: `goal_${Date.now()}`,
      goalName,
      completedTaskCount: 0,
      incompleteTaskCount: 0,
      createdAt: now,
      modifiedAt: now,
    };

    goalList.push(newGoal);

    return HttpResponse.json(
      {
        isSuccess: true,
        code: '200',
        message: '목표 생성 성공',
        result: {
          goalId: newGoal.goalId,
          goalName: newGoal.goalName,
        },
      },
      { status: 200 }
    );
  }),

  // 목표 수정
  http.put(`${MOCK_API_BASE_URL}/goal/:goalId`, async ({ params, request }): Promise<HttpResponse<GoalResponse>> => {
    const { goalId } = params as { goalId: string };
    const { goalName } = (await request.json()) as components['schemas']['GoalRequest'];

    const target = goalList.find((g) => g.goalId === goalId);

    if (!target) {
      return HttpResponse.json(
        {
          isSuccess: false,
          code: '404',
          message: '목표 없음',
          result: undefined,
        },
        { status: 404 }
      );
    }

    if (!goalName || goalName.trim() === '') {
      return HttpResponse.json(
        {
          isSuccess: false,
          code: '400',
          message: 'goalName은 필수입니다.',
          result: undefined,
        },
        { status: 400 }
      );
    }

    target.goalName = goalName;
    target.modifiedAt = new Date().toISOString();

    return HttpResponse.json(
      {
        isSuccess: true,
        code: '200',
        message: '목표 수정 성공',
        result: {
          goalId: target.goalId,
          goalName: target.goalName,
        },
      },
      { status: 200 }
    );
  }),

  // 목표 삭제
  http.delete(`${MOCK_API_BASE_URL}/goal/:goalId`, ({ params }): HttpResponse<ApiResponseString> => {
    const { goalId } = params as { goalId: string };
    goalList = goalList.filter((g) => g.goalId !== goalId);

    return HttpResponse.json(
      {
        isSuccess: true,
        code: '200',
        message: '목표 삭제 성공',
        result: '삭제됨',
      },
      { status: 200 }
    );
  }),
];

export default goalTestHandlers;
