// import DesktopDateHeader from './DesktopDateHeader';

import useBreakpoints from '@/shared/hooks/useBreakpoints';

import DesktopDateHeader from './DesktopDateHeader';
import MobileDateHeader from './MobileDateHeader';
import TabletDateHeader from './TabletDateHeader';
// import TabletDateHeader from './TabletDateHeader';

interface Props {
  layout: 'square' | 'rectangle';
  setLayout: (layout: 'square' | 'rectangle') => void;
}

export default function DateSubHeader({ layout, setLayout }: Props) {
  const { isXs, isMobile, isTablet, isPc } = useBreakpoints();

  if (isMobile || isXs) return <MobileDateHeader layout={layout} setLayout={setLayout} />;
  if (isTablet) return <TabletDateHeader layout={layout} setLayout={setLayout} />;
  if (isPc) return <DesktopDateHeader layout={layout} setLayout={setLayout} />;
}
