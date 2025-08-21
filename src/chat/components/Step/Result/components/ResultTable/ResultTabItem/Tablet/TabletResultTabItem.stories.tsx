import type { Meta, StoryObj } from '@storybook/nextjs';

import { useState } from 'react';

import { useDate, usePriority, useSelectedDays } from '@/shared/hooks/state';

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
    const [isRepeatEnabled, setIsRepeatEnabled] = useState(false);
    const toggleDay = () => setIsRepeatEnabled(!isRepeatEnabled);

    const { priority: selectedPriority, selectPriority } = usePriority('낮음');

    return (
      <TabletResultTabItem
        date={date}
        setDate={setDate}
        selectedDays={selectedDays}
        handleSelectDays={handleSelectDays}
        isRepeatEnabled={isRepeatEnabled}
        toggleDay={toggleDay}
        priority={selectedPriority}
        selectPriority={selectPriority}
        taskContent='3'
      />
    );
  },
};
