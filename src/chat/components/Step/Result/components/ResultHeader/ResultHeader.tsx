import Flag from '@/shared/components/Icons/Flag/Flag';

interface ResultHeaderProps {
  goal: string;
}

const ResultHeader = ({ goal }: ResultHeaderProps) => (
  <div className='flex flex-col items-start gap-2 self-stretch'>
    <div className='flex items-center gap-1'>
      <Flag type='chat' />
      <p className='font-body1-bold text-purple-500'>목표</p>
    </div>
    <p className='font-title2-bold text-gray-900'>{goal}</p>
  </div>
);

export default ResultHeader;
