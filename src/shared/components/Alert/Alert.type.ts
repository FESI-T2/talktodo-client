export interface Alert {
  id: number;
  message: string;
  handleClick?: () => void;
}
export type AlertProps = Omit<Alert, 'id'>;
