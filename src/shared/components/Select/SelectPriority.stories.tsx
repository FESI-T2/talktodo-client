// SelectPriority.stories.tsx
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useState } from 'react';

import { Priority } from '@/shared/types/prioity';

import SelectPriority, { selectOptions } from './SelectPriority';

const meta: Meta<typeof SelectPriority> = {
  title: 'molecules/SelectPriority',
  component: SelectPriority,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### SelectPriority (우선순위 드롭다운)

우선순위(중요/보통/낮음)를 선택할 수 있는 컴포넌트입니다.  
내부적으로 Dropdown과 LabelPriority 컴포넌트를 조합하여 일관된 UI를 제공합니다.

- 드롭다운 버튼 클릭 시, 옵션 목록이 노출됩니다.
- 옵션을 선택하면 선택된 상태가 반영되고, onSelect prop으로 값이 전달됩니다.
- 크기, 옵션은 커스터마이즈 가능합니다.
        `,
      },
    },
  },
  argTypes: {
    label: {
      description: '버튼 좌측에 보일 라벨 텍스트',
      defaultValue: '우선순위',
      control: 'text',
    },
    options: {
      description: '드롭다운에 표시될 옵션 배열',
      defaultValue: selectOptions,
    },
    selectedValue: {
      description: '현재 선택된 값',
      control: 'text',
    },
    onSelect: {
      action: 'selected!',
      description: '옵션 선택 시 호출 (value: string)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SelectPriority>;

export const Primary: Story = {
  render: (args) => {
    const [value, setValue] = useState<Priority>('중요');
    return <SelectPriority {...args} selectedValue={value} onSelect={setValue} />;
  },
  args: {
    label: '우선순위 직접 제어',
  },
};
