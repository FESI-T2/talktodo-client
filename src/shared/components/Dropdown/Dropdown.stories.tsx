// Dropdown.stories.tsx (또는 .stories.mdx와 조합 가능)
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Dropdown from './Dropdown';

// Docs에서 잘 보이도록 타입, 설명 작성
const meta: Meta<typeof Dropdown> = {
  title: 'Molecules/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Dropdown 컴포넌트

- 다양한 사이즈 지원 (S/M/L)
- type="priority"일 때 LabelPriority와 연동
- 옵션 클릭시 onSelect 콜백 호출  
        `,
      },
    },
  },
  argTypes: {
    options: {
      description: '표시할 옵션의 배열',
      defaultValue: ['Option 1', 'Option 2', 'Option 3'],
    },
    size: {
      options: ['S', 'M', 'L'],
      description: '드롭다운 크기',
      defaultValue: 'M',
    },
    type: {
      options: ['default', 'priority'],
      description: '옵션 표시 타입',
      defaultValue: 'default',
    },
    onSelect: { action: '옵션 선택됨' },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Large: Story = {
  args: {
    options: ['중요', '보통', '낮음'],
    size: 'L',
    type: 'priority',
  },
};

export const Medium: Story = {
  args: {
    options: ['수정하기', '삭제하기'],
    size: 'M',
    type: 'default',
  },
};

export const Small: Story = {
  args: {
    options: ['수정하기', '삭제하기'],
    size: 'S',
    type: 'default',
  },
};
