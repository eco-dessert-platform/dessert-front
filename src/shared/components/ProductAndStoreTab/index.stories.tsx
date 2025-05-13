import ProductAndStoreTab from '@/shared/components/ProductAndStoreTab';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProductAndStoreTab> = {
  component: ProductAndStoreTab
};
export default meta;
type Story = StoryObj<typeof ProductAndStoreTab>;

export const Default: Story = {};
export const hasCount: Story = {
  args: {
    productCount: 10,
    storeCount: 88
  }
};
