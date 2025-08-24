import Switch from '@/shared/components/Switch/Switch';
import TimelineButton from '@/shared/components/TimelineButton/TimelineButton';
import useResponsiveType from '@/shared/hooks/useResponsiveType';

import { DateHeaderProps } from './type';
import { DateList, useDateSelector } from '../../DateSelector';
import DatePickerButton from '../../DateSelector/DatePickerButton';

export default function DesktopDateHeader({ layout, setLayout, timelineActive, setTimelineActive }: DateHeaderProps) {
  const { kebabType } = useResponsiveType();
  const { fullDateString } = useDateSelector();

  const handleSwitch = (checked: boolean) => {
    setLayout(checked ? 'rectangle' : 'square');
  };

  const switchSize = kebabType === 'S' ? 'S' : 'L';
  return (
    <div className='relative w-[100%] max-w-[1168px] h-[84px] flex items-center justify-center'>
      <div className='flex items-center '>
        <div className='font-title3-semibold text-gray-900'>{fullDateString}</div>
        <DatePickerButton />
      </div>
      <div className='flex items-center m-8'>
        <DateList />
      </div>
      <div className='flex items-center w-[140px] h-[40px]' />
      <div className='flex items-center gap-3 absolute right-0'>
        <TimelineButton size={switchSize} active={timelineActive} onClick={setTimelineActive} />
        <Switch type='layout' size={switchSize} checked={layout === 'rectangle'} onChange={handleSwitch} disabled={timelineActive} />
      </div>
    </div>
  );
}
