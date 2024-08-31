import React from 'react';

import ArrowIcons from '@/shared/components/icons/ArrowIcons';
import { ProductOptionType } from '@/domains/product/types/productDetailType';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import { cn } from '@/shared/utils/cn';

interface Props {
  product: ProductOptionType;
  isExpended: boolean;
  onClick: () => void;
}

const CategoryOption = ({ product: { title, isSoldout }, isExpended, onClick }: Props) => (
  <PaddingWrapper
    className={cn(
      'border-b border-gray-100 typo-title-14-regular text-gray-800 ',
      isSoldout && 'bg-gray-100'
    )}
  >
    <button type="button" onClick={onClick} className="flex items-center justify-between w-full">
      <div className="flex gap-x-[5px]">
        <span>{isSoldout && '(품절)'}</span>
        <span>{title}</span>
      </div>
      <span className={cn(isExpended && 'rotate-180 transition-all')}>
        <ArrowIcons shape="large-down" />
      </span>
    </button>
  </PaddingWrapper>
);

export default CategoryOption;
