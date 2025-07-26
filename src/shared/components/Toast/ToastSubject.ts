export type ToastVariant = 'success' | 'warning' | 'error';

export interface Toast {
  id: number;
  message: string;
  variant: ToastVariant;
}

export type ToastObserver = (toast: Toast) => void;

export class ToastSubject {
  private static instance: ToastSubject;

  private observers: ToastObserver[] = [];

  private constructor() {}

  public static getInstance(): ToastSubject {
    if (!ToastSubject.instance) {
      ToastSubject.instance = new ToastSubject();
    }
    return ToastSubject.instance;
  }

  public subscribe(observer: ToastObserver): void {
    this.observers.push(observer);
  }

  public unsubscribe(observer: ToastObserver): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  public notify(toast: Toast): void {
    this.observers.forEach((observer) => observer(toast));
  }

  public addToast(toast: Toast): void {
    this.notify(toast);
  }
}
