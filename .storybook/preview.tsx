import type { Preview } from '@storybook/nextjs';
import { AppRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';

import '../src/shared/styles/pretendard-font.css';
import '../src/shared/styles/globals.css';

import { StepProvider } from '../src/chat/provider/StepProvider';
import QueryProvider from '../src/shared/provider/QueryProvider';

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/profile',
        query: {
          user: 'santa',
        },
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
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
};

export default preview;
