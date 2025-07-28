import SvgIconPlus from '@/icons/Plus/Plus';

export default function NewGoalButton({ isFold }: { isFold: boolean }) {
  return !isFold ? (
    <button className='flex items-center justify-center gap-2 mt-6 py-3 pl-7 pr-8 rounded-[12px] cursor-pointer bg-white border-[1.5px] border-purple-400 hover:bg-purple-50 active:bg-purple-100 transition-colors duration-200'>
      <SvgIconPlus />
      <span className='text-purple-500 font-body2-semibold'>새 목표</span>
    </button>
  ) : (
    <button className='flex items-center justify-center mt-6 p-[10px] rounded-[12px] cursor-pointer bg-white border-[1.5px] border-purple-400 hover:bg-purple-50 active:bg-purple-100 transition-colors duration-200'>
      <SvgIconPlus />
    </button>
  );
}
