import Flag from '@/shared/components/Icons/Flag/Flag';

const ChatModalMainTabHeader = () => (
  <div className='flex items-center gap-1'>
    <Flag type='chat' />
    <p className='tb:font-title3-bold font-caption-bold text-gray-600'>기존 목표</p>
  </div>
);

export default ChatModalMainTabHeader;
