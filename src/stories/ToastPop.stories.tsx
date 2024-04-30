import useToast from '@/shared/hooks/useToast';

import { Meta, StoryObj } from '@storybook/react';
import ToastPop from '@/shared/components/ToastPop';
import Button from '@/shared/components/Button';

const meta: Meta<typeof ToastPop> = {
  component: ToastPop,
  title: 'ToastPop',
  decorators: [
    (Story) => (
      <div className="w-full max-w-[600px] h-screen m-auto flex justify-center items-center shadow-lg shadow-slate-100">
        <Story />
      </div>
    )
  ]
};

export default meta;

type Story = StoryObj<typeof ToastPop>;

const Template = () => {
  const { openToast } = useToast();

  const handleButtonClick = () => {
    openToast(<ToastPop>팝팝!</ToastPop>);
  };

  return (
    <Button className="w-[300px]" onClick={handleButtonClick}>
      Toast Pop
    </Button>
  );
};

export const Default: Story = {
  render: Template
};
