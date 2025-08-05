import { useEffect, useState } from 'react';

import { DateRange } from 'react-day-picker';

import { TaskTableItem, handleUpdateTaskTableItem } from '@/chat/types';
import { usePriority, useSelectedDays } from '@/shared/hooks/state';
import useBreakpoints from '@/shared/hooks/useBreakpoints';

import DeskTopResultTabItem from './DeskTop/DeskTopResultTabItem';
import TabletResultTabItem from './Tablet/TabletResultTabItem';

interface ResultTabItemProps {
  taskTableItem: TaskTableItem;
  handleUpdateTaskTableItem: handleUpdateTaskTableItem;
}

const ResultTabItem = ({ taskTableItem, handleUpdateTaskTableItem }: ResultTabItemProps) => {
  const [selectedDateRange, setSelectedDateRange] = useState<DateRange>({
    from: taskTableItem.date.from,
    to: taskTableItem.date.to,
  });

  const { priority: selectedPriority, setPriority: setSlectedPriority } = usePriority();

  const { selectedDays, handleSelectDays } = useSelectedDays();

  const { isPc } = useBreakpoints();

  const ResultTallItemParams = {
    taskContent: taskTableItem.content,
    date: selectedDateRange,
    setDate: setSelectedDateRange,
    selectedDays: selectedDays,
    handleSelectDays: handleSelectDays,
    selectedPriority: setSlectedPriority,
  };

  useEffect(() => {
    handleUpdateTaskTableItem(taskTableItem, {
      ...taskTableItem,
      date: selectedDateRange,
      priority: selectedPriority,
    });
  }, [selectedDateRange, selectedPriority]);

  if (isPc) {
    return <DeskTopResultTabItem {...ResultTallItemParams} />;
  } else {
    return <TabletResultTabItem {...ResultTallItemParams} />;
  }
};

export default ResultTabItem;
