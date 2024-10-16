'use client';

import { useRef } from 'react';
import FilterModal from '@/domains/product/components/alert-box/FilterModal';
import { FilterFamilyIDType } from '@/domains/product/types/filterType';
import { CloseIcon } from '@/shared/components/icons';
import ArrowIcons from '@/shared/components/icons/ArrowIcons';
import useModal from '@/shared/hooks/useModal';
import { cn } from '@/shared/utils/cn';

interface SelectProps {
  text: string;
  isFiltered?: boolean;
  filterFamilyId: FilterFamilyIDType;
  onReset: () => void;
}

const FilterButton = ({ text, isFiltered = false, filterFamilyId, onReset }: SelectProps) => {
  const closeRef = useRef<HTMLSpanElement>(null);
  const { openModal } = useModal();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    openModal(<FilterModal filterFamilyId={filterFamilyId} />);

    if (closeRef.current && e.target instanceof Element && closeRef.current.contains(e.target))
      onReset();
  };

  return (
    <button
      type="button"
      aria-label="filter button"
      onClick={handleClick}
      className={cn(
        'flex items-center gap-[4px] p-[8px] pl-[12px] border-solid border-[1px] rounded-[50px] cursor-pointer',
        isFiltered
          ? 'border-primaryOrangeRed text-primaryOrangeRed typo-body-12-bold'
          : 'border-gray-200 text-gray-900 typo-body-12-regular'
      )}
    >
      <span>{text}</span>
      <span ref={closeRef}>
        {isFiltered ? <CloseIcon shape="no-bg-16-orange" /> : <ArrowIcons shape="down" />}
      </span>
    </button>
  );
};

export default FilterButton;
