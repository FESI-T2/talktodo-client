'use client';
import { useMutation } from '@tanstack/react-query';

import { useState } from 'react';

import { useStepContext } from '@/chat/provider/StepProvider';
import { Message } from '@/chat/types';

import { sendToLex } from '../service/sendToLex';

const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const { goToNextStep } = useStepContext();

  const handleMessage = (newMessage: Message) => {
    setMessages((prev) => [...prev, newMessage]);
  };

  const { mutate, isPending } = useMutation({
    mutationFn: (text: string) => sendToLex(text, 'user'),
    onMutate: async (text) => {
      handleMessage({
        message: text,
        role: 'user',
        temp: false,
      });

      // 로딩 처리를 위한 임시 메시지 추가
      handleMessage({
        message: '채팅을 작성 중 입니다...',
        role: 'assistant',
        temp: true,
      });
    },
    onSuccess: (data) => {
      const [plainTextMsg, customPayloadMsg] = data.messages ?? [];

      if (plainTextMsg?.contentType === 'PlainText') {
        setMessages((prev) => prev.filter((msg) => !(msg.temp && msg.role === 'assistant')));

        handleMessage({
          message: plainTextMsg.content!,
          role: 'assistant',
          temp: false,
        });
      }

      if (customPayloadMsg?.contentType === 'CustomPayload') {
        console.log(customPayloadMsg.content);
        goToNextStep();
      }
    },
    onError: (error) => {
      console.error(error);
      setMessages((prev) => prev.filter((msg) => !(msg.temp && msg.role === 'assistant')));
      handleMessage({
        message: '문제가 발생했어요. 다시 시도해줘!',
        role: 'assistant',
        temp: false,
      });
    },
  });

  return {
    messages,
    sendMessage: (text: string) => mutate(text),
    isPending,
  };
};
export default useChat;
