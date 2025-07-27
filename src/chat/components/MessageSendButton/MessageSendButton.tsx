import Send from '@/shared/components/Icons/Send/Send';

interface MessageSendButtonProps {
  active?: boolean;
}

const MessageSendButton = ({ active }: MessageSendButtonProps) => {
  return (
    <div
      className={`${active ? 'bg-gray-900' : 'bg-gray-300'}
  flex w-[56px] h-[56px] justify-center items-center rounded-full cursor-pointer`}
    >
      <Send />
    </div>
  );
};

export default MessageSendButton;
