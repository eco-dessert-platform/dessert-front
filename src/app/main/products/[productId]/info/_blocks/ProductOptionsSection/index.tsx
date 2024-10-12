'use client';

import { useState } from 'react';

import DetailSectionWrapper from '@/domains/product/components/DetailSectionWrapper';
import { ProductOptionType } from '@/domains/product/types/productDetailType';
import useGetProductOptionQuery from '@/domains/product/queries/useGetProductOptionQuery';
import PaddingWrapper from '@/shared/components/PaddingWrapper';

import CategoryOption from './CategoryOption';
import IngredientInfo from './IngredientInfo';
import NutrientInfo from './NutrientInfo';
import OrderAvailableDays from './OrderAvailableDays';

const ProductOptionsSection = ({ productId }: { productId: number }) => {
  const { data: productOption } = useGetProductOptionQuery(productId);
  const [activeOption, setActiveOption] = useState<{ [key: number]: boolean }>({});

  const handleCategoryClick = (id: number) => {
    setActiveOption((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <DetailSectionWrapper title="상품 옵션">
      {productOption?.products.map((product: ProductOptionType) => (
        <div key={product.id}>
          <CategoryOption
            product={product}
            isExpended={activeOption[product.id]}
            onClick={() => handleCategoryClick(product.id)}
          />
          {activeOption[product.id] && (
            <PaddingWrapper className="flex flex-col gap-4">
              <IngredientInfo product={product} />
              <OrderAvailableDays product={product} />
              <NutrientInfo product={product} />
            </PaddingWrapper>
          )}
        </div>
      ))}
    </DetailSectionWrapper>
  );
};

export default ProductOptionsSection;
