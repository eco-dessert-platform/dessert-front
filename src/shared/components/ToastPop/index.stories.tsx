import { Meta, StoryObj } from '@storybook/react';
import ToastPop from '@/shared/components/ToastPop';
import Button from '@/shared/components/Button';
import useToastNewVer from '@/shared/hooks/useToastNewVer';

const meta: Meta<typeof ToastPop> = {
  component: ToastPop,
  decorators: [
    (Story) => (
      <div className="m-auto flex h-screen w-full max-w-[600px] items-center justify-center shadow-lg shadow-slate-100">
        <Story />
      </div>
    )
  ]
};

export default meta;

type Story = StoryObj<typeof ToastPop>;

const Template = () => {
  const { openToast } = useToastNewVer();

  const handleButtonClick = () => {
    openToast({ message: '팝팝!' });
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
