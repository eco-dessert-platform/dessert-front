import React from 'react';

import ArrowIcons from '@/shared/components/icons/ArrowIcons';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import { cn } from '@/shared/utils/cn';
import { ProductType } from '@/domains/product/types/productInfoType';
import IngredientInfo from '@/app/main/products/[productId]/info/_blocks/ProductOptionsSection/IngredientInfo';

interface Props {
  product: ProductType;
  isExpended: boolean;
  onClick: () => void;
}

const CategoryOption = ({ product, isExpended, onClick }: Props) => {
  const visible = !(
    product.orderType.orderType === 'WEEK' &&
    product.orderType.monday &&
    product.orderType.tuesday &&
    product.orderType.wednesday &&
    product.orderType.thursday &&
    product.orderType.friday &&
    product.orderType.saturday &&
    product.orderType.sunday &&
    product.nutrient.sugars === -1 &&
    product.nutrient.protein === -1 &&
    product.nutrient.carbohydrates === -1 &&
    product.nutrient.fat === -1 &&
    product.nutrient.weight === null &&
    product.nutrient.calories === null
  );

  return (
    <PaddingWrapper
      className={cn(
        'typo-title-14-regular border-b border-gray-100 text-gray-800',
        product.isSoldout && 'bg-gray-100'
      )}
    >
      <button
        type="button"
        onClick={visible ? onClick : undefined}
        className="flex w-full items-center justify-between"
      >
        <div className="flex gap-x-[5px]">
          <span>{product.isSoldout && '(품절)'}</span>
          <span>{product.title}</span>
          <IngredientInfo product={product} />
        </div>

        {visible && (
          <span className={cn(isExpended && 'rotate-180 transition-all')}>
            <ArrowIcons shape="large-down" />
          </span>
        )}
      </button>
    </PaddingWrapper>
  );
};

export default CategoryOption;
