import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useEffect, useState } from 'react';
import { DateRange } from 'react-day-picker';

import DatePicker from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  title: 'molecules/DatePicker',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<DateRange>({
      from: new Date(),
      to: new Date(),
    });

    useEffect(() => {
      console.log('DatePicker mounted with initial date:', date);
    }, [date]);

    return <DatePicker setDate={setDate} />;
  },
};
