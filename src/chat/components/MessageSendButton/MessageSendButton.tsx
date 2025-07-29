import Send from '@/shared/components/Icons/Send/Send';

interface MessageSendButtonProps {
  active?: boolean;
  onClick?: () => void;
}

const MessageSendButton = ({ active, onClick }: MessageSendButtonProps) => {
  return (
    <button
      type='button'
      aria-label='메시지 전송'
      className={`${active ? 'bg-gray-900' : 'bg-gray-300'}
  flex w-[56px] h-[56px] justify-center items-center rounded-full cursor-pointer`}
      onClick={onClick}
    >
      <Send />
    </button>
  );
};

export default MessageSendButton;
