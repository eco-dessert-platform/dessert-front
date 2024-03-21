'use client';

import { MouseEvent } from 'react';

interface TabButtonProps {
  name: string;
  isActive: boolean;
  onClick: (_e: MouseEvent<HTMLButtonElement>) => void;
}

const TabButton = ({ name, isActive, onClick }: TabButtonProps) => {
  return (
    <button
      className={`inline-block w-1/2 h-full text-center text-14 leading-150 tracking-tight-2 ${
        isActive ? 'text-gray-900 font-medium' : 'text-gray-500 font-normal'
      }`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default TabButton;
