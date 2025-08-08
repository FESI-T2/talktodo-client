// @/goal/lib/goalApi.ts

import APIBuilder from '@/shared/lib/api/apiBuilder';

import {
  ApiResponseGoal,
  ApiResponseGoalDetail,
  ApiResponseGoalList,
  ApiResponseGoalWithCountList,
  ApiResponseString,
} from '../types/response';

const goalApi = {
  getAllGoal: () => APIBuilder.get('/goal').withCredentials(true).build().call<ApiResponseGoalList>(),

  getGoalsWithTaskCount: () => APIBuilder.get('/goal/with-task-count').withCredentials(true).build().call<ApiResponseGoalWithCountList>(),

  createGoal: (goalName: string) => APIBuilder.post('/goal', { goalName }).withCredentials(true).build().call<ApiResponseGoal>(),

  updateGoal: (goalId: string, goalName: string) =>
    APIBuilder.put(`/goal/${goalId}`, { goalName }).withCredentials(true).build().call<ApiResponseGoal>(),

  getGoalDetail: (goalId: string) => APIBuilder.get(`/goal/${goalId}`).withCredentials(true).build().call<ApiResponseGoalDetail>(),

  deleteGoal: (goalId: string) => APIBuilder.delete(`/goal/${goalId}`).withCredentials(true).build().call<ApiResponseString>(),
};

export default goalApi;
