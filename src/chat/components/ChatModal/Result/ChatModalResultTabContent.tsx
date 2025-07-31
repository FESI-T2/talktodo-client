import ChatModalResultTabItem from '@/chat/components/ChatModal/Result/ChatModalResultTabItem';
import SidebarSeparator from '@/shared/components/layout/SideBar/_components/SidebarSeparator';

const itemsCount = 3; // 렌더링할 아이템 개수, 원하는 개수로 조절 가능

const ChatModalResultTabContent = () => {
  return (
    <div className='flex flex-col pc:h-[390px] tb:h-[570px] h-[435px]'>
      {Array.from({ length: itemsCount }).map((_, idx) => (
        <div key={idx}>
          <ChatModalResultTabItem />
          {idx < itemsCount - 1 && <SidebarSeparator top={4} bottom={4} />}
        </div>
      ))}
    </div>
  );
};

export default ChatModalResultTabContent;
