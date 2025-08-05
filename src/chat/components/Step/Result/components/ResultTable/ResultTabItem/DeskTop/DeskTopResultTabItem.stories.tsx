import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { useState } from 'react';

import { useDate, usePriority, useSelectedDays } from '@/shared/hooks/state';

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
    const [isRepeatEnabled, setIsRepeatEnabled] = useState(false);
    const toggleDay = () => setIsRepeatEnabled(!isRepeatEnabled);

    const { priority: selectedPriority, selectPriority } = usePriority('낮음');

    return (
      <DeskTopResultTabItem
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
