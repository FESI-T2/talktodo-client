import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useState } from 'react';

import SelectPriority, { priorityOptions } from './SelectPriority';

const meta: Meta<typeof SelectPriority> = {
  title: 'atoms/SelectPriority',
  component: SelectPriority,
};

export default meta;
type Story = StoryObj<typeof SelectPriority>;

export const Priority: Story = {
  render: () => {
    const [value, setValue] = useState('important');
    return <SelectPriority label='우선순위를 선택' options={priorityOptions} selectedValue={value} onSelect={setValue} />;
  },
};
