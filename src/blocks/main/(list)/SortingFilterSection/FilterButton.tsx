'use client';

import { useState } from 'react';

import { useRecoilState } from 'recoil';
import { twMerge } from 'tailwind-merge';

import { filterValueState } from '@/domains/product/atoms';
import FilterModal from '@/domains/product/components/alert-box/FilterModal';
import { FILTER_FAMILY_ID } from '@/domains/product/constants/filterFamilyID';
import { INIT_FILTER_VALUE } from '@/domains/product/constants/filterValues';
import XX from '@/domains/search/assets/xx.svg';
import ArrowIcons from '@/shared/components/icons/ArrowIcons';
import useModal from '@/shared/hooks/useModal';

interface FilterValue {
  category: string;
  tags: string;
  price: string;
}

interface SelectProps {
  filterType: keyof FilterValue;
  defaultTitle: string;
  className?: string;
}

const FilterButton = ({ filterType, defaultTitle, className }: SelectProps) => {
  const [filterValue, setFilterValue] = useRecoilState(filterValueState(FILTER_FAMILY_ID.main));

  const [isClick, setIsClick] = useState(false);

  const { openModal } = useModal();

  const openFilterModal = () => {
    setIsClick(true);
    openModal(<FilterModal filterFamilyId={FILTER_FAMILY_ID.main} />);
  };

  const resetFilterValue = () => {
    setFilterValue((prev) => ({
      ...prev,
      [filterType]: INIT_FILTER_VALUE[filterType]
    }));
  };

  const clickFilterChip = () => {
    setFilterValue((prev) => ({
      ...prev,
      [filterType]: filterValue[filterType]
    }));
    openFilterModal();
  };

  const clickResetButton = (
    e: React.MouseEvent<HTMLSpanElement> | React.KeyboardEvent<HTMLDivElement>
  ) => {
    e.stopPropagation();
    resetFilterValue();
  };

  return (
    <button
      type="button"
      className={`selectEl relative inline-block typo-body-12-medium text-gray-900 `}
      onClick={clickFilterChip}
      aria-label="delete button"
    >
      <div
        className={twMerge(
          'flex items-center gap-[4px] p-[8px] pl-[12px] border-solid border-[1px] border-gray-200 rounded-[50px] cursor-pointer',
          filterValue[filterType] ? 'border-primaryOrangeRed text-primaryOrangeRed' : '',
          className
        )}
      >
        {filterValue[filterType] || defaultTitle}
        <div>
          {isClick ? (
            <div
              role="button"
              tabIndex={0}
              onClick={clickResetButton}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  clickResetButton(e);
                }
              }}
              aria-label="delete button"
            >
              <XX />
            </div>
          ) : (
            <ArrowIcons shape="down" />
          )}
        </div>
      </div>
    </button>
  );
};

export default FilterButton;
