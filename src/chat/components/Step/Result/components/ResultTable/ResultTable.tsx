import React from 'react';

import { TaskTableItem, handleUpdateTaskTableItem } from '@/chat/types/index';

import ResultCategory from './ResultCategory/ResultCategory';
import ResultTabItem from './ResultTabItem/ResultTabItem';

export interface ResultTableProps {
  taskTableItems: TaskTableItem[];
  handleUpdateTaskTableItem: handleUpdateTaskTableItem;
}

const ResultTable = ({ taskTableItems, handleUpdateTaskTableItem }: ResultTableProps) => {
  return (
    <div className='w-full'>
      <ResultCategory />
      <div className='flex flex-col  overflow-y-auto max-h-[400px] '>
        {taskTableItems.map((task) => (
          <ResultTabItem key={task.id} taskTableItem={task} handleUpdateTaskTableItem={handleUpdateTaskTableItem} />
        ))}
      </div>
    </div>
  );
};

export default ResultTable;
