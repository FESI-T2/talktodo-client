import goalTestHandlers from './testHandlers/goalTest';
import { mockTestHandlers, mutationTestHandlers, errorTestHandlers, tasksTestHandler } from './testHandlers/index';

export const handlers = [...mockTestHandlers, ...mutationTestHandlers, ...errorTestHandlers, ...tasksTestHandler, ...goalTestHandlers];
