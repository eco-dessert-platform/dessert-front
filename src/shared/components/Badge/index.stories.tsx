import type { Meta, StoryObj } from '@storybook/react';
import Badge from '.';

const meta = {
  component: Badge,
  args: { type: 'tag', children: 'badge' }
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Type: Story = {
  args: { type: 'default', children: 'badge' }
};
