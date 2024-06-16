import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ButtonNewver from '.';

const meta = {
  component: ButtonNewver,
  title: 'ButtonNewver',
  args: { onClick: fn(), children: 'Click', color: 'black', size: 'md', radius: 'round' }
} satisfies Meta<typeof ButtonNewver>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
