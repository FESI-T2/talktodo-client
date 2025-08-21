import type { Meta, StoryObj } from '@storybook/nextjs';
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

export const Range: Story = {
  render: () => {
    const [date, setDate] = useState<DateRange>({
      from: new Date(),
      to: new Date(),
    });

    useEffect(() => {
      console.log('DatePicker mounted with initial date:', date);
    }, [date]);

    return <DatePicker mode='range' setDate={setDate} closeSelector={() => {}} date={date} />;
  },
};

export const Single: Story = {
  render: () => {
    const [date, setDate] = useState<Date>(new Date());

    useEffect(() => {
      console.log('DatePicker mounted with initial date:', date);
    }, [date]);

    return <DatePicker mode='single' setDate={setDate} closeSelector={() => {}} date={date} />;
  },
};
