import APIBuilder from '@/shared/lib/api/apiBuilder';

import {
  ApiResponseGoalDetailResponse,
  ApiResponseGoalResponse,
  ApiResponseListGoalResponse,
  ApiResponseListGoalWithTaskCountResponse,
  ApiResponseString,
} from '../types';

const goalApi = {
  getAllGoal: () => APIBuilder.get('/goal').withCredentials(true).build().call<ApiResponseListGoalResponse>(),

  getGoalsWithTaskCount: () =>
    APIBuilder.get('/goal/with-task-count').withCredentials(true).build().call<ApiResponseListGoalWithTaskCountResponse>(),

  createGoal: (goalName: string) => APIBuilder.post('/goal', { goalName }).withCredentials(true).build().call<ApiResponseGoalResponse>(),

  updateGoal: (goalId: string, goalName: string) =>
    APIBuilder.put(`/goal/${goalId}`, { goalName }).withCredentials(true).build().call<ApiResponseGoalResponse>(),

  getGoalDetail: (goalId: string) => APIBuilder.get(`/goal/${goalId}`).withCredentials(true).build().call<ApiResponseGoalDetailResponse>(),

  deleteGoal: (goalId: string) => APIBuilder.delete(`/goal/${goalId}`).withCredentials(true).build().call<ApiResponseString>(),
};

export default goalApi;
