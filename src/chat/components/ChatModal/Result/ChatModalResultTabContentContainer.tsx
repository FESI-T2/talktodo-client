import ChatModalResultTabContent from '@/chat/components/ChatModal/Result/ChatModalResultTabContent';
import ChatModalResultTabContentHeader from '@/chat/components/ChatModal/Result/ChatModalResultTabContentHeader';

const ChatModalResultTabContentContainer = () => (
  <div className='flex flex-col gap-5 items-center'>
    <ChatModalResultTabContentHeader />
    <ChatModalResultTabContent />
  </div>
);

export default ChatModalResultTabContentContainer;
