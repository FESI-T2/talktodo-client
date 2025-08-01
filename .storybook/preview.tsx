import type { Preview } from '@storybook/nextjs-vite';

import '../src/shared/styles/globals.css';

import '../src/shared/styles/pretendard-font.css';

const preview: Preview = {
  decorators: [
    (Story) => (
      <div style={{ fontFamily: 'Pretendard, Noto Sans KR, Arial, sans-serif' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
};

export default preview;
