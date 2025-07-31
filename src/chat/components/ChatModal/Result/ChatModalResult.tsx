'use client';

import ChatModalMainButtonContainer from '@/chat/components/ChatModal/ChatModalButtonContainer';

import ChatModalResultHeaderContainer from '@/chat/components/ChatModal/Result/ChatModalResultHeaderContainer';

import ChatModalResultTabContentContainer from '@/chat/components/ChatModal/Result/ChatModalResultTabContentContainer';

interface ChatModalResultProps {
  onClickPrimary?: () => void;
  onClickSecondary?: () => void;
}

const ChatModalResult = ({ onClickPrimary, onClickSecondary }: ChatModalResultProps) => {
  return (
    <div
      className='
        flex flex-col items-start rounded-4xl
        border border-solid border-gray-200
        bg-white shadow-[0_0_40px_0_rgba(52,35,101,0.15)]
        tb:px-8 tb:pt-10 tb:pb-12 tb:gap-5
        px-5 py-6 gap-4
      '
    >
      <ChatModalResultHeaderContainer />
      <ChatModalResultTabContentContainer />
      <ChatModalMainButtonContainer onClickPrimary={onClickPrimary} onClickSecondary={onClickSecondary} type='result' />
    </div>
  );
};

export default ChatModalResult;
