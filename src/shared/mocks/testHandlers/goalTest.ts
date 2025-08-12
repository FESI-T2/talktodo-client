import { http, HttpResponse } from 'msw';

import { Goal, GoalWithCount } from '@/goal/types/index';

import { ApiResponseGoalList, ApiResponseGoalWithCountList } from '@/goal/types/response';

import { MOCK_API_BASE_URL } from '../constants';

import { goals } from '../todoMockData/Goals';

// 응답 전용 간이 타입들
type GoalResponse = {
  isSuccess: boolean;
  code: string;
  message: string;
  result: Goal | undefined;
};

type GoalDetailResponse = {
  isSuccess: boolean;
  code: string;
  message: string;
  result: GoalWithCount | null;
};

type ApiResponseString = {
  isSuccess: boolean;
  code: string;
  message: string;
  result: string | null;
};

// 메모리 DB
let goalList: GoalWithCount[] = [...goals];

const goalTestHandlers = [
  // 전체 목표 조회
  http.get(`${MOCK_API_BASE_URL}/goal`, (): HttpResponse<ApiResponseGoalList> => {
    const result: Goal[] = goalList.map(({ goalId, goalName, createdAt, modifiedAt }) => ({
      goalId,
      goalName,
      createdAt,
      modifiedAt,
    }));

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
  http.get(`${MOCK_API_BASE_URL}/goal/with-task-count`, (): HttpResponse<ApiResponseGoalWithCountList> => {
    return HttpResponse.json(
      {
        isSuccess: true,
        code: '200',
        message: '목표 Task 카운트 조회 성공',
        result: goalList,
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
          result: null,
        },
        { status: 404 }
      );
    }

    return HttpResponse.json(
      {
        isSuccess: true,
        code: '200',
        message: '목표 상세 조회 성공',
        result: goal,
      },
      { status: 200 }
    );
  }),

  // 목표 생성
  http.post(`${MOCK_API_BASE_URL}/goal`, async ({ request }): Promise<HttpResponse<GoalResponse>> => {
    const { goalName } = (await request.json()) as { goalName?: string };

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
    const newGoal: GoalWithCount = {
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
          createdAt: newGoal.createdAt,
          modifiedAt: newGoal.modifiedAt,
        },
      },
      { status: 200 }
    );
  }),

  // 목표 수정
  http.put(`${MOCK_API_BASE_URL}/goal/:goalId`, async ({ params, request }): Promise<HttpResponse<GoalResponse>> => {
    const { goalId } = params as { goalId: string };
    const { goalName } = (await request.json()) as { goalName?: string };

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
          createdAt: target.createdAt,
          modifiedAt: target.modifiedAt,
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
