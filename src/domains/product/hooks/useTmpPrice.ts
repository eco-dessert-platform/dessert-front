import { useState, useEffect } from 'react';

interface UsePriceProps {
  minPrice: number;
  maxPrice: number;
}

export const useTmpPrice = ({ minPrice, maxPrice }: UsePriceProps) => {
  const [tmpMinPrice, setTmpMinPrice] = useState(minPrice);
  const [tmpMaxPrice, setTmpMaxPrice] = useState(maxPrice);

  useEffect(() => {
    setTmpMinPrice(minPrice);
  }, [minPrice]);

  useEffect(() => {
    setTmpMaxPrice(maxPrice);
  }, [maxPrice]);

  const handleTmpMinPriceChange = (newValue: number) => setTmpMinPrice(newValue);

  const handleTmpMaxPriceChange = (newValue: number) => setTmpMaxPrice(newValue);

  return { tmpMinPrice, tmpMaxPrice, handleTmpMinPriceChange, handleTmpMaxPriceChange };
};
