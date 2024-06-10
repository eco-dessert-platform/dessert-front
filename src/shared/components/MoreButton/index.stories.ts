import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import MoreButton from '.';

const meta: Meta<typeof MoreButton> = {
  component: MoreButton,
  args: {
    isMore: false,
    onClick: fn()
  }
};

export default meta;
type Story = StoryObj<typeof MoreButton>;

export const Close: Story = {};
export const Open: Story = {
  args: {
    isMore: true
  }
};
