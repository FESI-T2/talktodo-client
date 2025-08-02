import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';

import { useForm, useWatch } from 'react-hook-form';

import { validation, FormData } from '@/chat/utils/validation';

import MessageSendButton from './MessageSendButton/MessageSendButton';
import TextArea from './TextArea/TextArea';

const ChatForm = () => {
  // const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
  //   if (e.key === 'Enter' && !e.shiftKey) {
  //     e.preventDefault();
  //     handleClick();
  //   }
  // };

  const { register, handleSubmit, control } = useForm<FormData>({
    resolver: zodResolver(validation),
  });

  const message = useWatch({
    control: control,
    name: 'message',
  });

  const onSubmit = (data: FormData) => {
    console.log(data.message);
  };

  return (
    <form
      className={'flex items-start gap-3 justify-center rounded-[28px] bg-white p-6 w-full tb:h-[180px] h-[120px] mb-[40px]'}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextArea {...register('message')} placeholder='할 일을 입력해주세요' />
      <MessageSendButton active={!!message} />
    </form>
  );
};

export default ChatForm;
