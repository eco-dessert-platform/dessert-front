import React from 'react';

interface Props {
  options: Array<string>;
  onClick: (option: string) => void;
}

const SelectOption = ({ options, onClick }: Props) => (
  <ul className="absolute mb-[-190px] left-1/2 -translate-x-2/4 z-5501 w-max rounded-[10px] shadow-sm bg-white">
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
          className={`px-[16px] py-[10px] typo-body-12-medium border-gray-100 cursor-pointer hover:bg-gray-50 ${borderStyle} ${hoverRoundedStyle}`}
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
