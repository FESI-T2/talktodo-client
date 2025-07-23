import SvgIconFlag from 'public/icon/Flag';

export default function SidebarPanel({ isFold, goals, type }: { isFold: boolean; goals: string[]; type: 'PC' | 'Mobile' }) {
  if (type === 'PC') {
    return (
      <div className='w-full'>
        <div className={`flex gap-1 items-center cursor-pointer  ${isFold ? 'justify-center' : 'mb-3'}`}>
          <div className='w-10 h-10 flex items-center justify-center'>
            <SvgIconFlag type='PC' />
          </div>
          {!isFold && <span className='text-gray-900 font-body1-semibold'>목표</span>}
        </div>
        <div className='flex flex-col'>
          {!isFold &&
            goals.map((goal) => (
              <button key={goal} className='flex w-[230px] pl-0 pr-3 h-[43px] py-2 items-center gap-3 cursor-pointer'>
                <span className='text-gray-500 font-body2-regular tracking-[-0.32px] hover:text-purple-600'>{goal}</span>
              </button>
            ))}
        </div>
      </div>
    );
  }

  if (type === 'Mobile' && !isFold) {
    return (
      <button className='flex items-center justify-start w-full h-10 cursor-pointer'>
        <SvgIconFlag type='Mobile' />
        <span className='text-gray-900 font-body1-semibold ml-2'>목표</span>
      </button>
    );
  }

  return null;
}
