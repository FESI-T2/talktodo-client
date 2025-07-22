import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useRef } from 'react';

import ProfileFrom from './ProfileFrom';

const meta: Meta<typeof ProfileFrom> = {
  component: ProfileFrom,
  title: 'molecules/ProfileFrom',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ProfileFrom>;

export const Default: Story = {
  render: () => {
    const imageRef = useRef<HTMLInputElement>(null);

    return (
      <ProfileFrom>
        <ProfileFrom.Title>{'회원 가입'}</ProfileFrom.Title>
        <ProfileFrom.ProfileUpload imageRef={imageRef} />
        <ProfileFrom.Info content={'이름'} />
        <ProfileFrom.SocialInfo content={'이메일'} variant={'kakao'} />
        <ProfileFrom.Button />
      </ProfileFrom>
    );
  },
  args: {},
};
