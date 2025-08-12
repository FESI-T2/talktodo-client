'use client';

import React from 'react';

import useBreakpoints from '@/shared/hooks/useBreakpoints';
import TimelineTaskCard from '@/task/components/TaskCard/layouts/TimelineTaskCard';
import { Task } from '@/task/types';

import { computeTimelineLayout } from './layout';
import { formatHourKorean, getTodayMinutes } from './utils';

type DailyTimelineProps = {
  tasks: Task[];
  hourWidth?: number;
  minCardWidth?: number;
  laneHeight?: number;
  marginHours?: number; // 시작/종료 각각에 적용되는 완충 시간
  minVisibleHours?: number; // 최소 표시 시간 범위
  paddingHours?: number; // 좌/우 패딩 시간(라벨 여유)
};

// (intentionally omitted local Positioned type to satisfy linter)

export default function DailyTimeline({
  tasks,
  hourWidth: hourWidthProp = 140,
  minCardWidth: minCardWidthProp = 200,
  laneHeight: laneHeightProp = 164,
  marginHours: marginHoursProp = 3,
  // 고정 24시간 표시 요구로 미사용 파라미터 제거
}: DailyTimelineProps) {
  const labelHeight = 32;
  const topPadding = labelHeight + 16;
  const bottomPadding = 24;
  const { isPc, isTablet } = useBreakpoints();
  const floatHeight = isPc ? 480 : isTablet ? 440 : 370; // 카드가 떠다니는 영역 높이(viewport)

  const undoneCount = tasks.filter((t) => !t.isDone).length;

  // 레이아웃 계산 (분리)
  const { startHour, hourCount, containerWidth, totalLanes, positioned } = computeTimelineLayout({
    tasks,
    hourWidth: hourWidthProp,
    minCardWidth: minCardWidthProp,
    laneHeight: laneHeightProp,
    marginHours: marginHoursProp,
    // 전체 0~24시 고정 노출, 양 끝 여백 대신 풀데이 표시
    paddingHours: 0,
    minVisibleHours: 24,
    minStartHour: 0,
    minEndHour: 24,
    defaultStartMinutes: 7 * 60,
    defaultEndMinutes: 15 * 60,
  });

  const hourWidth = hourWidthProp;
  const laneHeight = laneHeightProp;
  const contentHeight = topPadding + totalLanes * laneHeight;
  const containerHeight = contentHeight + bottomPadding; // 실제 컨텐츠 총 높이
  const viewportHeight = topPadding + floatHeight + bottomPadding; // 스크롤 뷰포트 높이

  // 현재 시간 인디케이터 (0~24h 범위에서만 표시)
  const nowMinutes = getTodayMinutes();
  const indicatorVisible = nowMinutes >= startHour * 60 && nowMinutes <= (startHour + hourCount) * 60;
  const indicatorLeftPx = ((nowMinutes - startHour * 60) / 60) * hourWidth;

  return (
    <div className='w-full max-w-[1168px] flex flex-col items-center gap-4 self-stretch'>
      {/* 상단 타이틀 바 */}
      <div className='w-full flex h-[44px] pl-4 pr-4 items-center gap-2 rounded-xl bg-purple-100 mb-3'>
        <div className='font-body2-medium-tight text-gray-700'>해야할 일</div>
        <div className='font-body1-bold text-purple-600'>{undoneCount}</div>
      </div>

      {/* 스크롤 가능한 타임라인 (x/y 스크롤) */}
      <div className='w-full overflow-auto' style={{ height: `${viewportHeight}px` }}>
        <div className='relative' style={{ minWidth: `${containerWidth}px`, minHeight: `${containerHeight}px` }}>
          {/* 시간 라벨 */}
          {Array.from({ length: hourCount + 1 }, (_, i) => {
            const h = startHour + i;
            const rawLeft = i * hourWidth;
            const clampedLeft = Math.min(rawLeft, containerWidth - 1);
            const transformX = i === 0 ? 'translateX(0)' : i === hourCount ? 'translateX(-100%)' : 'translateX(-50%)';
            return (
              <div
                key={`label-${h}`}
                className='absolute top-0 text-gray-500 font-body2-regular whitespace-nowrap'
                style={{ left: `${clampedLeft}px`, transform: transformX }}
              >
                {formatHourKorean(h)}
              </div>
            );
          })}

          {/* 세로 그리드 라인 */}
          {Array.from({ length: hourCount + 1 }, (_, i) => {
            const h = startHour + i;
            const rawLeft = i * hourWidth;
            const clampedLeft = Math.min(rawLeft, containerWidth - 1);
            return (
              <div
                key={`line-${h}`}
                className='absolute w-[1px] bg-[repeating-linear-gradient(to_bottom,_#ccc_0,_#ccc_4px,_transparent_4px,_transparent_8px)]'
                style={{ left: `${clampedLeft}px`, top: `${topPadding}px`, bottom: bottomPadding }}
              />
            );
          })}

          {/* 현재 시간 인디케이터 */}
          {indicatorVisible && (
            <>
              <div
                className='absolute w-[2px] bg-purple-500'
                style={{ left: `${indicatorLeftPx}px`, top: `${topPadding}px`, bottom: bottomPadding }}
              />
              <div
                className='absolute -mt-2 -ml-2 w-4 h-4 rounded-full bg-purple-500 border-2 border-white shadow'
                style={{ left: `${indicatorLeftPx}px`, top: `${topPadding}px` }}
                aria-label='현재 시간'
              />
            </>
          )}

          {/* 태스크 카드 */}
          {positioned.map((pt) => {
            const top = topPadding + pt.laneIndex * laneHeight;
            return (
              <div
                key={pt.taskId}
                className='absolute z-10'
                style={{ left: `${Math.max(0, pt.leftPx - 20)}px`, top: `${top}px`, minWidth: `${pt.widthPx}px` }}
              >
                <TimelineTaskCard task={pt} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
