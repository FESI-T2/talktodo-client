import { ProgressViewModel } from './hooks/ProgressViewModel';

type ProgressBarProps = {
  viewModel: ProgressViewModel;
};

export default function ProgressBar({ viewModel }: ProgressBarProps) {
  return (
    <div className='flex md:w-[360px] w-[204px] flex-col items-start gap-2'>
      <div className='flex items-center gap-1'>
        <div className='text-purple-600 font-body3-semibold md:font-body2-bold'>{viewModel.label.doneText}</div>
        <div className='md:text-gray-400 font-body3-semibold md:font-body2-semibold'>{viewModel.label.totalText}</div>
      </div>
      <div className='flex md:h-4 h-3 items-center self-stretch rounded-[100px] bg-gray-200'>
        <div
          className=' md:h-4 h-3 bg-linear-to-r from-[#E0CDFC] to-[#8F3FFF] rounded-[100px]'
          style={{ width: `${viewModel.progress}%` }}
        />
      </div>
    </div>
  );
}
