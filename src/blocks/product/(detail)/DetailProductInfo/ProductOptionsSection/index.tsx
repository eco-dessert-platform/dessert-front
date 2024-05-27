'use client';

import DetailSectionWrapper from '@/domains/product/components/DetailSectionWrapper';
import ArrowIcons from '@/shared/components/icons/ArrowIcons';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import useToggle from '@/shared/hooks/useToggle';

import IngredientInfo from './IngredientInfo';
import NutrientInfo from './NutrientInfo';
import OrderAvailableDays from './OrderAvailableDays';

const ProductOptionsSetion = ({ data }: { data: any }) => {
  const { isActive, toggle } = useToggle();

  const handleCategoryClick = () => {
    toggle();
  };

  return (
    <DetailSectionWrapper title="상품 옵션" className="px-0 pt-0">
      <PaddingWrapper className="border border-b border-gray-100 typo-title-14-regular text-gray-800">
        <button
          type="button"
          onClick={handleCategoryClick}
          className="flex items-center justify-between w-full"
        >
          example
          <ArrowIcons shape="large-down" />
        </button>
      </PaddingWrapper>
      {isActive && (
        <PaddingWrapper className="flex flex-col gap-4 pb-[0]">
          <IngredientInfo />
          <OrderAvailableDays data={data} />
          <NutrientInfo />
        </PaddingWrapper>
      )}
    </DetailSectionWrapper>
  );
};

export default ProductOptionsSetion;