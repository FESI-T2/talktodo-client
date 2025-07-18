import SvgIconKebab from '../Icons/Kebab';
import ProgressBar from './_components/ProgressBar';

interface DetailHeaderProps {
  percent: number;
  category: string;
  IncompleteTodo: number;
  completedTodo: number;
}

const DetailHeader = ({ percent = 0, category = '', IncompleteTodo = 0, completedTodo = 0 }: DetailHeaderProps) => {
  const todoItems = [
    { value: IncompleteTodo, label: '미완료' },
    { value: completedTodo, label: '완료' },
  ];

  return (
    <div className='flex items-start justify-between w-[1168px] pt-7 px-11 pb-11 rounded-[40px] bg-purple-500'>
      <div className='flex flex-col gap-11 w-full'>
        <div className='flex justify-between'>
          <span className='font-title1-bold text-white'>{category}</span>
          <div className='flex items-center divide-x divide-purple-400'>
            {todoItems.map((item) => (
              <div key={item.label} className={`flex flex-col items-center gap-1 px-5 `}>
                <div className='text-center text-white font-count'>{item.value}</div>
                <div className='text-center text-purple-200 text-base font-body2-medium'>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className='flex items-end gap-4'>
          <ProgressBar percent={percent} />
          <div data-size='L' data-state='Default' className='w-10 h-10 inline-flex justify-center items-end overflow-hidden'>
            <SvgIconKebab />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailHeader;
