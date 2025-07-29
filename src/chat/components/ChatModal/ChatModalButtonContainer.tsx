import Button from '@/shared/components/Button/Button';

interface Props {
  onClickPrimary?: () => void;
  onClickSecondary?: () => void;
  type?: 'main' | 'result';
}

const ChatModalButtonContainer = ({ onClickPrimary, onClickSecondary, type }: Props) => (
  <div className='flex tb:flex-row flex-col-reverse items-center justify-between w-full tb:gap-3 gap-2'>
    <Button
      variant='secondary'
      type='button'
      className='flex-1 tb:w-[266px] tb:h-[60px] w-[303px] h-[50px] rounded-2xl'
      onClick={onClickSecondary}
    >
      {type === 'main' ? '새로운 목표를 만들래요' : '다시 얘기하기'}
    </Button>
    <Button
      variant='primary'
      type='button'
      className='flex-1 tb:w-[266px] tb:h-[60px] w-[303px] h-[50px] rounded-2xl'
      onClick={onClickPrimary}
    >
      {type === 'main' ? '선택완료' : '할 일 추가하기'}
    </Button>
  </div>
);

export default ChatModalButtonContainer;
