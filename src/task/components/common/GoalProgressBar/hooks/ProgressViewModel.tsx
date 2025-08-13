export class ProgressViewModel {
  constructor(
    private step: number,
    private goal: number
  ) {}

  get progress(): number {
    return this.goal > 0 ? Math.round((this.step / (this.goal + this.step)) * 100) : 0;
  }

  get label(): { doneText: string; totalText: string } {
    const total = this.step + this.goal;

    return {
      doneText: `${this.step}개 완료`,
      totalText: `/ ${total}개`,
    };
  }
}
