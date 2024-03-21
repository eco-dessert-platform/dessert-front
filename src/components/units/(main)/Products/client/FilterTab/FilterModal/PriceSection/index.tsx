'use client';

import { useRecoilState } from 'recoil';
import { priceTempState } from '@/components/units/(main)/Products/atoms';
import PriceInputContainer from '@/components/units/(main)/Products/client/FilterTab/FilterModal/PriceSection/PriceInputContainer';
import PriceSlide from '@/components/units/(main)/Products/client/FilterTab/FilterModal/PriceSection/PriceSlide';

const PriceSection = () => {
  const [price, setPrice] = useRecoilState(priceTempState);

  const handleMinPriceChange = (newValue: number) => {
    if (newValue > price.maxPrice) {
      return setPrice(prev => ({ ...prev, minPrice: price.maxPrice }));
    }

    setPrice(prev => ({ ...prev, minPrice: newValue }));
  };

  const handleMaxPriceChange = (newValue: number) => {
    if (newValue < price.minPrice) {
      return setPrice(prev => ({ ...prev, maxPrice: price.minPrice }));
    }

    setPrice(prev => ({ ...prev, maxPrice: newValue }));
  };

  return (
    <div className="flex flex-col gap-[10px] pt-[16px] pb-[26px]">
      <div className="text-sm">가격</div>
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
    </div>
  );
};

export default PriceSection;
