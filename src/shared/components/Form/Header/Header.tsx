import GoalImg from '../../Icons/GoalImg/GoalImg';

interface HeaderProps {
  title: string;
  goal: string;
}

const Header = ({ title, goal }: HeaderProps) => {
  return (
    <header>
      <h1 className='font-bold text-2xl mb-3'>{title}</h1>
      <p className='font-body3-semibold text-[var(--color-gray-500)] flex gap-2 items-center mb-6 '>
        <GoalImg />
        {goal}
      </p>
    </header>
  );
};

export default Header;
