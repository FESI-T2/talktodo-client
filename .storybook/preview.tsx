import type { Preview } from '@storybook/nextjs-vite';
import { AppRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';

import '../src/shared/styles/globals.css';

import { StepProvider } from '../src/chat/provider/StepProvider';
import QueryProvider from '../src/shared/provider/QueryProvider';

import '../src/shared/styles/pretendard-font.css';

const preview: Preview = {
  decorators: [
    (Story) => {
      const mockedRouter = {
        push: () => {},
        replace: () => {},
        refresh: () => {},
        back: () => {},
        forward: () => {},
        prefetch: () => {},
        params: {},
        searchParams: new URLSearchParams(),
        pathname: '/',
      };

      return (
        <AppRouterContext.Provider value={mockedRouter}>
          <QueryProvider>
            <StepProvider>
              <div style={{ fontFamily: 'Pretendard, Noto Sans KR, Arial, sans-serif' }}>
                <Story />
              </div>
            </StepProvider>
          </QueryProvider>
        </AppRouterContext.Provider>
      );
    },
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
