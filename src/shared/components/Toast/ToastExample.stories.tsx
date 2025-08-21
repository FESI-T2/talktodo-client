import type { Meta, StoryObj } from '@storybook/nextjs';
import React from 'react';

import ToastContainer from './ToastContainer';
import ToastExample from './ToastExample';

const meta: Meta<typeof ToastExample> = {
  component: ToastExample,
  title: 'test/ToastExample',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <>
        <div id='toast-root' />
        <Story />
        <ToastContainer />
      </>
    ),
  ],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ToastExample>;

export const Default: Story = {
  args: {},
};
