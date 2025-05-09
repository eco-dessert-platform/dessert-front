import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import HeartButton from '.';

const meta: Meta<typeof HeartButton> = {
  component: HeartButton,
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
