export default function DailyTimeline() {
  const hours = Array.from({ length: 25 }, (_, i) => `${i.toString().padStart(2, '0')}:00`);
  return (
    <div className='w-full max-w-[1168px] flex flex-col items-center gap-4 self-stretch'>
      <div className='w-full overflow-x-auto flex self-stretch gap-[74px]'>
        {hours.map((time, idx) => (
          <div key={idx} className='flex flex-col items-center'>
            <div className='flex items-center font-body2-regular text-gray-500'>{time}</div>
            <div className='mt-4 w-[1px] min-h-[480px] max-h-lvw bg-[repeating-linear-gradient(to_bottom,_#ccc_0,_#ccc_4px,_transparent_4px,_transparent_8px)]' />
          </div>
        ))}
      </div>
    </div>
  );
}
