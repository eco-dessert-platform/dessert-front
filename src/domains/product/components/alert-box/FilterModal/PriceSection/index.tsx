'use client';

import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { filterValueState, priceTempState } from '@/domains/product/atoms';
import PriceInputContainer from '@/domains/product/components/alert-box/FilterModal/PriceSection/PriceInputContainer';
import { FilterFamilyIDType } from '@/domains/product/types/filterType';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import PriceSlide from '@/domains/product/components/alert-box/FilterModal/PriceSection/PriceSlide';

interface PriceSectionProps {
  filterFamilyId: FilterFamilyIDType;
}

const PriceSection = ({ filterFamilyId }: PriceSectionProps) => {
  const filterValue = useRecoilValue(filterValueState(filterFamilyId));
  const [price, setPrice] = useRecoilState(priceTempState(filterFamilyId));

  useEffect(() => {
    setPrice(filterValue.price);
  }, [filterValue, setPrice]);

  return (
    <PaddingWrapper className="flex flex-col gap-[10px] pb-[26px]">
      <div className="typo-title-14-semibold text-gray-700">가격</div>
      <PriceInputContainer
        minPrice={Math.min(...price)}
        maxPrice={Math.max(...price)}
        onPriceChange={setPrice}
      />
      <PriceSlide price={price} onPriceChange={setPrice} />
    </PaddingWrapper>
  );
};

export default PriceSection;
