import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { useDate, useSelectedDays } from '@/shared/hooks/state';

import TabletResultTabItem from './TabletResultTabItem';

const meta: Meta<typeof TabletResultTabItem> = {
  component: TabletResultTabItem,
  title: 'molecules/ResultTabItem/Tablet/TabletResultTabItem',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof TabletResultTabItem>;

export const Default: Story = {
  render: () => {
    const { date, setDate } = useDate('range');
    const { selectedDays, handleSelectDays } = useSelectedDays();

    return <TabletResultTabItem date={date} setDate={setDate} selectedDays={selectedDays} handleSelectDays={handleSelectDays} />;
  },
};
