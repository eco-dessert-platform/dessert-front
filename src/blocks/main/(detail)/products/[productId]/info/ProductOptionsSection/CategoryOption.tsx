import React from 'react';

import ArrowIcons from '@/shared/components/icons/ArrowIcons';
import { ProductOptionType } from '@/domains/product/types/productDetailType';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import { cn } from '@/shared/utils/cn';

interface Props {
  title: ProductOptionType['title'];
  soldout: ProductOptionType['soldout'];
  onClick: () => void;
}

const CategoryOption = ({ title, soldout, onClick }: Props) => (
  <PaddingWrapper
    className={cn(
      'border-b border-gray-100 typo-title-14-regular text-gray-800 ',
      soldout && 'bg-gray-100'
    )}
  >
    <button type="button" onClick={onClick} className="flex items-center justify-between w-full">
      {soldout && '(품절)'}
      {title}
      <ArrowIcons shape="large-down" />
    </button>
  </PaddingWrapper>
);

export default CategoryOption;
