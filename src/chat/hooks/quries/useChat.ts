'use client';
import { useMutation } from '@tanstack/react-query';

import { useEffect, useState } from 'react';

import { Message } from '@/chat/types';

import { sendToLex } from '../service/sendToLex';

const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    console.log(messages);
  }, [messages]);

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

      handleMessage({
        message: '채팅을 작성 중 입니다...',
        role: 'assistant',
        temp: true,
      });
    },
    onSuccess: (data) => {
      if (data.messages) {
        const { content, contentType } = data.messages[0];
        if (contentType === 'PlainText') {
          setMessages((prev) => prev.filter((msg) => !(msg.temp && msg.role === 'assistant')));

          handleMessage({
            message: content!,
            role: 'assistant',
            temp: false,
          });
        }
      }
    },
    onError: () => {
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
