'use client';

import { useMediaQuery } from 'usehooks-ts';

import { useDate, useSelectedDays } from '@/shared/hooks/state/index';

import DeskTopResultTabItem from './DeskTop/DeskTopResultTabItem';
import TabletResultTabItem from './Tablet/TabletResultTabItem';

const ResultTabItem = () => {
  const { date, setDate } = useDate('range');
  const { selectedDays, handleSelectDays } = useSelectedDays();

  const isDesktop = useMediaQuery('(min-width: 1024px)');

  if (isDesktop) {
    return <DeskTopResultTabItem date={date} setDate={setDate} selectedDays={selectedDays} handleSelectDays={handleSelectDays} />;
  } else {
    return <TabletResultTabItem date={date} setDate={setDate} selectedDays={selectedDays} handleSelectDays={handleSelectDays} />;
  }
};

export default ResultTabItem;
