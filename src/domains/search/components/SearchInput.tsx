'use client';

import { SearchIcon } from '@/shared/components/icons';
import { cn } from '@/shared/utils/cn';

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  warning?: boolean;
  onChange?: (_: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (_: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchInput = ({
  value,
  warning = false,
  onChange,
  onKeyDown,
  ...rest
}: SearchInputProps) => (
  <div
    className={cn(
      ' flex w-full items-center gap-[6px] rounded-[50px] px-[16px] py-[10px]',
      warning ? 'border-[1px] border-secondaryOrangeRed bg-secondaryPink' : 'bg-redGray-30'
    )}
  >
    {warning ? <SearchIcon shape="red-16" /> : <SearchIcon shape="gray-16" />}
    <input
      type="text"
      className={cn(
        ' typo-title-14-medium flex-1 rounded-none border-none p-0  bg-pink-500 text-gray-900 outline-hidden',
        warning ? 'bg-secondaryPink' : 'bg-redGray-30'
      )}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      {...rest}
    />
  </div>
);

export default SearchInput;
