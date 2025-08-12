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
    APIBuilder.get(`${MOCK_API_BASE_URL}/goal/with-task-count`).withCredentials(true).build().call<ApiResponseGoalWithCountList>(),

  createGoal: (goalName: string) =>
    APIBuilder.post(`${MOCK_API_BASE_URL}/goal`, { goalName }).withCredentials(true).build().call<ApiResponseGoal>(),

  updateGoal: (goalId: string, goalName: string) =>
    APIBuilder.put(`${MOCK_API_BASE_URL}/goal/${goalId}`, { goalName }).withCredentials(true).build().call<ApiResponseGoal>(),

  getGoalDetail: (goalId: string) =>
    APIBuilder.get(`${MOCK_API_BASE_URL}/goal/${goalId}`).withCredentials(true).build().call<ApiResponseGoalDetail>(),

  deleteGoal: (goalId: string) =>
    APIBuilder.delete(`${MOCK_API_BASE_URL}/goal/${goalId}`).withCredentials(true).build().call<ApiResponseString>(),
};

export default goalApi;
