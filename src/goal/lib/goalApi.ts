import { GetAllGoal } from '@/goal/types/response/index';
import APIBuilder from '@/shared/lib/api/apiBuilder';

const goalApi = {
  getAllGoal: () =>
    APIBuilder.get(process.env.NODE_ENV === 'development' ? '/api/goal' : '/goal')
      .withCredentials(true)
      .build()
      .call<GetAllGoal>(),
};

export default goalApi;
