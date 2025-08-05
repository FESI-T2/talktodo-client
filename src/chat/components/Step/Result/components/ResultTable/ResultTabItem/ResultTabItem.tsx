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
// 차후에 리펙 객체로 묶기
const ResultTabItem = ({ taskTableItem, handleUpdateTaskTableItem }: ResultTabItemProps) => {
  const [selectedDateRange, setSelectedDateRange] = useState<DateRange>({
    from: taskTableItem.date.from,
    to: taskTableItem.date.to,
  });

  const [isRepeatEnabled, setIsRepeatEnabled] = useState(taskTableItem.repeatEnabled);
  const toggleDay = () => setIsRepeatEnabled(!isRepeatEnabled);

  const { priority: selectedPriority, selectPriority } = usePriority(taskTableItem.priority);

  const { selectedDays, handleSelectDays, resetSelectedDays } = useSelectedDays();

  useEffect(() => {
    if (!isRepeatEnabled) resetSelectedDays();
  }, [isRepeatEnabled]);

  const { isPc } = useBreakpoints();

  useEffect(() => {
    handleUpdateTaskTableItem(taskTableItem, {
      ...taskTableItem,
      date: selectedDateRange,
      priority: selectedPriority,
      repeatEnabled: isRepeatEnabled,
      repeatDays: selectedDays,
    });
  }, [selectedDateRange, selectedPriority, isRepeatEnabled, selectedDays]);

  const ResultTallItemParams = {
    taskContent: taskTableItem.content,
    date: selectedDateRange,
    setDate: setSelectedDateRange,
    selectedDays: selectedDays,
    handleSelectDays: handleSelectDays,
    isRepeatEnabled: isRepeatEnabled,
    toggleDay: toggleDay,
    priority: selectedPriority,
    selectPriority: selectPriority,
  };

  if (isPc) {
    return <DeskTopResultTabItem {...ResultTallItemParams} />;
  } else {
    return <TabletResultTabItem {...ResultTallItemParams} />;
  }
};

export default ResultTabItem;
