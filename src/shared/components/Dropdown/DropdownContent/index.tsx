import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import getComponentFromChildren from '@/shared/utils/getComponent';
import DropdownItem from './DropdownItem';

interface Props {
  children?: ReactNode;
  className?: string;
  position?: 'center' | 'left' | 'right';
}

const POSITION_CLASS = {
  center: 'left-1/2 -translate-x-1/2 ',
  left: 'right-0',
  right: 'left-0'
};

const DropdownContent = ({ children, className, position = 'center' }: Props) => {
  const dropdownItem = getComponentFromChildren({ children, target: <DropdownItem /> });

  return (
    <div
      className={twMerge(
        `absolute ${POSITION_CLASS[position]} flex flex-col items-center justify-center divide-y divide-gray-100 min-w-[72px] rounded-[10px] overflow-hidden shadow`,
        className
      )}
    >
      {dropdownItem}
    </div>
  );
};

export default DropdownContent;
