import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
}

const DropdownTrigger = ({ children, onClick, className }: Props) => (
  <button type="button" onClick={onClick} className={twMerge('w-full', className)}>
    {children}
  </button>
);

export default DropdownTrigger;
