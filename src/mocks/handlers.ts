import { mockTestHandlers, mutationTestHandlers, errorTestHandlers } from './testHandlers/index';

export const handlers = [...mockTestHandlers, ...mutationTestHandlers, ...errorTestHandlers];
