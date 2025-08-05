import { GetAllGoal } from '@/goal/types/response/index';
import APIBuilder from '@/shared/lib/api/apiBuilder';

const goalApi = {
  // 프록시용 url
  getAllGoal: () => APIBuilder.get('/api/goal').withCredentials(true).build().call<GetAllGoal>(),
};

export default goalApi;
