'use client';

import PaddingWrapper from '@/shared/components/PaddingWrapper';
import CategoryButton from '@/blocks/home/CategorySection/CategoryButton';
import Slider from '@/blocks/home/CategorySection/Slider';
import { CATEGORY } from '@/domains/home/constants/category';

const CategorySection = () => (
    <PaddingWrapper>
      <Slider className="w-full h-full flex justify-center overflow-x-auto flex scroll-smooth clean-scrollbar">
        {CATEGORY.map((category) => (
          <CategoryButton key={category.id} name={category.name} icon={category.icon} />
        ))}
        {CATEGORY.map((category) => (
          <CategoryButton key={`${category.id  }####`} name={category.name} icon={category.icon} />
        ))}
      </Slider>
    </PaddingWrapper>
  );
export default CategorySection;
