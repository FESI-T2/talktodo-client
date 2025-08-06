import ChatContainer from '@/chat/components/ChatContainer/ChatContainer';

const ChatPage = () => {
  if (process.env.NODE_ENV === 'production') return;

  return (
    <div className='min-h-screen gradient-bg h-full overflow-y-scroll flex items-center justify-center w-full'>
      <ChatContainer />
    </div>
  );
};

export default ChatPage;
