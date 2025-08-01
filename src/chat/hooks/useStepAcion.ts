import { useStep } from 'usehooks-ts';

const TOTAL_STEPS = 3;

import { STEP_TASK } from '@/chat/constants/index';

const useStepAcion = () => {
  const [currentStep, helpers] = useStep(TOTAL_STEPS);
  const { goToNextStep, setStep } = helpers;

  const goToChatStep = () => {
    setStep(STEP_TASK.chat);
  };

  const goToResultStep = () => {
    setStep(STEP_TASK.result);
  };

  const goToPreviousStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  return {
    currentStep,
    goToNextStep,
    setStep,
    goToChatStep,
    goToResultStep,
    goToPreviousStep,
  };
};

export default useStepAcion;
