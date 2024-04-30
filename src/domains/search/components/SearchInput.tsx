'use client';

import { Search16Icon } from '@/shared/components/icons';
import Input from '@/shared/components/Input';

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  onChange?: (_: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (_: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ value, onChange, onKeyDown, ...rest }: SearchInputProps) => (
  <div className="flex items-center gap-[6px] px-[16px] py-[10px] w-full bg-redGray-30 rounded-[50px] cursor-pointer">
    <Search16Icon />
    <Input
      type="text"
      className="flex-1 p-0 font-medium text-gray-400 border-none rounded-none outline-none bg-redGray-30 text-14 leading-150 tracking-tight-2"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      {...rest}
    />
  </div>
);

export default SearchInput;
