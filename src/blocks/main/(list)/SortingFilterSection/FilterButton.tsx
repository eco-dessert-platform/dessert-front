'use client';

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
  const { openModal } = useModal();

  const handleClick = () => {
    if (isFiltered) {
      onReset();
    } else {
      openModal(<FilterModal filterFamilyId={filterFamilyId} />);
    }
  };

  return (
    <button
      type="button"
      aria-label="filter button"
      onClick={handleClick}
      className={cn(
        'flex items-center gap-[4px] p-[8px] pl-[12px] border-solid border-[1px] border-gray-200 rounded-[50px] cursor-pointer typo-body-12-regular',
        isFiltered && 'border-primaryOrangeRed text-primaryOrangeRed'
      )}
    >
      <span>{text}</span>
      {isFiltered ? <CloseIcon shape="no-bg-16-orange" /> : <ArrowIcons shape="down" />}
    </button>
  );
};

export default FilterButton;
