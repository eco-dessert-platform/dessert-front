'use client';

import { useRecoilState } from 'recoil';
import { isCategoryTabState } from '@/domains/product/atoms/isCategoryTabState';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import CategoryButton from '@/domains/product/components/CategoryButton';
import { categoryMenu } from './constants';

const CategoryList = () => {
  const [isCategoryTab] = useRecoilState(isCategoryTabState);

  return (
    <PaddingWrapper className={`grid pb-[0px] ${isCategoryTab ? 'grid-cols-3' : 'grid-cols-3'}`}>
      {categoryMenu
        .filter((category) => category.category === (isCategoryTab ? '상품별' : '성분별'))
        .map((category) => (
          <CategoryButton
            key={category.id}
            name={category.name}
            icon={category.icon}
            isCategoryTab={isCategoryTab}
          />
        ))}
    </PaddingWrapper>
  );
};

export default CategoryList;
