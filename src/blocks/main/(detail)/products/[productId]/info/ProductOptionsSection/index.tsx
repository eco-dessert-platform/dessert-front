'use client';

import DetailSectionWrapper from '@/domains/product/components/DetailSectionWrapper';
import { IDetailProductType, ProductType } from '@/domains/product/types/productDetailType';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import useToggle from '@/shared/hooks/useToggle';

import CategoryOption from './CategoryOption';
import IngredientInfo from './IngredientInfo';
import NutrientInfo from './NutrientInfo';
import OrderAvailableDays from './OrderAvailableDays';

const ProductOptionsSetion = ({ productData }: { productData: IDetailProductType }) => {
  const { isActive, toggle } = useToggle();

  const handleCategoryClick = () => {
    toggle();
  };

  return (
    <DetailSectionWrapper title="상품 옵션">
      {productData.products.map((item: ProductType) => (
        <>
          <CategoryOption onClick={handleCategoryClick} option={item} />
          {isActive && (
            <PaddingWrapper className="flex flex-col gap-4">
              <IngredientInfo item={item} />
              <OrderAvailableDays item={item} />
              <NutrientInfo />
            </PaddingWrapper>
          )}
        </>
      ))}
    </DetailSectionWrapper>
  );
};

export default ProductOptionsSetion;
