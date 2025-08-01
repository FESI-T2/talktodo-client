export const NOT_SELECT_GOAL = -1;

export const ASSISTANT_MESSAGES = Object.freeze({
  start: '말해주신 내용으로 목표를 정하고, 할 일을 정리해볼게요!',
  add: '더 자세한 내용을 알려주셔서 감사해요! 계속 정리해볼게요.',
} as const);

export const STEP_TASK = Object.freeze({
  selectTask: 1,
  chat: 2,
  result: 3,
} as const);
