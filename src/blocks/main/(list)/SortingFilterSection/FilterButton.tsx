'use client';

import React, { KeyboardEvent } from 'react';
import FilterModal from '@/domains/product/components/alert-box/FilterModal';
import { CloseIcon } from '@/shared/components/icons';
import ArrowIcons from '@/shared/components/icons/ArrowIcons';
import useModal from '@/shared/hooks/useModal';
import { cn } from '@/shared/utils/cn';

interface SelectProps {
  text: string;
  isFiltered?: boolean;
  onReset: () => void;
}

const FilterButton = ({ text, isFiltered = false, onReset }: SelectProps) => {
  const { openModal } = useModal();

  const handleClick = () => {
    openModal(<FilterModal />);
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
        'flex items-center gap-[4px] p-[8px] pl-[12px] border-solid border-[1px] rounded-[50px] cursor-pointer',
        isFiltered
          ? 'border-primary-orange-red text-primary-orange-red typo-body-12-bold'
          : 'border-gray-200 text-gray-900 typo-body-12-regular'
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
