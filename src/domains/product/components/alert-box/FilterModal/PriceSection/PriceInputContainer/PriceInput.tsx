'use client';

import { twMerge } from 'tailwind-merge';
import { INPUT_STYLE } from '@/shared/constants/inputStyle';
import {
  LIMIT_MIN_PRICE,
  LIMIT_MAX_PRICE,
  PRICE_RANGE_STEP
} from '@/domains/product/constants/priceLimit';
import Input from '@/shared/components/Input';

interface PriceInputProps {
  value: number;
  onChange: (_newValue: number) => void;
}

const PriceInput = ({ value, onChange }: PriceInputProps) => {
  const isLimitValue = value === LIMIT_MIN_PRICE || value === LIMIT_MAX_PRICE;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value.replaceAll(',', ''));

    if (Number.isNaN(newValue)) return;
    if (newValue < LIMIT_MIN_PRICE || newValue > LIMIT_MAX_PRICE) return;

    onChange(newValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const pressedKey = e.key;

    if (pressedKey === 'ArrowUp' && value < LIMIT_MAX_PRICE) onChange(value + PRICE_RANGE_STEP);
    if (pressedKey === 'ArrowDown' && LIMIT_MIN_PRICE < value) onChange(value - PRICE_RANGE_STEP);
  };

  return (
    <div
      className={twMerge(
        `flex items-center ${INPUT_STYLE} text-14 tracking-tight-2 leading-150 font-bold`,
        'py-[8px]'
      )}
    >
      <Input
        value={`${value.toLocaleString()}`}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={(e) => e.target.select()}
        className={`rounded-none border-none p-0 text-right ${isLimitValue ? 'text-gray-500' : 'text-gray-900'}`}
      />
      <span className={`${isLimitValue ? 'text-gray-500' : 'text-gray-900'}`}>원</span>
    </div>
  );
};

export default PriceInput;
