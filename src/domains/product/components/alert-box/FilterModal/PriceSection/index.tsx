'use client';

import { useRecoilState } from 'recoil';

import { priceTempState } from '@/domains/product/atoms';
import PriceInputContainer from '@/domains/product/components/alert-box/FilterModal/PriceSection/PriceInputContainer';
import { FilterFamilyIDType } from '@/domains/product/types/filterType';
import PaddingWrapper from '@/shared/components/PaddingWrapper';

interface PriceSectionProps {
  filterFamilyId: FilterFamilyIDType;
}

const PriceSection = ({ filterFamilyId }: PriceSectionProps) => {
  const [, setPrice] = useRecoilState(priceTempState(filterFamilyId));

  return (
    <PaddingWrapper className="flex flex-col gap-[10px] pb-[26px]">
      <div className="typo-title-14-semibold text-gray-700">가격</div>
      <PriceInputContainer
        // minPrice={Math.min(...price)}
        // maxPrice={Math.max(...price)}
        minPrice={1}
        maxPrice={1000}
        onPriceChange={setPrice}
      />
      {/* <PriceSlide price={price} onPriceChange={setPrice} /> */}
    </PaddingWrapper>
  );
};

export default PriceSection;
