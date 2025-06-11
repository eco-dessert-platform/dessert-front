'use client';

import '@/domains/product/css/price-input.css';
import {
  LIMIT_MIN_PRICE,
  LIMIT_MAX_PRICE,
  PRICE_RANGE_STEP
} from '@/domains/product/constants/priceLimit';

interface RageInputProps {
  value: number;
  onChange: (_newValue: number) => void;
}

const RangeInput = ({ value, onChange }: RageInputProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  return (
    <input
      type="range"
      value={value}
      onChange={handleInputChange}
      min={LIMIT_MIN_PRICE}
      max={LIMIT_MAX_PRICE}
      step={PRICE_RANGE_STEP}
      className="pointer-events-none absolute top-0 h-full w-full appearance-none bg-transparent"
    />
  );
};

export default RangeInput;
