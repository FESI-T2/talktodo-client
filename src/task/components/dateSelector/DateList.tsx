import { useRouter } from 'next/navigation';

import Chevron from '@/shared/components/Icons/Chevron/Chevron';
import { cn } from '@/shared/utils/cn';

import { useDateSelector, DateInfo } from './useDateSelector';

export default function DateList() {
  const router = useRouter();
  const { visibleDates, selectDate, moveDays } = useDateSelector();

  const handleDateSelect = (dateInfo: DateInfo) => {
    // useDateSelector의 selectDate 호출 (상태 업데이트)
    selectDate(new Date(dateInfo.year, dateInfo.month - 1, dateInfo.day));

    // URL로 이동
    const year = dateInfo.year;
    const month = String(dateInfo.month).padStart(2, '0');
    const day = String(dateInfo.day).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    router.push(`/dashboard/${formattedDate}`);
  };

  return (
    <div className='inline-flex gap-3'>
      {/* 왼쪽 버튼 */}
      <button onClick={() => moveDays(-5)}>{<Chevron direction='left' />}</button>

      {/* 날짜 버튼들 */}
      {visibleDates.map((dateInfo, index) => {
        const isCenter = index === 2;

        return (
          <button
            key={`${dateInfo.year}-${dateInfo.month}-${dateInfo.day}`}
            onClick={() => handleDateSelect(dateInfo)}
            className={cn(
              'flex w-[60px] h-[84px] flex-col justify-center items-center',
              isCenter ? 'p-4  bg-gray-800 rounded-[1000px]' : 'bg-gray-100'
            )}
          >
            <div className={cn('font-date-bold', isCenter ? 'text-white' : 'text-gray-500')}>{dateInfo.day}</div>
            <div className={cn(isCenter ? 'text-white font-body2-medium-tight' : 'text-gray-500 font-body2-regular')}>
              {dateInfo.dayOfWeek}
            </div>
          </button>
        );
      })}

      {/* 오른쪽 버튼 */}
      <button onClick={() => moveDays(5)}>{<Chevron direction='right' />}</button>
    </div>
  );
}
