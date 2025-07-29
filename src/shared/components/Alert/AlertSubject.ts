import { Alert as AlertType } from './Alert.type';

export type AlertObserver = (Alert: AlertType) => void;

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

  public notify(Alert: AlertType): void {
    this.observers.forEach((observer) => observer(Alert));
  }

  public addAlert(Alert: AlertType): void {
    this.notify(Alert);
  }
}
