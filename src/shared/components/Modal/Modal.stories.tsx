// Modal.stories.tsx
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Modal from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'atoms/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: '모달 열림/닫힘 상태',
    },
    onClose: {
      action: 'closed',
      description: '모달이 닫힐 때 호출되는 콜백',
    },
    children: {
      control: 'text',
      description: '모달 내부에 렌더링될 콘텐츠',
    },
    disableBackdropClick: {
      control: 'boolean',
      description: '배경 클릭으로 모달 닫기 비활성화 여부',
    },
    className: {
      control: 'text',
      description: '모달 콘텐츠 컨테이너에 적용될 Tailwind CSS 클래스',
    },
  },
  // Modal 컴포넌트를 직접 렌더링합니다.
  render: (args) => (
    <Modal {...args}>
      <div className='p-8'>
        <h2 className='text-2xl font-bold mb-4'>기본 모달 콘텐츠</h2>
        <p>이것은 Modal 컴포넌트의 기본적인 모습을 보여주는 예시입니다.</p>
        <button
          className='mt-4 px-4 py-2 bg-red-500 text-white rounded'
          onClick={args.onClose} // 스토리북 컨트롤에서 정의된 onClose 액션 호출
        >
          닫기
        </button>
      </div>
    </Modal>
  ),
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    isOpen: true, // 스토리북에서 항상 열려있도록 설정
    onClose: () => console.log('모달 닫기 요청 (스토리북)'), // 예시 콜백
    children: '이것은 기본 모달의 내용입니다.', // render 함수에서 덮어쓰여짐
  },
};

export const WithCustomContent: Story = {
  args: {
    isOpen: true,
    children: (
      <div className='p-8 bg-blue-100 rounded-lg'>
        <h2 className='text-3xl font-extrabold text-blue-700 mb-4'>커스텀 콘텐츠 모달</h2>
        <p className='text-blue-600'>이 스토리는 사용자 정의된 React Node를 children으로 전달합니다.</p>
        <button
          className='mt-6 px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors'
          onClick={() => console.log('확인 버튼 클릭됨 (스토리북)')}
        >
          확인
        </button>
      </div>
    ),
    onClose: () => console.log('모달 닫기 요청 (스토리북)'),
    className: 'max-w-md',
  },
};

export const NoBackdropClose: Story = {
  args: {
    isOpen: true,
    children: (
      <div className='p-8'>
        <h2 className='text-2xl font-bold mb-4'>배경 클릭 불가 모달</h2>
        <p>배경을 클릭해도 닫히지 않습니다. Esc 키나 닫기 버튼을 사용하세요.</p>
        <button className='mt-4 px-4 py-2 bg-red-500 text-white rounded' onClick={() => console.log('모달 닫기 요청 (스토리북)')}>
          닫기
        </button>
      </div>
    ),
    disableBackdropClick: true,
    onClose: () => console.log('모달 닫기 요청 (스토리북)'),
  },
};

export const WithoutCloseButton: Story = {
  args: {
    isOpen: true,
    children: (
      <div className='p-8'>
        <h2 className='text-2xl font-bold mb-4'>닫기 버튼 없는 모달</h2>
        <p>이 모달에는 닫기 버튼이 없습니다. Esc 키를 눌러 닫으세요.</p>
      </div>
    ),
    disableBackdropClick: true,
    onClose: () => console.log('모달 닫기 요청 (스토리북)'),
  },
};
