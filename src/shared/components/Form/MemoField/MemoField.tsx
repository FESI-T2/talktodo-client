import { Priority } from '@/shared/types/prioity';
import LabelPriority from '@/task/components/common/LabelPriority/LabelPriority';

import TextArea from '../../TextArea/TextArea';
import Section from '../Section/Section';

interface MemoFieldProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  day: string;
  priority: Priority;
  repeatInterval: string;
}

const MemoField = ({ day, priority, repeatInterval, ...props }: MemoFieldProps) => {
  const infoItems = {
    날짜: day,
    우선순위: priority,
    반복설정: repeatInterval,
  } as const;

  const isPriority = (value: string): value is Priority => {
    return ['중요', '보통', '낮음'].includes(value);
  };

  return (
    <div>
      <div className='font-body3-semibold  base-horizon'>
        <div className='flex gap-[24px]'>
          {Object.entries(infoItems).map(([key, value], idx) => (
            <div key={idx}>
              <p className='font-body3-medium-tight text-gray-500'>{key}</p>
              {isPriority(value) ? <LabelPriority priority={value} size='L' /> : <p className=' font-body2-semibold '>{value}</p>}
            </div>
          ))}
        </div>
      </div>
      <Section sectionTitle='메모'>
        <TextArea {...props} />
      </Section>
    </div>
  );
};

export default MemoField;
