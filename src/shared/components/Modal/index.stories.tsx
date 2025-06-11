import type { Meta, StoryObj } from '@storybook/react';
import useModal from '@/shared/hooks/useModal';
import Modal from '@/shared/components/Modal';
import Button from '../Button';

const meta: Meta<typeof Modal> = {
  component: Modal,
  decorators: [
    (Story) => (
      <div className="m-auto flex h-screen w-full max-w-[600px] items-center justify-center shadow-lg shadow-slate-100">
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof Modal>;

const Template = () => {
  const { openModal } = useModal();

  const handleButtonClick = () => {
    openModal(
      <Modal title="Title" className="p-[20px] leading-10">
        <p>Content1</p>
        <p>Content2</p>
        <p>Content3</p>
      </Modal>
    );
  };

  return (
    <Button className="w-[300px]" onClick={handleButtonClick}>
      Open Modal
    </Button>
  );
};

export const Default: Story = {
  render: Template
};
