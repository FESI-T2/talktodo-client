import { Suspense } from 'react';

import ChatContainer from '@/chat/components/ChatContainer/ChatContainer';
import Loading from '@/shared/components/Loading/Loading';

const ChatPage = () => {
  if (process.env.NODE_ENV === 'production') return;
  return (
    <Suspense fallback={<Loading />}>
      <div className='min-h-screen gradient-bg h-full overflow-y-scroll flex items-center justify-center w-full'>
        <ChatContainer />
      </div>
    </Suspense>
  );
};

export default ChatPage;
