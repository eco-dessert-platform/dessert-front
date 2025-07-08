'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/shared/utils/cn';
import ArrowIcons from '../icons/ArrowIcons';

interface SelectProps {
  options: Array<string>;
  selectedOption: string;
  onChange: (_selectedOption: string) => void;
}

const Select = ({ options, selectedOption, onChange }: SelectProps) => {
  const [isExpended, setIsExpended] = useState(false);

  useEffect(() => {
    const handleWindowClick = (e: MouseEvent) => {
      const clickedTarget = e.target;
      if (clickedTarget instanceof Element && clickedTarget.closest('.selectEl')) return;

      setIsExpended(false);
    };
    window.addEventListener('click', handleWindowClick);

    return () => window.removeEventListener('click', handleWindowClick);
  }, []);

  return (
    <div className="selectEl typo-body-12-medium relative inline-block text-center text-gray-900">
      <button
        type="button"
        onClick={() => setIsExpended(!isExpended)}
        className="flex cursor-pointer items-center gap-[4px] rounded-[50px]"
      >
        {selectedOption}
        <span className={cn(isExpended && 'rotate-180 transition-all')}>
          <ArrowIcons shape="down" />
        </span>
      </button>
      {isExpended && (
        <ul className="absolute top-full left-1/2 z-101 mt-[8px] w-max -translate-x-2/4 rounded-[10px] bg-white shadow-sm">
          {options.map((option, index) => {
            const firstOption = index === 0;
            const lastOption = index === options.length - 1;

            const borderStyle = lastOption ? 'border-b-0' : 'border-b';

            let hoverRoundedStyle = '';
            if (firstOption) hoverRoundedStyle = 'hover:rounded-t-[10px]';
            if (lastOption) hoverRoundedStyle = 'hover:rounded-b-[10px]';

            return (
              <li
                key={option}
                className={`cursor-pointer border-gray-100 px-[16px] py-[10px] hover:bg-gray-50 ${borderStyle} ${hoverRoundedStyle}`}
              >
                <button
                  type="button"
                  onClick={() => {
                    setIsExpended(false);
                    onChange(option);
                  }}
                >
                  {option}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Select;
