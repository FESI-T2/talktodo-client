import type { Meta, StoryObj } from '@storybook/nextjs';
import React from 'react';

import AlertContainer from './AlertContainer';
import AlertExample from './AlertExample';

const meta: Meta<typeof AlertExample> = {
  component: AlertExample,
  title: 'test/AlertExample',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <>
        <div id='alert-root' />
        <Story />
        <AlertContainer />
      </>
    ),
  ],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof AlertExample>;

export const Default: Story = {
  args: {},
};
