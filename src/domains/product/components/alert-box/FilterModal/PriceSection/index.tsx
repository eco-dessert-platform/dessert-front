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

  return (
    <PaddingWrapper className="flex flex-col gap-[10px] pb-[26px]">
      <div className="text-14 font-semibold leading-150 tracking-tight-2">가격</div>
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
