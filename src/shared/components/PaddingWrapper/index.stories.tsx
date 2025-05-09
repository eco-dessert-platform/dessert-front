import PaddingWrapper from '@/shared/components/PaddingWrapper';
import type { Meta, StoryObj } from '@storybook/react';

interface PaddingWrapperProps {
  className?: string;
  children: React.ReactNode;
}

const meta: Meta<typeof PaddingWrapper> = {
  component: PaddingWrapper,
  args: {
    className: 'p-[16px]'
  }
};

export default meta;

const Template: StoryObj<PaddingWrapperProps> = {
  render: (args) => (
    <PaddingWrapper {...args}>
      <div className="bg-lightblue-500 w-full h-[50px] text-center ">Sample content</div>
    </PaddingWrapper>
  )
};

export const Default = {
  ...Template,
  args: {
    className: ''
  }
};

export const WithExtraPadding = {
  ...Template,
  args: {
    className: 'p-[50px]'
  }
};

export const WithBackgroundColor = {
  ...Template,
  args: {
    className: 'bg-yellow-500'
  }
};
