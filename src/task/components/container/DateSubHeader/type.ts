export interface DateHeaderProps {
  layout: 'square' | 'rectangle';
  setLayout: (layout: 'square' | 'rectangle') => void;
  timelineActive: boolean;
  setTimelineActive: (active: boolean) => void;
}
