// Fold.stories.tsx
import type { Meta, StoryObj } from '@storybook/nextjs';

import FoldLeft from './FoldLeft';
import FoldRight from './FoldRight';

const meta: Meta = {
  title: 'Icons/Fold',
  parameters: {
    docs: {
      description: {
        component: 'Fold 아이콘 묶음. 왼쪽/오른쪽으로 접는 SVG 아이콘입니다.',
      },
    },
  },
};

export default meta;

type LeftStory = StoryObj;
type RightStory = StoryObj;

export const Left: LeftStory = {
  render: () => <FoldLeft />,
  name: 'Fold Left',
  parameters: {
    docs: {
      description: {
        story: '왼쪽으로 접는 화살표 아이콘입니다.',
      },
    },
  },
};

export const Right: RightStory = {
  render: () => <FoldRight />,
  name: 'Fold Right',
  parameters: {
    docs: {
      description: {
        story: '오른쪽으로 접는 화살표 아이콘입니다.',
      },
    },
  },
};
