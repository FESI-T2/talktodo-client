// SelectPriority.stories.tsx
import type { Meta, StoryObj } from '@storybook/nextjs';

import { usePriority } from '@/shared/hooks/state';

import SelectPriority from './SelectPriority';

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
};

export default meta;
type Story = StoryObj<typeof SelectPriority>;

export const Primary: Story = {
  render: (args) => {
    const { priority, selectPriority } = usePriority('낮음');
    return <SelectPriority {...args} priority={priority} selectPriority={selectPriority} />;
  },
};
