'use client';

import PaddingWrapper from '@/shared/components/PaddingWrapper';
import CategoryButton from '@/domains/product/components/CategoryButton';
import { categoryMenu } from './constants';

const CategoryList = () => (
  <PaddingWrapper className="grid pb-[0px] grid-cols-3">
    {categoryMenu.map((category) => (
      <CategoryButton key={category.id} name={category.name} icon={category.icon} />
    ))}
  </PaddingWrapper>
);

export default CategoryList;
