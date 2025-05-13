import Tag from '@/shared/components/Tag';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Tag,
  args: { children: 'tag' }
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: 'tag' }
};
