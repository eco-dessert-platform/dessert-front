import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import getComponentFromChildren from '@/shared/utils/getComponent';
import DropdownItem from './DropdownItem';

interface Props {
  children?: ReactNode;
  className?: string;
}

const DropdownContent = ({ children, className }: Props) => {
  const dropdownItem = getComponentFromChildren({ children, target: <DropdownItem /> });

  return (
    <div
      className={twMerge(
        'flex flex-col items-center justify-center divide-y divide-gray-100 min-w-[72px] rounded-[12px] overflow-hidden shadow',
        className
      )}
    >
      {dropdownItem}
    </div>
  );
};

export default DropdownContent;
