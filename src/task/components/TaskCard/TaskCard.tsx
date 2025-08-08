import { match } from 'ts-pattern';

import RectangleTaskCard from './layouts/RectangleTaskCard';
import SquareTaskCard from './layouts/SquareTaskCard';
import TimelineTaskCard from './layouts/TimelineTaskCard';
import { TaskCardProps } from './TaskCard.types';

export default function TaskCard(props: TaskCardProps) {
  return match(props)
    .with({ layout: 'rectangle' }, ({ task }) => <RectangleTaskCard task={task} />)
    .with({ layout: 'timeline' }, ({ task }) => <TimelineTaskCard task={task} />)
    .with({ layout: 'square' }, ({ task }) => <SquareTaskCard task={task} />)
    .exhaustive();
}
