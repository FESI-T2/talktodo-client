import React from 'react';

import { Alert as AlertType } from './AlertSubject';
import Button from '../Button/Button';
import AlertIcon from '../Icons/Alert/Alert';

export type AlertProps = Omit<AlertType, 'id'>;

const Alert = ({ message, handleClick }: AlertProps) => {
  return (
    <div className='max-w-[800px] w-full h-[65px] py-3 pr-3 pl-5 flex gap-2 bg-purple-100 rounded-2xl items-center m-auto '>
      <AlertIcon className='hidden mb:block ' />
      <span className='flex-1 font-body2-semibold text-purple-500 text-nowrap'>{message}</span>
      <Button className='max-w-[138px] h-[41px] px-5 py-3 font-body3-semibold text-white ' variant='primary' onClick={handleClick}>
        변경사항 저장하기
      </Button>
    </div>
  );
};

export default Alert;
