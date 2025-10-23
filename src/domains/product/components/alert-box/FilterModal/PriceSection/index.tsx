'use client';

import { useEffect } from 'react';
import { useAtom } from 'jotai';

import { priceAtom } from '@/domains/product/atoms';
import PriceInputContainer from '@/domains/product/components/alert-box/FilterModal/PriceSection/PriceInputContainer';
import PriceSlide from '@/domains/product/components/alert-box/FilterModal/PriceSection/PriceSlide';
import { FilterFamilyIDType } from '@/domains/product/types/filterType';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import { useFilter } from '@/shared/hooks/useFilter';

interface Props {
  filterFamilyId: FilterFamilyIDType;
}

const PriceSection = ({ filterFamilyId }: Props) => {
  const [filterValue] = useFilter(filterFamilyId);
  const [price, setPrice] = useAtom(priceAtom);

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
