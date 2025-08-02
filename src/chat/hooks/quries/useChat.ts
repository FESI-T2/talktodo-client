'use client';
import { useMutation } from '@tanstack/react-query';

import { useEffect, useState } from 'react';

import { Message } from '@/chat/types';

import { sendToLex } from '../service/sendToLex';
import useStepAcion from '../useStepAcion';

const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const { goToNextStep } = useStepAcion();

  useEffect(() => {
    console.log(messages);
  }, [messages]);

  const sendMessage = useMutation({
    mutationFn: (text: string) => sendToLex(text, 'user'),
    onSuccess: (data, variables) => {
      setMessages((prev) => [
        ...prev,
        {
          message: variables,
          role: 'user',
        },
      ]);

      if (data.messages) {
        const { content, contentType } = data.messages[0];
        if (contentType === 'PlainText') {
          setMessages((prev) => [
            ...prev,
            {
              message: content!,
              role: 'assistant',
            },
          ]);
        }
        if (contentType === 'CustomPayload') {
          goToNextStep();
        }
      }
    },
    onError: (error) => {
      console.error('Error sending message to Lex:', error);
    },
  });

  return {
    messages,
    sendMessage: (text: string) => sendMessage.mutate(text),
  };
};
export default useChat;
