import APIBuilder from '@/shared/lib/api/apiBuilder';
import { GetAllGoal } from '@/shared/types/response/index';

const goalApi = {
  getAllGoal: () => APIBuilder.get('/goal').withCredentials(true).build().call<GetAllGoal>(),
};

export default goalApi;
