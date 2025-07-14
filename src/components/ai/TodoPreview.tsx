import { format, parseISO } from 'date-fns';
import { ko } from 'date-fns/locale';

interface TodoItem {
  id: string;
  title: string;
  date: string; // ISO string
}

interface TodoPreviewProps {
  todos: TodoItem[];
}

export default function TodoPreview({ todos }: TodoPreviewProps) {
  const grouped = todos.reduce<Record<string, TodoItem[]>>((acc, todo) => {
    const date = format(parseISO(todo.date), 'yyyy-MM-dd');
    acc[date] = acc[date] || [];
    acc[date].push(todo);
    return acc;
  }, {});

  const sortedDates = Object.keys(grouped).sort();

  return (
    <div className='mt-2 pt-2'>
      <div className='flex justify-between items-end mb-4'>
        {/* 왼쪽: 제목 + 일정 수 */}
        <div>
          <p className='text-lg font-semibold text-gray-900'>생성 예정 일정</p>
          <p className='text-sm text-gray-500 mt-1'>{todos.length}개의 일정</p>
        </div>

        {/* 오른쪽: 편집하기 버튼 */}
        <button
          className='text-sm text-gray-500 hover:text-black transition'
          onClick={() => {
            // TODO: 편집 로직
            alert('편집하기 클릭됨');
          }}
        >
          편집하기
        </button>
      </div>

      <div className='overflow-x-auto overflow-y-hidden px-2'>
        <div className='flex gap-3 bg-gray-50 p-4 rounded-lg shadow-inner min-w-full w-max'>
          {sortedDates.map((date) => (
            <div key={date} className='flex flex-col items-center flex-shrink-0 w-32'>
              {grouped[date].map((todo) => (
                <div
                  key={todo.id}
                  className='bg-white p-3 rounded-lg shadow text-sm flex flex-col justify-between items-center aspect-square w-32 mb-1'
                >
                  <div className='font-medium text-center'>{todo.title}</div>
                  <div className='text-xs text-gray-500 mt-2'>{format(parseISO(todo.date), 'M월 d일', { locale: ko })}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ✅ 생성하기 버튼 */}
      <div className='mt-4 flex justify-center'>
        <button
          className='bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition'
          onClick={() => {
            // TODO: 생성 로직 여기에 작성
            alert('일정 생성!');
          }}
        >
          생성하기
        </button>
      </div>
    </div>
  );
}
