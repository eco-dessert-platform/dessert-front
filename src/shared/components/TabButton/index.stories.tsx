import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import TabButton from '@/shared/components/TabButton';

const meta: Meta<typeof TabButton> = {
  component: TabButton,
  decorators: [
    (Story) => (
      <div className="w-full max-w-[600px] h-screen m-auto shadow-lg shadow-slate-100">
        <Story />
      </div>
    )
  ]
};

export default meta;

type Story = StoryObj<typeof TabButton>;

const Template = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="flex w-full">
      <TabButton active={isActive} onClick={() => setIsActive(true)}>
        상품별
      </TabButton>
      <TabButton active={!isActive} onClick={() => setIsActive(false)}>
        성분별
      </TabButton>
    </div>
  );
};

export const Default: Story = {
  render: Template
};
