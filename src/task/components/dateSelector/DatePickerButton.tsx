'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';

import DatePicker from '@/shared/components/DatePicker/DatePicker';
import Calendar from '@/shared/components/Icons/Calendar/Calendar';

interface DatePickerButtonProps {
  className?: string;
}

const DatePickerButton = ({ className = '' }: DatePickerButtonProps) => {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [datePickerState, setDatePickerState] = useState<DateRange>({
    from: undefined,
    to: undefined,
  });
  const router = useRouter();

  const handleCalendarClick = () => {
    setIsDatePickerOpen(!isDatePickerOpen);
  };

  const customDatePickerHandler = (date: DateRange) => {
    setDatePickerState(date);

    if (date.from) {
      // 날짜를 YYYY-MM-DD 형식으로 변환
      const year = date.from.getFullYear();
      const month = String(date.from.getMonth() + 1).padStart(2, '0');
      const day = String(date.from.getDate()).padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;

      // URL로 이동
      router.push(`/dashboard/${formattedDate}`);

      // DatePicker 닫기
      setIsDatePickerOpen(false);
    }
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
            />
          </div>
        </>
      )}
    </div>
  );
};

// DatePicker를 감싸는 래퍼 컴포넌트
interface DatePickerWrapperProps {
  datePickerState: DateRange;
  setDatePickerState: React.Dispatch<React.SetStateAction<DateRange>>;
  onDateSelect: (date: DateRange) => void;
}

const DatePickerWrapper = ({ datePickerState, setDatePickerState, onDateSelect }: DatePickerWrapperProps) => {
  // 원래 DatePicker의 setDate 함수와 호환되도록 수정
  const handleDateChange = (value: React.SetStateAction<DateRange>) => {
    const newDate = typeof value === 'function' ? value(datePickerState) : value;
    setDatePickerState(newDate);
    onDateSelect(newDate);
  };

  return <DatePicker setDate={handleDateChange} />;
};

export default DatePickerButton;
