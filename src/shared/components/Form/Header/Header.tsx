import useModal from '@/shared/hooks/useModal';

import Close from '../../Icons/Close/Close';
import GoalImg from '../../Icons/GoalImg/GoalImg';

interface HeaderProps {
  title: string;
  goal: string;
}

const Header = ({ title, goal }: HeaderProps) => {
  const { closeModal } = useModal();

  return (
    <header className='pb-6 base-horizon'>
      <div className='flex justify-between items-center mb-3'>
        <h1 className='font-bold text-2xl '>{title}</h1>
        <button type='button' className='cursor-pointer' onClick={closeModal}>
          <Close />
        </button>
      </div>
      <div className='font-body3-semibold text-[var(--color-gray-500)] flex gap-2 items-center  '>
        <GoalImg />
        {goal}
      </div>
    </header>
  );
};

export default Header;
