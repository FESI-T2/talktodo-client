'use client';

interface GoalSelectItemProps {
  goalTitle: string;
  active?: boolean;
  onClick?: () => void;
}

const GoalSelectItem = ({ goalTitle, active = false, onClick }: GoalSelectItemProps) => {
  return (
    <button
      aria-pressed={active}
      onClick={onClick}
      className={`flex flex-col items-start justify-center border-solid rounded-2xl cursor-pointer px-6 py-5
  
        w-full max-h-[88px] p-4 gap-1
        ${active ? 'bg-purple-50 border-2 border-purple-500' : 'bg-white border border-gray-200'}
        ${active ? 'text-purple-500' : 'text-gray-900'}`}
    >
      <p className={`tb:font-body1-semibold font-body2-semibold`}>{goalTitle}</p>
    </button>
  );
};

export default GoalSelectItem;
