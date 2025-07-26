import LabelPriority, { PriorityType } from '@/task/components/common/LabelPriority/LabelPriority';

import TextArea from '../../TextArea/TextArea';
import SubText from '../SubText/SubText';

interface MemoFieldProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  day: string;
  priority: PriorityType;
  repeatInterval: string;
}

const MemoField = ({ day, priority, repeatInterval, ...props }: MemoFieldProps) => {
  const infoItems = {
    날짜: day,
    우선순위: priority,
    반복설정: repeatInterval,
  } as const;

  const isPriorityType = (value: string): value is PriorityType => {
    return ['중요', '보통', '낮음'].includes(value);
  };

  return (
    <div>
      <div className='font-body3-semibold  base-horizon'>
        <div className='flex gap-[24px]'>
          {Object.entries(infoItems).map(([key, value], idx) => (
            <div key={idx} className=''>
              <p className='font-body3-medium-tight text-[var(--color-gray-500)]'>{key}</p>
              {isPriorityType(value) ? <LabelPriority priority={value} size='L' /> : <p className=' font-body2-semibold '>{value}</p>}
            </div>
          ))}
        </div>
      </div>
      <SubText text='메모'>
        <TextArea {...props} />
      </SubText>
    </div>
  );
};

export default MemoField;
