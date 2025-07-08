import { setupServer } from 'msw/node';

import { handlers } from './handlers';

// 테스트 환경용 MSW 서버 설정
export const server = setupServer(...handlers);
