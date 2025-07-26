import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Form from './Form';

const meta: Meta<typeof Form> = {
  component: Form,
  title: 'Organisms/Form/MemoForm',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Form>;

export const Memo: Story = {
  render: () => (
    <Form>
      <Form.Header title='모달 제목' goal='목표 설명' />
      <Form.MemoContent day='2023-10-01' priority='중요' repeatInterval='매주' />
      <Form.FormActions
        createAction={() => alert('생성')}
        deleteAction={() => alert('삭제')}
        editAction={() => alert('수정')}
      ></Form.FormActions>
    </Form>
  ),
};
