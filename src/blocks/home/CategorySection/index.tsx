'use client';

import PaddingWrapper from '@/shared/components/PaddingWrapper';
import CategoryButton from '@/blocks/home/CategorySection/CategoryButton';
import { CATEGORY } from '@/domains/home/constants/category';

const CategorySection = () => (
  <PaddingWrapper className="grid grid-cols-3">
    {CATEGORY.map((category) => (
      <CategoryButton key={category.id} name={category.name} icon={category.icon} />
    ))}
  </PaddingWrapper>
);
export default CategorySection;
