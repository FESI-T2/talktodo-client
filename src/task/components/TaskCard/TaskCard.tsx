import RectangleTaskCard from './layouts/RectangleTaskCard';
import SquareTaskCard from './layouts/SquareTaskCard';
import TimelineTaskCard from './layouts/TimelineTaskCard';
import { TaskCardProps } from './TaskCard.types';

export default function TaskCard({ task, layout }: TaskCardProps) {
  switch (layout) {
    case 'rectangle':
      return <RectangleTaskCard task={task} layout={layout} />;
    case 'timeline':
      return <TimelineTaskCard task={task} layout={layout} />;
    case 'square':
      return <SquareTaskCard task={task} layout={layout} />;
  }
}
