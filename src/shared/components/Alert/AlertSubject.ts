export type AlertVariant = 'success' | 'warning' | 'error';

export interface Alert {
  id: number;
  message: string;
  handleClick?: () => void;
}

export type AlertObserver = (Alert: Alert) => void;

export class AlertSubject {
  private static instance: AlertSubject;

  private observers: AlertObserver[] = [];

  private constructor() {}

  public static getInstance(): AlertSubject {
    if (!AlertSubject.instance) {
      AlertSubject.instance = new AlertSubject();
    }
    return AlertSubject.instance;
  }

  public subscribe(observer: AlertObserver): void {
    this.observers.push(observer);
  }

  public unsubscribe(observer: AlertObserver): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  public notify(Alert: Alert): void {
    this.observers.forEach((observer) => observer(Alert));
  }

  public addAlert(Alert: Alert): void {
    this.notify(Alert);
  }
}
