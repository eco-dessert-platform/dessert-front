import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import TabButton from '@/shared/components/TabButton';

const meta: Meta<typeof TabButton> = {
  component: TabButton,
  title: 'TabButton'
};

export default meta;

type Story = StoryObj<typeof TabButton>;

const Template = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="flex">
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
