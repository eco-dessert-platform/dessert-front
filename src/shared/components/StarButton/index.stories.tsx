import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import StarButton from '@/shared/components/StarButton';

const meta: Meta<typeof StarButton> = {
  component: StarButton
};

export default meta;

type Story = StoryObj<typeof StarButton>;

const Template = () => {
  const [isActive, setIsActive] = useState(false);

  return <StarButton isActive={isActive} onClick={() => setIsActive(!isActive)} />;
};

export const Default: Story = {
  render: Template
};
