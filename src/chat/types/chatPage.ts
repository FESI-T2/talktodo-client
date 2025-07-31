export interface StepHelpers {
  goToNextStep: () => void;
  goToPrevStep: () => void;
  setStep: (step: number | ((step: number) => number)) => void;
  reset: () => void;
  canGoToNextStep: boolean;
  canGoToPrevStep: boolean;
}
