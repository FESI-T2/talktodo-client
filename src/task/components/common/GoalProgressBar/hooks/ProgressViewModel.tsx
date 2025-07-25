export class ProgressViewModel {
  constructor(
    private step: number,
    private goal: number
  ) {}

  get progress(): number {
    return this.goal > 0 ? Math.min((this.step / this.goal) * 100, 100) : 0;
  }

  get label(): { doneText: string; totalText: string } {
    return {
      doneText: `${this.step}개 완료`,
      totalText: `/ ${this.goal}개`,
    };
  }
}
