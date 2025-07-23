import SvgIconFlag from 'public/icon/Flag';
import SvgIconFoldLeft from 'public/icon/FoldLeft';
import SvgIconFoldRight from 'public/icon/FoldRight';
import SvgIconHome from 'public/icon/Home';
import SvgIconMainLogo from 'public/icon/MainLogo';
import SvgIconPlus from 'public/icon/Plus';
import SvgIconProfile from 'public/icon/Profile';

const Separator = ({ top = 0, bottom = 0 }) => (
  <div
    className='w-full border-b border-gray-200'
    style={{
      marginTop: top ? `${top * 0.25}rem` : undefined,
      marginBottom: bottom ? `${bottom * 0.25}rem` : undefined,
    }}
  />
);

const NewGoalButton = ({ isFold }: { isFold: boolean }) =>
  !isFold ? (
    <button className='flex items-center justify-center gap-2 mt-6 py-3 pl-7 pr-8 rounded-[12px] cursor-pointer bg-white border-[1.5px] border-purple-400 hover:bg-purple-50 active:bg-purple-100 transition-colors duration-200'>
      <SvgIconPlus />
      <span className='text-purple-500 font-body2-semibold'>새 목표</span>
    </button>
  ) : (
    <button className='flex items-center justify-center mt-6 p-[10px] rounded-[12px] cursor-pointer bg-white border-[1.5px] border-purple-400 hover:bg-purple-50 active:bg-purple-100 transition-colors duration-200'>
      <SvgIconPlus />
    </button>
  );

interface SideBarProps {
  isFold: boolean;
  onFoldToggle: () => void;
  userNickname: string;
  userEmail: string;
  goals: string[];
}

const SideBar = ({ isFold, onFoldToggle, userNickname, userEmail, goals }: SideBarProps) => (
  <aside
    className={`box-border h-screen max-h-[1040px] bg-white rounded-[20px] shadow-[0px_0px_12px_0px_rgba(235,235,235,1.00)]
    inline-flex flex-col justify-between items-center
    transition-all duration-300
    ${isFold ? 'w-20' : 'w-64'}
    overflow-visible
  `}
  >
    {/* content */}
    <div className='box-border w-full p-5 flex flex-col'>
      {/* 1. 헤더 */}
      <div className={`pb-5 flex self-stretch items-center justify-between ${isFold ? 'justify-center' : ''}`}>
        <button className='cursor-pointer flex items-center justify-center'>
          <SvgIconMainLogo />
        </button>
        <button className='cursor-pointer relative' onClick={onFoldToggle}>
          {!isFold && <SvgIconFoldLeft />}

          {isFold && (
            <div className='flex w-10 h-10 justify-center items-center aspect-square absolute right-[-46px] top-[-20px] rounded-full border-2 border-gray-200 bg-white shadow-[0px_0px_12px_0px_rgba(235,235,235,1.00)]'>
              <SvgIconFoldRight />
            </div>
          )}
        </button>
      </div>
      <Separator bottom={4} />

      {/* 2. 네비 */}
      <div className='flex items-center gap-2.5'>
        <button className={`flex items-center ${isFold ? 'justify-center' : 'border-l-4 border-purple-600 pl-1'} cursor-pointer w-full`}>
          <SvgIconHome />
          {!isFold && <span className='text-purple-600 font-body1-semibold ml-1'>대시보드</span>}
        </button>
      </div>
      <div className='flex'></div>
      <Separator top={4} bottom={4} />

      {/* 3. 사이드바 패널 */}
      <>
        <div className={`flex gap-1 items-center cursor-pointer  ${isFold ? 'justify-center' : 'mb-3'}`}>
          <div className='w-10 h-10 flex items-center justify-center'>
            <SvgIconFlag />
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
      </>
      <NewGoalButton isFold={isFold} />
    </div>
    {/* 4. 프로필 (하단) */}
    <div className='w-full px-5 pb-6'>
      <Separator bottom={4} />
      <div className='flex items-center gap-3 justify-center'>
        <SvgIconProfile />
        {!isFold && (
          <div className='flex flex-col items-start self-stretch'>
            <span className='text-gray-900 font-body3-semibold'>{userNickname}</span>
            <span className='text-gray-600 font-body3-medium'>{userEmail}</span>
          </div>
        )}
      </div>
    </div>
  </aside>
);

export default SideBar;
