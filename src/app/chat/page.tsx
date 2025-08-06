import ChatContainer from '@/chat/components/ChatContainer/ChatContainer';
import SSRSafeSuspense from '@/chat/components/SSRSafeSuspense/SSRSafeSuspense';
import Loading from '@/shared/components/Loading/Loading';
import ErrorBoundary from '@/shared/error/ErrorBoundary';

const ChatPage = () => {
  return (
    <div className='min-h-screen gradient-bg h-full overflow-y-scroll flex items-center justify-center w-full'>
      <ErrorBoundary level='toast'>
        <SSRSafeSuspense fallback={<Loading />}>
          <ChatContainer />
        </SSRSafeSuspense>
      </ErrorBoundary>
    </div>
  );
};

export default ChatPage;
