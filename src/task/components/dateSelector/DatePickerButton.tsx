'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import DatePicker from '@/shared/components/DatePicker/DatePicker';
import Calendar from '@/shared/components/Icons/Calendar/Calendar';

interface DatePickerButtonProps {
  className?: string;
}

const DatePickerButton = ({ className = '' }: DatePickerButtonProps) => {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [datePickerState, setDatePickerState] = useState<Date>(new Date());
  const router = useRouter();

  const handleCalendarClick = () => {
    setIsDatePickerOpen(!isDatePickerOpen);
  };

  const customDatePickerHandler = (date: Date) => {
    setDatePickerState(date);

    // 날짜를 YYYY-MM-DD 형식으로 변환
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    // URL로 이동
    router.push(`/dashboard/${formattedDate}`);

    // DatePicker 닫기
    setIsDatePickerOpen(false);
  };

  const handleCloseDatePicker = () => {
    setIsDatePickerOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleCloseDatePicker();
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Calendar 버튼 */}
      <button
        type='button'
        onClick={handleCalendarClick}
        className='flex items-center justify-center p-2 hover:bg-gray-100 rounded-lg transition-colors'
        aria-label='날짜 선택'
      >
        <Calendar />
      </button>

      {/* DatePicker 모달 */}
      {isDatePickerOpen && (
        <>
          {/* 배경 오버레이 */}
          <div
            className='fixed inset-0 z-40'
            onClick={handleCloseDatePicker}
            onKeyDown={handleKeyDown}
            role='button'
            tabIndex={0}
            aria-label='날짜 선택기 닫기'
          />

          {/* DatePicker */}
          <div className='absolute top-full left-0 z-50 mt-2'>
            <DatePickerWrapper
              datePickerState={datePickerState}
              setDatePickerState={setDatePickerState}
              onDateSelect={customDatePickerHandler}
              onClose={handleCloseDatePicker}
            />
          </div>
        </>
      )}
    </div>
  );
};

// DatePicker를 감싸는 래퍼 컴포넌트
interface DatePickerWrapperProps {
  datePickerState: Date;
  setDatePickerState: React.Dispatch<React.SetStateAction<Date>>;
  onDateSelect: (date: Date) => void;
  onClose: () => void;
}

const DatePickerWrapper = ({ setDatePickerState, onClose }: DatePickerWrapperProps) => {
  return <DatePicker mode='single' setDate={setDatePickerState} closeSelector={onClose} />;
};

export default DatePickerButton;
