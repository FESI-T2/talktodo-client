import { StepHelpers } from '@/chat/types/chatPage';

import ChatModal from '../components/ChatModal/ChatModal';

const NewGoalResult = ({ goToPrevStep, reset }: StepHelpers) => {
  const handleSaveTodos = () => {
    console.log('할 일들을 저장합니다');
    alert('할 일이 성공적으로 추가되었습니다!');
    reset();
  };

  return (
    <div className='flex flex-col items-center gap-[30px]'>
      <p className='font-title1-bold text-white'>목표에 추가할 할 일을 정리했어요!</p>
      <ChatModal onClickPrimary={handleSaveTodos} onClickSecondary={goToPrevStep} type='result' />
    </div>
  );
};

export default NewGoalResult;
