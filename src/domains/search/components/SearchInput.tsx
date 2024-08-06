'use client';

import { useEffect, useRef } from 'react';

import { Search16Icon } from '@/shared/components/icons';
import Input from '@/shared/components/Input';

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  onChange?: (_: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (_: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ value, onChange, onKeyDown, ...rest }: SearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <div className="flex items-center gap-[6px] px-[16px] py-[10px] w-full bg-redGray-30 rounded-[50px] cursor-pointer">
      <Search16Icon />
      <Input
        type="text"
        ref={inputRef}
        className="flex-1 p-0 !text-gray-900 border-none rounded-none outline-none bg-redGray-30 typo-title-14-medium"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        {...rest}
      />
    </div>
  );
};

export default SearchInput;
