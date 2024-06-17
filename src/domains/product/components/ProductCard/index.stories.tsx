import React from 'react';

import { Meta, StoryFn } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import ProductCard from '.';

const queryClient = new QueryClient();

export default {
  title: 'ProductCard',
  component: ProductCard
} as Meta<typeof ProductCard>;

const temple = {
  boardId: 1,
  storeId: 1,
  storeName: 'Rawsome Store',
  thumbnail:
    'https://firebasestorage.googleapis.com/v0/b/test-1949b.appspot.com/o/stores%2Frawsome%2Fboards%2F00000000%2F1.jpg?alt=media&token=82e17c1a-3f4d-4ece-b065-6a9bb10bd3a2',
  title: 'Organic Vegan Dessert',
  price: 15,
  isBundled: true,
  isWished: true,
  tags: ['glutenFree', 'vegan'],
  view: 123
};

const Template: StoryFn<typeof ProductCard> = (args) => (
  <QueryClientProvider client={queryClient}>
    <div className="max-w-[300px]">
      <ProductCard {...args} />
    </div>
  </QueryClientProvider>
);

export const ProductCardStory = Template.bind({});
ProductCardStory.args = {
  product: temple
};
