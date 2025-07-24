import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';

import DatePicker from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  title: 'DatePicker',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<DateRange>();

    return <DatePicker selected={date} onSelect={setDate} mode='range' />;
  },
};
