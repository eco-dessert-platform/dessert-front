'use client';

import { useRecoilState } from 'recoil';
import { priceTempState } from '@/domains/product/atoms';
import { FilterFamilyIDType } from '@/domains/product/types/filterType';
import PriceInputContainer from '@/domains/product/components/alert-box/FilterModal/PriceSection/PriceInputContainer';
import PriceSlide from '@/domains/product/components/alert-box/FilterModal/PriceSection/PriceSlide';
import PaddingWrapper from '@/shared/components/PaddingWrapper';

interface PriceSectionProps {
  filterFamilyId: FilterFamilyIDType;
}

const PriceSection = ({ filterFamilyId }: PriceSectionProps) => {
  const [price, setPrice] = useRecoilState(priceTempState(filterFamilyId));

  const handleMinPriceChange = (newValue: number) => {
    if (newValue > price.maxPrice) {
      return setPrice((prev) => ({ ...prev, minPrice: price.maxPrice }));
    }

    return setPrice((prev) => ({ ...prev, minPrice: newValue }));
  };

  const handleMaxPriceChange = (newValue: number) => {
    if (newValue < price.minPrice) {
      return setPrice((prev) => ({ ...prev, maxPrice: price.minPrice }));
    }

    return setPrice((prev) => ({ ...prev, maxPrice: newValue }));
  };

  return (
    <PaddingWrapper className="flex flex-col gap-[10px] pb-[26px]">
      <div className="text-14 font-semibold leading-150 tracking-tight-2">가격</div>
      <PriceInputContainer
        minPrice={price.minPrice}
        maxPrice={price.maxPrice}
        onMinPriceChange={handleMinPriceChange}
        onMaxPriceChange={handleMaxPriceChange}
      />
      <PriceSlide
        minValue={price.minPrice}
        maxValue={price.maxPrice}
        onMinValueChange={handleMinPriceChange}
        onMaxValueChange={handleMaxPriceChange}
      />
    </PaddingWrapper>
  );
};

export default PriceSection;
