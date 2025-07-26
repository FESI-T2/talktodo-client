import LabelPriority from '@/task/components/common/LabelPriority/LabelPriority';

type PriorityType = '중요' | '보통' | '낮음';

interface DropdownOptions {
  options: string[];
  size?: 'S' | 'M' | 'L';
  type?: 'default' | 'priority';
  onSelect?: (value: PriorityType) => void;
}

const Dropdown = ({ options, size = 'M', type = 'default', onSelect }: DropdownOptions) => {
  return (
    <div
      className={`bg-white rounded-xl flex py-1 flex-col items-center ${size === 'S' ? 'w-[90px]' : size === 'M' ? 'w-[106px]' : 'w-[182px]'} shadow-[4px_4px_10px_-2px_rgba(0,0,0,0.05)] shadow-[0px_0px_20px_0px_rgba(52,35,101,0.15)]`}
    >
      {options.map((opt, index) => (
        <button
          type='button'
          key={index}
          className={`flex justify-center items-center 
                font-body1-regular text-gray-700 cursor-pointer 
                ${
                  size === 'S'
                    ? 'w-[90px] p-4 font-body2-regular tracking-[-0.32px]'
                    : size === 'M'
                      ? 'w-[106px] py-3 px-4 font-body1-regular tracking-[-0.36px]'
                      : 'w-[182px] py-3 px-4 flex flex-col font-body2-regular items-start rounded-xl'
                }
                hover:bg-gray-100 active:bg-gray-300 rounded-lg transition-colors duration-200`}
          onClick={() => {
            onSelect?.(opt as PriorityType);
          }}
        >
          {type === 'default' && opt}
          {type === 'priority' && <LabelPriority priority={opt as PriorityType} size={'L'} />}
        </button>
      ))}
    </div>
  );
};

export default Dropdown;
