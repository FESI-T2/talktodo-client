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
    onSuccess: (data, variables) => {
      handleMessage({
        message: variables,
        role: 'user',
      });

      if (data.messages) {
        const { content, contentType } = data.messages[0];
        if (contentType === 'PlainText') {
          handleMessage({
            message: content!,
            role: 'assistant',
          });
        }
      }
    },
    onError: (error) => {
      console.error('에러가 발생했습니다.', error);
    },
  });

  return {
    messages,
    sendMessage: (text: string) => mutate(text),
    isPending,
  };
};
export default useChat;
