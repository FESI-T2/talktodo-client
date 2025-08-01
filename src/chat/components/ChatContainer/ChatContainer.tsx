import React, { useEffect, useState } from 'react';

import { match } from 'ts-pattern';

import { ChatRoom, Result, TaskSelector } from '@/chat/components/Step/index';
import { NOT_SELECT_GOAL } from '@/chat/constants/goal';
import { STEP_TASK } from '@/chat/constants/step';
import useStepAcion from '@/chat/hooks/useStepAcion';
import { mockGoalsArray } from '@/chat/mocks/goal';
import { Message, Goal } from '@/chat/types';

const ChatContainer = () => {
  const { currentStep, goToChatStep, goToPreviousStep, goToResultStep } = useStepAcion();

  const [messages, setMessages] = useState<Message[]>([]);

  const [goals] = useState<Goal[]>(mockGoalsArray);
  const [selectedGoalIdx, setSelectedGoalIdx] = useState<number>(NOT_SELECT_GOAL);

  const handleSendChat = (chat: string) => {
    const userMessage: Message = { message: chat, role: 'user' };
    const assistantMessage: Message = { message: '이해했습니다! 목표를 달성하기 위해 어떤 할 일을 도와드릴까요?', role: 'assistant' };
    setMessages((prev) => [...prev, userMessage, assistantMessage]);
    goToResultStep();
  };

  useEffect(() => {
    if (currentStep === STEP_TASK.selectTask) {
      setMessages([]);
    }
  }, [currentStep]);

  const handleSelectGoal = (selectedGoalIdx: number) => {
    setSelectedGoalIdx(selectedGoalIdx);
  };

  const renderStepPage = () => {
    return match(currentStep)
      .with(STEP_TASK.selectTask, () => (
        <TaskSelector goToChatStep={goToChatStep} goals={goals} selectedGoalIdx={selectedGoalIdx} handleSelectGoal={handleSelectGoal} />
      ))
      .with(STEP_TASK.chat, () => (
        <ChatRoom
          onSendMessage={handleSendChat}
          messages={messages}
          goToPrevStep={goToPreviousStep}
          title={selectedGoalIdx !== NOT_SELECT_GOAL ? goals[selectedGoalIdx].title : '새로운 목표 만들기'}
        />
      ))
      .with(STEP_TASK.result, () => <Result goToPrevStep={goToPreviousStep} />)
      .otherwise(() => null);
  };

  return <>{renderStepPage()}</>;
};

export default ChatContainer;
