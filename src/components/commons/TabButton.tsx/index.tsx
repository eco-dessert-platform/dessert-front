import { MouseEvent } from 'react';

interface TabButtonProps {
  handleClickBtn: (_e: MouseEvent<HTMLButtonElement>) => void;
  name: string;
  ProductName: string;
  isCategoryTab: boolean;
}

const TabButton = ({ name, ProductName, handleClickBtn }: TabButtonProps) => {
  return (
    <button
      className={`inline-block w-1/2 h-full text-center text-14 leading-150 tracking-tight-2 ${
        ProductName === name ? 'text-gray-900 font-medium' : 'text-gray-500 font-normal'
      }`}
      onClick={handleClickBtn}
      name={name}
    >
      {name}
    </button>
  );
};

export default TabButton;
