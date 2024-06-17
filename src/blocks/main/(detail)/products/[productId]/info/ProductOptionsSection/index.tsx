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

const ProductOptionsSetion = ({ productId }: { productId: string }) => {
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
      {productOption?.products.map(
        ({
          id,
          title,
          orderType,
          orderAvailableDate,
          orderAvailableWeek,
          nutrient,
          glutenFreeTag,
          highProteinTag,
          sugarFreeTag,
          veganTag,
          ketogenicTag,
          isNotified
        }: ProductOptionType) => (
          <div key={id}>
            <CategoryOption title={title} onClick={() => handleCategoryClick(id)} />
            {activeOption[id] && (
              <PaddingWrapper className="flex flex-col gap-4">
                <IngredientInfo
                  glutenFreeTag={glutenFreeTag}
                  highProteinTag={highProteinTag}
                  sugarFreeTag={sugarFreeTag}
                  veganTag={veganTag}
                  ketogenicTag={ketogenicTag}
                />
                <OrderAvailableDays
                  orderType={orderType}
                  orderAvailableWeek={orderAvailableWeek}
                  orderAvailableDate={orderAvailableDate}
                  isNotified={isNotified}
                />
                <NutrientInfo nutrient={nutrient} />
              </PaddingWrapper>
            )}
          </div>
        )
      )}
    </DetailSectionWrapper>
  );
};

export default ProductOptionsSetion;
