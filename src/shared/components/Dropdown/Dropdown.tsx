import { Priority } from '@/shared/types/prioity';
import LabelPriority from '@/task/components/common/LabelPriority/LabelPriority';
interface DropdownOptions {
  options: string[];
  size?: 'S' | 'M' | 'L';
  type?: 'default' | 'priority';
  onSelect?: (value: Priority) => void;
}

const Dropdown = ({ options, size = 'M', type = 'default', onSelect }: DropdownOptions) => {
  return (
    <div
      className={`bg-white rounded-xl flex mt-[18px] py-1 shadow-dropdown flex-col items-center ${size === 'S' ? 'w-[90px]' : size === 'M' ? 'w-[106px]' : 'w-[182px]'}shadow-[0px_0px_20px_0px_rgba(52,35,101,0.15)]`}
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
            onSelect?.(opt as Priority);
          }}
        >
          {type === 'default' && opt}
          {type === 'priority' && <LabelPriority priority={opt as Priority} size={'L'} />}
        </button>
      ))}
    </div>
  );
};

export default Dropdown;
