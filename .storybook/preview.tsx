import type { Preview } from '@storybook/nextjs-vite';

import '../src/shared/styles/globals.css';
import { StepProvider } from '../src/chat/provider/StepProvider';
import QueryProvider from '../src/shared/provider/QueryProvider';

jest.mock('next/navigation', () => {
  return {
    useRouter: () => ({
      push: jest.fn(),
      replace: jest.fn(),
      refresh: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn(),
    }),
    usePathname: () => '/',
    useSearchParams: () => new URLSearchParams(),
    useParams: () => ({}),
    useSelectedLayoutSegments: () => [],
    useSelectedLayoutSegment: () => null,
  };
});

import '../src/shared/styles/pretendard-font.css';
const preview: Preview = {
  decorators: [
    (Story) => (
      <QueryProvider>
        <StepProvider>
          <div style={{ fontFamily: 'Pretendard, Noto Sans KR, Arial, sans-serif' }}>
            <Story />
          </div>
        </StepProvider>
      </QueryProvider>
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
