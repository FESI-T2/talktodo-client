'use client';
import { createContext, useContext } from 'react';

import { useStep } from 'usehooks-ts';

import { STEP_TASK } from '@/chat/constants/index';
import { CustomError } from '@/shared/lib/error/customError';

const STEP_COUNT = Object.values(STEP_TASK).length;

interface StepContextType {
  currentStep: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  goToNextStep: () => void;
  goToPrevStep: () => void;
}

const StepContext = createContext<StepContextType | undefined>(undefined);

export const StepProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentStep, helpers] = useStep(STEP_COUNT);

  const { goToNextStep, goToPrevStep, setStep } = helpers;

  return <StepContext.Provider value={{ currentStep, setStep, goToNextStep, goToPrevStep }}>{children}</StepContext.Provider>;
};

export const useStepContext = () => {
  const ctx = useContext(StepContext);
  if (!ctx) throw new CustomError('UNKNOWN_ERROR', 500, '잘못된 접근 입니다.');
  return ctx;
};
