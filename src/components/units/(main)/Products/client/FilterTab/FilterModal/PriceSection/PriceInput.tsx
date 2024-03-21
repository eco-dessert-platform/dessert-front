'use client';

import { INPUT_STYLE } from '@/commons/constants/inputStyle';
import { LIMIT_MIN_PRICE, LIMIT_MAX_PRICE, PRICE_RANGE_STEP } from '@/commons/constants/priceLimit';
import Input from '@/components/commons/inputs/Input';

interface PriceInputProps {
  value: number;
  onChange: (_newValue: number) => void;
}

const PriceInput = ({ value, onChange }: PriceInputProps) => {
  const isLimitValue = value === LIMIT_MIN_PRICE || value === LIMIT_MAX_PRICE;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value.replaceAll(',', ''));

    if (isNaN(newValue)) return;
    if (newValue < LIMIT_MIN_PRICE || newValue > LIMIT_MAX_PRICE) return;

    onChange(newValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const pressedKey = e.key;

    if (pressedKey === 'ArrowUp' && value < LIMIT_MAX_PRICE) onChange(value + PRICE_RANGE_STEP);
    if (pressedKey === 'ArrowDown' && LIMIT_MIN_PRICE < value) onChange(value - PRICE_RANGE_STEP);
  };

  return (
    <div className={`flex items-center ${INPUT_STYLE}`}>
      <Input
        value={`${value.toLocaleString()}`}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className={`p-0 pr-[5px] border-none text-right ${isLimitValue ? 'text-gray-500' : 'text-gray-900'}`}
      />
      <span className="text-gray-500">원</span>
    </div>
  );
};

export default PriceInput;
