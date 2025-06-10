import React from 'react';

interface Props {
  options: Array<string>;
  onClick: (option: string) => void;
}

const SelectOption = ({ options, onClick }: Props) => (
  <ul className="absolute left-1/2 z-5501 mb-[-190px] w-max -translate-x-2/4 rounded-[10px] bg-white shadow-sm">
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
          className={`typo-body-12-medium cursor-pointer border-gray-100 px-[16px] py-[10px] hover:bg-gray-50 ${borderStyle} ${hoverRoundedStyle}`}
        >
          <button type="button" onClick={() => onClick(option)}>
            {option}
          </button>
        </li>
      );
    })}
  </ul>
);

export default SelectOption;
