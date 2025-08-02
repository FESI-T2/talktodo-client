import Send from '@/shared/components/Icons/Send/Send';
import { cn } from '@/shared/utils/cn';

interface MessageSendButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

const MessageSendButton = ({ active }: MessageSendButtonProps) => {
  const isActiveStyle = active ? 'bg-gray-900' : 'bg-gray-300';

  return (
    <button
      type='submit'
      aria-label='메시지 전송'
      className={cn(isActiveStyle, 'flex w-[56px] h-[56px] justify-center items-center rounded-full cursor-pointer')}
      disabled={!active}
    >
      <Send />
    </button>
  );
};

export default MessageSendButton;
