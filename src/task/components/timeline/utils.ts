export function toMinutes(time?: string): number | null {
  if (!time) return null;
  const [hh = '0', mm = '0'] = time.split(':');
  const h = Number(hh);
  const m = Number(mm);
  if (Number.isNaN(h) || Number.isNaN(m)) return null;
  return h * 60 + m;
}

export function formatHourKorean(hour: number): string {
  const isAM = hour < 12;
  const h12 = hour % 12 === 0 ? 12 : hour % 12;
  return `${isAM ? '오전' : '오후'} ${h12}시`;
}

export function getTodayMinutes(now: Date = new Date()): number {
  return now.getHours() * 60 + now.getMinutes();
}
