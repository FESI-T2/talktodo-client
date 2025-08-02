'use client';

interface GoalSelectItemProps {
  goalTitle: string;
  taskCount: number;
  active?: boolean;
  onClick?: () => void;
}

const GoalSelectItem = ({ goalTitle, taskCount, active = false, onClick }: GoalSelectItemProps) => {
  return (
    <button
      aria-pressed={active}
      onClick={onClick}
      className={`flex flex-col items-start justify-center border-solid rounded-2xl cursor-pointer
  
        w-full max-h-[88px] p-4 gap-1
        ${active ? 'bg-purple-50 border-2 border-purple-500' : 'bg-white border border-gray-200'}
        ${active ? 'text-purple-500' : 'text-gray-900'}`}
    >
      <p className={`tb:font-body1-semibold font-body2-semibold`}>{goalTitle}</p>
      <p className={`${active ? 'text-purple-400' : 'text-gray-500'} tb:font-body2-medium-tight font-body3-medium-tight`}>
        {taskCount}개의 할일
      </p>
    </button>
  );
};

export default GoalSelectItem;
