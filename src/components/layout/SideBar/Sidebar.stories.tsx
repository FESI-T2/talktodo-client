import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React, { useState } from 'react';

import Sidebar from './SideBar';

const meta: Meta<typeof Sidebar> = {
  title: 'atoms/Sidebar',
  component: Sidebar,
  argTypes: {
    isFold: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    userNickname: {
      control: { type: 'text' },
      defaultValue: '닉네임',
    },
    userEmail: {
      control: { type: 'text' },
      defaultValue: 'user@email.com',
    },
    goals: {
      control: { type: 'object' },
      defaultValue: ['자바스크립트로 웹 서비스 만들기', '디자인시스템 강의 완강', 'React 심화 스터디'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Sidebar>;

// Playground: 컨트롤 패널에서 모든 상태를 수동으로 조작
export const Playground: Story = {
  args: {
    isFold: false,
    userNickname: '홍길동',
    userEmail: 'hong@example.com',
    goals: ['자바스크립트로 웹 서비스 만들기', '디자인시스템 강의 완강', 'React 심화 스터디'],
    onFoldToggle: () => {},
  },
};

// Foldable: 실제로 fold 버튼을 눌러 상태 변화를 테스트할 수 있는 스토리
export const Foldable: Story = {
  render: (args) => {
    const [isFold, setIsFold] = useState(false);
    return <Sidebar {...args} isFold={isFold} onFoldToggle={() => setIsFold((prev) => !prev)} />;
  },
  args: {
    userNickname: '테스트유저',
    userEmail: 'test@storybook.com',
    goals: ['자바스크립트로 웹 서비스 만들기', '디자인시스템 강의 완강', 'React 심화 스터디'],
  },
};
