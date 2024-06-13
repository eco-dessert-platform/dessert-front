import type { Meta, StoryObj } from '@storybook/react';
import HeartButton from '@/shared/components/HeartButton';
import { fn } from '@storybook/test';

const meta: Meta<typeof HeartButton> = {
  component: HeartButton,
  title: 'Heart Button',
  args: {
    shape: 'default',
    isActive: false,
    onClick: fn()
  }
};

export default meta;
type Story = StoryObj<typeof HeartButton>;

export const Shape: Story = {};

export const Active: Story = {
  args: {
    isActive: true
  }
};
