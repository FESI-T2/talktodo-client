import React, { useEffect, useState } from 'react';

import { match } from 'ts-pattern';

import { ChatRoom, Result, TaskSelector } from '@/chat/components/Step/index';
import { NOT_SELECT_GOAL } from '@/chat/constants/goal';
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
    if (currentStep === 2) {
      setMessages([]);
    }
  }, [currentStep]);

  const handleSelectGoal = (selectedGoalIdx: number) => {
    setSelectedGoalIdx(selectedGoalIdx);
  };

  const renderStepPage = () => {
    return match(currentStep)
      .with(1, () => (
        <TaskSelector goToChatStep={goToChatStep} goals={goals} selectedGoalIdx={selectedGoalIdx} handleSelectGoal={handleSelectGoal} />
      ))
      .with(2, () => (
        <ChatRoom
          onSendMessage={handleSendChat}
          messages={messages}
          goToPrevStep={goToPreviousStep}
          title={selectedGoalIdx !== NOT_SELECT_GOAL ? goals[selectedGoalIdx].title : '새로운 목표 만들기'}
        />
      ))
      .with(3, () => <Result goToPrevStep={goToPreviousStep} />)
      .otherwise(() => null);
  };

  return <div>{renderStepPage()}</div>;
};

export default ChatContainer;
