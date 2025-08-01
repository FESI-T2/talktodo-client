'use client';

import { useDate, useSelectedDays } from '@/shared/hooks/state/index';

import useBreakpoints from '@/shared/hooks/useBreakpoints';

import DeskTopResultTabItem from './DeskTop/DeskTopResultTabItem';
import TabletResultTabItem from './Tablet/TabletResultTabItem';

const ResultTabItem = () => {
  const { date, setDate } = useDate('range');
  const { selectedDays, handleSelectDays } = useSelectedDays();

  const { isPc } = useBreakpoints();

  if (isPc) {
    return <DeskTopResultTabItem date={date} setDate={setDate} selectedDays={selectedDays} handleSelectDays={handleSelectDays} />;
  } else {
    return <TabletResultTabItem date={date} setDate={setDate} selectedDays={selectedDays} handleSelectDays={handleSelectDays} />;
  }
};

export default ResultTabItem;
