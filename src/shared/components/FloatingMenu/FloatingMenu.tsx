'use client';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import React, { useState, useCallback } from 'react';

import FloatingActionButton from '@/shared/components/FloatingActionButton/FloatingActionButton';

import MenuButton from './MenuButton/MenuButton';

const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((v) => !v), []);

  const router = useRouter();

  const handleAiTodoClick = () => {
    router.push('/chat');
  };

  return (
    <div
      className='fixed z-10 bottom-[30px] right-[25px] flex flex-col justify-end items-end duration-200'
      onMouseEnter={open}
      onMouseLeave={close}
      onFocusCapture={open}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) close();
      }}
    >
      {isOpen && (
        <div className='  mb-[13px] '>
          <motion.div
            className='bg-white rounded-xl flex p-2 flex-col items-center justify-center shadow-[0px_0px_20px_0px_rgba(52,35,101,0.15)] z-20 static pc:absolute pc:bottom-[40px] pc:right-[54px] '
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <MenuButton
              handleClick={() => {
                alert('할 일 추가하기는 아직 구현되지 않았습니다.');
              }}
            >
              할 일 직접 추가하기
            </MenuButton>
            <MenuButton handleClick={handleAiTodoClick}>
              <span className='mr-2 px-2 py-1 bg-purple-50 text-purple-400 group-hover:bg-purple-400  group-hover:text-white rounded-[8px] font-body3-bold'>
                AI
              </span>
              할 일 정리하기
            </MenuButton>
          </motion.div>
        </div>
      )}
      <FloatingActionButton handleClick={toggle} />
    </div>
  );
};

export default FloatingMenu;
