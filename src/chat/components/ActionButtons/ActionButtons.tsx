import Button from '@/shared/components/Button/Button';

interface ActionButtonsProps {
  onClickRightButton: () => void;
  onClickLeftButton: () => void;
  leftButtonText?: string;
  rightButtonText?: string;
}

const ActionButtons = ({ onClickRightButton, onClickLeftButton, leftButtonText, rightButtonText }: ActionButtonsProps) => (
  <div className='flex gap-3 justify-between w-full tb:flex-nowrap flex-wrap  font-body1-bold  tb:font-body2-bold'>
    <Button variant='secondary' type='button' onClick={onClickLeftButton} className='flex-1/2  h-[50px] tb:h-[60px] rounded-2xl '>
      {leftButtonText}
    </Button>
    <Button variant='primary' type='button' onClick={onClickRightButton} className='flex-1/2  h-[50px] tb:h-[60px] rounded-2xl'>
      {rightButtonText}
    </Button>
  </div>
);

export default ActionButtons;
