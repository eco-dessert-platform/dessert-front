import MoreButton from '@/shared/components/MoreButton';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<typeof MoreButton> = {
  component: MoreButton,
  title: 'MoreButton',
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
