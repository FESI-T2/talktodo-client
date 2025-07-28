import APIBuilder from '@/shared/lib/api/apiBuilder';
import { GetAllTaskResponse } from '@/task/types/reponse/index';
/*
 * 인증 관련 API를 정의합니다.
 * 각 API는 APIBuilder를 사용하여 생성됩니다.
 */

const taskApi = {
  // 테스팅을 위해 API URL을 직접 지정
  getAllTask: () => APIBuilder.get('/task').build().call<GetAllTaskResponse>(),
};

export default taskApi;
