'use client';

import { useState } from 'react';
import { useStep } from 'usehooks-ts';

import ChatModal from '@/chat/components/ChatModal/ChatModal';
import ExistGoalChat from '@/chat/pages/ExistGoalChat';
import ExistGoalMain from '@/chat/pages/ExistGoalMain';
import ExistGoalResult from '@/chat/pages/ExistGoalResult';
import NewGoalChat from '@/chat/pages/NewGoalChat';
import NewGoalMain from '@/chat/pages/NewGoalMain';
import NewGoalResult from '@/chat/pages/NewGoalResult';
import { Message } from '@/chat/types/message';
import ChatCharacter from '@/shared/components/Icons/ChatCharacter/ChatCharacter';

const TOTAL_STEPS = 7;

const Page = () => {
  const [currentStep, helpers] = useStep(TOTAL_STEPS);
  const { goToNextStep, setStep } = helpers;

  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedGoal, setSelectedGoal] = useState<{ title: string; count: number } | null>(null);

  const handleStartChat = (inputText: string) => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      message: inputText,
      role: 'user',
    };

    setMessages([userMessage]);
    goToNextStep();

    setTimeout(() => {
      const assistantMessage: Message = {
        message: '말해주신 내용으로 목표를 정하고, 할 일을 정리해볼게요!',
        role: 'assistant',
      };
      setMessages((prev) => [...prev, assistantMessage]);
    }, 1000);

    setTimeout(() => {
      setStep(4);
    }, 3000);
  };

  const handleAddMessage = (inputText: string) => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      message: inputText,
      role: 'user',
    };

    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const assistantMessage: Message = {
        message: '더 자세한 내용을 알려주셔서 감사해요! 계속 정리해볼게요.',
        role: 'assistant',
      };
      setMessages((prev) => [...prev, assistantMessage]);
    }, 1000);

    setTimeout(() => {
      setStep(4);
    }, 2500);
  };

  const renderStepPage = () => {
    switch (currentStep) {
      case 1:
        return (
          <ChatModal
            onClickSecondary={() => setStep(2)}
            onClickPrimary={() => setStep(5)}
            onSelectGoalComplete={(goal) => setSelectedGoal(goal)}
          />
        );
      case 2:
        return <NewGoalMain onSendMessage={handleStartChat} {...helpers} />;
      case 3:
        return <NewGoalChat messages={messages} onSendMessage={handleAddMessage} {...helpers} />;
      case 4:
        return <NewGoalResult {...helpers} />;
      case 5:
        return selectedGoal ? (
          <ExistGoalMain onSendMessage={handleStartChat} headerTitle={selectedGoal.title} taskCount={selectedGoal.count} {...helpers} />
        ) : null;
      case 6:
        return selectedGoal ? (
          <ExistGoalChat messages={messages} headerTitle={selectedGoal.title} taskCount={selectedGoal.count} {...helpers} />
        ) : null;
      case 7:
        return <ExistGoalResult {...helpers} />;
      default:
        return null;
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen gradient-bg overflow-hidden mx-auto'>
      <div className='inline-flex flex-col justify-start items-center gap-8'>
        {(currentStep === 1 || currentStep === 4) && <ChatCharacter />}
        {renderStepPage()}
      </div>
    </div>
  );
};

export default Page;
