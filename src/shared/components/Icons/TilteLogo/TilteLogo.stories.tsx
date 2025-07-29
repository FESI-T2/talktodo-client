import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import TilteLogo from './TitleLogo';

const meta: Meta<typeof TilteLogo> = {
  component: TilteLogo,
  title: 'icons/TilteLogo',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof TilteLogo>;

export const Default: Story = {
  args: {},
};
