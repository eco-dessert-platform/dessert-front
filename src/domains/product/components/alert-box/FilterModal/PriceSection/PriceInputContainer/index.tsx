'use state';

import { useEffect, useState, memo, useMemo } from 'react';
import PriceInput from '@/domains/product/components/alert-box/FilterModal/PriceSection/PriceInputContainer/PriceInput';
import { useDebounce } from '@/shared/hooks/useDebounce';

interface PriceInputContainerProps {
  minPrice: number;
  maxPrice: number;
  onPriceChange: (price: Array<number>) => void;
}

const PriceInputContainer = ({ minPrice, maxPrice, onPriceChange }: PriceInputContainerProps) => {
  const [tmpMinPrice, setTmpMinPrice] = useState(minPrice);
  const [tmpMaxPrice, setTmpMaxPrice] = useState(maxPrice);
  const tmpPrice = useMemo(() => [tmpMinPrice, tmpMaxPrice], [tmpMinPrice, tmpMaxPrice]);
  const debouncedPrice = useDebounce({ value: tmpPrice, delay: 1000 });

  useEffect(() => {
    setTmpMinPrice(minPrice);
    setTmpMaxPrice(maxPrice);
  }, [minPrice, maxPrice]);

  useEffect(() => {
    onPriceChange(debouncedPrice);
  }, [onPriceChange, debouncedPrice]);

  return (
    <div className="flex gap-[6px] items-center">
      <PriceInput value={tmpMinPrice} onChange={setTmpMinPrice} />
      ~
      <PriceInput value={tmpMaxPrice} onChange={setTmpMaxPrice} />
    </div>
  );
};

export default memo(PriceInputContainer);
