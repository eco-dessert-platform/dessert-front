import React from 'react';

import ArrowIcons from '@/shared/components/icons/ArrowIcons';
import { ProductOptionType } from '@/domains/product/types/productDetailType';
import PaddingWrapper from '@/shared/components/PaddingWrapper';

interface Props {
  title: ProductOptionType['title'];
  onClick: () => void;
}

const CategoryOption = ({ title, onClick }: Props) => (
  <PaddingWrapper className="border-b border-gray-100 typo-title-14-regular text-gray-800 ">
    <button type="button" onClick={onClick} className="flex items-center justify-between w-full">
      {title}
      <ArrowIcons shape="large-down" />
    </button>
  </PaddingWrapper>
);

export default CategoryOption;
