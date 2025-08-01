import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { useDate, useSelectedDays } from '@/shared/hooks/state';

import DeskTopResultTabItem from './DeskTopResultTabItem';

const meta: Meta<typeof DeskTopResultTabItem> = {
  component: DeskTopResultTabItem,
  title: 'molecules/ResultTabItem/Desktop/DeskTopResultTabItem',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof DeskTopResultTabItem>;

export const Default: Story = {
  render: () => {
    const { date, setDate } = useDate('range');
    const { selectedDays, handleSelectDays } = useSelectedDays();

    return <DeskTopResultTabItem date={date} setDate={setDate} selectedDays={selectedDays} handleSelectDays={handleSelectDays} />;
  },
};
