import Switch from '@/shared/components/Switch/Switch';
import TimelineButton from '@/shared/components/TimelineButton/TimelineButton';

import useResponsiveType from '@/shared/hooks/useResponsiveType';

import { DateList, useDateSelector } from '../../dateSelector';
import DatePickerBtn from '../../dateSelector/DatePickerButton';

interface Props {
  layout: 'square' | 'rectangle';
  setLayout: (layout: 'square' | 'rectangle') => void;
}

export default function TabletDateHeader({ layout, setLayout }: Props) {
  const { kebabType } = useResponsiveType();
  const { fullDateString } = useDateSelector();

  const switchSize = kebabType === 'S' ? 'S' : 'L';

  const handleSwitch = (checked: boolean) => {
    setLayout(checked ? 'rectangle' : 'square');
  };
  return (
    <div className='flex flex-col items-center self-stretch'>
      <div className='flex justify-between items-center self-stretch'>
        <div className='flex items-center gap-2'>
          <div className='font-title3-semibold text-gray-900'>{fullDateString}</div>
          <DatePickerBtn />
        </div>
        <div className='flex items-center gap-3'>
          <TimelineButton size={switchSize} />
          <Switch type='layout' size={switchSize} checked={layout === 'rectangle'} onChange={handleSwitch} />
        </div>
      </div>
      <DateList />
    </div>
  );
}
