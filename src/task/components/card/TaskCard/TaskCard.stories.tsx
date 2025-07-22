import { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Task } from '@/mocks/todoMockData/todos';

import TaskCard from './TaskCard';

const baseTask: Task = {
  taskId: '123',
  taskNo: 1,
  content: '매일 아침 산책하기',
  priority: '중요',
  taskDate: '2025-07-20',
  startTime: '06:30:00',
  endTime: '07:00:00',
  goal: '하루 30분 운동',
  isDone: false,
  createdAt: '2025-07-20T03:36:23.42592',
  modifiedAt: '2025-07-20T03:36:23.42592',
};

const meta: Meta<typeof TaskCard> = {
  title: 'card/TaskCard',
  component: TaskCard,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'radio' },
      options: ['default', 'hover', 'press', 'complete'],
    },
    layout: { control: { type: 'radio' }, options: ['square', 'rectangle'] },
    size: { control: { type: 'radio' }, options: ['L', 'S'] },
  },
};

export default meta;

type Story = StoryObj<typeof TaskCard>;

export const Default: Story = {
  args: {
    task: baseTask,
    state: 'default',
    layout: 'square',
    size: 'L',
  },
};

export const StatesGallery: Story = {
  args: {
    task: baseTask,
    layout: 'square',
    size: 'L',
  },
  render: (args) => (
    <div
      style={{
        display: 'grid',
        gap: 16,
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      }}
    >
      {(['default', 'hover', 'press', 'complete'] as const).map((state) => (
        <TaskCard key={state} {...args} state={state} />
      ))}
    </div>
  ),
  parameters: {
    controls: { hideNoControlsWarning: true }, // 갤러리에선 Controls 숨김
    docs: { description: { story: '모든 state를 한눈에 비교하는 갤러리' } },
  },
};
