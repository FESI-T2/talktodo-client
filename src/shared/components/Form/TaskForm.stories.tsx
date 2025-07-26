import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { useState } from 'react';
import { DateRange } from 'react-day-picker';

import Form from './Form';

const meta: Meta<typeof Form> = {
  component: Form,
  title: 'Organisms/Form/TaskForm',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Form>;

export const Task: Story = {
  render: () => {
    const [date, setDate] = useState<DateRange>({
      from: new Date(2023, 9, 1),
      to: new Date(2023, 9, 31),
    });

    return (
      <Form>
        <Form.Header title='작업 모달 제목' goal='작업 목표 설명' />
        <Form.TaskContent date={date} setDate={setDate} />
        <Form.FormActions
          createAction={() => alert('작업 생성')}
          deleteAction={() => alert('작업 삭제')}
          editAction={() => alert('작업 수정')}
        />
      </Form>
    );
  },
};
