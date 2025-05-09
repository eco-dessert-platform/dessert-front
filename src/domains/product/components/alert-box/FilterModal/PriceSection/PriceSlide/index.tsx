'use client';

import RangeInput from '@/domains/product/components/alert-box/FilterModal/PriceSection/PriceSlide/RangeInput';
import SlideBar from '@/domains/product/components/alert-box/FilterModal/PriceSection/PriceSlide/SlideBar';
import { LIMIT_MAX_PRICE } from '@/domains/product/constants/priceLimit';

interface PriceSlideProps {
  price: Array<number>;
  onPriceChange: (newPrice: Array<number>) => void;
}

const PriceSlide = ({ price, onPriceChange }: PriceSlideProps) => {
  const minPrice = Math.min(...price);
  const maxPrice = Math.max(...price);
  const leftPercent = (minPrice / LIMIT_MAX_PRICE) * 100;
  const rightPercent = 100 - (maxPrice / LIMIT_MAX_PRICE) * 100;

  return (
    <div className="relative flex flex-col justify-center h-[24px]">
      <SlideBar left={leftPercent} right={rightPercent} />
      <div className="absolute top-0 w-full h-[24px]">
        <RangeInput value={price[0]} onChange={(newValue) => onPriceChange([newValue, price[1]])} />
        <RangeInput value={price[1]} onChange={(newValue) => onPriceChange([price[0], newValue])} />
      </div>
    </div>
  );
};

export default PriceSlide;
