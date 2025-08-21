import type { Meta, StoryObj } from '@storybook/nextjs';

import Switch from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Atoms/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['basic', 'layout'],
    },
    size: {
      control: { type: 'radio' },
      options: ['L', 'S'],
    },
    defaultChecked: { control: 'boolean' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Basic: Story = {
  args: {
    type: 'basic',
    size: 'L',
    defaultChecked: false,
  },
};

export const Layout: Story = {
  args: {
    type: 'layout',
    size: 'L',
    defaultChecked: true,
  },
};
