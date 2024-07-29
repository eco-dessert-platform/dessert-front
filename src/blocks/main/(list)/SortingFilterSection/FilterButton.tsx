'use client';

import { useEffect, useState } from 'react';

import { twMerge } from 'tailwind-merge';

import FilterModal from '@/domains/product/components/alert-box/FilterModal';
import { FILTER_FAMILY_ID } from '@/domains/product/constants/filterFamilyID';
import XX from '@/domains/search/assets/xx.svg';
import ArrowIcons from '@/shared/components/icons/ArrowIcons';
import useModal from '@/shared/hooks/useModal';

interface SelectProps {
  className?: string;
  options: Array<string>;
  selectedOption: string;
  isOpenModal?: boolean;
  onChange?: (_selectedOption: string) => void;
}

const FilterButton = ({
  className,
  options,
  selectedOption,
  isOpenModal,
  onChange
}: SelectProps) => {
  const [isExpended, setIsExpended] = useState(false);

  const { openModal } = useModal();

  const openFilterModal = () => {
    openModal(<FilterModal filterFamilyId={FILTER_FAMILY_ID.main} />);
  };

  useEffect(() => {
    const handleWindowClick = (e: MouseEvent) => {
      const clickedTarget = e.target;
      if (clickedTarget instanceof Element && clickedTarget.closest('.selectEl')) return;

      setIsExpended(false);
    };
    window.addEventListener('click', handleWindowClick);

    return () => window.removeEventListener('click', handleWindowClick);
  }, []);

  const handleSelectClick = () => {
    setIsExpended(!isExpended);
  };
  const handleDeleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };
  return (
    <button
      type="button"
      className="selectEl relative inline-block text-gray-900 typo-body-12-medium"
      onClick={isOpenModal ? openFilterModal : handleSelectClick}
    >
      <div
        className={twMerge(
          'flex items-center gap-[4px] p-[8px] pl-[12px] border-solid border-[1px] border-gray-200 rounded-[50px] cursor-pointer',
          className
        )}
      >
        {selectedOption}
        <span className={`${isExpended ? 'rotate-180 transition-all' : ''}`}>
          {selectedOption ? (
            <button type="button" onClick={handleDeleteClick} aria-label="delete button">
              <XX />
            </button>
          ) : (
            <ArrowIcons shape="down" />
          )}
        </span>
      </div>

      {isExpended && (
        <ul className="absolute mt-[8px] top-full left-1/2 -translate-x-2/4 z-[101] w-max rounded-[10px] shadow bg-white">
          {options.map((option, index) => {
            const firstOption = index === 0;
            const lastOption = index === options.length - 1;

            const borderStyle = lastOption ? 'border-b-0' : 'border-b-[1px]';

            let hoverRoundedStyle = '';
            if (firstOption) hoverRoundedStyle = 'hover:rounded-t-[10px]';
            if (lastOption) hoverRoundedStyle = 'hover:rounded-b-[10px]';

            return (
              <li
                key={option}
                className={`px-[16px] py-[10px] border-gray-100 cursor-pointer hover:bg-gray-50 ${borderStyle} ${hoverRoundedStyle}`}
              >
                <button
                  type="button"
                  onClick={() => {
                    if (onChange) onChange(option);
                  }}
                >
                  {option}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </button>
  );
};

export default FilterButton;
