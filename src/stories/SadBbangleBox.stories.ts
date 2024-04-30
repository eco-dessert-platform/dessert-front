import { Meta, StoryObj } from '@storybook/react';
import SadBbangleBox from '@/shared/components/SadBbangleBox';

const meta: Meta<typeof SadBbangleBox> = {
  component: SadBbangleBox,
  title: 'SadBbangleBox'
};

export default meta;

type Story = StoryObj<typeof SadBbangleBox>;

export const Default: Story = {};

export const WithText: Story = {
  args: {
    children: '슬픈 빵그리'
  }
};
