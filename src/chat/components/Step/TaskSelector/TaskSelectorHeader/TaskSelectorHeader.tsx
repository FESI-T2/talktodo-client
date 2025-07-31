import Flag from '@/shared/components/Icons/Flag/Flag';

const ChatModalMainHeader = () => (
  <div>
    <p className='tb:font-title2-bold font-title3-bold text-gray-900 mb-10'>
      어떤 목표에
      <br className='block tb:hidden pc:hidden ' /> 할 일을 추가하시겠어요?
    </p>
    <div className='flex items-center gap-1'>
      <Flag type='chat' />
      <p className='tb:font-title3-bold font-caption-bold text-gray-600'>기존 목표</p>
    </div>
  </div>
);

export default ChatModalMainHeader;
