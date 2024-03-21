'use client';

import '@/components/units/(main)/Products/client/FilterTab/css/price-input.css';
import RangeInput from '@/components/units/(main)/Products/client/FilterTab/FilterModal/PriceSection/RangeInput';
import SlideBar from '@/components/units/(main)/Products/client/FilterTab/FilterModal/PriceSection/SlideBar';
import { LIMIT_MAX_PRICE } from '@/commons/constants/priceLimit';

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
    <div className="relative h-[12px]">
      <SlideBar left={leftPercent} right={rightPercent} />
      <div className="absolute top-0 w-full h-[20px]">
        <RangeInput value={minValue} onChange={onMinValueChange} />
        <RangeInput value={maxValue} onChange={onMaxValueChange} />
      </div>
    </div>
  );
};

export default PriceSlide;
