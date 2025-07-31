'use client';

import MainHeader from '@/task/components/layout/Header/MainHeader';
import useDashboardTasks from '@/task/hooks/useDashboardTasks';

export default function DashboardPage() {
  const { data } = useDashboardTasks();

  if (!data) {
    return <div>Loading...</div>;
  }

  const {
    result: { undoneCount, doneCount, totalCount, undoneTasks, doneTasks },
  } = data;

  console.log(undoneTasks, doneTasks);

  return (
    <div>
      <MainHeader totalTodo={totalCount} IncompleteTodo={undoneCount} completedTodo={doneCount} />
    </div>
  );
}
