import { useState, useMemo } from 'react';

export interface DateInfo {
  year: number;
  month: number;
  day: number;
  dayOfWeek: string;
}

export interface UseDateSelectorReturn {
  currentDate: Date;
  visibleDates: DateInfo[];
  selectedDate: Date;
  fullDateString: string;
  dayDateString: string;
  selectDate: (date: Date) => void;
  moveDays: (days: number) => void;
}

// 선택된 날짜를 기준으로 주변 날짜들을 계산하는 훅
export function useDateSelector(initialDate?: string) {
  // 날짜 선택기 관련 상수 (내부에서만 사용)
  const VISIBLE_DATES_COUNT = 5; // 화면에 표시할 날짜 개수
  const MOVE_DAYS_COUNT = 5; // 좌우 버튼 클릭 시 이동할 날짜 수

  // 초기 날짜 설정: initialDate가 있으면 사용, 없으면 오늘 날짜
  const getInitialDate = () => {
    if (initialDate) {
      const date = new Date(initialDate);
      return isNaN(date.getTime()) ? new Date() : date;
    }
    return new Date();
  };

  const [selectedDate, setSelectedDate] = useState(() => getInitialDate()); // selectedDate가 변경될 때마다 visibleDates를 다시 계산
  const visibleDates = useMemo(() => {
    // 요일을 한국어로 변환하는 함수
    const getDayOfWeek = (date: Date): string => {
      const days = ['일', '월', '화', '수', '목', '금', '토'];
      return days[date.getDay()];
    };

    const getNearbyDate = (baseDate: Date): DateInfo[] => {
      return Array.from({ length: VISIBLE_DATES_COUNT }, (_, i) => {
        const offset = i - Math.floor(VISIBLE_DATES_COUNT / 2);
        const date = new Date(baseDate);
        date.setDate(baseDate.getDate() + offset);

        return {
          year: date.getFullYear(),
          month: date.getMonth() + 1, // 0-based이므로 +1
          day: date.getDate(),
          dayOfWeek: getDayOfWeek(date),
        };
      });
    };

    return getNearbyDate(selectedDate);
  }, [selectedDate]);

  const selectDate = (date: Date) => {
    setSelectedDate(date);
  };

  const moveDays = (days: number = MOVE_DAYS_COUNT) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() + days);
    setSelectedDate(newDate);
  };

  // 선택된 날짜를 다양한 형식의 한국어 문자열로 변환
  const fullDateString = useMemo(() => {
    return selectedDate.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
    });
  }, [selectedDate]);

  const dayDateString = useMemo(() => {
    return selectedDate.toLocaleDateString('ko-KR', {
      month: 'long',
      day: 'numeric',
    });
  }, [selectedDate]);

  return {
    currentDate: new Date(),
    fullDateString,
    dayDateString,
    visibleDates,
    selectedDate,
    selectDate,
    moveDays,
  };
}
