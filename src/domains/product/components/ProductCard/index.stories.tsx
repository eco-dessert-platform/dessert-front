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

// 스토리 템플릿을 만듭니다. `QueryClientProvider`로 감쌉니다.
const Template: StoryFn<typeof ProductCard> = (args) => (
  <QueryClientProvider client={queryClient}>
    <div className="w-[40%]">
      <ProductCard {...args} />
    </div>
  </QueryClientProvider>
);

// 스토리를 정의하고, 기본 전달인자(args)를 설정합니다.
export const ProductCardStory = Template.bind({});
ProductCardStory.args = {
  product: temple
};
