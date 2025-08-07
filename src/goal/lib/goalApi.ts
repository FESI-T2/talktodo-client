import { GetAllGoal } from '@/goal/types/response/index';
import APIBuilder from '@/shared/lib/api/apiBuilder';

const goalApi = {
  getAllGoal: () => APIBuilder.get('/v1/goal').withCredentials(true).build().call<GetAllGoal>(),
};

export default goalApi;
