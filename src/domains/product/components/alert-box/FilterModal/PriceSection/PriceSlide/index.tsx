'use client';

import RangeInput from '@/domains/product/components/alert-box/FilterModal/PriceSection/PriceSlide/RangeInput';
import SlideBar from '@/domains/product/components/alert-box/FilterModal/PriceSection/PriceSlide/SlideBar';
import { LIMIT_MAX_PRICE } from '@/domains/product/constants/priceLimit';

interface PriceSlideProps {
  minValue: number;
  maxValue: number;
  onMinValueChange: (_newValue: number) => void;
  onMaxValueChange: (_newValue: number) => void;
}

const PriceSlide = ({
  minValue,
  maxValue,
  onMinValueChange,
  onMaxValueChange
}: PriceSlideProps) => {
  const leftPercent = (minValue / LIMIT_MAX_PRICE) * 100;
  const rightPercent = 100 - (maxValue / LIMIT_MAX_PRICE) * 100;

  return (
    <div className="relative flex flex-col justify-center h-[24px]">
      <SlideBar left={leftPercent} right={rightPercent} />
      <div className="absolute top-0 w-full h-[24px]">
        <RangeInput value={minValue} onChange={onMinValueChange} />
        <RangeInput value={maxValue} onChange={onMaxValueChange} />
      </div>
    </div>
  );
};

export default PriceSlide;
