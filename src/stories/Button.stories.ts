import Button from '@/shared/components/Button';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  component: Button,
  title: 'Button',
  args: { onClick: fn(), children: 'Click' }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryBlack: Story = {
  args: { variants: 'primary-black' }
};

export const PrimaryWhite: Story = {
  args: { variants: 'primary-white' }
};

export const Input: Story = {
  args: { variants: 'input' }
};

export const SecondaryWhite: Story = {
  args: { variants: 'secondary-white' }
};

export const SecondaryBlack: Story = {
  args: { variants: 'secondary-black' }
};

export const PopupBlack: Story = {
  args: { variants: 'popup-black' }
};

export const PopupWhite: Story = {
  args: { variants: 'popup-white' }
};
