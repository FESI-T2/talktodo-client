import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';

import { useForm, useWatch } from 'react-hook-form';

import { validation, FormData } from '@/chat/utils/validation';

import { TextArea, MessageSendButton } from './index';

interface ChatFormProps {
  onSendMessage: (message: string) => void;
}

const ChatForm = ({ onSendMessage }: ChatFormProps) => {
  const { register, handleSubmit, control, getValues } = useForm<FormData>({
    resolver: zodResolver(validation),
  });

  const message = useWatch({
    control: control,
    name: 'message',
  });

  const onSubmit = (data: FormData) => {
    onSendMessage(data.message);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      const value = getValues('message');
      if (value.trim()) {
        handleSubmit(onSubmit)();
      }
    }
  };

  return (
    <form
      className={'flex items-start gap-3 justify-center rounded-[28px] bg-white p-6 w-full tb:h-[180px] h-[120px] mb-[40px]'}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextArea {...register('message')} placeholder='할 일을 입력해주세요' onKeyDown={handleKeyDown} />
      <MessageSendButton active={!!message} />
    </form>
  );
};

export default ChatForm;
