import Switch from '@/shared/components/Switch/Switch';
import TimelineButton from '@/shared/components/TimelineButton/TimelineButton';
import useResponsiveType from '@/shared/hooks/useResponsiveType';

import { useDateSelector } from '../../dateSelector';
import DatePickerBtn from '../../dateSelector/DatePickerButton';

interface Props {
  layout: 'square' | 'rectangle';
  setLayout: (layout: 'square' | 'rectangle') => void;
}

export default function MobileDateHeader({ layout, setLayout }: Props) {
  const { kebabType } = useResponsiveType();
  const { dayDateString } = useDateSelector();

  const handleSwitch = (checked: boolean) => {
    setLayout(checked ? 'rectangle' : 'square');
  };

  const switchSize = kebabType === 'S' ? 'S' : 'L';
  return (
    <div className='flex justify-between items-center self-stretch'>
      <div className='flex items-center gap-2'>
        <div className='font-body1-semibold text-gray-900'>{dayDateString}</div>
        <DatePickerBtn />
        <div className='flex items-center'>{/* Arrow */}</div>
      </div>
      <div className='flex items-center gap-3'>
        <TimelineButton size={switchSize} />
        <Switch type='layout' size={switchSize} checked={layout === 'rectangle'} onChange={handleSwitch} />
      </div>
    </div>
  );
}
