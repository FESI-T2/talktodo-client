import { ProgressViewModel as PVM } from './ProgressViewModel';

describe('ProgressViewModel', () => {
  it('step: 2, goal: 4 일때 progress가 50이 되는지 테스트', () => {
    const instance = new PVM(2, 4);
    expect(instance.progress).toBe(50);
  });

  it('step이 goal을 초과할 경우 progress는 최대 100을 넘지 않는지 테스트', () => {
    const instance = new PVM(4, 2);
    expect(instance.progress).toBe(100);
  }); // 초과할 경우 100을 안넘도록 하는 것이 맞는가?

  it('goal이 0일 때 progress가 0이 되는지 테스트', () => {
    const instance = new PVM(1, 0);
    expect(instance.progress).toBe(0);
  });

  it('step과 goal을 기반으로 올바른 label 텍스트가 생성되는지 테스트', () => {
    const instance = new PVM(3, 5);
    expect(instance.label).toEqual({ doneText: '3개 완료', totalText: '/ 5개' });
  });

  // TODO: step과 goal이 둘 다 0일 때도 label 텍스트가 잘 생성되는지 테스트
  it('step과 goal이 둘 다 0일때도 label 텍스트가 잘 생성되는지 테스트', () => {
    const instance = new PVM(0, 0);
    expect(instance.label).toEqual({ doneText: '0개 완료', totalText: '/ 0개' });
  });
});
