// components/icons/LayoutGrids.stories.tsx
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import LayoutGrid2 from './LayoutGrid2';
import LayoutGrid4 from './LayoutGrid4';

const meta: Meta = {
  title: 'Icons/LayoutGrids',
  component: LayoutGrid2,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'LayoutGrid2와 LayoutGrid4 아이콘 컴포넌트 (active 상태 및 size 조절 가능)',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Grid2_Large_Active: Story = {
  render: () => <LayoutGrid2 size='L' active={true} />,
  name: 'Grid2 - Large Active',
};

export const Grid2_Small_Inactive: Story = {
  render: () => <LayoutGrid2 size='S' active={false} />,
  name: 'Grid2 - Small Inactive',
};

export const Grid4_Large_Active: Story = {
  render: () => <LayoutGrid4 size='L' active={true} />,
  name: 'Grid4 - Large Active',
};

export const Grid4_Small_Inactive: Story = {
  render: () => <LayoutGrid4 size='S' active={false} />,
  name: 'Grid4 - Small Inactive',
};
