import React from 'react';

import ResultCategory from './ResultCategory/ResultCategory';
import ResultTabItem from './ResultTabItem/ResultTabItem';

const ResultTable = () => {
  return (
    <div className='w-full'>
      <ResultCategory />
      <div className='flex flex-col  overflow-y-auto max-h-[400px] '>
        {Array.from({ length: 10 }).map((_, idx) => (
          <ResultTabItem key={idx} />
        ))}
      </div>
    </div>
  );
};

export default ResultTable;
