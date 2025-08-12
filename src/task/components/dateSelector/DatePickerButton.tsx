import { useRouter } from 'next/navigation';
import { useState } from 'react';

import DatePicker from '@/shared/components/DatePicker/DatePicker';
import Calendar from '@/shared/components/Icons/Calendar/Calendar';

export default function DatePickerBtn() {
  const router = useRouter();
  const [date, setDate] = useState<Date>(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const closeSelector = () => {
    setIsOpen(!isOpen);
    console.log(date);
    if (isOpen === true) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;
      router.push(formattedDate);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeSelector();
    }
  };

  return (
    <>
      <div className={`relative `}>
        {/* Calendar 버튼 */}
        <button
          type='button'
          onClick={closeSelector}
          className='flex items-center justify-center p-2 hover:bg-gray-100 rounded-lg transition-colors'
          aria-label='날짜 선택'
        >
          <Calendar />
        </button>

        {/* DatePicker 모달 */}
        {isOpen && (
          <>
            {/* 배경 오버레이 */}
            <div
              className='fixed inset-0 z-40'
              onClick={closeSelector}
              onKeyDown={handleKeyDown}
              role='button'
              tabIndex={0}
              aria-label='날짜 선택기 닫기'
            />

            {/* DatePicker */}
            <div className='absolute top-full left-0 z-50 mt-2'>
              <DatePicker setDate={setDate} mode='single' closeSelector={closeSelector} date={date} />
            </div>
          </>
        )}
      </div>
    </>
  );
}
