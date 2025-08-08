import APIBuilder from '@/shared/lib/api/apiBuilder';

import { ApiResponseListGoalResponse, ApiResponseListGoalWithTaskCountResponse } from '../types';

const goalApi = {
  getAllGoal: () => APIBuilder.get('/v1/goal').withCredentials(true).build().call<GetAllGoal>(),

  getGoalsWithTaskCount: () =>
    APIBuilder.get('/goal/with-task-count').withCredentials(true).build().call<ApiResponseListGoalWithTaskCountResponse>(),
};

export default goalApi;
