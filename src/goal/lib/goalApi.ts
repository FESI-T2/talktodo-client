import { components } from '@/shared/api/generated';

import APIBuilder from '@/shared/lib/api/apiBuilder';

export type GoalWithTaskCountResponse = components['schemas']['ApiResponseListGoalWithTaskCountResponse'];

const goalApi = {
  getAllGoal: () => APIBuilder.get('/goal').withCredentials(true).build().call<components['schemas']['ApiResponseListGoalResponse']>(),

  getGoalsWithTaskCount: () => APIBuilder.get('/goal/with-task-count').withCredentials(true).build().call<GoalWithTaskCountResponse>(),
};

export default goalApi;
