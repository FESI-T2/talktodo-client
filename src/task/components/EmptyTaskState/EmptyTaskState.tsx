type Mode = 'todo' | 'done';

interface EmptyTaskStateProps {
  mode: Mode;
}

const copyByMode: Record<Mode, { icon: string; description: string }> = {
  todo: {
    icon: '/icon/TODO_.svg',
    description: '할 일을 모두 완료했어요',
  },
  done: {
    icon: '/icon/DONE_.svg',
    description: '아직 완료된 할 일이 없어요',
  },
};

export default function EmptyTaskState({ mode }: EmptyTaskStateProps) {
  const { icon, description } = copyByMode[mode];
  return (
    <div className='flex justify-center h-full max-h-[440px] min-h-[200px]'>
      <div className='flex flex-col justify-center items-center gap-6'>
        <img src={icon} alt={`${mode} icon`} className='mix-blend-luminosity opacity-30 aspect-w-1 aspect-h-1' />
        <p className='font-body1-semibold text-gray-500 text-center'>{description}</p>
      </div>
    </div>
  );
}
