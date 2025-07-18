import SvgIconCompleted from '../Icons/Completed';
import SvgIconInCompleted from '../Icons/InCompleted';
import ProgressBar from './_components/ProgressBar';

interface MainHeaderProps {
  percent: number;
  totalTodo: number;
  IncompleteTodo: number;
  completedTodo: number;
}

const MainHeader = ({ percent = 0, totalTodo = 0, IncompleteTodo = 0, completedTodo = 0 }: MainHeaderProps) => {
  const todoItems = [
    { value: totalTodo, label: '총 일정', w: '' },
    { value: IncompleteTodo, label: '미완료', w: '' },
    { value: completedTodo, label: '완료', w: 'w-11' },
  ];

  return (
    <div className='flex items-start justify-between w-[1168px] pt-7 px-11 pb-11 rounded-[40px] bg-purple-500'>
      <div className='flex flex-col gap-11 w-[860px]'>
        <div className='flex justify-between'>
          <p className='font-title1-bold text-purple-300'>
            오늘
            <br />
            {percent === 100 ? (
              <span className='font-title1-bold text-white'>할 일을 모두 완료했어요!</span>
            ) : (
              <>
                <span className='font-title1-bold text-white'>총 {totalTodo}건</span>
                <span>의 할 일이 있어요</span>
              </>
            )}
          </p>

          <div className='flex items-center gap-5'>
            {todoItems.map((item) => (
              <div key={item.label} className={`${item.w} flex flex-col items-center gap-1`}>
                <div className='text-center text-white font-count'>{item.value}</div>
                <div className='text-center text-purple-200 text-base font-body2-medium'>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
        <ProgressBar percent={percent} />
      </div>
      <div data-size='L' data-state='Default' className='flex justify-end items-end w-44 h-48 relative overflow-hidden'>
        {percent !== 100 ? <SvgIconInCompleted /> : <SvgIconCompleted />}
      </div>
    </div>
  );
};

export default MainHeader;
