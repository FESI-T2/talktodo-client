const ProgressBar = ({ percent = 0 }) => {
  // 0~100으로 제한
  const clampedPercent = Math.max(0, Math.min(100, percent));
  // 최소, 최대 길이 보정값 설정
  const minWidthPercent = 2;
  const maxWidthPercent = 100;

  // 퍼센트에 따라 width 설정
  let barWidth = 0;
  if (clampedPercent === 0) {
    barWidth = minWidthPercent;
  } else if (clampedPercent === 100) {
    barWidth = maxWidthPercent;
  } else {
    // 1~99 사이: 퍼센트를 min, max 사이로 보정
    barWidth = minWidthPercent + (clampedPercent / 100) * (maxWidthPercent - minWidthPercent);
  }

  return (
    <div className='flex flex-col gap-3 w-full'>
      <div className='flex gap-2 items-center mb-1'>
        <p className='text-center text-purple-300 font-body2-medium'>오늘의 진행률</p>
        <p className='text-center text-white font-body2-bold'>{clampedPercent}%</p>
      </div>
      <div className='relative h-5 w-full'>
        {/* 바 배경 */}
        <div className='absolute w-full h-4.5 rounded-full bg-purple-700' />
        {/* 진행률 바 */}
        <div
          className='absolute h-4.5 rounded-full bg-gradient-to-r from-[#E0CDFC] to-[#FFF]'
          style={{ width: `${barWidth}%`, zIndex: 2 }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
