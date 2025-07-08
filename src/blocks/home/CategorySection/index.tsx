'use client';

import PaddingWrapper from '@/shared/components/PaddingWrapper';
import ScrollSlider from '@/shared/components/ScrollSlider';
import CategoryButton from '@/blocks/home/CategorySection/CategoryButton';
import { CATEGORY } from '@/domains/home/constants/category';

const CategorySection = () => (
  <PaddingWrapper>
    <ScrollSlider className="clean-scrollbar flex h-full w-full justify-center overflow-x-auto scroll-smooth">
      {CATEGORY.map((category) => (
        <CategoryButton key={category.id} name={category.name} icon={category.icon} />
      ))}
    </ScrollSlider>
  </PaddingWrapper>
);
export default CategorySection;
