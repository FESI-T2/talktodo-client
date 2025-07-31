import ChatContent from '@/chat/components/ChatContent/ChatContent';
import ChatHeader from '@/chat/components/ChatHeader/ChatHeader';
import ChatInput from '@/chat/components/ChatInput/ChatInput';
import { StepHelpers } from '@/chat/types/chatPage';

interface NewGoalMainProps extends StepHelpers {
  onSendMessage: (message: string) => void;
}

const NewGoalMain = ({ reset, onSendMessage }: NewGoalMainProps) => {
  return (
    <div className='flex flex-col items-center'>
      <ChatHeader isNew={true} onClick={reset} />
      <ChatContent />
      <ChatInput onClick={onSendMessage} />
    </div>
  );
};

export default NewGoalMain;
