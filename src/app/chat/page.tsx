import ChatContainer from '@/chat/components/ChatContainer/ChatContainer';
import { StepProvider } from '@/chat/provider/StepProvider';

const ChatPage = () => {
  return (
    <div className='min-h-screen gradient-bg h-full overflow-y-scroll flex items-center justify-center w-full'>
      <StepProvider>
        <ChatContainer />
      </StepProvider>
    </div>
  );
};

export default ChatPage;
