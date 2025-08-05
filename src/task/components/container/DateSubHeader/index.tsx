// import DesktopDateHeader from './DesktopDateHeader';

import useBreakpoints from '@/shared/hooks/useBreakpoints';

import DesktopDateHeader from './DesktopDateHeader';
import MobileDateHeader from './MobileDateHeader';
import TabletDateHeader from './TabletDateHeader';
import { DateHeaderProps } from './type';
// import TabletDateHeader from './TabletDateHeader';

export default function DateSubHeader({ layout, setLayout, timelineActive, setTimelineActive }: DateHeaderProps) {
  const { isXs, isMobile, isTablet, isPc } = useBreakpoints();

  if (isMobile || isXs)
    return <MobileDateHeader layout={layout} setLayout={setLayout} timelineActive={timelineActive} setTimelineActive={setTimelineActive} />;
  if (isTablet)
    return <TabletDateHeader layout={layout} setLayout={setLayout} timelineActive={timelineActive} setTimelineActive={setTimelineActive} />;
  if (isPc)
    return (
      <DesktopDateHeader layout={layout} setLayout={setLayout} timelineActive={timelineActive} setTimelineActive={setTimelineActive} />
    );
}
