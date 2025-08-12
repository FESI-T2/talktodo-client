import { Task } from '@/task/types';

import { toMinutes } from './utils';

export interface PositionedTask extends Task {
  leftPx: number;
  widthPx: number;
  laneIndex: number;
}

export interface LayoutParams {
  tasks: Task[];
  // time/grid
  hourWidth: number; // px per hour
  minCardWidth: number; // px
  laneHeight: number; // px

  // behavior
  marginHours: number; // start/end 각각에 적용되는 완충 시간
  paddingHours: number; // 좌/우 패딩 (라벨 여유)
  minVisibleHours: number; // 최소 표시 시간 범위
  minStartHour?: number; // 표시 범위의 최소 시작시각 보정 (예: 5시)
  minEndHour?: number; // 표시 범위의 최소 종료시각 보정 (예: 12시)

  // fallback when times are missing
  defaultStartMinutes?: number; // 분
  defaultEndMinutes?: number; // 분
}

export interface LayoutResult {
  startHour: number;
  endHour: number;
  hourCount: number;
  containerWidth: number;
  totalLanes: number;
  positioned: PositionedTask[];
}

function computeRangeHours(tasks: Task[], params: LayoutParams): { startHour: number; endHour: number } {
  const defaultStart = params.defaultStartMinutes ?? 7 * 60;
  const defaultEnd = params.defaultEndMinutes ?? 15 * 60;

  const starts = tasks.map((t) => toMinutes(t.startTime) ?? defaultStart).filter((v): v is number => typeof v === 'number');
  const ends = tasks
    .map((t) => toMinutes(t.endTime) ?? (toMinutes(t.startTime) ?? defaultStart) + 60)
    .filter((v): v is number => typeof v === 'number');

  const minStart = starts.length ? Math.min(...starts) : defaultStart;
  const maxEnd = ends.length ? Math.max(...ends) : defaultEnd;

  let startHour = Math.max(0, Math.floor(minStart / 60) - params.paddingHours);
  let endHour = Math.min(24, Math.ceil(maxEnd / 60) + params.paddingHours);

  // visible 최소 보장
  if (endHour - startHour < params.minVisibleHours) {
    endHour = Math.min(24, startHour + params.minVisibleHours);
  }

  // 요구: 최소 5시부터 12시까지는 여유롭게 보이도록 보정
  if (typeof params.minStartHour === 'number') {
    startHour = Math.min(startHour, params.minStartHour);
  }
  if (typeof params.minEndHour === 'number') {
    endHour = Math.max(endHour, params.minEndHour);
  }

  return { startHour, endHour };
}

export function computeTimelineLayout(params: LayoutParams): LayoutResult {
  const { tasks, hourWidth, minCardWidth, marginHours } = params;

  const { startHour, endHour } = computeRangeHours(tasks, params);
  const hourCount = endHour - startHour;
  const containerWidth = hourCount * hourWidth;

  // intervals
  const defaultStart = params.defaultStartMinutes ?? 7 * 60;
  const intervals = tasks
    .map((t) => {
      const start = toMinutes(t.startTime) ?? defaultStart;
      const end = toMinutes(t.endTime) ?? start + 60;
      return { task: t, start, end };
    })
    .sort((a, b) => a.start - b.start);

  // lanes with margin
  const marginMinutes = marginHours * 60;
  const lanesBlockedUntil: number[] = [];
  const positioned: PositionedTask[] = [];

  for (const { task, start, end } of intervals) {
    let lane = 0;
    for (; lane < lanesBlockedUntil.length; lane++) {
      if (start >= lanesBlockedUntil[lane]) break;
    }
    const nextAllowed = end + 2 * marginMinutes; // 시작/종료 각각 ±marginHours 적용
    if (lane === lanesBlockedUntil.length) lanesBlockedUntil.push(nextAllowed);
    else lanesBlockedUntil[lane] = nextAllowed;

    const leftHours = (start - startHour * 60) / 60;
    const durationHours = Math.max((end - start) / 60, minCardWidth / hourWidth);
    const leftPx = Math.max(0, leftHours * hourWidth);
    const widthPx = Math.min(containerWidth - leftPx, durationHours * hourWidth);

    positioned.push({ ...task, leftPx, widthPx, laneIndex: lane });
  }

  const totalLanes = Math.max(1, lanesBlockedUntil.length);

  return { startHour, endHour, hourCount, containerWidth, totalLanes, positioned };
}
