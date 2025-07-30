import Switch from '@/shared/components/Switch/Switch';

import TimelineButton from '@/shared/components/TimelineButton/TimelineButton';
import useResponsiveType from '@/shared/hooks/useResponsiveType';

import { DateList, useDateSelector } from '../dateSelector';
import DatePickerButton from '../dateSelector/DatePickerButton';

interface Props {
  layout: 'square' | 'rectangle';
  setLayout: (layout: 'square' | 'rectangle') => void;
}

export default function TaskViewOptionsContainer({ layout, setLayout }: Props) {
  const { kebabType } = useResponsiveType();
  const { selectedDateString } = useDateSelector();

  const handleSwitch = (checked: boolean) => {
    setLayout(checked ? 'rectangle' : 'square');
  };

  const switchSize = kebabType === 'S' ? 'S' : 'L';

  return (
    <div className='relative w-[343px] tb:w-[600px] pc:w-[1168px] h-[84px] flex items-center justify-center'>
      <div className='flex items-center '>
        <div className='font-title3-semibold text-gray-900'>{selectedDateString}</div>
        <DatePickerButton />
      </div>
      <div className='flex items-center m-8'>
        <DateList />
      </div>
      <div className='flex items-center w-[140px] h-[40px]' />
      <div className='flex items-center gap-3 absolute right-0'>
        <TimelineButton size={switchSize} />
        <Switch type='layout' size={switchSize} checked={layout === 'rectangle'} onChange={handleSwitch} />
      </div>
    </div>
  );
}
