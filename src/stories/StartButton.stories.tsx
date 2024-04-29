import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import StartButton from '@/shared/components/StartButton';

const meta: Meta<typeof StartButton> = {
  component: StartButton,
  title: 'StartButton'
};

export default meta;

type Story = StoryObj<typeof StartButton>;

const Template = () => {
  const [isActive, setIsActive] = useState(false);

  return <StartButton isAcive={isActive} onClick={() => setIsActive(!isActive)} />;
};

export const Default: Story = {
  render: Template
};
