import SidebarSeparator from '@/shared/components/layout/SideBar/_components/SidebarSeparator';

import { useAlert } from '@/shared/hooks/useAlert';

import ActionButtons from '../../ActionButtons/ActionButtons';
import { ResultHeader, ResultTabItem, ResultWrapper, ResultCategory } from '../Result/components/index';

const ITEM_COUNT = 3;

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
    <div className='flex flex-col items-center gap-[30px]'>
      <ResultWrapper>
        <ResultHeader />
        <div className='flex flex-col gap-5 items-center'>
          <ResultCategory />
          <div className='flex flex-col pc:h-[390px] tb:h-[570px] h-[435px]'>
            {Array.from({ length: ITEM_COUNT }).map((_, idx) => (
              <div key={idx}>
                <ResultTabItem />
                {idx < ITEM_COUNT - 1 && <SidebarSeparator top={4} bottom={4} />}
              </div>
            ))}
          </div>
        </div>
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
