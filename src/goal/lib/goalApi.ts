import { GetAllGoal } from '@/goal/types/response/index';
import APIBuilder from '@/shared/lib/api/apiBuilder';

const goalApi = {
  getAllGoal: () => APIBuilder.get('/goal').withCredentials(true).build().call<GetAllGoal>(),
};

export default goalApi;
