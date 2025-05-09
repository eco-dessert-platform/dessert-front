import CategoryItemSection from '@/domains/product/components/CategoryItemSection';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CategoryItemSection> = {
  component: CategoryItemSection,
  args: {
    title: 'category example',
    subCategories: ['sub1', 'sub2', 'sub3'],
    shape: 'all'
  }
};

export default meta;
type Story = StoryObj<typeof CategoryItemSection>;

export const hasSubCategory: Story = {};

export const NoSubCategory: Story = {
  args: {
    title: 'category example',
    subCategories: []
  }
};
