import type { Meta, StoryObj } from '@storybook/react';
import Input from '@/shared/components/Input';
import Button from '@/shared/components/Button';
import { fn } from '@storybook/test';

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Input',
  args: {
    label: undefined,
    button: undefined,
    required: false,
    placeholder: '입력하세요.',
    readOnly: false,
    onFocus: fn(),
    onChange: fn()
  },
  decorators: [
    (Story) => (
      <div className="w-[300px]">
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    label: 'Title'
  }
};

export const WithButton: Story = {
  args: {
    button: <Button variants="input">버튼</Button>
  }
};

export const Required: Story = {
  args: {
    label: 'Title',
    required: true
  }
};

export const ReadOnly: Story = {
  args: {
    readOnly: true
  }
};
