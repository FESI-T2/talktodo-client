import SvgIconHome from '../../../Icons/Home/Home';

export default function SidebarNavigation({ isFold, type }: { isFold: boolean; type: 'PC' | 'Mobile' }) {
  if (type === 'PC') {
    return (
      <div className='w-full flex items-center gap-2.5'>
        <button className={`flex items-center ${isFold ? 'justify-center' : 'border-l-4 border-purple-600 pl-1'} cursor-pointer w-full`}>
          <SvgIconHome type='PC' />
          {!isFold && <span className='text-purple-600 font-body1-semibold ml-1'>대시보드</span>}
        </button>
      </div>
    );
  }
  if (type === 'Mobile' && !isFold) {
    return (
      <button className='flex items-center justify-start w-full h-10 cursor-pointer'>
        <SvgIconHome type='Mobile' />
        <span className='text-gray-900 font-body1-semibold ml-2'>대시보드</span>
      </button>
    );
  }
}
