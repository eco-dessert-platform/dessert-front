'use state';

import PriceInput from '@/components/units/(main)/Products/client/FilterTab/FilterModal/PriceSection/PriceInput';
import { useTmpPrice } from '@/components/units/(main)/Products/hooks/useTmpPrice';

interface PriceInputContainerProps {
  minPrice: number;
  maxPrice: number;
  onMinPriceChange: (_newValue: number) => void;
  onMaxPriceChange: (_newValue: number) => void;
}

const PriceInputContainer = ({
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange
}: PriceInputContainerProps) => {
  const { tmpMinPrice, tmpMaxPrice, handleTmpMinPriceChange, handleTmpMaxPriceChange } =
    useTmpPrice({ minPrice, maxPrice });

  const handleApplyButtonClick = () => {
    if (tmpMinPrice > tmpMaxPrice) {
      onMinPriceChange(tmpMaxPrice);
      onMaxPriceChange(tmpMinPrice);
      return;
    }

    onMinPriceChange(tmpMinPrice);
    onMaxPriceChange(tmpMaxPrice);
  };

  return (
    <div className="flex gap-[10px] justify-between items-center">
      <div className="flex flex-1 gap-[6px] items-center">
        <PriceInput value={tmpMinPrice} onChange={handleTmpMinPriceChange} />
        ~
        <PriceInput value={tmpMaxPrice} onChange={handleTmpMaxPriceChange} />
      </div>
      <span
        className="font-semibold text-14 text-primaryOrangeRed leading-150 tracking-tight-2 cursor-pointer"
        onClick={handleApplyButtonClick}
      >
        적용
      </span>
    </div>
  );
};

export default PriceInputContainer;
