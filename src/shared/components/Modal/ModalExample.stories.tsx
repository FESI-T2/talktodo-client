// ModalExample.stories.tsx
import type { Meta, StoryObj } from '@storybook/nextjs';
import React from 'react';

import ModalContainer from './ModalContainer';
import ModalExample from './ModalExample';

const meta: Meta<typeof ModalExample> = {
  component: ModalExample,
  title: 'test/ModalExample',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: '모달 예시의 기본 제목',
    },
    message: {
      control: 'text',
      description: '모달 예시의 기본 메시지',
    },
    disableBackdropClick: {
      control: 'boolean',
      description: '기본 모달 예시에서 배경 클릭 닫기 비활성화 여부',
    },
    className: {
      control: 'text',
      description: '기본 모달 예시의 모달 콘텐츠 클래스',
    },
    closeButton: {
      control: 'boolean',
      description: '기본 모달 예시에서 닫기 버튼 표시 여부',
    },
  },
  // ModalExample과 ModalContainer를 함께 렌더링하여 실제 사용 시나리오를 모방
  render: (args) => (
    <>
      <ModalExample {...args} />
      {/* ModalContainer는 앱의 최상단에서 한 번만 렌더링되어야 합니다. */}
      {/* Storybook에서 ModalExample을 테스트하기 위해 여기에 추가합니다. */}
      {/* 실제 애플리케이션에서는 _app.tsx (Next.js) 등에서 렌더링됩니다. */}
      <ModalContainer />
    </>
  ),
};

export default meta;

type Story = StoryObj<typeof ModalExample>;

export const InteractiveUsage: Story = {
  args: {
    title: '예시 모달',
    message: '이 버튼을 클릭하여 `ModalSubject`를 통해 모달을 열어보세요.',
    disableBackdropClick: false,
    className: '',
    closeButton: true,
  },
};
