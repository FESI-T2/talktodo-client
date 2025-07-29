import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';

import DateSelector from './DateSelector';
const meta: Meta<typeof DateSelector> = {
  component: DateSelector,
  title: 'molecules/DateSelector',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof DateSelector>;

export const Range: Story = {
  render: () => {
    const [date, setDate] = useState<DateRange>({
      from: new Date(),
      to: new Date(),
    });

    return <DateSelector mode='range' date={date} setDate={setDate} />;
  },
};

export const Single: Story = {
  render: () => {
    const [date, setDate] = useState<Date>(new Date());

    return <DateSelector mode='single' date={date} setDate={setDate} />;
  },
};
