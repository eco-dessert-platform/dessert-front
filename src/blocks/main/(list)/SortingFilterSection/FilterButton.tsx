'use client';

import React, { KeyboardEvent } from 'react';
import FilterModal from '@/domains/product/components/alert-box/FilterModal';
import { FilterFamilyIDType } from '@/domains/product/types/filterType';
import { CloseIcon } from '@/shared/components/icons';
import ArrowIcons from '@/shared/components/icons/ArrowIcons';
import useModal from '@/shared/hooks/useModal';
import { cn } from '@/shared/utils/cn';

interface SelectProps {
  filterFamilyId: FilterFamilyIDType;
  text: string;
  isFiltered?: boolean;
  onReset: () => void;
}

const FilterButton = ({ filterFamilyId, text, isFiltered = false, onReset }: SelectProps) => {
  const { openModal } = useModal();

  const handleClick = () => {
    openModal(<FilterModal filterFamilyId={filterFamilyId} />);
  };

  const handleResetClick = (e: React.MouseEvent | KeyboardEvent) => {
    e.stopPropagation();
    onReset();
  };

  const handleResetKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleResetClick(e);
    }
  };

  return (
    <button
      type="button"
      aria-label="filter button"
      onClick={handleClick}
      className={cn(
        'flex cursor-pointer items-center gap-[4px] rounded-[50px] border-[1px] border-solid p-[8px] pl-[12px]',
        isFiltered
          ? 'border-primary-orange-red text-primary-orange-red typo-body-12-bold'
          : 'typo-body-12-regular border-gray-200 text-gray-900'
      )}
    >
      <span>{text}</span>
      {isFiltered ? (
        <span
          role="button"
          tabIndex={0}
          onClick={handleResetClick}
          onKeyDown={handleResetKeyDown}
          aria-label="reset filter"
        >
          <CloseIcon shape="no-bg-16-orange" />
        </span>
      ) : (
        <span>
          <ArrowIcons shape="down" />
        </span>
      )}
    </button>
  );
};

export default FilterButton;
