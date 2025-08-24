import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import { ChatMessageProps as ChatMessageContainerProps, ChatMessageRole } from '@/chat/components/Step/ChatRoom/types';

import { cn } from '@/shared/utils/cn';

interface StyleElement {
  bg: string;
  text: string;
  position: string;
}

const chatMessageStyles: Record<ChatMessageRole, StyleElement> = {
  user: {
    bg: 'bg-purple-600 px-6',
    text: 'text-white font-body3-medium-loose tb:font-body2-medium-loose pc:font-body2-medium-loose',
    position: 'justify-end',
  },
  assistant: {
    bg: 'bg-none px-0',
    text: 'text-white font-body2-bold tb:font-title3-bold pc:font-title3-bold',
    position: 'justify-start',
  },
} as const;

const ChatMessage = ({ message, role }: ChatMessageContainerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(`flex items-center gap-6`, chatMessageStyles[role].position)}
    >
      {role === 'assistant' && <Image src='/img/InCompletedCharacter.png' alt='Chat Character' width={64} height={64} />}
      <div className={cn('max-w-[600px] w-fit flex items-center gap-3 p-4 rounded-3xl', chatMessageStyles[role].bg)}>
        <p className={cn('text-white break-all', chatMessageStyles[role].text)}>{message}</p>
      </div>
    </motion.div>
  );
};

export default ChatMessage;
