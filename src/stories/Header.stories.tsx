import type { Meta, StoryObj } from '@storybook/react';
import Header from '@/shared/components/Header';

const meta: Meta<typeof Header> = {
  component: Header,
  title: 'Header',
  args: {
    title: 'Header Content'
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-[600px] h-screen m-auto shadow-lg shadow-slate-100">
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};

export const WithBackButton: Story = {
  args: {
    back: true
  }
};
