// @/goal/lib/goalApi.ts

import APIBuilder from '@/shared/lib/api/apiBuilder';
import { MOCK_API_BASE_URL } from '@/shared/mocks/constants';

import {
  ApiResponseGoal,
  ApiResponseGoalDetail,
  ApiResponseGoalList,
  ApiResponseGoalWithCountList,
  ApiResponseString,
} from '../types/response';

const goalApi = {
  getAllGoal: () => APIBuilder.get(`${MOCK_API_BASE_URL}/goal`).withCredentials(true).build().call<ApiResponseGoalList>(),

  getGoalsWithTaskCount: () =>
    APIBuilder.get('/v1/goal/with-task-count').withCredentials(true).build().call<ApiResponseGoalWithCountList>(),

  createGoal: (goalName: string) => APIBuilder.post('/v1/goal', { goalName }).withCredentials(true).build().call<ApiResponseGoal>(),

  updateGoal: (goalId: string, goalName: string) =>
    APIBuilder.put(`/v1/goal/${goalId}`, { goalName }).withCredentials(true).build().call<ApiResponseGoal>(),

  getGoalDetail: (goalId: string) => APIBuilder.get(`/v1/goal/${goalId}`).withCredentials(true).build().call<ApiResponseGoalDetail>(),

  deleteGoal: (goalId: string) => APIBuilder.delete(`/v1/goal/${goalId}`).withCredentials(true).build().call<ApiResponseString>(),
};

export default goalApi;
