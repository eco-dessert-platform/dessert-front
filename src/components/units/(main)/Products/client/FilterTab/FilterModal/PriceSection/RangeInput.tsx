'use client';

import { LIMIT_MIN_PRICE, LIMIT_MAX_PRICE, PRICE_RANGE_STEP } from '@/commons/constants/priceLimit';

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
      className="absolute top-0 w-full h-full appearance-none bg-transparent pointer-events-none"
    />
  );
};

export default RangeInput;
