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
      'flex items-center gap-[6px] px-[16px] py-[10px] w-full rounded-[50px] ',
      warning ? 'border border-secondary-orange-red bg-secondary-pink' : 'bg-red-gray-30'
    )}
  >
    {warning ? <SearchIcon shape="red-16" /> : <SearchIcon shape="gray-16" />}
    <input
      type="text"
      className={cn(
        'flex-1 p-0 text-gray-900 border-none rounded-none outline-hidden typo-title-14-medium',
        warning ? 'bg-secondary-pink' : 'bg-red-gray-30'
      )}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      {...rest}
    />
  </div>
);

export default SearchInput;
