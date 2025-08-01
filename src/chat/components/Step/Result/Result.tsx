import { useAlert } from '@/shared/hooks/useAlert';

import ActionButtons from '../../ActionButtons/ActionButtons';
import { ResultHeader, ResultWrapper, ResultTable } from '../Result/components/index';

interface ResultProps {
  goToPrevStep: () => void;
}

const Result = ({ goToPrevStep }: ResultProps) => {
  const { openAlert } = useAlert();

  const handleSaveTodos = () => {
    console.log('할 일들을 저장합니다');
    openAlert({ message: '할 일이 성공적으로 추가되었습니다!', handleClick: () => console.log('Alert Clicked') });
  };

  return (
    <div className='flex flex-col items-center max-w-[902px] w-[90%]  justify-center'>
      <ResultWrapper>
        <ResultHeader />
        <ResultTable />
        <ActionButtons
          onClickLeftButton={goToPrevStep}
          onClickRightButton={handleSaveTodos}
          leftButtonText='다시 얘기하기'
          rightButtonText='할 일 저장하기'
        />
      </ResultWrapper>
    </div>
  );
};

export default Result;
