import { motion } from 'framer-motion';
import React from 'react';

import { AlertProps } from './Alert.type';
import Button from '../Button/Button';
import AlertIcon from '../Icons/Alert/Alert';

const Alert = ({ message, handleClick }: AlertProps) => {
  return (
    <motion.div
      className='max-w-[800px] w-[90%] h-[65px] py-3 pr-3 pl-5 flex gap-2 bg-purple-100 rounded-2xl items-center m-auto '
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: -10 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <AlertIcon className='hidden mb:block ' />
      <span className='flex-1 font-body2-semibold text-purple-500 text-nowrap'>{message}</span>
      <Button className='max-w-[138px] h-[41px] px-5 py-3 font-body3-semibold text-white ' variant='primary' onClick={handleClick}>
        변경사항 저장하기
      </Button>
    </motion.div>
  );
};

export default Alert;
