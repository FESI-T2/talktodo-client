// ModalSubject.ts
// ModalSubject는 모달의 상태 관리
// 모달을 사용할 다른 컴포넌트(Subscriber)에서 모달 동작 제어

export type ModalState = {
  isOpen: boolean;
  content: React.ReactNode | null;
  options?: ModalOptions;
};

type ModalOptions = {
  onClose?: () => void;
  disableBackdropClick?: boolean;
  className?: string;
  closeButton?: boolean;
};

type Subscriber = (state: ModalState) => void;

class ModalSubject {
  private state: ModalState = {
    isOpen: false,
    content: null,
    options: {},
  };

  // 모달 상태 변경을 감지할 구독자 목록
  private subscribers: Subscriber[] = [];

  /**
   * 구독자를 추가합니다.
   * @param subscriber 모달 상태 변경을 받을 함수
   * @returns 구독 해지 함수
   */
  subscribe(subscriber: Subscriber) {
    this.subscribers.push(subscriber);
    subscriber(this.state); // 구독 시 현재 상태를 즉시 전달
    return () => {
      this.unsubscribe(subscriber);
    };
  }

  /**
   * 구독자를 목록에서 제거합니다.
   * @param subscriber 제거할 구독자 함수
   */
  unsubscribe(subscriber: Subscriber): void {
    this.subscribers = this.subscribers.filter((s) => s !== subscriber);
  }

  /**
   * 모든 구독자에게 현재 모달 상태를 알립니다.
   */
  private notify() {
    this.subscribers.forEach((subscriber) => subscriber(this.state));
  }

  /**
   * 모달을 열고 상태를 업데이트한 후 모든 구독자에게 알립니다.
   * @param content 모달에 표시할 React 노드
   * @param options 모달 옵션 (닫기 콜백, 배경 클릭 비활성화 등)
   */
  open(content: React.ReactNode, options?: ModalOptions) {
    this.state = {
      isOpen: true,
      content,
      options,
    };
    this.notify();
  }

  /**
   * 모달을 닫습니다.
   */
  close() {
    if (this.state.isOpen) {
      this.state.options?.onClose?.(); // onClose 콜백 호출
      this.state = {
        isOpen: false,
        content: null,
        options: {},
      };
      this.notify();
    }
  }

  /**
   * 현재 모달 상태를 반환합니다.
   */
  getState(): ModalState {
    return this.state;
  }
}

// 싱글턴 패턴으로 ModalSubject 인스턴스를 생성하여 전역에서 공유
/**
 * 싱글턴 패턴 :
 * 생성자가 여러 차례 호출되더라도 실제로 생성되는 객체는 하나이고
 * 최초 생성 이후에 호출된 생성자는 최초의 생성자가 생성한 객체를 리턴
 */
export const modalSubject = new ModalSubject();
