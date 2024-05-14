import StarRating from '@/domains/review/components/StarRating';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof StarRating> = {
  component: StarRating,
  title: 'StarRating'
};
export default meta;

type Story = StoryObj<typeof StarRating>;

export const Default: Story = {
  args: { initRating: 3.5 }
};

export const Size: Story = {
  args: { initRating: 2, size: 'large' }
};

export const Draggable: Story = {
  args: { initRating: 0, size: 'large', draggable: true }
};
