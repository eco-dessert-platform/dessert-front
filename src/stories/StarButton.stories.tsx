import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import StarButton from '@/shared/components/StarButton';

const meta: Meta<typeof StarButton> = {
  component: StarButton,
  title: 'StartButton'
};

export default meta;

type Story = StoryObj<typeof StarButton>;

const Template = () => {
  const [isActive, setIsActive] = useState(false);

  return <StarButton isAcive={isActive} onClick={() => setIsActive(!isActive)} />;
};

export const Default: Story = {
  render: Template
};
