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

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<DateRange>({
      from: new Date(2023, 9, 1),
      to: new Date(2023, 9, 31),
    });

    return <DateSelector date={date} setDate={setDate} />;
  },
};
